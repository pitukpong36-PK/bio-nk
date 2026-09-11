/* ============================================================
   เฟส 2 — โหลดข้อมูลแบบแยกไฟล์
   เนื้อหาบทอยู่ใน data/vol1..6.js · โจทย์อยู่ใน data/quiz.js
   โหลดด้วยการแทรก <script> (ไม่ใช้ fetch) เพื่อให้ยังดับเบิลคลิกเปิด
   จากเครื่องได้ — fetch ถูกเบราว์เซอร์บล็อกเมื่อเปิดแบบ file://
   ============================================================ */
window.BIO = window.BIO || {};
BIO.CH = BIO.CH || {};

const Loader = {
  _p: {},
  load(src) {
    if (this._p[src]) return this._p[src];
    this._p[src] = new Promise(function (res, rej) {
      const el = document.createElement('script');
      el.src = src;
      el.onload = function () { res(); };
      el.onerror = function () { rej(new Error('โหลด ' + src + ' ไม่สำเร็จ')); };
      document.head.appendChild(el);
    });
    return this._p[src];
  },
  vol(v) { return this.load('data/vol' + v + '.js'); },
  quiz() { return this.load('data/quiz.js'); },
  chapter(cid) {
    const m = BIO.META[cid];
    return m ? this.vol(m.v) : Promise.reject(new Error('ไม่รู้จักบท ' + cid));
  }
};

/* หัวบทใน META ใช้ชื่อฟิลด์ย่อเพื่อประหยัดขนาด — สองฟังก์ชันนี้แปลงให้อ่านง่าย */
function chapMeta(cid) {
  const m = BIO.META[cid];
  return m ? { subject:m.s, colorClass:m.c, badge:m.b, title:m.t, meta:m.m, vol:m.v, nProblems:m.np || 0 } : null;
}
function chapLabel(cid) {
  const m = BIO.META[cid];
  return m ? ((m.b ? m.b + ' ' : '') + m.t) : cid;
}


/* ===== NAVIGATION ===== */
function showPage(pageId) {
  softSwap(function () {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => { l.classList.remove('active'); l.removeAttribute('aria-current'); });
    const page = document.getElementById('page-' + pageId);
    if (page) page.classList.add('active');
    const navBtn = document.getElementById('nav-' + pageId);
    if (navBtn) { navBtn.classList.add('active'); navBtn.setAttribute('aria-current', 'page'); }
    BotNav.sync(pageId);
    if (pageId === 'welcome') updateResume();
    if (pageId === 'media') Media.load();
  });
  window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' });
}

let currentChapter = null;

function showChapter(chapterId) {
  const ch = chapMeta(chapterId);
  if (!ch) return;
  currentChapter = chapterId;
  document.getElementById('page-chapter').className = 'page ' + ch.colorClass;
  document.getElementById('crumb-subject').textContent = ch.subject;
  document.getElementById('crumb-chapter').textContent = ch.badge;
  document.getElementById('chap-badge').textContent = ch.badge + ' · ' + ch.subject;
  document.getElementById('chap-title').textContent = ch.title;
  document.getElementById('chap-meta').textContent = ch.meta;
  const body = document.getElementById('chap-body');
  body.innerHTML = '<div class="skel"><div class="skel-line w45"></div><div class="skel-line w90"></div>' +
    '<div class="skel-line"></div><div class="skel-box"></div><div class="skel-line w70"></div>' +
    '<div class="skel-line"></div><div class="skel-line w45"></div></div>';
  Store.data.last = chapterId;
  Store.save();
  Loader.chapter(chapterId).then(function () {
    if (currentChapter !== chapterId) return;   // ผู้ใช้เปลี่ยนบทระหว่างรอ
    body.innerHTML = BIO.CH[chapterId] || '';
    wrapTables(body);
  }).catch(function (e) {
    if (currentChapter !== chapterId) return;
    body.innerHTML = '<div class="content-section"><h3>⚠️ โหลดเนื้อหาไม่สำเร็จ</h3><p>' + e.message +
      '</p><p>ตรวจว่าโฟลเดอร์ <strong>data/</strong> อยู่ข้าง ๆ ไฟล์ index.html ครบถ้วน</p></div>';
  });
  // update mark done button
  const btn = document.getElementById('markDoneBtn');
  if (progress[chapterId]) {
    btn.classList.add('done');
    btn.textContent = '✓ เรียนแล้ว · กดเพื่อยกเลิก';
  } else {
    btn.classList.remove('done');
    btn.textContent = '✓ ทำเครื่องหมายว่าเรียนแล้ว';
  }
  showPage('chapter');
}

