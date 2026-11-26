const C = "mahal-v2";
const A = ['fonts/fonts.css','fonts/Cairo-arabic.woff2','fonts/Cairo-latin.woff2',"./", "index.html", "style.css", "app.js", "data.js", "logo.svg", "favicon.svg", "icon-192.png", "icon-512.png", "manifest.webmanifest"];
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(A))); self.skipWaiting(); });
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== C).map(x => caches.delete(x))))));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(n => {
    const cp = n.clone(); caches.open(C).then(c => c.put(e.request, cp)).catch(() => {}); return n;
  }).catch(() => caches.match("index.html"))));
});
