console.log(`Service Worker 1`);

var cacheName = '1337cache';
var cacheAssets = [
    '/',
    '/cache.db',
    '/cache.bin',

];

// Call install Event
self.addEventListener('install', e => {
    // Wait until promise is finished 
    e.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            console.log(`Service Worker: Caching Files: ${cache}`);
            cache.addAll(cacheAssets)
                // When everything is set
                .then(() => self.skipWaiting())
        })
    );
})