/* ===== PROGRESS CHECKLIST (บันทึกลง localStorage) ===== */
/* ===== เฟส 4: ที่เก็บข้อมูลถาวร (localStorage) ===== */
const STORE_KEY = 'bio-nk-v1';
const Store = {
  data: { progress:{}, srs:{}, streak:{ last:'', days:0 }, student:{ name:'' }, stats:{ sessions:0, graded:0 } },
  ok: true,
  load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const d = JSON.parse(raw);
        if (d && typeof d === 'object') {
          this.data.progress = d.progress || {};
          this.data.srs      = d.srs      || {};
          this.data.streak   = d.streak   || { last:'', days:0 };
          this.data.student  = d.student  || { name:'' };
          this.data.stats    = d.stats    || { sessions:0, graded:0 };
        }
      }
    } catch (e) { this.ok = false; }
  },
  save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(this.data)); }
    catch (e) { this.ok = false; }
    /* ถ้าล็อกอินอยู่ ส่งขึ้นคลาวด์ด้วย (หน่วงไว้ ไม่ยิงถี่) */
    if (typeof Cloud !== 'undefined' && Cloud.on) Cloud.pushSoon();
  },
  today() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
  },
  touchStreak() {
    const t = this.today(), s = this.data.streak;
    if (s.last === t) return;
    const y = new Date(Date.now() - 86400000);
    const yStr = y.getFullYear() + '-' + String(y.getMonth()+1).padStart(2,'0') + '-' + String(y.getDate()).padStart(2,'0');
    s.days = (s.last === yStr) ? (s.days || 0) + 1 : 1;
    s.last = t;
    this.save();
  }
};
Store.load();
const progress = Store.data.progress;

const TOTAL_CHAPTERS = Object.keys(BIO.META).length;

function toggleDone() {
  if (!currentChapter) return;
  progress[currentChapter] = !progress[currentChapter];
  const btn = document.getElementById('markDoneBtn');
  if (progress[currentChapter]) {
    btn.classList.add('done');
    btn.textContent = '✓ เรียนแล้ว · กดเพื่อยกเลิก';
  } else {
    btn.classList.remove('done');
    btn.textContent = '✓ ทำเครื่องหมายว่าเรียนแล้ว';
  }
  Store.save();
  updateProgressUI();
}

