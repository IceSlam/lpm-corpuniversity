var updated = [
"https://lpm.onereq.ml/sw.js"
];
const version = "1.17.1";
const CACHE = "lpm-cache" + version;
self.addEventListener('install', function(event) {
var indexPage = new Request('index.html');
event.waitUntil(fetch(indexPage).then(function(response) {
var response2 = response.clone();
return caches.open(CACHE).then(function(cache) {
console.log('[OneRequest: ServiceWorker Module] Кэширована страница во время установки ' + response2.url);
return cache.put(indexPage, response2)
})
}))
});
self.addEventListener('fetch', function(event) {
var updateCache = function(request) {
return caches.open(CACHE).then(function(cache) {
return fetch(request).then(
			function(response2 = response.clone()) {
				if (updated.indexOf(response2.url) != -1){
					console.log('[OneRequest: ServiceWorker Module] Исключен из кеша ' + response2.url)
				}else{
					console.log('[OneRequest: ServiceWorker Module] Добавлен ресурс в кэш ' + response2.url)
					return cache.put(request.clone(), response2)
				}
            })
})
};
event.waitUntil(updateCache(event.request));
event.respondWith(fetch(event.request).catch(function(error) {
console.log('[OneRequest: ServiceWorker Module] Запрос к сети не удался. Выгрузка контента из кэша: ' + error);
return caches.open(CACHE).then(function(cache) {
return cache.match(event.request).then(function(matching) {
var report = !matching || matching.status == 404 ? Promise.reject('no-match') : matching;
return report
})
})
}))
})
