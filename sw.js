const CACHE = "project-46-v11";
const ASSETS = ["./", "./index.html", "./styles.css?v=11", "./app.js?v=11", "./sync.js?v=11", "./config.js?v=11", "./manifest.webmanifest", "./icon.svg", "./assets/exercises/workout-a.png", "./assets/exercises/workout-b.png", "./assets/exercises/workout-c.png"];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (event) => event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request))));
