// Hero Tales — service worker.
// Cache-first for the shell and the library JSON, with a background
// revalidate. Bump CACHE on every ship so a stale shell cannot survive.

const CACHE = 'hero-tales-v12';
const ASSETS = [
  './',
  'index.html',
  'tales.html',
  'chronicles.html',
  'chronicle.html',
  'story.html',
  'keep.html',
  'random.html',
  'curate.html',
  'assets/shell.css',
  'assets/style.css',
  'assets/shell.js',
  'assets/home.js',
  'assets/tales.js',
  'assets/chronicles.js',
  'assets/chronicle.js',
  'assets/story.js',
  'assets/keep.js',
  'assets/curate.js',
  'assets/tts.js',
  'assets/daily-data.js',
  'assets/feats-data.js',
  'assets/stands-data.js',
  'assets/ledger-data.js',
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
