/* ============================================================
   เฟส 1 — หน้าจอบัญชีผู้ใช้ + แดชบอร์ดครู
   ทำงานคู่กับ Cloud (js/cloud.js) · ถ้ายังไม่ตั้งค่า Firebase
   จะแสดงว่าอยู่ในโหมดเก็บข้อมูลในเครื่อง
   ============================================================ */

const Account = {
  /* ปุ่มบัญชีบนแถบเมนู */
  render() {
    const btn = document.getElementById('acctBtn');
    if (!btn) return;
    if (!Cloud.enabled()) { btn.textContent = '💾'; btn.title = 'เก็บข้อมูลในเครื่องนี้'; btn.setAttribute('aria-label', 'เก็บข้อมูลในเครื่องนี้ — กดดูรายละเอียด'); }
    else if (Cloud.user) {
      const n = (Cloud.profile && Cloud.profile.name) || Cloud.user.email;
      btn.textContent = Cloud.isTeacher() ? '👩‍🏫' : '👤';
      btn.title = n; btn.setAttribute('aria-label', 'บัญชี: ' + n);
    } else { btn.textContent = '🔑'; btn.title = 'เข้าสู่ระบบ'; btn.setAttribute('aria-label', 'เข้าสู่ระบบ'); }
    const t = document.getElementById('bn-teacher-row');
    if (t) t.style.display = Cloud.isTeacher() ? '' : 'none';
  },

  open() {
    const m = document.getElementById('acctModal');
    m.style.display = 'flex';
    this.body();
    const f = m.querySelector('input,button');
    if (f) f.focus();
  },
  close() { document.getElementById('acctModal').style.display = 'none'; this.msg(''); },
  msg(t, bad) {
    const el = document.getElementById('acctMsg');
    if (!el) return;
    el.textContent = t || '';
    el.className = 'acct-msg' + (bad ? ' bad' : '');
  },

  body() {
    const b = document.getElementById('acctBody');
    if (!Cloud.enabled()) {
      b.innerHTML =
        '<div class="acct-note"><strong>💾 โหมดเก็บข้อมูลในเครื่อง</strong><br>' +
        'ความก้าวหน้าและผลทบทวนถูกเก็บไว้ในเบราว์เซอร์เครื่องนี้เท่านั้น ' +
        'ถ้าเปลี่ยนเครื่องหรือล้างข้อมูลเบราว์เซอร์จะหาย</div>' +
        '<p class="q-note">ใช้ปุ่ม <strong>สำรองข้อมูล (JSON)</strong> ที่หน้า "ความก้าวหน้า" เพื่อย้ายเครื่องได้</p>' +
        '<div class="q-btn-row" style="justify-content:flex-end">' +
        '<button class="q-btn q-btn-ghost" onclick="Account.close()">ปิด</button></div>';
      return;
    }
    if (!Cloud.ready) { b.innerHTML = '<p class="q-note">กำลังเชื่อมต่อ…</p>'; return; }

    if (Cloud.user) {
      const p = Cloud.profile || {};
      b.innerHTML =
        '<div class="acct-who"><div class="acct-av">' + (Cloud.isTeacher() ? '👩‍🏫' : '👤') + '</div>' +
        '<div><strong>' + esc(p.name || Cloud.user.email) + '</strong>' +
        (p.room ? '<div class="q-note" style="margin:0">ห้อง ' + esc(p.room) + '</div>' : '') +
        '<div class="q-note" style="margin:0">' + esc(Cloud.user.email) + '</div></div></div>' +
        '<div class="acct-note">✅ ข้อมูลถูกบันทึกขึ้นคลาวด์ เปิดเครื่องไหนก็เห็นความก้าวหน้าเดิม</div>' +
        (Cloud.isTeacher() ? '<div class="q-btn-row"><button class="q-btn q-btn-main" onclick="Account.close();showPage(\'teacher\');Teacher.load()">👩‍🏫 แดชบอร์ดครู</button></div>' : '') +
        '<div class="q-btn-row" style="justify-content:flex-end">' +
        '<button class="q-btn q-btn-ghost" onclick="Account.doLogout()">ออกจากระบบ</button>' +
        '<button class="q-btn q-btn-ghost" onclick="Account.close()">ปิด</button></div>';
      return;
    }
    this.formLogin();
  },

  formLogin() {
    document.getElementById('acctBody').innerHTML =
      '<h4 class="acct-h">เข้าสู่ระบบ</h4>' +
      '<label class="acct-l">อีเมล<input class="acct-i" id="ac-em" type="email" autocomplete="email"></label>' +
      '<label class="acct-l">รหัสผ่าน<input class="acct-i" id="ac-pw" type="password" autocomplete="current-password"></label>' +
      '<div class="q-btn-row"><button class="q-btn q-btn-main" onclick="Account.doLogin()">เข้าสู่ระบบ</button>' +
      '<button class="q-btn q-btn-ghost" onclick="Account.formSignup()">ยังไม่มีบัญชี — สมัคร</button></div>' +
      '<p class="q-note"><button class="acct-link" onclick="Account.doReset()">ลืมรหัสผ่าน?</button></p>';
  },
  formSignup() {
    document.getElementById('acctBody').innerHTML =
      '<h4 class="acct-h">สมัครสมาชิก</h4>' +
      '<label class="acct-l">ชื่อ-นามสกุล<input class="acct-i" id="ac-nm" autocomplete="name"></label>' +
      '<label class="acct-l">ชั้น/ห้อง (เช่น ม.6/1)<input class="acct-i" id="ac-rm"></label>' +
      '<label class="acct-l">อีเมล<input class="acct-i" id="ac-em" type="email" autocomplete="email"></label>' +
      '<label class="acct-l">รหัสผ่าน (อย่างน้อย 6 ตัว)<input class="acct-i" id="ac-pw" type="password" autocomplete="new-password"></label>' +
      '<div class="q-btn-row"><button class="q-btn q-btn-main" onclick="Account.doSignup()">สมัคร</button>' +
      '<button class="q-btn q-btn-ghost" onclick="Account.formLogin()">มีบัญชีแล้ว</button></div>';
  },

  val(id) { const e = document.getElementById(id); return e ? e.value.trim() : ''; },
  err(e) {
    const m = {
      'auth/invalid-email': 'รูปแบบอีเมลไม่ถูกต้อง',
      'auth/user-not-found': 'ไม่พบบัญชีนี้',
      'auth/wrong-password': 'รหัสผ่านไม่ถูกต้อง',
      'auth/invalid-credential': 'อีเมลหรือรหัสผ่านไม่ถูกต้อง',
      'auth/email-already-in-use': 'อีเมลนี้ถูกใช้สมัครไปแล้ว',
      'auth/weak-password': 'รหัสผ่านสั้นเกินไป (อย่างน้อย 6 ตัว)',
      'auth/network-request-failed': 'เชื่อมต่อไม่ได้ — ตรวจอินเทอร์เน็ต',
      'auth/too-many-requests': 'ลองผิดหลายครั้งเกินไป รอสักครู่แล้วลองใหม่'
    };
    return m[e.code] || e.message;
  },
  doLogin() {
    const em = this.val('ac-em'), pw = this.val('ac-pw');
    if (!em || !pw) return this.msg('กรอกอีเมลและรหัสผ่านให้ครบ', true);
    this.msg('กำลังเข้าสู่ระบบ…');
    const self = this;
    Cloud.login(em, pw).then(function () { self.msg(''); self.body(); })
      .catch(function (e) { self.msg(self.err(e), true); });
  },
  doSignup() {
    const nm = this.val('ac-nm'), rm = this.val('ac-rm'), em = this.val('ac-em'), pw = this.val('ac-pw');
    if (!nm || !em || !pw) return this.msg('กรอกชื่อ อีเมล และรหัสผ่านให้ครบ', true);
    this.msg('กำลังสมัคร…');
    const self = this;
    Cloud.signup(nm, rm, em, pw).then(function () { self.msg(''); self.body(); })
      .catch(function (e) { self.msg(self.err(e), true); });
  },
  doReset() {
    const em = this.val('ac-em');
    if (!em) return this.msg('ใส่อีเมลก่อน แล้วกดลืมรหัสผ่านอีกครั้ง', true);
    const self = this;
    Cloud.resetPassword(em).then(function () { self.msg('ส่งลิงก์ตั้งรหัสผ่านใหม่ไปที่อีเมลแล้ว'); })
      .catch(function (e) { self.msg(self.err(e), true); });
  },
  doLogout() {
    if (!confirm('ออกจากระบบ? ข้อมูลที่บันทึกไว้บนคลาวด์ยังอยู่')) return;
    const self = this;
    Cloud.logout().then(function () { self.body(); });
  }
};

