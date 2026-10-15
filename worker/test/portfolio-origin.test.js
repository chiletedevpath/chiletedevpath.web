import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import worker from "../src/index.js";
const { vars } = JSON.parse(readFileSync(new URL("../wrangler.jsonc", import.meta.url), "utf8"));
test("el Worker conserva el origen principal sin conectar el portafolio", async () => {
  for (const origin of ["https://chiletedevpath.com"]) {
    const response = await worker.fetch(
      new Request("https://example.test/api/contacto", {
        method: "OPTIONS",
        headers: { Origin: origin },
      }),
      vars,
    );
    assert.equal(response.status, 204);
    assert.equal(response.headers.get("Access-Control-Allow-Origin"), origin);
  }
  const denied = await worker.fetch(
    new Request("https://example.test/api/contacto", {
      method: "OPTIONS",
      headers: { Origin: "https://portafolio.chiletedevpath.com" },
    }),
    vars,
  );
  assert.equal(denied.status, 403);
});
