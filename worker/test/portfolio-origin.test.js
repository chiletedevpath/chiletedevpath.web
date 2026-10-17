import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import worker from "../src/index.js";
const { vars } = JSON.parse(readFileSync(new URL("../wrangler.jsonc", import.meta.url), "utf8"));
test("el Worker admite la web y el portafolio, y rechaza otros orígenes", async () => {
  for (const origin of ["https://chiletedevpath.com", "https://portafolio.chiletedevpath.com"]) {
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
      headers: { Origin: "https://portafolio.chiletedevpath.com.example.test" },
    }),
    vars,
  );
  assert.equal(denied.status, 403);
});
