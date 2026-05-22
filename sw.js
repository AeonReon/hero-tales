// Hero Tales — minimal SW.
// Cache first for the shell + library JSON. Bump CACHE_VERSION on deploys with breaking changes.

const CACHE = 'hero-tales-v1';
const ASSETS = [
  './',
  'index.html',
  'story.html',
  'assets/style.css',
  'assets/app.js',
  'assets/story.js',
  'stories/library.json',
  'stories/bodies.json',
  'manifest.json',
  'icon-192.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // Always go to network for build-stamp; it's the cache-busting signal.
  if (url.pathname.endsWith('build-stamp.json')) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) {
        // Revalidate in background
        fetch(e.request).then(res => {
          if (res && res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        }).catch(() => {});
        return cached;
      }
      return fetch(e.request).then(res => {
        if (res && res.ok && e.request.method === 'GET') {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
