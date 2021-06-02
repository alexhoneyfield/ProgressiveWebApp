self.addEventListener('fetch', (e) => {
  console.log(e);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

self.__WB_MANIFEST