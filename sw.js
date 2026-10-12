const CACHE = 'natal-2026-v3';
const CORE = [
  './', './index.html', './credits.html', './styles.css?v=3', './app.js?v=3', './storage.js?v=2', './manifest.json',
  './assets/icon-192.png', './assets/icon-512.png',
  './assets/images/vienna-stephansdom.jpg', './assets/images/vienna-belvedere.jpg',
  './assets/images/prague-old-town-market.jpg', './assets/images/prague-st-vitus.jpg',
  './assets/images/prague-lennon-wall.jpg', './assets/images/prague-charles-bridge.jpg', './assets/images/prague-powder-tower.jpg',
  './assets/images/budapest-parliament-night.jpg', './assets/images/budapest-chain-bridge.jpg', './assets/images/budapest-fishermans-bastion.jpg', './assets/images/budapest-heroes-square.jpg',
  './assets/images/bratislava-castle-market.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    if (response.ok && new URL(event.request.url).origin === self.location.origin) {
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(event.request, copy));
    }
    return response;
  }).catch(() => caches.match('./index.html'))));
});
