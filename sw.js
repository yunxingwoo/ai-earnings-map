/* sw.js — PWA service worker
   策略: 静态资源(html/css/js/图标) cache-first; data/*.js network-first(数据必须新鲜); 失败回退缓存 */
const VERSION = 'ai-map-v1';
const STATIC = ['./','./index.html','./map.html','./styles.css','./fx.js',
  './js/calc.js','./js/render-home.js','./js/render-map.js','./js/panels-home.js','./js/panels-map.js','./js/pwa.js',
  './icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png','./manifest.webmanifest'];
const DATA = ['./data/companies.js','./data/metrics.js','./data/sources.js','./data/capacity.js','./data/fx.js','./data/calendar.js','./data/valuation.js','./data/guidance.js','./data/signals-history.js'];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(STATIC)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', e=>{
  const url = new URL(e.request.url);
  if(url.origin !== location.origin || e.request.method !== 'GET') return;
  const isData = DATA.some(d=>url.pathname.endsWith(d.replace('./','/'))) || url.pathname.includes('/data/');
  if(isData){
    // 数据文件: 网络优先,失败用缓存(离线兜底)
    e.respondWith(fetch(e.request).then(r=>{
      const cp = r.clone(); caches.open(VERSION).then(c=>c.put(e.request, cp)); return r;
    }).catch(()=>caches.match(e.request)));
  } else {
    // 静态: 缓存优先,后台更新
    e.respondWith(caches.match(e.request).then(hit=>{
      const fresh = fetch(e.request).then(r=>{ const cp=r.clone(); caches.open(VERSION).then(c=>c.put(e.request,cp)); return r; }).catch(()=>hit);
      return hit || fresh;
    }));
  }
});
