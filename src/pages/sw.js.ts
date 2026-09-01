import packageJson from "../../package.json";

export const prerender = true;

const pages = [
  "/",
  "/ruta/",
  "/proyectos/",
  "/comunidad/",
  "/sobre/",
  "/recursos/",
  "/criterios/",
  "/politicas/",
  "/politicas/politica-editorial/",
  "/politicas/uso-responsable-ia/",
  "/politicas/bienestar-tecnico/",
  "/politicas/publicacion-segura/",
  "/en/",
  "/en/ruta/",
  "/en/proyectos/",
  "/en/comunidad/",
  "/en/sobre/",
  "/en/recursos/",
  "/en/criterios/",
  "/en/politicas/",
  "/en/politicas/politica-editorial/",
  "/en/politicas/uso-responsable-ia/",
  "/en/politicas/bienestar-tecnico/",
  "/en/politicas/publicacion-segura/",
];

const assets = [
  "/manifest.webmanifest",
  "/assets/img/marca-simbolo-nav.png",
  "/assets/img/icon-192.png",
  "/assets/img/icon-512.png",
  "/assets/img/apple-touch-icon.png",
  "/assets/img/og-image.jpg",
];

const serviceWorker = `
const CACHE_PREFIX = "chiletedevpath-";
const CACHE_NAME = CACHE_PREFIX + ${JSON.stringify(packageJson.version)};
const PRECACHE_URLS = ${JSON.stringify([...pages, ...assets])};
const CACHEABLE_DESTINATIONS = new Set(["script", "style", "image", "font", "manifest"]);

async function cacheResponse(request, response) {
  if (response && response.status === 200) {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
  }

  return response;
}

async function fetchAndCache(cache, url) {
  const response = await fetch(new Request(url, { cache: "reload" }));

  if (!response.ok) {
    throw new Error("No se pudo precargar " + url);
  }

  await cache.put(url, response.clone());
  return response;
}

async function precacheIndividually() {
  const cache = await caches.open(CACHE_NAME);
  const linkedAssets = new Set();

  await Promise.allSettled(
    PRECACHE_URLS.map(async (url) => {
      const response = await fetchAndCache(cache, url);
      const contentType = response.headers.get("content-type") || "";

      if (!contentType.includes("text/html")) {
        return;
      }

      const html = await response.text();
      const attributePattern = /(?:href|src)="(\\/[^"#?]+)"/g;
      let match;

      while ((match = attributePattern.exec(html)) !== null) {
        const assetUrl = match[1];

        if (!assetUrl.endsWith("/")) {
          linkedAssets.add(assetUrl);
        }
      }
    })
  );

  await Promise.allSettled(
    [...linkedAssets]
      .filter((url) => !PRECACHE_URLS.includes(url))
      .map((url) => fetchAndCache(cache, url))
  );
}

async function networkFirst(request, fallbackUrl) {
  try {
    return await cacheResponse(request, await fetch(request));
  } catch {
    return (
      (await caches.match(request, { ignoreSearch: true })) ||
      (fallbackUrl ? await caches.match(fallbackUrl) : undefined) ||
      Response.error()
    );
  }
}

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);

  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    return await cacheResponse(request, await fetch(request));
  } catch {
    return Response.error();
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(precacheIndividually().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);

  if (requestUrl.origin !== self.location.origin) {
    return;
  }

  const isNavigation =
    event.request.mode === "navigate" || event.request.destination === "document";

  if (isNavigation) {
    const fallbackUrl = requestUrl.pathname.startsWith("/en/") ? "/en/" : "/";
    event.respondWith(networkFirst(event.request, fallbackUrl));
    return;
  }

  if (CACHEABLE_DESTINATIONS.has(event.request.destination)) {
    event.respondWith(cacheFirst(event.request));
  }
});
`;

export function GET() {
  return new Response(serviceWorker.trimStart(), {
    headers: {
      "Content-Type": "text/javascript; charset=utf-8",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Service-Worker-Allowed": "/",
    },
  });
}
