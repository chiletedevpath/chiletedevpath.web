const CACHE_VERSION = "chiletedevpath-v4-10-2";

const STATIC_ASSETS = [
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
  "/manifest.webmanifest",
  "/assets/img/marca-simbolo-nav.png",
  "/assets/img/icon-192.png",
  "/assets/img/icon-512.png",
  "/assets/img/og-image.jpg",
];

const CACHEABLE_DESTINATIONS = new Set([
  "document",
  "script",
  "style",
  "image",
  "font",
  "manifest",
]);

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_VERSION)
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

  if (!isNavigation && !CACHEABLE_DESTINATIONS.has(event.request.destination)) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches
          .open(CACHE_VERSION)
          .then((cache) => cache.put(event.request, responseToCache));

        return networkResponse;
      })
      .catch(() =>
        caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return isNavigation ? caches.match("/") : undefined;
        })
      )
  );
});
