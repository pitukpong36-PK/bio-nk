/* ══════════════════════════════════════════════════════════════
   Service Worker — ศูนย์การเรียนรู้ชีววิทยา

   ⚠️ สำคัญที่สุด: แก้เนื้อหาเว็บทุกครั้ง ต้องเพิ่มเลขเวอร์ชันข้างล่างนี้ทีละหนึ่ง
      ไม่งั้นคนที่เคยเปิดเว็บแล้วจะเห็นของเก่าค้างจากแคช
   ══════════════════════════════════════════════════════════════ */
const CACHE = 'bio-nk-v1';

/* ไฟล์ที่ต้องมีเสมอ — เก็บไว้ตอนติดตั้ง เพื่อให้เปิดออฟไลน์ได้ทันที */
const CORE = [
  './',
  './index.html',
  './css/fonts.css',
  './css/main.css',
  './js/app.js',
  './data/meta.js',
  './data/search.js',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './fonts/Prompt-500-thai.woff2',
  './fonts/Prompt-600-thai.woff2',
  './fonts/Prompt-700-thai.woff2',
  './fonts/Sarabun-400-thai.woff2',
  './fonts/Sarabun-600-thai.woff2',
  './fonts/Sarabun-700-thai.woff2',
  './fonts/Prompt-500-latin.woff2',
  './fonts/Prompt-600-latin.woff2',
  './fonts/Prompt-700-latin.woff2',
  './fonts/Sarabun-400-latin.woff2',
  './fonts/Sarabun-600-latin.woff2',
  './fonts/Sarabun-700-latin.woff2'
];

/* เนื้อหาบท + คลังโจทย์ ไม่ precache (ใหญ่) แต่เก็บไว้หลังเปิดครั้งแรก */
const LAZY = /\/data\/(vol\d+|quiz)\.js$/;

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // ลิงก์ภายนอกปล่อยผ่าน

  const isPage = req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html');

  if (isPage) {
    /* หน้าเว็บ: เอาของใหม่ก่อน ถ้าเน็ตไม่มีค่อยใช้แคช */
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  /* ไฟล์อื่น (css/js/data/fonts): ใช้แคชก่อน เร็วกว่าและออฟไลน์ได้ */
  e.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        if (res.ok && (LAZY.test(url.pathname) || res.type === 'basic')) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      });
    })
  );
});
