import assert from "node:assert/strict";
import test from "node:test";
import worker, { buildEmailMessage, validateContactPayload } from "../src/index.js";

const validPayload = {
  context: "resources",
  lang: "es",
  name: "Adrián Pisco",
  email: "ADRIAN@example.com",
  subject: "Práctica de arreglos",
  type: "Ejercicio",
  topic: "Java",
  message: "Sería útil agregar una práctica gradual sobre arreglos.",
  confirmation: true,
  website: "",
  turnstileToken: "test-token",
};

test("normaliza un contacto válido", () => {
  const result = validateContactPayload(validPayload);
  assert.equal(result.ok, true);
  assert.equal(result.value.email, "adrian@example.com");
  assert.equal(result.value.context, "resources");
});

test("rechaza contextos, correos y mensajes inválidos", () => {
  assert.equal(validateContactPayload({ ...validPayload, context: "admin" }).ok, false);
  assert.equal(validateContactPayload({ ...validPayload, email: "correo-invalido" }).ok, false);
  assert.equal(validateContactPayload({ ...validPayload, message: "Muy corto" }).ok, false);
});

test("el mensaje enviado conserva el contexto sin incluir el token", () => {
  const { value } = validateContactPayload(validPayload);
  const message = buildEmailMessage(value);
  assert.match(message, /Sugerencia de recurso/);
  assert.match(message, /Práctica de arreglos/);
  assert.doesNotMatch(message, /test-token/);
});

const workerEnv = (rateLimitSuccess = true) => ({
  ALLOWED_ORIGINS: "https://chiletedevpath.com",
  TURNSTILE_HOSTNAMES: "chiletedevpath.com",
  TURNSTILE_SECRET: "test-secret",
  EMAILJS_SERVICE_ID: "test-service",
  EMAILJS_TEMPLATE_ID: "test-template",
  EMAILJS_PUBLIC_KEY: "test-public-key",
  CONTACT_RATE_LIMITER: {
    limit: async () => ({ success: rateLimitSuccess }),
  },
});

const contactRequest = (body, origin = "https://chiletedevpath.com") => new Request(
  "https://chiletedevpath.com/api/contacto",
  {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: origin },
    body: JSON.stringify(body),
  },
);

test("rechaza orígenes ajenos antes de procesar el mensaje", async () => {
  const response = await worker.fetch(contactRequest(validPayload, "https://example.com"), workerEnv());
  assert.equal(response.status, 403);
});

test("el honeypot responde sin consumir el servicio de correo", async () => {
  const response = await worker.fetch(contactRequest({ website: "spam.example" }), workerEnv());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
});

test("devuelve 429 antes de validar Turnstile cuando se supera el límite", async () => {
  const response = await worker.fetch(contactRequest(validPayload), workerEnv(false));
  assert.equal(response.status, 429);
  assert.equal((await response.json()).code, "RATE_LIMITED");
});

test("valida Turnstile y entrega un mensaje normalizado a EmailJS", async (context) => {
  const originalFetch = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url: String(url), options });
    if (String(url).includes("siteverify")) {
      return Response.json({ success: true, action: "contact", hostname: "chiletedevpath.com" });
    }
    return new Response("OK", { status: 200 });
  };
  context.after(() => {
    globalThis.fetch = originalFetch;
  });

  const response = await worker.fetch(contactRequest(validPayload), workerEnv());
  assert.equal(response.status, 200);
  assert.equal(calls.length, 2);
  assert.match(calls[0].url, /siteverify/);
  assert.match(calls[1].url, /emailjs/);

  const emailBody = JSON.parse(calls[1].options.body);
  assert.equal(emailBody.service_id, "test-service");
  assert.equal(emailBody.template_params.email, "adrian@example.com");
  assert.doesNotMatch(emailBody.template_params.message, /test-token/);
});