function updateProgressUI() {
  const done = Object.values(progress).filter(Boolean).length;
  const pct = Math.round(done / TOTAL_CHAPTERS * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent =
    done === 0 ? 'เริ่มต้นเรียนรู้ได้เลย!' :
    'เรียนแล้ว ' + done + ' / ' + TOTAL_CHAPTERS + ' บท (' + pct + '%)';
  // update check marks on home
  Object.keys(BIO.META).forEach(cid => {
    const el = document.getElementById('chk-' + cid);
    if (el) el.textContent = progress[cid] ? '✓' : '';
    if (el) el.style.color = 'var(--green-d)';
  });
}

function resetProgress() {
  if (!confirm('ต้องการรีเซ็ตความก้าวหน้าทั้งหมด?')) return;
  Object.keys(progress).forEach(k => delete progress[k]);
  Store.save();
  updateProgressUI();
}

/* ===== SEARCH ===== */
const searchBox = document.getElementById('searchBox');
if (searchBox) {
  searchBox.addEventListener('input', function(e) {
    const q = e.target.value.trim().toLowerCase();
    Search.run(e.target.value);
    document.querySelectorAll('.subject-card').forEach(card => {
      const keys = (card.dataset.keys || '').toLowerCase();
      const titles = Array.from(card.querySelectorAll('.chapter-link'))
        .map(el => el.textContent.toLowerCase()).join(' ');
      const matches = !q || keys.includes(q) || titles.includes(q);
      card.style.display = matches ? '' : 'none';
      // highlight matching chapter
      card.querySelectorAll('.chapter-link').forEach(link => {
        const lt = link.textContent.toLowerCase();
        if (q && lt.includes(q)) {
          link.style.background = 'var(--green-l)';
          link.style.borderRadius = '8px';
          link.style.padding = '6px 8px';
        } else {
          link.style.background = '';
          link.style.padding = '6px 0';
        }
      });
    });
  });
}


/* ============================================================
   เฟส 4 — คลังโจทย์ + ระบบทบทวนแบบเว้นช่วง (SRS) + แดชบอร์ด
   คลังโจทย์สร้างจากเนื้อหาบทด้วย _build/build.py — เนื้อหาบทยังเป็นแหล่งความจริงเดียว
   แก้เนื้อหาใน data/vol*.js แล้วรัน build.py ใหม่ โจทย์จะอัปเดตตาม
   ============================================================ */

const QuizBank = {
  items: [],        // { id, cid, chapTitle, subject, badge, topic, title, stem, ans }
  byChapter: {},    // cid -> [item]
  built: false,
  /* ข้อมูลโจทย์อยู่ใน data/quiz.js (โหลดเมื่อเปิดแบบทดสอบ) — ดูวิธีสร้างที่ _build/build.py */
  ready() {
    const self = this;
    return Loader.quiz().then(function () { self.build(); });
  },
  build() {
    if (this.built || !BIO.PROBLEMS) return;
    const self = this;
    BIO.PROBLEMS.forEach(function (p) {
      const m = BIO.META[p.c] || {};
      const item = {
        id: p.id, cid: p.c,
        chapTitle: m.t || p.c, subject: m.s || '', badge: m.b || '',
        topic: p.tp || '', title: p.t, stem: p.q, ans: p.a
      };
      self.items.push(item);
      (self.byChapter[p.c] = self.byChapter[p.c] || []).push(item);
    });
    this.built = true;
  },
  /* จำนวนโจทย์ต่อบท ใช้ได้ทันทีจาก META โดยไม่ต้องโหลด quiz.js */
  count(cid) { const m = BIO.META[cid]; return m ? (m.np || 0) : 0; },
  total() { return Object.keys(BIO.META).reduce((a, c) => a + QuizBank.count(c), 0); },
  get(id) { return this.items.find(x => x.id === id); }
};

/* ---------- ตัวจัดตารางทบทวน (SM-2 แบบย่อ) ---------- */
const DAY = 86400000;
const SRS = {
  blank() { return { ease: 2.5, iv: 0, due: 0, reps: 0, lapses: 0, last: 0 }; },
  rec(id) { return Store.data.srs[id]; },
  apply(id, g) {
    const r = Store.data.srs[id] || this.blank();
    r.reps++; r.last = Date.now();
    if (g === 0) {
      r.lapses++; r.ease = Math.max(1.3, r.ease - 0.2); r.iv = 0; r.due = Date.now();
    } else if (g === 1) {
      r.ease = Math.max(1.3, r.ease - 0.15);
      r.iv = r.iv ? Math.max(1, Math.round(r.iv * 1.2)) : 1;
      r.due = Date.now() + r.iv * DAY;
    } else {
      r.ease = Math.min(2.8, r.ease + 0.1);
      r.iv = r.iv === 0 ? 1 : (r.iv === 1 ? 3 : Math.round(r.iv * r.ease));
      r.due = Date.now() + r.iv * DAY;
    }
    Store.data.srs[id] = r;
    return r;
  },
  isDue(id)      { const r = this.rec(id); return !!r && r.due <= Date.now(); },
  isNew(id)      { return !this.rec(id); },
  isMastered(id) { const r = this.rec(id); return !!r && r.iv >= 21; }
};

/* ---------- ตัวคุมแบบทดสอบ ---------- */
const SESSION_SIZE = 20;
const Quiz = {
  queue: [], pos: 0, res: { 0:0, 1:0, 2:0 }, selected: {},

  /* -- หน้าเลือกโหมด -- */
  home() {
    document.getElementById('q-setup').style.display = '';
    document.getElementById('q-run').style.display = 'none';
    document.getElementById('q-done').style.display = 'none';
    this.renderChapterList();          // ใช้ META ได้ทันที ไม่ต้องรอคลังโจทย์
    ['q-n-due','q-n-new','q-n-weak','q-n-all'].forEach(function (id) {
      const el = document.getElementById(id); if (el) el.textContent = 'กำลังโหลด…';
    });
    const self = this;
    QuizBank.ready().then(function () { self.refreshCounts(); }).catch(function (e) { self.loadError(e); });
  },
  loadError(e) {
    const box = document.getElementById('q-setup');
    if (box && !document.getElementById('q-load-err')) {
      const d = document.createElement('div');
      d.id = 'q-load-err'; d.className = 'q-warn';
      d.textContent = '⚠️ โหลดคลังโจทย์ไม่สำเร็จ (' + e.message + ') — ตรวจว่ามีไฟล์ data/quiz.js อยู่';
      box.insertBefore(d, box.firstChild);
    }
  },
  pools() {
    const all  = QuizBank.items;
    const due  = all.filter(i => SRS.isDue(i.id));
    const nw   = all.filter(i => SRS.isNew(i.id));
    const weak = all.filter(i => { const r = SRS.rec(i.id); return r && r.lapses > 0; })
                    .sort((a,b) => SRS.rec(b.id).lapses - SRS.rec(a.id).lapses);
    return { all, due, nw, weak };
  },
  refreshCounts() {
    const p = this.pools();
    const set = (id, n) => { const el = document.getElementById(id); if (el) el.textContent = n + ' ข้อ'; };
    set('q-n-due', p.due.length); set('q-n-new', p.nw.length);
    set('q-n-weak', p.weak.length); set('q-n-all', p.all.length);
    const dis = (id, cond) => { const el = document.getElementById(id); if (el) el.disabled = cond; };
    dis('q-mode-due', p.due.length === 0);
    dis('q-mode-new', p.nw.length === 0);
    dis('q-mode-weak', p.weak.length === 0);
  },
  renderChapterList() {
    const box = document.getElementById('q-chap-list');
    if (!box || box.dataset.ready) { this.updateSelNote(); return; }
    box.innerHTML = Object.keys(BIO.META).filter(cid => QuizBank.count(cid) > 0).map(cid => {
      const label = chapLabel(cid), n = QuizBank.count(cid);
      return '<label class="q-chap"><input type="checkbox" value="' + cid + '" onchange="Quiz.onPick(this)">' +
             '<span title="' + label.replace(/"/g,'&quot;') + '">' + label + '</span><em>' + n + '</em></label>';
    }).join('');
    box.dataset.ready = '1';
    this.updateSelNote();
  },
  onPick(cb) { if (cb.checked) this.selected[cb.value] = 1; else delete this.selected[cb.value]; this.updateSelNote(); },
  selectAll(on) {
    this.selected = {};
    document.querySelectorAll('#q-chap-list input').forEach(cb => {
      cb.checked = on; if (on) this.selected[cb.value] = 1;
    });
    this.updateSelNote();
  },
  updateSelNote() {
    const cids = Object.keys(this.selected);
    const n = cids.reduce((s, c) => s + (QuizBank.byChapter[c] || []).length, 0);
    const note = document.getElementById('q-sel-note');
    const btn  = document.getElementById('q-start-sel');
    if (note) note.textContent = cids.length ? ('เลือก ' + cids.length + ' บท · รวม ' + n + ' ข้อ (สุ่มมา ' + Math.min(n, SESSION_SIZE) + ' ข้อต่อรอบ)') : 'ยังไม่ได้เลือกบท';
    if (btn) btn.disabled = cids.length === 0;
  },

  /* -- เริ่มทำ -- */
  shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
  start(mode) {
    const self = this;
    QuizBank.ready().then(function () { self._start(mode); }).catch(function (e) { self.loadError(e); });
  },
  _start(mode) {
    const p = this.pools();
    let list = [];
    if (mode === 'due')       list = this.shuffle(p.due);
    else if (mode === 'new')  list = p.nw;                       // ไล่ตามลำดับบท
    else if (mode === 'weak') list = p.weak;                     // เรียงตามพลาดมากสุด
    else if (mode === 'random') list = this.shuffle(p.all);
    else if (mode === 'selected') {
      Object.keys(this.selected).forEach(c => { list = list.concat(QuizBank.byChapter[c] || []); });
      list = this.shuffle(list);
    }
    list = list.slice(0, SESSION_SIZE);
    if (!list.length) { alert('ไม่มีโจทย์ในหมวดนี้'); return; }
    this.queue = list; this.pos = 0; this.res = { 0:0, 1:0, 2:0 };
    Store.data.stats.sessions = (Store.data.stats.sessions || 0) + 1;
    Store.save();
    document.getElementById('q-setup').style.display = 'none';
    document.getElementById('q-done').style.display = 'none';
    document.getElementById('q-run').style.display = '';
    this.render();
  },
  render() {
    const it = this.queue[this.pos];
    if (!it) { this.finish(); return; }
    const total = this.queue.length;
    document.getElementById('q-count').textContent = 'ข้อ ' + (this.pos + 1) + ' / ' + total;
    document.getElementById('q-bar').style.width = Math.round(this.pos / total * 100) + '%';
    document.getElementById('q-src').textContent = (it.badge ? it.badge + ' · ' : '') + it.chapTitle;
    const tp = document.getElementById('q-topic');
    if (it.topic) { tp.textContent = it.topic; tp.style.display = ''; } else { tp.style.display = 'none'; }
    document.getElementById('q-title').textContent = it.title;
    document.getElementById('q-stem').innerHTML = it.stem;
    document.getElementById('q-ans').innerHTML = it.ans;
    document.getElementById('q-ans-wrap').style.display = 'none';
    document.getElementById('q-reveal-wrap').style.display = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  reveal() {
    document.getElementById('q-reveal-wrap').style.display = 'none';
    document.getElementById('q-ans-wrap').style.display = '';
  },
  grade(g) {
    const it = this.queue[this.pos];
    if (!it) return;
    SRS.apply(it.id, g);
    this.res[g]++;
    Store.data.stats.graded = (Store.data.stats.graded || 0) + 1;
    Store.touchStreak();
    Store.save();
    if (g === 0) this.queue.push(it);   // ยังไม่ได้ → วนกลับมาถามท้ายรอบ
    this.pos++;
    this.render();
  },
  quit() { if (this.pos > 0 && !confirm('ออกจากการทบทวน? ผลที่ทำไปแล้วถูกบันทึกไว้แล้ว')) return; this.finish(); },
  finish() {
    document.getElementById('q-run').style.display = 'none';
    document.getElementById('q-done').style.display = '';
    document.getElementById('q-r0').textContent = this.res[0];
    document.getElementById('q-r1').textContent = this.res[1];
    document.getElementById('q-r2').textContent = this.res[2];
    const done = this.res[0] + this.res[1] + this.res[2];
    const pct = done ? Math.round(this.res[2] / done * 100) : 0;
    document.getElementById('q-done-ico').textContent = pct >= 80 ? '🏆' : pct >= 50 ? '🎉' : '💪';
    document.getElementById('q-done-t').textContent = done === 0 ? 'ยังไม่ได้ทำข้อไหนเลย' : (pct >= 80 ? 'เก่งมาก!' : pct >= 50 ? 'ทำได้ดี!' : 'สู้ต่อนะ!');
    document.getElementById('q-done-sub').textContent = done === 0 ? '' :
      'ทบทวนไป ' + done + ' ครั้ง · จำได้ ' + pct + '% · ข้อที่ยังไม่แม่นจะถูกนำกลับมาถามใหม่ตามกำหนด';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

/* ---------- แดชบอร์ด ---------- */
const Dash = {
  render() {
    const self = this;
    QuizBank.ready().then(function () { self._render(); }).catch(function () { self._render(); });
  },
  _render() {
    const items = QuizBank.items;
    const seen = items.filter(i => !SRS.isNew(i.id));
    const mastered = items.filter(i => SRS.isMastered(i.id));
    const due = items.filter(i => SRS.isDue(i.id));
    const chapDone = Object.keys(progress).filter(k => progress[k]).length;
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set('d-chap', chapDone + ' / ' + Object.keys(BIO.META).length);
    set('d-seen', seen.length + ' / ' + items.length);
    set('d-mastered', mastered.length);
    set('d-due', due.length);
    set('d-streak', (Store.data.streak && Store.data.streak.days) || 0);

    const rows = Object.keys(BIO.META).map(cid => {
      const qs = QuizBank.byChapter[cid] || [];
      const s  = qs.filter(i => !SRS.isNew(i.id)).length;
      const m  = qs.filter(i => SRS.isMastered(i.id)).length;
      const pct = qs.length ? Math.round(m / qs.length * 100) : 0;
      return '<tr><td>' + chapLabel(cid) + '</td>' +
        '<td>' + (progress[cid] ? '✅' : '—') + '</td>' +
        '<td>' + (qs.length ? s + '/' + qs.length : '<span style="color:var(--muted)">ยังไม่มีโจทย์</span>') + '</td>' +
        '<td><div style="display:flex;align-items:center;gap:8px"><div class="dash-mini"><i style="width:' + pct + '%"></i></div><span style="color:var(--muted);font-size:.8rem">' + pct + '%</span></div></td></tr>';
    }).join('');
    const tb = document.getElementById('d-rows'); if (tb) tb.innerHTML = rows;

    const weak = items.filter(i => { const r = SRS.rec(i.id); return r && r.lapses > 0; })
                      .sort((a, b) => SRS.rec(b.id).lapses - SRS.rec(a.id).lapses).slice(0, 12);
    const wbox = document.getElementById('d-weak');
    if (wbox) wbox.innerHTML = weak.length
      ? weak.map(i => '<div style="padding:10px 0;border-bottom:1px solid var(--border)">' +
          '<div style="font-size:.79rem;color:var(--muted)">' + i.badge + ' · ' + i.chapTitle + '</div>' +
          '<div style="font-weight:600;font-size:.9rem;margin-top:2px">' + i.title + '</div>' +
          '<div style="font-size:.79rem;color:var(--ink-coral);margin-top:2px">ตอบว่า "ยังไม่ได้" ' + SRS.rec(i.id).lapses + ' ครั้ง</div></div>').join('')
      : '<div class="dash-empty">ยังไม่มีข้อที่ตอบผิดซ้ำ<br>เริ่มทบทวนที่หน้า "แบบทดสอบ" ได้เลย</div>';
  },
  studentName() {
    let n = (Store.data.student && Store.data.student.name) || '';
    if (!n) {
      n = (prompt('ใส่ชื่อ-นามสกุล (ใช้ในไฟล์ส่งครู)') || '').trim();
      if (n) { Store.data.student.name = n; Store.save(); }
    }
    return n || 'ไม่ระบุชื่อ';
  },
  download(name, text, mime) {
    const blob = new Blob(['﻿' + text], { type: mime + ';charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  },
  exportCSV() {
    const self = this;
    QuizBank.ready().then(function () { self._exportCSV(); })
      .catch(function () { alert('โหลดคลังโจทย์ไม่สำเร็จ ส่งออกไม่ได้'); });
  },
  _exportCSV() {
    const name = this.studentName();
    const esc = v => '"' + String(v).replace(/"/g, '""') + '"';
    const lines = [['ชื่อนักเรียน','บท','ชื่อบท','รหัสข้อ','ชื่อโจทย์','จำนวนครั้งที่ทบทวน','จำนวนครั้งที่ตอบยังไม่ได้','ช่วงทบทวน(วัน)','ทบทวนล่าสุด','ครบกำหนดถัดไป','สถานะ'].map(esc).join(',')];
    QuizBank.items.forEach(i => {
      const r = SRS.rec(i.id);
      if (!r) return;
      const d = t => t ? new Date(t).toLocaleDateString('th-TH') : '';
      lines.push([name, i.badge, i.chapTitle, i.id, i.title, r.reps, r.lapses, r.iv, d(r.last), d(r.due),
        SRS.isMastered(i.id) ? 'แม่นแล้ว' : (r.lapses > 0 ? 'ต้องทบทวน' : 'กำลังเรียน')].map(esc).join(','));
    });
    if (lines.length === 1) { alert('ยังไม่มีข้อมูลการทบทวน — ลองทำแบบทดสอบก่อนนะครับ'); return; }
    this.download('ความก้าวหน้าชีววิทยา_' + name + '_' + Store.today() + '.csv', lines.join('\n'), 'text/csv');
  },
  exportJSON() {
    this.download('สำรองข้อมูลชีววิทยา_' + Store.today() + '.json', JSON.stringify(Store.data, null, 2), 'application/json');
  },
  importJSON() {
    const inp = document.getElementById('d-file');
    inp.onchange = () => {
      const f = inp.files && inp.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        try {
          const d = JSON.parse(rd.result);
          if (!d || typeof d !== 'object' || !('srs' in d)) throw new Error('รูปแบบไฟล์ไม่ถูกต้อง');
          if (!confirm('กู้คืนข้อมูลจากไฟล์นี้? ข้อมูลปัจจุบันจะถูกแทนที่ทั้งหมด')) return;
          localStorage.setItem(STORE_KEY, JSON.stringify(d));
          alert('กู้คืนเรียบร้อย — กำลังโหลดหน้าใหม่');
          location.reload();
        } catch (e) { alert('อ่านไฟล์ไม่สำเร็จ: ' + e.message); }
      };
      rd.readAsText(f);
      inp.value = '';
    };
    inp.click();
  },
  resetAll() {
    if (!confirm('ล้างข้อมูลทั้งหมด (ความก้าวหน้า + ประวัติทบทวน)?\nกู้คืนไม่ได้ ถ้ายังไม่ได้สำรองไฟล์ไว้')) return;
    if (!confirm('ยืนยันอีกครั้ง — ข้อมูลจะหายถาวร')) return;
    try { localStorage.removeItem(STORE_KEY); } catch (e) {}
    location.reload();
  }
};


/* ============================================================
   เฟส 3 — โหมดมืด · เมนูล่างมือถือ · ค้นหาทั้งเว็บ
             · skeleton/transition · การเข้าถึง
   ============================================================ */

/* ---------- โหมดมืด ---------- */
const Theme = {
  KEY: 'bio-nk-theme',
  get() { try { return localStorage.getItem(this.KEY) || 'auto'; } catch (e) { return 'auto'; } },
  set(v) {
    try { localStorage.setItem(this.KEY, v); } catch (e) {}
    this.apply(v);
  },
  apply(v) {
    const root = document.documentElement;
    if (v === 'auto') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', v);
    const dark = v === 'dark' || (v === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    const btn = document.getElementById('themeBtn');
    if (btn) {
      btn.textContent = v === 'auto' ? '🌗' : (dark ? '🌙' : '☀️');
      const name = v === 'auto' ? 'ตามเครื่อง' : (dark ? 'มืด' : 'สว่าง');
      btn.setAttribute('aria-label', 'ธีมปัจจุบัน: ' + name + ' — กดเพื่อสลับ');
      btn.title = 'ธีม: ' + name;
    }
  },
  cycle() {
    const order = ['auto', 'light', 'dark'];
    this.set(order[(order.indexOf(this.get()) + 1) % order.length]);
  },
  init() {
    this.apply(this.get());
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => { if (this.get() === 'auto') this.apply('auto'); };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }
};

/* ---------- ตัวช่วยเปลี่ยนหน้าแบบนุ่ม (View Transitions + fallback) ---------- */
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function softSwap(fn) {
  if (document.startViewTransition && !reduceMotion()) {
    try { document.startViewTransition(fn); return; } catch (e) {}
  }
  fn();
}

/* ---------- เมนูล่างมือถือ ---------- */
const BotNav = {
  sync(pageId) {
    document.querySelectorAll('.botnav-i').forEach(b => {
      const on = b.dataset.page === pageId;
      b.classList.toggle('active', on);
      if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
    this.closeMore();
  },
  toggleMore() {
    const m = document.getElementById('botnavMore');
    const b = document.getElementById('bn-more');
    const on = m.classList.toggle('show');
    if (b) b.setAttribute('aria-expanded', on ? 'true' : 'false');
  },
  closeMore() {
    const m = document.getElementById('botnavMore');
    if (m) m.classList.remove('show');
    const b = document.getElementById('bn-more');
    if (b) b.setAttribute('aria-expanded', 'false');
  },
  go(pageId) {
    this.closeMore();
    showPage(pageId);
    if (pageId === 'quiz') Quiz.home();
    if (pageId === 'dashboard') Dash.render();
  }
};
document.addEventListener('click', function (e) {
  const m = document.getElementById('botnavMore');
  if (m && m.classList.contains('show') && !e.target.closest('#botnavMore') && !e.target.closest('#bn-more')) BotNav.closeMore();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    BotNav.closeMore(); Search.close();
    const am = document.getElementById('acctModal');
    if (am && am.style.display === 'flex') Account.close();
  }
});

/* ---------- ห่อตารางให้เลื่อนแนวนอนได้บนจอแคบ ---------- */
function wrapTables(root) {
  if (!root) return;
  root.querySelectorAll('.content-table').forEach(t => {
    const p = t.parentElement;
    if (p && p.classList.contains('table-scroll')) return;
    const w = document.createElement('div');
    w.className = 'table-scroll';
    w.setAttribute('tabindex', '0');
    w.setAttribute('role', 'region');
    w.setAttribute('aria-label', 'ตาราง (เลื่อนซ้ายขวาได้)');
    t.parentNode.insertBefore(w, t);
    w.appendChild(t);
  });
}

/* ---------- ค้นหาทั้งเว็บ ---------- */
const Search = {
  idx: [], built: false,
  build() {
    if (this.built || !BIO.SEARCH) return;
    const self = this;
    /* รายชื่อบทสร้างจาก META ไม่ต้องเก็บซ้ำในไฟล์ดัชนี */
    Object.keys(BIO.META).forEach(function (cid) {
      const m = BIO.META[cid];
      self.idx.push({ k: 'บท', cid: cid, text: chapLabel(cid), sub: m.s || '' });
    });
    BIO.SEARCH.forEach(function (e) {
      const label = chapLabel(e.c), m = BIO.META[e.c] || {};
      if (e.k === 'หัวข้อ') self.idx.push({ k: 'หัวข้อ', cid: e.c, text: e.t, sub: label, nth: e.n });
      else self.idx.push({ k: 'โจทย์', cid: e.c, text: e.t, sub: (m.b ? m.b + ' · ' : '') + (m.t || e.c), pnth: e.p });
    });
    this.built = true;
  },
  esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); },
  mark(text, q) {
    const t = this.esc(text), i = t.toLowerCase().indexOf(q);
    if (i < 0) return t;
    return t.slice(0, i) + '<mark>' + t.slice(i, i + q.length) + '</mark>' + t.slice(i + q.length);
  },
  run(raw) {
    const q = raw.trim().toLowerCase();
    const box = document.getElementById('srchRes');
    if (!box) return;
    if (q.length < 2) { box.innerHTML = ''; box.style.display = 'none'; return; }
    this.build();
    const hits = [];
    for (const e of this.idx) {
      const i = e.text.toLowerCase().indexOf(q);
      if (i < 0) continue;
      hits.push({ e: e, score: (i === 0 ? 0 : 1) + (e.k === 'บท' ? 0 : e.k === 'หัวข้อ' ? 0.3 : 0.6) });
      if (hits.length > 400) break;
    }
    hits.sort((a, b) => a.score - b.score);
    const top = hits.slice(0, 40);
    box.style.display = '';
    if (!top.length) {
      box.innerHTML = '<div class="srch-res"><div class="srch-none">ไม่พบ "' + this.esc(raw) + '"<br>ลองคำสั้นลง เช่น "เซลล์" "DNA" "ฮอร์โมน"</div></div>';
      return;
    }
    box.innerHTML = '<div class="srch-res"><div class="srch-head">พบ ' + hits.length + ' รายการ' +
      (hits.length > top.length ? ' · แสดง ' + top.length + ' แรก' : '') + '</div><div class="srch-list">' +
      top.map((h, i) => '<button class="srch-i" onclick="Search.go(' + i + ')">' +
        '<span class="srch-kind">' + h.e.k + '</span><span class="srch-t">' + this.mark(h.e.text, q) + '</span>' +
        '<div class="srch-sub">' + this.esc(h.e.sub) + '</div></button>').join('') +
      '</div></div>';
    this.last = top;
  },
  go(i) {
    const e = this.last && this.last[i] && this.last[i].e;
    if (!e) return;
    this.close();
    showChapter(e.cid);
    if (e.nth === undefined && e.pnth === undefined) return;
    /* showChapter ลงทะเบียน .then ไว้ก่อนแล้ว เนื้อหาจึงถูกวางเรียบร้อยก่อนถึงตรงนี้ */
    Loader.chapter(e.cid).then(() => setTimeout(() => {
      const body = document.getElementById('chap-body');
      const el = e.nth !== undefined ? body.querySelectorAll('h3')[e.nth]
                                     : body.querySelectorAll('.problem-card')[e.pnth];
      if (!el) return;
      const t = el.closest('.content-section, .problem-card') || el;
      el.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'center' });
      t.classList.remove('flash-hit');
      void t.offsetWidth;
      t.classList.add('flash-hit');
    }, 60)).catch(function () {});
  },
  close() {
    const box = document.getElementById('srchRes');
    if (box) { box.innerHTML = ''; box.style.display = 'none'; }
  }
};

/* ---------- ปุ่ม "เรียนต่อ" บนหน้าแรก ---------- */
function updateResume() {
  const bar = document.getElementById('resumeBar');
  if (!bar) return;
  const cid = Store.data.last;
  const ch = cid && BIO.META[cid];
  if (!ch) { bar.style.display = 'none'; return; }
  const done = Object.keys(progress).filter(k => progress[k]).length;
  bar.style.display = 'block';
  document.getElementById('resumeTitle').textContent = (ch.b ? ch.b + ' · ' : '') + (ch.t || cid);
  document.getElementById('resumeSub').textContent =
    'เรียนแล้ว ' + done + ' / ' + Object.keys(BIO.META).length + ' บท' + (progress[cid] ? ' · บทนี้ทำเครื่องหมายว่าเรียนแล้ว' : '');
  bar.querySelector('button').onclick = () => showChapter(cid);
}

/* ---------- สถิติจริงบนหน้าแรก ---------- */
function fillHeroStats() {
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('hs-chap', Object.keys(BIO.META).length);
  set('hs-prob', QuizBank.total());
}

/* ===== BACK TO TOP ===== */
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) backTop.classList.add('show');
  else backTop.classList.remove('show');
});

/* ===== INIT ===== */
document.getElementById('nav-welcome').classList.add('active');
document.getElementById('nav-welcome').setAttribute('aria-current', 'page');
Theme.init();
updateProgressUI();
BotNav.sync('welcome');
fillHeroStats();
updateResume();
if (!Store.ok) {
  document.querySelectorAll('#page-quiz .q-wrap, #page-dashboard .q-wrap').forEach(function(w){
    var d = document.createElement('div');
    d.className = 'q-warn';
    d.textContent = '⚠️ เบราว์เซอร์นี้บันทึกข้อมูลไม่ได้ (อาจเปิดในโหมดส่วนตัว) — ทบทวนได้ตามปกติ แต่ผลจะไม่ถูกเก็บไว้';
    w.insertBefore(d, w.firstChild);
  });
}

/* ============================================================
   เฟส 1 — PWA: ติดตั้งเป็นแอป + ใช้ออฟไลน์
   ทำงานเฉพาะเมื่อเสิร์ฟผ่าน http(s) — เปิดจากไฟล์ในเครื่อง (file://)
   เบราว์เซอร์ไม่อนุญาตให้ลงทะเบียน service worker
   ============================================================ */
if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').then(function (reg) {
      /* มีเวอร์ชันใหม่รออยู่ → บอกผู้ใช้ ไม่รีเฟรชทับเอง */
      reg.addEventListener('updatefound', function () {
        const nw = reg.installing;
        if (!nw) return;
        nw.addEventListener('statechange', function () {
          if (nw.state === 'installed' && navigator.serviceWorker.controller) showUpdateBar(reg);
        });
      });
    }).catch(function () { /* ลงทะเบียนไม่ได้ก็ใช้เว็บตามปกติ */ });

    let reloaded = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (reloaded) return;
      reloaded = true;
      location.reload();
    });
  });
}

