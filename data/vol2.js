/* เนื้อหาชีววิทยา 2 — สร้างจาก split.py · แก้เนื้อหาที่ไฟล์นี้ได้เลย แล้วรัน _build/build.py */
window.BIO = window.BIO || {}; BIO.CH = BIO.CH || {};
Object.assign(BIO.CH, {
  b2c5: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> โครงสร้างเยื่อหุ้มเซลล์ — Fluid Mosaic Model<br>
        <strong>02</strong> การแพร่ (Diffusion) แบบธรรมดา<br>
        <strong>03</strong> ออสโมซิส (Osmosis) และน้ำผ่านเยื่อ<br>
        <strong>04</strong> Tonicity: Hypotonic · Isotonic · Hypertonic<br>
        <strong>05</strong> Facilitated diffusion — ช่อง &amp; carrier<br>
        <strong>06</strong> Active transport — Na⁺/K⁺ pump<br>
        <strong>07</strong> Bulk transport — Endocytosis / Exocytosis<br>
        <strong>08</strong> การประยุกต์ในชีวิตจริง — IV · dialysis · ถนอมอาหาร
      </div>
      <div class="tip-box">💡 เยื่อหุ้มเซลล์เป็น <strong>"กำแพงที่เลือกผ่าน"</strong> (selectively permeable) — ควบคุมให้สารที่เป็นประโยชน์เข้าและของเสียออก ใช้ได้ทั้งวิธีไม่ต้องการพลังงาน (passive) และต้องการพลังงาน (active)</div>
    </div>

    <!-- 1. Fluid Mosaic Model + SVG -->
    <div class="content-section">
      <h3>🧬 โครงสร้างเยื่อหุ้มเซลล์ — Fluid Mosaic Model</h3>
      <p>Singer และ Nicolson (1972) เสนอแบบจำลอง <strong>Fluid Mosaic Model</strong> — เยื่อหุ้มเซลล์เปรียบเหมือน "ของเหลวที่มีโปรตีนลอย" คล้ายโมเสกในกระเบื้องที่เคลื่อนไหวได้</p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Fluid Mosaic Model ของเยื่อหุ้มเซลล์</text>
          <!-- bilayer -->
          <g>
            <!-- top heads -->
            <g fill="#3B82F6">
              <circle cx="40" cy="80" r="10"/><circle cx="65" cy="80" r="10"/><circle cx="90" cy="80" r="10"/><circle cx="115" cy="80" r="10"/><circle cx="140" cy="80" r="10"/>
              <circle cx="220" cy="80" r="10"/><circle cx="245" cy="80" r="10"/><circle cx="270" cy="80" r="10"/><circle cx="295" cy="80" r="10"/><circle cx="320" cy="80" r="10"/>
              <circle cx="395" cy="80" r="10"/><circle cx="420" cy="80" r="10"/><circle cx="445" cy="80" r="10"/><circle cx="470" cy="80" r="10"/>
            </g>
            <!-- top tails (zigzag) -->
            <g stroke="#F59E0B" stroke-width="2" fill="none">
              <path d="M 37 90 L 30 105 L 35 120 L 30 135"/>
              <path d="M 43 90 L 50 105 L 45 120 L 50 135"/>
              <path d="M 62 90 L 55 105 L 60 120 L 55 135"/>
              <path d="M 68 90 L 75 105 L 70 120 L 75 135"/>
              <path d="M 87 90 L 80 105 L 85 120 L 80 135"/>
              <path d="M 93 90 L 100 105 L 95 120 L 100 135"/>
              <path d="M 112 90 L 105 105 L 110 120 L 105 135"/>
              <path d="M 118 90 L 125 105 L 120 120 L 125 135"/>
              <path d="M 137 90 L 130 105 L 135 120 L 130 135"/>
              <path d="M 143 90 L 150 105 L 145 120 L 150 135"/>

              <path d="M 217 90 L 210 105 L 215 120 L 210 135"/>
              <path d="M 223 90 L 230 105 L 225 120 L 230 135"/>
              <path d="M 242 90 L 235 105 L 240 120 L 235 135"/>
              <path d="M 248 90 L 255 105 L 250 120 L 255 135"/>
              <path d="M 267 90 L 260 105 L 265 120 L 260 135"/>
              <path d="M 273 90 L 280 105 L 275 120 L 280 135"/>
              <path d="M 292 90 L 285 105 L 290 120 L 285 135"/>
              <path d="M 298 90 L 305 105 L 300 120 L 305 135"/>
              <path d="M 317 90 L 310 105 L 315 120 L 310 135"/>
              <path d="M 323 90 L 330 105 L 325 120 L 330 135"/>

              <path d="M 392 90 L 385 105 L 390 120 L 385 135"/>
              <path d="M 398 90 L 405 105 L 400 120 L 405 135"/>
              <path d="M 417 90 L 410 105 L 415 120 L 410 135"/>
              <path d="M 423 90 L 430 105 L 425 120 L 430 135"/>
              <path d="M 442 90 L 435 105 L 440 120 L 435 135"/>
              <path d="M 448 90 L 455 105 L 450 120 L 455 135"/>
              <path d="M 467 90 L 460 105 L 465 120 L 460 135"/>
              <path d="M 473 90 L 480 105 L 475 120 L 480 135"/>
            </g>
            <!-- bottom tails mirror -->
            <g stroke="#F59E0B" stroke-width="2" fill="none">
              <path d="M 30 135 L 35 150 L 30 165 L 37 180"/>
              <path d="M 50 135 L 45 150 L 50 165 L 43 180"/>
              <path d="M 55 135 L 60 150 L 55 165 L 62 180"/>
              <path d="M 75 135 L 70 150 L 75 165 L 68 180"/>
              <path d="M 80 135 L 85 150 L 80 165 L 87 180"/>
              <path d="M 100 135 L 95 150 L 100 165 L 93 180"/>
              <path d="M 105 135 L 110 150 L 105 165 L 112 180"/>
              <path d="M 125 135 L 120 150 L 125 165 L 118 180"/>
              <path d="M 130 135 L 135 150 L 130 165 L 137 180"/>
              <path d="M 150 135 L 145 150 L 150 165 L 143 180"/>
            </g>
            <!-- bottom heads -->
            <g fill="#3B82F6">
              <circle cx="40" cy="190" r="10"/><circle cx="65" cy="190" r="10"/><circle cx="90" cy="190" r="10"/><circle cx="115" cy="190" r="10"/><circle cx="140" cy="190" r="10"/>
              <circle cx="220" cy="190" r="10"/><circle cx="245" cy="190" r="10"/><circle cx="270" cy="190" r="10"/><circle cx="295" cy="190" r="10"/><circle cx="320" cy="190" r="10"/>
              <circle cx="395" cy="190" r="10"/><circle cx="420" cy="190" r="10"/><circle cx="445" cy="190" r="10"/><circle cx="470" cy="190" r="10"/>
            </g>
          </g>
          <!-- Integral protein -->
          <rect x="170" y="70" width="40" height="130" rx="6" fill="#10B981" stroke="#065F46" stroke-width="1.5"/>
          <text x="190" y="135" text-anchor="middle" font-family="Sarabun" font-size="9" fill="white" font-weight="700">Channel</text>
          <text x="190" y="148" text-anchor="middle" font-family="Sarabun" font-size="9" fill="white">protein</text>

          <!-- Peripheral protein -->
          <ellipse cx="365" cy="65" rx="22" ry="10" fill="#F472B6" stroke="#831843"/>
          <text x="365" y="55" text-anchor="middle" font-family="Sarabun" font-size="9" fill="#831843">Peripheral</text>

          <!-- Cholesterol -->
          <ellipse cx="160" cy="135" rx="6" ry="14" fill="#FBBF24" stroke="#B45309"/>
          <ellipse cx="345" cy="135" rx="6" ry="14" fill="#FBBF24" stroke="#B45309"/>

          <!-- Glycoprotein -->
          <g>
            <rect x="475" y="50" width="14" height="40" fill="#10B981" stroke="#065F46"/>
            <path d="M 482 50 L 482 30 M 490 50 L 500 35 M 474 50 L 465 35" stroke="#7C3AED" stroke-width="1.5" fill="none"/>
            <circle cx="500" cy="35" r="3" fill="#7C3AED"/>
            <circle cx="465" cy="35" r="3" fill="#7C3AED"/>
            <circle cx="482" cy="30" r="3" fill="#7C3AED"/>
          </g>

          <text x="20" y="60" font-family="Sarabun" font-size="10" fill="#1E40AF" font-weight="700">นอกเซลล์</text>
          <text x="20" y="215" font-family="Sarabun" font-size="10" fill="#1E40AF" font-weight="700">ในเซลล์</text>
          <text x="260" y="230" text-anchor="middle" font-family="Sarabun" font-size="10" fill="#64748B" font-style="italic">หัว = Hydrophilic (มีขั้ว) · หาง = Hydrophobic (ไม่มีขั้ว)</text>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: Fluid Mosaic Model — phospholipid bilayer + integral/peripheral proteins + cholesterol + glycoproteins</div>
      </div>

      <table class="content-table">
        <tr><th>องค์ประกอบ</th><th>หน้าที่</th></tr>
        <tr><td>Phospholipid bilayer</td><td>โครงสร้างหลัก หัวมีขั้วหันออก หางไม่มีขั้วเข้า</td></tr>
        <tr><td>Integral protein</td><td>ทะลุชั้น เป็นช่อง/carrier/receptor</td></tr>
        <tr><td>Peripheral protein</td><td>บนผิว ทำงานเป็น enzyme/structural</td></tr>
        <tr><td>Cholesterol</td><td>ควบคุมความลื่นไหล (fluidity)</td></tr>
        <tr><td>Glycoprotein/Glycolipid</td><td>"ID card" ของเซลล์ — ใช้ระบุตัวและสื่อสาร</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>เยื่อหุ้มไม่ใช่กำแพงนิ่ง</strong> — โมเลกุลเคลื่อนที่ในระนาบ 2 มิติได้ ทำให้เยื่อ "ไหลได้"</div>
    </div>

    <!-- 2. Diffusion -->
    <div class="content-section">
      <h3>🚪 การแพร่ (Diffusion) — Passive Transport</h3>
      <p>การแพร่คือการเคลื่อนที่ของโมเลกุลจาก <strong>บริเวณเข้มข้นสูง</strong> ไปยัง <strong>บริเวณเข้มข้นต่ำ</strong> โดยอัตโนมัติ — ไม่ต้องใช้พลังงาน (passive)</p>
      <h4>ลักษณะของการแพร่</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>เกิดจากพลังงานความร้อน → โมเลกุลเคลื่อนที่แบบสุ่ม (Brownian motion)</li>
        <li><span class="li-dot sc-dot"></span>เป็นไปตามความต่างของความเข้มข้น (concentration gradient)</li>
        <li><span class="li-dot sc-dot"></span>หยุดเมื่อถึงจุดสมดุล (equilibrium) — ความเข้มข้นเท่ากันทุกที่</li>
      </ul>
      <h4>โมเลกุลที่แพร่ผ่านเยื่อโดยตรง (Simple diffusion)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>O₂, CO₂</strong> — โมเลกุลเล็ก ไม่มีขั้ว → ผ่าน lipid bilayer ได้ง่าย</li>
        <li><span class="li-dot sc-dot"></span><strong>N₂, ลิพิด, สเตอรอยด์</strong> — ไม่มีขั้ว ผ่านได้</li>
        <li><span class="li-dot sc-dot"></span><strong>น้ำ (H₂O)</strong> — แม้มีขั้ว แต่เล็กมาก ผ่านได้บ้าง (มี aquaporin ช่วยเร่งให้เร็วขึ้น)</li>
      </ul>
      <div class="formula-box">
        <div class="formula-label">ปัจจัยที่มีผลต่ออัตราการแพร่ (Fick's Law)</div>
        Rate ∝ (พื้นที่ผิว × ความต่างความเข้มข้น) / (ระยะทาง × ความหนาเยื่อ)<br>
        นอกจากนี้ขึ้นกับ: อุณหภูมิ ↑ → แพร่เร็ว, ขนาดโมเลกุล ↓ → แพร่เร็ว, ความหนืดของตัวกลาง
      </div>
      <div class="tip-box">💡 alveoli ในปอด มี <strong>พื้นที่ผิวมาก + เยื่อบาง</strong> → การแพร่ของ O₂/CO₂ มีประสิทธิภาพสูง</div>
    </div>

    <!-- 3. Osmosis + Tonicity + SVG -->
    <div class="content-section">
      <h3>💧 ออสโมซิส (Osmosis) และ Tonicity</h3>
      <p><strong>ออสโมซิส</strong> = การแพร่ของ <strong>น้ำ</strong> ผ่านเยื่อกึ่งซึมผ่าน (semipermeable membrane) — จากบริเวณที่ <strong>น้ำเข้มข้นสูง</strong> ไปบริเวณที่ <strong>น้ำเข้มข้นต่ำ</strong> (= ตัวละลายเข้มข้นต่ำ → สูง)</p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Tonicity: เซลล์ในสารละลาย 3 แบบ</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Hypotonic -->
            <text x="100" y="50" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#3B82F6">Hypotonic</text>
            <text x="100" y="65" text-anchor="middle" font-size="9" fill="#3B82F6">น้ำเข้า &gt; น้ำออก</text>
            <!-- Animal cell -->
            <circle cx="65" cy="120" r="22" fill="#FFE4E6" stroke="#9F1239" stroke-width="2"/>
            <text x="65" y="155" text-anchor="middle" font-size="9" fill="#9F1239">บวมแตก</text>
            <text x="65" y="167" text-anchor="middle" font-size="9" fill="#9F1239">(Lysis)</text>
            <!-- Plant cell -->
            <rect x="115" y="100" width="50" height="40" rx="4" fill="#A7F3D0" stroke="#065F46" stroke-width="2"/>
            <rect x="120" y="105" width="40" height="30" rx="2" fill="#DBEAFE"/>
            <text x="140" y="155" text-anchor="middle" font-size="9" fill="#065F46">เต่ง (Turgid)</text>
            <text x="140" y="167" text-anchor="middle" font-size="9" fill="#065F46">— ดีกับพืช</text>
            <!-- Arrows in -->
            <path d="M 40 95 L 55 110" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrW)"/>
            <path d="M 90 95 L 75 110" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrW)"/>
            <text x="65" y="85" text-anchor="middle" font-size="8" fill="#3B82F6">H₂O</text>

            <!-- Isotonic -->
            <text x="260" y="50" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#10B981">Isotonic</text>
            <text x="260" y="65" text-anchor="middle" font-size="9" fill="#10B981">น้ำเข้า = น้ำออก</text>
            <circle cx="225" cy="120" r="20" fill="#FFE4E6" stroke="#9F1239" stroke-width="2"/>
            <text x="225" y="155" text-anchor="middle" font-size="9" fill="#9F1239">ปกติ</text>
            <text x="225" y="167" text-anchor="middle" font-size="9" fill="#9F1239">(Normal)</text>
            <rect x="275" y="100" width="50" height="40" rx="4" fill="#A7F3D0" stroke="#065F46" stroke-width="2"/>
            <rect x="285" y="110" width="30" height="20" rx="2" fill="#DBEAFE"/>
            <text x="300" y="155" text-anchor="middle" font-size="9" fill="#065F46">หย่อน</text>
            <text x="300" y="167" text-anchor="middle" font-size="9" fill="#065F46">(Flaccid)</text>
            <path d="M 215 95 L 215 105" stroke="#10B981" stroke-width="2" marker-end="url(#arrW)"/>
            <path d="M 235 105 L 235 95" stroke="#10B981" stroke-width="2" marker-end="url(#arrW)"/>

            <!-- Hypertonic -->
            <text x="430" y="50" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#F43F5E">Hypertonic</text>
            <text x="430" y="65" text-anchor="middle" font-size="9" fill="#F43F5E">น้ำออก &gt; น้ำเข้า</text>
            <path d="M 380 110 Q 395 100 410 110 Q 405 130 410 140 Q 395 130 380 140 Q 385 130 380 110 Z" fill="#FFE4E6" stroke="#9F1239" stroke-width="2"/>
            <text x="395" y="155" text-anchor="middle" font-size="9" fill="#9F1239">เหี่ยว</text>
            <text x="395" y="167" text-anchor="middle" font-size="9" fill="#9F1239">(Crenation)</text>
            <rect x="445" y="100" width="50" height="40" rx="4" fill="#A7F3D0" stroke="#065F46" stroke-width="2"/>
            <rect x="455" y="115" width="20" height="10" rx="2" fill="#DBEAFE"/>
            <text x="470" y="155" text-anchor="middle" font-size="9" fill="#065F46">เหี่ยวมาก</text>
            <text x="470" y="167" text-anchor="middle" font-size="9" fill="#065F46">(Plasmolysis)</text>
            <path d="M 405 95 L 420 80" stroke="#F43F5E" stroke-width="2" marker-end="url(#arrW)"/>
            <path d="M 385 95 L 370 80" stroke="#F43F5E" stroke-width="2" marker-end="url(#arrW)"/>

            <!-- Labels rows -->
            <text x="65" y="195" text-anchor="middle" font-weight="700">เซลล์สัตว์</text>
            <text x="140" y="195" text-anchor="middle" font-weight="700">เซลล์พืช</text>
            <text x="260" y="195" text-anchor="middle">↑↑↑</text>
            <text x="430" y="195" text-anchor="middle">↑↑↑</text>
          </g>
          <defs>
            <marker id="arrW" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6"/>
            </marker>
          </defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: ผลของ tonicity ต่อเซลล์สัตว์และเซลล์พืช</div>
      </div>

      <table class="content-table">
        <tr><th>สารละลายภายนอก</th><th>เทียบกับเซลล์</th><th>เซลล์สัตว์</th><th>เซลล์พืช</th></tr>
        <tr><td>Hypotonic</td><td>ตัวละลายต่ำ น้ำมาก</td><td>บวมแตก (Hemolysis)</td><td>เต่ง (Turgid) — ดี!</td></tr>
        <tr><td>Isotonic</td><td>เท่ากัน</td><td>ปกติ</td><td>หย่อน (Flaccid)</td></tr>
        <tr><td>Hypertonic</td><td>ตัวละลายสูง น้ำน้อย</td><td>เหี่ยว (Crenation)</td><td>เหี่ยวมาก (Plasmolysis)</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>พืชชอบ Hypotonic, สัตว์ชอบ Isotonic</strong> — เพราะพืชมีผนังเซลล์รับแรงดันได้ ส่วนสัตว์ไม่มี</div>
    </div>

    <!-- 4. Facilitated diffusion -->
    <div class="content-section">
      <h3>🔓 Facilitated Diffusion — แพร่ผ่านโปรตีน</h3>
      <p>โมเลกุลใหญ่หรือมีขั้ว (เช่น กลูโคส กรดอะมิโน ไอออน) ไม่สามารถผ่าน lipid bilayer ได้โดยตรง ต้องใช้ <strong>โปรตีน</strong> ช่วย — ยังเป็น passive (ไม่ใช้ ATP)</p>
      <table class="content-table">
        <tr><th>ชนิดโปรตีน</th><th>การทำงาน</th><th>ตัวอย่าง</th></tr>
        <tr><td>Channel protein</td><td>เปิดเป็นรู สารผ่านอย่างอิสระ</td><td>Aquaporin (น้ำ), K⁺ channel</td></tr>
        <tr><td>Carrier protein</td><td>จับสาร เปลี่ยนรูป แล้วปล่อย</td><td>GLUT (กลูโคส)</td></tr>
        <tr><td>Gated channel</td><td>เปิด-ปิดตามสัญญาณ</td><td>Na⁺ channel ในเซลล์ประสาท</td></tr>
      </table>
      <div class="tip-box">💡 <strong>Aquaporin</strong> ค้นพบโดย Peter Agre (Nobel 2003) — ช่วยให้น้ำผ่านเยื่อเร็วกว่าธรรมดา 100-1000 เท่า</div>
    </div>

    <!-- 5. Active transport + SVG -->
    <div class="content-section">
      <h3>⚡ Active Transport — ใช้พลังงาน</h3>
      <p>ขนส่งสารจาก <strong>ที่ความเข้มข้นต่ำ → สูง</strong> (ทวนความเข้มข้น) — ต้องใช้ <strong>ATP</strong></p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Na⁺/K⁺ Pump — ตัวอย่าง Active Transport</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- membrane -->
            <line x1="40" y1="80" x2="480" y2="80" stroke="#1E40AF" stroke-width="2"/>
            <line x1="40" y1="160" x2="480" y2="160" stroke="#1E40AF" stroke-width="2"/>
            <text x="20" y="55" font-weight="700" fill="#1E40AF">นอก</text>
            <text x="20" y="190" font-weight="700" fill="#1E40AF">ใน</text>

            <!-- Pump (integral protein) -->
            <rect x="220" y="70" width="80" height="100" rx="10" fill="#10B981" stroke="#065F46" stroke-width="2"/>
            <text x="260" y="115" text-anchor="middle" font-weight="700" fill="white" font-size="11">Na⁺/K⁺</text>
            <text x="260" y="130" text-anchor="middle" font-weight="700" fill="white" font-size="11">ATPase</text>

            <!-- ATP -->
            <rect x="245" y="180" width="30" height="20" rx="4" fill="#F59E0B" stroke="#B45309"/>
            <text x="260" y="195" text-anchor="middle" font-size="10" font-weight="700" fill="white">ATP</text>
            <text x="260" y="220" text-anchor="middle" font-size="9" fill="#B45309">→ ADP + Pi (ปลดพลังงาน)</text>

            <!-- Na+ moving out (3 ions) -->
            <circle cx="120" cy="50" r="10" fill="#F43F5E"/><text x="120" y="54" text-anchor="middle" font-size="9" fill="white" font-weight="700">Na⁺</text>
            <circle cx="155" cy="50" r="10" fill="#F43F5E"/><text x="155" y="54" text-anchor="middle" font-size="9" fill="white" font-weight="700">Na⁺</text>
            <circle cx="190" cy="50" r="10" fill="#F43F5E"/><text x="190" y="54" text-anchor="middle" font-size="9" fill="white" font-weight="700">Na⁺</text>
            <path d="M 240 85 L 200 65" stroke="#F43F5E" stroke-width="2" marker-end="url(#arrAT)"/>
            <text x="180" y="100" font-size="9" fill="#F43F5E" font-weight="700">3 Na⁺ ออก</text>

            <!-- K+ moving in (2 ions) -->
            <circle cx="330" cy="190" r="10" fill="#7C3AED"/><text x="330" y="194" text-anchor="middle" font-size="9" fill="white" font-weight="700">K⁺</text>
            <circle cx="370" cy="190" r="10" fill="#7C3AED"/><text x="370" y="194" text-anchor="middle" font-size="9" fill="white" font-weight="700">K⁺</text>
            <path d="M 300 155 L 350 180" stroke="#7C3AED" stroke-width="2" marker-end="url(#arrAT)"/>
            <text x="350" y="145" font-size="9" fill="#7C3AED" font-weight="700">2 K⁺ เข้า</text>

            <!-- K+ ions outside (waiting) -->
            <circle cx="385" cy="55" r="10" fill="#7C3AED" opacity="0.5"/><text x="385" y="59" text-anchor="middle" font-size="9" fill="white" font-weight="700">K⁺</text>
            <circle cx="420" cy="55" r="10" fill="#7C3AED" opacity="0.5"/><text x="420" y="59" text-anchor="middle" font-size="9" fill="white" font-weight="700">K⁺</text>

            <!-- Na+ inside (waiting) -->
            <circle cx="80" cy="190" r="10" fill="#F43F5E" opacity="0.5"/><text x="80" y="194" text-anchor="middle" font-size="9" fill="white" font-weight="700">Na⁺</text>
          </g>
          <defs>
            <marker id="arrAT" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#1E293B"/>
            </marker>
          </defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: Na⁺/K⁺ Pump — สูบ 3 Na⁺ ออก + 2 K⁺ เข้า ต่อ ATP 1 ตัว</div>
      </div>

      <table class="content-table">
        <tr><th>ลักษณะ</th><th>Passive</th><th>Active</th></tr>
        <tr><td>ทิศทาง</td><td>สูง → ต่ำ</td><td>ต่ำ → สูง (ทวน)</td></tr>
        <tr><td>พลังงาน</td><td>ไม่ใช้</td><td>ใช้ ATP</td></tr>
        <tr><td>โปรตีน</td><td>บางครั้ง (facilitated)</td><td>ใช้เสมอ (pump)</td></tr>
        <tr><td>ตัวอย่าง</td><td>การแพร่ของ O₂</td><td>Na⁺/K⁺ pump, proton pump</td></tr>
      </table>
      <div class="tip-box">💡 Na⁺/K⁺ pump ใช้ <strong>~25% ของ ATP ในเซลล์</strong> ทั้งหมด สำคัญต่อกระแสประสาทและการดูดซึมในไต</div>
    </div>

    <!-- 6. Bulk transport -->
    <div class="content-section">
      <h3>🍽️ Bulk Transport — Endocytosis &amp; Exocytosis</h3>
      <p>สำหรับโมเลกุลขนาดใหญ่หรือปริมาณมาก เซลล์ใช้ <strong>vesicles</strong> ช่วยขนส่ง — ต้องใช้พลังงาน ATP</p>
      <h4>Endocytosis (เข้าเซลล์)</h4>
      <table class="content-table">
        <tr><th>ชนิด</th><th>การทำงาน</th><th>ตัวอย่าง</th></tr>
        <tr><td>Phagocytosis ("cell eating")</td><td>กลืนของแข็งใหญ่</td><td>เม็ดเลือดขาวกินแบคทีเรีย</td></tr>
        <tr><td>Pinocytosis ("cell drinking")</td><td>กลืนของเหลว</td><td>เซลล์ลำไส้ดูดของเหลว</td></tr>
        <tr><td>Receptor-mediated</td><td>จับสารจำเพาะผ่าน receptor</td><td>เซลล์ดูด LDL cholesterol</td></tr>
      </table>
      <h4>Exocytosis (ออกจากเซลล์)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>Vesicle ภายในเซลล์รวมตัวกับเยื่อหุ้ม → ปล่อยสารออกนอก</li>
        <li><span class="li-dot sc-dot"></span>ตัวอย่าง: เซลล์ตับอ่อนปล่อย insulin · เซลล์ประสาทปล่อย neurotransmitter</li>
      </ul>
      <div class="note-box">⚠️ <strong>โรค Familial Hypercholesterolemia</strong> เกิดจาก LDL receptor บกพร่อง → endocytosis ของ cholesterol ไม่ทำงาน → cholesterol สูงในเลือด</div>
    </div>

    <!-- 7. ผลในเซลล์พืช -->
    <div class="content-section">
      <h3>🌱 การลำเลียงในเซลล์พืช</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Root pressure:</strong> รากดูดน้ำผ่าน osmosis เข้ามาในไซเลม</li>
        <li><span class="li-dot sc-dot"></span><strong>Turgor pressure:</strong> แรงดันน้ำในเซลล์ดันผนัง → ทำให้พืชเต่ง ใบไม่เหี่ยว</li>
        <li><span class="li-dot sc-dot"></span><strong>Stomata opening:</strong> guard cells ดูดน้ำเข้า → เต่งและเปิดปากใบ ปล่อยน้ำออก → แฟบและปิด</li>
        <li><span class="li-dot sc-dot"></span><strong>Casparian strip:</strong> ใน endodermis ของราก ควบคุมไม่ให้สารผ่าน apoplast เข้า xylem ได้โดยตรง — ต้องผ่าน membrane (เลือกได้)</li>
      </ul>
      <div class="tip-box">💡 <strong>กินสลัดสด</strong> เพิ่งฉีดน้ำแล้วใบกรอบ เพราะเซลล์ดูดน้ำเข้า (hypotonic) → turgid</div>
    </div>

    <!-- 8. Applications -->
    <div class="content-section">
      <h3>🧪 การประยุกต์ในชีวิตจริง</h3>
      <table class="content-table">
        <tr><th>การประยุกต์</th><th>หลักการ</th></tr>
        <tr><td>น้ำเกลือ IV (0.9% NaCl)</td><td>Isotonic — ไม่ทำให้เซลล์เม็ดเลือดบวมหรือเหี่ยว</td></tr>
        <tr><td>ฟอกไต (Hemodialysis)</td><td>Diffusion ของของเสียจากเลือดผ่านเยื่อกึ่งซึมผ่าน</td></tr>
        <tr><td>ถนอมอาหารด้วยเกลือ/น้ำตาล</td><td>Hypertonic → ดึงน้ำจากแบคทีเรียออก → แห้ง ตาย</td></tr>
        <tr><td>ดองผัก/ดองเค็ม</td><td>Hypertonic → ผักหดและไม่เน่า</td></tr>
        <tr><td>การให้ปุ๋ย</td><td>เข้มข้นเกิน → ดึงน้ำออกจากราก → "ไหม้" รากพืช</td></tr>
        <tr><td>Reverse Osmosis</td><td>ใช้ความดันบังคับน้ำผ่านเยื่อ → ทำน้ำดื่มจากน้ำทะเล</td></tr>
      </table>
    </div>

    <!-- ============ 32 PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — โครงสร้างเยื่อหุ้มเซลล์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — Fluid Mosaic Model</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ใครเสนอ Fluid Mosaic Model และในปีใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Singer และ Nicolson</strong> ในปี <strong>1972</strong><br>ชื่อ "fluid" = เคลื่อนที่ได้ในระนาบ "mosaic" = โปรตีนกระจายในชั้นลิพิด<br>💡 มาแทนแบบจำลองเดิมที่คิดว่าโปรตีนเป็นชั้นแซนวิช</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — Phospholipid</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม phospholipid จึงเรียงเป็น bilayer อย่างนี้?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Phospholipid เป็น <strong>amphipathic</strong> — หัวฟอสเฟตชอบน้ำ (hydrophilic) หางกรดไขมันไม่ชอบน้ำ (hydrophobic)<br>เมื่ออยู่ในน้ำ หัวหันออกสู่น้ำ หางหันเข้าหากันภายใน → เกิด bilayer<br>💡 เป็นการจัดเรียงที่เสถียรที่สุดทางอุณหพลศาสตร์</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — Cholesterol</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> คอเลสเตอรอลทำหน้าที่อะไรในเยื่อหุ้มเซลล์?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>ควบคุมความลื่นไหล (fluidity)</strong> — อุณหภูมิสูง คอเลสเตอรอลจำกัดการเคลื่อนของลิพิด (ลด fluidity); อุณหภูมิต่ำ คอเลสเตอรอลกัน lipid ไม่ให้แข็งตัว<br>💡 ทำหน้าที่เหมือน "buffer" ของ membrane fluidity</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: Glycoprotein</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม glycoproteins ในเยื่อหุ้มเซลล์เม็ดเลือดแดงจึงเป็นพื้นฐานของหมู่เลือด ABO?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Antigen ของหมู่เลือดเป็นน้ำตาลที่แขวนกับ glycoprotein/glycolipid บนเยื่อหุ้ม RBC<br>- หมู่ A มีน้ำตาล GalNAc<br>- หมู่ B มีน้ำตาล galactose<br>- หมู่ O ไม่มีน้ำตาลเพิ่ม (มีเฉพาะ H-antigen)<br>ความต่างเล็กน้อยนี้ทำให้ระบบภูมิคุ้มกันรู้ว่าเป็นเลือดของตัวเองหรือไม่<br>💡 การปลูกถ่ายอวัยวะก็อิงหลักการนี้</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — การแพร่และ Facilitated diffusion</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — สารที่ผ่านได้</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> สารใดต่อไปนี้ผ่าน lipid bilayer ได้โดยตรง: O₂, Na⁺, กลูโคส, ไขมัน, น้ำ, K⁺</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>O₂, ไขมัน</strong> ผ่านได้สะดวก (ไม่มีขั้ว)<br><strong>น้ำ</strong> ผ่านได้ช้าเพราะเล็ก (ใช้ aquaporin เร็วกว่า)<br><strong>กลูโคส, Na⁺, K⁺</strong> ผ่านไม่ได้ ต้องอาศัยโปรตีน<br>💡 ขนาดเล็ก + ไม่มีขั้ว = ผ่านง่าย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — Channel vs Carrier</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ความต่างระหว่าง channel protein และ carrier protein คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Channel:</strong> เป็นรูเปิด สารผ่านเหมือนวิ่งผ่านท่อ — เร็วกว่า (ล้านโมเลกุล/วินาที)<br><strong>Carrier:</strong> จับสาร เปลี่ยนรูปร่าง ปล่อยอีกฝั่ง — ช้ากว่า แต่จำเพาะกว่า<br>💡 ทั้งคู่เป็น passive (ไม่ใช้ ATP) ถ้าตามความเข้มข้น</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — Aquaporin</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมเซลล์ในไตและเซลล์รากพืชต้องการ aquaporin มาก?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ทั้ง 2 เซลล์ต้องลำเลียงน้ำ <strong>ปริมาณมหาศาล</strong> ในเวลาสั้น — ไตดูดน้ำกลับเข้าเลือด รากพืชดูดน้ำจากดิน<br>การแพร่ของน้ำผ่าน lipid bilayer ตรง ๆ ช้าเกินไป — aquaporin เร่งความเร็วได้ 100-1000 เท่า<br>💡 ADH (vasopressin) ควบคุม aquaporin ใน collecting duct ของไต</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: อุณหภูมิและการแพร่</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมอาหารในตู้เย็นจึงอยู่ได้นานกว่าในอุณหภูมิห้อง — เกี่ยวข้องกับการแพร่อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> อุณหภูมิต่ำ → โมเลกุลเคลื่อนช้า → การแพร่และปฏิกิริยาเคมีของจุลินทรีย์ช้าลง → อาหารเสียช้า<br>นอกจากนี้เอนไซม์ของจุลินทรีย์ทำงานได้ไม่ดีในอุณหภูมิต่ำ<br>💡 จึงต้องเก็บอาหารใน 0-4 องศา C, แช่แข็งใน -18 องศา C</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — ออสโมซิสและ Tonicity</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — เม็ดเลือดในน้ำเปล่า</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ถ้าใส่เซลล์เม็ดเลือดแดงลงในน้ำเปล่า จะเกิดอะไร และทำไม?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> น้ำเปล่าเป็น <strong>hypotonic</strong> → น้ำแพร่เข้าเซลล์ → เซลล์บวมและแตก เรียก <strong>hemolysis</strong><br>เพราะเซลล์สัตว์ไม่มีผนังเซลล์รับแรง<br>💡 จึงห้ามฉีดน้ำเปล่าเข้าเส้นเลือด ต้องใช้ NaCl 0.9% (isotonic)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — เซลล์พืชใน hypertonic</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ผักใบเหี่ยวที่ราดเกลือเข้าไปเกิดอะไรขึ้นในระดับเซลล์?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เกลือทำให้รอบเซลล์เป็น <strong>hypertonic</strong> → น้ำแพร่ออก → vacuole หด → เยื่อหุ้มเซลล์หดตัวจากผนังเซลล์ เรียก <strong>plasmolysis</strong><br>turgor pressure ลด → ผักเหี่ยว<br>💡 ใช้หลักการนี้ดองผัก/หน่อไม้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — น้ำเกลือ IV</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมน้ำเกลือที่ฉีดเข้าเส้นต้องเป็น 0.9% NaCl?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> 0.9% NaCl เป็น <strong>isotonic</strong> เทียบกับพลาสมา → ไม่มีการแพร่สุทธิของน้ำ → เซลล์เม็ดเลือดปลอดภัย<br>ถ้าน้อยกว่า → hypotonic → เซลล์บวม; ถ้ามากกว่า → hypertonic → เซลล์เหี่ยว<br>💡 ค่า 0.9% ตรงกับ ~300 mOsm/L</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: ปลาน้ำจืดกับน้ำเค็ม</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ปลาน้ำจืดและปลาน้ำเค็มควบคุม osmosis อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>ปลาน้ำจืด:</strong> น้ำเข้าตลอด (hypotonic environment) → ปล่อยปัสสาวะเจือจางมาก, ดูด Na⁺ กลับผ่าน gills (active)<br><strong>ปลาน้ำเค็ม:</strong> น้ำออกตลอด (hypertonic environment) → ดื่มน้ำทะเลและขับเกลือออกผ่าน gills (active), ปัสสาวะเข้มข้น<br>💡 ปลาเหล่านี้เป็น "osmoregulator" — ใช้พลังงานมาก</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — Active Transport</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — Na/K pump stoichiometry</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Na⁺/K⁺ pump สูบไอออนเท่าไหร่ต่อรอบและใช้ ATP กี่ตัว?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>3 Na⁺ ออก + 2 K⁺ เข้า ต่อ ATP 1 ตัว</strong><br>ผลคือสร้าง gradient: นอกมี Na⁺ สูง, ในมี K⁺ สูง → สำคัญต่อ resting potential ของเซลล์ประสาท<br>💡 จำว่า "3 ออก 2 เข้า"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — Resting potential</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Na/K pump เกี่ยวข้องกับ resting potential ของเซลล์ประสาทอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Pump สร้าง gradient: 3 Na⁺ ออก / 2 K⁺ เข้า → ผลรวมประจุนอกบวกกว่าใน → เกิด <strong>resting potential ≈ -70 mV</strong><br>นี่คือพลังงานพร้อมใช้ที่ทำให้เกิด action potential เมื่อมีสัญญาณ<br>💡 ถ้าหยุด pump → เซลล์ประสาทไม่ทำงาน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — Secondary active transport</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เซลล์ลำไส้ดูดกลูโคสจากอาหาร — ใช้ Na+/glucose symporter ทำอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Secondary active transport</strong> — Na⁺ ไหลตาม gradient (จากนอกที่เข้มข้นสูง → ใน) พาเอากลูโคสเข้าด้วย แม้กลูโคสจะต้องไปทวน gradient<br>พลังงานมาจาก Na⁺ gradient (ที่สร้างโดย Na/K pump ก่อนหน้า)<br>💡 จึงเรียก "ทางอ้อมของ active transport"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: Ouabain</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ยา ouabain ยับยั้ง Na/K pump — คาดว่าจะมีผลอะไรกับเซลล์?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Pump หยุด → ภายในมี Na⁺ สะสม → น้ำเข้าเซลล์ → เซลล์บวม<br>นอกจากนี้ resting potential หาย → เซลล์ประสาทและกล้ามเนื้อไม่ทำงาน<br>ในทางการแพทย์ ouabain (และ digoxin) ใช้รักษาภาวะหัวใจล้มเหลว — เพิ่มการหดตัวของหัวใจ<br>💡 ขนาดเล็กเป็นยา ขนาดใหญ่เป็นพิษ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — Endocytosis และ Exocytosis</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — Phagocytosis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Phagocytosis คืออะไรและพบในเซลล์ใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> "Cell eating" — เซลล์ยื่น <strong>pseudopodia</strong> ห่อหุ้มของแข็งขนาดใหญ่ (แบคทีเรีย, ของเสีย) เข้ามาเป็น vesicle → รวมกับ lysosome ย่อย<br>พบใน: เม็ดเลือดขาว (neutrophils, macrophages), อะมีบา<br>💡 เป็นกลไก innate immunity ที่สำคัญ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — Exocytosis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เซลล์ประสาทใช้ exocytosis อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เมื่อ action potential ถึง axon terminal → Ca²⁺ ไหลเข้า → vesicles ที่บรรจุ <strong>neurotransmitter</strong> รวมกับ presynaptic membrane → ปล่อยสารใน synaptic cleft → กระตุ้นเซลล์ถัดไป<br>💡 SNARE proteins ช่วยรวม vesicle กับเยื่อ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — Receptor-mediated</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Receptor-mediated endocytosis ต่างจาก pinocytosis อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Receptor-mediated <strong>จำเพาะ</strong> — เซลล์มี receptor ที่จับสารบางชนิดเท่านั้น (เช่น LDL, insulin) → "ดูดแบบเลือก"<br>Pinocytosis <strong>ไม่จำเพาะ</strong> — ดูดของเหลวรอบเซลล์เข้ามาทั้งหมด<br>💡 Receptor-mediated มีประสิทธิภาพมากกว่าหลายร้อยเท่า</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: ไวรัสเข้าเซลล์</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ไวรัส (เช่น HIV, SARS-CoV-2) เข้าเซลล์ได้อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ไวรัสมีโปรตีนผิวที่ <strong>จับกับ receptor</strong> บนเซลล์เจ้าบ้าน (HIV จับ CD4, SARS-CoV-2 จับ ACE2) → เซลล์ทำ endocytosis เข้ามา (คิดว่าเป็นสารปกติ)<br>ไวรัสจึง "หลอก" ระบบขนส่งของเซลล์<br>💡 ยาบางตัวบล็อก receptor นี้เพื่อป้องกันการติดเชื้อ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — การลำเลียงในพืช</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — Turgor pressure</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Turgor pressure คืออะไรและมีประโยชน์อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> แรงดันที่น้ำใน vacuole ดันผนังเซลล์ของพืช → ทำให้เซลล์ <strong>เต่ง</strong> และพืช <strong>คงรูป</strong> ไม่เหี่ยว<br>ใบไม้กับลำต้นอ่อนยืนอยู่ได้ด้วย turgor — ไม่มีน้ำ = เหี่ยว<br>💡 พืชใหญ่ใช้ทั้ง turgor + lignin ในเซลล์ค้ำจุน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — Stomata</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Guard cells ของปากใบเปิดและปิดอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>เปิด:</strong> K⁺ pump เอา K⁺ เข้า guard cells → น้ำตามเข้า (osmosis) → guard cells เต่งและโค้ง → ปากใบเปิด<br><strong>ปิด:</strong> K⁺ ออก → น้ำออก → guard cells แฟบ → ปากใบปิด<br>💡 ในวันร้อน ABA หลั่งทำให้ปากใบปิด ลดการสูญน้ำ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — Casparian strip</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Casparian strip ในรากพืชทำหน้าที่อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เป็นแถบ <strong>suberin (waterproof)</strong> ที่ผนัง endodermis cells — บังคับให้น้ำและไอออนที่จะเข้าสู่ xylem ต้องผ่าน <strong>plasma membrane</strong> ของ endodermis (เลือกเข้าได้)<br>ป้องกันสารที่ไม่ต้องการเข้าทาง apoplast<br>💡 เป็นจุดควบคุมความสะอาดของน้ำที่จะถูกลำเลียงขึ้นไป</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: ใส่ปุ๋ยมากเกิน</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการใส่ปุ๋ยมากเกินไปจึงทำให้พืชเหี่ยวตายแทนที่จะโตเร็ว?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ปุ๋ยปริมาณมากทำให้น้ำในดินกลายเป็น <strong>hypertonic</strong> เทียบกับเซลล์รากพืช → น้ำแพร่ <strong>ออกจาก</strong> รากพืช → เซลล์รากเหี่ยว (plasmolysis) → พืชดูดน้ำไม่ได้ → ไหม้และตาย<br>เรียกว่า "fertilizer burn"<br>💡 จึงต้องใส่ปุ๋ยตามปริมาณที่แนะนำเท่านั้น</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — การคำนวณและอ่านกราฟ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — % NaCl</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ละลาย NaCl 9 g ในน้ำให้ครบ 1,000 mL — คำนวณ % w/v</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> %w/v = (มวล g / ปริมาตร mL) × 100 = (9/1000) × 100 = <strong>0.9%</strong><br>💡 นี่คือความเข้มข้นของน้ำเกลือ IV</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — เปลี่ยนทิศการแพร่</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ภายในเซลล์มี Na⁺ 15 mM, ภายนอก 150 mM — ทิศการแพร่ของ Na⁺ เป็นอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Na⁺ จะแพร่จาก <strong>ภายนอก (150 mM, สูง) → ภายใน (15 mM, ต่ำ)</strong> ตาม concentration gradient<br>เพื่อรักษา gradient นี้ Na/K pump ต้องสูบ Na⁺ ออกตลอด<br>💡 คล้ายลูกบอลจากที่สูงไปต่ำ — ต้องใช้กำลังถ้าจะดันกลับ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — Equilibrium</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ที่ equilibrium การแพร่หยุดหรือไม่?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>การแพร่ไม่หยุด</strong> — โมเลกุลยังเคลื่อนที่ไปมา แต่ <strong>อัตราการไปมาเท่ากัน</strong> → ไม่มี net movement<br>นี่คือ dynamic equilibrium<br>💡 ความเข้าใจผิดที่พบบ่อย — โมเลกุลไม่ "หยุด"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: คำนวณ tonicity</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ใส่เซลล์ในสารละลาย sucrose 0.5 M — ถ้าเซลล์มี sucrose 0.2 M เซลล์อยู่ในสารละลายแบบใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> สารละลายภายนอก 0.5 M &gt; ภายในเซลล์ 0.2 M → <strong>hypertonic</strong><br>น้ำจะแพร่ออกจากเซลล์ → เซลล์เหี่ยว<br>💡 ความเข้มข้นสูง = hypertonic เสมอ (เมื่อตัวละลายไม่ผ่านเยื่อ)</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — การประยุกต์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — Hemodialysis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เครื่องฟอกไต (hemodialysis) ใช้หลักการอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้หลัก <strong>diffusion ผ่านเยื่อกึ่งซึมผ่าน</strong> — เลือดของผู้ป่วยไหลผ่านท่อที่มีเยื่อ semipermeable ใกล้กับน้ำยา dialysate ที่มีองค์ประกอบเหมือนเลือดสุขภาพดี<br>ของเสีย (urea, creatinine) ในเลือดสูงกว่า → แพร่ออกไป dialysate<br>ไอออนที่ขาด (HCO₃⁻) แพร่กลับเข้าเลือด<br>💡 ใช้กับผู้ป่วยไตวาย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — ถนอมอาหาร</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการดองด้วยเกลือหรือน้ำตาลจึงป้องกันอาหารบูด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> สารละลายเข้มข้นเป็น <strong>hypertonic</strong> → น้ำในแบคทีเรียและรา <strong>แพร่ออก</strong> → จุลินทรีย์เหี่ยวและตาย → อาหารไม่เน่า<br>💡 การถนอมอาหารโบราณ: เนื้อเค็ม ปลาเค็ม ผลไม้กวน น้ำตาลแช่อิ่ม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — Reverse osmosis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Reverse osmosis ทำงานอย่างไรในการทำน้ำดื่มจากน้ำทะเล?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ปกติ osmosis = น้ำไหลจากเจือจาง → เข้มข้น<br><strong>Reverse:</strong> ใช้ความดันสูง (40-80 bar) บังคับน้ำไหลจากเข้มข้น (น้ำทะเล) → เจือจาง (น้ำสะอาด) ผ่าน semipermeable membrane ที่กันเกลือ<br>💡 ใช้พลังงานมาก แต่ได้น้ำดื่มจากน้ำทะเล</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: เซลล์มะเร็งและขนส่ง</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เซลล์มะเร็งใช้กลูโคสมากกว่าเซลล์ปกติ 10-100 เท่า (Warburg effect) — มีผลกับการขนส่งกลูโคสอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เซลล์มะเร็งสร้าง <strong>GLUT1 transporter</strong> เพิ่มขึ้นมาก เพื่อรับกลูโคสได้เร็ว → ใช้เป็นพลังงาน (แม้ในที่มี O₂ ก็ยังใช้ glycolysis)<br>หลักการนี้ใช้ใน <strong>PET scan</strong> — ฉีดน้ำตาลกัมมันตรังสี (FDG) → สะสมในเซลล์มะเร็งมาก → ตรวจพบมะเร็งได้<br>💡 Warburg effect เป็นหลักของ cancer metabolism</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>Fluid Mosaic:</strong> bilayer + integral/peripheral proteins + cholesterol + glycoproteins<br>
        <strong>Passive:</strong> Diffusion · Facilitated · Osmosis — ไม่ใช้ ATP<br>
        <strong>Active:</strong> Pump (ใช้ ATP) · Endocytosis · Exocytosis<br>
        <strong>Tonicity:</strong> Hypo (เซลล์บวม) · Iso (ปกติ) · Hyper (เหี่ยว)<br>
        <strong>Na/K pump:</strong> 3 Na⁺ ออก + 2 K⁺ เข้า / ATP<br>
        <strong>เซลล์พืช:</strong> ผนังเซลล์รับ turgor ได้ → ชอบ hypotonic
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>Osmosis = Diffusion ของสารทุกชนิด</td><td>Osmosis คือ diffusion ของ <strong>น้ำ</strong> เท่านั้น</td></tr>
        <tr><td>Facilitated diffusion ใช้ ATP</td><td>ไม่ใช้ — เป็น passive transport</td></tr>
        <tr><td>เซลล์พืชแตกใน hypotonic</td><td>ไม่แตก — ผนังเซลล์รับแรงได้ → เต่ง</td></tr>
        <tr><td>การแพร่หยุดที่ equilibrium</td><td>โมเลกุลยังเคลื่อนที่ แต่ <strong>net = 0</strong></td></tr>
        <tr><td>ทุกอย่างผ่าน lipid bilayer ได้</td><td>เฉพาะโมเลกุลเล็ก ไม่มีขั้ว — อื่นต้องใช้โปรตีน</td></tr>
        <tr><td>Exocytosis ไม่ใช้พลังงาน</td><td>ใช้ ATP เพื่อรวม vesicle กับ membrane</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> ถามว่า "ใช้ ATP หรือไม่?" → ดูทิศทาง: ตามความเข้มข้น = ไม่ใช้, ทวน = ใช้, bulk transport ก็ใช้</div>
    </div>
  `,
  b2c6: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> ภาพรวมการหายใจระดับเซลล์ — สมการรวม &amp; ATP<br>
        <strong>02</strong> ไกลโคไลซิส (Glycolysis) — ขั้นที่ 1<br>
        <strong>03</strong> Pyruvate Oxidation &amp; Krebs Cycle — ขั้นที่ 2-3<br>
        <strong>04</strong> Electron Transport Chain (ETC) + Chemiosmosis<br>
        <strong>05</strong> การหายใจแบบไม่ใช้ออกซิเจน (Fermentation)<br>
        <strong>06</strong> เผาผลาญลิพิดและโปรตีนเป็นพลังงาน<br>
        <strong>07</strong> การควบคุมเมแทบอลิซึม — Feedback inhibition<br>
        <strong>08</strong> การประยุกต์ — ออกกำลังกาย หมัก โรค
      </div>
      <div class="tip-box">💡 การหายใจระดับเซลล์คือ <strong>"การเผาน้ำตาลในเตาเล็ก ๆ"</strong> ทีละขั้น — เก็บพลังงานในรูป ATP ทีละนิด ไม่ปล่อยพร้อมกันเหมือนไฟลุก</div>
    </div>

    <!-- 1. Overview + SVG -->
    <div class="content-section">
      <h3>⚡ ภาพรวมการหายใจระดับเซลล์</h3>
      <div class="formula-box">
        <div class="formula-label">สมการรวม (Aerobic Respiration)</div>
        C₆H₁₂O₆ + 6 O₂ &rarr; 6 CO₂ + 6 H₂O + พลังงาน (~30-32 ATP)<br>
        <em>กลูโคส + ออกซิเจน &rarr; คาร์บอนไดออกไซด์ + น้ำ + ATP</em>
      </div>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">4 ขั้นตอนการหายใจระดับเซลล์</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Glucose -->
            <ellipse cx="60" cy="70" rx="30" ry="20" fill="#FBBF24" stroke="#B45309" stroke-width="2"/>
            <text x="60" y="74" text-anchor="middle" font-weight="700" font-size="11" fill="#78350F">Glucose</text>

            <!-- Stage 1 Glycolysis -->
            <rect x="30" y="110" width="120" height="60" rx="10" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/>
            <text x="90" y="130" text-anchor="middle" font-weight="700" fill="#1E40AF">1. Glycolysis</text>
            <text x="90" y="145" text-anchor="middle" font-size="9" fill="#1E40AF">ไซโทพลาซึม</text>
            <text x="90" y="158" text-anchor="middle" font-size="9" fill="#1E40AF">+2 ATP, 2 NADH</text>

            <!-- Pyruvate -->
            <ellipse cx="90" cy="195" rx="18" ry="11" fill="#FBBF24" stroke="#B45309"/>
            <text x="90" y="199" text-anchor="middle" font-size="9" font-weight="700" fill="#78350F">Pyruvate</text>

            <!-- arrow to mitochondria -->
            <path d="M 110 195 L 145 195" stroke="#065F46" stroke-width="2" marker-end="url(#arrR)"/>

            <!-- Stage 2 Pyruvate ox -->
            <rect x="155" y="170" width="100" height="50" rx="10" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
            <text x="205" y="190" text-anchor="middle" font-weight="700" fill="#B45309">2. Pyr Ox.</text>
            <text x="205" y="205" text-anchor="middle" font-size="9" fill="#B45309">Acetyl-CoA</text>

            <!-- Stage 3 Krebs -->
            <circle cx="320" cy="195" r="40" fill="#FFE4E6" stroke="#9F1239" stroke-width="2"/>
            <text x="320" y="195" text-anchor="middle" font-weight="700" fill="#9F1239">3. Krebs</text>
            <text x="320" y="210" text-anchor="middle" font-size="9" fill="#9F1239">+2 ATP</text>
            <text x="320" y="222" text-anchor="middle" font-size="9" fill="#9F1239">6 NADH, 2 FADH₂</text>
            <path d="M 255 195 L 280 195" stroke="#065F46" stroke-width="2" marker-end="url(#arrR)"/>

            <!-- Stage 4 ETC -->
            <rect x="380" y="110" width="120" height="60" rx="10" fill="#D1FAE5" stroke="#10B981" stroke-width="2"/>
            <text x="440" y="130" text-anchor="middle" font-weight="700" fill="#065F46">4. ETC + ATP</text>
            <text x="440" y="143" text-anchor="middle" font-size="9" fill="#065F46">เยื่อในไมโต</text>
            <text x="440" y="156" text-anchor="middle" font-size="9" fill="#065F46">~26-28 ATP</text>

            <path d="M 350 175 Q 410 160 425 170" stroke="#065F46" stroke-width="2" marker-end="url(#arrR)" fill="none"/>
            <text x="395" y="165" font-size="8" fill="#065F46">NADH, FADH₂</text>

            <!-- Output -->
            <text x="440" y="195" font-size="10" font-weight="700" fill="#065F46">Output:</text>
            <text x="440" y="210" font-size="9" fill="#065F46">6 CO₂ + 6 H₂O</text>
            <text x="440" y="223" font-size="9" font-weight="700" fill="#10B981">~30-32 ATP</text>

            <text x="40" y="255" font-size="9" fill="#3B82F6" font-weight="700">Anaerobic</text>
            <text x="320" y="255" text-anchor="middle" font-size="9" fill="#9F1239" font-weight="700">Aerobic (ต้องใช้ O₂)</text>
          </g>
          <defs>
            <marker id="arrR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#065F46"/>
            </marker>
          </defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: 4 ขั้นตอนของการหายใจระดับเซลล์ — Glycolysis &rarr; Pyruvate Oxidation &rarr; Krebs &rarr; ETC</div>
      </div>

      <table class="content-table">
        <tr><th>ขั้นตอน</th><th>สถานที่</th><th>วัตถุดิบ</th><th>ผลผลิต</th></tr>
        <tr><td>1. Glycolysis</td><td>ไซโทพลาซึม</td><td>กลูโคส, 2 ATP, 2 NAD⁺</td><td>2 pyruvate, 4 ATP (สุทธิ 2), 2 NADH</td></tr>
        <tr><td>2. Pyruvate Oxidation</td><td>Matrix</td><td>2 pyruvate, 2 CoA, 2 NAD⁺</td><td>2 Acetyl-CoA, 2 CO₂, 2 NADH</td></tr>
        <tr><td>3. Krebs Cycle</td><td>Matrix</td><td>2 Acetyl-CoA</td><td>4 CO₂, 6 NADH, 2 FADH₂, 2 ATP</td></tr>
        <tr><td>4. ETC + Chemiosmosis</td><td>เยื่อใน (cristae)</td><td>10 NADH, 2 FADH₂, 6 O₂</td><td>6 H₂O, ~26-28 ATP</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>ทำไม 30-32 ATP ไม่ใช่ 36-38?</strong> ตำราเก่าใช้ 38 — ปัจจุบันคำนวณใหม่: NADH ให้ ~2.5 ATP, FADH₂ ให้ ~1.5 ATP (เพราะมี "ค่าใช้จ่าย" ในการขนส่งและสูญเสีย)</div>
    </div>

    <!-- 2. Glycolysis -->
    <div class="content-section">
      <h3>🍞 Glycolysis (ไกลโคไลซิส) — ขั้นที่ 1</h3>
      <p>"การแยกน้ำตาล" — กลูโคส 1 ตัว (6C) แตกเป็น <strong>pyruvate 2 ตัว (3C)</strong> ใน 10 ขั้นตอน เกิดใน <strong>ไซโทพลาซึม</strong> ไม่ต้องใช้ O₂</p>
      <h4>2 ระยะหลัก</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Energy investment phase (ระยะลงทุน):</strong> ใช้ 2 ATP เพื่อ phosphorylate กลูโคส &rarr; F1,6BP &rarr; ตัดเป็น 2 G3P</li>
        <li><span class="li-dot sc-dot"></span><strong>Energy payoff phase (ระยะเก็บผล):</strong> 2 G3P &rarr; 2 pyruvate ได้ 4 ATP + 2 NADH</li>
      </ul>
      <div class="formula-box">
        <div class="formula-label">สรุปสุทธิของ Glycolysis</div>
        Glucose + 2 ATP + 2 NAD⁺ &rarr; 2 Pyruvate + 4 ATP + 2 NADH<br>
        <strong>สุทธิ: 2 ATP, 2 NADH, 2 Pyruvate</strong>
      </div>
      <div class="tip-box">💡 Glycolysis เกิดได้ในสิ่งมีชีวิตทุกชนิด แม้ไม่มี O₂ — เป็นเส้นทางที่ <strong>เก่าแก่ที่สุด</strong> ในวิวัฒนาการ</div>
    </div>

    <!-- 3. Krebs Cycle -->
    <div class="content-section">
      <h3>🔄 Pyruvate Oxidation &amp; Krebs Cycle</h3>
      <h4>Pyruvate Oxidation (ขั้นเชื่อม)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>Pyruvate (3C) เข้า matrix &rarr; เสีย CO₂ + NADH &rarr; เหลือ Acetyl group (2C)</li>
        <li><span class="li-dot sc-dot"></span>Acetyl group ติดกับ CoA &rarr; <strong>Acetyl-CoA</strong> &rarr; เข้า Krebs</li>
        <li><span class="li-dot sc-dot"></span>เกิด 1 ครั้งต่อ pyruvate &rarr; 2 ครั้งต่อกลูโคส</li>
      </ul>

      <h4>Krebs Cycle (Citric Acid Cycle / TCA)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>Acetyl-CoA (2C) + OAA (4C) &rarr; <strong>Citrate (6C)</strong></li>
        <li><span class="li-dot sc-dot"></span>ใน 8 ขั้นตอน citrate ค่อย ๆ ปลดปล่อย 2 CO₂ + 3 NADH + 1 FADH₂ + 1 ATP</li>
        <li><span class="li-dot sc-dot"></span>กลับมาเป็น OAA (4C) เพื่อรับ Acetyl-CoA ตัวถัดไป &rarr; เป็น <strong>วงจร</strong></li>
      </ul>
      <div class="formula-box">
        <div class="formula-label">Output ของ Krebs ต่อกลูโคส 1 โมล (วน 2 รอบ)</div>
        4 CO₂ + 6 NADH + 2 FADH₂ + 2 ATP<br>
        + จาก pyruvate oxidation: 2 CO₂ + 2 NADH<br>
        <strong>รวมทั้งหมด: 6 CO₂, 8 NADH, 2 FADH₂, 2 ATP</strong>
      </div>
      <div class="note-box">⚠️ <strong>CO₂ ที่เราหายใจออก</strong> มาจาก pyruvate oxidation และ Krebs cycle <strong>ทั้งหมด</strong> — ไม่ใช่จากออกซิเจน!</div>
    </div>

    <!-- 4. ETC + SVG -->
    <div class="content-section">
      <h3>🔋 Electron Transport Chain (ETC) + Chemiosmosis</h3>
      <p>เป็นขั้นสุดท้าย — ปั๊มโปรตอนสร้าง gradient แล้วใช้ ATP synthase ผลิต ATP</p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">ETC + ATP Synthase ที่เยื่อในไมโทคอนเดรีย</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Membrane lines -->
            <line x1="20" y1="80" x2="500" y2="80" stroke="#3B82F6" stroke-width="2"/>
            <line x1="20" y1="190" x2="500" y2="190" stroke="#3B82F6" stroke-width="2"/>
            <text x="20" y="55" font-weight="700" fill="#3B82F6">Intermembrane space (H⁺ สูง)</text>
            <text x="20" y="220" font-weight="700" fill="#3B82F6">Matrix (H⁺ ต่ำ)</text>

            <!-- Complex I -->
            <rect x="50" y="80" width="50" height="110" rx="6" fill="#7C3AED" stroke="#5B21B6" stroke-width="2"/>
            <text x="75" y="135" text-anchor="middle" font-weight="700" fill="white">I</text>
            <text x="75" y="148" text-anchor="middle" font-size="8" fill="white">NADH</text>
            <!-- Complex II -->
            <rect x="135" y="120" width="50" height="70" rx="6" fill="#A78BFA" stroke="#5B21B6" stroke-width="2"/>
            <text x="160" y="155" text-anchor="middle" font-weight="700" fill="white">II</text>
            <text x="160" y="168" text-anchor="middle" font-size="8" fill="white">FADH₂</text>
            <!-- Complex III -->
            <rect x="220" y="80" width="50" height="110" rx="6" fill="#7C3AED" stroke="#5B21B6" stroke-width="2"/>
            <text x="245" y="135" text-anchor="middle" font-weight="700" fill="white">III</text>
            <!-- Complex IV -->
            <rect x="305" y="80" width="50" height="110" rx="6" fill="#7C3AED" stroke="#5B21B6" stroke-width="2"/>
            <text x="330" y="130" text-anchor="middle" font-weight="700" fill="white">IV</text>
            <text x="330" y="145" text-anchor="middle" font-size="8" fill="white">O₂</text>

            <!-- ATP synthase -->
            <g>
              <rect x="395" y="80" width="50" height="80" rx="6" fill="#10B981" stroke="#065F46" stroke-width="2"/>
              <circle cx="420" cy="180" r="22" fill="#10B981" stroke="#065F46" stroke-width="2"/>
              <text x="420" y="120" text-anchor="middle" font-weight="700" fill="white" font-size="9">ATP</text>
              <text x="420" y="135" text-anchor="middle" font-weight="700" fill="white" font-size="9">synthase</text>
              <text x="420" y="185" text-anchor="middle" font-weight="700" fill="white" font-size="11">F₁</text>
            </g>

            <!-- Electrons -->
            <path d="M 100 130 L 135 145" stroke="#F43F5E" stroke-width="2.5" marker-end="url(#arrE)" fill="none"/>
            <path d="M 185 145 Q 200 100 220 130" stroke="#F43F5E" stroke-width="2.5" marker-end="url(#arrE)" fill="none"/>
            <path d="M 270 135 L 305 135" stroke="#F43F5E" stroke-width="2.5" marker-end="url(#arrE)" fill="none"/>
            <text x="200" y="100" font-size="10" fill="#F43F5E" font-weight="700">e⁻ ไหล</text>

            <!-- H+ pumped up -->
            <path d="M 75 175 Q 75 130 75 75" stroke="#1E40AF" stroke-width="2" marker-end="url(#arrH)" fill="none"/>
            <path d="M 245 175 Q 245 130 245 75" stroke="#1E40AF" stroke-width="2" marker-end="url(#arrH)" fill="none"/>
            <path d="M 330 175 Q 330 130 330 75" stroke="#1E40AF" stroke-width="2" marker-end="url(#arrH)" fill="none"/>
            <text x="100" y="70" font-size="9" fill="#1E40AF" font-weight="700">H⁺ ปั๊มขึ้น</text>

            <!-- H+ down through ATP synthase -->
            <path d="M 420 70 L 420 165" stroke="#10B981" stroke-width="2.5" marker-end="url(#arrG)" fill="none"/>
            <text x="450" y="125" font-size="10" fill="#10B981" font-weight="700">H⁺ ลง</text>
            <text x="450" y="138" font-size="9" fill="#10B981">&rarr; หมุน</text>

            <!-- O2 + H2O -->
            <text x="380" y="220" font-size="9" fill="#9F1239" font-weight="700">½O₂ + 2H⁺ + 2e⁻ &rarr; H₂O</text>

            <!-- ADP + Pi -> ATP -->
            <text x="380" y="245" font-size="10" font-weight="700" fill="#065F46">ADP + Pi &rarr; ATP</text>
          </g>
          <defs>
            <marker id="arrE" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#F43F5E"/></marker>
            <marker id="arrH" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1E40AF"/></marker>
            <marker id="arrG" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10B981"/></marker>
          </defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: ETC ส่ง e⁻ ผ่าน Complex I→II→III→IV ปั๊ม H⁺ ขึ้น Intermembrane space → ATP synthase ใช้ H⁺ flow ผลิต ATP</div>
      </div>

      <h4>กลไกการทำงาน</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>NADH</strong> ปล่อย e⁻ ที่ Complex I → ส่งผ่าน Complex III → IV ในที่สุดให้ O₂ → H₂O</li>
        <li><span class="li-dot sc-dot"></span><strong>FADH₂</strong> ปล่อย e⁻ ที่ Complex II → III → IV (ข้าม I → ได้พลังงานน้อยกว่า)</li>
        <li><span class="li-dot sc-dot"></span>การไหลของ e⁻ ทำให้ Complex I, III, IV <strong>ปั๊ม H⁺</strong> ขึ้นไป Intermembrane space</li>
        <li><span class="li-dot sc-dot"></span>เกิด <strong>proton gradient</strong> (electrochemical) — เหมือนเขื่อนเก็บน้ำสูง</li>
        <li><span class="li-dot sc-dot"></span><strong>ATP Synthase</strong> ปล่อย H⁺ ลงตาม gradient → หมุน F₁ → สร้าง ATP จาก ADP + Pi (Chemiosmosis ของ Peter Mitchell)</li>
      </ul>
      <div class="note-box">⚠️ <strong>O₂ คือ "ตัวรับ e⁻ ตัวสุดท้าย"</strong> ที่ Complex IV — ถ้าไม่มี O₂ ETC จะหยุด → NADH สะสม → Krebs และ glycolysis ก็หยุดในที่สุด → เซลล์ตาย</div>
    </div>

    <!-- 5. Fermentation -->
    <div class="content-section">
      <h3>🍷 การหายใจแบบไม่ใช้ออกซิเจน (Fermentation)</h3>
      <p>เมื่อไม่มี O₂ เซลล์ใช้ <strong>fermentation</strong> เพื่อ <strong>regenerate NAD⁺</strong> ให้ glycolysis ทำงานต่อ — ได้ ATP เพียง 2 ตัวต่อกลูโคส</p>
      <table class="content-table">
        <tr><th>ชนิด</th><th>สิ่งมีชีวิต</th><th>ผลผลิต</th><th>การประยุกต์</th></tr>
        <tr><td>Lactic acid fermentation</td><td>กล้ามเนื้อ, แบคทีเรียบางชนิด</td><td>2 lactate (3C)</td><td>โยเกิร์ต ชีส, ปวดกล้ามเนื้อ</td></tr>
        <tr><td>Alcohol fermentation</td><td>ยีสต์, แบคทีเรียบางชนิด</td><td>2 ethanol + 2 CO₂</td><td>เบียร์ ไวน์ ขนมปัง</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">ผลรวม</div>
        <strong>Lactic:</strong> Glucose &rarr; 2 Lactate + 2 ATP<br>
        <strong>Alcoholic:</strong> Glucose &rarr; 2 Ethanol + 2 CO₂ + 2 ATP
      </div>
      <div class="tip-box">💡 <strong>ปวดกล้ามเนื้อหลังออกกำลังกาย:</strong> มาจาก lactate สะสม — เมื่อใช้ O₂ ไม่ทัน กล้ามเนื้อใช้ lactic fermentation ชั่วคราว</div>
    </div>

    <!-- 6. Lipid + Protein -->
    <div class="content-section">
      <h3>🧈 การเผาผลาญลิพิดและโปรตีนเป็นพลังงาน</h3>
      <h4>ลิพิด (Fat)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>Triglyceride แยกเป็น glycerol + 3 กรดไขมัน</li>
        <li><span class="li-dot sc-dot"></span>Glycerol &rarr; G3P เข้า glycolysis</li>
        <li><span class="li-dot sc-dot"></span>กรดไขมันถูก <strong>β-oxidation</strong> ใน mitochondria → แยกทีละ 2C เป็น Acetyl-CoA → Krebs</li>
        <li><span class="li-dot sc-dot"></span>กรดไขมัน 1 โมเลกุล (C₁₆) ให้ ~106 ATP — มากกว่ากลูโคส 3 เท่า!</li>
      </ul>
      <h4>โปรตีน</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>โปรตีนแยกเป็นกรดอะมิโน</li>
        <li><span class="li-dot sc-dot"></span><strong>Deamination</strong> ในตับ — ถอด -NH₂ ออก เปลี่ยนเป็น urea ขับทางปัสสาวะ</li>
        <li><span class="li-dot sc-dot"></span>โครงเหลือเข้า Krebs (เช่น alanine → pyruvate, glutamate → α-ketoglutarate)</li>
      </ul>
      <div class="tip-box">💡 <strong>ลำดับการเผาผลาญตอนอด:</strong> Glycogen ตับ (6 ชม.) → ไขมัน (หลายวัน) → โปรตีนกล้ามเนื้อ (สุดท้าย)</div>
    </div>

    <!-- 7. Regulation -->
    <div class="content-section">
      <h3>🎛️ การควบคุมเมแทบอลิซึม</h3>
      <p>เซลล์ควบคุมการหายใจตาม <strong>ความต้องการพลังงาน</strong> ผ่านกลไก feedback inhibition ของเอนไซม์สำคัญ</p>
      <table class="content-table">
        <tr><th>เอนไซม์ control</th><th>ขั้น</th><th>กระตุ้นโดย</th><th>ยับยั้งโดย</th></tr>
        <tr><td>PFK (Phosphofructokinase)</td><td>Glycolysis ขั้นที่ 3</td><td>AMP (พลังงานต่ำ)</td><td>ATP, citrate (พลังงานสูง)</td></tr>
        <tr><td>Pyruvate dehydrogenase</td><td>Pyruvate oxidation</td><td>NAD⁺, ADP, Ca²⁺</td><td>NADH, ATP, acetyl-CoA</td></tr>
        <tr><td>Citrate synthase</td><td>Krebs ขั้นแรก</td><td>OAA</td><td>NADH, ATP, succinyl-CoA</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>เมื่อ ATP สูง</strong> → เอนไซม์ control ถูกยับยั้ง → glycolysis/Krebs ช้าลง → ประหยัดสาร <strong>เมื่อ ATP ต่ำ</strong> → AMP สูง → กระตุ้นเอนไซม์ → ผลิต ATP เพิ่ม</div>
    </div>

    <!-- 8. Applications -->
    <div class="content-section">
      <h3>💪 การประยุกต์ในชีวิตจริง</h3>
      <table class="content-table">
        <tr><th>การประยุกต์</th><th>หลักการ</th></tr>
        <tr><td>ออกกำลังกายแบบ Aerobic (วิ่งจ๊อกกิ้ง)</td><td>ใช้ O₂ พอ → สร้าง ATP เต็มที่ ~30 ATP/กลูโคส</td></tr>
        <tr><td>ออกกำลังกายแบบ Anaerobic (sprint, ยกน้ำหนัก)</td><td>O₂ ไม่ทัน → กล้ามเนื้อใช้ lactic fermentation → ปวดกล้ามเนื้อ</td></tr>
        <tr><td>การหมักไวน์/เบียร์</td><td>ยีสต์ทำ alcohol fermentation → ผลิต ethanol + CO₂</td></tr>
        <tr><td>การหมักโยเกิร์ต</td><td>Lactobacillus ทำ lactic fermentation → กรด pH ต่ำ → casein curdle</td></tr>
        <tr><td>ขนมปังฟู</td><td>ยีสต์ผลิต CO₂ → ขนมปังพอง</td></tr>
        <tr><td>Cyanide poisoning</td><td>ยับยั้ง Complex IV → ETC หยุด → ATP ตก → ตายเร็ว</td></tr>
        <tr><td>2,4-DNP (uncoupler)</td><td>ทำให้เยื่อรั่ว H⁺ → ETC หมุน แต่ไม่ผลิต ATP → ความร้อน → น้ำหนักลด (อันตราย)</td></tr>
      </table>
    </div>

    <!-- ============ 32 PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — ภาพรวมการหายใจ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — สมการรวม</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เขียนสมการรวมของการหายใจแบบใช้ O₂ พร้อมระบุที่มาของ CO₂ และ H₂O</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> C₆H₁₂O₆ + 6 O₂ &rarr; 6 CO₂ + 6 H₂O + ATP<br>CO₂ มาจาก <strong>Pyruvate oxidation + Krebs cycle</strong> (ปลดทีละ C)<br>H₂O มาจาก <strong>ETC ที่ Complex IV</strong> (½ O₂ + 2H⁺ + 2e⁻ → H₂O)<br>💡 ดังนั้น O₂ ไม่ใช่ที่มาของ CO₂ — O₂ ใช้รับ e⁻!</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — Total ATP yield</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ผลรวม ATP ที่ได้จากกลูโคส 1 โมเลกุลในการหายใจแบบ aerobic คือเท่าใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ประมาณ <strong>30-32 ATP</strong><br>2 (Glycolysis) + 2 (Krebs) + 26-28 (ETC) = 30-32<br>💡 ตำราเก่าให้ 38 — ปัจจุบันลดเพราะนับ "ค่าใช้จ่ายขนส่ง"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — สถานที่</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุสถานที่ของแต่ละขั้น: Glycolysis, Pyruvate oxidation, Krebs, ETC</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Glycolysis = <strong>ไซโทพลาซึม</strong> (ไม่ต้องใช้ mitochondria)<br>Pyruvate oxidation + Krebs = <strong>Matrix</strong> ของไมโทคอนเดรีย<br>ETC + ATP synthase = <strong>เยื่อชั้นใน (cristae)</strong><br>💡 เซลล์ที่ไม่มี mitochondria (RBC) ใช้แต่ glycolysis</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: Endosymbiosis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> หลักฐานใดในการหายใจระดับเซลล์สนับสนุนทฤษฎี endosymbiosis?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Glycolysis เกิดใน <strong>ไซโทพลาซึม</strong> เหมือนแบคทีเรีย — แสดงว่าเป็นกระบวนการเก่าแก่<br>ส่วน Krebs และ ETC เกิดใน <strong>mitochondria</strong> ซึ่งเคยเป็นแบคทีเรียอิสระ → เซลล์เจ้าบ้านได้ "โรงงานพลังงานขั้นสูง" ฟรี<br>💡 มนุษย์ใช้ ATP มากกว่า 40 kg/วัน เพราะ mitochondria</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — Glycolysis</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — Investment vs Payoff</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ในระยะ investment ของ glycolysis ใช้ ATP กี่ตัว? ระยะ payoff สร้าง ATP กี่ตัว? สุทธิเท่าไหร่?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Investment ใช้ <strong>2 ATP</strong> (เพื่อ phosphorylate glucose และ F6P)<br>Payoff สร้าง <strong>4 ATP</strong> (จาก 2 G3P)<br>สุทธิ <strong>+2 ATP</strong><br>💡 NADH ยังนับเป็น "เงินออม" รอใช้ใน ETC</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — Pyruvate</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Pyruvate มีกี่คาร์บอนและถูกแยกอย่างไรในขั้นถัดไป?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Pyruvate มี <strong>3 คาร์บอน</strong><br>ใน pyruvate oxidation: เสีย 1 CO₂ + 1 NADH + รวมกับ CoA → <strong>Acetyl-CoA (2C)</strong><br>💡 1 กลูโคส (6C) → 2 pyruvate (3C+3C) → 2 acetyl-CoA (2C+2C) + 2 CO₂</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — O₂ จำเป็นใน glycolysis?</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Glycolysis ต้องใช้ O₂ หรือไม่? อธิบาย</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>ไม่ต้อง</strong> — glycolysis เกิดได้ในไซโทพลาซึมโดยไม่ต้องใช้ O₂<br>แต่ต้องมี <strong>NAD⁺</strong> เพียงพอ — ถ้าไม่มี O₂ ETC หยุด NADH สะสม NAD⁺ หมด → glycolysis ก็หยุด → fermentation มาช่วย regenerate NAD⁺<br>💡 จึงเรียก glycolysis ว่า anaerobic ในแง่ที่ไม่ใช้ O₂ <strong>โดยตรง</strong></div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: PFK regulation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เอนไซม์ PFK ถูกยับยั้งโดย ATP — มีประโยชน์อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เมื่อเซลล์มี ATP มาก → ไม่ต้องการพลังงานเพิ่ม → ATP จับ allosteric site ของ PFK → ยับยั้ง glycolysis → ประหยัดกลูโคส<br>กลไก <strong>negative feedback</strong> ที่ป้องกันการเผาผลาญเกินจำเป็น<br>💡 ตรงข้าม: AMP สูง (พลังงานต่ำ) → กระตุ้น PFK → ผลิต ATP เพิ่ม</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — Krebs Cycle</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — Krebs output (1 รอบ)</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Krebs cycle 1 รอบ (จาก Acetyl-CoA 1 ตัว) ผลิตอะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>2 CO₂ + 3 NADH + 1 FADH₂ + 1 ATP</strong><br>ต่อ 1 กลูโคสจะวน Krebs 2 รอบ → ได้ 4 CO₂, 6 NADH, 2 FADH₂, 2 ATP<br>💡 จำว่า "2-3-1-1 ต่อรอบ"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — Citrate และ OAA</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Acetyl-CoA + OAA → ? และเป็นจุดเริ่มของ Krebs อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Acetyl-CoA (2C) + OAA (4C) → <strong>Citrate (6C)</strong><br>เป็นขั้นแรกของ Krebs โดยเอนไซม์ <strong>citrate synthase</strong><br>OAA ถูก regenerate กลับมาในขั้นสุดท้ายของวงจร — จึงเรียกว่า "cycle"<br>💡 ชื่อ "citric acid cycle" มาจาก citrate</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — ที่มาของ CO₂</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> CO₂ ที่ปล่อยจาก Krebs cycle มาจาก carbon ของอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> มาจาก <strong>carbon ของกลูโคสเดิม</strong> ที่เคยเป็น pyruvate และ acetyl-CoA<br>ใน 1 รอบ Krebs ปลด 2 CO₂ (จากการเสีย carbon ของ isocitrate และ α-ketoglutarate)<br>💡 ดังนั้น carbon ของเราที่หายใจออกในรูป CO₂ มาจาก กลูโคสที่เรากิน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: Krebs cycle reversed?</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Krebs cycle ทำงานในทิศตรงข้ามได้หรือไม่?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> โดยปกติ Krebs <strong>ไม่ทำงานย้อนทาง</strong> เพราะปฏิกิริยาหลายขั้นเป็น "ทางเดียว" (irreversible) เช่น citrate synthase, α-KG dehydrogenase<br>อย่างไรก็ตามในแบคทีเรียบางชนิด (เช่น autotroph anaerobic) มี <strong>"reverse TCA"</strong> ใช้ตรึง CO₂<br>💡 เซลล์ใช้ intermediates ของ Krebs เป็นสาร <strong>"คนกลาง"</strong> สำหรับ biosynthesis (amino acids, lipids)</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — ETC และ Chemiosmosis</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — Final electron acceptor</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ใครเป็นตัวรับ electron ตัวสุดท้ายใน ETC? เกิดอะไรขึ้น?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>O₂</strong> เป็นตัวรับ e⁻ สุดท้ายที่ Complex IV<br>O₂ + 2 e⁻ + 2 H⁺ → H₂O<br>นี่คือเหตุผลที่เรา <strong>ต้องหายใจ O₂</strong> — ไม่ใช่เพื่อ "ใช้" แต่เพื่อ "รับ e⁻ จากการเผากลูโคส"<br>💡 H₂O ที่เกิดในเซลล์เรียก "metabolic water" — ออกผ่านการหายใจ ปัสสาวะ เหงื่อ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — Chemiosmosis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Chemiosmosis คืออะไร และใครเสนอ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Chemiosmosis = การใช้ <strong>proton gradient</strong> ขับเคลื่อนการสังเคราะห์ ATP — H⁺ ไหลผ่าน ATP synthase หมุนแกนกลาง (F₁) → กระตุ้นให้รวม ADP + Pi เป็น ATP<br>เสนอโดย <strong>Peter Mitchell</strong> ในปี 1961 (Nobel 1978)<br>💡 หลักการเดียวกันใช้ใน photosynthesis (chloroplast)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — NADH vs FADH₂</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม NADH ให้ ATP มากกว่า FADH₂?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> NADH เข้า ETC ที่ <strong>Complex I</strong> → ผ่าน I, III, IV ปั๊ม H⁺ ได้ <strong>3 จุด</strong> → ~2.5 ATP<br>FADH₂ เข้าที่ <strong>Complex II</strong> → ผ่าน III, IV เพียง 2 จุด → ~1.5 ATP<br>💡 ระดับพลังงานของ NADH สูงกว่า FADH₂</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: Uncoupler</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> 2,4-DNP เป็น "uncoupler" ของ ETC — มันทำงานอย่างไรและทำไมอันตราย?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> 2,4-DNP เป็นโมเลกุลที่นำ H⁺ ผ่านเยื่อใน <strong>โดยไม่ผ่าน ATP synthase</strong> → proton gradient ถูกทำลาย → ETC ทำงานต่อ (เพื่อพยายามสร้าง gradient) แต่ไม่ผลิต ATP<br>ผลคือ <strong>เผากลูโคส = ความร้อน</strong> → ไม่มี ATP → เซลล์ตายเพราะขาดพลังงาน<br>เคยใช้ลดน้ำหนัก ปี 1930s — ปัจจุบันห้ามใช้เพราะเสียชีวิตเยอะ<br>💡 ในร่างกายมี uncoupler ธรรมชาติ: UCP1 ใน brown fat ช่วยสร้างความร้อนในทารก</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — Fermentation</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — เปรียบเทียบ 2 fermentations</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Lactic acid และ Alcohol fermentation ต่างกันที่ผลผลิตอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Lactic acid:</strong> Pyruvate → Lactate (3C) — ไม่ปล่อย CO₂<br><strong>Alcohol:</strong> Pyruvate → Acetaldehyde → Ethanol (2C) + CO₂<br>ทั้งคู่ regenerate NAD⁺ เพื่อให้ glycolysis ทำงานต่อ<br>💡 ทั้งคู่ผลิตเพียง <strong>2 ATP/glucose</strong></div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — กล้ามเนื้อปวด</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการ sprint แล้วปวดเมื่อยกล้ามเนื้อ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ขณะ sprint เซลล์กล้ามเนื้อใช้ ATP เร็วมาก → O₂ ขนส่งไม่ทัน → กล้ามเนื้อใช้ <strong>lactic fermentation</strong><br>Lactate สะสม → pH ลดลง → เอนไซม์ทำงานน้อย + กระตุ้นเส้นประสาทเจ็บ<br>หลังออกกำลังกาย ตับนำ lactate ไป convert กลับเป็น glucose (Cori cycle)<br>💡 จึงต้อง "cool down" หลังออกกำลังกายเข้ม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — Yeast</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมขนมปังจึงฟู และทำไมเบียร์มีฟอง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ยีสต์ทำ <strong>alcohol fermentation</strong> → ปล่อย <strong>CO₂</strong> และ ethanol<br>ในขนมปัง: CO₂ ทำให้แป้งพอง (ethanol ระเหยตอนอบ)<br>ในเบียร์: CO₂ ทำให้มีฟอง (ethanol เป็นแอลกอฮอล์)<br>💡 ยีสต์ตัวเดียวกัน — แค่ใช้เงื่อนไขต่างกัน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: Pasteur Effect</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> "Pasteur Effect" คืออะไร — ทำไมเซลล์ใช้กลูโคสช้าลงเมื่อมี O₂?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เมื่อมี O₂ → ETC ทำงาน → ATP สูง → ATP ยับยั้ง PFK → glycolysis ช้า<br>เพราะ aerobic ให้ ATP มากกว่า ~15 เท่า → ใช้กลูโคสน้อยลงเพื่อได้ ATP เท่ากัน<br>💡 อย่างไรก็ตาม <strong>เซลล์มะเร็ง ฝ่าฝืน</strong> Pasteur effect — ใช้ glycolysis สูงแม้มี O₂ (Warburg effect)</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — เผาผลาญสารอื่น</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — ไขมัน vs น้ำตาล</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมร่างกายจึงเก็บพลังงานสำรองในรูปไขมันมากกว่าน้ำตาล?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) ไขมันให้ <strong>9 kcal/g</strong> vs น้ำตาล 4 kcal/g — มากกว่า 2.25 เท่า<br>(2) ไขมันเก็บแบบไม่ดูดน้ำ (anhydrous) ส่วนน้ำตาลต้องเก็บกับน้ำ → ไขมัน 1 g เก็บพลังงานได้เท่ากับ glycogen ~6 g<br>(3) ไขมันมี C-H bonds มาก → ปลดพลังงานในรูป e⁻ ได้มาก<br>💡 จึงเรียกไขมันว่า "long-term energy storage"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — β-oxidation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> β-oxidation ทำอะไร และเกิดที่ไหน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ตัดสาย <strong>กรดไขมัน</strong> ออกทีละ 2 C → กลายเป็น Acetyl-CoA ป้อนเข้า Krebs<br>เกิดใน <strong>matrix ของไมโทคอนเดรีย</strong> (ในเซลล์สัตว์)<br>ต่อทุก ๆ 2 C ที่ตัดได้ 1 NADH + 1 FADH₂ + 1 Acetyl-CoA<br>💡 กรดไขมัน C₁₆ (palmitic) → 8 Acetyl-CoA → ~106 ATP</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — Deamination</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Deamination ของกรดอะมิโนคืออะไร และเกิดของเสียอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> กระบวนการ <strong>ถอดหมู่ -NH₂</strong> ออกจากกรดอะมิโน → ส่วน C-skeleton เข้า Krebs<br>หมู่ -NH₂ เปลี่ยนเป็น <strong>NH₃</strong> (พิษ) → ตับเปลี่ยนเป็น <strong>urea</strong> (ความเป็นพิษน้อย) → ขับทางปัสสาวะ<br>💡 ปลาส่วนใหญ่ขับ NH₃ โดยตรง (เพราะอยู่ในน้ำ), นกขับ uric acid (ประหยัดน้ำ)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: Ketogenic diet</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Ketogenic diet ให้เกิด ketosis ในร่างกาย — อธิบายในแง่ metabolism</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Keto diet (ไขมันสูง คาร์บต่ำ) → ร่างกายขาด glucose → ใช้ไขมันเป็นพลังงานหลัก → Acetyl-CoA สะสมเกิน Krebs ใช้ทัน → ตับเปลี่ยนเป็น <strong>ketone bodies</strong> (acetoacetate, β-hydroxybutyrate) → ใช้แทน glucose ในสมอง<br>💡 ใช้รักษาโรคลมชักในเด็กบางราย แต่ระยะยาวเสี่ยงต่อไต/ตับ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — การควบคุม</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — Feedback inhibition</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> อธิบายหลักการ feedback inhibition ในการหายใจระดับเซลล์</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ผลผลิตปลายทาง (ATP, NADH, citrate) จับ allosteric site ของ <strong>เอนไซม์ขั้นต้น</strong> → ยับยั้งการทำงาน → ลดผลผลิต<br>เป็นกลไก <strong>negative feedback</strong> รักษา balance พลังงาน<br>💡 ATP ยับยั้ง PFK ใน glycolysis, NADH ยับยั้ง pyruvate dehydrogenase</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — Pyruvate dehydrogenase</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Pyruvate dehydrogenase ถูกควบคุมโดย NADH และ ATP อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> NADH สูง = พลังงานพอ → ยับยั้ง pyruvate dehydrogenase → ไม่ผลิต acetyl-CoA เพิ่ม<br>ATP สูง → ยับยั้งเช่นกัน<br>เมื่อความต้องการ ATP สูงขึ้น (ออกกำลังกาย) → NADH/ATP ลด → เอนไซม์ active → ผลิต acetyl-CoA ส่งเข้า Krebs<br>💡 รวมถึง Ca²⁺ ในกล้ามเนื้อกระตุ้นด้วย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — Insulin</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Insulin ส่งผลต่อการหายใจระดับเซลล์อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Insulin (หลั่งเมื่อ น้ำตาลในเลือดสูง) → กระตุ้น <strong>GLUT4 transporter</strong> เพิ่ม → glucose เข้าเซลล์มาก → glycolysis และ Krebs ทำงานเพิ่ม<br>นอกจากนี้ insulin กระตุ้นการเก็บ glucose เป็น <strong>glycogen</strong> ในตับและกล้ามเนื้อ<br>💡 ผู้ป่วยเบาหวานขาด insulin → glucose ในเลือดสูง แต่เซลล์ขาด → ใช้ไขมันแทน → เกิด ketosis</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: Mitochondria number</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการออกกำลังกายอย่างต่อเนื่องทำให้สมรรถนะดีขึ้น (ในแง่ระดับเซลล์)?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ออกกำลังกายสม่ำเสมอ → กระตุ้นยีน <strong>PGC-1α</strong> → เซลล์ <strong>สร้าง mitochondria เพิ่ม</strong> (mitochondrial biogenesis)<br>ผลคือเซลล์ผลิต ATP ได้มากขึ้น → ใช้ออกซิเจนได้ดีขึ้น → ทนทานสูงขึ้น (VO₂max เพิ่ม)<br>💡 นักวิ่งมาราธอนมี mitochondria มากกว่าคนทั่วไปหลายเท่าในกล้ามเนื้อขา</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — การประยุกต์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — Cyanide</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Cyanide เป็นพิษเร็วเพราะอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Cyanide จับและยับยั้ง <strong>cytochrome c oxidase (Complex IV)</strong> → ETC หยุด → ไม่ผลิต ATP → เซลล์ตาย<br>ผู้ป่วยจะ <strong>หายใจปกติ</strong> (มี O₂) แต่เซลล์ใช้ไม่ได้ → ตายในไม่กี่นาทีถึงชั่วโมง<br>💡 antidote: sodium nitrite + sodium thiosulfate ช่วย "ดักจับ" cyanide</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — Anaerobic exercise</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Aerobic exercise และ Anaerobic exercise ต่างกันที่ระดับเซลล์อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Aerobic (จ๊อกกิ้ง):</strong> O₂ พอ → ใช้ Krebs + ETC → ผลิต ~30 ATP/glucose → ทำได้นาน<br><strong>Anaerobic (sprint, ยกน้ำหนัก):</strong> O₂ ไม่พอ → ใช้แต่ glycolysis + lactic fermentation → ผลิต 2 ATP/glucose → ทำได้สั้น<br>💡 ฝึก aerobic เพิ่ม mitochondria, ฝึก anaerobic เพิ่มมวลกล้ามเนื้อ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — Brown fat</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Brown fat ในทารกสร้างความร้อนอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Brown fat มี <strong>UCP1 (uncoupling protein 1)</strong> ในเยื่อใน mitochondria → ปล่อยให้ H⁺ ผ่านกลับ matrix <strong>โดยไม่ผ่าน ATP synthase</strong> → พลังงานปล่อยเป็น <strong>ความร้อน</strong> แทน ATP<br>ช่วยให้ทารกรักษาอุณหภูมิ (ทารกหนาวเร็วเพราะตัวเล็ก)<br>💡 ผู้ใหญ่ยังมี brown fat บ้างที่คอและไหล่ — กิจกรรมเพิ่มเมื่อเย็น</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: Mitochondrial DNA disease</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> โรค mitochondrial DNA disease (เช่น MELAS) ถ่ายทอดผ่านใคร และเพราะอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ถ่ายทอดจาก <strong>แม่</strong> เท่านั้น เพราะ mitochondria ในไข่มีจำนวนมาก ส่วนในอสุจิมีน้อยและถูกทำลายเมื่อปฏิสนธิ<br>การกลายพันธุ์ใน mtDNA ทำให้ ETC ทำงานบกพร่อง → เซลล์ที่ใช้พลังงานมาก (สมอง กล้ามเนื้อ) ได้รับผลกระทบมาก<br>อาการ: stroke-like episodes, ปวดศีรษะ, ใจสั่น, กล้ามเนื้ออ่อนแรง<br>💡 ปัจจุบันมี "mitochondrial replacement therapy" — สลับ mtDNA จากผู้บริจาค</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>สมการรวม:</strong> C₆H₁₂O₆ + 6 O₂ &rarr; 6 CO₂ + 6 H₂O + ~30-32 ATP<br>
        <strong>4 ขั้น:</strong> Glycolysis (ไซโท) &rarr; Pyr Ox &rarr; Krebs (matrix) &rarr; ETC (cristae)<br>
        <strong>ATP per glucose:</strong> 2 (Glyco) + 2 (Krebs) + 26-28 (ETC) ≈ 30-32<br>
        <strong>NADH = ~2.5 ATP · FADH₂ = ~1.5 ATP</strong><br>
        <strong>Fermentation:</strong> 2 ATP/glucose · regenerate NAD⁺<br>
        <strong>O₂ = final e⁻ acceptor</strong> · H₂O = end product
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>CO₂ มาจาก O₂ ที่หายใจเข้า</td><td>CO₂ มาจาก <strong>กลูโคส</strong> ที่ถูกย่อยใน Krebs</td></tr>
        <tr><td>Glycolysis ใช้ O₂</td><td>ไม่ใช้ — เป็น anaerobic stage</td></tr>
        <tr><td>Fermentation ผลิต ATP จาก lactate/ethanol</td><td>ATP มาจาก <strong>glycolysis</strong> — fermentation แค่ regenerate NAD⁺</td></tr>
        <tr><td>ATP มาจาก Krebs cycle โดยตรง</td><td>ส่วนใหญ่มาจาก ETC ไม่ใช่ Krebs (Krebs ให้ NADH/FADH₂)</td></tr>
        <tr><td>ตำราเก่า 38 ATP ถูกต้อง</td><td>ปัจจุบัน 30-32 ATP — มีค่าใช้จ่ายขนส่ง</td></tr>
        <tr><td>H₂O ที่หายใจออกเป็น H₂O ที่กิน</td><td>H₂O ส่วนหนึ่งเป็น <strong>metabolic water</strong> ที่สร้างใน ETC</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> จำให้ได้ "2-2-26 ATP" = (glycolysis-Krebs-ETC) และ "NADH 2.5, FADH₂ 1.5"</div>
    </div>
  `,
  b2c7: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> ภาพรวม Photosynthesis &amp; สมการรวม<br>
        <strong>02</strong> คลอโรพลาสต์ · รงควัตถุ · สเปกตรัมแสง<br>
        <strong>03</strong> Light Reaction — PSII, PSI, ETC, Chemiosmosis<br>
        <strong>04</strong> Calvin Cycle (Dark Reaction) — 3 ระยะ<br>
        <strong>05</strong> พืช C₃, C₄, CAM<br>
        <strong>06</strong> ปัจจัยที่จำกัด (แสง · CO₂ · อุณหภูมิ · น้ำ)<br>
        <strong>07</strong> การทดลองคลาสสิก (Helmont, Priestley, Ingenhousz, Calvin)<br>
        <strong>08</strong> ความสำคัญต่อโลก · O₂ · ห่วงโซ่อาหาร
      </div>
      <div class="tip-box">💡 Photosynthesis คือ <strong>"ตรงข้าม"</strong> ของการหายใจระดับเซลล์ — พืชจับพลังงานแสงเก็บใน C-H bonds ของกลูโคส แล้วเรา (สัตว์) ปล่อยพลังงานออกจากกลูโคสในไมโทคอนเดรีย</div>
    </div>

    <!-- 1. Overview + SVG -->
    <div class="content-section">
      <h3>🌱 ภาพรวมการสังเคราะห์ด้วยแสง</h3>
      <p><strong>Photosynthesis</strong> คือกระบวนการที่พืช สาหร่าย และไซยาโนแบคทีเรีย ใช้พลังงานแสงเปลี่ยน CO₂ และ H₂O เป็นน้ำตาลและ O₂ — เป็นรากฐานของห่วงโซ่อาหารทั้งโลก</p>
      <div class="formula-box">
        <div class="formula-label">สมการรวม</div>
        6 CO₂ + 6 H₂O + พลังงานแสง &rarr; C₆H₁₂O₆ + 6 O₂<br>
        <em>คาร์บอนไดออกไซด์ + น้ำ + แสง &rarr; กลูโคส + ออกซิเจน</em>
      </div>
      <table class="content-table">
        <tr><th>ลักษณะ</th><th>Photosynthesis</th><th>Cellular Respiration</th></tr>
        <tr><td>สถานที่</td><td>คลอโรพลาสต์</td><td>ไมโทคอนเดรีย</td></tr>
        <tr><td>วัตถุดิบ</td><td>CO₂, H₂O, แสง</td><td>Glucose, O₂</td></tr>
        <tr><td>ผลผลิต</td><td>Glucose, O₂</td><td>CO₂, H₂O, ATP</td></tr>
        <tr><td>พลังงาน</td><td>เก็บพลังงาน (anabolic)</td><td>ปล่อยพลังงาน (catabolic)</td></tr>
        <tr><td>เกิดใน</td><td>พืช สาหร่าย ไซยาโนแบคทีเรีย</td><td>สิ่งมีชีวิตเกือบทุกชนิด</td></tr>
      </table>
      <div class="note-box">⚠️ พืชมีทั้ง <strong>chloroplast และ mitochondria</strong> — กลางวันสังเคราะห์ด้วยแสงสุทธิ (เก็บ glucose) กลางคืนหายใจสุทธิ (ใช้ glucose ที่เก็บ)</div>
    </div>

    <!-- 2. Chloroplast + SVG -->
    <div class="content-section">
      <h3>🍃 คลอโรพลาสต์และรงควัตถุ</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">โครงสร้างคลอโรพลาสต์</text>
          <!-- outer envelope -->
          <ellipse cx="260" cy="160" rx="200" ry="90" fill="#D1FAE5" stroke="#065F46" stroke-width="2.5"/>
          <ellipse cx="260" cy="160" rx="193" ry="83" fill="none" stroke="#10B981" stroke-width="1.5"/>
          <!-- Thylakoids stacked (granum 1) -->
          <g fill="#10B981" stroke="#065F46" stroke-width="1">
            <ellipse cx="150" cy="140" rx="22" ry="5"/>
            <ellipse cx="150" cy="150" rx="22" ry="5"/>
            <ellipse cx="150" cy="160" rx="22" ry="5"/>
            <ellipse cx="150" cy="170" rx="22" ry="5"/>
            <ellipse cx="150" cy="180" rx="22" ry="5"/>
          </g>
          <!-- granum 2 -->
          <g fill="#10B981" stroke="#065F46" stroke-width="1">
            <ellipse cx="260" cy="135" rx="20" ry="5"/>
            <ellipse cx="260" cy="145" rx="20" ry="5"/>
            <ellipse cx="260" cy="155" rx="20" ry="5"/>
            <ellipse cx="260" cy="165" rx="20" ry="5"/>
          </g>
          <!-- granum 3 -->
          <g fill="#10B981" stroke="#065F46" stroke-width="1">
            <ellipse cx="370" cy="150" rx="22" ry="5"/>
            <ellipse cx="370" cy="160" rx="22" ry="5"/>
            <ellipse cx="370" cy="170" rx="22" ry="5"/>
            <ellipse cx="370" cy="180" rx="22" ry="5"/>
            <ellipse cx="370" cy="190" rx="22" ry="5"/>
          </g>
          <!-- lamella connecting -->
          <line x1="172" y1="160" x2="240" y2="150" stroke="#10B981" stroke-width="1.5"/>
          <line x1="280" y1="150" x2="348" y2="170" stroke="#10B981" stroke-width="1.5"/>

          <!-- labels -->
          <text x="60" y="80" font-family="Sarabun" font-size="11" fill="#065F46" font-weight="700">Outer membrane</text>
          <line x1="80" y1="85" x2="80" y2="105" stroke="#065F46" stroke-width="0.8"/>

          <text x="60" y="100" font-family="Sarabun" font-size="11" fill="#10B981" font-weight="700">Inner membrane</text>
          <line x1="80" y1="105" x2="80" y2="115" stroke="#10B981" stroke-width="0.8"/>

          <text x="100" y="120" font-family="Sarabun" font-size="11" fill="#047857" font-weight="700">Stroma</text>
          <text x="100" y="135" font-family="Sarabun" font-size="9" fill="#047857">(Calvin cycle)</text>

          <text x="380" y="120" font-family="Sarabun" font-size="11" fill="#065F46" font-weight="700">Granum</text>
          <text x="380" y="135" font-family="Sarabun" font-size="9" fill="#065F46">(stack ของ thylakoids)</text>

          <text x="180" y="220" font-family="Sarabun" font-size="11" fill="#065F46" font-weight="700">Thylakoid</text>
          <text x="180" y="234" font-family="Sarabun" font-size="9" fill="#065F46">(Light reaction)</text>

          <text x="350" y="220" font-family="Sarabun" font-size="11" fill="#065F46" font-weight="700">Lamella</text>
          <text x="350" y="234" font-family="Sarabun" font-size="9" fill="#065F46">(เชื่อม granum)</text>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: คลอโรพลาสต์ — มีเยื่อ 2 ชั้น, granum (thylakoids ซ้อนกัน), lamella, stroma</div>
      </div>

      <h4>รงควัตถุ (Pigments)</h4>
      <table class="content-table">
        <tr><th>รงควัตถุ</th><th>สี</th><th>ดูดแสง</th></tr>
        <tr><td>Chlorophyll a</td><td>เขียวอมฟ้า</td><td>~430 nm (น้ำเงิน), ~660 nm (แดง)</td></tr>
        <tr><td>Chlorophyll b</td><td>เขียวอมเหลือง</td><td>~450 nm, ~640 nm</td></tr>
        <tr><td>Carotene</td><td>ส้ม</td><td>น้ำเงิน-เขียว (~450 nm)</td></tr>
        <tr><td>Xanthophyll</td><td>เหลือง</td><td>น้ำเงิน</td></tr>
        <tr><td>Anthocyanin</td><td>แดง/ม่วง</td><td>เขียว (พบในใบฤดูใบไม้ร่วง)</td></tr>
      </table>
      <div class="tip-box">💡 ใบไม้เป็นสีเขียว เพราะคลอโรฟิลล์ <strong>"สะท้อน"</strong> แสงสีเขียวออก ไม่ดูดซับ — เป็นสีที่ "ใช้น้อยที่สุด"</div>
      <div class="note-box">⚠️ <strong>Action spectrum vs Absorption spectrum:</strong> Action = อัตราการสังเคราะห์ด้วยแสงที่ความยาวคลื่นต่าง ๆ — รูปคล้าย absorption ของคลอโรฟิลล์ แสดงว่าคลอโรฟิลล์เป็นรงควัตถุหลัก</div>
    </div>

    <!-- 3. Light Reaction + SVG -->
    <div class="content-section">
      <h3>☀️ Light Reaction — ปฏิกิริยาที่ต้องใช้แสง</h3>
      <p>เกิดบน <strong>thylakoid membrane</strong> — เปลี่ยนพลังงานแสงเป็นพลังงานเคมี (ATP, NADPH) พร้อมปล่อย O₂</p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Light Reaction บน Thylakoid Membrane</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Membrane lines -->
            <line x1="20" y1="80" x2="500" y2="80" stroke="#10B981" stroke-width="2"/>
            <line x1="20" y1="190" x2="500" y2="190" stroke="#10B981" stroke-width="2"/>
            <text x="20" y="55" font-weight="700" fill="#10B981">Thylakoid lumen (H⁺ สูง)</text>
            <text x="20" y="220" font-weight="700" fill="#10B981">Stroma (H⁺ ต่ำ)</text>

            <!-- PSII -->
            <rect x="50" y="80" width="60" height="110" rx="6" fill="#7C3AED" stroke="#5B21B6" stroke-width="2"/>
            <text x="80" y="125" text-anchor="middle" font-weight="700" fill="white">PSII</text>
            <text x="80" y="140" text-anchor="middle" font-size="9" fill="white">P680</text>

            <!-- Cytochrome b6f -->
            <rect x="180" y="100" width="50" height="90" rx="6" fill="#A78BFA" stroke="#5B21B6" stroke-width="2"/>
            <text x="205" y="135" text-anchor="middle" font-weight="700" fill="white" font-size="9">Cyt</text>
            <text x="205" y="148" text-anchor="middle" font-weight="700" fill="white" font-size="9">b₆f</text>

            <!-- PSI -->
            <rect x="290" y="80" width="60" height="110" rx="6" fill="#7C3AED" stroke="#5B21B6" stroke-width="2"/>
            <text x="320" y="125" text-anchor="middle" font-weight="700" fill="white">PSI</text>
            <text x="320" y="140" text-anchor="middle" font-size="9" fill="white">P700</text>

            <!-- ATP synthase -->
            <g>
              <rect x="395" y="80" width="50" height="80" rx="6" fill="#10B981" stroke="#065F46" stroke-width="2"/>
              <circle cx="420" cy="180" r="22" fill="#10B981" stroke="#065F46" stroke-width="2"/>
              <text x="420" y="120" text-anchor="middle" font-weight="700" fill="white" font-size="9">ATP</text>
              <text x="420" y="135" text-anchor="middle" font-weight="700" fill="white" font-size="9">synthase</text>
            </g>

            <!-- Light arrows -->
            <text x="80" y="35" text-anchor="middle" font-size="14">☀️</text>
            <text x="320" y="35" text-anchor="middle" font-size="14">☀️</text>
            <path d="M 80 40 L 80 75" stroke="#F59E0B" stroke-width="2"/>
            <path d="M 320 40 L 320 75" stroke="#F59E0B" stroke-width="2"/>

            <!-- e- flow -->
            <path d="M 110 130 L 180 140" stroke="#F43F5E" stroke-width="2.5" marker-end="url(#arrEL)" fill="none"/>
            <path d="M 230 140 L 290 130" stroke="#F43F5E" stroke-width="2.5" marker-end="url(#arrEL)" fill="none"/>
            <path d="M 350 130 L 380 215" stroke="#F43F5E" stroke-width="2.5" marker-end="url(#arrEL)" fill="none"/>

            <!-- H2O splitting -->
            <text x="40" y="220" font-size="9" fill="#9F1239" font-weight="700">H₂O →</text>
            <text x="40" y="232" font-size="9" fill="#9F1239">2H⁺ + ½O₂ + 2e⁻</text>

            <!-- H+ pumped up -->
            <path d="M 205 175 Q 205 130 205 75" stroke="#1E40AF" stroke-width="2" marker-end="url(#arrHL)" fill="none"/>
            <text x="225" y="120" font-size="9" fill="#1E40AF" font-weight="700">H⁺ ↑</text>

            <!-- H+ down -->
            <path d="M 420 70 L 420 165" stroke="#10B981" stroke-width="2.5" marker-end="url(#arrGL)" fill="none"/>
            <text x="450" y="125" font-size="10" fill="#10B981" font-weight="700">H⁺ ↓</text>

            <!-- NADPH formed -->
            <text x="380" y="230" font-size="9" font-weight="700" fill="#9F1239">NADP⁺ + 2e⁻ + H⁺ &rarr; NADPH</text>

            <!-- ATP -->
            <text x="380" y="252" font-size="10" font-weight="700" fill="#065F46">ADP + Pi &rarr; ATP</text>
          </g>
          <defs>
            <marker id="arrEL" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#F43F5E"/></marker>
            <marker id="arrHL" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1E40AF"/></marker>
            <marker id="arrGL" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#10B981"/></marker>
          </defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: Light Reaction — PSII แตก H₂O → e⁻ ไหลผ่าน Cyt b₆f → PSI → NADPH; H⁺ gradient ใช้สร้าง ATP</div>
      </div>

      <h4>ขั้นตอน Light Reaction</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li><strong>Photolysis ที่ PSII:</strong> แสงตก → กระตุ้น e⁻ → H₂O แตก: 2 H₂O → 4 H⁺ + O₂ + 4 e⁻ (O₂ ที่เราหายใจมาจากตรงนี้!)</li>
        <li><strong>ETC (Cyt b₆f):</strong> e⁻ ไหลจาก PSII → Cyt b₆f → PSI — ปั๊ม H⁺ เข้า lumen</li>
        <li><strong>PSI:</strong> แสงตก → กระตุ้น e⁻ อีกครั้ง → ส่งไปลด NADP⁺ เป็น NADPH</li>
        <li><strong>Chemiosmosis:</strong> H⁺ gradient → ATP synthase หมุน → สร้าง ATP</li>
      </ol>
      <div class="formula-box">
        <div class="formula-label">ผลผลิตของ Light Reaction</div>
        2 H₂O + แสง → O₂ + ATP + NADPH<br>
        <strong>O₂</strong> ออกสู่อากาศ · <strong>ATP + NADPH</strong> ใช้ใน Calvin cycle
      </div>
    </div>

    <!-- 4. Calvin Cycle + SVG -->
    <div class="content-section">
      <h3>🔄 Calvin Cycle (Dark Reaction) — 3 ระยะ</h3>
      <p>เกิดใน <strong>stroma</strong> — ใช้ ATP และ NADPH (จาก light reaction) เพื่อตรึง CO₂ เป็นกลูโคส</p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Calvin Cycle — 3 ระยะ</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Central circle -->
            <circle cx="260" cy="160" r="90" fill="none" stroke="#10B981" stroke-width="2"/>

            <!-- CO2 input -->
            <text x="260" y="55" text-anchor="middle" font-weight="700" fill="#9F1239" font-size="12">3 CO₂</text>
            <path d="M 260 60 L 260 75" stroke="#9F1239" stroke-width="2" marker-end="url(#arrCV)"/>

            <!-- RuBP -->
            <ellipse cx="180" cy="85" rx="35" ry="18" fill="#FBBF24" stroke="#B45309"/>
            <text x="180" y="83" text-anchor="middle" font-weight="700" font-size="10" fill="#78350F">RuBP</text>
            <text x="180" y="96" text-anchor="middle" font-size="9" fill="#78350F">3 × (5C)</text>

            <!-- 3-PGA -->
            <ellipse cx="350" cy="125" rx="45" ry="18" fill="#A78BFA" stroke="#5B21B6"/>
            <text x="350" y="124" text-anchor="middle" font-weight="700" font-size="10" fill="white">6 × 3-PGA</text>
            <text x="350" y="137" text-anchor="middle" font-size="9" fill="white">(3C each)</text>

            <!-- G3P -->
            <ellipse cx="350" cy="230" rx="45" ry="18" fill="#10B981" stroke="#065F46"/>
            <text x="350" y="229" text-anchor="middle" font-weight="700" font-size="10" fill="white">6 × G3P</text>
            <text x="350" y="242" text-anchor="middle" font-size="9" fill="white">(3C each)</text>

            <!-- Glucose output -->
            <text x="430" y="265" text-anchor="middle" font-weight="700" font-size="11" fill="#9F1239">1 G3P &rarr; Glucose</text>

            <!-- 5 G3P back to RuBP -->
            <ellipse cx="180" cy="220" rx="40" ry="18" fill="#10B981" stroke="#065F46" opacity="0.7"/>
            <text x="180" y="219" text-anchor="middle" font-size="9" fill="white">5 G3P เหลือ</text>
            <text x="180" y="232" text-anchor="middle" font-size="8" fill="white">&rarr; regenerate RuBP</text>

            <!-- Phase labels -->
            <text x="260" y="100" text-anchor="middle" font-weight="700" font-size="11" fill="#9F1239">① Carbon</text>
            <text x="260" y="113" text-anchor="middle" font-size="9" fill="#9F1239">fixation</text>
            <text x="260" y="125" text-anchor="middle" font-size="9" fill="#9F1239">(RuBisCO)</text>

            <text x="400" y="180" text-anchor="middle" font-weight="700" font-size="11" fill="#5B21B6">② Reduction</text>
            <text x="400" y="193" text-anchor="middle" font-size="9" fill="#5B21B6">ATP + NADPH</text>

            <text x="120" y="160" text-anchor="middle" font-weight="700" font-size="11" fill="#10B981">③ Regen.</text>
            <text x="120" y="173" text-anchor="middle" font-size="9" fill="#10B981">ATP</text>
          </g>
          <defs>
            <marker id="arrCV" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#9F1239"/></marker>
          </defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: Calvin Cycle — ใช้ 3 CO₂, 9 ATP, 6 NADPH ผลิต 1 G3P (ครึ่งของ glucose)</div>
      </div>

      <h4>3 ระยะของ Calvin Cycle</h4>
      <table class="content-table">
        <tr><th>ระยะ</th><th>เอนไซม์</th><th>เกิดอะไร</th></tr>
        <tr><td>1. Carbon Fixation</td><td>RuBisCO</td><td>3 CO₂ + 3 RuBP (5C) → 6 × 3-PGA (3C)</td></tr>
        <tr><td>2. Reduction</td><td>หลายขั้น</td><td>6 × 3-PGA + 6 ATP + 6 NADPH → 6 × G3P</td></tr>
        <tr><td>3. Regeneration of RuBP</td><td>หลายขั้น</td><td>5 G3P + 3 ATP → 3 RuBP (สำหรับรอบต่อไป)</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">สรุปต่อการตรึง 3 CO₂ (1 G3P)</div>
        3 CO₂ + 9 ATP + 6 NADPH → 1 G3P (3C)<br>
        ต้องวน 2 รอบ (6 CO₂) จึงจะได้ glucose (6C) ครบ 1 โมเลกุล
      </div>
      <div class="note-box">⚠️ <strong>RuBisCO</strong> เป็นโปรตีน <strong>ที่พบมากที่สุดในโลก</strong> — ประมาณ 50% ของโปรตีนในใบไม้! แต่ทำงานช้ามาก (~3 CO₂/วินาที)</div>
    </div>

    <!-- 5. C3, C4, CAM -->
    <div class="content-section">
      <h3>🌾 พืช C₃, C₄, และ CAM</h3>
      <p>RuBisCO มีปัญหา: ในสภาพร้อน/แห้ง พืชปิดปากใบ → CO₂ ในใบลด, O₂ สูง → RuBisCO จับ O₂ แทน (photorespiration) → เสียพลังงาน</p>
      <table class="content-table">
        <tr><th>ลักษณะ</th><th>C₃</th><th>C₄</th><th>CAM</th></tr>
        <tr><td>เอนไซม์ตรึง CO₂ ครั้งแรก</td><td>RuBisCO</td><td>PEP carboxylase</td><td>PEP carboxylase (กลางคืน)</td></tr>
        <tr><td>สาร 3C ที่ได้</td><td>3-PGA (3C)</td><td>OAA (4C) → ส่งเข้า bundle sheath</td><td>OAA → malate (กักไว้ใน vacuole)</td></tr>
        <tr><td>กายวิภาคใบ</td><td>ปกติ</td><td>Kranz anatomy</td><td>เซลล์เก็บน้ำขนาดใหญ่</td></tr>
        <tr><td>การจัดการน้ำ</td><td>เปลือง</td><td>ประหยัด</td><td>ประหยัดมาก</td></tr>
        <tr><td>Photorespiration</td><td>มี (เสียพลังงาน)</td><td>น้อย</td><td>น้อย</td></tr>
        <tr><td>เหมาะกับ</td><td>เย็น ชื้น (เขตอบอุ่น)</td><td>ร้อน แดดจัด</td><td>ทะเลทราย</td></tr>
        <tr><td>ตัวอย่าง</td><td>ข้าว ข้าวสาลี ผัก ถั่ว</td><td>ข้าวโพด อ้อย หญ้า</td><td>กระบองเพชร สับปะรด ว่านหางจระเข้</td></tr>
      </table>
      <div class="tip-box">💡 <strong>ทำไมข้าวโพดโตเร็วในไทย?</strong> เพราะเป็นพืช C₄ มีกลไกเข้มข้น CO₂ ใน bundle sheath → RuBisCO ไม่ขาด CO₂ แม้ปากใบปิด → ประสิทธิภาพสูงในสภาพร้อน</div>
    </div>

    <!-- 6. Factors -->
    <div class="content-section">
      <h3>🌡️ ปัจจัยที่จำกัดการสังเคราะห์ด้วยแสง</h3>
      <table class="content-table">
        <tr><th>ปัจจัย</th><th>ผล</th><th>กราฟ</th></tr>
        <tr><td>ความเข้มแสง</td><td>เพิ่ม → อัตราเพิ่มจน plateau (light saturation)</td><td>เริ่มที่ "light compensation point"</td></tr>
        <tr><td>CO₂</td><td>ปกติ ~0.04% — เพิ่ม → อัตราเพิ่ม</td><td>มีจุดอิ่มตัว</td></tr>
        <tr><td>อุณหภูมิ</td><td>25-35°C เหมาะที่สุด</td><td>กราฟระฆัง — สูงเกิน enzyme เสีย</td></tr>
        <tr><td>น้ำ</td><td>ขาดน้ำ → ปากใบปิด → CO₂ เข้าน้อย</td><td>ทางอ้อม</td></tr>
        <tr><td>แร่ธาตุ</td><td>Mg²⁺ จำเป็นใน chlorophyll · N สำหรับ enzymes</td><td>—</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">Limiting Factor Concept (Blackman, 1905)</div>
        อัตราการสังเคราะห์แสง ถูกจำกัดโดย <strong>ปัจจัยที่น้อยที่สุด</strong> ในขณะนั้น<br>
        ถ้าเพิ่มปัจจัยอื่นที่ไม่ขาด ไม่ทำให้อัตราเพิ่ม → ต้องเพิ่มปัจจัยที่จำกัดเท่านั้น
      </div>
      <div class="note-box">⚠️ <strong>Light compensation point:</strong> ระดับแสงต่ำสุดที่อัตรา photosynthesis = อัตรา respiration → ไม่ได้-ไม่เสีย glucose สุทธิ</div>
    </div>

    <!-- 7. Classic Experiments -->
    <div class="content-section">
      <h3>🧪 การทดลองคลาสสิก</h3>
      <table class="content-table">
        <tr><th>นักวิทยาศาสตร์</th><th>ปี</th><th>การค้นพบ</th></tr>
        <tr><td>Jan van Helmont</td><td>1640s</td><td>ปลูกต้นวิลโลว์ → 5 ปี ดินลดน้อยมาก → พืชเจริญจาก "น้ำ" (ส่วน CO₂ ยังไม่รู้)</td></tr>
        <tr><td>Joseph Priestley</td><td>1772</td><td>ใส่หนู+เทียนในขวดปิด → ตายเร็ว แต่ใส่ต้นไม้เพิ่ม → ฟื้น (พืชผลิตอากาศ)</td></tr>
        <tr><td>Jan Ingenhousz</td><td>1779</td><td>พิสูจน์ว่า "ต้องมีแสง" ในการที่พืชผลิตอากาศ และใบเขียวเท่านั้นที่ทำได้</td></tr>
        <tr><td>Engelmann</td><td>1882</td><td>วาง Spirogyra ในแสงสเปกตรัม → แบคทีเรียมารวมที่สีน้ำเงิน + แดง → action spectrum</td></tr>
        <tr><td>Cornelis van Niel</td><td>1930s</td><td>ศึกษาแบคทีเรียที่ใช้ H₂S แทน H₂O → ปล่อย S แทน O₂ → ยืนยันว่า O₂ มาจาก H₂O</td></tr>
        <tr><td>Melvin Calvin</td><td>1950s</td><td>ใช้ ¹⁴C ติดตาม CO₂ → ค้นพบ Calvin Cycle (Nobel 1961)</td></tr>
      </table>
      <div class="tip-box">💡 การทดลองของ van Niel เป็นจุดเปลี่ยน — เผยว่า O₂ จากพืช <strong>มาจากการแตกของน้ำ</strong> ไม่ใช่จาก CO₂</div>
    </div>

    <!-- 8. Importance -->
    <div class="content-section">
      <h3>🌍 ความสำคัญต่อโลก</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>O₂ ทั้งหมด</strong> ในบรรยากาศมาจาก photosynthesis ตลอด 2.4 พันล้านปี (Great Oxygenation Event)</li>
        <li><span class="li-dot sc-dot"></span><strong>ผู้ผลิต (autotroph)</strong> เป็นฐานห่วงโซ่อาหารทั้งโลก — สัตว์ทุกชนิดพึ่งพา</li>
        <li><span class="li-dot sc-dot"></span><strong>ดูดซับ CO₂</strong> — ลดภาวะโลกร้อน</li>
        <li><span class="li-dot sc-dot"></span><strong>ป่าฝนแอมะซอน</strong> เรียกว่า "ปอดของโลก" — ผลิต ~20% ของ O₂ ทั้งโลก</li>
        <li><span class="li-dot sc-dot"></span><strong>แพลงก์ตอนพืชในมหาสมุทร</strong> ผลิต O₂ มากที่สุด ~50-70%</li>
        <li><span class="li-dot sc-dot"></span>เชื้อเพลิงฟอสซิล (น้ำมัน ถ่านหิน) คือพลังงานแสงอาทิตย์ที่พืชเก็บในอดีต</li>
      </ul>
    </div>

    <!-- ============ 32 PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — ภาพรวมและสมการ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — สมการรวม</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เขียนสมการรวมของ photosynthesis และเปรียบเทียบกับการหายใจระดับเซลล์</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <br>Photosynthesis: 6 CO₂ + 6 H₂O + แสง &rarr; C₆H₁₂O₆ + 6 O₂<br>Respiration: C₆H₁₂O₆ + 6 O₂ &rarr; 6 CO₂ + 6 H₂O + ATP<br>เป็น <strong>คู่ตรงข้าม</strong> — สร้าง vs สลายพลังงาน<br>💡 พืชทำทั้งสอง — กลางวันสุทธิ photosynthesis, กลางคืนสุทธิ respiration</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — Anabolic vs Catabolic</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Photosynthesis เป็น anabolic หรือ catabolic? เพราะอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Anabolic</strong> — สร้างโมเลกุลใหญ่ (glucose) จากโมเลกุลเล็ก (CO₂ + H₂O) <strong>เก็บพลังงาน</strong><br>ตรงข้าม Respiration เป็น catabolic (สลายเพื่อปล่อยพลังงาน)<br>💡 จำว่า ana = up (สร้างขึ้น), cata = down (ทำลายลง)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — ที่มาของ O₂</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> O₂ ที่ปล่อยจาก photosynthesis มาจาก H₂O หรือ CO₂?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> มาจาก <strong>H₂O</strong> (ที่ photolysis ใน PSII)<br>2 H₂O → 4 H⁺ + O₂ + 4 e⁻<br>หลักฐาน: van Niel ศึกษาแบคทีเรียที่ใช้ H₂S → ปล่อย S → ยืนยันว่า O แตกออกจากตัวทำละลาย<br>💡 ใช้ ¹⁸O ติดตามใน H₂¹⁸O → ได้ ¹⁸O₂ ออกมา</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: พืชหายใจมั้ย?</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ในเวลากลางคืนพืชหายใจแบบเซลล์หรือไม่?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>ใช่</strong> — พืชหายใจตลอดเวลา (ทั้งกลางวันและกลางคืน) เพราะมี mitochondria เหมือนสัตว์<br>กลางวัน: Photosynthesis &gt; Respiration → สุทธิดูด CO₂, ปล่อย O₂<br>กลางคืน: เฉพาะ Respiration → ปล่อย CO₂, ดูด O₂<br>💡 จึงไม่ควรเก็บกระถางต้นไม้มากเกินไปในห้องนอนปิด</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — คลอโรพลาสต์และรงควัตถุ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — ส่วนของคลอโรพลาสต์</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ส่วนใดของคลอโรพลาสต์ที่ light reaction และ Calvin cycle เกิด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Light reaction = <strong>thylakoid membrane</strong> (granum)<br>Calvin cycle = <strong>stroma</strong> (ของเหลวรอบ thylakoid)<br>💡 จำว่า "light = thylakoid, dark = stroma"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — ทำไมใบเขียว</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมใบไม้จึงเป็นสีเขียว?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Chlorophyll <strong>ดูดซับ</strong> แสงสีน้ำเงินและแดง แต่ <strong>สะท้อน</strong> แสงสีเขียวออก → เราเห็นเป็นสีเขียว<br>แสงสีเขียวจึงเป็นสีที่ photosynthesis ใช้ได้น้อยที่สุด<br>💡 อยู่ใต้แสงสีเขียวอย่างเดียว ต้นไม้จะเติบโตช้า</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — สีฤดูใบไม้ร่วง</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมใบไม้เปลี่ยนสีในฤดูใบไม้ร่วง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ในฤดูใบไม้ร่วง พืชเริ่มสลาย <strong>chlorophyll</strong> เพื่อกลับมาใช้ใหม่ → สีเขียวจาง<br>รงควัตถุอื่นที่อยู่ใต้สีเขียว (carotene = ส้ม, xanthophyll = เหลือง, anthocyanin = แดง/ม่วง) ปรากฏ<br>💡 ในเขตอบอุ่นเท่านั้น — ในเขตร้อนใบเขียวตลอดปี</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: Action spectrum</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Engelmann ใช้ Spirogyra ใต้แสงสเปกตรัม → แบคทีเรียรวมที่จุดใด สื่อถึงอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> แบคทีเรียรวมที่ <strong>สีน้ำเงินและแดง</strong> เพราะพื้นที่นั้น Spirogyra สังเคราะห์ด้วยแสงได้ดี ปล่อย O₂ มาก → แบคทีเรียที่ต้องใช้ O₂ จึงรวม<br>เป็นการพิสูจน์ว่า chlorophyll ใช้แสงสีน้ำเงินและแดงได้ดีกว่าเขียว<br>💡 Action spectrum ตรงกับ Absorption spectrum ของ chlorophyll</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — Light Reaction</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — ผลผลิตของ Light Reaction</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Light reaction ผลิตอะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>O₂ + ATP + NADPH</strong><br>O₂ ออกสู่อากาศ<br>ATP + NADPH ส่งต่อให้ Calvin cycle ใช้ตรึง CO₂<br>💡 จำว่า "O - ATP - NADPH"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — PSII vs PSI</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> PSII (P680) และ PSI (P700) ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>PSII (P680):</strong> ดูดแสง 680 nm — แตก H₂O ผลิต O₂ — เริ่ม ETC<br><strong>PSI (P700):</strong> ดูดแสง 700 nm — รับ e⁻ จาก ETC แล้วลด NADP⁺ เป็น NADPH<br>ทำงาน <strong>เป็นคู่</strong> เป็นรูป "Z-scheme"<br>💡 ชื่อหมายเลขสับสน — PSII ถูกค้นพบหลัง PSI</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — Photolysis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Photolysis ของน้ำเกิดที่ไหน และทำไมสำคัญ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เกิดที่ <strong>PSII</strong> — H₂O แตกเป็น 4 H⁺ + O₂ + 4 e⁻<br>สำคัญเพราะ:<br>(1) เป็นที่มาของ <strong>O₂ ทั้งหมด</strong> ในบรรยากาศ<br>(2) ให้ e⁻ ทดแทนใน PSII เพื่อให้ ETC ไหลต่อได้<br>(3) สร้าง H⁺ สำหรับ chemiosmosis<br>💡 ไม่มีน้ำ → photosynthesis หยุด → O₂ หาย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: Z-scheme</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม light reaction ต้องมี <strong>2 photosystems</strong> ทำงานร่วมกัน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ต้องใช้พลังงานสูงเพื่อ:<br>(1) แตก H₂O (ต้องการแรงดึง e⁻ สูง) — PSII ทำ<br>(2) ลด NADP⁺ เป็น NADPH (ต้องการ e⁻ ที่ระดับสูง) — PSI ทำ<br>1 photon เดียวอาจไม่พอ → ใช้ 2 photon (จาก 2 photosystems) สร้าง "Z-scheme" ที่ดูเหมือนตัว Z<br>💡 แบคทีเรียยุคแรก (anoxygenic) มีเพียง 1 PS — ไม่ผลิต O₂</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — Calvin Cycle</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — ที่มาของชื่อ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Calvin cycle ตั้งชื่อตามใคร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Melvin Calvin</strong> (1911-1997) นักเคมีอเมริกัน — ใช้ ¹⁴C ติดตาม CO₂ → ค้นพบเส้นทาง dark reaction → ได้ Nobel Prize ในปี <strong>1961</strong><br>💡 ทดลองในสาหร่าย Chlorella</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — RuBisCO</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> RuBisCO ทำหน้าที่อะไร และเป็นเอนไซม์ที่พิเศษอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> RuBisCO (Ribulose-1,5-bisphosphate carboxylase oxygenase) ตรึง CO₂ กับ RuBP (5C) ในขั้นแรกของ Calvin cycle<br>พิเศษ: <strong>เป็นโปรตีนที่พบมากที่สุดในโลก</strong> ~50% ของโปรตีนในใบ<br>แต่ทำงาน <strong>ช้ามาก</strong> (~3 CO₂/วินาที) เทียบกับเอนไซม์อื่น (1000+/วินาที)<br>💡 จึงต้องมีปริมาณมหาศาลเพื่อชดเชย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — Energy cost</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ต้องใช้ ATP และ NADPH กี่ตัวในการสร้าง glucose 1 โมเลกุล?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ต้องวน Calvin 6 รอบ (เพราะกลูโคส = 6C):<br><strong>ATP:</strong> 9 × 2 = <strong>18 ATP</strong><br><strong>NADPH:</strong> 6 × 2 = <strong>12 NADPH</strong><br><strong>CO₂:</strong> 6 โมเลกุล<br>💡 ดังนั้น light reaction ต้องผลิต ATP/NADPH เพียงพอ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: Photorespiration</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Photorespiration คืออะไรและทำไมเป็นปัญหา?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เกิดเมื่อ RuBisCO จับ <strong>O₂ แทน CO₂</strong> (เพราะมี active site เดียวกัน) — ทำในวันร้อนที่ปากใบปิด<br>ผล: เสีย CO₂ + ATP + พลังงาน → ลดประสิทธิภาพ photosynthesis ลง ~25%<br>พืช C₄ และ CAM ลดปัญหานี้ด้วยกลไก concentrate CO₂<br>💡 RuBisCO วิวัฒนาการเมื่อโลกมี CO₂ สูง O₂ ต่ำ → ปัจจุบันยังไม่ปรับ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — C₃, C₄, CAM</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — แยกประเภท</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุประเภท: ข้าว · ข้าวโพด · ทุเรียน · สับปะรด · กระบองเพชร</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ข้าว = <strong>C₃</strong>, ข้าวโพด = <strong>C₄</strong>, ทุเรียน = <strong>C₃</strong>, สับปะรด = <strong>CAM</strong>, กระบองเพชร = <strong>CAM</strong><br>💡 พืชส่วนใหญ่ในโลก ~85% เป็น C₃</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — Kranz anatomy</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Kranz anatomy ใน C₄ คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> โครงสร้างพิเศษของใบ C₄ — มี <strong>bundle sheath cells</strong> ล้อมรอบ vascular bundle ในแนวเชื่อมต่อกับ mesophyll cells<br>กลไก: Mesophyll ใช้ PEP carboxylase ตรึง CO₂ → ส่ง 4C ไปยัง bundle sheath → ปล่อย CO₂ ที่นั่น → RuBisCO ทำงานในที่มี CO₂ เข้มข้น<br>💡 "Kranz" = wreath ในภาษาเยอรมัน — รูปวงกลม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — CAM strategy</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมพืช CAM เปิดปากใบกลางคืน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> กลางคืนเย็น ความชื้นสูง → เสียน้ำน้อย<br>เปิดปากใบ → รับ CO₂ → ตรึงเป็น <strong>malate</strong> เก็บใน vacuole<br>กลางวัน: ปากใบปิด (ลดสูญน้ำ) → ปล่อย malate → ปลด CO₂ → RuBisCO ใช้ทำ Calvin<br>💡 เหมาะกับทะเลทรายที่ร้อนแห้ง — เสียน้ำน้อยมาก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: Climate change</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> โลกร้อนขึ้นจะมีผลกับพืช C₃ vs C₄ อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ร้อนขึ้น + แห้ง → photorespiration เพิ่มในพืช <strong>C₃</strong> (ลดผลผลิต)<br>พืช <strong>C₄</strong> ทนได้ดีกว่า → ผลผลิตข้าวโพด อ้อย อาจเพิ่มในเขตใหม่<br>ข้าว (C₃) อาจประสบปัญหาในไทย → ต้องพัฒนาพันธุ์ใหม่ที่ทนร้อน<br>💡 มีการวิจัยใส่กลไก C₄ ใน rice → "C₄ rice project"</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — ปัจจัยที่มีผล</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — Light saturation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมเพิ่มแสงเกินจุดอิ่มตัว (saturation) ไม่ทำให้ photosynthesis เพิ่ม?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพราะ photosynthesis ไม่ได้ถูกจำกัดด้วยแสงอีกต่อไป — มี <strong>ปัจจัยอื่นจำกัด</strong> เช่น CO₂ หรือเอนไซม์ในการตรึง<br>เพิ่มแสงไปเฉพาะ ๆ ก็เกินที่ระบบรับได้<br>💡 ต้องเพิ่มปัจจัยที่จำกัด เช่น CO₂ ในเรือนกระจก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — Light compensation point</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Light compensation point คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ระดับแสงต่ำสุดที่ <strong>อัตรา photosynthesis = อัตรา respiration</strong> ของพืช<br>ต่ำกว่านี้ → พืชใช้ glucose มากกว่าผลิต → "ขาดทุน"<br>สูงกว่านี้ → พืชสะสม glucose สุทธิ<br>💡 พืชในร่ม (shade plant) มี compensation point ต่ำ → อยู่ในที่มืดได้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — เรือนกระจก</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เรือนกระจกในยุโรปใส่ CO₂ เพิ่มจาก 0.04% → 0.1% เพื่ออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพื่อ <strong>เพิ่มอัตรา photosynthesis</strong> — CO₂ ปกติคือปัจจัยจำกัด → เพิ่ม CO₂ → ผลผลิตเพิ่ม ~30%<br>เป็น "CO₂ enrichment" ใช้ในการปลูกมะเขือเทศ พริก ในเชิงอุตสาหกรรม<br>💡 ต้องระวังไม่ให้สูงเกินไป (&gt;1%) เพราะเป็นอันตรายต่อคนงาน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: อุณหภูมิ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมอุณหภูมิ &gt; 40°C ทำให้ photosynthesis ลดลง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>เอนไซม์ denature</strong> — RuBisCO และ ETC โปรตีนเสียโครงสร้าง<br>(2) <strong>ปากใบปิด</strong> เพื่อลดสูญน้ำ → CO₂ เข้าน้อย<br>(3) Photorespiration เพิ่ม → เสียพลังงาน<br>💡 พืชเขตร้อนปรับตัวได้ดีกว่า — เอนไซม์ทนความร้อน</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — การทดลองคลาสสิก</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — Van Helmont</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Van Helmont (1640s) สรุปอย่างไรหลังทดลองวิลโลว์ และพลาดอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>สรุป:</strong> พืชเจริญจาก <strong>น้ำ</strong> เป็นหลัก (เพราะดินลดน้อยมากใน 5 ปี)<br><strong>พลาด:</strong> ไม่รู้ว่า CO₂ จากอากาศเป็นแหล่งหลักของ carbon ในพืช (รู้ภายหลังในศตวรรษที่ 19)<br>💡 แต่ก็ปฏิเสธความเชื่อเดิมที่ว่าพืชเจริญจากดินอย่างเดียว</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — Priestley</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Priestley พบอะไรจากการทดลองหนู+เทียน+ต้นไม้ในขวด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> หนู/เทียนในขวดปิด → ตาย/ดับ (ใช้ O₂ หมด)<br>ใส่ <strong>ต้นไม้</strong> เพิ่ม → หนู/เทียนรอด → ต้นไม้ <strong>"ฟื้นฟูอากาศ"</strong> (ผลิต O₂)<br>💡 เป็นการค้นพบครั้งแรกว่าพืชผลิต O₂</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — Ingenhousz</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Ingenhousz เพิ่มอะไรจากงานของ Priestley?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพิ่มข้อสำคัญ 2 ประการ:<br>(1) ต้องมี <strong>แสง</strong> ในการที่พืชผลิต O₂<br>(2) เฉพาะ <strong>ส่วนสีเขียว</strong> ของพืชเท่านั้นที่ผลิตได้ (ราก ลำต้นไม่สี ผลิตไม่ได้)<br>💡 เป็นหลักฐานว่า chlorophyll จำเป็น</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: van Niel</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> van Niel ใช้ <strong>แบคทีเรียกำมะถัน</strong> สนับสนุนแนวคิดอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> แบคทีเรียกำมะถันใช้ H₂S แทน H₂O ในการสังเคราะห์แสง → ปล่อย <strong>S</strong> แทน O₂<br>นี่ชี้ว่า: O ในสมการ photosynthesis มาจาก <strong>ตัวให้ e⁻</strong> (H₂O ในพืช, H₂S ในแบคทีเรีย) ไม่ใช่จาก CO₂<br>ภายหลัง Ruben &amp; Kamen ใช้ ¹⁸O ติดตามใน H₂¹⁸O → ได้ ¹⁸O₂ → ยืนยัน 100%<br>💡 จึงสรุปได้ว่า "O₂ มาจาก H₂O"</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — ความสำคัญ &amp; การประยุกต์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — Great Oxygenation Event</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> O₂ ในบรรยากาศโลกเกิดจากอะไรในประวัติศาสตร์?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ราว 2.4 พันล้านปีก่อน <strong>cyanobacteria</strong> วิวัฒนาการความสามารถ oxygenic photosynthesis → ปล่อย O₂ จำนวนมาก → "Great Oxygenation Event"<br>ผล: สิ่งมีชีวิตที่ไม่ทน O₂ ตายเป็นจำนวนมาก (mass extinction ครั้งแรก) แต่เปิดทางให้ aerobic life<br>💡 O₂ ที่เราหายใจมีต้นกำเนิดจาก photosynthesis ทั้งหมด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — Algae and oxygen</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> O₂ ในโลกผลิตโดยพืชหรือสาหร่ายมากกว่า?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>สาหร่ายและแพลงก์ตอนพืชในทะเล</strong> (phytoplankton) ผลิต O₂ มากที่สุด ~<strong>50-70%</strong> ของโลก<br>ป่าฝนแอมะซอน ~20%<br>ป่าและทุ่งหญ้าอื่น ~10-30%<br>💡 ทะเลเรียกได้ว่าเป็น "ปอดของโลก" จริง ๆ มากกว่าป่า</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — Fossil fuel</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> น้ำมันและถ่านหินเกี่ยวข้องกับ photosynthesis อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เป็น <strong>"พลังงานแสงอาทิตย์ในอดีต"</strong> — พืชและแพลงก์ตอนในยุคก่อนใช้ photosynthesis เก็บพลังงานในรูป C-H bonds → ตายและถูกฝัง → ภายใต้ความดันและความร้อนหลายล้านปี → กลายเป็นน้ำมัน/ถ่านหิน<br>เมื่อเราเผา → ปล่อย CO₂ กลับสู่บรรยากาศ → เปลี่ยน CO₂ ในระบบโลก<br>💡 จึงเรียก fossil fuel ว่า "non-renewable" — ใช้แล้วต้องใช้ล้านปีรอใหม่</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: Artificial photosynthesis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> "Artificial photosynthesis" คืออะไรและทำไมนักวิทยาศาสตร์สนใจ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เทคโนโลยีที่เลียนแบบ photosynthesis — ใช้แสงอาทิตย์ + CO₂ + H₂O ผลิต <strong>เชื้อเพลิงสะอาด</strong> เช่น H₂ หรือ methanol<br>ประโยชน์:<br>(1) เก็บพลังงานแสงในรูปเคมี (ดีกว่า solar panel ที่ผลิตไฟฟ้าทันที)<br>(2) ดูด CO₂ ลดภาวะโลกร้อน<br>(3) ผลิตเชื้อเพลิงโดยไม่ต้องใช้พืช (ประหยัดที่ดิน)<br>💡 ยังอยู่ในขั้นวิจัย — ประสิทธิภาพยังต่ำกว่าธรรมชาติ</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>สมการรวม:</strong> 6 CO₂ + 6 H₂O + แสง &rarr; C₆H₁₂O₆ + 6 O₂<br>
        <strong>2 ขั้นใหญ่:</strong> Light reaction (thylakoid) · Calvin cycle (stroma)<br>
        <strong>Light:</strong> H₂O &rarr; O₂ + ATP + NADPH (PSII &rarr; ETC &rarr; PSI)<br>
        <strong>Calvin:</strong> 3 ระยะ — Fixation (RuBisCO) &rarr; Reduction &rarr; Regen<br>
        <strong>Energy cost ต่อ glucose:</strong> 18 ATP + 12 NADPH + 6 CO₂<br>
        <strong>3 ประเภทพืช:</strong> C₃ (ปกติ) · C₄ (ร้อน) · CAM (ทะเลทราย)
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>O₂ มาจาก CO₂</td><td>O₂ มาจาก <strong>H₂O</strong> ที่ photolysis</td></tr>
        <tr><td>Dark reaction ไม่ต้องใช้แสง</td><td>"Dark" หมายถึงไม่ต้องใช้แสง <strong>โดยตรง</strong> — แต่ต้องการ ATP/NADPH จาก light reaction</td></tr>
        <tr><td>พืชไม่หายใจตอนกลางคืน</td><td>หายใจตลอดเวลา ทั้งกลางวันและกลางคืน</td></tr>
        <tr><td>ใบเขียวเพราะดูดแสงเขียว</td><td>ใบเขียวเพราะ <strong>สะท้อน</strong> แสงเขียว — ดูดน้ำเงินและแดง</td></tr>
        <tr><td>RuBisCO เป็นเอนไซม์เร็ว</td><td>ช้ามาก — จึงต้องมีปริมาณมหาศาล</td></tr>
        <tr><td>พืช C₃ ดีกว่า C₄</td><td>ขึ้นกับสภาพแวดล้อม — C₄ ดีกว่าในที่ร้อนแห้ง</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> ถ้าโจทย์ถามถึงผลผลิต ให้แยกชัด: Light = O₂/ATP/NADPH · Calvin = G3P/glucose · ทั้งระบบ = O₂ + glucose</div>
    </div>
  `,
  b2c8: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> ภาพรวม + วัฏจักรเซลล์ (Cell Cycle)<br>
        <strong>02</strong> Interphase: G₁, S, G₂<br>
        <strong>03</strong> Mitosis: Prophase &rarr; Metaphase &rarr; Anaphase &rarr; Telophase<br>
        <strong>04</strong> Cytokinesis: สัตว์ vs พืช<br>
        <strong>05</strong> Meiosis I &amp; II<br>
        <strong>06</strong> Mitosis vs Meiosis &amp; Genetic Variation<br>
        <strong>07</strong> ความผิดปกติ: Cancer · Nondisjunction<br>
        <strong>08</strong> การประยุกต์: Stem cell · Cloning · IVF
      </div>
      <div class="tip-box">💡 การแบ่งเซลล์มี 2 จุดประสงค์: <strong>Mitosis</strong> สำหรับเติบโต/ซ่อมแซม (2n → 2n) และ <strong>Meiosis</strong> สำหรับสร้างเซลล์สืบพันธุ์ (2n → n)</div>
    </div>

    <!-- 1. Cell Cycle + SVG -->
    <div class="content-section">
      <h3>🔁 วัฏจักรเซลล์ (Cell Cycle)</h3>
      <p>เซลล์เคลื่อนผ่าน 2 ระยะใหญ่: <strong>Interphase</strong> (เตรียมตัวยาว) และ <strong>M phase</strong> (แบ่งจริงสั้น)</p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">วัฏจักรเซลล์</text>
          <!-- main circle -->
          <circle cx="260" cy="170" r="110" fill="none" stroke="#1E293B" stroke-width="2" stroke-dasharray="4 2"/>

          <!-- G1 (large) -->
          <path d="M 260 60 A 110 110 0 0 1 370 170 L 260 170 Z" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/>
          <text x="305" y="115" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#1E40AF" font-size="14">G₁</text>
          <text x="305" y="135" text-anchor="middle" font-size="10" fill="#1E40AF">เซลล์โต</text>
          <text x="305" y="148" text-anchor="middle" font-size="9" fill="#1E40AF">ผลิตโปรตีน</text>

          <!-- S phase -->
          <path d="M 370 170 A 110 110 0 0 1 260 280 L 260 170 Z" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
          <text x="305" y="220" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#B45309" font-size="14">S</text>
          <text x="305" y="240" text-anchor="middle" font-size="10" fill="#B45309">DNA จำลอง</text>
          <text x="305" y="253" text-anchor="middle" font-size="9" fill="#B45309">(replication)</text>

          <!-- G2 -->
          <path d="M 260 280 A 110 110 0 0 1 175 220 L 260 170 Z" fill="#D1FAE5" stroke="#10B981" stroke-width="2"/>
          <text x="220" y="235" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#065F46" font-size="14">G₂</text>
          <text x="220" y="252" text-anchor="middle" font-size="9" fill="#065F46">เตรียม</text>

          <!-- M phase (small) -->
          <path d="M 175 220 A 110 110 0 0 1 260 60 L 260 170 Z" fill="#FFE4E6" stroke="#F43F5E" stroke-width="2.5"/>
          <text x="200" y="140" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#9F1239" font-size="14">M</text>
          <text x="200" y="155" text-anchor="middle" font-size="9" fill="#9F1239">Mitosis</text>
          <text x="200" y="167" text-anchor="middle" font-size="8" fill="#9F1239">+ Cytokinesis</text>

          <!-- Interphase brace -->
          <text x="450" y="170" text-anchor="middle" font-family="Sarabun" font-size="11" fill="#1E40AF" font-weight="700">Interphase</text>
          <text x="450" y="184" text-anchor="middle" font-size="9" fill="#1E40AF">(~95% ของเวลา)</text>

          <!-- Checkpoints -->
          <circle cx="260" cy="60" r="6" fill="#F43F5E"/>
          <text x="260" y="45" text-anchor="middle" font-size="9" font-weight="700" fill="#9F1239">G₁/S checkpoint</text>

          <circle cx="175" cy="220" r="6" fill="#F43F5E"/>
          <text x="105" y="225" text-anchor="end" font-size="9" font-weight="700" fill="#9F1239">G₂/M checkpoint</text>

          <circle cx="220" cy="115" r="6" fill="#F43F5E"/>
          <text x="170" y="105" text-anchor="end" font-size="9" font-weight="700" fill="#9F1239">M checkpoint</text>

          <text x="260" y="305" text-anchor="middle" font-size="10" fill="#64748B" font-style="italic">G₀ phase = เซลล์ที่ออกจากวัฏจักร (เซลล์ประสาท, กล้ามเนื้อหัวใจ)</text>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: วัฏจักรเซลล์ — Interphase (G₁, S, G₂) ใช้เวลานาน · M phase สั้น มี checkpoints คอยตรวจสอบ</div>
      </div>

      <table class="content-table">
        <tr><th>ระยะ</th><th>เกิดอะไร</th><th>เวลา</th></tr>
        <tr><td>G₁ (Gap 1)</td><td>เซลล์โต ผลิตโปรตีน เพิ่ม organelles</td><td>ยาวที่สุด</td></tr>
        <tr><td>S (Synthesis)</td><td>จำลอง DNA — chromosome 2n &rarr; sister chromatids</td><td>ปานกลาง</td></tr>
        <tr><td>G₂ (Gap 2)</td><td>เตรียม mitosis — สร้าง spindle proteins</td><td>สั้น</td></tr>
        <tr><td>M (Mitosis + Cytokinesis)</td><td>แบ่งนิวเคลียส + ไซโทพลาซึม</td><td>สั้นที่สุด (~1 ชม)</td></tr>
        <tr><td>G₀ (Resting)</td><td>หยุดแบ่งถาวรหรือชั่วคราว</td><td>หลายปี/ตลอดชีวิต</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>Checkpoints:</strong> G₁/S (เริ่ม S?), G₂/M (DNA ครบ?), M-checkpoint (spindle ติด?) — มี proteins เช่น <strong>p53, Cdk-cyclin</strong> ควบคุม → ถ้าผิดปกติ เกิดมะเร็ง</div>
    </div>

    <!-- 2. Interphase -->
    <div class="content-section">
      <h3>🧬 Interphase — เตรียมการก่อนแบ่ง</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>G₁ phase:</strong> เซลล์โตเป็น 2 เท่า · ทำหน้าที่ปกติ · ถ้าเลือกแบ่งจะผ่าน restriction point</li>
        <li><span class="li-dot sc-dot"></span><strong>S phase:</strong> DNA จำลองตัวเอง (semi-conservative) · chromosome แต่ละตัวมี <strong>2 sister chromatids</strong> ติดกันที่ centromere</li>
        <li><span class="li-dot sc-dot"></span><strong>G₂ phase:</strong> ตรวจสอบ DNA · ผลิต spindle proteins · เตรียมเข้า mitosis</li>
      </ul>
      <div class="formula-box">
        <div class="formula-label">DNA Content ตามวัฏจักร</div>
        ก่อน S: 2n DNA = C (เช่น 46 chromosomes แต่ละตัวเป็น 1 chromatid)<br>
        หลัง S: 2n DNA = 2C (46 chromosomes แต่ละตัวเป็น 2 sister chromatids)<br>
        หลัง mitosis: เซลล์ลูก 2n = C อีกครั้ง
      </div>
      <div class="tip-box">💡 ในมนุษย์: G₁ ~11 ชม · S ~8 ชม · G₂ ~4 ชม · M ~1 ชม = วัฏจักรรวม ~24 ชม (เซลล์ที่แบ่งเร็ว)</div>
    </div>

    <!-- 3. Mitosis + SVG -->
    <div class="content-section">
      <h3>🌀 Mitosis — แบ่งนิวเคลียส 4 ระยะ</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">4 ระยะของ Mitosis (PMAT)</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Prophase -->
            <ellipse cx="80" cy="110" rx="55" ry="45" fill="#FFFFFF" stroke="#9F1239" stroke-width="2"/>
            <text x="80" y="55" text-anchor="middle" font-weight="700" fill="#9F1239">1. Prophase</text>
            <!-- Visible chromosomes (X shapes) -->
            <g stroke="#1E40AF" stroke-width="2" fill="none">
              <path d="M 60 95 L 70 105 M 60 105 L 70 95"/>
              <path d="M 95 100 L 105 110 M 95 110 L 105 100"/>
              <path d="M 75 125 L 85 135 M 75 135 L 85 125"/>
            </g>
            <text x="80" y="170" text-anchor="middle" font-size="8" fill="#9F1239">เยื่อ nuc สลาย</text>
            <text x="80" y="182" text-anchor="middle" font-size="8" fill="#9F1239">spindle เริ่มสร้าง</text>

            <!-- Metaphase -->
            <ellipse cx="200" cy="110" rx="55" ry="45" fill="#FFFFFF" stroke="#F59E0B" stroke-width="2"/>
            <text x="200" y="55" text-anchor="middle" font-weight="700" fill="#B45309">2. Metaphase</text>
            <line x1="200" y1="75" x2="200" y2="145" stroke="#B45309" stroke-width="1" stroke-dasharray="3 2"/>
            <g stroke="#1E40AF" stroke-width="2" fill="none">
              <path d="M 195 95 L 205 105 M 195 105 L 205 95"/>
              <path d="M 195 110 L 205 120 M 195 120 L 205 110"/>
              <path d="M 195 125 L 205 135 M 195 135 L 205 125"/>
            </g>
            <text x="200" y="170" text-anchor="middle" font-size="8" fill="#B45309">เรียงกลาง</text>
            <text x="200" y="182" text-anchor="middle" font-size="8" fill="#B45309">(metaphase plate)</text>

            <!-- Anaphase -->
            <ellipse cx="320" cy="110" rx="55" ry="45" fill="#FFFFFF" stroke="#10B981" stroke-width="2"/>
            <text x="320" y="55" text-anchor="middle" font-weight="700" fill="#065F46">3. Anaphase</text>
            <!-- separating chromatids -->
            <g stroke="#1E40AF" stroke-width="2" fill="none">
              <line x1="280" y1="105" x2="290" y2="100"/>
              <line x1="280" y1="115" x2="290" y2="110"/>
              <line x1="280" y1="120" x2="290" y2="115"/>

              <line x1="350" y1="100" x2="360" y2="105"/>
              <line x1="350" y1="110" x2="360" y2="115"/>
              <line x1="350" y1="115" x2="360" y2="120"/>
            </g>
            <path d="M 295 110 L 285 110" stroke="#065F46" stroke-width="1" marker-end="url(#arrM)"/>
            <path d="M 345 110 L 355 110" stroke="#065F46" stroke-width="1" marker-end="url(#arrM)"/>
            <text x="320" y="170" text-anchor="middle" font-size="8" fill="#065F46">ดึงไปคนละขั้ว</text>

            <!-- Telophase -->
            <ellipse cx="440" cy="110" rx="55" ry="45" fill="#FFFFFF" stroke="#7C3AED" stroke-width="2"/>
            <text x="440" y="55" text-anchor="middle" font-weight="700" fill="#5B21B6">4. Telophase</text>
            <ellipse cx="420" cy="110" rx="15" ry="20" fill="#EDE9FE" stroke="#5B21B6"/>
            <ellipse cx="460" cy="110" rx="15" ry="20" fill="#EDE9FE" stroke="#5B21B6"/>
            <text x="440" y="170" text-anchor="middle" font-size="8" fill="#5B21B6">เยื่อ nuc ใหม่</text>
            <text x="440" y="182" text-anchor="middle" font-size="8" fill="#5B21B6">2 nuclei</text>
          </g>
          <defs><marker id="arrM" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#065F46"/></marker></defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: 4 ระยะของ Mitosis — Prophase → Metaphase → Anaphase → Telophase</div>
      </div>

      <table class="content-table">
        <tr><th>ระยะ</th><th>สิ่งที่เกิด</th></tr>
        <tr><td>Prophase</td><td>โครโมโซมหดสั้น เห็นชัด · เยื่อ nuclear สลาย · spindle สร้างจาก centrosomes · nucleolus หาย</td></tr>
        <tr><td>Metaphase</td><td>โครโมโซมเรียงกลาง (metaphase plate) · sister chromatids ติด spindle 2 ขั้ว</td></tr>
        <tr><td>Anaphase</td><td>sister chromatids แยกออก ถูกดึงไปคนละขั้ว · chromosome จำนวน 2 เท่าชั่วคราว</td></tr>
        <tr><td>Telophase</td><td>โครโมโซมคลายตัว · เยื่อ nuclear สร้างใหม่ · nucleolus ปรากฏอีกครั้ง</td></tr>
      </table>
      <div class="tip-box">💡 เคล็ดลับจำ PMAT: <strong>P</strong>rophase → <strong>M</strong>etaphase → <strong>A</strong>naphase → <strong>T</strong>elophase</div>
    </div>

    <!-- 4. Cytokinesis -->
    <div class="content-section">
      <h3>✂️ Cytokinesis — แบ่งไซโทพลาซึม</h3>
      <table class="content-table">
        <tr><th>ลักษณะ</th><th>เซลล์สัตว์</th><th>เซลล์พืช</th></tr>
        <tr><td>กลไก</td><td><strong>Cleavage furrow</strong> — actin ring บีบแบ่งเซลล์</td><td><strong>Cell plate</strong> — vesicles รวมตัวสร้างผนังเซลล์ใหม่กลาง</td></tr>
        <tr><td>ทิศทาง</td><td>นอก → เข้าใน</td><td>กลาง → ออกข้าง</td></tr>
        <tr><td>ผลลัพธ์</td><td>2 เซลล์ลูกที่เหมือนกัน</td><td>2 เซลล์ลูกที่ติดผนังเซลล์</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>Mitosis</strong> = แบ่งนิวเคลียส (karyokinesis), <strong>Cytokinesis</strong> = แบ่งไซโทพลาซึม — บางครั้งเกิด mitosis โดยไม่ตามด้วย cytokinesis → เซลล์มี multinucleate (เช่น muscle fiber)</div>
    </div>

    <!-- 5. Meiosis + SVG -->
    <div class="content-section">
      <h3>🧫 Meiosis — แบ่งเซลล์สืบพันธุ์ (2n → n)</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Meiosis — 2 รอบ ได้ 4 เซลล์ (n)</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Parent cell -->
            <ellipse cx="260" cy="60" rx="55" ry="32" fill="#FFE4E6" stroke="#9F1239" stroke-width="2"/>
            <g stroke="#1E40AF" stroke-width="2" fill="none">
              <path d="M 240 53 L 250 60 M 240 60 L 250 53"/>
              <path d="M 260 53 L 270 60 M 260 60 L 270 53"/>
              <path d="M 280 53 L 290 60 M 280 60 L 290 53"/>
              <line x1="260" y1="68" x2="260" y2="73"/>
              <line x1="240" y1="73" x2="240" y2="77"/>
              <line x1="280" y1="73" x2="280" y2="77"/>
            </g>
            <text x="335" y="65" font-weight="700" fill="#9F1239" font-size="11">Parent (2n=4)</text>
            <text x="335" y="78" font-size="9" fill="#9F1239">หลัง S phase</text>

            <!-- arrow down to Meiosis I -->
            <path d="M 260 95 L 260 115" stroke="#065F46" stroke-width="2" marker-end="url(#arrMe)"/>
            <text x="270" y="110" font-size="9" fill="#065F46">Meiosis I</text>

            <!-- After Meiosis I (2 cells, n=2) -->
            <ellipse cx="170" cy="160" rx="42" ry="25" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
            <g stroke="#1E40AF" stroke-width="2" fill="none">
              <path d="M 160 153 L 168 160 M 160 160 L 168 153"/>
              <path d="M 178 153 L 186 160 M 178 160 L 186 153"/>
            </g>

            <ellipse cx="350" cy="160" rx="42" ry="25" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
            <g stroke="#1E40AF" stroke-width="2" fill="none">
              <path d="M 340 153 L 348 160 M 340 160 L 348 153"/>
              <path d="M 358 153 L 366 160 M 358 160 L 366 153"/>
            </g>

            <text x="60" y="155" font-weight="700" fill="#B45309" font-size="10">2 cells (n=2)</text>
            <text x="60" y="168" font-size="9" fill="#B45309">homologous</text>
            <text x="60" y="180" font-size="9" fill="#B45309">แยกแล้ว</text>

            <!-- arrows down to Meiosis II -->
            <path d="M 170 188 L 170 215" stroke="#065F46" stroke-width="2" marker-end="url(#arrMe)"/>
            <path d="M 350 188 L 350 215" stroke="#065F46" stroke-width="2" marker-end="url(#arrMe)"/>
            <text x="270" y="208" text-anchor="middle" font-size="9" fill="#065F46">Meiosis II (แยก sister chromatids)</text>

            <!-- 4 daughter cells -->
            <circle cx="125" cy="260" r="22" fill="#D1FAE5" stroke="#10B981" stroke-width="2"/>
            <line x1="120" y1="258" x2="130" y2="262" stroke="#1E40AF" stroke-width="2"/>
            <circle cx="215" cy="260" r="22" fill="#D1FAE5" stroke="#10B981" stroke-width="2"/>
            <line x1="210" y1="258" x2="220" y2="262" stroke="#1E40AF" stroke-width="2"/>
            <circle cx="305" cy="260" r="22" fill="#D1FAE5" stroke="#10B981" stroke-width="2"/>
            <line x1="300" y1="258" x2="310" y2="262" stroke="#1E40AF" stroke-width="2"/>
            <circle cx="395" cy="260" r="22" fill="#D1FAE5" stroke="#10B981" stroke-width="2"/>
            <line x1="390" y1="258" x2="400" y2="262" stroke="#1E40AF" stroke-width="2"/>

            <text x="260" y="305" text-anchor="middle" font-weight="700" fill="#065F46">4 daughter cells (n=2)</text>
            <text x="450" y="265" font-size="9" fill="#10B981">เซลล์สืบพันธุ์</text>
          </g>
          <defs><marker id="arrMe" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#065F46"/></marker></defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: Meiosis 2 รอบ — ลด chromosome 2n → n และได้เซลล์ลูก 4 เซลล์ (sperm/egg precursors)</div>
      </div>

      <h4>Meiosis I (Reduction Division)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Prophase I:</strong> Homologous chromosomes มาคู่กัน (synapsis) → เกิด <strong>tetrad</strong> → <strong>Crossing over</strong> สลับชิ้น DNA → เพิ่ม variation</li>
        <li><span class="li-dot sc-dot"></span><strong>Metaphase I:</strong> Homologous pairs เรียงกลางเป็นคู่ (ไม่ใช่เดี่ยว) — Independent assortment</li>
        <li><span class="li-dot sc-dot"></span><strong>Anaphase I:</strong> Homologous chromosomes แยกออก (sister chromatids ยังติดกัน!)</li>
        <li><span class="li-dot sc-dot"></span><strong>Telophase I + Cytokinesis:</strong> 2 เซลล์ลูก ๆ ละมี chromosome n (haploid) แต่ละ chr ยังมี 2 sister chromatids</li>
      </ul>
      <h4>Meiosis II (Equational Division — คล้าย mitosis)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>Prophase II → Metaphase II → Anaphase II (sister chromatids แยก) → Telophase II</li>
        <li><span class="li-dot sc-dot"></span>ผลลัพธ์: <strong>4 เซลล์ลูก haploid (n)</strong> ที่ไม่เหมือนกันเลย</li>
      </ul>
      <div class="note-box">⚠️ <strong>Spermatogenesis vs Oogenesis:</strong> ในเพศชาย meiosis ได้ <strong>4 sperm</strong> ที่ขนาดเท่ากัน · ในเพศหญิงได้ <strong>1 ไข่ใหญ่</strong> + 3 polar bodies (เล็กไม่มี cytoplasm)</div>
    </div>

    <!-- 6. Mitosis vs Meiosis -->
    <div class="content-section">
      <h3>🆚 Mitosis vs Meiosis และ Genetic Variation</h3>
      <table class="content-table">
        <tr><th>ลักษณะ</th><th>Mitosis</th><th>Meiosis</th></tr>
        <tr><td>จำนวนรอบ</td><td>1</td><td>2 (Meiosis I + II)</td></tr>
        <tr><td>จำนวนเซลล์ลูก</td><td>2</td><td>4</td></tr>
        <tr><td>โครโมโซมลูก</td><td>2n (เท่าแม่)</td><td>n (ครึ่งของแม่)</td></tr>
        <tr><td>Synapsis &amp; Crossing over</td><td>ไม่มี</td><td>มี (Prophase I)</td></tr>
        <tr><td>Homologous pair เรียงกลาง</td><td>ไม่ — เรียงเดี่ยว</td><td>ใช่ — เรียงเป็นคู่ (Metaphase I)</td></tr>
        <tr><td>วัตถุประสงค์</td><td>เติบโต ซ่อมแซม</td><td>สร้างเซลล์สืบพันธุ์</td></tr>
        <tr><td>เซลล์ลูก vs แม่</td><td>เหมือนกัน 100%</td><td>ต่างกัน — มี variation</td></tr>
      </table>
      <h4>แหล่งกำเนิด Genetic Variation 3 อย่าง</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li><strong>Crossing over</strong> (Prophase I) — สลับชิ้น DNA ระหว่าง homologs</li>
        <li><strong>Independent assortment</strong> (Metaphase I) — homologous pairs เรียงสุ่ม → ในมนุษย์ได้ 2²³ = 8.4 ล้านชุดเซลล์สืบพันธุ์</li>
        <li><strong>Random fertilization</strong> — ไข่ 1 ตัว × sperm 1 ตัว สุ่ม = 2²³ × 2²³ ≈ 70 ล้านล้านชุดทายาท</li>
      </ol>
      <div class="tip-box">💡 <strong>นี่คือเหตุผลที่พี่น้องไม่เหมือนกัน 100%</strong> — แม้พ่อแม่เดียวกัน ก็ได้ DNA combination ต่าง ๆ กัน (ยกเว้น identical twins)</div>
    </div>

    <!-- 7. Disorders -->
    <div class="content-section">
      <h3>🚨 ความผิดปกติของการแบ่งเซลล์</h3>
      <h4>1. Cancer (มะเร็ง)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>การกลายพันธุ์ของ proto-oncogene</strong> (RAS, MYC) → oncogene → กระตุ้นการแบ่งเซลล์เกินจำเป็น</li>
        <li><span class="li-dot sc-dot"></span><strong>การกลายพันธุ์ของ tumor suppressor</strong> (p53, RB) → สูญเสีย "เบรค" → เซลล์แบ่งไม่หยุด</li>
        <li><span class="li-dot sc-dot"></span><strong>ลักษณะมะเร็ง:</strong> หยุดตอบสนอง contact inhibition · ไม่ตายเมื่อควร (escape apoptosis) · metastasis · สร้างหลอดเลือดของตัวเอง (angiogenesis)</li>
      </ul>
      <h4>2. Nondisjunction (โครโมโซมแยกไม่ครบ)</h4>
      <table class="content-table">
        <tr><th>ภาวะ</th><th>Karyotype</th><th>อาการ</th></tr>
        <tr><td>Down syndrome</td><td>Trisomy 21 (47,+21)</td><td>IQ ต่ำ ใบหน้าเฉพาะ ปัญหาหัวใจ</td></tr>
        <tr><td>Edwards syndrome</td><td>Trisomy 18</td><td>เสียชีวิตในวัยทารก</td></tr>
        <tr><td>Patau syndrome</td><td>Trisomy 13</td><td>ผิดปกติหลายระบบ</td></tr>
        <tr><td>Klinefelter</td><td>XXY (47,XXY)</td><td>ชาย เป็นหมัน เต้านมขยาย</td></tr>
        <tr><td>Turner</td><td>XO (45,X)</td><td>หญิง ตัวเตี้ย รังไข่ไม่พัฒนา</td></tr>
      </table>
      <div class="note-box">⚠️ Down syndrome พบบ่อยขึ้นเมื่อแม่อายุมาก — เพราะไข่ค้างที่ Prophase I ตั้งแต่ทารก ยิ่งนาน ยิ่งเสี่ยง nondisjunction</div>
    </div>

    <!-- 8. Applications -->
    <div class="content-section">
      <h3>🌟 การประยุกต์ในชีวิตจริง</h3>
      <table class="content-table">
        <tr><th>การประยุกต์</th><th>หลักการ</th></tr>
        <tr><td>Stem cell therapy</td><td>ใช้เซลล์ที่ยังแบ่งและ differentiate ได้ ปลูกถ่ายซ่อมเนื้อเยื่อ</td></tr>
        <tr><td>Cloning (Dolly, 1996)</td><td>ใส่ nucleus ของเซลล์ร่างกายเข้าไปในไข่ที่เอา nucleus ออก → ได้ลูกเหมือนต้นแบบ</td></tr>
        <tr><td>IVF (In Vitro Fertilization)</td><td>ผสมไข่กับ sperm ในจาน → ใส่กลับมดลูก — ช่วยคู่มีบุตรยาก</td></tr>
        <tr><td>Karyotyping</td><td>ดูโครโมโซมในเซลล์ที่ metaphase → วินิจฉัย Down syndrome ก่อนคลอด</td></tr>
        <tr><td>เคมีบำบัด (Chemotherapy)</td><td>ยายับยั้ง mitosis → ฆ่าเซลล์มะเร็ง (และเซลล์ปกติที่แบ่งเร็ว → ผม ผิวลำไส้)</td></tr>
        <tr><td>เพาะเลี้ยงเนื้อเยื่อพืช</td><td>ใช้ mitosis สร้างพืชใหม่จากเซลล์เดียว — ได้ลูกเหมือนต้นแม่ 100%</td></tr>
      </table>
      <div class="tip-box">💡 ยาเคมีบำบัด เช่น <strong>vinblastine</strong> และ <strong>taxol</strong> ทำลาย microtubule → spindle ไม่ทำงาน → mitosis หยุด</div>
    </div>

    <!-- ============ 32 PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — วัฏจักรเซลล์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — ระยะของวัฏจักร</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เรียงระยะของวัฏจักรเซลล์: G₂, S, M, G₁ — ในลำดับที่ถูก</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> G₁ → S → G₂ → M (→ กลับไป G₁)<br>Interphase = G₁ + S + G₂ (~95% ของเวลา)<br>M = mitosis + cytokinesis (~5%)<br>💡 จำว่า "Grow-Synthesize-Grow-Mitosis"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — G₀ phase</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เซลล์ใดอยู่ใน G₀ phase ตลอดชีวิต และเซลล์ใดสามารถกลับเข้าวัฏจักรได้?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>เซลล์ประสาท · กล้ามเนื้อหัวใจ</strong> อยู่ใน G₀ ตลอดชีวิต — ไม่แบ่งอีก<br><strong>เซลล์ตับ · ลิมโฟไซต์</strong> อยู่ใน G₀ ปกติ แต่กลับเข้าวัฏจักรได้เมื่อจำเป็น (ตับ regenerate, immune response)<br>💡 จึงทำไม heart attack เสียหายถาวร</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — DNA ที่ S phase</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ก่อนและหลัง S phase ปริมาณ DNA ในเซลล์เปลี่ยนอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ก่อน S: 2n DNA = C<br>หลัง S: 2n DNA = <strong>2C</strong> (เพิ่มเป็น 2 เท่า)<br>เพราะ DNA จำลองตัวเอง — แต่ละ chromosome ตอนนี้มี 2 sister chromatids<br>💡 chromosome number ยังเท่าเดิม (46) — แต่ DNA content เพิ่ม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: Checkpoint</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> p53 ทำหน้าที่อะไรที่ G₁/S checkpoint และเกิดอะไรถ้า p53 กลายพันธุ์?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> p53 ตรวจ DNA damage → ถ้าพบ → หยุดวัฏจักร · เรียก repair enzymes · ถ้าซ่อมไม่ได้ → trigger apoptosis<br>ถ้า p53 กลายพันธุ์ → เซลล์ที่มี DNA เสียหายแบ่งต่อ → สะสมการกลายพันธุ์ → <strong>มะเร็ง</strong><br>~50% ของมะเร็งในมนุษย์มี p53 mutation<br>💡 จึงเรียก p53 ว่า "guardian of the genome"</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — Mitosis ขั้นตอน</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — PMAT</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ตัวย่อ PMAT หมายถึงอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>P</strong>rophase → <strong>M</strong>etaphase → <strong>A</strong>naphase → <strong>T</strong>elophase<br>เป็นวิธีจำลำดับ 4 ระยะของ mitosis<br>💡 จำง่ายขึ้น: "<strong>P</strong>uang <strong>M</strong>ai <strong>A</strong>roi <strong>T</strong>ham" (Thai mnemonic)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — Metaphase plate</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ที่ระยะใดของ mitosis ที่เห็น chromosomes ชัดที่สุดและทำไม?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Metaphase</strong> — chromosomes หดสั้นที่สุดและเรียงกลางเซลล์ตรงเส้น <strong>metaphase plate</strong> → เห็นได้ชัดที่สุด<br>นี่เป็นเหตุผลที่ <strong>karyotyping</strong> ใช้เซลล์ในระยะนี้<br>💡 ใช้สีย้อม Giemsa เห็น "banding" ที่จำเพาะของแต่ละ chromosome</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — Anaphase</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ที่ Anaphase ของ mitosis อะไรแยกออก?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Sister chromatids</strong> ของ chromosome เดียวกัน — แยกที่ centromere แล้วถูก spindle ดึงไปคนละขั้ว<br>หลัง Anaphase: เซลล์มี chromosomes ชั่วคราว 92 (จาก 46) จนกว่าจะแบ่งครึ่ง<br>💡 ใน Anaphase I ของ meiosis แยก <strong>homologous</strong> (ไม่ใช่ sister)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: Spindle ติดผิด</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ถ้า spindle ไม่ติด chromosome ครบทุกตัว ที่ M-checkpoint จะเกิดอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> M-checkpoint (spindle checkpoint) จะ <strong>หยุด anaphase</strong> ไว้ก่อน → ให้เซลล์มีเวลาแก้ปัญหาให้ spindle ติดทุก chromosome<br>ถ้าผิดพลาดและยังเดินหน้า → เกิด <strong>aneuploidy</strong> (chromosome เกิน/ขาด) → เป็นต้นเหตุของมะเร็งและความผิดปกติ<br>💡 ยา paclitaxel (Taxol) ใช้กลไกนี้ — ทำให้ spindle ไม่สามารถ disassemble → เซลล์ค้าง → ตาย</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — Cytokinesis</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — สัตว์ vs พืช</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Cytokinesis ในสัตว์และพืชต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>สัตว์:</strong> <strong>Cleavage furrow</strong> — actin ring บีบจากนอกเข้าใน คล้ายเชือกรัด<br><strong>พืช:</strong> <strong>Cell plate</strong> — vesicles จาก Golgi รวมตัวกลางเซลล์ สร้างผนังเซลล์ใหม่จากกลางออกข้าง<br>💡 พืชมีผนังเซลล์แข็ง — บีบจากนอกไม่ได้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — Multinucleate</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เซลล์กล้ามเนื้อโครงร่าง (skeletal muscle) มีหลาย nuclei — เกิดได้อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ในขั้นพัฒนา myoblasts (เซลล์ต้นกำเนิดกล้ามเนื้อ) <strong>รวมตัวกัน</strong> (fusion) เป็น myofiber ยาว → มีหลาย nuclei จากเซลล์ต่างกัน<br>หรือเกิดจาก mitosis โดยไม่มี cytokinesis<br>💡 จึงเรียก myofiber เป็น <strong>"syncytium"</strong></div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — Contractile ring</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Contractile ring ในเซลล์สัตว์ทำจากอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Actin filaments + Myosin II</strong> — สร้างใต้ plasma membrane รอบกลางเซลล์<br>Myosin หดตัวกับ actin (เหมือนกล้ามเนื้อ) → บีบ membrane เข้าใน → เกิด cleavage furrow<br>💡 เป็นกลไกเดียวกับกล้ามเนื้อหดตัว แต่ทำงานในเซลล์เดียว</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: ทำไมพืชไม่ใช้ cleavage</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมพืชจึงไม่ใช้ cleavage furrow?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เซลล์พืชมี <strong>ผนังเซลล์เซลลูโลส</strong> ที่แข็งและไม่ยืดหยุ่น → บีบจากนอกเข้าไม่ได้<br>จึงต้องสร้างผนังเซลล์ใหม่ตรงกลาง (cell plate) ก่อน แล้วค่อยขยายออก<br>💡 เห็นได้จากเซลล์พืชเป็นรูปสี่เหลี่ยม — ไม่กลมเหมือนเซลล์สัตว์</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — Meiosis</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — Output ของ Meiosis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Meiosis เริ่มจาก 1 เซลล์ (2n) → ได้เซลล์ลูกกี่เซลล์ และแต่ละเซลล์มี ploidy เท่าใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>4 เซลล์ลูก haploid (n)</strong><br>Meiosis I: 1 (2n) → 2 (n) — ลดจำนวน<br>Meiosis II: 2 (n) → 4 (n) — เหมือน mitosis<br>💡 ในมนุษย์ 46 → 23 (per gamete)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — Crossing over</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Crossing over เกิดที่ระยะใด และเกิดอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เกิดที่ <strong>Prophase I</strong> ของ meiosis<br>Homologous chromosomes มาคู่กัน (synapsis) → เกิด tetrad → <strong>แลกเปลี่ยนชิ้น DNA</strong> ระหว่าง non-sister chromatids<br>ผลคือสร้าง chromosome ใหม่ที่มี alleles ผสมจากพ่อแม่<br>💡 เป็นแหล่งหลักของ genetic variation</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — Anaphase I vs II</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Anaphase I ต่างจาก Anaphase II ที่อะไรแยกออก?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Anaphase I:</strong> <strong>Homologous chromosomes</strong> แยกกัน (sister chromatids ยังติดกัน!)<br><strong>Anaphase II:</strong> <strong>Sister chromatids</strong> แยกกัน (เหมือน mitosis)<br>💡 นี่คือเหตุที่ Meiosis I = reduction division (ลด n) Meiosis II = equational division (เท่าเดิม)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: Spermatogenesis vs Oogenesis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม Oogenesis ในเพศหญิงผลิตไข่ได้แค่ 1 ตัวต่อ Meiosis 1 ครั้ง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ในการ cytokinesis ของ oogenesis เซลล์แบ่ง <strong>ไม่เท่ากัน</strong> — cytoplasm ส่วนใหญ่ไปอยู่ที่ไข่ 1 ตัว ส่วนอีก 3 cells (polar bodies) ได้แค่ chromosomes เกือบไม่มี cytoplasm<br>เพื่อสะสมสารอาหารและองค์ประกอบให้ตัวอ่อนใหม่<br>💡 ในเพศชายผลิต 4 sperm ขนาดเท่ากัน — sperm ไม่ต้องเก็บอาหาร</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — Variation</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — 3 แหล่งของ variation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุ 3 แหล่งของ genetic variation ที่เกี่ยวข้องกับ meiosis และการปฏิสนธิ</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>Crossing over</strong> ที่ Prophase I<br>(2) <strong>Independent assortment</strong> ที่ Metaphase I<br>(3) <strong>Random fertilization</strong> — sperm ใดผสมไข่ใด<br>💡 ในมนุษย์ Independent assortment ให้ 2²³ = 8.4M ชุดเซลล์สืบพันธุ์ × 2²³ = ~70 ล้านล้านชุดทายาท</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — Independent assortment</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Independent assortment ทำให้เกิด combinations กี่ชุดในมนุษย์ (ก่อนนับ crossing over)?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> มี 23 คู่ chromosomes → แต่ละคู่ในการเรียงที่ Metaphase I มี 2 แบบ → รวม <strong>2²³ ≈ 8.4 ล้านชุด</strong><br>นี่ก่อนนับ crossing over ที่เพิ่มความหลากหลายอีกมหาศาล<br>💡 จึงเรียกว่า "เกือบจะไม่ซ้ำเลย"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — Identical twins</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม identical twins (แฝดเหมือน) จึงมี DNA เหมือนกัน 100%?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เกิดจาก <strong>zygote เดียว</strong> ที่แบ่งเป็น 2 embryo ในระยะ embryo ตอนแรก ๆ → ทั้งคู่มี DNA จาก meiosis และการปฏิสนธิเดียวกัน<br>ตรงข้าม: <strong>fraternal twins</strong> (แฝดเทียม) มาจาก 2 ไข่ + 2 sperm — DNA ต่างกันเหมือนพี่น้องทั่วไป<br>💡 Identical twins มี DNA เหมือนกันแต่ <strong>fingerprint ต่าง</strong> เพราะเกิดจาก stochastic events</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: Asexual reproduction</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการสืบพันธุ์แบบไม่อาศัยเพศ (asexual) ดีในระยะสั้น แต่อันตรายในระยะยาว?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้ mitosis → ลูกเหมือนแม่ 100%<br><strong>ระยะสั้น:</strong> ดี — ไม่ต้องหาคู่ ขยายพันธุ์เร็ว<br><strong>ระยะยาว:</strong> อันตราย — ไม่มี variation → ถ้าโรคใหม่หรือสภาพแวดล้อมเปลี่ยน ทั้งประชากรอ่อนแอเหมือนกัน → สูญพันธุ์ง่าย<br>💡 จึงเรียก sex/meiosis ว่า "evolutionary insurance"</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — Mitosis vs Meiosis</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — เปรียบเทียบหลัก</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Mitosis และ Meiosis ต่างกันที่ผลลัพธ์อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>Mitosis: 1 → 2 เซลล์ (2n เท่าแม่ เหมือนกัน 100%)<br>Meiosis: 1 → 4 เซลล์ (n ครึ่งของแม่ มี variation)<br>💡 Mitosis = สำเนา · Meiosis = แชฟเฟิล</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — เกิดที่ไหน?</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ในมนุษย์ Mitosis และ Meiosis เกิดที่ที่ใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Mitosis:</strong> เซลล์ร่างกาย (somatic cells) เกือบทุกที่ — ผิวหนัง ลำไส้ ตับ ไขกระดูก<br><strong>Meiosis:</strong> เฉพาะใน <strong>อัณฑะ (ผลิต sperm)</strong> และ <strong>รังไข่ (ผลิตไข่)</strong><br>💡 Meiosis สร้าง gametes เท่านั้น</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — Synapsis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Synapsis เกิดใน mitosis หรือ meiosis และคืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เฉพาะใน <strong>meiosis</strong> (Prophase I) — Homologous chromosomes มาจับคู่กันแน่น (synapsis) สร้าง <strong>tetrad</strong> หรือ bivalent<br>ทำให้เกิด crossing over ได้<br>💡 Mitosis ไม่มี synapsis — chromosomes เรียงเดี่ยว</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: Polyploidy</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Polyploidy (3n, 4n, ...) คืออะไรและพบในพืชหรือสัตว์มากกว่า?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Polyploidy = มี chromosomes มากกว่า 2n (เช่น 3n triploid, 4n tetraploid)<br>เกิดจาก nondisjunction ของ chromosomes ทั้งหมด<br><strong>พืช:</strong> พบบ่อย และมักให้ผลผลิตมาก เช่น ข้าวสาลี (6n), สตรอเบอร์รี (8n), กล้วยไม่มีเมล็ด (3n)<br><strong>สัตว์:</strong> หายากและมักเป็นหมัน — ยกเว้นปลาบางชนิด<br>💡 พืช 3n มักไม่มีเมล็ด → ใช้ในการเกษตร (กล้วย แตงโม)</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — ความผิดปกติ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — Down syndrome</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Down syndrome เกิดจากอะไรในแง่ chromosome?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Trisomy 21</strong> — มี chromosome 21 จำนวน 3 ตัว (แทนที่ 2) → karyotype = 47,+21<br>เกิดจาก nondisjunction ที่ Anaphase I ของ Meiosis ในไข่ (~90%) หรือ sperm (~10%)<br>💡 ความเสี่ยงเพิ่มเมื่อแม่อายุ &gt; 35 ปี</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — Cancer</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> มะเร็งเกิดจากการกลายพันธุ์ของยีน 2 ชนิดหลักอะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(1) <strong>Proto-oncogenes</strong> (RAS, MYC, ERBB2) — ปกติกระตุ้นการแบ่งเซลล์ → mutation → กระตุ้นเกินจำเป็น (gain-of-function)<br>(2) <strong>Tumor suppressors</strong> (p53, RB, BRCA1/2) — ปกติหยุดการแบ่ง → mutation → สูญเสียการยับยั้ง (loss-of-function)<br>มะเร็งต้องการการกลายพันธุ์หลายชนิดสะสมในเซลล์เดียว ("multi-hit hypothesis")<br>💡 บางคนรับ mutation มาทางพันธุกรรม (BRCA1) → เสี่ยงสูง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — Apoptosis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Apoptosis คืออะไรและสำคัญในป้องกันมะเร็งอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Apoptosis = "การฆ่าตัวตายของเซลล์" — กระบวนการเซลล์ตายอย่างเป็นระเบียบ ไม่ทำให้เซลล์รอบข้างเสียหาย<br>ป้องกันมะเร็ง: เซลล์ที่มี DNA damage รุนแรงจะถูก trigger ให้ apoptosis โดย p53<br>เซลล์มะเร็งมักหลบเลี่ยง apoptosis → รอดและสะสมการกลายพันธุ์<br>💡 บางยารักษามะเร็งทำงานโดย restore apoptosis ในเซลล์มะเร็ง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: Telomere</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Telomere คืออะไรและเกี่ยวข้องกับการแก่และมะเร็งอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Telomere = ลำดับ DNA ซ้ำ ๆ ที่ปลาย chromosome (TTAGGG ในมนุษย์) — ป้องกันการสูญเสีย gene ในการ replication<br>ทุกครั้งที่เซลล์แบ่ง telomere สั้นลง ~50-100 bp → ในที่สุดเซลล์หยุดแบ่ง (replicative senescence)<br><strong>ในมะเร็ง:</strong> เซลล์ activate <strong>telomerase</strong> → telomere ไม่สั้นลง → เซลล์แบ่งไม่จำกัด ("immortal")<br>💡 จึงเรียก telomerase ว่า "เป้าหมายของยารักษามะเร็งใหม่"</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — การประยุกต์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — Stem cell</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Stem cell มี 2 คุณสมบัติเด่นคืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>Self-renewal</strong> — แบ่งสร้าง stem cell ลูกเหมือนตัวเอง<br>(2) <strong>Potency / Differentiation</strong> — สามารถพัฒนาเป็นเซลล์ชนิดต่าง ๆ ได้<br>💡 Embryonic = pluripotent (เป็นได้ทุกชนิด), Adult = multipotent (จำกัด)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — Cloning Dolly</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Dolly (1996) ถูก clone อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้เทคนิค <strong>Somatic Cell Nuclear Transfer (SCNT)</strong>:<br>1) นำ nucleus จากเซลล์ <strong>mammary gland</strong> ของแกะตัวที่ A<br>2) นำไข่ (ไม่มี nucleus) จากแกะตัวที่ B → enucleate<br>3) ใส่ nucleus จาก A เข้าไปในไข่ของ B<br>4) กระตุ้นด้วยไฟฟ้า → เริ่ม mitosis → ฝังในแกะตัวที่ C<br>5) Dolly เกิด — DNA เหมือนแกะตัวที่ A 100%<br>💡 พิสูจน์ว่าเซลล์ที่ differentiate แล้วยังเปลี่ยนกลับเป็น totipotent ได้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — Chemotherapy</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมเคมีบำบัด (chemotherapy) ทำให้ผมร่วงและคลื่นไส้?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ยาเคมีบำบัดเป้าหมายเซลล์ที่ <strong>แบ่งเร็ว</strong> — โดยเฉพาะเซลล์มะเร็ง<br>แต่เซลล์ปกติที่แบ่งเร็วก็ถูกผลกระทบ:<br>- รากผม → ผมร่วง<br>- เยื่อบุลำไส้ → คลื่นไส้ ท้องเสีย<br>- ไขกระดูก → เม็ดเลือดต่ำ<br>เซลล์เหล่านี้ฟื้นได้หลังหยุดยา<br>💡 ยาใหม่กว่า (targeted therapy, immunotherapy) เลือกเป้าหมายมากขึ้น → side effects น้อยลง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: iPSC</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> iPSC (induced Pluripotent Stem Cell) คืออะไรและพิเศษอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> iPSC = เซลล์ปกติ (เช่น ผิวหนัง) ที่ถูก reprogram กลับเป็น pluripotent โดยใส่ <strong>4 transcription factors (Yamanaka factors)</strong> — Oct4, Sox2, Klf4, c-Myc<br>พิเศษ:<br>(1) ไม่ต้องทำลายเอ็มบริโอ (ไม่มีปัญหาจริยธรรม)<br>(2) สร้างจากเซลล์ผู้ป่วยเอง → ปลูกถ่ายโดยไม่ถูกปฏิเสธ<br>(3) ใช้สร้างเซลล์ใด ๆ เพื่อรักษาโรค<br>Shinya Yamanaka ได้ Nobel ปี 2012<br>💡 จุดเปลี่ยนใน regenerative medicine</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>วัฏจักรเซลล์:</strong> G₁ &rarr; S &rarr; G₂ &rarr; M (PMAT)<br>
        <strong>Interphase ~95%</strong> · <strong>M phase ~5%</strong><br>
        <strong>Mitosis:</strong> 1 (2n) &rarr; 2 (2n) เหมือนกัน<br>
        <strong>Meiosis:</strong> 1 (2n) &rarr; 4 (n) ต่างกัน<br>
        <strong>3 แหล่ง variation:</strong> Crossing over · Independent assortment · Random fertilization<br>
        <strong>Checkpoints:</strong> G₁/S, G₂/M, M (p53, Cdk-cyclin)<br>
        <strong>Cancer:</strong> oncogene + tumor suppressor mutations
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>Mitosis สร้างเซลล์สืบพันธุ์</td><td>Meiosis สร้าง gametes — Mitosis ทำเซลล์ร่างกาย</td></tr>
        <tr><td>Crossing over เกิดใน Mitosis</td><td>เฉพาะใน Meiosis Prophase I</td></tr>
        <tr><td>Anaphase I แยก sister chromatids</td><td>แยก <strong>homologous chromosomes</strong> — sisters ยังติดกัน</td></tr>
        <tr><td>เซลล์แบ่งทันที</td><td>มี checkpoint ตรวจสอบหลายจุด</td></tr>
        <tr><td>Down syndrome = ขาด chromosome</td><td>มี <strong>เกิน</strong> 1 chromosome (trisomy 21)</td></tr>
        <tr><td>มะเร็งเกิดจาก 1 mutation</td><td>ต้องการสะสมหลาย mutation (multi-hit)</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> เห็น "homologous chromosomes" ในระยะเรียงคู่ = Meiosis I (Metaphase I) ; เห็น chromosomes เรียงเดี่ยว = Mitosis Metaphase หรือ Meiosis II</div>
    </div>
  `
});