function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

/* ---------- แดชบอร์ดครู ---------- */
const Teacher = {
  rows: [],
  load() {
    const box = document.getElementById('tc-body');
    if (!Cloud.isTeacher()) { box.innerHTML = '<div class="dash-empty">หน้านี้สำหรับครูเท่านั้น</div>'; return; }
    box.innerHTML = '<div class="dash-empty">กำลังโหลดข้อมูลนักเรียน…</div>';
    const self = this;
    Promise.all([Cloud.allStudents(), QuizBank.ready()]).then(function (r) {
      self.rows = r[0].filter(function (u) { return Cloud.TEACHERS.indexOf((u.email || '').toLowerCase()) < 0; });
      self.render();
    }).catch(function (e) {
      box.innerHTML = '<div class="dash-empty">โหลดไม่สำเร็จ: ' + esc(e.message) + '</div>';
    });
  },
  stat(u) {
    const nCh = Object.keys(BIO.META).length;
    const done = Object.keys(u.progress || {}).filter(function (k) { return u.progress[k]; }).length;
    const srs = u.srs || {};
    const ids = Object.keys(srs);
    const mastered = ids.filter(function (i) { return (srs[i].iv || 0) >= 21; }).length;
    const lapses = ids.reduce(function (a, i) { return a + (srs[i].lapses || 0); }, 0);
    const last = Math.max(0, ...ids.map(function (i) { return srs[i].last || 0; }), u.updatedAt || 0);
    return { done: done, nCh: nCh, pct: Math.round(done / nCh * 100), seen: ids.length,
             mastered: mastered, lapses: lapses, last: last };
  },
  render() {
    const box = document.getElementById('tc-body');
    if (!this.rows.length) { box.innerHTML = '<div class="dash-empty">ยังไม่มีนักเรียนสมัครเข้ามา</div>'; return; }
    const total = QuizBank.total();
    const rows = this.rows.map(function (u) { return { u: u, s: Teacher.stat(u) }; })
      .sort(function (a, b) { return b.s.done - a.s.done; });
    box.innerHTML =
      '<div class="dash-grid">' +
      '<div class="dash-card"><div class="dash-n">' + rows.length + '</div><div class="dash-l">นักเรียนทั้งหมด</div></div>' +
      '<div class="dash-card"><div class="dash-n">' + Math.round(rows.reduce(function (a, r) { return a + r.s.pct; }, 0) / rows.length) + '%</div><div class="dash-l">ความก้าวหน้าเฉลี่ย</div></div>' +
      '<div class="dash-card"><div class="dash-n">' + rows.filter(function (r) { return Date.now() - r.s.last < 7 * 86400000; }).length + '</div><div class="dash-l">ใช้งานใน 7 วัน</div></div>' +
      '</div>' +
      '<div class="dash-scroll"><table class="dash-table"><thead><tr>' +
      '<th>ชื่อ</th><th>ห้อง</th><th>บทที่เรียน</th><th>ทบทวน</th><th>แม่นแล้ว</th><th>ล่าสุด</th></tr></thead><tbody>' +
      rows.map(function (r) {
        const s = r.s;
        return '<tr><td>' + esc(r.u.name || r.u.email) + '</td><td>' + esc(r.u.room || '—') + '</td>' +
          '<td><div style="display:flex;align-items:center;gap:8px"><div class="dash-mini"><i style="width:' + s.pct + '%"></i></div>' +
          '<span style="font-size:.8rem;color:var(--muted)">' + s.done + '/' + s.nCh + '</span></div></td>' +
          '<td>' + s.seen + (total ? '/' + total : '') + '</td><td>' + s.mastered + '</td>' +
          '<td style="color:var(--muted);font-size:.8rem">' + (s.last ? new Date(s.last).toLocaleDateString('th-TH') : '—') + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      '<div class="q-btn-row"><button class="q-btn q-btn-ghost" onclick="Teacher.exportCSV()">⬇️ ส่งออก CSV ทั้งห้อง</button>' +
      '<button class="q-btn q-btn-ghost" onclick="Teacher.load()">🔄 โหลดใหม่</button></div>';
  },
  exportCSV() {
    const q = function (v) { return '"' + String(v).replace(/"/g, '""') + '"'; };
    const lines = [['ชื่อ', 'ห้อง', 'อีเมล', 'บทที่เรียนแล้ว', 'จากทั้งหมด', 'ร้อยละ', 'ข้อที่ทบทวน', 'ข้อที่แม่นแล้ว', 'จำนวนครั้งที่ตอบยังไม่ได้', 'ใช้งานล่าสุด'].map(q).join(',')];
    this.rows.map(function (u) { return { u: u, s: Teacher.stat(u) }; })
      .sort(function (a, b) { return b.s.done - a.s.done; })
      .forEach(function (r) {
        lines.push([r.u.name || '', r.u.room || '', r.u.email || '', r.s.done, r.s.nCh, r.s.pct + '%',
          r.s.seen, r.s.mastered, r.s.lapses,
          r.s.last ? new Date(r.s.last).toLocaleDateString('th-TH') : ''].map(q).join(','));
      });
    Dash.download('ภาพรวมนักเรียน_ชีววิทยา_' + Store.today() + '.csv', lines.join('\n'), 'text/csv');
  }
};
