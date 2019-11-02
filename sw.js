// // 캐싱 스토리지에 저장될 파일 이름
// var CACHE_NAME = 'pwa-offline-v1';
// // 캐싱할 웹 자원(이미지, css 등)의 목록
// var filesToCache = [
//   '/',
//   '/css/app.css',
//   '/images/gauntlet.jpg',
//   '/images/hammer.png',
//   '/images/refresh.svg',
//   '/images/shield.png',
//   '/favicon.png',
// ];

var CACHE_NAME = 'pwa-offline-v2';
var filesToCache = ['/', '/css/app.css'];

// 서비스 워커 설치(웹 자원 캐싱) / self === window 객체
self.addEventListener('install', function(event) {
  console.log('Service Worker Install');
  // console.log('Service Worker Install', event);
  // 캐싱 설치 완료를 기다리기 위한 event.waitUntil() 구현
  event.waitUntil(
    caches
      .open(CACHE_NAME) // pwa 파일
      .then(function(cache) {
        // 생성한 캐싱에 웹 자원들 추가
        return cache.addAll(filesToCache);
      })
      .catch(function(error) {
        return console.log('Service Worker Install', error);
      }),
  );
});

self.addEventListener('fetch', function(event) {
  console.log('Service Worker Fetch');
  // console.log('Service Worker Fetch', event.request);
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
      .catch(function(error) {
        return console.log('Service Worker Fetch', error);
      }),
  );
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker Activate');
  var newCacheList = ['pwa-offline-v2'];

  event.waitUntil(
    caches
      .keys()
      .then(function(cacheList) {
        return Promise.all(
          cacheList.map(function(cacheName) {
            console.log('Service Worker Activate [cacheName] : ', cacheName);
            if (newCacheList.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .catch(function(error) {
        return console.log(error);
      }),
  );
});
