self.addEventListener('fetch', (e) => {
  e.request.url = '/build/' + e.request.url
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

self.__WB_MANIFEST