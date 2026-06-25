const CACHE_VERSION = "chiletedevpath-v3-1";
const STATIC_ASSETS = [
  "/",
  "/sobre/",
  "/ruta/",
  "/proyectos/",
  "/recursos/",
  "/criterios/",
  "/comunidad/",
  "/manifest.webmanifest",
  "/assets/img/marca-simbolo-nav.png",
  "/assets/img/icon-192.png",
  "/assets/img/icon-512.png",
  "/assets/img/og-image.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, responseToCache));
        return networkResponse;
      });
    })
  );
});
