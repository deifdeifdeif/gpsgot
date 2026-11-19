const C="gpsgot-8808b056c7";
const F=["./","index.html","manifest.webmanifest","icono-180.png","icono-192.png","icono-512.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(F)));});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const u=new URL(e.request.url); if(u.origin!==location.origin) return;
 e.respondWith(fetch(e.request).then(r=>{const cp=r.clone(); caches.open(C).then(c=>c.put(e.request,cp)); return r;}).catch(()=>caches.match(e.request,{ignoreSearch:true})));});
