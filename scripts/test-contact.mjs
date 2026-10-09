import assert from "node:assert/strict";
import test from "node:test";
import { CONTACT_TIMEOUT_MS, sendContact } from "../src/scripts/contact-request.js";

test("el cliente permite los 18 segundos de servicios y margen de red", () => {
  assert.ok(CONTACT_TIMEOUT_MS > 8_000 + 10_000);
});

test("solo confirma una respuesta explicita del Worker", async () => {
  await sendContact("https://example.com", {}, async () => Response.json({ ok: true }));
  await assert.rejects(sendContact("https://example.com", {}, async () => Response.json({})),
    { code: "DELIVERY_FAILED" });
});

test("conserva el codigo de limite y no lo presenta como exito", async () => {
  await assert.rejects(sendContact("https://example.com", {}, async () =>
    Response.json({ code: "RATE_LIMITED" }, { status: 429 })), { code: "RATE_LIMITED" });
});

test("conserva la entrega no confirmada informada por el Worker", async () => {
  await assert.rejects(sendContact("https://example.com", {}, async () =>
    Response.json({ code: "DELIVERY_UNCONFIRMED" }, { status: 502 })),
    { code: "DELIVERY_UNCONFIRMED" });
});

test("distingue una entrega incierta por aborto o perdida de conexion", async () => {
  for (const error of [new DOMException("Timeout", "AbortError"), new TypeError("Network error")]) {
    await assert.rejects(sendContact("https://example.com", {}, async () => { throw error; }),
      { code: "DELIVERY_UNCONFIRMED" });
  }
});
