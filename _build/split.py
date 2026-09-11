#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
แยกไฟล์เดียว Biology-learning-center-v2.html ออกเป็นหลายไฟล์ (เฟส 2)
รันครั้งเดียวตอนแปลงโครงสร้าง — หลังจากนี้ใช้ build.py แทน

ผลลัพธ์:
  index.html         โครงหน้า (เล็ก โหลดเร็ว)
  css/main.css       สไตล์ทั้งหมด
  js/app.js          โค้ดแอป
  data/vol1..6.js    เนื้อหาบทเรียน แยกตามเล่ม โหลดเมื่อกดเข้าบท
"""
import io, os, re, sys

SRC = "Biology-learning-center-v2.html"
ROOT = os.path.dirname(os.path.abspath(__file__)) + "/.."
os.chdir(ROOT)

s = io.open(SRC, encoding="utf-8").read()

# ---------- 1) CSS ----------
mcss = re.search(r'<style>(.*?)</style>', s, re.S)
css = mcss.group(1)

# ---------- 2) สคริปต์ ----------
blocks = list(re.finditer(r'<script>(.*?)</script>', s, re.S))
assert len(blocks) == 2, f"คาดว่ามี 2 บล็อก แต่เจอ {len(blocks)}"
head_script = blocks[0].group(1)      # ตั้งธีมก่อนวาดหน้า — ต้องอยู่ inline ต่อไป
main = blocks[1].group(1)

i = main.find('const chapters')
j = main.find('\n};\n', i) + 4
assert i > 0 and j > i, "หา const chapters ไม่เจอ"
chdata = main[i:j]
app_js = (main[:i] + main[j:])

# ---------- 3) ตัดบทเรียนออกเป็นรายบท ----------
starts = [m.start() for m in re.finditer(r'(?m)^b\dc\d+: \{', chdata)]
assert len(starts) == 29, f"คาดว่า 29 บท เจอ {len(starts)}"
end = chdata.rfind('\n};')
chunks = []
for k, st in enumerate(starts):
    en = starts[k+1] if k+1 < len(starts) else end
    raw = chdata[st:en].rstrip()
    if raw.endswith(','):
        raw = raw[:-1]
    cid = re.match(r'(b\dc\d+):', raw).group(1)
    chunks.append((cid, raw))

# ---------- 4) META (ข้อมูลหัวบท ใช้ทุกหน้า) + แยกเนื้อหาตามเล่ม ----------
def field(raw, name):
    m = re.search(name + r"\s*:\s*'((?:[^'\\]|\\.)*)'", raw)
    return m.group(1) if m else ''

meta_lines, vols = [], {}
for cid, raw in chunks:
    vol = int(cid[1])
    body = raw[raw.index('{')+1:]           # ตัด "b1c1: {" ออก
    rich_i = body.find('richHTML:')
    assert rich_i >= 0, cid
    rich = body[rich_i + len('richHTML:'):].strip()
    assert rich.startswith('`') and rich.rstrip().endswith('}'), cid
    rich = rich.rstrip()
    assert rich.endswith('}'), cid
    rich = rich[:-1].rstrip()               # ตัด "}" ปิดบท
    assert rich.startswith('`') and rich.endswith('`'), cid
    meta_lines.append("  %s:{s:'%s',c:'%s',b:'%s',t:'%s',m:'%s',v:%d}" % (
        cid, field(raw,'subject'), field(raw,'colorClass'), field(raw,'badge'),
        field(raw,'title'), field(raw,'meta'), vol))
    vols.setdefault(vol, []).append("  %s: %s" % (cid, rich))

# ---------- 5) เขียนไฟล์ ----------
os.makedirs('css', exist_ok=True); os.makedirs('js', exist_ok=True); os.makedirs('data', exist_ok=True)
io.open('css/main.css','w',encoding='utf-8').write(css.strip() + "\n")

for vol, items in sorted(vols.items()):
    io.open('data/vol%d.js' % vol, 'w', encoding='utf-8').write(
        "/* เนื้อหาชีววิทยา %d — สร้างจาก split.py · แก้เนื้อหาที่ไฟล์นี้ได้เลย แล้วรัน _build/build.py */\n"
        "window.BIO = window.BIO || {}; BIO.CH = BIO.CH || {};\n"
        "Object.assign(BIO.CH, {\n%s\n});\n" % (vol, ",\n".join(items)))

io.open('data/meta.js','w',encoding='utf-8').write(
    "/* ข้อมูลหัวบท 29 บท — สร้างอัตโนมัติจาก _build/build.py ห้ามแก้มือ */\n"
    "window.BIO = window.BIO || {};\nBIO.META = {\n%s\n};\n" % ",\n".join(meta_lines))

io.open('js/app.js','w',encoding='utf-8').write(app_js.strip() + "\n")
io.open('_build/_head_script.txt','w',encoding='utf-8').write(head_script)

# ---------- 6) โครง HTML ----------
shell = s[:mcss.start()] + '<link rel="stylesheet" href="css/main.css">' + s[mcss.end():]
b = list(re.finditer(r'<script>(.*?)</script>', shell, re.S))[1]
shell = shell[:b.start()] + (
    '<script src="data/meta.js"></script>\n'
    '<script src="js/app.js"></script>'
) + shell[b.end():]
io.open('index.html','w',encoding='utf-8').write(shell)

kb = lambda p: os.path.getsize(p)/1024
print("แยกไฟล์เสร็จ:")
for p in ['index.html','css/main.css','js/app.js','data/meta.js'] + ['data/vol%d.js'%v for v in sorted(vols)]:
    print(f"  {p:22} {kb(p):8.1f} KB")
print(f"  {'รวม':22} {sum(kb(p) for p in ['index.html','css/main.css','js/app.js','data/meta.js']+['data/vol%d.js'%v for v in sorted(vols)]):8.1f} KB")
