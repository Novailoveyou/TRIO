importScripts('cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('potolki-trio').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.html?homescreen=1',
       '/js/materialize.min.js',
       '/css/main.css',
       '/css/materialize.min.css'
     ]);
   })
 );
});


self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});