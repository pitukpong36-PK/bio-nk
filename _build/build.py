#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
สร้างไฟล์ข้อมูลที่ใช้ร่วมกัน จากเนื้อหาบทใน data/vol*.js

  รันเมื่อไหร่:  ทุกครั้งที่แก้เนื้อหาบทใน data/vol*.js
  รันยังไง:     python3 _build/build.py

สร้าง:
  data/meta.js    หัวบท 29 บท + จำนวนโจทย์ต่อบท   (โหลดทุกครั้ง เล็ก)
  data/search.js  ดัชนีค้นหา (ชื่อบท/หัวข้อ/ชื่อโจทย์) (โหลดทุกครั้ง)
  data/quiz.js    คลังโจทย์เต็ม 544 ข้อ            (โหลดเมื่อเปิดแบบทดสอบ)

เนื้อหาบทใน data/vol*.js คือแหล่งความจริงเพียงที่เดียว ไฟล์ 3 ไฟล์ข้างบนสร้างจากมันทั้งหมด
"""
import io, os, re, json, glob, html as htmlmod

ROOT = os.path.dirname(os.path.abspath(__file__)) + "/.."
os.chdir(ROOT)

TAG = re.compile(r'<[^>]+>')
def text_of(h):
    """เลียนแบบ textContent ของเบราว์เซอร์"""
    return re.sub(r'\s+', ' ', htmlmod.unescape(TAG.sub('', h))).strip()

def find_blocks(html, cls):
    """หา <div class="cls"> ... </div> โดยนับ <div> ซ้อน คืน (start, end_of_open, end)"""
    out = []
    for m in re.finditer(r'<div class="' + cls + r'"[^>]*>', html):
        depth, k = 1, m.end()
        while depth and k < len(html):
            nd = html.find('<div', k); cd = html.find('</div>', k)
            if cd == -1: break
            if nd != -1 and nd < cd: depth += 1; k = nd + 4
            else:
                depth -= 1; k = cd + 6
        out.append((m.start(), m.end(), k - 6))
    return out

def inner(html, cls):
    b = find_blocks(html, cls)
    return html[b[0][1]:b[0][2]] if b else None

# ---------- อ่านเนื้อหาบทจาก data/vol*.js ----------
chapters = {}
for path in sorted(glob.glob('data/vol*.js')):
    src = io.open(path, encoding='utf-8').read()
    for m in re.finditer(r'(?m)^  (b\dc\d+): `', src):
        cid, st = m.group(1), m.end() - 1
        k = src.index('`', st + 1)          # ไม่มี backtick ในเนื้อหา (ตรวจแล้ว)
        chapters[cid] = src[st + 1:k]
assert chapters, "ไม่พบเนื้อหาบทใน data/vol*.js"

# ---------- อ่านหัวบทเดิมไว้ (subject/badge/title/meta) ----------
meta_src = io.open('data/meta.js', encoding='utf-8').read()
META = {}
for m in re.finditer(r"(b\dc\d+):\{s:'([^']*)',c:'([^']*)',b:'([^']*)',t:'([^']*)',m:'([^']*)',v:(\d+)", meta_src):
    META[m.group(1)] = dict(s=m.group(2), c=m.group(3), b=m.group(4), t=m.group(5), m=m.group(6), v=int(m.group(7)))

order = sorted(chapters, key=lambda c: (int(c[1]), int(c.split('c')[1])))

# ---------- ดึงโจทย์ + หัวข้อ ----------
problems, search = [], []
for cid in order:
    h = chapters[cid]
    mt = META[cid]
    label = (mt['b'] + ' ' if mt['b'] else '') + mt['t']

    for i, t in enumerate(re.findall(r'<h3[^>]*>(.*?)</h3>', h, re.S)):
        tt = text_of(t)
        if tt: search.append({'k': 'หัวข้อ', 'c': cid, 't': tt, 'n': i})

    # หมวดของโจทย์: ต้องรู้ว่าแต่ละ problem-card อยู่ใต้หัวหมวดไหน
    topics = [(m.start(), text_of(m.group(1)))
              for m in re.finditer(r'<div class="problem-topic-header"[^>]*>(.*?)</div>', h, re.S)]
    for idx, (st, oe, en) in enumerate(find_blocks(h, 'problem-card')):
        card = h[oe:en]
        stem = inner(card, 'problem-statement')
        sol = inner(card, 'solution-content')
        if stem is None or sol is None:
            continue
        h4 = re.search(r'<h4[^>]*>(.*?)</h4>', card, re.S)
        title = text_of(h4.group(1)) if h4 else 'โจทย์ที่ %d' % (idx + 1)
        topic = ''
        for tpos, ttext in topics:
            if tpos < st: topic = ttext
            else: break
        problems.append({'id': '%s#%d' % (cid, idx), 'c': cid, 'tp': topic,
                         't': title, 'q': stem.strip(), 'a': sol.strip()})
        search.append({'k': 'โจทย์', 'c': cid, 't': title, 'p': idx})

# ---------- นับโจทย์ต่อบท ----------
npc = {}
for p in problems: npc[p['c']] = npc.get(p['c'], 0) + 1

# ---------- เขียนไฟล์ ----------
J = lambda o: json.dumps(o, ensure_ascii=False, separators=(',', ':'))

io.open('data/meta.js', 'w', encoding='utf-8').write(
    "/* หัวบท + จำนวนโจทย์ — สร้างอัตโนมัติจาก _build/build.py ห้ามแก้มือ */\n"
    "window.BIO = window.BIO || {};\nBIO.META = {\n" +
    ",\n".join("  %s:{s:'%s',c:'%s',b:'%s',t:'%s',m:'%s',v:%d,np:%d}" %
               (c, META[c]['s'], META[c]['c'], META[c]['b'], META[c]['t'], META[c]['m'],
                META[c]['v'], npc.get(c, 0)) for c in order) + "\n};\n")

io.open('data/search.js', 'w', encoding='utf-8').write(
    "/* ดัชนีค้นหา — สร้างอัตโนมัติจาก _build/build.py ห้ามแก้มือ */\n"
    "window.BIO = window.BIO || {};\nBIO.SEARCH = " + J(search) + ";\n")

io.open('data/quiz.js', 'w', encoding='utf-8').write(
    "/* คลังโจทย์ — สร้างอัตโนมัติจาก _build/build.py ห้ามแก้มือ */\n"
    "window.BIO = window.BIO || {};\nBIO.PROBLEMS = " + J(problems) + ";\n"
    "if (window.__onQuizData) window.__onQuizData();\n")

kb = lambda p: os.path.getsize(p) / 1024
print("สร้างเสร็จ:")
print(f"  บทเรียน {len(chapters)} บท · โจทย์ {len(problems)} ข้อ · ดัชนีค้นหา {len(search)} รายการ")
for p in ['data/meta.js', 'data/search.js', 'data/quiz.js']:
    print(f"  {p:18} {kb(p):8.1f} KB")
missing = [c for c in order if npc.get(c, 0) == 0]
if missing: print("  หมายเหตุ: บทที่ยังไม่มีโจทย์ —", ", ".join(missing))
