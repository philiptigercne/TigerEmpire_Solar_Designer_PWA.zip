/* Tiger Empire Solar Designer — offline cache service worker */
const CACHE_NAME = 'tiger-empire-solar-designer-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Never intercept cross-origin requests (e.g. a future Google Sign-In / Drive API call) —
  // those must always go straight to the network, never through this app's cache.
  if (url.origin !== self.location.origin) return;

  // Navigation / the app shell: network-first, so updates show up as soon as you're online,
  // falling back to the cached copy when offline.
  if (req.mode === 'navigate' || url.pathname.endsWith('/index.html') || url.pathname === '/' ) {
    event.respondWith(
      fetch(req).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return response;
      }).catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  // Everything else (icons, manifest): cache-first, updating in the background.
  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((response) => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return response;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