function showUpdateBar(reg) {
  if (document.getElementById('swUpdate')) return;
  const bar = document.createElement('div');
  bar.id = 'swUpdate';
  bar.className = 'sw-update';
  bar.innerHTML = '<span>มีเนื้อหาเวอร์ชันใหม่แล้ว</span>' +
    '<button class="q-btn q-btn-main" id="swUpdateBtn">อัปเดตเลย</button>' +
    '<button class="q-btn q-btn-ghost" id="swLaterBtn">ไว้ก่อน</button>';
  document.body.appendChild(bar);
  document.getElementById('swUpdateBtn').onclick = function () {
    if (reg.waiting) reg.waiting.postMessage('skipWaiting');
    else location.reload();
  };
  document.getElementById('swLaterBtn').onclick = function () { bar.remove(); };
}

/* ============================================================
   คลังสื่อการเรียน — สร้างการ์ดจาก data/media.js
   (เดิมการ์ดเป็น <div> เปล่า ๆ ไม่มีปลายทาง กดแล้วไม่เกิดอะไร)
   ============================================================ */
const Media = {
  done: false,
  load() {
    if (this.done) return;
    const box = document.getElementById('mediaRoot');
    if (!box) return;
    const self = this;
    Loader.load('data/media.js').then(function () {
      self.render(); self.done = true;
    }).catch(function (e) {
      box.innerHTML = '<div class="dash-empty">โหลดคลังสื่อไม่สำเร็จ (' + e.message + ')<br>' +
        'ตรวจว่ามีไฟล์ <strong>data/media.js</strong> อยู่</div>';
    });
  },
  render() {
    const box = document.getElementById('mediaRoot');
    if (!box || !window.BIO || !BIO.MEDIA) return;
    box.innerHTML = BIO.MEDIA.map(function (g) {
      return '<div class="content-section"><h3>' + Search.esc(g.cat) + '</h3><div class="media-grid">' +
        g.items.map(function (m) {
          const head = '<div class="ic" aria-hidden="true">' + m.ic + '</div>' +
            '<div class="ti">' + Search.esc(m.ti) + '</div>' +
            '<div class="de">' + Search.esc(m.de) + '</div>';
          if (!m.url) {
            return '<div class="media-card is-soon"><span class="media-soon">เร็ว ๆ นี้</span>' + head + '</div>';
          }
          return '<a class="media-card" href="' + Search.esc(m.url) + '" target="_blank" rel="noopener noreferrer">' +
            head + '<div class="media-src">' + Search.esc(m.src || 'แหล่งภายนอก') +
            ' <span aria-hidden="true">↗</span><span class="sr-only">(เปิดในแท็บใหม่)</span></div></a>';
        }).join('') + '</div></div>';
    }).join('');
  }
};
