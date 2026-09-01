const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const EMAILJS_SEND_URL = "https://api.emailjs.com/api/v1.0/email/send";
const MAX_REQUEST_BYTES = 12_000;
const VALID_CONTEXTS = new Set(["home", "community", "resources"]);
const VALID_LANGUAGES = new Set(["es", "en"]);

const json = (body, status, origin = "") => new Response(JSON.stringify(body), {
  status,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    ...(origin ? { "Access-Control-Allow-Origin": origin, Vary: "Origin" } : {}),
  },
});

const cleanText = (value, maxLength) => {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
};

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const validateContactPayload = (input) => {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false };
  }

  const value = {
    context: cleanText(input.context, 20),
    lang: cleanText(input.lang, 2),
    name: cleanText(input.name, 80),
    email: cleanText(input.email, 120).toLowerCase(),
    subject: cleanText(input.subject, 120),
    type: cleanText(input.type, 80),
    topic: cleanText(input.topic, 120),
    message: cleanText(input.message, 700),
    website: cleanText(input.website, 120),
    turnstileToken: cleanText(input.turnstileToken, 2048),
    confirmation: input.confirmation === true,
  };

  const valid =
    VALID_CONTEXTS.has(value.context) &&
    VALID_LANGUAGES.has(value.lang) &&
    value.name.length >= 2 &&
    isEmail(value.email) &&
    value.subject.length >= 4 &&
    value.type.length >= 2 &&
    value.message.length >= 20 &&
    value.confirmation &&
    value.turnstileToken.length > 0;

  return valid ? { ok: true, value } : { ok: false };
};

const contextLabels = {
  es: { home: "Contacto desde Inicio", community: "Feedback de comunidad", resources: "Sugerencia de recurso" },
  en: { home: "Contact from Home", community: "Community feedback", resources: "Resource suggestion" },
};

export const buildEmailMessage = (payload) => [
  `Contexto: ${contextLabels[payload.lang][payload.context]}`,
  `Idioma: ${payload.lang.toUpperCase()}`,
  `Nombre: ${payload.name}`,
  `Correo: ${payload.email}`,
  `Asunto: ${payload.subject}`,
  `Tipo: ${payload.type}`,
  payload.topic ? `Tema: ${payload.topic}` : "",
  `Mensaje: ${payload.message}`,
].filter(Boolean).join("\n");

const splitList = (value) => new Set(
  String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean),
);

const validateTurnstile = async (payload, request, env) => {
  const response = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: env.TURNSTILE_SECRET,
      response: payload.turnstileToken,
      remoteip: request.headers.get("CF-Connecting-IP") || undefined,
      idempotency_key: crypto.randomUUID(),
    }),
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) return false;
  const result = await response.json();
  const expectedHostnames = splitList(env.TURNSTILE_HOSTNAMES);
  return result.success === true && result.action === "contact" && expectedHostnames.has(result.hostname);
};

const rateLimitKey = async (request, email) => {
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const data = new TextEncoder().encode(`${ip}:${email}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
};

const sendWithEmailJs = async (payload, env) => {
  const response = await fetch(EMAILJS_SEND_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: env.EMAILJS_SERVICE_ID,
      template_id: env.EMAILJS_TEMPLATE_ID,
      user_id: env.EMAILJS_PUBLIC_KEY,
      template_params: {
        name: payload.name,
        email: payload.email,
        title: payload.subject,
        message: buildEmailMessage(payload),
      },
    }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    console.error("EmailJS delivery failed", { status: response.status });
    return false;
  }

  return true;
};

const corsResponse = (origin) => new Response(null, {
  status: 204,
  headers: {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  },
});

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const allowedOrigins = splitList(env.ALLOWED_ORIGINS);

    if (url.pathname !== "/api/contacto") return json({ code: "NOT_FOUND" }, 404);
    if (!allowedOrigins.has(origin)) return json({ code: "ORIGIN_REJECTED" }, 403);
    if (request.method === "OPTIONS") return corsResponse(origin);
    if (request.method !== "POST") return json({ code: "METHOD_NOT_ALLOWED" }, 405, origin);

    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength > MAX_REQUEST_BYTES) return json({ code: "PAYLOAD_TOO_LARGE" }, 413, origin);
    if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json")) {
      return json({ code: "UNSUPPORTED_MEDIA_TYPE" }, 415, origin);
    }

    let input;
    try {
      const text = await request.text();
      if (new TextEncoder().encode(text).byteLength > MAX_REQUEST_BYTES) {
        return json({ code: "PAYLOAD_TOO_LARGE" }, 413, origin);
      }
      input = JSON.parse(text);
    } catch {
      return json({ code: "INVALID_PAYLOAD" }, 400, origin);
    }

    if (cleanText(input?.website, 120)) return json({ ok: true }, 200, origin);

    const validation = validateContactPayload(input);
    if (!validation.ok) return json({ code: "INVALID_PAYLOAD" }, 400, origin);

    const key = await rateLimitKey(request, validation.value.email);
    const rateLimit = await env.CONTACT_RATE_LIMITER.limit({ key });
    if (!rateLimit.success) return json({ code: "RATE_LIMITED" }, 429, origin);

    let turnstileValid = false;
    try {
      turnstileValid = await validateTurnstile(validation.value, request, env);
    } catch (error) {
      console.error("Turnstile validation failed", { name: error?.name || "Error" });
    }
    if (!turnstileValid) return json({ code: "TURNSTILE_REJECTED" }, 403, origin);

    let delivered = false;
    try {
      delivered = await sendWithEmailJs(validation.value, env);
    } catch (error) {
      console.error("Email delivery request failed", { name: error?.name || "Error" });
    }
    if (!delivered) return json({ code: "DELIVERY_FAILED" }, 502, origin);

    return json({ ok: true }, 200, origin);
  },
};
