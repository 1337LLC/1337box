// sw.js
      console.log('sw.js');

const CACHE_NAME = 'my-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/images/logo.png'
];

self.addEventListener('install', (event) => {
  console.log('Service Worker installing');

  // Pre-cache critical assets
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching app assets');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );

  // Skip waiting to activate immediately
  self.skipWaiting();
});
