/* ============================================================
   เฟส 1 — ระบบสมาชิก (Firebase)

   ★ ค่าเริ่มต้นเป็น "โหมดเก็บในเครื่อง" — เว็บทำงานได้ครบโดยไม่ต้องมี Firebase
     พอใส่ค่า firebaseConfig จริงข้างล่าง ระบบจะสลับเป็นโหมดคลาวด์เองอัตโนมัติ

   วิธีเปิดใช้: ดู DEPLOY_CHECKLIST.md หัวข้อ "ระบบสมาชิก"
   ============================================================ */

const Cloud = {
  /* ── ใส่ค่าจริงจาก Firebase Console ตรงนี้ ───────────────── */
  cfg: {
    apiKey:            'YOUR_API_KEY',
    authDomain:        'YOUR_PROJECT_ID.firebaseapp.com',
    projectId:         'YOUR_PROJECT_ID',
    storageBucket:     'YOUR_PROJECT_ID.appspot.com',
    messagingSenderId: 'YOUR_SENDER_ID',
    appId:             'YOUR_APP_ID'
  },
  /* อีเมลที่เห็นแดชบอร์ดครู — ต้องตรงกับ isTeacher() ใน firestore.rules ด้วย */
  TEACHERS: ['pitukpong36@brw.ac.th', 'pitukpong36@gmail.com'],
  SDK: 'https://www.gstatic.com/firebasejs/10.14.1/',

  on: false, ready: false, user: null, profile: null, _saveTimer: null,

  enabled() { return !/^YOUR_/.test(this.cfg.apiKey); },
  isTeacher() { return !!(this.user && this.TEACHERS.indexOf((this.user.email || '').toLowerCase()) >= 0); },

  /* ── เริ่มระบบ ───────────────────────────────────────────── */
  init() {
    Account.render();
    if (!this.enabled()) return;                       // โหมดเก็บในเครื่อง
    const self = this;
    this.loadSDK().then(function () {
      firebase.initializeApp(self.cfg);
      self.auth = firebase.auth();
      self.db = firebase.firestore();
      self.on = true;
      self.auth.onAuthStateChanged(function (u) {
        self.user = u;
        self.ready = true;
        if (u) self.pull().then(function () { Account.render(); });
        else { self.profile = null; Account.render(); }
      });
    }).catch(function (e) {
      console.warn('โหลด Firebase ไม่สำเร็จ ใช้โหมดเก็บในเครื่องแทน:', e.message);
      Account.render();
    });
  },

  loadSDK() {
    const b = this.SDK;
    return Loader.load(b + 'firebase-app-compat.js')
      .then(function () { return Loader.load(b + 'firebase-auth-compat.js'); })
      .then(function () { return Loader.load(b + 'firebase-firestore-compat.js'); });
  },

  /* ── สมัคร / เข้าสู่ระบบ / ออก ───────────────────────────── */
  signup(name, room, email, pw) {
    const self = this;
    return this.auth.createUserWithEmailAndPassword(email, pw).then(function (c) {
      self.profile = { name: name, room: room, email: email };
      return self.doc(c.user.uid).set({
        name: name, room: room, email: email,
        progress: Store.data.progress, srs: Store.data.srs,
        streak: Store.data.streak, stats: Store.data.stats,
        updatedAt: Date.now()
      });
    });
  },
  login(email, pw) { return this.auth.signInWithEmailAndPassword(email, pw); },
  logout() { const s = this; return this.auth.signOut().then(function () { s.profile = null; Account.render(); }); },
  resetPassword(email) { return this.auth.sendPasswordResetEmail(email); },

  doc(uid) { return this.db.collection('users').doc(uid); },

  /* ── ดึงข้อมูลจากคลาวด์แล้วรวมกับของในเครื่อง ───────────── */
  pull() {
    if (!this.on || !this.user) return Promise.resolve();
    const self = this;
    return this.doc(this.user.uid).get().then(function (snap) {
      const d = snap.exists ? snap.data() : null;
      if (d) {
        self.profile = { name: d.name || '', room: d.room || '', email: d.email || self.user.email };
        Cloud.merge(d);
      } else {
        self.profile = { name: '', room: '', email: self.user.email };
      }
      Store.save();
      updateProgressUI();
      if (QuizBank.built) Dash.render();
      return self.push();
    }).catch(function (e) { console.warn('ดึงข้อมูลไม่สำเร็จ:', e.message); });
  },

  /* รวมข้อมูล: ความก้าวหน้าใช้ "เคยเรียนแล้ว" เป็นหลัก · SRS ใช้อันที่ทบทวนล่าสุด */
  merge(d) {
    const P = Store.data.progress;
    Object.keys(d.progress || {}).forEach(function (k) { if (d.progress[k]) P[k] = true; });
    const S = Store.data.srs, C = d.srs || {};
    Object.keys(C).forEach(function (id) {
      if (!S[id] || (C[id].last || 0) > (S[id].last || 0)) S[id] = C[id];
    });
    const ls = d.streak || {}, cs = Store.data.streak || {};
    if ((ls.last || '') > (cs.last || '')) Store.data.streak = ls;
    else if ((ls.last || '') === (cs.last || '')) Store.data.streak.days = Math.max(ls.days || 0, cs.days || 0);
    const st = d.stats || {};
    Store.data.stats.sessions = Math.max(Store.data.stats.sessions || 0, st.sessions || 0);
    Store.data.stats.graded = Math.max(Store.data.stats.graded || 0, st.graded || 0);
  },

  /* ── ส่งขึ้นคลาวด์ (หน่วงไว้ ไม่ให้ยิงถี่) ───────────────── */
  push() {
    if (!this.on || !this.user) return Promise.resolve();
    const self = this;
    return this.doc(this.user.uid).set({
      name: (this.profile && this.profile.name) || '',
      room: (this.profile && this.profile.room) || '',
      email: this.user.email,
      progress: Store.data.progress, srs: Store.data.srs,
      streak: Store.data.streak, stats: Store.data.stats,
      updatedAt: Date.now()
    }, { merge: true }).catch(function (e) { console.warn('บันทึกขึ้นคลาวด์ไม่สำเร็จ:', e.message); });
  },
  pushSoon() {
    if (!this.on || !this.user) return;
    const self = this;
    clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(function () { self.push(); }, 2500);
  },

  /* ── ข้อมูลนักเรียนทั้งหมด (เฉพาะครู) ────────────────────── */
  allStudents() {
    if (!this.on || !this.isTeacher()) return Promise.resolve([]);
    return this.db.collection('users').get().then(function (q) {
      const rows = [];
      q.forEach(function (d) { rows.push(Object.assign({ uid: d.id }, d.data())); });
      return rows;
    });
  }
};
