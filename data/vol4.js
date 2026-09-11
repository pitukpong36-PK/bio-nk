/* เนื้อหาชีววิทยา 4 — สร้างจาก split.py · แก้เนื้อหาที่ไฟล์นี้ได้เลย แล้วรัน _build/build.py */
window.BIO = window.BIO || {}; BIO.CH = BIO.CH || {};
Object.assign(BIO.CH, {
  b4c13: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> ส่วนของพืชดอก: ราก ลำต้น ใบ ดอก ผล เมล็ด<br>
        <strong>02</strong> เนื้อเยื่อพืช 3 ระบบ: Dermal · Vascular · Ground<br>
        <strong>03</strong> โครงสร้างราก &amp; การดูดน้ำ<br>
        <strong>04</strong> โครงสร้างลำต้น Monocot vs Dicot<br>
        <strong>05</strong> โครงสร้างใบ &amp; ปากใบ (Stomata)<br>
        <strong>06</strong> ดอก ผล เมล็ด<br>
        <strong>07</strong> การเจริญทุติยภูมิ (Secondary growth) &amp; วงปี<br>
        <strong>08</strong> การประยุกต์ในเกษตรกรรม
      </div>
      <div class="tip-box">💡 พืชดอก (Angiosperms) เป็นกลุ่มพืชที่ <strong>วิวัฒนาการสำเร็จที่สุด</strong> — มี &gt; 300,000 สปีชีส์ และครอบครองทุกระบบนิเวศบนบก</div>
    </div>

    <!-- 1. ส่วนของพืช + SVG -->
    <div class="content-section">
      <h3>🌱 โครงสร้างของพืชดอก</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">โครงสร้างพืชดอก</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Ground -->
            <rect x="0" y="200" width="520" height="120" fill="#FEF3C7" opacity="0.5"/>
            <line x1="0" y1="200" x2="520" y2="200" stroke="#92400E" stroke-width="2"/>

            <!-- Root -->
            <g stroke="#92400E" stroke-width="3" fill="none">
              <line x1="260" y1="200" x2="260" y2="290"/>
              <line x1="260" y1="220" x2="220" y2="270"/>
              <line x1="260" y1="220" x2="300" y2="270"/>
              <line x1="260" y1="250" x2="230" y2="290"/>
              <line x1="260" y1="250" x2="290" y2="290"/>
            </g>
            <text x="370" y="260" font-weight="700" fill="#92400E">ราก (Root)</text>
            <text x="370" y="275" font-size="9" fill="#92400E">ดูดน้ำและธาตุอาหาร</text>

            <!-- Stem -->
            <line x1="260" y1="200" x2="260" y2="100" stroke="#65A30D" stroke-width="6"/>
            <text x="370" y="155" font-weight="700" fill="#65A30D">ลำต้น (Stem)</text>
            <text x="370" y="170" font-size="9" fill="#65A30D">ค้ำจุน &amp; ลำเลียง</text>

            <!-- Leaves -->
            <g fill="#10B981" stroke="#065F46" stroke-width="1.5">
              <path d="M 260 150 Q 220 130 200 140 Q 220 160 260 155 Z"/>
              <path d="M 260 130 Q 300 110 320 120 Q 300 140 260 135 Z"/>
              <path d="M 260 175 Q 220 155 200 165 Q 220 185 260 180 Z"/>
            </g>
            <text x="120" y="135" font-weight="700" fill="#065F46">ใบ (Leaf)</text>
            <text x="120" y="150" font-size="9" fill="#065F46">สังเคราะห์แสง</text>

            <!-- Flower -->
            <g fill="#F472B6" stroke="#9F1239" stroke-width="1.5">
              <circle cx="240" cy="80" r="10"/>
              <circle cx="280" cy="80" r="10"/>
              <circle cx="260" cy="65" r="10"/>
              <circle cx="260" cy="95" r="10"/>
              <circle cx="260" cy="80" r="8" fill="#FBBF24"/>
            </g>
            <text x="370" y="80" font-weight="700" fill="#9F1239">ดอก (Flower)</text>
            <text x="370" y="95" font-size="9" fill="#9F1239">การสืบพันธุ์</text>

            <!-- Fruit -->
            <ellipse cx="260" cy="50" rx="14" ry="18" fill="#EF4444" stroke="#9F1239" stroke-width="1.5"/>
            <line x1="260" y1="35" x2="260" y2="30" stroke="#65A30D" stroke-width="2"/>
            <text x="100" y="40" font-weight="700" fill="#9F1239">ผล (Fruit)</text>
            <text x="100" y="55" font-size="9" fill="#9F1239">ห่อหุ้มเมล็ด</text>

            <!-- Seed -->
            <ellipse cx="260" cy="50" rx="6" ry="8" fill="#FBBF24" stroke="#92400E"/>
            <text x="370" y="40" font-weight="700" fill="#92400E">เมล็ด (Seed)</text>
            <text x="370" y="55" font-size="9" fill="#92400E">ขยายพันธุ์</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: ส่วนต่าง ๆ ของพืชดอก — ราก ลำต้น ใบ (vegetative) + ดอก ผล เมล็ด (reproductive)</div>
      </div>

      <table class="content-table">
        <tr><th>ส่วน</th><th>หน้าที่หลัก</th></tr>
        <tr><td>Root (ราก)</td><td>ดูดน้ำ + ธาตุอาหาร · ยึดพืช · เก็บอาหาร (บางชนิด)</td></tr>
        <tr><td>Stem (ลำต้น)</td><td>ค้ำจุน · ลำเลียงน้ำ-อาหาร · เก็บอาหาร</td></tr>
        <tr><td>Leaf (ใบ)</td><td>สังเคราะห์ด้วยแสง · แลกเปลี่ยนแก๊ส · คายน้ำ</td></tr>
        <tr><td>Flower (ดอก)</td><td>การสืบพันธุ์ผ่านดึงดูดแมลง</td></tr>
        <tr><td>Fruit (ผล)</td><td>ห่อหุ้มเมล็ด · ช่วยกระจายเมล็ด</td></tr>
        <tr><td>Seed (เมล็ด)</td><td>ขยายพันธุ์ · เก็บอาหารสำหรับ embryo</td></tr>
      </table>
      <div class="note-box">⚠️ พืชแบ่งได้เป็น <strong>vegetative organs</strong> (ราก ลำต้น ใบ - สำหรับการดำรงชีวิต) และ <strong>reproductive organs</strong> (ดอก ผล เมล็ด - สำหรับสืบพันธุ์)</div>
    </div>

    <!-- 2. เนื้อเยื่อ -->
    <div class="content-section">
      <h3>🧪 เนื้อเยื่อพืช 3 ระบบ</h3>
      <table class="content-table">
        <tr><th>ระบบ</th><th>ตำแหน่ง</th><th>หน้าที่</th></tr>
        <tr><td>Dermal tissue</td><td>ผิวด้านนอก</td><td>ป้องกัน · กันสูญน้ำ · แลกเปลี่ยนแก๊ส</td></tr>
        <tr><td>Vascular tissue</td><td>ภายในลำต้น/ราก</td><td>ลำเลียงน้ำและอาหาร</td></tr>
        <tr><td>Ground tissue</td><td>ที่เหลือทั้งหมด</td><td>สังเคราะห์แสง · เก็บอาหาร · ค้ำจุน</td></tr>
      </table>
      <h4>Dermal Tissue System</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Epidermis:</strong> ผิวด้านนอกของส่วนที่อายุน้อย — มี cuticle (ขี้ผึ้ง) กันสูญน้ำ</li>
        <li><span class="li-dot sc-dot"></span><strong>Periderm:</strong> ในลำต้นและรากที่อายุมาก — แทนที่ epidermis</li>
        <li><span class="li-dot sc-dot"></span><strong>Stomata:</strong> รูบนใบที่ควบคุมโดย guard cells — แลกเปลี่ยนแก๊ส</li>
        <li><span class="li-dot sc-dot"></span><strong>Root hairs:</strong> ผิวรากที่เพิ่มผิวการดูดน้ำ</li>
      </ul>
      <h4>Vascular Tissue System</h4>
      <table class="content-table">
        <tr><th>เนื้อเยื่อ</th><th>เซลล์</th><th>ลำเลียง</th></tr>
        <tr><td>Xylem</td><td>Tracheids · Vessel elements (เซลล์ตาย)</td><td>น้ำ + แร่ธาตุ (จากรากขึ้น)</td></tr>
        <tr><td>Phloem</td><td>Sieve tube elements · Companion cells (เซลล์มีชีวิต)</td><td>น้ำตาล + สารอาหาร (ทั้ง 2 ทาง)</td></tr>
      </table>
      <h4>Ground Tissue System</h4>
      <table class="content-table">
        <tr><th>เซลล์</th><th>ผนัง</th><th>หน้าที่</th></tr>
        <tr><td>Parenchyma</td><td>บาง</td><td>สังเคราะห์แสง · เก็บอาหาร · ซ่อมแซม</td></tr>
        <tr><td>Collenchyma</td><td>หนาเฉพาะมุม</td><td>ค้ำจุนพืชอ่อน (ก้านใบ)</td></tr>
        <tr><td>Sclerenchyma</td><td>หนาทั้งหมด + lignin</td><td>ค้ำจุนพืชโต (เปลือกถั่ว, เปลือกมะพร้าว)</td></tr>
      </table>
      <div class="tip-box">💡 <strong>Meristem</strong> = เนื้อเยื่อที่ยังแบ่งได้ — Apical (ปลายราก/ลำต้น) ทำให้สูง · Lateral (cambium) ทำให้อ้วน</div>
    </div>

    <!-- 3. ราก + SVG -->
    <div class="content-section">
      <h3>🌾 ราก (Root)</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">โครงสร้างราก (Cross-section)</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Concentric circles for root cross section -->
            <circle cx="170" cy="130" r="90" fill="#FEF3C7" stroke="#92400E" stroke-width="2"/>
            <text x="170" y="50" text-anchor="middle" font-size="9" fill="#92400E">Epidermis (+ root hairs)</text>
            <circle cx="170" cy="130" r="70" fill="#D1FAE5" stroke="#10B981" stroke-width="1.5"/>
            <text x="170" y="80" text-anchor="middle" font-size="9" fill="#065F46">Cortex (parenchyma)</text>
            <circle cx="170" cy="130" r="40" fill="#FFE4E6" stroke="#9F1239" stroke-width="1.5"/>
            <text x="170" y="105" text-anchor="middle" font-size="9" fill="#9F1239">Endodermis</text>
            <text x="170" y="118" text-anchor="middle" font-size="8" fill="#9F1239">(Casparian strip)</text>
            <!-- Vascular cylinder -->
            <circle cx="170" cy="130" r="22" fill="#DBEAFE" stroke="#1E40AF" stroke-width="2"/>
            <text x="170" y="130" text-anchor="middle" font-size="8" fill="#1E40AF" font-weight="700">Vascular</text>
            <text x="170" y="140" text-anchor="middle" font-size="8" fill="#1E40AF">cylinder</text>
            <!-- Star pattern for xylem -->
            <g fill="#1E40AF">
              <ellipse cx="170" cy="118" rx="4" ry="8"/>
              <ellipse cx="160" cy="135" rx="8" ry="4" transform="rotate(60 160 135)"/>
              <ellipse cx="180" cy="135" rx="8" ry="4" transform="rotate(-60 180 135)"/>
            </g>

            <!-- Root hairs -->
            <g stroke="#92400E" stroke-width="0.8" fill="none">
              <line x1="80" y1="120" x2="70" y2="115"/>
              <line x1="80" y1="135" x2="68" y2="138"/>
              <line x1="80" y1="150" x2="70" y2="155"/>
              <line x1="260" y1="120" x2="270" y2="115"/>
              <line x1="260" y1="135" x2="272" y2="138"/>
            </g>

            <!-- Side: longitudinal section showing root zones -->
            <g>
              <text x="400" y="50" text-anchor="middle" font-weight="700" fill="#92400E">3 Zones ของราก</text>
              <rect x="370" y="60" width="60" height="50" fill="#FEF3C7" stroke="#92400E" rx="3"/>
              <text x="400" y="80" text-anchor="middle" font-size="9" fill="#92400E">Maturation</text>
              <text x="400" y="92" text-anchor="middle" font-size="8" fill="#92400E">(root hairs)</text>
              <rect x="370" y="115" width="60" height="50" fill="#D1FAE5" stroke="#10B981" rx="3"/>
              <text x="400" y="135" text-anchor="middle" font-size="9" fill="#065F46">Elongation</text>
              <text x="400" y="147" text-anchor="middle" font-size="8" fill="#065F46">(เซลล์ยืดยาว)</text>
              <rect x="370" y="170" width="60" height="40" fill="#DBEAFE" stroke="#1E40AF" rx="3"/>
              <text x="400" y="187" text-anchor="middle" font-size="9" fill="#1E40AF">Cell Division</text>
              <text x="400" y="199" text-anchor="middle" font-size="8" fill="#1E40AF">(Apical Meristem)</text>
              <!-- Root cap -->
              <path d="M 380 215 L 400 225 L 420 215 Z" fill="#92400E"/>
              <text x="445" y="222" font-size="9" fill="#92400E">Root cap</text>
            </g>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: โครงสร้างราก — Cross-section (ซ้าย) และ Longitudinal zones (ขวา)</div>
      </div>

      <h4>โครงสร้างรากจากนอก → ใน</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li><strong>Epidermis:</strong> ผิวด้านนอก มี root hairs เพิ่มผิว</li>
        <li><strong>Cortex:</strong> เซลล์ parenchyma เก็บอาหาร · มีช่องว่างให้น้ำผ่าน</li>
        <li><strong>Endodermis:</strong> 1 ชั้นชิดวงท่อ — มี <strong>Casparian strip</strong> ควบคุมการเข้าของสาร</li>
        <li><strong>Pericycle:</strong> ชั้นนอกของวงท่อ — สร้างรากแขนง</li>
        <li><strong>Vascular cylinder (Stele):</strong> มี Xylem (กลาง) และ Phloem (ระหว่างแฉก)</li>
      </ol>
      <h4>3 Zones ของราก</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Zone of Cell Division:</strong> ใกล้ปลาย (Apical meristem) — แบ่งเซลล์ใหม่</li>
        <li><span class="li-dot sc-dot"></span><strong>Zone of Elongation:</strong> เซลล์ยืดยาวขึ้น</li>
        <li><span class="li-dot sc-dot"></span><strong>Zone of Maturation:</strong> เซลล์เปลี่ยนหน้าที่เฉพาะ — root hairs ปรากฏที่นี่</li>
      </ul>
      <div class="formula-box">
        <div class="formula-label">ประเภทของระบบราก</div>
        <strong>Taproot (รากแก้ว):</strong> มีรากใหญ่ 1 ตัว — Dicot (มะม่วง ทุเรียน แครอท)<br>
        <strong>Fibrous root (รากฝอย):</strong> หลายราก ไม่มีรากหลัก — Monocot (ข้าว ข้าวโพด มะพร้าว)
      </div>
    </div>

    <!-- 4. Stem + SVG -->
    <div class="content-section">
      <h3>🌳 ลำต้น (Stem)</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Cross-section ของลำต้น: Dicot vs Monocot</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Dicot -->
            <text x="140" y="55" text-anchor="middle" font-weight="700" fill="#065F46">Dicot (ใบเลี้ยงคู่)</text>
            <circle cx="140" cy="130" r="60" fill="#FEF3C7" stroke="#92400E" stroke-width="2"/>
            <text x="140" y="90" text-anchor="middle" font-size="9" fill="#065F46">Epidermis</text>
            <!-- Vascular bundles in ring -->
            <g fill="#10B981" stroke="#065F46" stroke-width="1">
              <circle cx="140" cy="85" r="6"/>
              <circle cx="170" cy="105" r="6"/>
              <circle cx="180" cy="135" r="6"/>
              <circle cx="170" cy="165" r="6"/>
              <circle cx="140" cy="180" r="6"/>
              <circle cx="110" cy="165" r="6"/>
              <circle cx="100" cy="135" r="6"/>
              <circle cx="110" cy="105" r="6"/>
            </g>
            <text x="140" y="130" text-anchor="middle" font-size="9" fill="#92400E">Pith</text>
            <text x="140" y="195" text-anchor="middle" font-size="9" fill="#065F46">vascular bundles เรียงเป็นวง</text>
            <text x="140" y="208" text-anchor="middle" font-size="8" fill="#10B981" font-weight="700">มี cambium → secondary growth</text>

            <!-- Monocot -->
            <text x="380" y="55" text-anchor="middle" font-weight="700" fill="#B45309">Monocot (ใบเลี้ยงเดี่ยว)</text>
            <circle cx="380" cy="130" r="60" fill="#FEF3C7" stroke="#92400E" stroke-width="2"/>
            <!-- Vascular bundles scattered -->
            <g fill="#10B981" stroke="#065F46" stroke-width="1">
              <circle cx="380" cy="100" r="5"/>
              <circle cx="395" cy="115" r="5"/>
              <circle cx="410" cy="135" r="5"/>
              <circle cx="395" cy="155" r="5"/>
              <circle cx="380" cy="170" r="5"/>
              <circle cx="365" cy="155" r="5"/>
              <circle cx="350" cy="135" r="5"/>
              <circle cx="365" cy="115" r="5"/>
              <circle cx="380" cy="135" r="5"/>
              <circle cx="395" cy="135" r="5"/>
              <circle cx="365" cy="135" r="5"/>
            </g>
            <text x="380" y="195" text-anchor="middle" font-size="9" fill="#B45309">vascular bundles กระจาย</text>
            <text x="380" y="208" text-anchor="middle" font-size="8" fill="#F43F5E" font-weight="700">ไม่มี cambium → ไม่มี secondary growth</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: ลำต้น Dicot (vascular bundles เรียงเป็นวง) vs Monocot (กระจาย)</div>
      </div>

      <table class="content-table">
        <tr><th>ลักษณะ</th><th>Dicot (ใบเลี้ยงคู่)</th><th>Monocot (ใบเลี้ยงเดี่ยว)</th></tr>
        <tr><td>Vascular bundles</td><td>เรียงเป็นวง</td><td>กระจัดกระจาย</td></tr>
        <tr><td>Pith</td><td>มีชัดเจน</td><td>ไม่มี/ไม่ชัด</td></tr>
        <tr><td>Cambium</td><td>มี</td><td>ไม่มี</td></tr>
        <tr><td>การเจริญทุติยภูมิ</td><td>มี (ต้นไม้ใหญ่)</td><td>ไม่มี (ส่วนใหญ่)</td></tr>
        <tr><td>ตัวอย่าง</td><td>มะม่วง ถั่ว ทุเรียน กุหลาบ</td><td>ข้าว ข้าวโพด มะพร้าว ปาล์ม</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>มะพร้าวและปาล์ม</strong> เป็น monocot แต่ดูเหมือนต้นไม้ใหญ่ — เพราะมี "diffuse secondary growth" จากการเพิ่มขนาด primary tissues ตลอด — ไม่ใช่จาก vascular cambium</div>
    </div>

    <!-- 5. Leaf + SVG -->
    <div class="content-section">
      <h3>🍃 ใบ (Leaf)</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Cross-section ของใบ</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Upper cuticle -->
            <rect x="40" y="55" width="440" height="6" fill="#FBBF24"/>
            <text x="490" y="60" font-size="9" fill="#92400E">Cuticle</text>

            <!-- Upper epidermis -->
            <rect x="40" y="61" width="440" height="20" fill="#FEF3C7" stroke="#92400E"/>
            <text x="490" y="73" font-size="9" fill="#92400E">Upper epidermis</text>

            <!-- Palisade mesophyll -->
            <g fill="#10B981" stroke="#065F46" stroke-width="0.8">
              <rect x="50" y="85" width="14" height="40" rx="2"/>
              <rect x="68" y="85" width="14" height="40" rx="2"/>
              <rect x="86" y="85" width="14" height="40" rx="2"/>
              <rect x="104" y="85" width="14" height="40" rx="2"/>
              <rect x="122" y="85" width="14" height="40" rx="2"/>
              <rect x="140" y="85" width="14" height="40" rx="2"/>
              <rect x="158" y="85" width="14" height="40" rx="2"/>
              <rect x="176" y="85" width="14" height="40" rx="2"/>
              <rect x="194" y="85" width="14" height="40" rx="2"/>
              <rect x="212" y="85" width="14" height="40" rx="2"/>
            </g>
            <text x="490" y="105" font-size="9" fill="#065F46">Palisade mesophyll</text>
            <text x="490" y="118" font-size="8" fill="#065F46">(สังเคราะห์แสงหลัก)</text>

            <!-- Spongy mesophyll -->
            <g fill="#10B981" stroke="#065F46" stroke-width="0.8" opacity="0.7">
              <circle cx="60" cy="140" r="6"/>
              <circle cx="85" cy="145" r="7"/>
              <circle cx="105" cy="138" r="5"/>
              <circle cx="125" cy="148" r="6"/>
              <circle cx="145" cy="140" r="7"/>
              <circle cx="170" cy="145" r="5"/>
              <circle cx="190" cy="138" r="6"/>
              <circle cx="210" cy="148" r="7"/>
              <!-- vascular bundle -->
              <ellipse cx="270" cy="140" rx="18" ry="14" fill="#DBEAFE" stroke="#1E40AF" stroke-width="1.5"/>
              <text x="270" y="144" text-anchor="middle" font-size="8" font-weight="700" fill="#1E40AF">Xylem/Phloem</text>
              <circle cx="330" cy="142" r="6"/>
              <circle cx="355" cy="148" r="7"/>
              <circle cx="380" cy="138" r="5"/>
              <circle cx="400" cy="148" r="6"/>
              <circle cx="420" cy="140" r="7"/>
            </g>
            <text x="490" y="155" font-size="9" fill="#065F46">Spongy mesophyll</text>
            <text x="490" y="168" font-size="8" fill="#065F46">(แลกเปลี่ยนแก๊ส)</text>

            <!-- Lower epidermis -->
            <rect x="40" y="165" width="440" height="20" fill="#FEF3C7" stroke="#92400E"/>
            <!-- Stomata -->
            <g fill="white" stroke="#10B981" stroke-width="1.5">
              <ellipse cx="120" cy="175" rx="8" ry="4"/>
              <ellipse cx="220" cy="175" rx="8" ry="4"/>
              <ellipse cx="320" cy="175" rx="8" ry="4"/>
              <ellipse cx="420" cy="175" rx="8" ry="4"/>
            </g>
            <text x="120" y="200" text-anchor="middle" font-size="9" font-weight="700" fill="#10B981">Stomata + Guard cells</text>

            <!-- Lower cuticle -->
            <rect x="40" y="185" width="440" height="4" fill="#FBBF24"/>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 4: Cross-section ของใบ — Cuticle, Epidermis, Palisade + Spongy mesophyll, Vascular bundle, Stomata</div>
      </div>

      <h4>โครงสร้างจากบน → ล่าง</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li><strong>Upper cuticle:</strong> ขี้ผึ้งกันสูญน้ำ</li>
        <li><strong>Upper epidermis:</strong> ผิวด้านบน โปร่งใสให้แสงผ่าน</li>
        <li><strong>Palisade mesophyll:</strong> เซลล์แท่งยาว มีคลอโรพลาสต์มาก — สังเคราะห์แสงหลัก</li>
        <li><strong>Spongy mesophyll:</strong> เซลล์กลม มีช่องว่างให้แก๊สแลกเปลี่ยน</li>
        <li><strong>Vascular bundle:</strong> Xylem (บน) + Phloem (ล่าง) — เป็นเส้นใบ</li>
        <li><strong>Lower epidermis:</strong> ผิวด้านล่าง — <strong>Stomata</strong> ส่วนใหญ่อยู่ที่นี่</li>
      </ol>
      <h4>Stomata และ Guard Cells</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>Guard cells โป่งเมื่อรับน้ำ → ปากใบเปิด → CO₂ เข้า + O₂ + H₂O ออก</li>
        <li><span class="li-dot sc-dot"></span>Guard cells แฟบเมื่อสูญน้ำ → ปากใบปิด → ลดการสูญน้ำ</li>
        <li><span class="li-dot sc-dot"></span>ควบคุมโดย K⁺ pump, light, CO₂, ABA hormone</li>
      </ul>
      <div class="tip-box">💡 พืชเขตแล้ง (xerophytes) มีปากใบใต้ใบ + cuticle หนา + ขนใบ — ลดการสูญน้ำ พืชใบบัวมีปากใบที่ผิวบน (เพราะใบลอย)</div>
    </div>

    <!-- 6. Flower, Fruit, Seed -->
    <div class="content-section">
      <h3>🌸 ดอก ผล เมล็ด</h3>
      <h4>โครงสร้างดอก (Flower)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Sepal (กลีบเลี้ยง):</strong> ปกป้องดอกตอนตูม</li>
        <li><span class="li-dot sc-dot"></span><strong>Petal (กลีบดอก):</strong> ดึงดูดผู้ผสมเกสร</li>
        <li><span class="li-dot sc-dot"></span><strong>Stamen (เกสรเพศผู้):</strong> Anther (สร้างละออง) + Filament (ก้าน)</li>
        <li><span class="li-dot sc-dot"></span><strong>Pistil/Carpel (เกสรเพศเมีย):</strong> Stigma + Style + Ovary</li>
      </ul>
      <h4>การปฏิสนธิคู่ (Double Fertilization) — เฉพาะพืชดอก</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>ละอองเรณู (pollen) ตกที่ stigma → งอก pollen tube ลงไปยัง ovule</li>
        <li><span class="li-dot sc-dot"></span>มี sperm cell 2 ตัว:</li>
        <li><span class="li-dot sc-dot"></span style="margin-left:18px;">- ตัวที่ 1 + egg (n) → zygote (2n) → embryo</li>
        <li><span class="li-dot sc-dot"></span style="margin-left:18px;">- ตัวที่ 2 + polar nuclei (2n) → <strong>endosperm (3n)</strong> — อาหารเลี้ยงเอ็มบริโอ</li>
        <li><span class="li-dot sc-dot"></span>Ovule → seed, Ovary → fruit</li>
      </ul>
      <h4>โครงสร้างเมล็ด</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Seed coat:</strong> เปลือกป้องกัน</li>
        <li><span class="li-dot sc-dot"></span><strong>Endosperm:</strong> เก็บอาหาร (ในข้าว ข้าวสาลี ข้าวโพด)</li>
        <li><span class="li-dot sc-dot"></span><strong>Cotyledons (ใบเลี้ยง):</strong> 1 ใบ (monocot) หรือ 2 ใบ (dicot) — ในถั่ว cotyledons เก็บอาหารแทน endosperm</li>
        <li><span class="li-dot sc-dot"></span><strong>Embryo:</strong> ต้นอ่อน — มี radicle (รากอ่อน), hypocotyl, epicotyl</li>
      </ul>
      <div class="formula-box">
        <div class="formula-label">ประเภทของผล</div>
        <strong>Simple fruit:</strong> จาก 1 ovary 1 ดอก — มะม่วง องุ่น<br>
        <strong>Aggregate fruit:</strong> จากหลาย ovaries ใน 1 ดอก — สตรอเบอร์รี น้อยหน่า<br>
        <strong>Multiple fruit:</strong> จากหลายดอกรวมกัน — สับปะรด ขนุน
      </div>
    </div>

    <!-- 7. Secondary Growth + SVG -->
    <div class="content-section">
      <h3>📈 การเจริญทุติยภูมิ (Secondary Growth)</h3>
      <p>เกิดในพืช dicot ที่ยืนต้น (woody plants) — ทำให้ลำต้นและรากใหญ่ขึ้น <strong>ในแนวรัศมี</strong></p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">วงปี (Annual Rings) ของต้นไม้</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Tree rings -->
            <circle cx="200" cy="120" r="85" fill="#FBBF24" stroke="#92400E" stroke-width="3"/>
            <circle cx="200" cy="120" r="80" fill="#FEF3C7" stroke="#92400E" stroke-width="1"/>
            <circle cx="200" cy="120" r="70" fill="#FBBF24" stroke="#92400E" stroke-width="1"/>
            <circle cx="200" cy="120" r="65" fill="#FEF3C7" stroke="#92400E" stroke-width="1"/>
            <circle cx="200" cy="120" r="55" fill="#FBBF24" stroke="#92400E" stroke-width="1"/>
            <circle cx="200" cy="120" r="50" fill="#FEF3C7" stroke="#92400E" stroke-width="1"/>
            <circle cx="200" cy="120" r="40" fill="#FBBF24" stroke="#92400E" stroke-width="1"/>
            <circle cx="200" cy="120" r="35" fill="#FEF3C7" stroke="#92400E" stroke-width="1"/>
            <circle cx="200" cy="120" r="25" fill="#FBBF24" stroke="#92400E" stroke-width="1"/>
            <circle cx="200" cy="120" r="20" fill="#FEF3C7" stroke="#92400E" stroke-width="1"/>
            <circle cx="200" cy="120" r="10" fill="#92400E"/>
            <text x="200" y="124" text-anchor="middle" font-size="8" fill="white" font-weight="700">Pith</text>

            <!-- Labels -->
            <text x="310" y="60" font-weight="700" fill="#92400E">Bark</text>
            <line x1="290" y1="65" x2="285" y2="50" stroke="#92400E"/>
            <text x="310" y="80" font-size="9" fill="#92400E">(periderm)</text>

            <text x="310" y="105" font-weight="700" fill="#10B981">Phloem</text>
            <line x1="290" y1="108" x2="280" y2="58" stroke="#10B981"/>
            <text x="310" y="120" font-size="9" fill="#065F46">(secondary)</text>

            <text x="310" y="145" font-weight="700" fill="#3B82F6">Vascular Cambium</text>
            <line x1="290" y1="142" x2="275" y2="80" stroke="#3B82F6"/>

            <text x="310" y="180" font-weight="700" fill="#9F1239">Xylem (wood)</text>
            <line x1="290" y1="175" x2="265" y2="120" stroke="#9F1239"/>
            <text x="310" y="195" font-size="9" fill="#9F1239">- Heartwood (กลาง)</text>
            <text x="310" y="208" font-size="9" fill="#9F1239">- Sapwood (นอก)</text>

            <!-- Age -->
            <text x="60" y="60" font-size="9" fill="#92400E">วงปี 5 วง</text>
            <text x="60" y="75" font-size="9" fill="#92400E">= ต้นไม้อายุ 5 ปี</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 5: วงปี (annual rings) — แต่ละวงเกิดในฤดูเจริญ → ใช้นับอายุต้นไม้ได้</div>
      </div>

      <h4>Vascular Cambium</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>เป็น lateral meristem ที่อยู่ระหว่าง xylem และ phloem</li>
        <li><span class="li-dot sc-dot"></span>แบ่งเซลล์ออก 2 ทาง:</li>
        <li><span class="li-dot sc-dot"></span style="margin-left:18px;">- ด้าน <strong>ใน</strong> → secondary xylem (wood)</li>
        <li><span class="li-dot sc-dot"></span style="margin-left:18px;">- ด้าน <strong>นอก</strong> → secondary phloem</li>
        <li><span class="li-dot sc-dot"></span>ในเขตอบอุ่น xylem ที่สร้างฤดูใบไม้ผลิ (เซลล์ใหญ่ ใส) ต่างจากฤดูร้อน-ใบไม้ร่วง (เซลล์เล็ก เข้ม) → เกิด <strong>วงปี</strong></li>
      </ul>
      <h4>ส่วนของไม้</h4>
      <table class="content-table">
        <tr><th>ส่วน</th><th>ลักษณะ</th></tr>
        <tr><td>Heartwood</td><td>กลางลำต้น xylem เก่า ไม่ลำเลียงแล้ว สีเข้ม</td></tr>
        <tr><td>Sapwood</td><td>รอบนอก xylem ใหม่ ยังลำเลียงน้ำ สีจาง</td></tr>
        <tr><td>Bark</td><td>ทั้งหมดที่อยู่นอก cambium = secondary phloem + periderm</td></tr>
        <tr><td>Cork (จากต้น cork oak)</td><td>เป็น secondary phloem ส่วนที่ตายแล้ว — ใช้ทำจุกขวดไวน์</td></tr>
      </table>
      <div class="tip-box">💡 ในเขตร้อน (ไทย) วงปีไม่ชัดเจน เพราะอากาศไม่เปลี่ยนตามฤดู — แต่ใช้ <strong>"growth ring"</strong> ตามฤดูฝน-แล้งได้</div>
    </div>

    <!-- 8. Applications -->
    <div class="content-section">
      <h3>🌿 การประยุกต์ในเกษตรกรรม</h3>
      <table class="content-table">
        <tr><th>การประยุกต์</th><th>หลักการ</th></tr>
        <tr><td>การตอนกิ่ง (Air layering)</td><td>เปลื้อง bark → ตัด phloem → ราก secondary งอกจาก parenchyma → ตัดและปลูก</td></tr>
        <tr><td>การเสียบยอด (Grafting)</td><td>เชื่อม vascular cambium ของ 2 ต้น → กลายเป็นต้นเดียว</td></tr>
        <tr><td>การปักชำ (Cutting)</td><td>ตัดกิ่ง → ผลิต root จากเซลล์ที่แบ่งได้</td></tr>
        <tr><td>การควั่นกิ่ง</td><td>ตัด phloem รอบกิ่ง → น้ำตาลสะสมเหนือจุดควั่น → ออกดอก/ผล</td></tr>
        <tr><td>การใส่ปุ๋ย</td><td>ให้ N (ใบเขียว), P (ราก ดอก), K (ผล/ปากใบ)</td></tr>
        <tr><td>การใช้ฮอร์โมน auxin</td><td>เร่งการเกิดราก ใช้ปลูกกิ่งชำ</td></tr>
      </table>
    </div>

    <!-- ============ 32 PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — ส่วนของพืชและเนื้อเยื่อ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — 3 เนื้อเยื่อ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุ 3 ระบบเนื้อเยื่อของพืชและหน้าที่</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(1) <strong>Dermal:</strong> ผิวนอก (epidermis, periderm) — ป้องกัน<br>(2) <strong>Vascular:</strong> xylem + phloem — ลำเลียง<br>(3) <strong>Ground:</strong> ที่เหลือ (parenchyma, collenchyma, sclerenchyma) — สังเคราะห์แสง เก็บอาหาร ค้ำจุน<br>💡 ทั้ง 3 ระบบทำงานร่วมกัน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — Xylem vs Phloem</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Xylem และ Phloem ต่างกันอย่างไรในเรื่องเซลล์และทิศทางการลำเลียง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Xylem:</strong> เซลล์ <strong>ตาย</strong> (tracheids, vessel elements) มีผนัง lignin · ลำเลียงน้ำ + แร่ธาตุจากราก<strong>ขึ้น</strong>ใบเท่านั้น<br><strong>Phloem:</strong> เซลล์ <strong>มีชีวิต</strong> (sieve tubes + companion cells) · ลำเลียงน้ำตาลจาก source → sink <strong>2 ทิศทาง</strong> ขึ้นและลง<br>💡 จึงเมื่อ <strong>ควั่นกิ่ง</strong> (ตัด phloem) น้ำตาลสะสมเหนือจุด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — Sclerenchyma</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เปลือกมะพร้าวแข็งเพราะมีเซลล์ประเภทใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Sclerenchyma</strong> (sclereids) — เซลล์ผนังหนา มี lignin แข็ง<br>มี 2 ชนิด: sclereids (รูปสั้น) ในเปลือกมะพร้าว เปลือกถั่ว และ fibers (รูปยาว) ในเส้นใยป่าน ฝ้าย<br>💡 เซลล์เหล่านี้ <strong>ตายตอนโต</strong> เหลือเฉพาะผนัง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: Meristem</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม Apical meristem และ Lateral meristem (cambium) ทำหน้าที่ต่างกัน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Apical meristem:</strong> อยู่ที่ <strong>ปลาย</strong> ราก/ลำต้น → primary growth (ทำให้ยาว/สูง)<br><strong>Lateral meristem (Vascular cambium):</strong> อยู่เป็นวงในลำต้น → secondary growth (ทำให้ <strong>อ้วน</strong>)<br>ผลรวม: พืชสูงและขยายขนาด<br>💡 monocot ไม่มี vascular cambium → จึงไม่อ้วน (ยกเว้น diffuse growth)</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — ราก</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — Taproot vs Fibrous</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Taproot และ Fibrous root ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Taproot (รากแก้ว):</strong> มีรากหลัก 1 ตัวใหญ่ ดิ่งลึก — Dicot (มะม่วง ทุเรียน แครอท หัวไชเท้า)<br><strong>Fibrous (รากฝอย):</strong> รากเล็ก ๆ หลายตัว แผ่กว้าง — Monocot (ข้าว ข้าวโพด ปาล์ม)<br>💡 Taproot ต้านลม-แล้งได้ดี · Fibrous ป้องกันการสึกกร่อนของดิน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — Root hairs</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Root hairs สำคัญอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพิ่ม <strong>ผิวการดูดน้ำและแร่ธาตุ</strong> ของรากมหาศาล — เป็นยื่นของ epidermal cells<br>1 ต้นข้าวสาลีอาจมี root hairs รวมยาว <strong>10,000 km</strong>!<br>ขนรากมีอายุสั้น (~2 สัปดาห์) ต้องสร้างใหม่ตลอด<br>💡 ใช้ <strong>active transport</strong> ดูดแร่ธาตุที่เข้มข้นในรากสูงกว่าดิน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — Casparian strip</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Casparian strip ทำหน้าที่อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เป็นแถบ <strong>suberin (waterproof)</strong> ที่ผนัง endodermis cells — บังคับให้น้ำและไอออนต้องผ่าน <strong>plasma membrane</strong> ของ endodermis (เลือกได้)<br>ป้องกันสารที่ไม่ต้องการเข้าทาง <strong>apoplast</strong> สู่ xylem<br>💡 จึงเป็น "จุดตรวจ" ของพืช</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: Root pressure</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Guttation (น้ำหยดที่ปลายใบในตอนเช้า) เกิดจากอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Root pressure</strong> — รากดูดน้ำเข้ามาก ผลักดันน้ำขึ้นไปบนใบ → ดันออกที่ hydathodes (รูพิเศษที่ขอบใบ)<br>เกิดในตอนกลางคืน/เช้าที่ปากใบปิด → ไม่มี transpiration pull → root pressure ทำงาน<br>💡 ต่างจากน้ำค้างที่เกิดจากความชื้นในอากาศ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — ลำต้น</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — Pith vs Cortex</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Pith และ Cortex ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Cortex:</strong> ground tissue <strong>นอก</strong> vascular bundles — มีในรากและลำต้น<br><strong>Pith:</strong> ground tissue <strong>ตรงกลาง</strong> ของลำต้น dicot — เป็น parenchyma เก็บอาหาร<br>Monocot ส่วนใหญ่ไม่มี pith ชัดเจน เพราะ vascular bundles กระจาย<br>💡 ทั้งคู่ทำจาก parenchyma cells</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — Node และ Internode</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Node และ Internode ของลำต้นคืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Node (ข้อ):</strong> จุดที่ใบ/กิ่งติดกับลำต้น<br><strong>Internode (ปล้อง):</strong> ส่วนระหว่าง 2 nodes<br>การยืดของพืชเกิดที่ internode เป็นหลัก<br>💡 ในไผ่ปล้องชัดเจน เพราะมี node แข็งและ internode กลวง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — Bud</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Apical bud และ Lateral bud คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Apical bud (ตายอด):</strong> ตาที่ปลายลำต้น/กิ่ง — ทำให้ยืดสูง<br><strong>Lateral bud (ตาข้าง):</strong> ตาที่ axil (มุมใบกับลำต้น) — สร้างกิ่งใหม่<br>Apical bud หลั่ง <strong>auxin</strong> ยับยั้ง lateral buds → "Apical dominance"<br>เมื่อตัดยอด → lateral buds งอก → พืชแตกกิ่ง<br>💡 ใช้หลักการนี้ในการตัดแต่งบอนไซ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: Specialized stems</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ลำต้นพืชที่ดัดแปลงเป็นพิเศษมีอะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>- <strong>Rhizome (เหง้า):</strong> ลำต้นใต้ดินแนวนอน — ขิง ขมิ้น<br>- <strong>Stolon (ไหล):</strong> ลำต้นเหนือดินยาว — สตรอเบอร์รี ผักบุ้ง<br>- <strong>Tuber (หัว):</strong> ปลายเหง้าที่บวม เก็บอาหาร — มันฝรั่ง<br>- <strong>Bulb (หัว):</strong> ใบที่หนา เก็บอาหารรอบลำต้นสั้น — หอม กระเทียม<br>- <strong>Corm:</strong> ลำต้นใต้ดินสั้น พอง — แห้ว เผือก<br>💡 มีหน้าที่หลักคือ <strong>เก็บอาหาร</strong> หรือ <strong>ขยายพันธุ์แบบไม่อาศัยเพศ</strong></div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — ใบ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — Palisade vs Spongy</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Palisade และ Spongy mesophyll ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Palisade:</strong> เซลล์รูปแท่งยาวเรียงชิด อยู่ใกล้ผิวบน — มี <strong>chloroplasts มาก</strong> → ที่หลักของ photosynthesis<br><strong>Spongy:</strong> เซลล์กลม จัดเป็นซี่ มี <strong>ช่องว่างมาก</strong> → ที่หลักของ <strong>การแลกเปลี่ยนแก๊ส</strong> (CO₂, O₂)<br>💡 ใบหันด้านบนเข้าหาแสงเสมอ — palisade รับแสงตรง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — Stomata location</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม stomata ส่วนใหญ่อยู่ที่ <strong>ใต้</strong> ใบ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพื่อ <strong>ลดการสูญน้ำ (transpiration)</strong> — ผิวบนถูกแดดและลมแรง<br>ใต้ใบเย็นกว่าและชื้นกว่า → สูญน้ำช้ากว่า<br>ข้อยกเว้น: ใบบัวมี stomata ที่ผิว <strong>บน</strong> เพราะใบลอยน้ำ ใต้ใบเป็นน้ำ<br>💡 พืชเขตแล้งมี stomata แอบในร่อง + ขนปกคลุม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — Guard cells mechanism</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Guard cells เปิดและปิดปากใบอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>เปิด:</strong> K⁺ pump ปั๊ม K⁺ เข้า guard cells → น้ำตามเข้า (osmosis) → guard cells โป่งและโค้ง → เกิดช่อง<br><strong>ปิด:</strong> K⁺ ออก → น้ำออก → guard cells แฟบ → ช่องปิด<br>ปัจจัยควบคุม:<br>- แสง (blue light) กระตุ้นเปิด<br>- CO₂ ในใบสูง → ปิด<br>- ABA hormone ตอนแล้ง → ปิด<br>💡 ปกติเปิดกลางวัน ปิดกลางคืน (ยกเว้น CAM plants)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: Leaf adaptations</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ใบกระบองเพชรเปลี่ยนเป็นหนามเพราะอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพื่อ <strong>ลดการสูญน้ำ</strong> ในทะเลทราย:<br>(1) พื้นที่ผิวเล็ก → transpiration ต่ำ<br>(2) หนามป้องกันสัตว์<br>(3) ใบจริงเปลี่ยนเป็นหนาม → ลำต้นเขียวสีรับหน้าที่ photosynthesis แทน<br>กระบองเพชรยังเป็น <strong>CAM plant</strong> → เปิดปากใบกลางคืน ลดการสูญน้ำ<br>💡 ตัวอย่างใบอื่น ๆ ที่ดัดแปลง:<br>- ใบหม้อข้าวหม้อแกง = หม้อดักแมลง<br>- ใบบัวลอย = ลอยน้ำ<br>- ใบหอม = เก็บอาหาร</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — ดอก ผล เมล็ด</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — 4 ส่วนของดอก</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> 4 ส่วนหลักของดอกครบส่วน (complete flower) คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(1) <strong>Sepal (กลีบเลี้ยง):</strong> ปกป้องดอกตูม สีเขียวปกติ<br>(2) <strong>Petal (กลีบดอก):</strong> ดึงดูดผู้ผสมเกสร สีสด<br>(3) <strong>Stamen (เกสรเพศผู้):</strong> Anther (สร้าง pollen) + Filament<br>(4) <strong>Pistil/Carpel (เกสรเพศเมีย):</strong> Stigma + Style + Ovary<br>💡 ครบ 4 ส่วน = complete · ขาดอย่างใดอย่างหนึ่ง = incomplete</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — Double fertilization</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ปฏิสนธิคู่ในพืชดอกเกิดอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>เฉพาะพืชดอก!</strong> Pollen tube ส่ง sperm 2 ตัวเข้า ovule:<br>(1) Sperm ตัวที่ 1 + egg (n) → <strong>zygote (2n)</strong> → embryo<br>(2) Sperm ตัวที่ 2 + 2 polar nuclei → <strong>endosperm (3n)</strong> — อาหารเลี้ยงเอ็มบริโอ<br>💡 ลักษณะเฉพาะของ angiosperms ที่ไม่พบใน gymnosperms</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — Pollination</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> วิธีการ pollination มีอะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>โดยลม (Anemophily):</strong> ดอกเล็ก ไม่มีน้ำหวาน เรณูเบาเยอะ — ข้าว หญ้า ข้าวโพด<br><strong>โดยแมลง (Entomophily):</strong> ดอกสีสด มีน้ำหวาน กลิ่นหอม — กล้วยไม้ ดอกชบา<br><strong>โดยนก (Ornithophily):</strong> สีแดง น้ำหวานมาก — ชงโค<br>โดยค้างคาว — ดอกใหญ่ ออกกลางคืน<br>โดยน้ำ (Hydrophily) — สาหร่ายหางกระรอก<br>💡 90% ของพืชดอกใช้สัตว์ช่วยผสม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: Seed dispersal</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เมล็ดมีวิธีการกระจายอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>- <strong>ลม:</strong> เมล็ดเบา/มีปีก — เมเปิล ดอกหญ้า dandelion<br>- <strong>น้ำ:</strong> เมล็ดลอยน้ำ — มะพร้าว<br>- <strong>สัตว์:</strong> ผลที่กิน — ผ่านระบบย่อยและขับเมล็ดออก; เกาะติดขน — ตาผีบ้า<br>- <strong>กลไกของพืช:</strong> เมล็ดยิงออก — ถั่ว ledebouriella, สัง<br>💡 การกระจายช่วยลดการแข่งขันกับต้นแม่ + ขยายพันธุ์</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — Secondary Growth</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — Vascular cambium</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Vascular cambium สร้างอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Cambium อยู่ระหว่าง xylem-phloem แบ่ง 2 ทาง:<br>- ด้าน <strong>ใน</strong> → secondary xylem (= wood)<br>- ด้าน <strong>นอก</strong> → secondary phloem<br>ทำให้ลำต้นและรากอ้วนขึ้น<br>💡 มีในพืช woody dicots (ต้นไม้ใหญ่) ไม่มีในพืชหญ้าหรือ monocots</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — วงปี</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมต้นไม้ในเขตอบอุ่นมีวงปีชัด แต่ในเขตร้อนไม่ชัด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> วงปีเกิดจากความต่างของ xylem ในฤดูใบไม้ผลิ (เซลล์ใหญ่ ใส) vs ฤดูร้อน/ใบไม้ร่วง (เซลล์เล็ก เข้ม)<br>ใน <strong>เขตอบอุ่น</strong> ความต่างฤดูชัด → วงปีชัด<br>ใน <strong>เขตร้อน</strong> อากาศคงที่ → cambium ทำงานสม่ำเสมอ → วงปีไม่ชัด<br>แต่ในไทย พบ "growth ring" ตาม <strong>ฤดูฝน-แล้ง</strong> แทน<br>💡 ใช้นับอายุต้นไม้ได้ตามจำนวนวง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — Heartwood vs Sapwood</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Heartwood และ Sapwood ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Heartwood:</strong> xylem เก่าตรงกลาง — เซลล์ตาย <strong>ไม่ลำเลียงน้ำแล้ว</strong> · สะสมสาร (tannin) → สีเข้ม แข็ง ทน<br><strong>Sapwood:</strong> xylem ใหม่รอบนอก — <strong>ยังลำเลียงน้ำ</strong> · สีจางกว่า<br>💡 ไม้สักที่มีหัวใจสีดำ = heartwood ดี → ราคาสูง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: Bark</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> "เปลือกไม้ (Bark)" ทำจากเนื้อเยื่ออะไร และทำไมเก่าไป?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Bark = ทุกอย่างนอก vascular cambium → ประกอบด้วย:<br>(1) <strong>Secondary phloem</strong> (ใหม่ ใช้งานได้)<br>(2) <strong>Periderm</strong> = cork cambium + cork + phelloderm → กันน้ำและแบคทีเรีย<br>เปลือกแตกเพราะลำต้นโตขึ้น แต่ผิวนอกไม่ยืด<br>💡 จุก cork เก่าหลุดออก เพราะเซลล์ใหม่จาก cork cambium สร้างขึ้นแทน</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — Monocot vs Dicot</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — เปรียบเทียบ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เปรียบเทียบ Monocot vs Dicot ใน 5 ลักษณะ</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>1. ใบเลี้ยง: 1 ใบ vs 2 ใบ<br>2. เส้นใบ: ขนาน vs ร่างแห<br>3. กลีบดอก: 3 (หรือทวีคูณ) vs 4-5<br>4. ราก: รากฝอย vs รากแก้ว<br>5. Vascular bundle ในลำต้น: กระจาย vs เป็นวง<br>💡 จำง่าย: <strong>"3 vs 4-5"</strong> สำหรับกลีบดอก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — Monocot ที่ดูเหมือนต้นไม้</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมต้นมะพร้าวและปาล์มยืนสูงได้ ทั้งที่เป็น monocot และไม่มี cambium?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้ <strong>"diffuse secondary growth"</strong> — เพิ่มขนาดของ primary tissues แทน secondary growth ปกติ<br>vascular bundles ที่กระจัดกระจายในลำต้นรับน้ำหนัก<br>มี <strong>fibers จาก sclerenchyma</strong> ค้ำจุนแทน wood<br>💡 จึงลำต้นค่อนข้างคงขนาด ไม่อ้วนขึ้นเรื่อย ๆ ตามอายุเหมือนต้นไม้ dicot</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — แยกประเภท</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุประเภท: ข้าว · มะม่วง · หญ้า · ทุเรียน · กล้วยไม้ · กุหลาบ</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Monocot:</strong> ข้าว · หญ้า · กล้วยไม้<br><strong>Dicot:</strong> มะม่วง · ทุเรียน · กุหลาบ<br>💡 ในธรรมชาติ dicots เยอะกว่ามาก (~75%)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: Eudicots</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ปัจจุบันนักพฤกษศาสตร์แบ่งพืชดอกเป็นกลุ่มไหนบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ตามระบบ APG IV (2016):<br>(1) <strong>Monocots:</strong> ข้าว ปาล์ม กล้วยไม้<br>(2) <strong>Eudicots:</strong> "True dicots" — กุหลาบ มะม่วง<br>(3) <strong>Magnoliids:</strong> Magnolia พริกไทย<br>(4) <strong>Basal angiosperms:</strong> Amborella บัวสาย<br>กลุ่ม "dicot" เดิมถูกแยกเป็นหลายกลุ่ม — eudicots เป็นส่วนใหญ่ (~75% ของ angiosperms)<br>💡 ใช้ DNA จัดประเภทใหม่</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — การประยุกต์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — Grafting</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Grafting (การเสียบยอด) ทำได้เพราะอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพราะ <strong>vascular cambium ของ 2 ต้น</strong> สามารถเชื่อมกันได้ → ระบบ vascular ต่อกัน → กลายเป็นต้นเดียวกัน<br>ใช้ rootstock (ราก) ที่แข็งแรง + scion (ยอด) ที่ผลดี → ได้ผลที่ดีและทนทาน<br>💡 ใช้ใน: ส้ม ทุเรียน องุ่น มะม่วง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — Air layering</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> การตอนกิ่งทำอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ขั้นตอน:<br>(1) ลอกเปลือก (bark + phloem) รอบกิ่ง<br>(2) ใส่ดินชื้นห่อหุ้ม + พลาสติก<br>(3) <strong>น้ำตาลสะสม</strong> เหนือจุดที่ตัด → กระตุ้น parenchyma → สร้างราก<br>(4) เมื่อรากงอกแล้ว ตัดและปลูก<br>💡 ใช้กับมะม่วง ขนุน ผลไม้ที่ <strong>ปักชำยาก</strong></div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — Tissue culture</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> การเพาะเลี้ยงเนื้อเยื่อพืชใช้หลักการอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้คุณสมบัติ <strong>totipotency</strong> ของเซลล์พืช — เซลล์ใด ๆ สามารถพัฒนาเป็นต้นใหม่เต็มต้นได้<br>ขั้นตอน:<br>(1) ตัดเนื้อเยื่อ (explant)<br>(2) เลี้ยงในอาหารวุ้น + ฮอร์โมน (auxin + cytokinin)<br>(3) เกิด callus → สร้าง shoot และ root<br>(4) ย้ายลงดิน<br>ใช้ผลิตกล้วยไม้ ปาล์มน้ำมัน · ปลอดโรค · ขยายเร็ว<br>💡 ในไทยใช้มากในกล้วยไม้ → ส่งออกอันดับโลก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: Bonsai</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการตัดยอดต้นบอนไซทำให้กิ่งแตกเยอะ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Apical bud ตามปกติหลั่ง <strong>auxin</strong> ที่ <strong>ยับยั้ง lateral buds</strong> (apical dominance)<br>เมื่อตัดยอด → ไม่มี auxin → lateral buds งอกออกเป็นกิ่งใหม่หลายอัน<br>นอกจากบอนไซ ใช้ใน:<br>- การตัดแต่งสวน ทำพุ่ม<br>- การเก็บใบชา (เก็บยอดบ่อย ๆ → ใบใหม่หลายกิ่ง)<br>💡 การพรวนดินรอบโคนก็เหมือนกับ "ตัด apical dominance" ของรากให้แตกแขนงเพิ่ม</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>ส่วนของพืช:</strong> ราก · ลำต้น · ใบ · ดอก · ผล · เมล็ด<br>
        <strong>3 เนื้อเยื่อ:</strong> Dermal · Vascular (Xylem/Phloem) · Ground (Parenchyma/Collenchyma/Sclerenchyma)<br>
        <strong>Monocot:</strong> 1 ใบเลี้ยง · เส้นใบขนาน · vascular กระจาย · กลีบ 3 · รากฝอย<br>
        <strong>Dicot:</strong> 2 ใบเลี้ยง · เส้นใบร่างแห · vascular เป็นวง · กลีบ 4-5 · รากแก้ว · มี cambium<br>
        <strong>Secondary growth:</strong> Vascular cambium → secondary xylem (wood) + secondary phloem<br>
        <strong>Double fertilization:</strong> sperm 1 + egg = embryo · sperm 2 + polar nuclei = endosperm
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>Xylem เป็นเซลล์มีชีวิต</td><td>Xylem เซลล์ <strong>ตาย</strong> · Phloem เซลล์มีชีวิต</td></tr>
        <tr><td>Stomata เปิด-ปิดเองโดยอัตโนมัติ</td><td>ควบคุมโดย <strong>guard cells</strong> ที่ตอบสนองต่อ K+ และฮอร์โมน</td></tr>
        <tr><td>Endosperm 2n</td><td>Endosperm <strong>3n</strong> (จาก sperm + 2 polar nuclei)</td></tr>
        <tr><td>Monocot ไม่มีต้นไม้สูง</td><td>มะพร้าว ปาล์ม สูงได้จาก diffuse growth</td></tr>
        <tr><td>วงปี = อายุต้นไม้เสมอ</td><td>ในเขตร้อนอาจไม่ชัด/มี 2 วงต่อปี</td></tr>
        <tr><td>Bark = ไม้</td><td>Bark = <strong>นอก cambium</strong> ไม่ใช่ wood (wood = xylem)</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> Monocot vs Dicot ดู 5 ลักษณะ "1-3-1-ขนาน-กระจาย" vs "2-4/5-2-ร่างแห-วง"</div>
    </div>
  `,
  b4c14: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> ภาพรวมการลำเลียงในพืช: น้ำ · น้ำตาล · ธาตุอาหาร<br>
        <strong>02</strong> Water Potential (Ψ) — แรงดันน้ำในระบบ<br>
        <strong>03</strong> การลำเลียงน้ำใน Xylem (Cohesion-Tension Theory)<br>
        <strong>04</strong> Pressure Flow ใน Phloem (Source &rarr; Sink)<br>
        <strong>05</strong> Transpiration และปัจจัยที่มีผล<br>
        <strong>06</strong> ธาตุอาหารพืช (Macro &amp; Micronutrients)<br>
        <strong>07</strong> ความสัมพันธ์พืช-จุลินทรีย์ (Mycorrhizae, Rhizobium)<br>
        <strong>08</strong> การประยุกต์: ปุ๋ย NPK · Hydroponics
      </div>
      <div class="tip-box">💡 พืชสูง 100 เมตรยังลำเลียงน้ำขึ้นยอดได้ — โดยไม่มีปั๊ม! ใช้เพียง <strong>การคายน้ำ + แรงตึงผิวของน้ำ</strong> เป็นแรงขับเคลื่อน</div>
    </div>

    <!-- 1. Overview -->
    <div class="content-section">
      <h3>💧 ภาพรวมการลำเลียงในพืช</h3>
      <p>พืชต้องลำเลียงสาร 3 ชนิดในระยะทางไกล:</p>
      <table class="content-table">
        <tr><th>สาร</th><th>เส้นทาง</th><th>ทิศทาง</th><th>กลไก</th></tr>
        <tr><td>น้ำ + แร่ธาตุ</td><td>Xylem</td><td>ราก &rarr; ใบ (ขึ้น)</td><td>Transpiration pull (passive)</td></tr>
        <tr><td>น้ำตาล (sucrose)</td><td>Phloem</td><td>Source &rarr; Sink (2 ทาง)</td><td>Pressure flow (active)</td></tr>
        <tr><td>O₂, CO₂</td><td>อากาศ ผ่าน stomata</td><td>2 ทาง</td><td>Diffusion</td></tr>
      </table>
      <h4>3 ระดับการลำเลียง</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li><strong>เซลล์เดียว:</strong> Diffusion + Active transport ผ่าน plasma membrane</li>
        <li><strong>ระยะสั้น (เนื้อเยื่อ):</strong> Apoplast (ผนังเซลล์) · Symplast (cytoplasm ผ่าน plasmodesmata) · Transmembrane</li>
        <li><strong>ระยะไกล (ทั้งต้น):</strong> Bulk flow ผ่าน xylem และ phloem</li>
      </ol>
      <div class="note-box">⚠️ <strong>Apoplast vs Symplast:</strong> Apoplast = ผนังเซลล์และช่องว่างนอกเซลล์ (สารผ่านอย่างอิสระ) · Symplast = cytoplasm ที่เชื่อมกันด้วย plasmodesmata</div>
    </div>

    <!-- 2. Water Potential -->
    <div class="content-section">
      <h3>🌊 Water Potential (Ψ)</h3>
      <p><strong>Water potential</strong> = แรงดันที่ทำให้น้ำเคลื่อนที่ — น้ำไหลจาก <strong>Ψ สูง → Ψ ต่ำ</strong> เสมอ</p>
      <div class="formula-box">
        <div class="formula-label">สมการ Water Potential</div>
        <strong>Ψ = Ψ_S + Ψ_P</strong><br>
        Ψ_S = solute potential (มี solute ทำให้ Ψ ลด, มักเป็นลบ)<br>
        Ψ_P = pressure potential (แรงดันบวก = ดัน, ลบ = ดึง)<br>
        <strong>น้ำบริสุทธิ์ Ψ = 0 MPa</strong> (ที่ความดันบรรยากาศ)
      </div>
      <table class="content-table">
        <tr><th>ตำแหน่ง</th><th>Ψ (MPa)</th></tr>
        <tr><td>ดินชื้น</td><td>-0.1 ถึง -0.3</td></tr>
        <tr><td>รากพืช</td><td>-0.3 ถึง -0.5</td></tr>
        <tr><td>ลำต้น xylem</td><td>-0.5 ถึง -1.5</td></tr>
        <tr><td>ใบ</td><td>-1.0 ถึง -2.0</td></tr>
        <tr><td>อากาศ (RH 50%)</td><td>-95 (ติดลบมาก!)</td></tr>
      </table>
      <div class="tip-box">💡 น้ำในระบบไหลตาม "gradient": ดิน (สูง) → ราก → ลำต้น → ใบ → อากาศ (ต่ำมาก) — ทำให้พืชดูดน้ำได้แม้สูง 100 m</div>
    </div>

    <!-- 3. Xylem Transport + SVG -->
    <div class="content-section">
      <h3>⬆️ การลำเลียงน้ำใน Xylem (Cohesion-Tension)</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Cohesion-Tension Theory</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Tree -->
            <line x1="260" y1="240" x2="260" y2="60" stroke="#92400E" stroke-width="6"/>
            <!-- Roots -->
            <g stroke="#92400E" stroke-width="3" fill="none">
              <line x1="260" y1="240" x2="220" y2="265"/>
              <line x1="260" y1="240" x2="300" y2="265"/>
            </g>
            <!-- Leaves -->
            <ellipse cx="240" cy="80" rx="22" ry="14" fill="#10B981" stroke="#065F46"/>
            <ellipse cx="280" cy="60" rx="22" ry="14" fill="#10B981" stroke="#065F46"/>

            <!-- Water column (blue line up) -->
            <line x1="265" y1="240" x2="265" y2="80" stroke="#3B82F6" stroke-width="3"/>

            <!-- Step labels -->
            <text x="40" y="80" font-weight="700" fill="#9F1239">1. Transpiration</text>
            <text x="40" y="95" font-size="9" fill="#9F1239">น้ำระเหยจากใบ</text>
            <text x="40" y="108" font-size="9" fill="#9F1239">→ Ψ ใบลด</text>
            <path d="M 110 90 L 220 75" stroke="#9F1239" stroke-width="2" marker-end="url(#arrW)"/>
            <!-- water vapor -->
            <text x="200" y="40" font-size="14">💨</text>
            <text x="290" y="40" font-size="14">💨</text>

            <text x="40" y="140" font-weight="700" fill="#1E40AF">2. Cohesion</text>
            <text x="40" y="155" font-size="9" fill="#1E40AF">น้ำเกาะกันด้วย H-bond</text>
            <text x="40" y="168" font-size="9" fill="#1E40AF">→ ดึงน้ำขึ้นเป็นสายต่อเนื่อง</text>
            <path d="M 130 150 L 250 150" stroke="#1E40AF" stroke-width="2" marker-end="url(#arrW)"/>

            <text x="40" y="200" font-weight="700" fill="#065F46">3. Adhesion</text>
            <text x="40" y="215" font-size="9" fill="#065F46">น้ำเกาะผนัง xylem</text>
            <text x="40" y="228" font-size="9" fill="#065F46">→ ป้องกันสายขาด</text>

            <text x="340" y="260" font-weight="700" fill="#92400E">4. Root pressure</text>
            <text x="340" y="275" font-size="9" fill="#92400E">รากดูดน้ำเข้า (เสริม)</text>
          </g>
          <defs><marker id="arrW" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1E40AF"/></marker></defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: Cohesion-Tension Theory — น้ำระเหยที่ใบดึงน้ำขึ้นจากรากเป็นสายต่อเนื่อง</div>
      </div>

      <h4>หลักการ (Dixon &amp; Joly, 1894)</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.95;">
        <li><strong>Transpiration pull (แรงดูดจากใบ):</strong> น้ำระเหยจาก mesophyll &rarr; Ψ ลด &rarr; ดึงน้ำขึ้น (สำคัญที่สุด)</li>
        <li><strong>Cohesion:</strong> โมเลกุลน้ำเกาะกันด้วย H-bonds &rarr; เป็นสายต่อเนื่องไม่ขาด</li>
        <li><strong>Adhesion:</strong> น้ำเกาะผนัง xylem &rarr; ป้องกัน column ขาด</li>
        <li><strong>Root pressure:</strong> รากดูดน้ำเข้า + เสริมแรงดัน (มีผลน้อย — เห็นจาก <strong>guttation</strong> ในตอนเช้า)</li>
      </ol>
      <div class="note-box">⚠️ <strong>Cavitation:</strong> ถ้าสายน้ำขาด (เกิดฟองอากาศใน xylem) &rarr; การลำเลียงหยุด — พบในต้นไม้ที่ขาดน้ำมาก หรือถูกแช่แข็ง</div>
    </div>

    <!-- 4. Phloem Transport + SVG -->
    <div class="content-section">
      <h3>🍯 การลำเลียงน้ำตาลใน Phloem (Pressure Flow)</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Pressure Flow: Source &rarr; Sink</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Source (leaf) -->
            <rect x="40" y="60" width="120" height="60" fill="#D1FAE5" stroke="#065F46" stroke-width="2" rx="6"/>
            <text x="100" y="85" text-anchor="middle" font-weight="700" fill="#065F46">SOURCE</text>
            <text x="100" y="100" text-anchor="middle" font-size="9" fill="#065F46">ใบ (ผลิตน้ำตาล)</text>
            <text x="100" y="113" text-anchor="middle" font-size="9" fill="#065F46">น้ำตาลเข้า → Ψ ต่ำ → น้ำเข้า</text>

            <!-- Sink (root/fruit) -->
            <rect x="360" y="60" width="120" height="60" fill="#FFE4E6" stroke="#9F1239" stroke-width="2" rx="6"/>
            <text x="420" y="85" text-anchor="middle" font-weight="700" fill="#9F1239">SINK</text>
            <text x="420" y="100" text-anchor="middle" font-size="9" fill="#9F1239">ผล/ราก (ใช้น้ำตาล)</text>
            <text x="420" y="113" text-anchor="middle" font-size="9" fill="#9F1239">น้ำตาลออก → Ψ สูง → น้ำออก</text>

            <!-- Phloem tube -->
            <rect x="160" y="80" width="200" height="20" fill="#FBBF24" stroke="#92400E" stroke-width="2"/>
            <text x="260" y="93" text-anchor="middle" font-size="9" font-weight="700" fill="#92400E">Phloem (sieve tubes)</text>
            <!-- Flow arrow -->
            <path d="M 170 90 L 350 90" stroke="#92400E" stroke-width="3" marker-end="url(#arrP)"/>

            <text x="260" y="125" text-anchor="middle" font-size="9" fill="#92400E">High pressure</text>
            <text x="260" y="138" text-anchor="middle" font-size="9" fill="#92400E">→ Low pressure</text>

            <!-- Xylem return -->
            <rect x="160" y="160" width="200" height="20" fill="#DBEAFE" stroke="#1E40AF" stroke-width="2"/>
            <text x="260" y="173" text-anchor="middle" font-size="9" font-weight="700" fill="#1E40AF">Xylem (น้ำคืน)</text>
            <path d="M 350 170 L 170 170" stroke="#1E40AF" stroke-width="2" marker-end="url(#arrP2)"/>

            <text x="100" y="200" text-anchor="middle" font-size="9" fill="#065F46">น้ำกลับเข้า xylem</text>
            <text x="420" y="200" text-anchor="middle" font-size="9" fill="#9F1239">น้ำออก</text>

            <text x="260" y="225" text-anchor="middle" font-size="9" fill="#64748B" font-style="italic">สูตร: น้ำตาลที่ source สร้าง pressure ดันสาร phloem ไป sink</text>
          </g>
          <defs>
            <marker id="arrP" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#92400E"/></marker>
            <marker id="arrP2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1E40AF"/></marker>
          </defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: Pressure Flow Hypothesis — น้ำตาลที่ source สร้าง pressure ขับเคลื่อน sap ไป sink</div>
      </div>

      <h4>Pressure Flow Hypothesis (Münch, 1930)</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li>ที่ <strong>source</strong> (ใบ): น้ำตาล (sucrose) ถูก <strong>active transport</strong> เข้า sieve tubes → Ψ ต่ำลง → น้ำจาก xylem เข้า phloem</li>
        <li>เกิด <strong>positive pressure</strong> ที่ source</li>
        <li>ที่ <strong>sink</strong> (ราก/ผล): น้ำตาลถูกขน <strong>ออก</strong> (active) → Ψ สูงขึ้น → น้ำออกไป xylem</li>
        <li>เกิด <strong>low pressure</strong> ที่ sink</li>
        <li>ความต่างของแรงดัน → <strong>bulk flow</strong> ของ phloem sap จาก source → sink</li>
      </ol>
      <h4>Source vs Sink</h4>
      <table class="content-table">
        <tr><th>Source (ผลิต)</th><th>Sink (ใช้)</th></tr>
        <tr><td>ใบที่สังเคราะห์แสง</td><td>ราก ดอก ผล เมล็ด</td></tr>
        <tr><td>หัวที่สะสม (มันฝรั่ง) ช่วงงอก</td><td>หัวที่กำลังเก็บ ในฤดูเก็บเกี่ยว</td></tr>
      </table>
      <div class="tip-box">💡 ทิศทางการไหลของ phloem <strong>ไม่คงที่</strong> — เปลี่ยนตามฤดูและสภาพ ขณะที่ xylem มีทิศเดียวคือ <strong>ขึ้น</strong></div>
    </div>

    <!-- 5. Transpiration -->
    <div class="content-section">
      <h3>🌬️ Transpiration (การคายน้ำ)</h3>
      <p>การคายน้ำคือ <strong>การสูญน้ำจากพืชสู่อากาศ</strong> ผ่าน stomata (90%), cuticle, และ lenticels — เป็นทั้ง <strong>"ค่าใช้จ่าย"</strong> และ <strong>"แรงขับเคลื่อน"</strong> ของพืช</p>
      <table class="content-table">
        <tr><th>ปัจจัย</th><th>ผลต่ออัตราการคายน้ำ</th></tr>
        <tr><td>แสง ↑</td><td>เพิ่ม (ปากใบเปิด)</td></tr>
        <tr><td>อุณหภูมิ ↑</td><td>เพิ่ม (น้ำระเหยเร็ว)</td></tr>
        <tr><td>ลม ↑</td><td>เพิ่ม (พัดไอน้ำออก)</td></tr>
        <tr><td>ความชื้นอากาศ ↑</td><td>ลด (gradient น้อย)</td></tr>
        <tr><td>น้ำในดิน ↓</td><td>ลด (ปากใบปิด, ABA)</td></tr>
        <tr><td>CO₂ ใน atmosphere ↑</td><td>ลด (ปากใบปิดบางส่วน)</td></tr>
      </table>
      <h4>ตัวเลขที่น่าสนใจ</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>ต้นข้าวโพดสูง 2 m คายน้ำ ~2 ลิตร/วัน</li>
        <li><span class="li-dot sc-dot"></span>ต้นโอ๊กใหญ่คายน้ำ ~600 ลิตร/วัน</li>
        <li><span class="li-dot sc-dot"></span>เพียง 1-2% ของน้ำที่ดูดขึ้นมา ถูกใช้ในการเจริญและสังเคราะห์แสง → 98% สูญในการคายน้ำ</li>
      </ul>
      <div class="note-box">⚠️ <strong>การคายน้ำมีประโยชน์:</strong> (1) ดึงน้ำขึ้นใบ (2) ลำเลียงแร่ธาตุ (3) ช่วยระบายความร้อน — เหมือนเหงื่อของพืช</div>
    </div>

    <!-- 6. Nutrients -->
    <div class="content-section">
      <h3>🧂 ธาตุอาหารพืช</h3>
      <p>พืชต้องการ 17 ธาตุ — แบ่งเป็น <strong>Macronutrients (ต้องการมาก)</strong> และ <strong>Micronutrients (ต้องการน้อย)</strong></p>
      <table class="content-table">
        <tr><th>กลุ่ม</th><th>ธาตุ</th><th>หน้าที่ / อาการขาด</th></tr>
        <tr><td>จากอากาศ/น้ำ</td><td>C, H, O</td><td>โครงสร้างสารอินทรีย์ทั้งหมด</td></tr>
        <tr><td>Macro (Primary)</td><td>N</td><td>ใบเขียว โปรตีน · ขาด → ใบเหลือง</td></tr>
        <tr><td>Macro (Primary)</td><td>P</td><td>DNA ATP · ขาด → ใบม่วง</td></tr>
        <tr><td>Macro (Primary)</td><td>K</td><td>เปิดปิด stomata · ขาด → ขอบใบไหม้</td></tr>
        <tr><td>Macro (Secondary)</td><td>Ca, Mg, S</td><td>Mg อยู่ใน chlorophyll, Ca ใน cell wall</td></tr>
        <tr><td>Micro</td><td>Fe, Mn, Zn, Cu, B, Mo, Cl, Ni</td><td>เอนไซม์ · cofactors</td></tr>
      </table>
      <h4>ดิน (Soil)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Topsoil:</strong> ชั้นบน — มี humus (อินทรียวัตถุ) + แร่ธาตุ + อากาศ + น้ำ + จุลินทรีย์</li>
        <li><span class="li-dot sc-dot"></span><strong>Cation Exchange Capacity (CEC):</strong> ความสามารถดินเก็บไอออน เช่น K⁺, Ca²⁺, Mg²⁺</li>
        <li><span class="li-dot sc-dot"></span><strong>pH:</strong> 6-7 เหมาะที่สุด — pH ต่ำ → Al³⁺ พิษ, pH สูง → Fe ไม่ละลาย</li>
      </ul>
      <div class="tip-box">💡 ปุ๋ย NPK 16-16-16 = N : P₂O₅ : K₂O = 16% : 16% : 16% โดยน้ำหนัก — ถ้าพืชใบเหลือง เพิ่ม N</div>
    </div>

    <!-- 7. Plant-microbe -->
    <div class="content-section">
      <h3>🦠 ความสัมพันธ์พืช-จุลินทรีย์</h3>
      <h4>Mycorrhizae (รากร่วมเห็ดรา)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>เชื้อรา (fungi) อาศัยอยู่ใน/รอบราก — เพิ่มผิวการดูดน้ำและ <strong>ฟอสฟอรัส (P)</strong></li>
        <li><span class="li-dot sc-dot"></span>พืชให้น้ำตาลแก่เชื้อราเป็นค่าตอบแทน</li>
        <li><span class="li-dot sc-dot"></span>มี 2 ประเภท: <strong>Ectomycorrhizae</strong> (อยู่นอกเซลล์) · <strong>Arbuscular (endo)</strong> (เข้าเซลล์รากผ่าน arbuscules)</li>
        <li><span class="li-dot sc-dot"></span>~90% ของพืชบกมี mycorrhizae — สำคัญต่อระบบนิเวศ</li>
      </ul>
      <h4>Nitrogen Fixation</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>N ในอากาศ (78%) เป็น <strong>N₂</strong> ที่พืชใช้ไม่ได้</li>
        <li><span class="li-dot sc-dot"></span><strong>Nitrogen-fixing bacteria</strong> เช่น <em>Rhizobium</em> เปลี่ยน N₂ → NH₃ ที่พืชใช้ได้</li>
        <li><span class="li-dot sc-dot"></span>อาศัยใน <strong>root nodules</strong> ของพืชตระกูลถั่ว (legumes) — ถั่ว ถั่วเหลือง ถั่วลิสง</li>
        <li><span class="li-dot sc-dot"></span>ใช้ enzyme <strong>nitrogenase</strong> ที่ต้องการ ATP สูงและ O₂ ต่ำ</li>
      </ul>
      <h4>Nitrogen Cycle ในดิน</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Ammonification:</strong> Decomposers ย่อยอินทรียวัตถุ → NH₄⁺</li>
        <li><span class="li-dot sc-dot"></span><strong>Nitrification:</strong> NH₄⁺ → NO₂⁻ → NO₃⁻ (โดย Nitrosomonas, Nitrobacter)</li>
        <li><span class="li-dot sc-dot"></span><strong>Denitrification:</strong> NO₃⁻ → N₂ (กลับสู่อากาศ) — เกิดในที่ไม่มี O₂</li>
        <li><span class="li-dot sc-dot"></span>พืชดูด NH₄⁺ หรือ NO₃⁻ → สร้างกรดอะมิโน</li>
      </ul>
      <div class="note-box">⚠️ ดิน <strong>ปลูกพืชหมุนเวียน</strong> (เช่น ปลูกถั่วหลังข้าว) ช่วยเติม N ในดินตามธรรมชาติ → ลดการใช้ปุ๋ย</div>
    </div>

    <!-- 8. Applications + SVG -->
    <div class="content-section">
      <h3>🌾 การประยุกต์ในชีวิตจริง</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Hydroponics — ปลูกพืชในน้ำ (ไม่ใช้ดิน)</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Container -->
            <rect x="50" y="100" width="420" height="80" fill="#DBEAFE" stroke="#1E40AF" stroke-width="2"/>
            <!-- Plants -->
            <g>
              <line x1="120" y1="50" x2="120" y2="100" stroke="#065F46" stroke-width="3"/>
              <ellipse cx="105" cy="55" rx="12" ry="8" fill="#10B981" stroke="#065F46"/>
              <ellipse cx="135" cy="50" rx="12" ry="8" fill="#10B981" stroke="#065F46"/>
              <g stroke="#92400E" stroke-width="1.5" fill="none">
                <line x1="120" y1="100" x2="110" y2="140"/>
                <line x1="120" y1="100" x2="120" y2="150"/>
                <line x1="120" y1="100" x2="130" y2="140"/>
              </g>

              <line x1="260" y1="50" x2="260" y2="100" stroke="#065F46" stroke-width="3"/>
              <ellipse cx="245" cy="55" rx="12" ry="8" fill="#10B981" stroke="#065F46"/>
              <ellipse cx="275" cy="50" rx="12" ry="8" fill="#10B981" stroke="#065F46"/>
              <g stroke="#92400E" stroke-width="1.5" fill="none">
                <line x1="260" y1="100" x2="250" y2="140"/>
                <line x1="260" y1="100" x2="260" y2="150"/>
                <line x1="260" y1="100" x2="270" y2="140"/>
              </g>

              <line x1="400" y1="50" x2="400" y2="100" stroke="#065F46" stroke-width="3"/>
              <ellipse cx="385" cy="55" rx="12" ry="8" fill="#10B981" stroke="#065F46"/>
              <ellipse cx="415" cy="50" rx="12" ry="8" fill="#10B981" stroke="#065F46"/>
              <g stroke="#92400E" stroke-width="1.5" fill="none">
                <line x1="400" y1="100" x2="390" y2="140"/>
                <line x1="400" y1="100" x2="400" y2="150"/>
                <line x1="400" y1="100" x2="410" y2="140"/>
              </g>
            </g>

            <!-- Air pump bubbles -->
            <g fill="#3B82F6">
              <circle cx="80" cy="155" r="3"/>
              <circle cx="200" cy="160" r="3"/>
              <circle cx="320" cy="155" r="3"/>
            </g>

            <text x="260" y="195" text-anchor="middle" font-weight="700" fill="#1E40AF">สารละลายธาตุอาหาร (N, P, K, ฯลฯ)</text>
            <text x="260" y="212" text-anchor="middle" font-size="9" fill="#64748B">+ Air pump ให้ O₂ ที่ราก · ควบคุม pH 5.5-6.5</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: Hydroponics — ปลูกพืชโดยให้รากแช่ในสารละลายธาตุอาหาร</div>
      </div>

      <table class="content-table">
        <tr><th>การประยุกต์</th><th>หลักการ</th></tr>
        <tr><td>Hydroponics</td><td>ปลูกในสารละลาย ไม่ใช้ดิน → ควบคุมธาตุอาหารแม่นยำ</td></tr>
        <tr><td>Aeroponics</td><td>รากลอยในอากาศ ฉีดสารละลาย → ใช้น้ำน้อย</td></tr>
        <tr><td>การให้ปุ๋ยน้ำหยด (Drip Irrigation)</td><td>ส่งน้ำ-ปุ๋ยตรงราก → ประหยัด</td></tr>
        <tr><td>การปลูกพืชหมุนเวียน</td><td>ปลูกถั่วเติม N · ป้องกันโรคและศัตรูพืช</td></tr>
        <tr><td>การพรวนดิน</td><td>เพิ่มอากาศในดิน → รากหายใจดี</td></tr>
        <tr><td>ใส่ขี้เลื่อย/ปอ</td><td>เป็น mulch รักษาความชื้น ลดอุณหภูมิ</td></tr>
      </table>
    </div>

    <!-- ============ 32 PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — ภาพรวมการลำเลียง</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — Xylem vs Phloem</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Xylem และ Phloem ลำเลียงอะไร ทิศทางใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Xylem:</strong> น้ำ + แร่ธาตุ จากราก <strong>ขึ้น</strong> ใบ (ทิศเดียว)<br><strong>Phloem:</strong> น้ำตาล จาก source → sink <strong>2 ทิศ</strong> (ขึ้นและลง ตามฤดู)<br>💡 จำว่า "X = น้ำ ขึ้นเท่านั้น · P = น้ำตาล 2 ทาง"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — Apoplast vs Symplast</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Apoplast และ Symplast pathway ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Apoplast:</strong> ผ่านผนังเซลล์และช่องว่างนอกเซลล์ — น้ำเคลื่อนได้รวดเร็ว แต่ไม่ผ่าน plasma membrane → ไม่มีการเลือก<br><strong>Symplast:</strong> ผ่าน cytoplasm ของเซลล์ที่เชื่อมกันด้วย <strong>plasmodesmata</strong> — ช้ากว่าแต่ผ่าน membrane → เลือกได้<br>Casparian strip ใน endodermis บังคับให้ apoplast → symplast<br>💡 จึงรากสามารถ "เลือก" สารที่จะดูดได้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — Bulk flow</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Bulk flow คืออะไร และเกิดที่ xylem/phloem อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Bulk flow = การไหลของของเหลวเป็นมวลใหญ่ <strong>ตาม pressure gradient</strong><br>Xylem: ความดันต่ำที่ใบ (เพราะระเหย) → ดึงสารขึ้น<br>Phloem: ความดันสูงที่ source → ดันสารไป sink<br>💡 ต่างจาก diffusion ที่เคลื่อนตาม concentration gradient — bulk flow เป็นการเคลื่อนของน้ำทั้งก้อน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: 3 ระดับ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมพืชต้องมีกลไกลำเลียงที่ 3 ระดับ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพราะ scale ของระยะทางต่างกันมาก:<br>(1) <strong>เซลล์เดียว (µm):</strong> diffusion + active transport พอ<br>(2) <strong>ระยะสั้น (mm):</strong> ผ่านเนื้อเยื่อ — apoplast/symplast<br>(3) <strong>ระยะไกล (m):</strong> ผ่าน vascular tissue ใช้ bulk flow<br>ถ้าใช้ diffusion อย่างเดียวข้ามต้นไม้สูง 100 m จะต้องใช้เวลา <strong>หลายปี</strong>!<br>💡 bulk flow ลด time scale เป็น <strong>ชั่วโมง</strong></div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — Water Potential</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — Ψ formula</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เขียนสูตร Water Potential และความหมาย</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Ψ = Ψ_S + Ψ_P<br>Ψ_S (solute potential) = มี solute → ค่าติดลบ<br>Ψ_P (pressure potential) = ความดัน — บวก (เซลล์เต่ง) หรือลบ (xylem ดึง)<br>น้ำบริสุทธิ์ Ψ = 0<br>💡 น้ำไหลจาก Ψ สูง → Ψ ต่ำ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — เซลล์ใน hypertonic</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ใส่เซลล์พืชใน hypertonic solution → Ψ_P และ Ψ_S เปลี่ยนอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> น้ำออกจากเซลล์ → เซลล์เหี่ยว (plasmolysis):<br>- <strong>Ψ_P</strong> ลดลงเป็นศูนย์ (เซลล์ไม่เต่งแล้ว)<br>- <strong>Ψ_S</strong> ติดลบมากขึ้น (น้ำตาลเข้มข้นขึ้น)<br>- Ψ รวมยังคงต่ำกว่าภายนอก เพื่อให้น้ำหยุดออก<br>💡 จึงต้องระวังไม่ใส่ปุ๋ยมากเกินไป → เกิด "fertilizer burn"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — Ψ_S ของน้ำเกลือ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> สารละลาย NaCl 1 M ที่ 25°C — คำนวณ Ψ_S (ใช้ Van't Hoff)</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>วิธีคิด:</strong> Ψ_S = -iCRT<br>i = 2 (NaCl แตกเป็น Na⁺ + Cl⁻)<br>C = 1 M = 1 mol/L<br>R = 0.00831 L·MPa/(mol·K)<br>T = 298 K<br>Ψ_S = -(2)(1)(0.00831)(298) = <strong>-4.95 MPa</strong><br>💡 ค่าติดลบมากแสดงว่าดึงน้ำได้แรง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: น้ำขึ้น 100 m</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ต้นไม้สูง 100 m ดูดน้ำขึ้นยอดได้อย่างไร? อธิบายในแง่ Ψ</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Gradient ของ Ψ ต้อง <strong>ใหญ่พอ</strong>:<br>- ดิน: Ψ ≈ -0.3 MPa<br>- ใบ: Ψ ≈ -2.0 MPa<br>- อากาศแห้ง: Ψ ≈ -100 MPa<br>ดังนั้น Ψ ตกจากดิน-ใบ-อากาศ → น้ำไหลขึ้น<br>แรงโน้มถ่วงต้านทาน ~0.01 MPa/m → 100 m = 1 MPa ที่ต้องเอาชนะ<br>Ψ ที่ใบ -2 MPa > แรงโน้มถ่วง 1 MPa → ดูดได้<br>💡 H-bond ของน้ำสำคัญ — ทำให้ tensile strength สูงพอที่จะไม่ขาด</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — Xylem (Cohesion-Tension)</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — 4 หลักการ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุ 4 หลักการของ Cohesion-Tension Theory</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(1) <strong>Transpiration pull</strong> (สำคัญสุด) — น้ำระเหยที่ใบ ดึงน้ำขึ้น<br>(2) <strong>Cohesion</strong> — น้ำเกาะกันด้วย H-bonds<br>(3) <strong>Adhesion</strong> — น้ำเกาะผนัง xylem<br>(4) <strong>Root pressure</strong> (เสริม) — รากดันน้ำขึ้น<br>💡 ทั้ง 4 ทำงานร่วมกัน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — Cavitation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Cavitation คืออะไร และเกิดเมื่อใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Cavitation = การที่ <strong>ฟองอากาศ</strong> ก่อตัวใน xylem → ทำให้สายน้ำขาด → การลำเลียงหยุด<br>เกิดเมื่อ:<br>- แล้งจัด (Ψ ติดลบมาก)<br>- ถูกแช่แข็ง (อากาศปลีกออก)<br>- บาดเจ็บที่ทำให้อากาศเข้า<br>พืชแก้ปัญหา: vessel elements ผนังกั้นกัน, secondary xylem ใหม่</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — Guttation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Guttation (น้ำหยดที่ปลายใบในตอนเช้า) เกิดจากอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Root pressure</strong> — รากดูดน้ำเข้ามาก ดันน้ำขึ้นใบ → ออกที่ <strong>hydathodes</strong> (รูพิเศษที่ขอบใบ)<br>เกิดในตอนกลางคืน/เช้าที่ปากใบปิด → ไม่มี transpiration pull → root pressure ทำงาน<br>💡 ต่างจากน้ำค้างที่เกิดจากความชื้นในอากาศ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: ต้นไม้สูงสุด</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม Coast Redwood (~115 m) เป็นต้นไม้สูงที่สุด — มีขีดจำกัดอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ขีดจำกัดของความสูงต้นไม้:<br>(1) <strong>Gravity:</strong> ต้องเอาชนะ 0.01 MPa/m → ต้นสูง 130 m ต้องเอาชนะ 1.3 MPa<br>(2) <strong>Cavitation risk:</strong> ยิ่งสูง Ψ ติดลบมาก → เสี่ยง cavitation<br>(3) <strong>Friction:</strong> ในท่อยาวความต้านทานเพิ่ม<br>คำนวณทางทฤษฎี: limit ~130 m<br>💡 Coast Redwood ใช้กลยุทธ์ — ดูดน้ำฝนผ่านใบที่ยอดเสริม</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — Phloem (Pressure Flow)</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — Source vs Sink</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ใบที่กำลังพัฒนาเป็น source หรือ sink?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใบที่ <strong>กำลังพัฒนา</strong> (ยังอ่อน) = <strong>Sink</strong> — ยังต้องการน้ำตาลจากใบเก่าเพื่อเติบโต<br>ใบที่ <strong>โตเต็มที่</strong> = <strong>Source</strong> — ผลิตน้ำตาลส่งให้ส่วนอื่น<br>💡 หัวมันฝรั่งเป็น sink เมื่อกำลังสะสมแป้ง · เป็น source เมื่องอก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — Sucrose loading</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> น้ำตาลเข้า phloem ที่ source อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้ <strong>active transport</strong> ผ่าน sucrose-H⁺ co-transporter<br>ต้องการ ATP เพราะดูดน้ำตาลทวนความเข้มข้น<br>เมื่อ sucrose เข้ามาก → Ψ_S ลด → Ψ ลด → น้ำเข้า phloem → pressure สูง → bulk flow ไป sink<br>💡 จึงเรียก phloem transport ว่า "active" — ต่างจาก xylem ที่ "passive"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — ควั่นกิ่ง</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> การควั่นกิ่งทำให้เกิดอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ตัด <strong>phloem</strong> รอบกิ่ง (แต่ไม่ตัด xylem) → น้ำตาลที่ผลิตในใบไม่สามารถลงสู่ราก → <strong>สะสมเหนือจุดควั่น</strong><br>ผลคือ:<br>- กิ่งเหนือควั่นเกิดผลและดอกมากขึ้น<br>- ตอนกิ่งทำได้ที่ตรงนั้น<br>- ในระยะยาวรากตายขาดอาหาร → ต้นตาย<br>💡 เป็นเทคนิคโบราณในการเพิ่มผลผลิตของพืช</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: ทำไมเป็น sucrose</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม phloem ลำเลียง sucrose แทน glucose?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Sucrose (disaccharide) เป็น <strong>non-reducing sugar</strong> → ไม่ทำปฏิกิริยาได้ง่าย → เสถียรในการขนส่งระยะไกล<br>Glucose เป็น reducing sugar → ทำปฏิกิริยาได้ → ไม่เสถียร<br>ที่ sink: sucrose แตกเป็น glucose + fructose แล้วใช้<br>💡 พืชบางชนิดใช้ raffinose, stachyose แทน — โดยเฉพาะที่ทำเย็นทน</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — Transpiration</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — ปัจจัย</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ปัจจัยที่ทำให้ transpiration เพิ่มขึ้นมีอะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพิ่ม: แสง, อุณหภูมิ, ลม<br>ลด: ความชื้นอากาศสูง, น้ำในดินต่ำ (ปากใบปิด)<br>💡 จึงในฤดูร้อนต้องรดน้ำพืชบ่อย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — Transpiration ratio</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> พืชสูญน้ำกี่ % ของน้ำที่ดูดขึ้นมา?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>~98%</strong> ของน้ำที่ดูดขึ้นมาถูกระเหยออกผ่าน stomata<br>เพียง 1-2% ถูกใช้ใน photosynthesis และการเจริญ<br>เหตุผลที่ "สิ้นเปลือง": stomata ต้องเปิดเพื่อรับ CO₂ → น้ำออกตามไปด้วย → trade-off ระหว่าง "น้ำ" และ "อาหาร"<br>💡 พืช C4 และ CAM ลดอัตรานี้ได้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — ประโยชน์ transpiration</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Transpiration ที่ดูสิ้นเปลือง มีประโยชน์อะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>ดึงน้ำขึ้นใบ</strong> — แรงขับเคลื่อนหลักของ xylem<br>(2) <strong>ลำเลียงแร่ธาตุ</strong> ที่ละลายในน้ำ<br>(3) <strong>ระบายความร้อน</strong> — เหมือนเหงื่อ<br>(4) ลด CO₂ ในใบ → เพิ่ม gradient → ปากใบรับ CO₂ ได้มาก<br>💡 จึงเป็น "ราคาที่ต้องจ่าย" ของพืชบก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: Xerophyte adaptations</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> พืชทะเลทราย (xerophytes) ลด transpiration อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>Cuticle หนา</strong> + ขี้ผึ้ง<br>(2) <strong>ปากใบในร่อง</strong> ลดลม<br>(3) ใบเปลี่ยนเป็น <strong>หนาม</strong> (กระบองเพชร) ลดผิว<br>(4) <strong>ขนปกคลุม (trichomes)</strong> สะท้อนแสง<br>(5) <strong>CAM photosynthesis</strong> — เปิดปากใบกลางคืน<br>(6) ลำต้นเขียวเก็บน้ำและ photosynthesis แทน<br>(7) <strong>รากลึก</strong> หรือ <strong>รากแผ่กว้าง</strong> ดูดน้ำมาก<br>💡 กระบองเพชรลด transpiration ลงเกือบ 90% เทียบกับพืชปกติ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — Nutrients</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — NPK</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ปุ๋ย NPK = อะไร และทำหน้าที่อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>N-P-K</strong> = Nitrogen-Phosphorus-Potassium<br>- <strong>N:</strong> ใบเขียว, โปรตีน, chlorophyll<br>- <strong>P:</strong> DNA, ATP, ราก, ดอก<br>- <strong>K:</strong> เปิด-ปิดปากใบ, ผลและคุณภาพ<br>เลข 16-16-16 = %N, %P₂O₅, %K₂O ในปุ๋ย<br>💡 ปุ๋ยใบ (N สูง) · ปุ๋ยผล (K สูง)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — อาการขาดธาตุ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ใบเหลือง · ใบม่วง · ขอบใบไหม้ — เป็นอาการขาดธาตุใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>- <strong>ใบเหลือง:</strong> ขาด N (chlorophyll ลด) หรือ Mg (ใจกลาง chlorophyll)<br>- <strong>ใบม่วง:</strong> ขาด P (พบในข้าวโพดเด็ก ๆ)<br>- <strong>ขอบใบไหม้:</strong> ขาด K (ปลายและขอบใบเสีย)<br>💡 N และ Mg เคลื่อนย้ายได้ในพืช (mobile) → ใบเก่าเหลืองก่อน · Ca และ Fe เคลื่อนยาก (immobile) → ใบใหม่เสียก่อน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — Macro vs Micro</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ความต่างของ macro และ micronutrients คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Macro:</strong> ต้องการมาก (กรัม/กก. ของพืช) — C, H, O, N, P, K, Ca, Mg, S<br><strong>Micro:</strong> ต้องการน้อย (มก./กก.) — Fe, Mn, Zn, Cu, B, Mo, Cl, Ni<br>ทั้งคู่ <strong>ขาดไม่ได้</strong> — แต่ปริมาณต่างกันหลายร้อยเท่า<br>💡 เปรียบเหมือนวิตามินกับคาร์โบไฮเดรตในคน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: Soil pH</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> pH ของดินมีผลต่อการดูดธาตุอาหารอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> pH 6-7 เหมาะที่สุดสำหรับพืชทั่วไป<br>- <strong>pH ต่ำ (กรด, &lt; 5):</strong> Al³⁺ และ Mn²⁺ ละลายมาก → พิษ · P, Ca, Mg ขาด<br>- <strong>pH สูง (ด่าง, &gt; 8):</strong> Fe, Mn, Zn ไม่ละลาย → พืชขาดเหล็ก (chlorosis)<br>การแก้:<br>- ดินกรด → ใส่ปูนขาว (CaCO₃) เพิ่ม pH<br>- ดินด่าง → ใส่ sulfur ลด pH<br>💡 บลูเบอร์รีชอบ pH ต่ำ (4-5) → ใส่ปุ๋ยกรด</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — Plant-Microbe</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — Mycorrhizae</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Mycorrhizae คืออะไร และมีประโยชน์อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> รากร่วม fungi — เชื้อรา <strong>ขยายผิวการดูดน้ำและฟอสฟอรัส</strong> ของรากพืช<br>พืชให้น้ำตาลกลับเป็นค่าตอบแทน → <strong>mutualism</strong><br>90% ของพืชบกมี mycorrhizae<br>2 ประเภท:<br>- <strong>Ectomycorrhizae:</strong> เชื้อราอยู่นอกเซลล์ (พบในไม้ใหญ่ในเขตอบอุ่น)<br>- <strong>Arbuscular (endo):</strong> เข้าเซลล์ผ่าน arbuscules (พบใน 70% ของพืชดอก)<br>💡 บนต้นไม้เก่าแก่ มีระบบ "Wood Wide Web" ผ่าน mycorrhizae สื่อสารระหว่างต้น</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — Nitrogen fixation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการปลูกถั่วช่วยเพิ่ม N ในดิน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> พืชตระกูลถั่ว (legumes) มี <strong>root nodules</strong> ที่อาศัย <strong>Rhizobium bacteria</strong><br>Rhizobium ใช้เอนไซม์ <strong>nitrogenase</strong> เปลี่ยน N₂ → NH₃ ที่พืชใช้ได้<br>เมื่อต้นถั่วตาย → N สะสมในดิน<br>การปลูกถั่วสลับข้าว/ข้าวโพด ลดความต้องการปุ๋ย N<br>💡 ในไทย: ถั่วลิสง ถั่วเหลือง ถั่วเขียว เป็นพืชหมุนเวียนที่ดี</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — Nitrogen cycle</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Ammonification, Nitrification, Denitrification คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Ammonification:</strong> Decomposers ย่อยอินทรียวัตถุ → NH₄⁺<br><strong>Nitrification:</strong> NH₄⁺ → NO₂⁻ → NO₃⁻ (โดย Nitrosomonas, Nitrobacter)<br><strong>Denitrification:</strong> NO₃⁻ → N₂ (กลับสู่อากาศ) — เกิดในที่ไม่มี O₂ (น้ำท่วม)<br>พืชดูด NH₄⁺ หรือ NO₃⁻ → สร้างกรดอะมิโน<br>💡 น้ำท่วมขัง → denitrification → สูญ N → ต้องระบายน้ำ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: Wood Wide Web</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> "Wood Wide Web" คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เครือข่าย <strong>mycorrhizae</strong> ใต้ดินที่เชื่อมต้นไม้หลายต้นในป่าเข้าด้วยกัน — ผ่าน fungi เป็น "อินเทอร์เน็ตของพืช"<br>ผ่านเครือข่ายนี้พืชสามารถ:<br>- ส่งน้ำตาลให้ต้นอ่อน<br>- เตือนภัย (เมื่อมีแมลง → ปล่อยสารเคมีผ่าน mycorrhizae)<br>- แชร์สารอาหารระหว่างชนิดต่างกัน<br>นักวิจัย: Suzanne Simard (Canada)<br>💡 ป่าไม่ใช่แค่กลุ่มต้นไม้แต่เป็น "superorganism"</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — การประยุกต์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — Hydroponics</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Hydroponics มีข้อดี-ข้อเสียอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>ข้อดี:</strong> ใช้น้ำน้อยกว่า 90%, ควบคุมธาตุอาหารแม่นยำ, ไม่ต้องการดิน (ปลูกในเมือง/อวกาศได้), โตเร็ว, ปลอดโรคจากดิน<br><strong>ข้อเสีย:</strong> ลงทุนสูง, ต้องการพลังงาน, ถ้าระบบล้มเหลวพืชตายเร็ว, ขาด biodiversity ของดิน<br>💡 ไทยมี Hydroponics สำหรับผักสลัด ผักไฮโดร</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — Drip irrigation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Drip irrigation ดีกว่าสปริงเกลอร์อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Drip ส่งน้ำตรงราก:<br>- <strong>ประหยัดน้ำ 30-70%</strong> (ลดการระเหย)<br>- ลดการเปียกใบ → โรคน้อย<br>- ใส่ปุ๋ยพร้อมน้ำ (fertigation) แม่นยำ<br>- ลดวัชพืช (น้ำเฉพาะที่)<br>💡 ใช้ในอิสราเอลขยาย → ปลูกในทะเลทรายได้ผลดี</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — ปุ๋ยอินทรีย์</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ปุ๋ยอินทรีย์ต่างจากปุ๋ยเคมีอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>ปุ๋ยอินทรีย์:</strong> มูลสัตว์ ปุ๋ยหมัก พืชสด — ปล่อยธาตุอาหารช้า ปรับโครงสร้างดิน เพิ่มจุลินทรีย์ดี<br><strong>ปุ๋ยเคมี:</strong> เม็ดสารเคมี (NPK) — ละลายเร็ว ตรงจุด แต่ทำลายโครงสร้างดินในระยะยาว<br>เกษตรอินทรีย์: ใช้แต่ปุ๋ยอินทรีย์ ลด chemical runoff → ดีต่อสิ่งแวดล้อม<br>💡 ผสมทั้งสองให้สมดุล</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: Vertical farming</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Vertical farming (เกษตรแนวตั้ง) สำคัญต่ออนาคตอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ปลูกพืชในตึกหลายชั้น ใช้:<br>- LED specific wavelength<br>- Hydroponics/Aeroponics<br>- ควบคุมสภาพอากาศ<br>ข้อดี:<br>(1) ใช้น้ำน้อย 95%<br>(2) ใช้พื้นที่น้อย (ปลูกในเมือง)<br>(3) ไม่ต้องใช้ยาฆ่าแมลง<br>(4) ผลิตได้ตลอดปี<br>(5) ใกล้ผู้บริโภค → ลดการขนส่ง<br>อุปสรรค: ค่าไฟสูง, ต้นทุนเริ่ม, จำกัดเฉพาะผักใบ<br>💡 ในญี่ปุ่นและสิงคโปร์มี vertical farms ขนาดใหญ่แล้ว — อนาคตอาหารในเมืองหนาแน่น</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>การลำเลียง 3 ระดับ:</strong> เซลล์เดียว · ระยะสั้น (apo/symplast) · ระยะไกล (bulk flow)<br>
        <strong>Water Potential:</strong> Ψ = Ψ_S + Ψ_P · น้ำไหลจาก Ψ สูง → ต่ำ<br>
        <strong>Xylem:</strong> Cohesion-Tension Theory · Transpiration pull (passive)<br>
        <strong>Phloem:</strong> Pressure Flow · Source → Sink · ใช้ ATP (active)<br>
        <strong>Transpiration:</strong> 98% สูญ · แต่จำเป็นต่อ pull<br>
        <strong>NPK:</strong> N=ใบ · P=ราก/DNA · K=ปากใบ · พืชต้องการ 17 ธาตุ
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>พืชใช้ปั๊มดูดน้ำขึ้น</td><td>ใช้ <strong>transpiration pull + cohesion</strong> — ไม่มีปั๊ม</td></tr>
        <tr><td>Phloem ลำเลียงทิศเดียว</td><td>ลำเลียง <strong>2 ทิศ</strong> ตาม source-sink</td></tr>
        <tr><td>Transpiration ไม่มีประโยชน์</td><td>เป็น <strong>แรงขับเคลื่อน</strong> ของ xylem + ระบายความร้อน</td></tr>
        <tr><td>Mycorrhizae เป็นปรสิต</td><td>เป็น <strong>mutualism</strong> — ต่างฝ่ายต่างได้</td></tr>
        <tr><td>Ψ ของน้ำบริสุทธิ์ = ค่าใหญ่</td><td>Ψ น้ำบริสุทธิ์ = 0 (สารละลายเป็นลบ)</td></tr>
        <tr><td>Fertilizer มากยิ่งดี</td><td>มากเกิน → hypertonic → รากเหี่ยว → "burn"</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> Xylem ขึ้น Phloem 2 ทาง · Cohesion-Tension อธิบาย xylem · Pressure flow อธิบาย phloem</div>
    </div>
  `,
  b4c15: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> ภาพรวม Photosynthesis ในมุมมองพืช<br>
        <strong>02</strong> โครงสร้างใบสำหรับสังเคราะห์แสง<br>
        <strong>03</strong> รงควัตถุและสเปกตรัมการดูดซับแสง<br>
        <strong>04</strong> Stomata: การควบคุมและการแลกเปลี่ยนแก๊ส<br>
        <strong>05</strong> พืช C₃ · C₄ · CAM แบบเปรียบเทียบลึก<br>
        <strong>06</strong> Productivity และผลผลิตของพืช<br>
        <strong>07</strong> การทดลองคลาสสิก (Engelmann, Calvin)<br>
        <strong>08</strong> การประยุกต์: เรือนกระจก, LED, GMO
      </div>
      <div class="tip-box">💡 บทนี้ <strong>เน้นพืช</strong> มากกว่ากลไกระดับโมเลกุล — ดูว่าพืชดอกใช้กลยุทธ์อะไรในการจับแสงและตรึง CO₂ ในสภาพแวดล้อมต่าง ๆ</div>
    </div>

    <!-- 1. Overview -->
    <div class="content-section">
      <h3>🌞 ภาพรวม Photosynthesis ในพืช</h3>
      <p>พืชเป็น <strong>autotroph</strong> (auto = self, troph = food) — สร้างอาหารเองจาก CO₂ และ H₂O โดยใช้พลังงานแสง</p>
      <div class="formula-box">
        <div class="formula-label">สมการรวม</div>
        6 CO₂ + 6 H₂O + แสง &rarr; C₆H₁₂O₆ + 6 O₂
      </div>
      <h4>2 ขั้นใหญ่</h4>
      <table class="content-table">
        <tr><th>ขั้น</th><th>สถานที่</th><th>ผลผลิต</th></tr>
        <tr><td>Light Reaction</td><td>Thylakoid membrane</td><td>O₂, ATP, NADPH</td></tr>
        <tr><td>Calvin Cycle</td><td>Stroma</td><td>G3P → glucose</td></tr>
      </table>
      <h4>ระดับการศึกษาในพืช</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>ระดับโมเลกุล:</strong> Light reaction · Calvin cycle (ดู บท 7)</li>
        <li><span class="li-dot sc-dot"></span><strong>ระดับเซลล์/เนื้อเยื่อ:</strong> Mesophyll · Chloroplast distribution</li>
        <li><span class="li-dot sc-dot"></span><strong>ระดับใบ:</strong> Stomata · Mesophyll arrangement</li>
        <li><span class="li-dot sc-dot"></span><strong>ระดับต้น:</strong> Source-sink · Phloem transport ของน้ำตาล</li>
        <li><span class="li-dot sc-dot"></span><strong>ระดับชุมชน:</strong> Productivity ของระบบนิเวศ</li>
      </ul>
    </div>

    <!-- 2. Leaf Structure + SVG -->
    <div class="content-section">
      <h3>🍃 โครงสร้างใบสำหรับสังเคราะห์แสง</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">การปรับโครงสร้างใบเพื่อสังเคราะห์แสง</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Sun -->
            <text x="60" y="50" font-size="20">☀️</text>
            <line x1="80" y1="60" x2="120" y2="80" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="2 2"/>

            <!-- Upper cuticle + epi -->
            <rect x="100" y="80" width="380" height="8" fill="#FBBF24"/>
            <text x="490" y="86" font-size="9" fill="#92400E">cuticle</text>
            <rect x="100" y="88" width="380" height="20" fill="#FEF3C7" stroke="#92400E"/>
            <text x="490" y="100" font-size="9" fill="#92400E">upper epi.</text>

            <!-- Palisade (tall cells with chloroplasts) -->
            <g>
              <rect x="110" y="110" width="14" height="50" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="117" cy="125" r="3" fill="#10B981"/><circle cx="117" cy="135" r="3" fill="#10B981"/><circle cx="117" cy="145" r="3" fill="#10B981"/>
              <rect x="128" y="110" width="14" height="50" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="135" cy="125" r="3" fill="#10B981"/><circle cx="135" cy="135" r="3" fill="#10B981"/><circle cx="135" cy="145" r="3" fill="#10B981"/>
              <rect x="146" y="110" width="14" height="50" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="153" cy="125" r="3" fill="#10B981"/><circle cx="153" cy="135" r="3" fill="#10B981"/><circle cx="153" cy="145" r="3" fill="#10B981"/>
              <rect x="164" y="110" width="14" height="50" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="171" cy="125" r="3" fill="#10B981"/><circle cx="171" cy="135" r="3" fill="#10B981"/><circle cx="171" cy="145" r="3" fill="#10B981"/>
              <rect x="182" y="110" width="14" height="50" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="189" cy="125" r="3" fill="#10B981"/><circle cx="189" cy="135" r="3" fill="#10B981"/><circle cx="189" cy="145" r="3" fill="#10B981"/>
              <rect x="200" y="110" width="14" height="50" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="207" cy="125" r="3" fill="#10B981"/><circle cx="207" cy="135" r="3" fill="#10B981"/>
              <rect x="218" y="110" width="14" height="50" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="225" cy="125" r="3" fill="#10B981"/><circle cx="225" cy="135" r="3" fill="#10B981"/>
            </g>
            <text x="490" y="135" font-size="9" fill="#065F46">Palisade</text>
            <text x="490" y="146" font-size="8" fill="#065F46">(แสงตก)</text>

            <!-- Spongy (with air spaces) -->
            <g>
              <circle cx="120" cy="175" r="6" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="140" cy="178" r="7" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="160" cy="172" r="5" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="180" cy="178" r="6" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="200" cy="174" r="7" fill="#D1FAE5" stroke="#065F46"/>
              <ellipse cx="240" cy="175" rx="22" ry="14" fill="#DBEAFE" stroke="#1E40AF"/>
              <text x="240" y="178" text-anchor="middle" font-size="8" font-weight="700" fill="#1E40AF">vein</text>
              <circle cx="280" cy="175" r="6" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="300" cy="178" r="7" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="320" cy="172" r="5" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="340" cy="178" r="6" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="360" cy="174" r="7" fill="#D1FAE5" stroke="#065F46"/>
              <circle cx="380" cy="178" r="5" fill="#D1FAE5" stroke="#065F46"/>
            </g>
            <text x="490" y="180" font-size="9" fill="#065F46">Spongy</text>
            <text x="490" y="190" font-size="8" fill="#065F46">(แก๊สผ่าน)</text>

            <!-- Lower epi + stomata -->
            <rect x="100" y="195" width="380" height="15" fill="#FEF3C7" stroke="#92400E"/>
            <ellipse cx="160" cy="202" rx="6" ry="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
            <ellipse cx="240" cy="202" rx="6" ry="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
            <ellipse cx="320" cy="202" rx="6" ry="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
            <ellipse cx="400" cy="202" rx="6" ry="3" fill="white" stroke="#10B981" stroke-width="1.5"/>
            <text x="160" y="225" text-anchor="middle" font-size="9" font-weight="700" fill="#10B981">stomata (CO₂ in, O₂ out)</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: ส่วนตัดของใบ — Palisade มี chloroplast มาก (รับแสง) · Spongy แลกเปลี่ยนแก๊ส</div>
      </div>

      <table class="content-table">
        <tr><th>โครงสร้าง</th><th>การปรับเพื่อ photosynthesis</th></tr>
        <tr><td>แบน กว้าง</td><td>เพิ่มผิวรับแสง</td></tr>
        <tr><td>Cuticle ใส</td><td>ป้องกันสูญน้ำ แต่ให้แสงผ่าน</td></tr>
        <tr><td>Palisade mesophyll</td><td>แท่งยาว เซลล์ชิด → chloroplast มาก รับแสง</td></tr>
        <tr><td>Spongy mesophyll</td><td>มีช่องว่าง → CO₂ เข้าทั่วถึง</td></tr>
        <tr><td>Vascular bundles (vein)</td><td>ส่งน้ำเข้า · นำน้ำตาลออก</td></tr>
        <tr><td>Stomata</td><td>ควบคุม CO₂ in · O₂ + H₂O out</td></tr>
        <tr><td>Chloroplast เคลื่อนได้</td><td>หันใส่/หลบแสงตามความเข้ม (cyclosis)</td></tr>
      </table>
      <div class="tip-box">💡 พืชใต้ร่ม (shade) มีใบบางและกว้าง + chlorophyll มาก → จับแสงได้ดี · พืชแดด (sun) มีใบหนาและ Palisade หลายชั้น</div>
    </div>

    <!-- 3. Pigments + SVG -->
    <div class="content-section">
      <h3>🌈 รงควัตถุและสเปกตรัมการดูดซับแสง</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Absorption Spectrum ของ Chlorophyll</text>
          <!-- Axes -->
          <line x1="60" y1="200" x2="500" y2="200" stroke="#1E293B" stroke-width="1.5"/>
          <line x1="60" y1="60" x2="60" y2="200" stroke="#1E293B" stroke-width="1.5"/>
          <!-- Y axis label -->
          <text x="20" y="130" font-family="Sarabun" font-size="9" fill="#1E293B" transform="rotate(-90 20 130)">Absorption</text>
          <!-- X axis numbers -->
          <text x="60" y="215" text-anchor="middle" font-size="8" fill="#1E293B">400</text>
          <text x="170" y="215" text-anchor="middle" font-size="8" fill="#1E293B">500</text>
          <text x="280" y="215" text-anchor="middle" font-size="8" fill="#1E293B">600</text>
          <text x="390" y="215" text-anchor="middle" font-size="8" fill="#1E293B">700 nm</text>
          <!-- Color bands -->
          <rect x="60" y="200" width="40" height="8" fill="#7C3AED"/>
          <rect x="100" y="200" width="40" height="8" fill="#3B82F6"/>
          <rect x="140" y="200" width="50" height="8" fill="#06B6D4"/>
          <rect x="190" y="200" width="60" height="8" fill="#10B981"/>
          <rect x="250" y="200" width="40" height="8" fill="#FBBF24"/>
          <rect x="290" y="200" width="40" height="8" fill="#F59E0B"/>
          <rect x="330" y="200" width="60" height="8" fill="#EF4444"/>
          <!-- Chlorophyll a curve (peaks at 430 & 660) -->
          <path d="M 60 130 Q 80 80 95 80 Q 110 80 130 130 Q 150 170 200 180 Q 250 175 290 175 Q 320 170 350 95 Q 365 80 380 90 Q 395 130 410 180 L 500 195"
                fill="none" stroke="#065F46" stroke-width="2"/>
          <!-- Chlorophyll b curve (peaks at 460 & 645) -->
          <path d="M 60 145 Q 90 100 115 100 Q 140 105 170 150 Q 210 175 250 180 Q 290 175 320 105 Q 340 90 355 100 Q 380 140 400 185 L 500 195"
                fill="none" stroke="#10B981" stroke-width="2" stroke-dasharray="3 2"/>
          <!-- Carotenoids -->
          <path d="M 60 175 Q 80 130 100 120 Q 130 120 150 145 Q 170 165 200 180 L 500 195"
                fill="none" stroke="#F59E0B" stroke-width="2" stroke-dasharray="2 2"/>

          <!-- Legend -->
          <line x1="350" y1="50" x2="370" y2="50" stroke="#065F46" stroke-width="2"/>
          <text x="375" y="53" font-size="9" fill="#065F46">Chlorophyll a</text>
          <line x1="350" y1="65" x2="370" y2="65" stroke="#10B981" stroke-width="2" stroke-dasharray="3 2"/>
          <text x="375" y="68" font-size="9" fill="#10B981">Chlorophyll b</text>
          <line x1="350" y1="80" x2="370" y2="80" stroke="#F59E0B" stroke-width="2" stroke-dasharray="2 2"/>
          <text x="375" y="83" font-size="9" fill="#F59E0B">Carotenoids</text>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: Chlorophyll ดูดแสงน้ำเงิน (430 nm) และแดง (660 nm) มาก — สะท้อนเขียว → ใบเขียว</div>
      </div>

      <table class="content-table">
        <tr><th>รงควัตถุ</th><th>สี (สะท้อน)</th><th>ดูดแสง (peak)</th><th>หน้าที่</th></tr>
        <tr><td>Chlorophyll a</td><td>เขียวอมฟ้า</td><td>430 + 660 nm</td><td>หลัก — ใน reaction center</td></tr>
        <tr><td>Chlorophyll b</td><td>เขียวอมเหลือง</td><td>450 + 640 nm</td><td>ช่วยขยายช่วงดูดแสง (accessory)</td></tr>
        <tr><td>Carotene</td><td>ส้ม</td><td>450 nm</td><td>ดูดแสงเสริม · ป้องกัน photodamage</td></tr>
        <tr><td>Xanthophyll</td><td>เหลือง</td><td>450 nm</td><td>เหมือนกัน — กระจาย excess energy</td></tr>
        <tr><td>Anthocyanin</td><td>แดง/ม่วง</td><td>500 nm</td><td>ในกลีบดอก ใบฤดูใบไม้ร่วง</td></tr>
        <tr><td>Phycobilins</td><td>—</td><td>500-650 nm</td><td>ในไซยาโนแบคทีเรียและสาหร่ายแดง</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">Action Spectrum vs Absorption Spectrum</div>
        <strong>Absorption:</strong> ปริมาณแสงที่ดูดที่แต่ละ wavelength<br>
        <strong>Action:</strong> อัตรา photosynthesis ที่แต่ละ wavelength<br>
        ทั้งคู่มี <strong>peak ใกล้กัน</strong> → ยืนยันว่า chlorophyll เป็นรงควัตถุหลัก
      </div>
    </div>

    <!-- 4. Stomata + SVG -->
    <div class="content-section">
      <h3>💨 Stomata และการแลกเปลี่ยนแก๊ส</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Guard Cells: เปิด vs ปิด</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Closed -->
            <text x="150" y="55" text-anchor="middle" font-weight="700" fill="#F43F5E">Stomata ปิด</text>
            <path d="M 100 80 Q 130 70 150 80 Q 170 90 200 80 Q 180 110 150 110 Q 120 110 100 80" fill="#D1FAE5" stroke="#065F46" stroke-width="2"/>
            <path d="M 100 145 Q 130 135 150 145 Q 170 155 200 145 Q 180 175 150 175 Q 120 175 100 145" fill="#D1FAE5" stroke="#065F46" stroke-width="2"/>
            <!-- K+ ions out -->
            <text x="80" y="125" font-size="14" fill="#9F1239">K⁺↓</text>
            <text x="220" y="125" font-size="14" fill="#9F1239">H₂O↓</text>
            <text x="150" y="205" text-anchor="middle" font-size="9" fill="#F43F5E">น้ำออก → แฟบ</text>
            <text x="150" y="220" text-anchor="middle" font-size="9" fill="#F43F5E">→ ไม่มีช่อง</text>

            <!-- Open -->
            <text x="400" y="55" text-anchor="middle" font-weight="700" fill="#10B981">Stomata เปิด</text>
            <path d="M 340 80 Q 365 70 380 95 Q 380 115 365 130 Q 350 120 340 100 Q 340 90 340 80" fill="#10B981" stroke="#065F46" stroke-width="2"/>
            <path d="M 460 80 Q 435 70 420 95 Q 420 115 435 130 Q 450 120 460 100 Q 460 90 460 80" fill="#10B981" stroke="#065F46" stroke-width="2"/>
            <!-- Pore in middle -->
            <ellipse cx="400" cy="105" rx="12" ry="15" fill="white" stroke="#065F46"/>
            <!-- K+ in arrows -->
            <text x="310" y="105" font-size="14" fill="#10B981">K⁺↑</text>
            <text x="475" y="105" font-size="14" fill="#10B981">H₂O↑</text>
            <text x="400" y="155" text-anchor="middle" font-size="9" fill="#10B981">น้ำเข้า → เต่ง</text>
            <text x="400" y="170" text-anchor="middle" font-size="9" fill="#10B981">→ มีช่องผ่าน</text>

            <!-- CO2 in -->
            <text x="400" y="195" text-anchor="middle" font-size="11" font-weight="700" fill="#9F1239">CO₂ เข้า ↓</text>
            <text x="400" y="215" text-anchor="middle" font-size="11" font-weight="700" fill="#3B82F6">O₂ + H₂O ออก ↑</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: Guard cells โป่งเมื่อรับน้ำ → ปากใบเปิด · แฟบเมื่อสูญน้ำ → ปิด</div>
      </div>

      <h4>กลไกการเปิด-ปิดของ Stomata</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li><strong>เปิด:</strong> K⁺ pump (ใช้ ATP) ขน K⁺ เข้า guard cells → Ψ_S ลด → น้ำเข้า → เต่ง → ผนังหนาด้านในโค้ง → เกิดช่อง</li>
        <li><strong>ปิด:</strong> K⁺ ออก → น้ำออก → แฟบ → ปิด</li>
      </ol>
      <h4>ปัจจัยควบคุม</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Blue light receptor (phototropin):</strong> กระตุ้นเปิดในตอนเช้า</li>
        <li><span class="li-dot sc-dot"></span><strong>CO₂ ในใบสูง:</strong> ปิด (พอใจแล้ว)</li>
        <li><span class="li-dot sc-dot"></span><strong>นาฬิกาชีวภาพ (Circadian clock):</strong> เปิดกลางวัน ปิดกลางคืน (ยกเว้น CAM)</li>
        <li><span class="li-dot sc-dot"></span><strong>ABA (Abscisic Acid):</strong> หลั่งเมื่อขาดน้ำ → บังคับปิด</li>
        <li><span class="li-dot sc-dot"></span><strong>อุณหภูมิสูง:</strong> ปิดเพื่อลดสูญน้ำ</li>
      </ul>
      <div class="note-box">⚠️ <strong>Stomata Trade-off:</strong> เปิด → ได้ CO₂ แต่สูญน้ำ · ปิด → ประหยัดน้ำแต่ขาด CO₂ → พืชต้อง balance</div>
    </div>

    <!-- 5. C3/C4/CAM Deep -->
    <div class="content-section">
      <h3>🌾 พืช C₃ · C₄ · CAM — แบบลึก</h3>
      <table class="content-table">
        <tr><th>ลักษณะ</th><th>C₃</th><th>C₄</th><th>CAM</th></tr>
        <tr><td>เอนไซม์ตรึง CO₂ แรก</td><td>RuBisCO</td><td>PEP carboxylase</td><td>PEP carboxylase (กลางคืน)</td></tr>
        <tr><td>สาร 3C ที่ได้แรก</td><td>3-PGA (3C)</td><td>OAA (4C)</td><td>OAA → Malate (เก็บ vacuole)</td></tr>
        <tr><td>กายวิภาคใบ</td><td>ปกติ — palisade + spongy</td><td><strong>Kranz anatomy</strong></td><td>เซลล์เก็บน้ำใหญ่</td></tr>
        <tr><td>การใช้น้ำ</td><td>เปลือง</td><td>ประหยัด</td><td>ประหยัดมาก</td></tr>
        <tr><td>Photorespiration</td><td>มี (เสียพลังงาน)</td><td>น้อย</td><td>น้อย</td></tr>
        <tr><td>อุณหภูมิเหมาะ</td><td>15-25°C</td><td>30-40°C</td><td>30-40°C</td></tr>
        <tr><td>เหมาะกับ</td><td>เย็น ชื้น</td><td>ร้อน แดดจัด</td><td>ทะเลทราย แล้ง</td></tr>
        <tr><td>% ของพืชในโลก</td><td>~85%</td><td>~3%</td><td>~7%</td></tr>
        <tr><td>ตัวอย่าง</td><td>ข้าว · ข้าวสาลี · ถั่ว · ผัก</td><td>ข้าวโพด · อ้อย · หญ้า</td><td>กระบองเพชร · สับปะรด · ว่านหางจระเข้</td></tr>
      </table>
      <h4>Kranz Anatomy ใน C₄</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>Mesophyll ใช้ <strong>PEP carboxylase</strong> ตรึง CO₂ → OAA → Malate</li>
        <li><span class="li-dot sc-dot"></span>Malate ส่งไป <strong>Bundle sheath cells</strong> (ล้อมรอบ vein)</li>
        <li><span class="li-dot sc-dot"></span>ที่ bundle sheath: Malate → CO₂ + Pyruvate</li>
        <li><span class="li-dot sc-dot"></span>CO₂ <strong>เข้มข้นใน bundle sheath</strong> → RuBisCO ทำงานเต็มที่ → ไม่มี photorespiration</li>
      </ul>
      <h4>CAM Strategy</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>กลางคืน (เย็น, ปากใบเปิด):</strong> CO₂ + PEP → OAA → Malate (เก็บใน vacuole)</li>
        <li><span class="li-dot sc-dot"></span><strong>กลางวัน (ร้อน, ปากใบปิด):</strong> Malate ปล่อย CO₂ → RuBisCO ใช้ใน Calvin</li>
        <li><span class="li-dot sc-dot"></span>ลดสูญน้ำได้มาก เพราะปากใบเปิดเฉพาะตอนเย็น</li>
      </ul>
      <div class="tip-box">💡 <strong>C₃ Rice Project:</strong> นักวิจัยพยายามใส่กลไก C₄ เข้าข้าว → ทนร้อน + ผลผลิตเพิ่ม 50% → แก้ปัญหาความมั่นคงทางอาหาร</div>
    </div>

    <!-- 6. Productivity -->
    <div class="content-section">
      <h3>🌡️ Productivity และผลผลิตของพืช</h3>
      <h4>นิยาม</h4>
      <table class="content-table">
        <tr><th>คำ</th><th>ความหมาย</th></tr>
        <tr><td>GPP (Gross Primary Productivity)</td><td>อัตรา photosynthesis รวมทั้งหมด</td></tr>
        <tr><td>NPP (Net Primary Productivity)</td><td>GPP − Respiration = พลังงานที่เก็บใน biomass</td></tr>
        <tr><td>Biomass</td><td>มวลของอินทรียวัตถุที่พืชสะสม</td></tr>
        <tr><td>LAI (Leaf Area Index)</td><td>พื้นที่ใบ / พื้นที่ดิน — บอกความหนาแน่นของใบ</td></tr>
      </table>
      <h4>NPP ของระบบนิเวศหลัก (g/m²/ปี)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>ป่าฝนเขตร้อน:</strong> 2,200 (สูงสุดในระบบนิเวศบก)</li>
        <li><span class="li-dot sc-dot"></span><strong>ป่าผลัดใบเขตอบอุ่น:</strong> 1,200</li>
        <li><span class="li-dot sc-dot"></span><strong>นาข้าว:</strong> 900-1,500</li>
        <li><span class="li-dot sc-dot"></span><strong>ทุ่งหญ้าสะวันนา:</strong> 700</li>
        <li><span class="li-dot sc-dot"></span><strong>ทะเลทราย:</strong> 90</li>
        <li><span class="li-dot sc-dot"></span><strong>มหาสมุทรเปิด:</strong> 125 (แต่พื้นที่มหาศาล → รวมเยอะ)</li>
      </ul>
      <h4>ปัจจัยที่จำกัด</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>แสง</strong> ในป่าทึบ — ใต้ canopy แสงเหลือ 1-5%</li>
        <li><span class="li-dot sc-dot"></span><strong>น้ำ</strong> ในทะเลทราย</li>
        <li><span class="li-dot sc-dot"></span><strong>ธาตุอาหาร</strong> (N, P) ในดินเสื่อม</li>
        <li><span class="li-dot sc-dot"></span><strong>อุณหภูมิ</strong> ในเขตหนาว</li>
        <li><span class="li-dot sc-dot"></span><strong>CO₂</strong> ในเรือนกระจกเปิด</li>
      </ul>
      <div class="formula-box">
        <div class="formula-label">ประสิทธิภาพการแปลงพลังงานแสง</div>
        แสงตกพื้น 100% → ผ่าน atmosphere 50% → ที่ใบดูดได้ 40% → ใช้ใน photosynthesis 3-6% → biomass 1-2%<br>
        <strong>พืช C₃: ~1% · C₄: ~2-3%</strong> (ของพลังงานแสงทั้งหมด)
      </div>
    </div>

    <!-- 7. Experiments -->
    <div class="content-section">
      <h3>🧪 การทดลองคลาสสิก</h3>
      <table class="content-table">
        <tr><th>นักวิทยาศาสตร์</th><th>ปี</th><th>การค้นพบ</th></tr>
        <tr><td>Jan van Helmont</td><td>1640s</td><td>พืชเจริญจาก "น้ำ" (ดินลดน้อย)</td></tr>
        <tr><td>Joseph Priestley</td><td>1772</td><td>พืชผลิตอากาศที่ทำให้เทียนติดได้</td></tr>
        <tr><td>Jan Ingenhousz</td><td>1779</td><td>ต้องมีแสงเขียว และพืชเขียวเท่านั้น</td></tr>
        <tr><td>Engelmann</td><td>1882</td><td>Action spectrum — ใช้แบคทีเรียมารวมที่ O₂ มาก</td></tr>
        <tr><td>F.F. Blackman</td><td>1905</td><td>Light + Dark reaction แยกกัน (Limiting factor)</td></tr>
        <tr><td>Cornelis van Niel</td><td>1930s</td><td>O₂ มาจาก H₂O ไม่ใช่ CO₂</td></tr>
        <tr><td>Hill</td><td>1939</td><td>Isolated chloroplasts ผลิต O₂ จาก H₂O</td></tr>
        <tr><td>Ruben &amp; Kamen</td><td>1941</td><td>¹⁸O ติดตาม → O₂ จาก H₂O 100%</td></tr>
        <tr><td>Melvin Calvin</td><td>1950s</td><td>¹⁴C ติดตาม → Calvin Cycle (Nobel 1961)</td></tr>
      </table>
      <h4>การทดลอง Sachs (1864)</h4>
      <p>วางพืชในที่มืด 48 ชม. → ปกคลุมส่วนของใบด้วยฟอยล์ → ให้แสง 6 ชม. → ย้อมด้วย <strong>iodine</strong> → ส่วนที่ปกคลุม <strong>ไม่ติดสีน้ำเงิน</strong> (ไม่มีแป้ง) ส่วนที่รับแสงติดสี → <strong>พิสูจน์ว่าต้องมีแสงในการสร้างแป้ง</strong></p>
    </div>

    <!-- 8. Applications -->
    <div class="content-section">
      <h3>🏭 การประยุกต์ในเกษตรกรรม</h3>
      <table class="content-table">
        <tr><th>การประยุกต์</th><th>หลักการ</th></tr>
        <tr><td>เรือนกระจก (Greenhouse)</td><td>ควบคุมแสง T° CO₂ → photosynthesis เพิ่ม</td></tr>
        <tr><td>CO₂ enrichment</td><td>เพิ่ม CO₂ จาก 0.04% → 0.1% → ผลผลิต ↑ 30%</td></tr>
        <tr><td>LED grow light</td><td>ใช้แสงสีน้ำเงิน + แดง (ที่ chlorophyll ดูด) → ประหยัดไฟ</td></tr>
        <tr><td>ปลูกพืชหนาแน่น</td><td>เพิ่ม LAI → จับแสงได้มาก</td></tr>
        <tr><td>การตัดแต่งกิ่ง</td><td>เปิดให้แสงเข้าใบล่าง → photosynthesis ทั่วทรงพุ่ม</td></tr>
        <tr><td>C₄ Rice Project</td><td>ตั้งใจใส่กลไก C₄ ในข้าวเพื่อทนร้อน</td></tr>
        <tr><td>GMO Golden Rice</td><td>เพิ่ม carotene → vitamin A</td></tr>
        <tr><td>Algae biofuel</td><td>สาหร่ายดูด CO₂ + ผลิต lipid → biodiesel</td></tr>
      </table>
    </div>

    <!-- ============ 32 PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — ภาพรวม</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — สมการรวม</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เขียนสมการรวมของ photosynthesis และระบุว่า reactant/product ทำหน้าที่อะไร</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> 6 CO₂ + 6 H₂O + แสง → C₆H₁₂O₆ + 6 O₂<br>- CO₂: แหล่ง carbon จากอากาศ<br>- H₂O: ตัวให้ e⁻ (และ H⁺) → ปล่อย O₂<br>- แสง: พลังงาน<br>- Glucose: เก็บพลังงาน + carbon<br>- O₂: by-product ปล่อยสู่อากาศ<br>💡 6 CO₂ → 1 glucose (6 carbons)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — Light vs Dark</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Light reaction และ Calvin cycle เกิดที่ไหน และให้อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Light:</strong> Thylakoid membrane → ATP + NADPH + O₂<br><strong>Calvin:</strong> Stroma → G3P → glucose (ใช้ ATP + NADPH)<br>💡 จำว่า "light = thylakoid, dark = stroma"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — Autotroph</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมพืชเรียกว่า autotroph?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Auto = self, troph = food — สร้างอาหารเองจากสารอนินทรีย์ (CO₂, H₂O) + พลังงานแสง<br>ตรงข้าม heterotroph = ต้องกินอาหารจากสิ่งอื่น<br>💡 พืช + สาหร่าย + ไซยาโนแบคทีเรีย = photoautotroph · บางแบคทีเรีย = chemoautotroph (ใช้พลังงานเคมี)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: ทำไมต้องสองขั้น</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม photosynthesis ต้องแบ่งเป็น 2 ขั้น (light + dark)?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพราะ <strong>กระบวนการ 2 อย่างต้องสภาพแวดล้อมต่างกัน</strong>:<br>Light: ต้องการ <strong>membrane</strong> เพื่อสร้าง proton gradient → เกิดบน thylakoid<br>Calvin: ต้องการ <strong>cytoplasm</strong> ที่มี enzymes ละลายได้ → เกิดใน stroma<br>การแยกช่องทำให้ทั้งสองทำงานเต็มที่ — ตัวอย่างของ <strong>compartmentalization</strong> ในเซลล์ยูคาริโอต<br>💡 ATP/NADPH ส่งจาก light → Calvin ผ่าน stroma</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — โครงสร้างใบ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — Palisade location</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม Palisade mesophyll อยู่ผิวบน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพราะ Palisade มี <strong>chloroplast มาก</strong> และต้องการแสงเต็มที่ — อยู่ใกล้ผิวบนรับแสงตรง<br>เซลล์รูปแท่งยาว เรียงชิดกัน → แสงผ่านได้ทั่ว<br>💡 Spongy อยู่ล่าง ใช้แสงที่เหลือและทำหน้าที่แลกเปลี่ยนแก๊ส</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — Vein</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Vein (เส้นใบ) มีหน้าที่ 2 อย่างคืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>Xylem ส่งน้ำ + แร่ธาตุเข้าใบ</strong><br>(2) <strong>Phloem ลำเลียงน้ำตาลที่ผลิตได้ออกจากใบ</strong><br>เส้นใบกระจายให้ใกล้ทุกเซลล์ → ไม่มีจุดไหนห่างจาก vein มากเกินไป<br>💡 ใบใหญ่มี vein เยอะ ใบเล็กมี vein น้อย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — Cuticle</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Cuticle ทำหน้าที่อะไร และทำไมไม่ขัดขวางแสง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Cuticle = ขี้ผึ้ง (wax) เคลือบนอก epidermis → <strong>กันสูญน้ำ</strong> ผ่านเย็บ + กันเชื้อโรค<br>เป็น <strong>โปร่งใส</strong> → แสงผ่านได้สบาย (ลดเฉพาะส่วนนิดหน่อย)<br>💡 พืชเขตแล้งมี cuticle หนา · พืชใต้น้ำมี cuticle น้อย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: Sun vs Shade leaf</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ใบ "Sun" และ "Shade" ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Sun leaves (บนยอด):</strong> หนา, palisade 2-3 ชั้น, cuticle หนา, chlorophyll น้อย/พื้นที่ → ทนแสงแรงและสูญน้ำน้อย<br><strong>Shade leaves (ใต้ canopy):</strong> บาง, กว้าง, palisade ชั้นเดียว, chlorophyll หนา/พื้นที่ → จับแสงน้อยให้คุ้ม<br>ต้นเดียวกันมีทั้ง 2 ประเภทใบในตำแหน่งต่าง<br>💡 ตัวอย่างของ <strong>phenotypic plasticity</strong></div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — Pigments</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — ทำไมเขียว</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมใบไม้เขียว?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Chlorophyll <strong>ดูดแสงน้ำเงิน (~430 nm) และแดง (~660 nm) มาก</strong> แต่ <strong>สะท้อนแสงเขียว (~550 nm)</strong> → เราเห็นเขียว<br>แสงเขียวเป็นสีที่ photosynthesis ใช้น้อยที่สุด<br>💡 ถ้าใส่ต้นไม้ใต้แสงเขียวอย่างเดียว → โตช้าและตาย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — Carotenoid functions</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Carotene (สีส้ม) มีหน้าที่อะไรในพืช?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>Accessory pigment</strong> — ดูดแสงที่ chlorophyll ดูดไม่ดี (น้ำเงิน-เขียว) → ส่งพลังงานต่อให้ chlorophyll<br>(2) <strong>Photoprotection</strong> — กระจายพลังงานเกินที่อาจทำลาย chlorophyll<br>(3) <strong>Antioxidant</strong> — กันความเสียหายจาก ROS<br>💡 สีฤดูใบไม้ร่วง: chlorophyll สลายก่อน → carotene เห็นชัด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — Action spectrum</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Action spectrum และ Absorption spectrum ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Absorption:</strong> ปริมาณแสงที่ดูดที่แต่ละ wavelength (จาก spectrophotometer)<br><strong>Action:</strong> อัตรา photosynthesis ที่แต่ละ wavelength (จากการวัด O₂ ปล่อย)<br>ทั้งคู่มี peak ใกล้กัน → chlorophyll เป็นรงควัตถุหลัก<br>💡 Action กว้างกว่า absorption — เพราะ carotenoids เสริม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: Phycobilins</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> สาหร่ายแดงในทะเลลึกใช้รงควัตถุอะไร และทำไม?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้ <strong>Phycoerythrin (สีแดง)</strong> ที่ดูด <strong>แสงสีเขียว/เหลือง (~500-550 nm)</strong><br>เพราะในทะเลลึก แสงแดงและน้ำเงินถูกดูดที่ผิวน้ำหมด → เหลือเฉพาะแสงสีเขียวลงไปลึก<br>สาหร่ายแดงปรับตัวให้ใช้ wavelength ที่ยังเหลือ<br>💡 ตัวอย่างคลาสสิกของ adaptation ในวิวัฒนาการ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — Stomata</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — กลไกเปิด</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Guard cells เปิดได้อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Blue light → กระตุ้น H⁺ ATPase → ปั๊ม H⁺ ออก → K⁺ ไหลเข้า (ตาม gradient) → Ψ_S ลด → น้ำเข้า → guard cells เต่ง<br>ผนังด้านในหนา → โค้งออก → เกิดช่อง<br>💡 มีหลายระบบ — blue light, CO₂, ABA, circadian clock</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — ABA</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ABA (Abscisic acid) ส่งผลกับ stomata อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เมื่อพืชขาดน้ำ → ราก/ใบสังเคราะห์ <strong>ABA</strong> → ส่งสัญญาณให้ guard cells:<br>(1) K⁺ ออก<br>(2) น้ำออก<br>(3) Guard cells แฟบ → ปากใบปิด<br>ป้องกันการสูญน้ำเพิ่ม<br>💡 ABA = "stress hormone" — มีหลายฟังก์ชันในการรับมือสภาพแย่</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — Stomata location</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Stomata อยู่ใต้ใบเป็นหลักทำไม?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพื่อ <strong>ลดสูญน้ำ</strong> — ผิวบนถูกแดดและลมแรง<br>ใต้ใบเย็นกว่า ชื้นกว่า → transpiration ช้ากว่า<br>ข้อยกเว้น:<br>- ใบบัวลอย → ปากใบที่ผิว <strong>บน</strong><br>- พืชใต้น้ำ → ไม่มี stomata (แลกเปลี่ยนแก๊สผ่านผิวทั้งหมด)<br>💡 ในใบไม้ส่วนใหญ่อัตราส่วน upper:lower = 1:5</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: CO₂ effect</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> CO₂ ในบรรยากาศเพิ่มขึ้น (จาก global warming) มีผลกับ stomata อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> CO₂ สูง → guard cells <strong>ปิด</strong> stomata บางส่วน (พอใจแล้ว)<br>ผล:<br>(1) ลด transpiration → ประหยัดน้ำ → พืชโตในที่แห้งได้<br>(2) ผลผลิตอาจเพิ่ม (CO₂ fertilization effect)<br>(3) แต่ลด evaporative cooling → ใบร้อนขึ้น → อาจเสียหาย<br>(4) ลดการคืน H₂O สู่อากาศ → เปลี่ยน weather pattern<br>💡 ผลรวมยังเป็นที่ถกเถียง — บางพืชดี บางพืชแย่</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — C₃/C₄/CAM</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — Photorespiration</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Photorespiration คืออะไร และทำไมเป็นปัญหา?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> RuBisCO มี active site เดียวสำหรับ CO₂ และ O₂ — ในที่ร้อน/แห้ง (ปากใบปิด) → CO₂ ต่ำ, O₂ สูง → <strong>RuBisCO จับ O₂ แทน</strong> → ผลิต phosphoglycolate (ไม่มีประโยชน์)<br>ต้องใช้พลังงานในการย่อย → <strong>เสีย ~25% ของ photosynthesis</strong> ในพืช C₃<br>RuBisCO วิวัฒนาการในยุค O₂ ต่ำ — ยังไม่ปรับ<br>💡 พืช C₄ และ CAM ลดปัญหานี้ด้วยการ <strong>concentrate CO₂</strong></div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — Kranz</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Kranz anatomy ใน C₄ ทำงานอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(1) <strong>Mesophyll</strong> ใช้ PEP carboxylase ตรึง CO₂ → OAA → Malate<br>(2) Malate ส่งไป <strong>Bundle sheath cells</strong> (ล้อมรอบ vein)<br>(3) ใน bundle sheath: Malate แตกตัว → CO₂ ปล่อย<br>(4) <strong>CO₂ เข้มข้นใน bundle sheath</strong> → RuBisCO ทำงานเต็มที่ ไม่มี photorespiration<br>"Kranz" = wreath ในเยอรมัน (รูปวงกลม)<br>💡 ใช้ ATP เพิ่ม แต่ได้ผลผลิตมากกว่าในที่ร้อน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — CAM</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม CAM plants เปิดปากใบกลางคืน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>กลางคืนเย็น ความชื้นสูง</strong> → ลด transpiration → เสียน้ำน้อย<br>ขั้นตอน:<br>(1) กลางคืน: เปิดปากใบ → CO₂ + PEP → OAA → Malate (เก็บ vacuole)<br>(2) กลางวัน: ปิดปากใบ (ประหยัดน้ำ) → Malate → CO₂ → Calvin cycle<br>เหมาะกับ <strong>ทะเลทราย</strong> — กระบองเพชร สับปะรด ว่านหางจระเข้<br>💡 CAM ลดการใช้น้ำได้ ~5-10 เท่าเทียบกับ C₃</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: เลือก crop</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ในเขตร้อนแห้งควรเลือกปลูกพืชชนิดไหน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>C₄ หรือ CAM</strong><br>- ข้าวโพด อ้อย (C₄) — ผลผลิตสูง<br>- สับปะรด อะกาเว (CAM) — ทนแล้งมาก<br>หลีกเลี่ยง C₃ (ข้าว ถั่ว) เพราะจะมี photorespiration สูง → ผลผลิตต่ำ<br>💡 ในไทยอีสานปลูกอ้อยและข้าวโพดดี ในขณะที่ภาคกลางปลูกข้าวได้เพราะมีน้ำพอ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — Productivity</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — GPP vs NPP</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> GPP และ NPP ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>GPP (Gross):</strong> photosynthesis รวม (ก่อนหัก respiration)<br><strong>NPP (Net):</strong> GPP − Respiration = พลังงานที่เก็บใน biomass จริง<br>NPP = สิ่งที่ <strong>ห่วงโซ่อาหารใช้ได้</strong><br>💡 NPP/GPP ≈ 50% ในพืช</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — Highest NPP</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบบนิเวศใดมี NPP สูงสุด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>ป่าฝนเขตร้อน</strong> (~2,200 g/m²/yr) — มีทุกปัจจัยพร้อม: แสง น้ำ ความร้อน CO₂<br>รองลงมา: แนวปะการัง · พื้นที่ชุ่มน้ำ (estuaries, marshes)<br>NPP ต่ำสุด: ทะเลทราย (90), ทุนดรา (140), ใต้ทะเลลึก<br>💡 ป่าแอมะซอนผลิต ~20% ของ O₂ ในโลก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — Efficiency</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม efficiency ของ photosynthesis เพียง 1-2%?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> แสงตกบนใบ 100% → เสียในขั้นตอน:<br>(1) สะท้อนกลับ ~10%<br>(2) ผ่านใบไป ~10%<br>(3) ดูดซับ but ไม่ใช่ wavelength ที่ใช้ได้ ~50%<br>(4) ใช้ใน photosynthesis ~25-30% (เป็นแสงเขียวที่ไม่ใช้)<br>(5) Heat loss + respiration → เหลือใน biomass 1-2%<br>💡 Solar panel สมัยใหม่ efficient 20-25% → ดีกว่าใบไม้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: Limiting factor</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ในนาข้าว — ปัจจัยใดมักจำกัด photosynthesis?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ขึ้นกับฤดู:<br>- <strong>ฤดูฝน:</strong> แสงอาจน้อย (เมฆมาก) → light limiting<br>- <strong>ฤดูแล้ง:</strong> น้ำจำกัด → ปากใบปิด → CO₂ limiting<br>- <strong>ตอนเที่ยง:</strong> อุณหภูมิสูง → photorespiration → temperature limiting<br>- ดินจาก: ขาด N → chlorophyll ต่ำ → nutrient limiting<br>การจัดการ: ใส่น้ำพอ + ปุ๋ย + ปลูกพันธุ์เหมาะกับสภาพ<br>💡 Liebig's Law of the Minimum — เพิ่มปัจจัยอื่นไม่ช่วยถ้าปัจจัยที่ขาดยังไม่แก้</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — การทดลองคลาสสิก</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — Sachs starch test</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> การทดลอง Sachs (1864) พิสูจน์อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> วางพืชในที่มืด 48 ชม. → คลุมส่วนของใบ → ให้แสง 6 ชม. → ย้อม iodine<br>ผล: ส่วนที่ <strong>รับแสง</strong> ติดสี <strong>น้ำเงิน-ดำ</strong> (แป้งอยู่) · ส่วนที่ <strong>ปกคลุม</strong> ไม่ติดสี (ไม่มีแป้ง)<br>สรุป: <strong>แสงจำเป็นสำหรับการสร้างแป้ง (= photosynthesis)</strong><br>💡 ใช้ iodine เพราะ amylose ใน starch จับ I₂ ให้สีน้ำเงิน-ดำ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — Engelmann</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Engelmann ใช้แบคทีเรียพิสูจน์อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> วาง Spirogyra (สาหร่ายเขียวเส้น) ใต้ปริซึม → ส่องแสงสเปกตรัม → แบคทีเรียที่ต้องการ O₂ มารวมที่ <strong>สีน้ำเงินและแดง</strong><br>สรุป: photosynthesis เกิดสูงสุดที่แสงน้ำเงินและแดง → <strong>Action spectrum ของ chlorophyll</strong><br>💡 เป็นการทดลอง <strong>ในร่างกาย (in vivo)</strong> ครั้งแรกของ action spectrum</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — Blackman</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Blackman (1905) ค้นพบอะไรเกี่ยวกับ photosynthesis?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เสนอ <strong>Limiting Factor Concept</strong> — อัตรา photosynthesis ถูกจำกัดโดย <strong>ปัจจัยที่น้อยที่สุด</strong><br>ทดลองด้วยแสงเข้ม + CO₂ ต่ำ → จำกัดที่ CO₂<br>เพิ่มแสง → ไม่ช่วย ต้องเพิ่ม CO₂ ถึงจะได้ผล<br>ยังเสนอว่า photosynthesis แบ่งเป็น <strong>Light reaction (จำกัดด้วยแสง)</strong> และ <strong>Dark reaction (จำกัดด้วย T° และ CO₂)</strong><br>💡 ในเรือนกระจกใช้หลักการนี้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: Calvin's ¹⁴C</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Calvin ใช้ ¹⁴C ค้นพบอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้ ¹⁴CO₂ feed สาหร่าย Chlorella → หยุดปฏิกิริยาที่เวลาต่างกัน → ดูว่า ¹⁴C เข้าสารใดก่อน<br>พบ:<br>(1) วินาทีแรก: 3-PGA (3C) ติด ¹⁴C → ตัวรับแรกของ CO₂<br>(2) ตามด้วย G3P, glucose ฯลฯ<br>สร้าง <strong>Calvin Cycle</strong> ทั้งหมด → Nobel Prize 1961<br>💡 เทคนิคนี้ใช้ได้กับการศึกษา metabolism อื่น ๆ ด้วย</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — การประยุกต์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — Greenhouse</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เรือนกระจกเพิ่มผลผลิตอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ควบคุมปัจจัยทุกอย่าง:<br>(1) <strong>แสง:</strong> LED เสริมในช่วงเมฆมาก<br>(2) <strong>อุณหภูมิ:</strong> ฮีตเตอร์ในฤดูหนาว, พัดลมในฤดูร้อน<br>(3) <strong>CO₂ enrichment:</strong> เพิ่มเป็น 1,000 ppm → photosynthesis ↑ 30%<br>(4) <strong>น้ำ:</strong> drip irrigation<br>(5) <strong>ปุ๋ย:</strong> fertigation<br>(6) ป้องกันแมลง/โรค<br>ผลผลิตสูงกว่าปลูกกลางแจ้ง 5-20 เท่า<br>💡 ใช้ในเนเธอร์แลนด์ ญี่ปุ่น ออสเตรเลีย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — LED grow lights</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> LED grow lights ใช้แสงสีอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้ <strong>แสงน้ำเงิน (450 nm) + แดง (660 nm)</strong> เป็นหลัก — ที่ chlorophyll ดูดได้ดีที่สุด<br>ประโยชน์:<br>- ประหยัดไฟ 50-80% เทียบกับหลอด HID<br>- ปรับสัดส่วน blue:red ได้ตามระยะการเจริญ<br>- เย็น (ไม่ต้องไกลจากพืช)<br>- อายุยาว<br>💡 บางรุ่นมีสีเขียว/UV เพิ่มเล็กน้อยสำหรับ pigment และ secondary metabolites</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — Golden Rice</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Golden Rice แก้ปัญหาอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใส่ยีน <strong>β-carotene synthesis</strong> ในข้าว → ผลิต <strong>vitamin A precursor</strong> → เม็ดข้าวสีทอง<br>แก้ปัญหา <strong>vitamin A deficiency</strong> ในประเทศกำลังพัฒนา → ตาบอด, ตายในเด็ก<br>ปัญหา: ถูกต่อต้านจาก anti-GMO movement → ล่าช้า ~20 ปี<br>เพิ่งอนุมัติในฟิลิปปินส์ (2021), บังกลาเทศ<br>💡 ตัวอย่างของ "GMO เพื่อมนุษยธรรม"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: Algae biofuel</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> สาหร่ายเป็นแหล่งพลังงานทดแทนอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> สาหร่ายขนาดเล็ก (microalgae) ทำ photosynthesis ดูด CO₂ + ผลิต <strong>lipid (น้ำมัน)</strong> → กลั่นเป็น <strong>biodiesel</strong><br>ข้อดี:<br>(1) ผลิตน้ำมันต่อพื้นที่ <strong>10-100 เท่า</strong> ของถั่วเหลือง<br>(2) ปลูกในน้ำเค็ม/ทะเลทราย → ไม่แย่งดินกับอาหาร<br>(3) ดูด CO₂ จากโรงไฟฟ้า → ลดมลพิษ<br>อุปสรรค:<br>- ต้นทุนการเก็บเกี่ยวสูง<br>- ต้องการน้ำสะอาด สารอาหาร<br>💡 อนาคตของ aviation fuel — บินไม่ใช้ฟอสซิล</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>สมการ:</strong> 6 CO₂ + 6 H₂O + แสง → C₆H₁₂O₆ + 6 O₂<br>
        <strong>2 ขั้น:</strong> Light (thylakoid) · Calvin (stroma)<br>
        <strong>ใบ:</strong> Palisade (แสง) + Spongy (แก๊ส) + Vein (ลำเลียง)<br>
        <strong>Pigments:</strong> Chlorophyll a/b · Carotenoids (accessory + photoprotection)<br>
        <strong>Stomata:</strong> K⁺ pump → เปิด · ABA → ปิด<br>
        <strong>C₃:</strong> RuBisCO · C₄: PEP + Kranz · CAM: กลางคืน<br>
        <strong>NPP:</strong> ป่าฝน &gt; ปะการัง &gt; ป่าผลัดใบ &gt; ทุ่งหญ้า &gt; ทะเลทราย
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>ใบเขียวเพราะดูดแสงเขียว</td><td>ใบเขียวเพราะ <strong>สะท้อน</strong> แสงเขียว</td></tr>
        <tr><td>O₂ ที่ปล่อยมาจาก CO₂</td><td>มาจาก <strong>H₂O</strong> (photolysis ที่ PSII)</td></tr>
        <tr><td>Dark reaction เกิดในที่มืด</td><td>"Dark" = ไม่ต้องใช้แสงตรง — แต่ต้องการ ATP/NADPH จาก light reaction</td></tr>
        <tr><td>พืชหายใจเฉพาะกลางคืน</td><td>พืชหายใจ <strong>ตลอดเวลา</strong> — กลางวัน photosynthesis ปกครอง</td></tr>
        <tr><td>RuBisCO เป็นเอนไซม์เร็ว</td><td>ช้ามาก (~3 CO₂/sec) — จึงต้องมีปริมาณมาก (50% ของโปรตีนในใบ)</td></tr>
        <tr><td>C₃ ดีกว่า C₄</td><td>ขึ้นกับสภาพ — C₄ ดีในที่ร้อนแห้ง</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> เห็น "Kranz" → C₄ · "Malate กลางคืน" → CAM · "RuBisCO + O₂" → photorespiration ใน C₃</div>
    </div>
  `,
  b4c16: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> ภาพรวม: สืบพันธุ์อาศัยเพศ vs ไม่อาศัยเพศ<br>
        <strong>02</strong> โครงสร้างดอก (ครบส่วน vs ขาดส่วน, สมบูรณ์เพศ vs แยกเพศ)<br>
        <strong>03</strong> Microsporogenesis &amp; Megasporogenesis<br>
        <strong>04</strong> Pollination (ลม · แมลง · นก · น้ำ)<br>
        <strong>05</strong> ปฏิสนธิคู่ (Double Fertilization)<br>
        <strong>06</strong> เมล็ด · ผล · การกระจาย<br>
        <strong>07</strong> การงอกของเมล็ด<br>
        <strong>08</strong> การสืบพันธุ์ไม่อาศัยเพศและการประยุกต์
      </div>
      <div class="tip-box">💡 พืชดอกเป็นกลุ่มที่ <strong>สำเร็จที่สุด</strong> ในวิวัฒนาการ (~300,000 สปีชีส์) — เพราะมีกลไกการสืบพันธุ์ที่หลากหลายและการกระจายเมล็ดที่มีประสิทธิภาพ</div>
    </div>

    <!-- 1. Overview -->
    <div class="content-section">
      <h3>🌸 ภาพรวมการสืบพันธุ์ของพืช</h3>
      <table class="content-table">
        <tr><th>ลักษณะ</th><th>อาศัยเพศ (Sexual)</th><th>ไม่อาศัยเพศ (Asexual)</th></tr>
        <tr><td>หน่วยพื้นฐาน</td><td>Gamete (n) — sperm + egg</td><td>เซลล์ร่างกาย (2n)</td></tr>
        <tr><td>ลูก</td><td>ต่างจากพ่อแม่ (variation)</td><td>เหมือนพ่อแม่ 100% (clone)</td></tr>
        <tr><td>ข้อดี</td><td>มี genetic diversity → adapt ได้</td><td>เร็ว ประหยัด ไม่ต้องหาคู่</td></tr>
        <tr><td>ข้อเสีย</td><td>ต้องการพ่อแม่ 2 ตัว</td><td>ไม่มี variation → เสี่ยงโรค</td></tr>
        <tr><td>ตัวอย่าง</td><td>ดอก → ผล → เมล็ด</td><td>ปักชำ · ตอน · เพาะเลี้ยงเนื้อเยื่อ</td></tr>
      </table>
      <h4>Alternation of Generations</h4>
      <p>พืชมีวงจรชีวิตที่สลับ 2 ระยะ:</p>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Sporophyte (2n):</strong> ต้นใหญ่ที่เราเห็น — ผลิต spores (n) โดย meiosis</li>
        <li><span class="li-dot sc-dot"></span><strong>Gametophyte (n):</strong> ใน angiosperms เล็กมาก — ผลิต gametes (n) โดย mitosis</li>
        <li><span class="li-dot sc-dot"></span>Pollen grain = male gametophyte · Embryo sac = female gametophyte</li>
      </ul>
      <div class="note-box">⚠️ ใน angiosperms gametophyte เล็กและพึ่งพา sporophyte — ต่างจากมอสที่ gametophyte ใหญ่</div>
    </div>

    <!-- 2. Flower Structure + SVG -->
    <div class="content-section">
      <h3>🌺 โครงสร้างดอก</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">โครงสร้างดอกครบส่วน (Complete Flower)</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Receptacle -->
            <ellipse cx="260" cy="260" rx="60" ry="15" fill="#92400E"/>
            <!-- Sepal -->
            <path d="M 200 250 Q 180 220 200 195" fill="#065F46" stroke="#065F46"/>
            <path d="M 320 250 Q 340 220 320 195" fill="#065F46" stroke="#065F46"/>
            <text x="155" y="225" font-weight="700" fill="#065F46">Sepal</text>
            <text x="155" y="240" font-size="9" fill="#065F46">(กลีบเลี้ยง)</text>

            <!-- Petals (4-5 surrounding) -->
            <g fill="#F472B6" stroke="#9F1239" stroke-width="1.5">
              <ellipse cx="200" cy="180" rx="25" ry="40" transform="rotate(-30 200 180)"/>
              <ellipse cx="320" cy="180" rx="25" ry="40" transform="rotate(30 320 180)"/>
              <ellipse cx="240" cy="140" rx="22" ry="35" transform="rotate(-15 240 140)"/>
              <ellipse cx="280" cy="140" rx="22" ry="35" transform="rotate(15 280 140)"/>
            </g>
            <text x="130" y="165" font-weight="700" fill="#9F1239">Petal</text>
            <text x="130" y="180" font-size="9" fill="#9F1239">(กลีบดอก)</text>

            <!-- Stamens (multiple) -->
            <g>
              <!-- Filaments -->
              <line x1="225" y1="220" x2="220" y2="160" stroke="#F59E0B" stroke-width="2"/>
              <line x1="245" y1="220" x2="240" y2="150" stroke="#F59E0B" stroke-width="2"/>
              <line x1="280" y1="220" x2="285" y2="150" stroke="#F59E0B" stroke-width="2"/>
              <line x1="300" y1="220" x2="305" y2="160" stroke="#F59E0B" stroke-width="2"/>
              <!-- Anthers -->
              <ellipse cx="220" cy="155" rx="6" ry="10" fill="#FBBF24" stroke="#92400E"/>
              <ellipse cx="240" cy="145" rx="6" ry="10" fill="#FBBF24" stroke="#92400E"/>
              <ellipse cx="285" cy="145" rx="6" ry="10" fill="#FBBF24" stroke="#92400E"/>
              <ellipse cx="305" cy="155" rx="6" ry="10" fill="#FBBF24" stroke="#92400E"/>
            </g>
            <text x="380" y="155" font-weight="700" fill="#92400E">Stamen (เพศผู้)</text>
            <text x="380" y="170" font-size="9" fill="#92400E">Anther + Filament</text>

            <!-- Pistil (center) -->
            <!-- Stigma -->
            <ellipse cx="260" cy="100" rx="14" ry="8" fill="#7C3AED" stroke="#5B21B6" stroke-width="1.5"/>
            <text x="370" y="98" font-weight="700" fill="#5B21B6">Stigma</text>
            <text x="370" y="113" font-size="9" fill="#5B21B6">(รับเรณู)</text>
            <!-- Style -->
            <line x1="260" y1="108" x2="260" y2="200" stroke="#5B21B6" stroke-width="3"/>
            <text x="370" y="155" font-weight="700" fill="#5B21B6">Style</text>
            <!-- Ovary -->
            <ellipse cx="260" cy="225" rx="25" ry="20" fill="#A78BFA" stroke="#5B21B6" stroke-width="2"/>
            <text x="370" y="225" font-weight="700" fill="#5B21B6">Ovary</text>
            <text x="370" y="240" font-size="9" fill="#5B21B6">(มี ovules)</text>
            <!-- Ovules inside -->
            <circle cx="252" cy="225" r="4" fill="white" stroke="#5B21B6"/>
            <circle cx="265" cy="225" r="4" fill="white" stroke="#5B21B6"/>

            <text x="60" y="280" font-size="9" fill="#1E293B">Pistil (เพศเมีย) = Stigma + Style + Ovary</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: ดอกครบส่วน (Complete Flower) มี 4 ส่วน: Sepal · Petal · Stamen · Pistil</div>
      </div>

      <table class="content-table">
        <tr><th>ส่วน</th><th>หน้าที่</th></tr>
        <tr><td>Sepal (กลีบเลี้ยง)</td><td>ปกป้องดอกตอนตูม สีเขียวปกติ</td></tr>
        <tr><td>Petal (กลีบดอก)</td><td>ดึงดูดผู้ผสมเกสร (แมลง นก) สีสด</td></tr>
        <tr><td>Stamen (เกสรเพศผู้)</td><td>Anther (สร้าง pollen) + Filament (ก้าน)</td></tr>
        <tr><td>Pistil/Carpel (เกสรเพศเมีย)</td><td>Stigma (รับ pollen) + Style + Ovary (มี ovules)</td></tr>
      </table>
      <h4>ประเภทดอก</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Complete (ครบส่วน):</strong> มีครบ 4 ส่วน — เช่น ดอกชบา</li>
        <li><span class="li-dot sc-dot"></span><strong>Incomplete (ขาดส่วน):</strong> ขาดส่วนใดส่วนหนึ่ง — เช่น ดอกหญ้า (ไม่มี petal)</li>
        <li><span class="li-dot sc-dot"></span><strong>Perfect (สมบูรณ์เพศ):</strong> มีทั้ง stamen และ pistil — เช่น ส่วนใหญ่</li>
        <li><span class="li-dot sc-dot"></span><strong>Imperfect (แยกเพศ):</strong> มีเพศเดียว — มะละกอ ข้าวโพด</li>
        <li><span class="li-dot sc-dot"></span><strong>Monoecious:</strong> ดอกเพศผู้และเมียบนต้นเดียวกัน — ข้าวโพด</li>
        <li><span class="li-dot sc-dot"></span><strong>Dioecious:</strong> ดอกเพศผู้และเมียอยู่คนละต้น — มะละกอ ปาล์มน้ำมัน</li>
      </ul>
    </div>

    <!-- 3. Gamete Formation -->
    <div class="content-section">
      <h3>🧬 การสร้าง Gametes ในพืช</h3>
      <h4>Microsporogenesis (ผลิต pollen)</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li>ใน <strong>Anther</strong> มี <strong>microsporocyte (2n)</strong></li>
        <li>Meiosis → 4 <strong>microspores (n)</strong></li>
        <li>แต่ละ microspore → mitosis ครั้งที่ 1 → 2 nuclei: <strong>generative + tube nucleus</strong></li>
        <li>เกิด <strong>Pollen grain</strong> (= male gametophyte) ที่มี 2 nuclei</li>
        <li>หลังตกบน stigma: generative nucleus แบ่ง mitosis อีกครั้ง → <strong>2 sperm cells</strong></li>
      </ol>
      <h4>Megasporogenesis (ผลิต egg)</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li>ใน <strong>Ovule</strong> มี <strong>megasporocyte (2n)</strong></li>
        <li>Meiosis → 4 <strong>megaspores (n)</strong> — 3 ตัวตาย เหลือ 1 ใหญ่</li>
        <li>Megaspore ที่รอด แบ่ง mitosis 3 ครั้ง → 8 nuclei</li>
        <li>เกิด <strong>Embryo sac</strong> (= female gametophyte) มี 7 cells / 8 nuclei:</li>
        <ul style="margin-left:18px;">
          <li><span class="li-dot sc-dot"></span><strong>Egg cell (1 nucleus, n)</strong></li>
          <li><span class="li-dot sc-dot"></span>2 synergids (ช่วยรับ pollen tube)</li>
          <li><span class="li-dot sc-dot"></span><strong>Central cell (2 polar nuclei, 2n)</strong></li>
          <li><span class="li-dot sc-dot"></span>3 antipodals (ตายภายหลัง)</li>
        </ul>
      </ol>
      <div class="tip-box">💡 จึง embryo sac มี <strong>nuclei รวม 8 ตัว ใน 7 cells</strong> — central cell มี 2 nuclei เพื่อเตรียมรับ sperm ตัวที่ 2</div>
    </div>

    <!-- 4. Pollination + SVG -->
    <div class="content-section">
      <h3>🍯 การถ่ายเรณู (Pollination)</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">วิธีการถ่ายเรณู 4 แบบ</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Wind -->
            <text x="80" y="55" text-anchor="middle" font-weight="700" fill="#1E40AF">ลม</text>
            <text x="80" y="68" text-anchor="middle" font-size="9" fill="#1E40AF">Anemophily</text>
            <text x="80" y="100" text-anchor="middle" font-size="20">💨</text>
            <text x="80" y="135" text-anchor="middle" font-size="9" fill="#1E40AF">ดอกเล็ก</text>
            <text x="80" y="148" text-anchor="middle" font-size="9" fill="#1E40AF">ไม่มีน้ำหวาน</text>
            <text x="80" y="161" text-anchor="middle" font-size="9" fill="#1E40AF">เรณูเบาเยอะ</text>
            <text x="80" y="180" text-anchor="middle" font-size="9" font-weight="700" fill="#1E40AF">ข้าว ข้าวโพด</text>

            <!-- Insect -->
            <text x="200" y="55" text-anchor="middle" font-weight="700" fill="#B45309">แมลง</text>
            <text x="200" y="68" text-anchor="middle" font-size="9" fill="#B45309">Entomophily</text>
            <text x="200" y="100" text-anchor="middle" font-size="20">🐝</text>
            <text x="200" y="135" text-anchor="middle" font-size="9" fill="#B45309">สี/กลิ่นเด่น</text>
            <text x="200" y="148" text-anchor="middle" font-size="9" fill="#B45309">มีน้ำหวาน</text>
            <text x="200" y="161" text-anchor="middle" font-size="9" fill="#B45309">เรณูเหนียว</text>
            <text x="200" y="180" text-anchor="middle" font-size="9" font-weight="700" fill="#B45309">ชบา กล้วยไม้</text>

            <!-- Bird -->
            <text x="320" y="55" text-anchor="middle" font-weight="700" fill="#9F1239">นก</text>
            <text x="320" y="68" text-anchor="middle" font-size="9" fill="#9F1239">Ornithophily</text>
            <text x="320" y="100" text-anchor="middle" font-size="20">🐦</text>
            <text x="320" y="135" text-anchor="middle" font-size="9" fill="#9F1239">สีแดง</text>
            <text x="320" y="148" text-anchor="middle" font-size="9" fill="#9F1239">น้ำหวานมาก</text>
            <text x="320" y="161" text-anchor="middle" font-size="9" fill="#9F1239">ไม่มีกลิ่น</text>
            <text x="320" y="180" text-anchor="middle" font-size="9" font-weight="700" fill="#9F1239">ชงโค หมัน</text>

            <!-- Water -->
            <text x="440" y="55" text-anchor="middle" font-weight="700" fill="#06B6D4">น้ำ</text>
            <text x="440" y="68" text-anchor="middle" font-size="9" fill="#06B6D4">Hydrophily</text>
            <text x="440" y="100" text-anchor="middle" font-size="20">💧</text>
            <text x="440" y="135" text-anchor="middle" font-size="9" fill="#06B6D4">ดอกใต้น้ำ</text>
            <text x="440" y="148" text-anchor="middle" font-size="9" fill="#06B6D4">เรณูลอยน้ำ</text>
            <text x="440" y="161" text-anchor="middle" font-size="9" fill="#06B6D4">น้อย (พบยาก)</text>
            <text x="440" y="180" text-anchor="middle" font-size="9" font-weight="700" fill="#06B6D4">สาหร่ายหางกระรอก</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: 4 วิธีหลักของการถ่ายเรณู</div>
      </div>

      <h4>การถ่ายเรณู (Pollination) 2 ประเภท</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Self-pollination (ผสมตัวเอง):</strong> Pollen จาก stamen → stigma ของดอกเดียวกัน/ต้นเดียวกัน — เร็ว แต่ไม่มี variation</li>
        <li><span class="li-dot sc-dot"></span><strong>Cross-pollination (ผสมข้าม):</strong> Pollen จากต้นอื่น — มี variation มากกว่า → ลูกแข็งแรง</li>
      </ul>
      <h4>กลไกป้องกัน Self-pollination</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Dichogamy:</strong> Anther และ Stigma สุกคนละเวลา</li>
        <li><span class="li-dot sc-dot"></span><strong>Self-incompatibility:</strong> Pollen ของตัวเองไม่งอกบน stigma ของตัวเอง (มียีนตรวจสอบ)</li>
        <li><span class="li-dot sc-dot"></span><strong>Heterostyly:</strong> ดอกมี style ยาว/สั้น ในต้นต่างกัน</li>
        <li><span class="li-dot sc-dot"></span><strong>Dioecious:</strong> ดอกเพศผู้-เมียคนละต้น</li>
      </ul>
      <div class="note-box">⚠️ <strong>ผึ้งและ pollinators:</strong> ลดจำนวนทั่วโลก (Colony Collapse Disorder) → กระทบการผลิตอาหาร 1/3 ของโลก ต้องการ pollinators</div>
    </div>

    <!-- 5. Double Fertilization + SVG -->
    <div class="content-section">
      <h3>💕 ปฏิสนธิคู่ (Double Fertilization)</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Double Fertilization — เฉพาะพืชดอก</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Stigma -->
            <ellipse cx="80" cy="60" rx="30" ry="12" fill="#7C3AED" stroke="#5B21B6"/>
            <text x="80" y="48" text-anchor="middle" font-size="9" font-weight="700" fill="#5B21B6">Stigma</text>

            <!-- Pollen grain -->
            <circle cx="60" cy="40" r="8" fill="#FBBF24" stroke="#92400E"/>
            <text x="35" y="35" font-size="9" font-weight="700" fill="#92400E">Pollen</text>

            <!-- Pollen tube -->
            <path d="M 80 70 Q 100 100 130 130 Q 200 180 280 200" stroke="#5B21B6" stroke-width="2.5" fill="none" stroke-dasharray="3 2"/>

            <!-- Sperm 1 + 2 traveling -->
            <circle cx="180" cy="160" r="6" fill="#3B82F6"/>
            <text x="180" y="164" text-anchor="middle" font-size="7" fill="white" font-weight="700">s1</text>
            <circle cx="200" cy="170" r="6" fill="#3B82F6"/>
            <text x="200" y="174" text-anchor="middle" font-size="7" fill="white" font-weight="700">s2</text>

            <!-- Embryo sac -->
            <ellipse cx="370" cy="180" rx="80" ry="50" fill="#FFE4E6" stroke="#9F1239" stroke-width="2"/>
            <text x="370" y="130" text-anchor="middle" font-size="9" font-weight="700" fill="#9F1239">Embryo Sac</text>

            <!-- Egg cell + synergids -->
            <circle cx="320" cy="180" r="14" fill="#10B981" stroke="#065F46" stroke-width="1.5"/>
            <text x="320" y="184" text-anchor="middle" font-size="9" font-weight="700" fill="white">Egg</text>
            <text x="320" y="210" text-anchor="middle" font-size="8" fill="#065F46">n</text>

            <!-- Central cell with 2 polar nuclei -->
            <ellipse cx="395" cy="180" rx="22" ry="18" fill="#FBBF24" stroke="#92400E" stroke-width="1.5"/>
            <circle cx="385" cy="180" r="5" fill="white" stroke="#92400E"/>
            <circle cx="405" cy="180" r="5" fill="white" stroke="#92400E"/>
            <text x="395" y="160" text-anchor="middle" font-size="8" fill="#92400E">2 polar nuclei</text>
            <text x="395" y="210" text-anchor="middle" font-size="8" fill="#92400E">(2n)</text>

            <!-- Antipodals -->
            <circle cx="440" cy="170" r="5" fill="#F472B6" stroke="#831843"/>
            <circle cx="445" cy="185" r="5" fill="#F472B6" stroke="#831843"/>
            <circle cx="438" cy="200" r="5" fill="#F472B6" stroke="#831843"/>

            <!-- Arrows showing sperm fusion -->
            <path d="M 200 170 L 310 180" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrDF)"/>
            <path d="M 200 170 L 385 180" stroke="#3B82F6" stroke-width="2" marker-end="url(#arrDF)" stroke-dasharray="3 2"/>

            <text x="120" y="220" font-size="9" fill="#065F46">Sperm 1 + Egg → <tspan font-weight="700">Zygote (2n) → Embryo</tspan></text>
            <text x="120" y="235" font-size="9" fill="#B45309">Sperm 2 + 2 polar nuclei → <tspan font-weight="700">Endosperm (3n)</tspan></text>
          </g>
          <defs><marker id="arrDF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6"/></marker></defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: Double Fertilization — Sperm 2 ตัว ไปคนละที่ ได้ embryo (2n) และ endosperm (3n)</div>
      </div>

      <h4>ขั้นตอน</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.95;">
        <li>Pollen ตกบน stigma → ดูดน้ำ → งอก <strong>pollen tube</strong> ลงทาง style</li>
        <li>Pollen tube ติดตามสารเคมีจาก synergids → ผ่าน <strong>micropyle</strong> เข้า ovule</li>
        <li>Tube ปล่อย <strong>sperm 2 ตัว</strong> เข้า embryo sac</li>
        <li><strong>Sperm ตัวที่ 1 (n) + Egg (n) → Zygote (2n)</strong> → Embryo</li>
        <li><strong>Sperm ตัวที่ 2 (n) + 2 polar nuclei (2n) → Endosperm (3n)</strong> → อาหารเลี้ยง embryo</li>
        <li>Antipodals และ synergids สลายไป</li>
      </ol>
      <div class="formula-box">
        <div class="formula-label">ผลของ Double Fertilization</div>
        Ovule &rarr; <strong>Seed</strong> (มี embryo + endosperm + seed coat)<br>
        Ovary &rarr; <strong>Fruit</strong> (ห่อหุ้มเมล็ด)
      </div>
      <div class="tip-box">💡 Double Fertilization <strong>เฉพาะพืชดอก</strong> เท่านั้น — gymnosperms (สนเขา) มี single fertilization และ endosperm เป็น n ไม่ใช่ 3n</div>
    </div>

    <!-- 6. Seed & Fruit -->
    <div class="content-section">
      <h3>🍎 เมล็ด · ผล · การกระจาย</h3>
      <h4>โครงสร้างเมล็ด</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Seed coat (testa):</strong> ป้องกัน (จาก integument ของ ovule)</li>
        <li><span class="li-dot sc-dot"></span><strong>Embryo:</strong> ต้นอ่อน — มี radicle (รากอ่อน), hypocotyl, epicotyl, cotyledons</li>
        <li><span class="li-dot sc-dot"></span><strong>Endosperm:</strong> เก็บอาหาร (ในข้าว ข้าวสาลี ข้าวโพด)</li>
        <li><span class="li-dot sc-dot"></span><strong>Cotyledons (ใบเลี้ยง):</strong> 1 ใบ (monocot) หรือ 2 ใบ (dicot) — ในถั่ว cotyledons เก็บอาหารแทน endosperm</li>
      </ul>
      <h4>ประเภทของผล</h4>
      <table class="content-table">
        <tr><th>ประเภท</th><th>คำอธิบาย</th><th>ตัวอย่าง</th></tr>
        <tr><td>Simple fruit</td><td>จาก 1 ovary, 1 ดอก</td><td>มะม่วง · องุ่น · มะเขือเทศ</td></tr>
        <tr><td>Aggregate fruit</td><td>จาก หลาย carpels ใน 1 ดอก</td><td>สตรอเบอร์รี · น้อยหน่า · ราสเบอร์รี</td></tr>
        <tr><td>Multiple fruit</td><td>จากหลายดอกในช่อ</td><td>สับปะรด · ขนุน · มะหาด</td></tr>
        <tr><td>Accessory fruit (เทียม)</td><td>ส่วนอื่นของดอกร่วมเป็นเนื้อผล</td><td>แอปเปิ้ล · สาลี่ · สตรอเบอร์รี</td></tr>
      </table>
      <h4>การกระจายเมล็ด</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>ลม:</strong> เมล็ดเบา/มีปีก — เมเปิล หญ้า dandelion</li>
        <li><span class="li-dot sc-dot"></span><strong>น้ำ:</strong> เมล็ดลอย — มะพร้าว</li>
        <li><span class="li-dot sc-dot"></span><strong>สัตว์ (Endozoochory):</strong> ผลกินได้ → ผ่านลำไส้ → ขับเมล็ดออก</li>
        <li><span class="li-dot sc-dot"></span><strong>สัตว์ (Epizoochory):</strong> เกาะติดขน/ขา — ตาผีบ้า ตำลึงตำมูล</li>
        <li><span class="li-dot sc-dot"></span><strong>กลไกพืช:</strong> เมล็ดยิงออก — ถั่ว ledebouriella, สังกรณี</li>
      </ul>
      <div class="note-box">⚠️ การกระจายช่วย <strong>ลดการแข่งขัน</strong> กับต้นแม่ + <strong>ขยายขอบเขต</strong> ของสปีชีส์</div>
    </div>

    <!-- 7. Germination -->
    <div class="content-section">
      <h3>🌱 การงอกของเมล็ด</h3>
      <h4>เงื่อนไขที่ต้องการ</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>น้ำ:</strong> ดูดเข้า → เมล็ดบวม → เอนไซม์ทำงาน</li>
        <li><span class="li-dot sc-dot"></span><strong>O₂:</strong> สำหรับการหายใจ → ผลิต ATP</li>
        <li><span class="li-dot sc-dot"></span><strong>อุณหภูมิเหมาะสม:</strong> มักเป็น 20-30°C (ขึ้นอยู่กับชนิด)</li>
        <li><span class="li-dot sc-dot"></span><strong>แสง (บางชนิด):</strong> เมล็ดผักกาด ดอกหญ้า ต้องการแสง (positive photoblastism)</li>
      </ul>
      <h4>ขั้นตอนการงอก</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li><strong>Imbibition:</strong> เมล็ดดูดน้ำ → บวม → seed coat แตก</li>
        <li><strong>การกระตุ้นเอนไซม์:</strong> Gibberellin (GA) → α-amylase ย่อยแป้งใน endosperm → กลูโคส</li>
        <li><strong>การหายใจเซลล์:</strong> embryo ใช้กลูโคส → ATP → เจริญ</li>
        <li><strong>Radicle (รากอ่อน) งอกออก</strong>ก่อน (positive gravitropism)</li>
        <li><strong>Shoot (ยอด)</strong>งอกขึ้น (negative gravitropism + positive phototropism)</li>
        <li>ใบเลี้ยง (cotyledons) คลี่ออก → เริ่มสังเคราะห์แสง</li>
      </ol>
      <h4>Hypogeal vs Epigeal Germination</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Hypogeal:</strong> Cotyledons อยู่ใต้ดิน — ข้าว ข้าวโพด ถั่วลันเตา</li>
        <li><span class="li-dot sc-dot"></span><strong>Epigeal:</strong> Cotyledons ออกเหนือดิน — ถั่วเหลือง พริก แตงโม</li>
      </ul>
      <h4>Dormancy (การพักตัว)</h4>
      <p>เมล็ดบางชนิดต้องผ่านการ "ปลุก" ก่อนงอก:</p>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Scarification:</strong> ทำให้ seed coat บาง (ขัด แช่กรด)</li>
        <li><span class="li-dot sc-dot"></span><strong>Stratification:</strong> แช่เย็น (แอปเปิ้ล สน)</li>
        <li><span class="li-dot sc-dot"></span><strong>ไฟไหม้:</strong> Eucalyptus, ต้นสน — เมล็ดงอกหลังป่าไหม้</li>
      </ul>
      <div class="tip-box">💡 GA ในการต้มเบียร์: ใช้ปลุก barley ให้ผลิต α-amylase → แตกแป้งเป็นน้ำตาล → ยีสต์หมัก</div>
    </div>

    <!-- 8. Asexual + Applications -->
    <div class="content-section">
      <h3>🌿 การสืบพันธุ์ไม่อาศัยเพศและการประยุกต์</h3>
      <h4>การสืบพันธุ์ไม่อาศัยเพศตามธรรมชาติ</h4>
      <table class="content-table">
        <tr><th>วิธี</th><th>คำอธิบาย</th><th>ตัวอย่าง</th></tr>
        <tr><td>Rhizome (เหง้า)</td><td>ลำต้นใต้ดินแนวนอน</td><td>ขิง ข่า หญ้าแฝก</td></tr>
        <tr><td>Stolon (ไหล)</td><td>ลำต้นเหนือดินยาว</td><td>สตรอเบอร์รี ผักบุ้ง</td></tr>
        <tr><td>Tuber (หัว)</td><td>ปลายเหง้าที่บวม</td><td>มันฝรั่ง (มีตา)</td></tr>
        <tr><td>Bulb (หัวลำต้นสั้น)</td><td>ใบหนาเก็บอาหาร</td><td>หอม กระเทียม</td></tr>
        <tr><td>Corm</td><td>ลำต้นใต้ดินสั้น พอง</td><td>เผือก แห้ว</td></tr>
        <tr><td>Plantlet</td><td>ใบสร้างต้นใหม่</td><td>คว่ำตายหงายเป็น (kalanchoe)</td></tr>
        <tr><td>Apomixis</td><td>สร้างเมล็ดโดยไม่ปฏิสนธิ</td><td>แดนดิไลออน</td></tr>
      </table>
      <h4>การประยุกต์ในเกษตรกรรม</h4>
      <table class="content-table">
        <tr><th>เทคนิค</th><th>หลักการ</th><th>ใช้กับ</th></tr>
        <tr><td>ปักชำ (Cutting)</td><td>ตัดกิ่ง/ใบ → สร้างราก</td><td>กุหลาบ ดาวเรือง</td></tr>
        <tr><td>ตอนกิ่ง (Air layering)</td><td>ลอกเปลือก + ดินชื้น → ราก</td><td>มะม่วง ขนุน</td></tr>
        <tr><td>เสียบยอด (Grafting)</td><td>เชื่อม cambium 2 ต้น</td><td>ทุเรียน ส้ม องุ่น</td></tr>
        <tr><td>ติดตา (Budding)</td><td>ใส่ตาเดียวลงต้นอื่น</td><td>กุหลาบ ส้ม</td></tr>
        <tr><td>เพาะเลี้ยงเนื้อเยื่อ (Tissue culture)</td><td>เลี้ยงเซลล์/ชิ้นในวุ้น</td><td>กล้วยไม้ ปาล์มน้ำมัน</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>ข้อดี:</strong> ได้พันธุ์เหมือนต้นแม่ 100% · ขยายเร็ว · ออกดอกผลเร็ว<br><strong>ข้อเสีย:</strong> ขาด variation → เสี่ยงถ้าโรคใหม่</div>
    </div>

    <!-- ============ 32 PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — ภาพรวมและโครงสร้างดอก</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — Sexual vs Asexual</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เปรียบเทียบข้อดี-ข้อเสียของ sexual และ asexual reproduction</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Sexual:</strong> +variation (adapt ได้, ต้านโรค) · −ต้องการคู่ ช้า ใช้พลังงาน<br><strong>Asexual:</strong> +เร็ว ประหยัด ไม่ต้องหาคู่ · −ไม่มี variation ทั้งประชากรเสี่ยงถ้ามีโรค<br>💡 พืชหลายชนิดใช้ทั้ง 2 แบบสลับกันตามสถานการณ์</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — 4 ส่วนของดอก</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุ 4 ส่วนหลักของดอกครบส่วน และหน้าที่</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(1) <strong>Sepal:</strong> ปกป้องดอกตูม<br>(2) <strong>Petal:</strong> ดึงดูดผู้ผสมเกสร<br>(3) <strong>Stamen:</strong> เพศผู้ — Anther สร้าง pollen<br>(4) <strong>Pistil:</strong> เพศเมีย — Stigma + Style + Ovary<br>💡 ครบ 4 = Complete · ขาด = Incomplete</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — Monoecious vs Dioecious</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Monoecious และ Dioecious ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Monoecious (mono = 1 บ้าน):</strong> ดอกเพศผู้และเมียบน <strong>ต้นเดียวกัน</strong> — ข้าวโพด (ตัวผู้บนยอด ตัวเมียที่ฝัก)<br><strong>Dioecious (di = 2 บ้าน):</strong> ดอกเพศผู้และเมียอยู่ <strong>คนละต้น</strong> — มะละกอ ปาล์มน้ำมัน อินทผลัม<br>💡 จึงปลูกอินทผลัมต้องมีต้นผู้ 1 ต้น ต่อต้นเมีย 50 ต้น เพื่อผสมเกสร</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: Alternation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Sporophyte และ Gametophyte ใน angiosperms ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Sporophyte (2n):</strong> <strong>ต้นใหญ่</strong>ที่เราเห็น — ผลิต spores โดย meiosis ใน anther และ ovary<br><strong>Gametophyte (n):</strong> <strong>เล็กมาก</strong>:<br>- Male gametophyte = <strong>Pollen grain</strong> (2-3 cells)<br>- Female gametophyte = <strong>Embryo sac</strong> (7 cells, 8 nuclei)<br>💡 ใน mosses gametophyte ใหญ่ครอบงำ — ใน angiosperms sporophyte ครอบงำ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — Gamete Formation</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — Microsporogenesis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Pollen grain เกิดจากอะไร และมีกี่ nuclei?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> microsporocyte (2n) → meiosis → 4 microspores (n) → แต่ละ microspore แบ่ง mitosis → <strong>Pollen grain (2 nuclei: generative + tube)</strong><br>หลังตกบน stigma: generative nucleus แบ่งอีกครั้ง → <strong>2 sperm cells</strong><br>💡 จึง pollen mature มี 3 nuclei: 1 tube + 2 sperm</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — Megasporogenesis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ใน Embryo sac มี cells อะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>7 cells, 8 nuclei</strong>:<br>(1) 1 Egg cell (n)<br>(2) 2 Synergids (n)<br>(3) 1 Central cell ที่มี <strong>2 polar nuclei (2n)</strong><br>(4) 3 Antipodals (n) — สลายภายหลัง<br>💡 จำว่า 1 + 2 + 1 (2 nuclei) + 3 = 7 cells</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — Synergids</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Synergids ทำหน้าที่อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> 2 cells ข้างเคียง egg cell — <strong>ปล่อยสารเคมีดึงดูด pollen tube</strong> ให้เข้าทาง micropyle<br>หลัง pollen tube มาถึง → synergid 1 ตัว <strong>ตาย</strong> → เปิดทางให้ sperm เข้า<br>💡 synergids เหมือน "guide" และ "self-sacrifice"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: Pollen viability</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Pollen ของสน vs angiosperms ต่างกันที่อายุการรอดอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>สน (gymnosperm):</strong> Pollen รอด <strong>นานหลายเดือน-ปี</strong> — ใช้ลมเป็นหลัก ต้องการระยะเวลานานในการไปถึงเมีย<br><strong>Angiosperms:</strong> Pollen รอดเพียง <strong>ชั่วโมง-วัน</strong> — ใช้แมลงพาส่งตรง เลือกได้<br>💡 ผึ้งทำให้การถ่ายเรณูเร็วขึ้น → angiosperms ครองโลก ~140 ล้านปีที่ผ่านมา</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — Pollination</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — Self vs Cross</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Self-pollination และ Cross-pollination ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Self:</strong> Pollen จาก stamen → stigma ของ <strong>ดอกเดียวกัน/ต้นเดียวกัน</strong> — เร็ว ไม่ต้องการ pollinator แต่ <strong>ไม่มี variation</strong><br><strong>Cross:</strong> จาก <strong>ต้นอื่น</strong> — มี variation มาก ลูกแข็งแรง (hybrid vigor)<br>💡 พืชส่วนใหญ่ <strong>ป้องกัน self-pollination</strong> ด้วยกลไกต่าง ๆ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — Wind-pollinated</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ลักษณะของดอกที่ผสมโดยลม</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>- กลีบดอกเล็ก/ไม่มี<br>- ไม่มี <strong>น้ำหวาน</strong> (ลมไม่ต้องตอบแทน)<br>- เรณู <strong>เบา จำนวนมาก</strong><br>- Stigma <strong>เป็นขนยาว</strong> เพื่อดักจับ<br>- Anther ยื่นออกนอกดอก<br>ตัวอย่าง: ข้าว ข้าวโพด หญ้า ต้นโอ๊ก<br>💡 พบในสภาพแวดล้อมที่ลมแรง — ทุ่งหญ้า, ป่าผลัดใบ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — Insect-pollinated</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ดอกผึ้งและดอกผีเสื้อต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>ดอกผึ้ง:</strong> น้ำเงิน/ม่วง/เหลือง (ผึ้งเห็น UV) · มี landing pad · กลิ่นหวาน<br><strong>ดอกผีเสื้อ:</strong> สีสด แดง ส้ม · กลีบดอกบาน · น้ำหวานในก้านยาว (จับคู่กับงวงผีเสื้อ)<br><strong>ดอกผีเสื้อกลางคืน:</strong> สีขาว · กลิ่นแรง · ออกกลางคืน · ใหญ่<br>💡 Coevolution → ดอกและ pollinator วิวัฒนาการคู่กัน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: Bee decline</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม Colony Collapse Disorder (ผึ้งหายไป) เป็นปัญหาต่อมนุษย์?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>1/3 ของอาหารมนุษย์</strong> ขึ้นกับ pollinators โดยเฉพาะผึ้ง — แอปเปิ้ล อัลมอนด์ ผลไม้ ผัก เมล็ดพืชน้ำมัน<br>สาเหตุ:<br>(1) ยาฆ่าแมลง (neonicotinoids)<br>(2) ปรสิต Varroa mites<br>(3) เปลี่ยน land use<br>(4) Climate change<br>การแก้: ลด pesticides, สร้าง bee garden, สนับสนุน beekeepers<br>💡 California ขนผึ้งจากทั่วประเทศไปผสมอัลมอนด์ทุกปี</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — Double Fertilization</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — Double Fertilization</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Double Fertilization ใน angiosperms เกิดอะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Sperm 2 ตัวเข้าสู่ embryo sac:<br>(1) <strong>Sperm 1 + Egg (n) → Zygote (2n) → Embryo</strong><br>(2) <strong>Sperm 2 + 2 polar nuclei (2n) → Endosperm (3n)</strong> — อาหารเลี้ยง<br>💡 จึงเรียก "Double" — มี 2 ครั้งของ fertilization</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — Endosperm 3n</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม endosperm เป็น 3n?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Sperm (n) + 2 polar nuclei (n + n) = <strong>3n</strong><br>3n ทำให้แบ่งเซลล์ได้เร็ว → endosperm พัฒนาเร็วทันใจ → เลี้ยง embryo<br>💡 พืชดอกประหยัด resources — endosperm สร้างเมื่อปฏิสนธิแล้วเท่านั้น ไม่เสียพลังงานเปล่า (ต่าง gymnosperms ที่สร้าง endosperm เผื่อ)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — Pollen tube</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Pollen tube หา egg ได้อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้ <strong>Chemotropism</strong> — <strong>Synergids ปล่อยสารเคมี</strong> (peptides เช่น LURE) → pollen tube ติดตามสารเคมีเข้าทาง <strong>micropyle</strong> → เข้า embryo sac<br>💡 ค้นพบในยุคปี 2000s — ก่อนหน้าเชื่อว่าเป็น random</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: Gymnosperm vs Angiosperm</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เปรียบเทียบการปฏิสนธิและ endosperm ของ gymnosperm vs angiosperm</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Gymnosperm (สนเขา):</strong><br>- Single fertilization (sperm 1 + egg)<br>- Endosperm = <strong>n</strong> (จาก female gametophyte) — สร้างก่อนปฏิสนธิ<br>- ใช้เวลานาน (1-3 ปี)<br><strong>Angiosperm:</strong><br>- Double fertilization<br>- Endosperm = <strong>3n</strong> — สร้างหลังปฏิสนธิเท่านั้น<br>- เร็วกว่า (สัปดาห์-เดือน)<br>💡 Double fertilization เป็น innovation ของพืชดอก — เป็นเหตุที่ครองโลก</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — Seed & Fruit</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — โครงสร้างเมล็ด</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เมล็ดมีอะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> 3 ส่วนหลัก:<br>(1) <strong>Seed coat:</strong> ป้องกัน<br>(2) <strong>Embryo:</strong> ต้นอ่อน (radicle + hypocotyl + epicotyl + cotyledons)<br>(3) <strong>Endosperm:</strong> เก็บอาหาร (3n)<br>💡 ในถั่ว cotyledons เก็บอาหารแทน endosperm → endosperm หมดในเมล็ดสุก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — Fruit types</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> แยกประเภทผล: มะม่วง · สตรอเบอร์รี · สับปะรด</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>มะม่วง:</strong> Simple fruit (จาก 1 ovary)<br><strong>สตรอเบอร์รี:</strong> Aggregate fruit (จากหลาย carpels ใน 1 ดอก — เม็ดเล็ก ๆ คือผลจริง, เนื้อมาจาก receptacle)<br><strong>สับปะรด:</strong> Multiple fruit (จากหลายดอกในช่อรวมกัน)<br>💡 มะเขือเทศ = berry, แอปเปิ้ล = accessory (pome)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — Seed dispersal</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการกระจายเมล็ดสำคัญ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>ลดการแข่งขัน</strong> ของลูกกับต้นแม่และพี่น้อง<br>(2) <strong>ขยายขอบเขต</strong> สปีชีส์<br>(3) หลีกเลี่ยงพื้นที่ที่มีโรคหรือศัตรู<br>(4) เพิ่มโอกาส genetic diversity (gene flow)<br>💡 หลายพืชวิวัฒนาการผลที่อร่อย → สัตว์กิน → กระจายเมล็ดไปไกล</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: Coconut</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> มะพร้าวกระจายไปทั่วทะเลแปซิฟิกได้อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> มะพร้าวมี <strong>เปลือกใย (mesocarp)</strong> ที่ลอยน้ำได้นานหลายเดือน + <strong>ภายในกันน้ำเค็ม</strong><br>ลอยตามกระแสน้ำ ไปเกาะใหม่ → งอกเป็นต้นใหม่<br>เป็นเหตุที่พบมะพร้าวบนเกาะทั่วทะเลแปซิฟิก แม้เกาะที่ไม่มีคน<br>💡 มนุษย์ก็พามะพร้าวไปด้วย — สำคัญในการอพยพ Polynesian</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — Germination</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — เงื่อนไขการงอก</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เมล็ดต้องการอะไรในการงอก?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(1) <strong>น้ำ:</strong> imbibition → เอนไซม์ทำงาน<br>(2) <strong>O₂:</strong> หายใจสร้าง ATP<br>(3) <strong>อุณหภูมิ:</strong> 20-30°C ปกติ<br>(4) <strong>แสง:</strong> บางชนิด (ผักกาด) ต้องการ — บางชนิด (ถั่ว) ไม่ต้องการ<br>💡 จึงเมล็ดอยู่ในที่แห้ง O₂ น้อย → ไม่งอก (เก็บได้)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — GA + amylase</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Gibberellin (GA) ช่วยการงอกอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เมล็ดดูดน้ำ → embryo ปล่อย <strong>GA</strong> → ไปกระตุ้น <strong>aleurone layer</strong> รอบ endosperm → ผลิต <strong>α-amylase</strong><br>α-amylase ย่อย <strong>starch ใน endosperm → glucose</strong> → embryo ใช้เป็นพลังงาน → งอก<br>💡 ใช้ในอุตสาหกรรมเบียร์ — แช่ barley ให้งอกบางส่วน (malt) เพื่อได้ α-amylase</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — Radicle first</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม radicle (รากอ่อน) งอกออกก่อน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพื่อ:<br>(1) <strong>ยึดต้นอ่อน</strong> กับดิน<br>(2) <strong>ดูดน้ำ</strong> ทันที — สำคัญต่อการดำรงชีวิต<br>(3) ดูดธาตุอาหาร<br>Radicle ตอบสนองต่อ <strong>positive gravitropism</strong> → ลงดิน<br>Shoot งอกตามมา → <strong>negative gravitropism + positive phototropism</strong> → ขึ้นหาแสง<br>💡 ทดลองได้: หมุนเมล็ดที่งอก 90° → radicle หาดินลงเสมอ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: Dormancy</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมเมล็ดต้องมี dormancy?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Dormancy ช่วย:<br>(1) <strong>รอเวลาเหมาะสม</strong> — ไม่งอกในฤดูที่จะตาย (เช่น สนรอจนฤดูใบไม้ผลิ)<br>(2) <strong>กระจายเวลา</strong> — ลูกไม่งอกพร้อมกันทั้งหมด ลดการแข่งขัน<br>(3) <strong>ผ่านการเดินทาง</strong> — ผ่านลำไส้สัตว์ (acid scarification ทำให้ seed coat บาง)<br>(4) <strong>รอ disturbance</strong> — เช่น ไฟไหม้ป่า (เมล็ดสนต้องการความร้อน)<br>💡 เมล็ดถั่วบางชนิดมี dormancy &gt; 100 ปี!</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — Asexual</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — รูปแบบ asexual</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุรูปแบบ asexual reproduction ตามธรรมชาติ 4 แบบ</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(1) <strong>Rhizome:</strong> เหง้า — ขิง ขมิ้น<br>(2) <strong>Stolon:</strong> ไหล — สตรอเบอร์รี<br>(3) <strong>Tuber:</strong> หัวมีตา — มันฝรั่ง<br>(4) <strong>Bulb:</strong> หัวลำต้นสั้นใบเก็บอาหาร — หอม กระเทียม<br>เพิ่ม: Corm (เผือก), Plantlet (kalanchoe), Apomixis (แดนดิไลออน)<br>💡 ทั้งหมดสร้างต้นใหม่ที่ <strong>เหมือนพ่อแม่ 100%</strong></div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — Apomixis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Apomixis คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> การสร้าง <strong>เมล็ดโดยไม่มี fertilization</strong> — embryo เกิดจากเซลล์ใน ovule (2n) โดยตรง ไม่ใช่ zygote<br>ลูกเหมือนแม่ 100% (clone)<br>ตัวอย่าง: <strong>Dandelion</strong>, มะม่วงบางพันธุ์ (Mahachanok seed มาจาก apomixis)<br>💡 เกษตรกรชอบ apomixis — รักษาพันธุ์โดยไม่ต้อง vegetative propagation</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — Why kalanchoe</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมต้น "คว่ำตายหงายเป็น" (kalanchoe) ขยายพันธุ์เร็ว?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ขอบใบมี <strong>plantlets</strong> (ต้นเล็ก ๆ พร้อมราก) → ตกลงดิน → งอกเป็นต้นใหม่<br>แต่ละใบสร้างได้ 20-30 plantlets → ขยายเร็ว<br>เป็นรูปแบบ <strong>vegetative reproduction</strong><br>💡 ปัจจุบันถือเป็น invasive species ในหลายประเทศ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: Banana</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมกล้วยที่กินส่วนใหญ่ไม่มีเมล็ด — และทำไมเป็นปัญหา?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> กล้วยพันธุ์ <strong>Cavendish</strong> (ที่ส่งออกทั่วโลก) เป็น <strong>triploid (3n) sterile</strong> → ไม่สามารถผสมพันธุ์ — ขยายโดย <strong>sucker (หน่อ)</strong><br>ผลคือ <strong>ทุกต้นมี DNA เหมือนกันหมด</strong> → ถ้ามีโรคใหม่ → ทั้งโลกเสี่ยงสูญพันธุ์<br>เคยเกิดกับพันธุ์ Gros Michel ที่ถูกโรค Panama disease ล้างหมดในปี 1950s → ปัจจุบัน Cavendish เผชิญ TR4 fungus<br>💡 ขาด genetic diversity = อันตรายในระยะยาว</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — การประยุกต์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — ตอนกิ่ง</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมเราตอนกิ่งมะม่วงแทนปลูกจากเมล็ด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>ได้พันธุ์เดียวกับต้นแม่ 100%</strong> — ไม่มี variation จาก meiosis<br>(2) <strong>ออกผลเร็ว</strong> (3 ปี) แทนปลูกจากเมล็ด (7-10 ปี)<br>(3) ทุกต้นให้ผลคุณภาพสม่ำเสมอ<br>(4) เลือกได้ว่าตอนจากต้นที่ผลดี<br>💡 ลูกจากเมล็ดอาจไม่เหมือนแม่ (genetic recombination) → คุณภาพคาดไม่ได้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — Grafting</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Grafting (เสียบยอด) ใช้เพื่ออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้ <strong>rootstock</strong> ที่แข็งแรง (ทนโรค ทนดิน) + <strong>scion (ยอด)</strong> ที่ให้ผลดี<br>ตัวอย่าง:<br>- <strong>องุ่น:</strong> ต่อบน rootstock ของ wild grape ที่ต้าน phylloxera<br>- <strong>ส้ม:</strong> ต่อพันธุ์รสดีบน rootstock ที่ทนน้ำท่วม<br>- <strong>ทุเรียน:</strong> ต่อบน rootstock ที่ทนโรครากเน่า<br>💡 ในไร่องุ่นยุโรป 100% ของต้นต่อบน American rootstock — ตั้งแต่วิกฤต phylloxera ปี 1860s</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — Tissue culture</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Tissue culture ใช้กับกล้วยไม้อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เมล็ดกล้วยไม้เล็กมาก (ฝุ่น) → ไม่มี endosperm → ในธรรมชาติต้อง <strong>symbiosis กับ fungi</strong> เพื่องอก<br>Tissue culture:<br>(1) ฆ่าเชื้อเมล็ดหรือชิ้นเนื้อเยื่อ<br>(2) เลี้ยงในวุ้นที่มี nutrients + hormones (auxin + cytokinin)<br>(3) เกิด protocorm → คล้ายต้นเล็ก ๆ<br>(4) ย้ายลงดิน<br>1 ขวดเลี้ยงได้ ~100-1,000 ต้น<br>💡 ไทยส่งออกกล้วยไม้อันดับโลก เพราะใช้เทคนิคนี้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: Seed bank</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Seed bank คืออะไรและสำคัญอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ธนาคารเก็บเมล็ดพันธุ์พืชจากทั่วโลก — เก็บที่ <strong>อุณหภูมิ -20°C, ความชื้นต่ำ</strong> → เมล็ดรอดได้หลายสิบ-หลายร้อยปี<br>วัตถุประสงค์:<br>(1) <strong>รักษา genetic diversity</strong> ของพืชเกษตรและพืชป่า<br>(2) <strong>สำรองในกรณีสูญพันธุ์</strong>หรือภัยพิบัติ<br>(3) ใช้ในการ <strong>ปรับปรุงพันธุ์</strong> ในอนาคต<br>ที่ใหญ่ที่สุด: <strong>Svalbard Global Seed Vault</strong> (นอร์เวย์, 2008) — เก็บได้ 4.5 ล้าน sample<br>💡 ไทย: Seed bank ของกรมการข้าว, สวทช., มหาวิทยาลัยต่าง ๆ</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>โครงสร้างดอก:</strong> Sepal · Petal · Stamen · Pistil<br>
        <strong>Pollen grain (n):</strong> 2-3 nuclei = tube + 2 sperm<br>
        <strong>Embryo sac (n):</strong> 7 cells, 8 nuclei = 1 egg + 2 synergids + 1 central (2 polar) + 3 antipodals<br>
        <strong>Double Fertilization:</strong> sperm1+egg=embryo(2n) · sperm2+polar=endosperm(3n)<br>
        <strong>Ovule → Seed · Ovary → Fruit</strong><br>
        <strong>Asexual:</strong> rhizome · stolon · tuber · bulb · plantlet · apomixis
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>ทุกดอกมี 4 ส่วนครบ</td><td>มีแบบ incomplete (ขาดส่วน) และ imperfect (เพศเดียว)</td></tr>
        <tr><td>Endosperm เป็น 2n</td><td>เป็น <strong>3n</strong> (จาก double fertilization)</td></tr>
        <tr><td>มะพร้าวเป็นผลแห้ง</td><td>เป็น <strong>drupe</strong> (ผลสด) — น้ำมะพร้าวคือ endosperm</td></tr>
        <tr><td>Pollination = Fertilization</td><td>Pollination = pollen ตกบน stigma · Fertilization = sperm + egg</td></tr>
        <tr><td>ทุก angiosperm ต้องการ pollinator</td><td>มีพืช self-pollinating หรือ asexual reproduction</td></tr>
        <tr><td>กล้วยไม่มีเมล็ดเพราะไม่มี ovule</td><td>มี ovule แต่ <strong>triploid sterile</strong> → ไม่พัฒนาเป็นเมล็ด</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> "Endosperm = 3n" จดให้แม่น ใช้บ่อยในข้อสอบ · "Double fertilization" = ลักษณะเฉพาะของพืชดอก</div>
    </div>
  `,
  b4c17: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> ภาพรวมการตอบสนองของพืช &amp; Signal Transduction<br>
        <strong>02</strong> ฮอร์โมนพืช 5 กลุ่มหลัก<br>
        <strong>03</strong> Tropism — การเคลื่อนไหวมีทิศทาง<br>
        <strong>04</strong> Nastic Movement — การเคลื่อนไหวไม่มีทิศทาง<br>
        <strong>05</strong> Photoperiodism — การตอบสนองต่อความยาวของวัน<br>
        <strong>06</strong> Vernalization — ผลของอุณหภูมิ<br>
        <strong>07</strong> การตอบสนองต่อความเครียดและศัตรู<br>
        <strong>08</strong> การประยุกต์ในเกษตรกรรม
      </div>
      <div class="tip-box">💡 แม้พืชจะ "เคลื่อนที่ไม่ได้" แต่ตอบสนองต่อสิ่งเร้าได้หลายรูปแบบ — ผ่าน <strong>ฮอร์โมน</strong> และ <strong>การเปลี่ยนแปลงทางสรีรวิทยา</strong></div>
    </div>

    <!-- 1. Overview -->
    <div class="content-section">
      <h3>📡 ภาพรวมการตอบสนอง &amp; Signal Transduction</h3>
      <p>พืชตอบสนองต่อสิ่งเร้าผ่าน 3 ขั้น (เหมือนเซลล์สัตว์):</p>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.95;">
        <li><strong>Reception (รับสัญญาณ):</strong> Receptor ในเซลล์รับรู้สิ่งเร้า (แสง, แรงโน้มถ่วง, สารเคมี, อุณหภูมิ)</li>
        <li><strong>Transduction (ส่งสัญญาณ):</strong> สัญญาณถูกแปลผ่าน secondary messengers (Ca²⁺, cAMP) → กระตุ้น protein kinase cascade</li>
        <li><strong>Response (ตอบสนอง):</strong> เปลี่ยน gene expression, enzyme activity, หรือพฤติกรรมเซลล์</li>
      </ol>
      <h4>ประเภทของการตอบสนอง</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Tropism:</strong> การเจริญแบบมีทิศทาง (ตอบสนองต่อสิ่งเร้า)</li>
        <li><span class="li-dot sc-dot"></span><strong>Nastic Movement:</strong> การเคลื่อนไหวที่ไม่ขึ้นกับทิศทางของสิ่งเร้า</li>
        <li><span class="li-dot sc-dot"></span><strong>Photoperiodism:</strong> ตอบสนองต่อความยาวของวัน</li>
        <li><span class="li-dot sc-dot"></span><strong>Stress Response:</strong> ตอบสนองต่อความเครียดและศัตรู</li>
      </ul>
      <div class="note-box">⚠️ พืชไม่มี <strong>ระบบประสาท</strong> แต่ใช้ <strong>การไหลของ Ca²⁺ และฮอร์โมน</strong> ส่งสัญญาณ — ช้ากว่าสัตว์ แต่ทำงานได้</div>
    </div>

    <!-- 2. Hormones + SVG -->
    <div class="content-section">
      <h3>🌿 ฮอร์โมนพืช 5 กลุ่มหลัก</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">ฮอร์โมนพืชและบทบาท</text>
          <g font-family="Sarabun" font-size="9" fill="#1E293B">
            <!-- 5 hormones as colored boxes -->
            <g>
              <rect x="30" y="50" width="90" height="170" fill="#FEF3C7" stroke="#B45309" stroke-width="2" rx="8"/>
              <text x="75" y="75" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#B45309" font-size="12">Auxin</text>
              <text x="75" y="92" text-anchor="middle" font-size="9" fill="#92400E">(IAA)</text>
              <text x="75" y="115" text-anchor="middle" font-size="9" fill="#92400E">• ยืดเซลล์</text>
              <text x="75" y="130" text-anchor="middle" font-size="9" fill="#92400E">• phototropism</text>
              <text x="75" y="145" text-anchor="middle" font-size="9" fill="#92400E">• สร้างราก</text>
              <text x="75" y="160" text-anchor="middle" font-size="9" fill="#92400E">• Apical</text>
              <text x="75" y="173" text-anchor="middle" font-size="9" fill="#92400E">  dominance</text>
              <text x="75" y="200" text-anchor="middle" font-size="9" font-weight="700" fill="#B45309">"ฮอร์โมนเจริญ"</text>
            </g>

            <g>
              <rect x="130" y="50" width="90" height="170" fill="#D1FAE5" stroke="#065F46" stroke-width="2" rx="8"/>
              <text x="175" y="75" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#065F46" font-size="12">Gibberellin</text>
              <text x="175" y="92" text-anchor="middle" font-size="9" fill="#065F46">(GA)</text>
              <text x="175" y="115" text-anchor="middle" font-size="9" fill="#065F46">• ยืดลำต้น</text>
              <text x="175" y="130" text-anchor="middle" font-size="9" fill="#065F46">• เมล็ดงอก</text>
              <text x="175" y="145" text-anchor="middle" font-size="9" fill="#065F46">• ผลโต</text>
              <text x="175" y="160" text-anchor="middle" font-size="9" fill="#065F46">• ออกดอก</text>
              <text x="175" y="200" text-anchor="middle" font-size="9" font-weight="700" fill="#065F46">"ฮอร์โมนสูง"</text>
            </g>

            <g>
              <rect x="230" y="50" width="90" height="170" fill="#DBEAFE" stroke="#1E40AF" stroke-width="2" rx="8"/>
              <text x="275" y="75" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#1E40AF" font-size="11">Cytokinin</text>
              <text x="275" y="115" text-anchor="middle" font-size="9" fill="#1E40AF">• แบ่งเซลล์</text>
              <text x="275" y="130" text-anchor="middle" font-size="9" fill="#1E40AF">• ยับยั้ง</text>
              <text x="275" y="143" text-anchor="middle" font-size="9" fill="#1E40AF">  apical dom.</text>
              <text x="275" y="158" text-anchor="middle" font-size="9" fill="#1E40AF">• ชะลอเฉา</text>
              <text x="275" y="173" text-anchor="middle" font-size="9" fill="#1E40AF">• สร้างยอด</text>
              <text x="275" y="200" text-anchor="middle" font-size="9" font-weight="700" fill="#1E40AF">"ฮอร์โมนแก่ช้า"</text>
            </g>

            <g>
              <rect x="330" y="50" width="90" height="170" fill="#FFE4E6" stroke="#9F1239" stroke-width="2" rx="8"/>
              <text x="375" y="75" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#9F1239" font-size="11">Ethylene</text>
              <text x="375" y="92" text-anchor="middle" font-size="9" fill="#9F1239">(C₂H₄ แก๊ส)</text>
              <text x="375" y="115" text-anchor="middle" font-size="9" fill="#9F1239">• ผลสุก</text>
              <text x="375" y="130" text-anchor="middle" font-size="9" fill="#9F1239">• ใบร่วง</text>
              <text x="375" y="145" text-anchor="middle" font-size="9" fill="#9F1239">• ดอกเหี่ยว</text>
              <text x="375" y="160" text-anchor="middle" font-size="9" fill="#9F1239">• ตอบสนอง</text>
              <text x="375" y="173" text-anchor="middle" font-size="9" fill="#9F1239">  stress</text>
              <text x="375" y="200" text-anchor="middle" font-size="9" font-weight="700" fill="#9F1239">"ฮอร์โมนสุก"</text>
            </g>

            <g>
              <rect x="430" y="50" width="80" height="170" fill="#EDE9FE" stroke="#5B21B6" stroke-width="2" rx="8"/>
              <text x="470" y="75" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#5B21B6" font-size="12">ABA</text>
              <text x="470" y="92" text-anchor="middle" font-size="8" fill="#5B21B6">Abscisic acid</text>
              <text x="470" y="115" text-anchor="middle" font-size="9" fill="#5B21B6">• ปิด stomata</text>
              <text x="470" y="130" text-anchor="middle" font-size="9" fill="#5B21B6">• Dormancy</text>
              <text x="470" y="145" text-anchor="middle" font-size="9" fill="#5B21B6">  เมล็ด</text>
              <text x="470" y="160" text-anchor="middle" font-size="9" fill="#5B21B6">• Stress</text>
              <text x="470" y="175" text-anchor="middle" font-size="9" fill="#5B21B6">  hormone</text>
              <text x="470" y="200" text-anchor="middle" font-size="9" font-weight="700" fill="#5B21B6">"ฮอร์โมนแล้ง"</text>
            </g>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: ฮอร์โมนพืช 5 กลุ่ม — Auxin, Gibberellin, Cytokinin, Ethylene, ABA</div>
      </div>

      <table class="content-table">
        <tr><th>ฮอร์โมน</th><th>หน้าที่หลัก</th><th>การใช้</th></tr>
        <tr><td>Auxin (IAA)</td><td>ยืดเซลล์ · phototropism · gravitropism · apical dominance · สร้างราก</td><td>ปลูกราก, สารกำจัดวัชพืช 2,4-D</td></tr>
        <tr><td>Gibberellin (GA)</td><td>กระตุ้นเมล็ดงอก · ยืดลำต้น · ผลโต · ออกดอก</td><td>ทำองุ่นไม่มีเมล็ดใหญ่ขึ้น</td></tr>
        <tr><td>Cytokinin</td><td>กระตุ้นแบ่งเซลล์ · ยับยั้ง apical dom · ชะลอเฉา</td><td>เพาะเลี้ยงเนื้อเยื่อ</td></tr>
        <tr><td>Ethylene (C₂H₄)</td><td>เร่งการสุกของผล · ใบร่วง · ตอบสนอง stress</td><td>บ่มกล้วยให้สุก</td></tr>
        <tr><td>Abscisic Acid (ABA)</td><td>ปิด stomata · เมล็ด dormancy · stress hormone</td><td>เพิ่มความทนแล้ง</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>Brassinosteroids</strong> = "ฮอร์โมนใหม่" (1979) — คล้าย sex hormone ของสัตว์ ส่งผลต่อการเจริญและความทนต่อ stress</div>
    </div>

    <!-- 3. Tropism + SVG -->
    <div class="content-section">
      <h3>🎯 Tropism — การเจริญที่มีทิศทาง</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Phototropism: Auxin ทำให้ยอดงอเข้าหาแสง</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Sun -->
            <text x="450" y="60" font-size="24">☀️</text>
            <g stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="3 2">
              <line x1="450" y1="80" x2="350" y2="120"/>
              <line x1="450" y1="80" x2="300" y2="140"/>
            </g>

            <!-- Plant stem (curved to right) -->
            <path d="M 200 220 Q 220 180 240 150 Q 280 120 320 120" stroke="#65A30D" stroke-width="8" fill="none"/>

            <!-- Auxin distribution -->
            <text x="100" y="115" font-size="9" font-weight="700" fill="#B45309">Auxin มาก</text>
            <text x="100" y="130" font-size="9" fill="#B45309">(ด้านมืด)</text>
            <g fill="#FBBF24" stroke="#92400E">
              <circle cx="180" cy="180" r="4"/>
              <circle cx="190" cy="160" r="4"/>
              <circle cx="210" cy="140" r="4"/>
              <circle cx="230" cy="130" r="4"/>
            </g>

            <text x="350" y="170" font-size="9" font-weight="700" fill="#065F46">Auxin น้อย</text>
            <text x="350" y="183" font-size="9" fill="#065F46">(ด้านสว่าง)</text>
            <g fill="#FBBF24" stroke="#92400E" opacity="0.4">
              <circle cx="280" cy="130" r="3"/>
              <circle cx="300" cy="120" r="3"/>
            </g>

            <!-- Mechanism arrows -->
            <text x="60" y="195" font-size="9" fill="#92400E">→ เซลล์ด้านมืด<br/>ยืดยาวกว่า</text>
            <text x="60" y="208" font-size="9" fill="#92400E">→ ยอดงอเข้า</text>
            <text x="60" y="221" font-size="9" fill="#92400E">    หาแสง</text>

            <!-- ground -->
            <rect x="0" y="220" width="520" height="20" fill="#FBBF24" opacity="0.3"/>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: Phototropism — แสงทำให้ Auxin เคลื่อนไปด้านมืด → เซลล์ด้านมืดยืดยาว → ยอดงอเข้าหาแสง</div>
      </div>

      <table class="content-table">
        <tr><th>Tropism</th><th>สิ่งเร้า</th><th>ตัวอย่าง</th><th>ฮอร์โมน</th></tr>
        <tr><td>Phototropism</td><td>แสง</td><td>ยอดงอเข้าหาแสง (+)</td><td>Auxin</td></tr>
        <tr><td>Gravitropism (Geotropism)</td><td>แรงโน้มถ่วง</td><td>รากลงดิน (+) · ยอดขึ้น (−)</td><td>Auxin + statoliths</td></tr>
        <tr><td>Hydrotropism</td><td>น้ำ</td><td>รากเลือกทิศมีน้ำ</td><td>ABA + Auxin</td></tr>
        <tr><td>Thigmotropism</td><td>การสัมผัส</td><td>เถาตำลึงเลื้อย</td><td>Auxin + Ethylene</td></tr>
        <tr><td>Chemotropism</td><td>สารเคมี</td><td>Pollen tube หาน้ำตาลใน ovule</td><td>—</td></tr>
        <tr><td>Thermotropism</td><td>อุณหภูมิ</td><td>รากหลีกเลี่ยงอุณหภูมิสุดขั้ว</td><td>—</td></tr>
      </table>
      <h4>กลไก Phototropism (Went, 1928)</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li>Blue light receptor (phototropin) ที่ยอดรับแสง</li>
        <li>Auxin ที่สร้างที่ยอดถูก <strong>ขนไปด้านมืด</strong></li>
        <li>เซลล์ด้านมืดมี auxin มาก → ยืดยาวมากกว่า</li>
        <li>ผลคือยอดโค้งเข้าหาแสง</li>
      </ol>
      <h4>กลไก Gravitropism</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>เซลล์ <strong>statocyte</strong> ที่ปลายรากมี <strong>statoliths</strong> (amyloplasts มี starch)</li>
        <li><span class="li-dot sc-dot"></span>Statoliths ตกตามแรงโน้มถ่วง → กระตุ้น receptor → ขน Auxin</li>
        <li><span class="li-dot sc-dot"></span>ในราก: Auxin มาก → <strong>ยับยั้ง</strong> การยืด → ราก<strong>โค้งลง</strong></li>
        <li><span class="li-dot sc-dot"></span>ในลำต้น: Auxin มาก → <strong>กระตุ้น</strong> การยืด → ลำต้น<strong>โค้งขึ้น</strong></li>
      </ul>
    </div>

    <!-- 4. Nastic Movements + SVG -->
    <div class="content-section">
      <h3>⚡ Nastic Movements — การเคลื่อนไหวเร็ว</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">ไมยราบ (Mimosa pudica) — Thigmonastic</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Before touch -->
            <text x="130" y="55" text-anchor="middle" font-weight="700" fill="#10B981">ก่อนสัมผัส (ใบเปิด)</text>
            <line x1="130" y1="65" x2="130" y2="175" stroke="#65A30D" stroke-width="3"/>
            <!-- Open leaflets -->
            <g fill="#10B981" stroke="#065F46">
              <ellipse cx="105" cy="100" rx="14" ry="6" transform="rotate(-30 105 100)"/>
              <ellipse cx="155" cy="100" rx="14" ry="6" transform="rotate(30 155 100)"/>
              <ellipse cx="100" cy="125" rx="14" ry="6" transform="rotate(-30 100 125)"/>
              <ellipse cx="160" cy="125" rx="14" ry="6" transform="rotate(30 160 125)"/>
              <ellipse cx="105" cy="150" rx="14" ry="6" transform="rotate(-30 105 150)"/>
              <ellipse cx="155" cy="150" rx="14" ry="6" transform="rotate(30 155 150)"/>
            </g>
            <text x="130" y="200" text-anchor="middle" font-size="9" fill="#065F46">turgor pressure ใน pulvinus สูง</text>

            <!-- Arrow -->
            <text x="265" y="125" font-size="20">→</text>
            <text x="265" y="143" font-size="11" fill="#F43F5E" font-weight="700">touch!</text>

            <!-- After touch -->
            <text x="390" y="55" text-anchor="middle" font-weight="700" fill="#9F1239">หลังสัมผัส (ใบหุบ)</text>
            <line x1="390" y1="65" x2="390" y2="175" stroke="#65A30D" stroke-width="3"/>
            <!-- Closed leaflets (drooping) -->
            <g fill="#10B981" stroke="#065F46" opacity="0.7">
              <ellipse cx="390" cy="105" rx="14" ry="6"/>
              <ellipse cx="390" cy="120" rx="14" ry="6"/>
              <ellipse cx="390" cy="135" rx="14" ry="6"/>
              <ellipse cx="390" cy="150" rx="14" ry="6"/>
            </g>
            <text x="390" y="200" text-anchor="middle" font-size="9" fill="#9F1239">K⁺ ออก → น้ำออก → แฟบ</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: Thigmonasty ในไมยราบ — เกิดในไม่กี่วินาที ใช้การเปลี่ยน turgor</div>
      </div>

      <table class="content-table">
        <tr><th>Nasty</th><th>สิ่งเร้า</th><th>ตัวอย่าง</th></tr>
        <tr><td>Thigmonasty</td><td>การสัมผัส</td><td>ไมยราบหุบ · ใบกาบหอยแครงงับแมลง</td></tr>
        <tr><td>Photonasty</td><td>แสง</td><td>ดอกบัวบาน-หุบตามแสง · ดอกกุหลาบหินตอนเช้า</td></tr>
        <tr><td>Nyctinasty</td><td>กลางคืน</td><td>ใบถั่ว/พริก หุบตอนกลางคืน</td></tr>
        <tr><td>Thermonasty</td><td>อุณหภูมิ</td><td>ดอกทิวลิปบานเมื่อร้อน</td></tr>
      </table>
      <h4>กลไก (Pulvinus)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>ที่โคนใบ/ก้านใบมี <strong>pulvinus</strong> (เซลล์เก็บน้ำ)</li>
        <li><span class="li-dot sc-dot"></span>เมื่อรับสิ่งเร้า → K⁺ และน้ำเคลื่อนระหว่างเซลล์ด้านบน-ล่าง</li>
        <li><span class="li-dot sc-dot"></span>Turgor เปลี่ยน → ใบหุบ/บาน</li>
        <li><span class="li-dot sc-dot"></span>เกิดในวินาที — เร็วกว่า tropism มาก</li>
      </ul>
      <div class="tip-box">💡 ใบกาบหอยแครง (Venus flytrap) ปิดได้ใน 0.1 วินาที — ใช้ trigger hairs 2 ครั้งใน 20 วินาที จึงจะปิด (ป้องกัน false alarm)</div>
    </div>

    <!-- 5. Photoperiodism -->
    <div class="content-section">
      <h3>⏰ Photoperiodism — การออกดอกตามวัน</h3>
      <p>พืชหลายชนิดออกดอกตาม <strong>ความยาวของวัน-คืน</strong> — เพื่อให้ดอกบานในช่วงที่ pollinators ออกหากินและสภาพแวดล้อมเหมาะ</p>
      <table class="content-table">
        <tr><th>ประเภท</th><th>เงื่อนไข</th><th>ตัวอย่าง</th></tr>
        <tr><td>Short-day plant (SDP)</td><td>กลางคืน <strong>ยาว</strong> กว่า critical period</td><td>เบญจมาศ · ข้าว · กัญชา</td></tr>
        <tr><td>Long-day plant (LDP)</td><td>กลางคืน <strong>สั้น</strong> กว่า critical period</td><td>ผักโขม · ผักสลัด · ผักกาด</td></tr>
        <tr><td>Day-neutral plant</td><td>ไม่ขึ้นกับความยาวของวัน</td><td>มะเขือเทศ · ดอกทานตะวัน · ข้าวโพด</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>จริง ๆ แล้วพืชวัดความยาวของ "กลางคืน"</strong> ไม่ใช่กลางวัน — Test: ให้แสงสั้น ๆ ตอนกลางคืน → SDP ไม่ออกดอก</div>
      <h4>กลไก (Phytochrome)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Phytochrome</strong> = pigment ที่รับ red light</li>
        <li><span class="li-dot sc-dot"></span>มี 2 รูป: <strong>Pr</strong> (รับ red 660 nm) ↔ <strong>Pfr</strong> (รับ far-red 730 nm)</li>
        <li><span class="li-dot sc-dot"></span>กลางวัน: Pr → Pfr (form active)</li>
        <li><span class="li-dot sc-dot"></span>กลางคืน: Pfr → Pr ช้า ๆ</li>
        <li><span class="li-dot sc-dot"></span>ปริมาณ Pfr ตอนเช้าบอกพืชว่าผ่านคืน <strong>ยาว</strong> หรือ <strong>สั้น</strong></li>
      </ul>
      <h4>Florigen (Flowering hormone)</h4>
      <p>เมื่อเงื่อนไขเหมาะ → ใบส่งสัญญาณ <strong>FT protein (florigen)</strong> ผ่าน phloem → ยอด → กระตุ้นยีนออกดอก</p>
      <div class="tip-box">💡 <strong>เกษตรกรไทย:</strong> ใช้ไฟต่อเนื่องในสวนเบญจมาศตอนกลางคืน → คืนสั้น → ไม่ออกดอกเร็วเกินไป · แก้วมังกรใช้แสงไฟกระตุ้นให้ออกดอกนอกฤดู</div>
    </div>

    <!-- 6. Vernalization -->
    <div class="content-section">
      <h3>❄️ Vernalization — ผลของอุณหภูมิ</h3>
      <p>พืชบางชนิดต้องผ่าน <strong>ฤดูหนาว</strong> ก่อนจึงจะออกดอก — ป้องกันการออกดอกในฤดูใบไม้ผลิที่ยังไม่เหมาะ</p>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Winter wheat:</strong> ต้องผ่านความเย็น 0-10°C เป็นเวลาสัปดาห์ จึงจะออกดอกในฤดูใบไม้ผลิ</li>
        <li><span class="li-dot sc-dot"></span><strong>Apple, Cherry:</strong> ต้องการ chilling hours (ชั่วโมงเย็น) จึงจะออกดอก</li>
        <li><span class="li-dot sc-dot"></span><strong>Arabidopsis (winter ecotype):</strong> ใช้ในงานวิจัย</li>
      </ul>
      <h4>กลไกระดับโมเลกุล</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>ยีน <strong>FLC (Flowering Locus C)</strong> ยับยั้งการออกดอกในต้นที่ยังไม่ผ่านความหนาว</li>
        <li><span class="li-dot sc-dot"></span>ผ่านความหนาว → FLC ถูก <strong>silence</strong> ด้วย <strong>epigenetic modification</strong> (histone methylation)</li>
        <li><span class="li-dot sc-dot"></span>ตอนใบไม้ผลิ → FLC silent → florigen ทำงาน → ออกดอก</li>
      </ul>
      <div class="note-box">⚠️ <strong>Climate change</strong> ทำให้ฤดูหนาวสั้นลง → พืชบางชนิด <strong>ไม่ได้</strong> chilling hours พอ → ผลผลิตลด</div>
    </div>

    <!-- 7. Stress + Defense -->
    <div class="content-section">
      <h3>🛡️ การตอบสนองต่อความเครียดและศัตรู</h3>
      <h4>1. ความเครียดจากสิ่งแวดล้อม (Abiotic Stress)</h4>
      <table class="content-table">
        <tr><th>Stress</th><th>การตอบสนอง</th></tr>
        <tr><td>แล้ง</td><td>ABA → ปิด stomata · ขน proline (osmoprotectant)</td></tr>
        <tr><td>ความร้อน</td><td>Heat shock proteins (HSPs) ป้องกันโปรตีน</td></tr>
        <tr><td>ความเย็น</td><td>Membrane lipid เปลี่ยนเป็น unsaturated (ทนเย็น)</td></tr>
        <tr><td>น้ำท่วม</td><td>Ethylene → ราก aerenchyma ให้ O₂ ไหลผ่าน</td></tr>
        <tr><td>เค็ม</td><td>ขับ Na⁺ ออก · เก็บ Na⁺ ใน vacuole</td></tr>
      </table>
      <h4>2. การป้องกันศัตรู (Biotic Defense)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Physical:</strong> Cuticle, thorns, trichomes (ขน), bark</li>
        <li><span class="li-dot sc-dot"></span><strong>Chemical:</strong> Tannins (รสฝาด) · Alkaloids (caffeine, nicotine) · Glycosides (cassava cyanide)</li>
        <li><span class="li-dot sc-dot"></span><strong>Induced defense:</strong> เมื่อโดนกัด → สร้างสารพิษเพิ่ม + ปล่อย <strong>volatiles</strong> เรียกศัตรูธรรมชาติของแมลง</li>
        <li><span class="li-dot sc-dot"></span><strong>Systemic acquired resistance (SAR):</strong> เมื่อจุดหนึ่งติดเชื้อ → สัญญาณ salicylic acid → ทั่วต้นเตรียมพร้อม</li>
      </ul>
      <h4>3. Hypersensitive Response (HR)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>เซลล์รอบเชื้อ <strong>ฆ่าตัวตาย</strong> (apoptosis) → กักเชื้อไม่ให้แพร่</li>
        <li><span class="li-dot sc-dot"></span>เกิด lesion (รอยจุดดำ) บนใบ</li>
        <li><span class="li-dot sc-dot"></span>คล้ายระบบภูมิคุ้มกันของสัตว์ — แต่ไม่มี memory cells</li>
      </ul>
      <div class="tip-box">💡 <strong>Talking trees:</strong> ต้นไม้ที่โดนแมลงกัดปล่อย volatile organics → ต้นข้างเคียงรับรู้ → เริ่มสร้างสารพิษล่วงหน้า — Wood Wide Web ผ่านอากาศ</div>
    </div>

    <!-- 8. Applications -->
    <div class="content-section">
      <h3>🌾 การประยุกต์ในเกษตรกรรม</h3>
      <table class="content-table">
        <tr><th>การประยุกต์</th><th>ฮอร์โมน/หลักการ</th></tr>
        <tr><td>เร่งราก กิ่งชำ</td><td>จุ่ม Auxin สังเคราะห์ (IBA, NAA) → รากเกิดเร็ว</td></tr>
        <tr><td>กำจัดวัชพืช</td><td>2,4-D (synthetic auxin) → ใบเลี้ยงคู่ตาย (monocots ทน)</td></tr>
        <tr><td>ผลโต ไร้เมล็ด</td><td>GA → องุ่นไม่มีเมล็ดใหญ่ขึ้น</td></tr>
        <tr><td>บ่มผลให้สุก</td><td>Ethylene gas (จากต้น/หลอด) → กล้วยสุก, อะโวคาโดสุก</td></tr>
        <tr><td>หยุดผลสุก</td><td>เก็บใน <strong>1-MCP</strong> (Ethylene blocker) → แอปเปิ้ลเก็บได้นาน</td></tr>
        <tr><td>กระตุ้นออกดอกนอกฤดู</td><td>แก้วมังกร ใช้แสงไฟ · มะนาวใช้ paclobutrazol</td></tr>
        <tr><td>ลดความสูงพืช</td><td>Paclobutrazol (anti-GA) → ลดยีดยาว → ผลใหญ่</td></tr>
        <tr><td>เพิ่มความทนแล้ง</td><td>ฉีด ABA → ปิด stomata ก่อนแล้ง</td></tr>
        <tr><td>ขยายพันธุ์เร็ว</td><td>Cytokinin ใน tissue culture → ยอดมาก</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>2,4-D และ Agent Orange:</strong> ในสงครามเวียดนาม สหรัฐใช้ Agent Orange (2,4-D + 2,4,5-T) ฉีดทำลายป่า — มีสารปนเปื้อน dioxin ทำให้เกิดมะเร็งและความผิดปกติทางพันธุกรรมจำนวนมาก</div>
    </div>

    <!-- ============ 32 PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — Signal Transduction &amp; Overview</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — 3 ขั้นของ signal</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Signal transduction ในพืชมี 3 ขั้นอะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(1) <strong>Reception:</strong> receptor รับสิ่งเร้า<br>(2) <strong>Transduction:</strong> ส่งสัญญาณผ่าน secondary messengers (Ca²⁺, cAMP) → kinase cascade<br>(3) <strong>Response:</strong> เปลี่ยน gene expression / enzyme activity<br>💡 หลักการเดียวกับเซลล์สัตว์</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — ทำไมพืชไม่มีระบบประสาท</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมพืชสามารถตอบสนองได้แม้ไม่มีระบบประสาท?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้ระบบ <strong>เคมี-ไฟฟ้า</strong>:<br>- <strong>ฮอร์โมน</strong> เคลื่อนผ่าน xylem/phloem<br>- <strong>Ca²⁺ wave</strong> เคลื่อนเร็วในเซลล์<br>- <strong>Electrical signals</strong> ผ่าน plasmodesmata (action potentials เล็ก)<br>ช้ากว่าสัตว์ — แต่พืชไม่ต้องเคลื่อนที่ จึงไม่ต้องการเร็ว<br>💡 ไมยราบส่ง electrical signal ที่ ~3 cm/s — สัตว์ ~100 m/s</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — Tropism vs Nasty</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Tropism และ Nastic movement ต่างกันที่อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Tropism:</strong> การเจริญ <strong>มีทิศทาง</strong> ตามสิ่งเร้า — ช้า (ชม-วัน) ถาวร<br><strong>Nastic:</strong> การเคลื่อนไหว <strong>ไม่ขึ้นทิศทาง</strong> — เร็ว (วินาที-นาที) ชั่วคราว<br>ตัวอย่าง: phototropism = ยอดงอเข้าหาแสง (ทิศ); thigmonasty = ไมยราบหุบทุกทิศเมื่อสัมผัส<br>💡 Tropism = "grow toward" · Nasty = "rapid reversible"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: Plant intelligence</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> "พืชฉลาด" — ข้อพิสูจน์อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> นักวิจัยพบหลักฐานหลายอย่าง:<br>(1) <strong>การเรียนรู้:</strong> Mimosa ที่หล่นซ้ำ ๆ ในที่ปลอดภัยจะ "เรียน" ไม่หุบ (Gagliano, 2014)<br>(2) <strong>การจดจำ:</strong> สามารถจำคืนหนาวได้ผ่าน FLC epigenetic<br>(3) <strong>การสื่อสาร:</strong> Wood Wide Web ผ่าน mycorrhizae + volatiles ผ่านอากาศ<br>(4) <strong>การตัดสินใจ:</strong> ราก "เลือก" ทิศที่มีน้ำและแร่ธาตุ<br>(5) <strong>การนับ:</strong> Venus flytrap นับ 2 trigger ก่อนปิด<br>แม้ไม่มี brain แต่มี <strong>distributed processing</strong><br>💡 ยังเป็นที่ถกเถียงว่าควรเรียกว่า "intelligence" หรือไม่</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — Hormones</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — Auxin discovery</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Darwin และ Went ค้นพบ Auxin อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Darwin (1880):</strong> ตัดปลายยอดของ Phalaris → ไม่ตอบสนองต่อแสง → "ปลายยอดส่งบางอย่าง" ลงไป<br><strong>Went (1928):</strong> ตัดปลายยอด → วางบน agar block → agar นำมาวางที่ขอบของ stem ที่ไม่มียอด → stem โค้ง<br>→ ยืนยันว่ามี <strong>สารเคมี (auxin)</strong> ส่งจากยอด<br>"Auxin" จากภาษากรีก auxein = "to grow"<br>💡 IAA (indole-3-acetic acid) เป็น auxin หลักที่พบในธรรมชาติ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — Apical dominance</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Apical dominance ทำงานอย่างไร และยกเลิกได้อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Apical bud หลั่ง <strong>Auxin</strong> ลงสู่ลำต้น → ยับยั้ง lateral buds → กิ่งไม่แตก<br>ยกเลิก: <strong>ตัดยอด</strong> (pinching) → ไม่มี Auxin → lateral buds งอก → ต้นแตกพุ่ม<br>ใช้ใน: บอนไซ, ตัดแต่งสวน, เก็บใบชา, เก็บใบโหระพา<br>💡 Cytokinin จากรากต้านอุน auxin → ช่วยให้ lateral buds งอก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — Ethylene และผลสุก</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมใส่กล้วยกับมะม่วงในถุงเดียวกันมะม่วงสุกเร็ว?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> กล้วยปล่อย <strong>Ethylene (C₂H₄)</strong> ซึ่งเป็นแก๊ส → กระตุ้นการสุกของผลใกล้เคียง<br>Ethylene เร่ง:<br>- แตกสตรัค (starch → sugar)<br>- ผนังเซลล์อ่อน → นุ่ม<br>- เปลี่ยนสี (chlorophyll สลาย, carotenoid ปรากฏ)<br>- ผลิตกลิ่นหอม<br>ในอุตสาหกรรม: บ่มกล้วยด้วย ethylene gas (1,000 ppm)<br>💡 เก็บผลไม้กับมันฝรั่ง → มันฝรั่งไม่งอก (ethylene จากผลไม้ยับยั้ง sprouting)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: GA seedless grapes</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> GA ทำให้องุ่นไร้เมล็ดใหญ่ขึ้นอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ปกติเมล็ดผลิต GA → กระตุ้นผลโต<br>องุ่นไร้เมล็ด → ไม่มี GA → ผลเล็ก<br>การแก้: <strong>ฉีด GA</strong> ที่ดอกหรือผลเล็ก → ผลใหญ่เท่าองุ่นมีเมล็ด<br>เกษตรกรในแคลิฟอร์เนียใช้ GA spray บนพันธุ์ Thompson Seedless<br>💡 GA ยังทำให้องุ่นยืดยาวบนพวง → ผลไม่ติดกันเป็นก้อน → คุณภาพดี</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — Tropism</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — Phototropism mechanism</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Phototropism ทำงานอย่างไรในระดับโมเลกุล?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(1) <strong>Phototropin (blue light receptor)</strong> ที่ปลายยอดรับ blue light<br>(2) Auxin ที่สร้างที่ยอด <strong>เคลื่อนไปด้านมืด</strong><br>(3) Auxin มากด้านมืด → กระตุ้น <strong>cell wall acidification</strong> → ผนังเซลล์อ่อนตัว → เซลล์ดูดน้ำ → <strong>ยืดยาว</strong><br>(4) เซลล์ด้านสว่างยืดน้อยกว่า → ยอดโค้งเข้าหาแสง<br>💡 เรียก <strong>"Acid growth hypothesis"</strong> ของ Cleland</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — Gravitropism + statolith</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> รากรู้ว่าทิศไหนเป็นล่างได้อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใน cells ปลายราก (root cap) มี <strong>statocytes</strong> ที่มี <strong>statoliths</strong> (amyloplasts หนัก เก็บ starch)<br>Statoliths <strong>ตกตามแรงโน้มถ่วง</strong> → กดด้านล่างของเซลล์ → กระตุ้น receptor → <strong>Auxin ขนไปด้านล่าง</strong> มาก<br>ในราก: Auxin มาก = <strong>ยับยั้งการยืด</strong> → ด้านบนยืดเร็วกว่า → รากโค้งลง<br>ในลำต้น: Auxin มาก = <strong>กระตุ้นการยืด</strong> → ด้านล่างยืดเร็วกว่า → ลำต้นโค้งขึ้น<br>💡 ทดลอง: หมุนกระถางคว่ำ → ราก/ลำต้นโค้งกลับ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — Thigmotropism</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เถาตำลึง pumpkin ขดรอบเสาได้อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Thigmotropism</strong> — ตอบสนองต่อการสัมผัส:<br>(1) เซลล์ tendril ด้าน <strong>สัมผัส</strong> หยุดยืดยาว<br>(2) เซลล์ด้าน <strong>ตรงข้าม</strong> ยืดยาวต่อ<br>(3) Tendril โค้งรอบวัตถุ<br>กลไก: Ca²⁺ influx → กระตุ้น auxin redistribution + ethylene<br>เกิดได้เร็ว — เห็นการเปลี่ยนแปลงใน 5-10 นาที<br>💡 พบใน ไม้เลื้อย, ผักบุ้ง, มะระ, ฟัก, ตำลึง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: Plant in space</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> พืชใน Space Station เจริญต่างจากบนโลกอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ในไร้แรงโน้มถ่วง (microgravity):<br>- <strong>Statoliths ไม่ตก</strong> → ไม่มีทิศ "ล่าง" → รากงอกทุกทิศ<br>- ขาด gravitropism → ต้องอาศัย <strong>phototropism</strong> เป็นหลัก<br>- LED จากด้านบน → ยอดงอขึ้น, รากงอลง (ตามแสง)<br>- การลำเลียงน้ำในไซเลม <strong>ลำบาก</strong> เพราะไม่มีแรงโน้มถ่วงช่วยให้น้ำลงราก<br>NASA ปลูกผักสลัด, มะเขือเทศ บน ISS สำเร็จ<br>💡 จะสำคัญต่อ Mars mission — มนุษย์ต้องปลูกอาหารเอง</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — Nastic Movement</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — Pulvinus</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Pulvinus คืออะไร และทำหน้าที่อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Pulvinus</strong> = ส่วนพองที่โคนใบ/ก้านใบ — มี cells ที่ <strong>เปลี่ยน turgor pressure</strong> ได้เร็ว<br>กลไก: K⁺ ออก/เข้า → น้ำตามเข้า/ออก → cells เต่ง/แฟบ → ใบหุบ/บาน<br>พบใน: ไมยราบ, ถั่ว, พริก (ใบหุบกลางคืน)<br>💡 เป็น "ข้อพับ" ของพืช</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — Venus flytrap</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Venus flytrap จับแมลงอย่างไรและทำไมไม่ปิดผิด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> มี <strong>trigger hairs 3-6 ตัว</strong> บนผิวใบ<br><strong>กฎ:</strong> ต้องถูกแตะ <strong>≥ 2 ครั้งใน 20 วินาที</strong> → ใบจึงปิด<br>กลไก: แตะ 1 → Ca²⁺ wave + electrical signal · แตะ 2 → ผ่าน threshold → ใบปิด <strong>ใน 0.1 วินาที</strong> (เร็วที่สุดในพืช)<br>การ "นับ" นี้ป้องกัน false alarm จากฝนหรือใบไม้<br>เมื่อปิด: ปล่อยเอนไซม์ย่อยแมลง → ดูดสารอาหาร (กิน N)<br>💡 ปลูกในดินขาด N → ต้องล่าแมลงช่วย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — Nyctinasty</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Nyctinasty (sleep movement) คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใบหุบในเวลากลางคืน — เช่น ใบถั่ว ใบพริก ใบไมยราบ<br>เกิดจาก circadian rhythm + ความมืด → K⁺ ใน pulvinus เปลี่ยน → ใบหุบ<br>ประโยชน์ (สมมติฐาน):<br>(1) ลดการสูญน้ำ (ไม่ได้รับลม)<br>(2) ลดการสูญความร้อน (radiation)<br>(3) ลดเชื้อโรค (น้ำค้างไม่ค้างที่ใบ)<br>(4) ทำให้สัตว์กินไม่เห็นใบ<br>💡 Darwin เขียนหนังสือ "The Power of Movement in Plants" (1880)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: Mimosa learning</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ไมยราบ "เรียนรู้" ได้จริงหรือไม่?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Gagliano (2014) ทำการทดลอง:<br>หล่นกระถางไมยราบจากความสูงเล็กน้อย → ใบหุบ<br>หล่นซ้ำ ๆ ในที่ปลอดภัย (ไม่มีอันตรายจริง) → ใบ <strong>ไม่หุบ</strong> ต่อมา<br>หยุดทดลอง 1 เดือน → กลับมาทดลอง → <strong>ยังจำได้</strong> ไม่หุบ<br>→ พิสูจน์ว่าไมยราบมี <strong>habituation</strong> และ <strong>long-term memory</strong> โดยไม่มีระบบประสาท<br>💡 ยังเป็นที่ถกเถียงในวงการวิทยาศาสตร์ บางคนคิดว่าเป็น "การปรับตัวทางสรีรวิทยา" ไม่ใช่ "memory"</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — Photoperiodism</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — 3 ประเภท</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุ 3 ประเภทของพืชตาม photoperiod</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(1) <strong>Short-day plant (SDP):</strong> ออกดอกเมื่อคืน <strong>ยาว</strong> — เบญจมาศ, ข้าว, ดอกบัว, กัญชา<br>(2) <strong>Long-day plant (LDP):</strong> ออกดอกเมื่อคืน <strong>สั้น</strong> — ผักโขม, ผักสลัด, ผักกาด<br>(3) <strong>Day-neutral plant:</strong> ไม่ขึ้นกับวัน — มะเขือเทศ, ทานตะวัน<br>💡 ในไทยอยู่ใกล้เส้นศูนย์สูตร → ความยาววันคงที่ตลอดปี → photoperiod ไม่ค่อยมีบทบาท → พืชส่วนใหญ่เป็น day-neutral</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — Night length</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมจริง ๆ พืชวัด "ความยาวของคืน" ไม่ใช่ "วัน"?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> การทดลองคลาสสิก:<br>SDP ในคืนยาว 14 ชม. → ออกดอกปกติ<br>SDP ในคืนยาว 14 ชม. + <strong>เปิดไฟ 1 นาทีกลางคืน</strong> → <strong>ไม่ออกดอก</strong><br>→ พิสูจน์ว่าพืชวัด <strong>continuous darkness</strong> ไม่ใช่จำนวนชั่วโมงแสง<br>กลไก: Phytochrome — ในคืน Pfr → Pr ช้า ๆ ถ้ามีแสง red ตัดกลางคืน → Pr → Pfr ใหม่ → "รีเซ็ต" การวัด<br>💡 จึงเกษตรกรเบญจมาศใช้ไฟต่อเนื่อง → ไม่ให้คืนยาว → ไม่ออกดอกเร็วเกินไป</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — Phytochrome</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Phytochrome คืออะไร และทำงานอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Photoreceptor protein</strong> รับ red และ far-red light:<br>- <strong>Pr (660 nm):</strong> รูป inactive — เห็นในที่มืดเป็นเวลานาน<br>- <strong>Pfr (730 nm):</strong> รูป active — กระตุ้น flowering, germination, de-etiolation<br>การเปลี่ยน:<br>Red → Pr → Pfr (กลางวัน)<br>Far-red / dark → Pfr → Pr (กลางคืน, สลายช้า)<br>ปริมาณ Pfr ตอนเช้าบอกพืชว่าผ่านคืนสั้น/ยาว<br>💡 แสงแดดมี red มาก → Pfr สูง · ใต้ canopy มี far-red มาก (red ถูกใบดูด) → Pfr ต่ำ → พืชรู้ว่ามีเงา → ยืดยาวหาแสง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: Florigen</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Florigen คืออะไร ค้นพบยากเพราะอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Florigen = <strong>"สัญญาณออกดอก"</strong> ที่ส่งจาก <strong>ใบ → ยอด</strong><br>คอนเซ็ปต์เสนอโดย Chailakhyan (1937) — แต่หาตัวจริงไม่ได้นาน 70 ปี<br>เพิ่งค้นพบในปี <strong>2007</strong> ว่าเป็น <strong>FT protein</strong> (FLOWERING LOCUS T)<br>กลไก:<br>(1) ใบรับ photoperiod ที่เหมาะ<br>(2) ใบสร้าง FT protein<br>(3) FT เคลื่อนผ่าน <strong>phloem</strong> ไปยอด<br>(4) FT จับ FD ที่ยอด → กระตุ้นยีน <strong>AP1</strong> → เปลี่ยน meristem จาก vegetative → reproductive<br>💡 FT เป็น universal — พบในพืชทุกชนิด (รวมข้าว Hd3a homolog)</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — Vernalization</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — Vernalization</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Vernalization คืออะไร และทำไมต้องการ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ความเย็นที่กระตุ้นให้พืชออกดอก — ต้องผ่านความเย็น <strong>0-10°C เป็นเวลาหลายสัปดาห์</strong><br>วัตถุประสงค์: ป้องกันการออกดอกในฤดูใบไม้ร่วง — ที่ดอกจะตายจากความหนาว<br>ตัวอย่าง:<br>- <strong>Winter wheat:</strong> ปลูกในฤดูใบไม้ร่วง → ผ่านหนาว → ออกดอกใบไม้ผลิ<br>- <strong>Apple, Cherry:</strong> ต้องการ chilling hours จึงจะออกดอก<br>- <strong>หัวกล้วยไม้บางพันธุ์:</strong> เก็บในที่เย็นก่อน → ออกดอก<br>💡 ในไทยที่ไม่หนาว → ต้องนำเข้าผลไม้เหล่านี้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — FLC gene</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> FLC gene เกี่ยวกับ vernalization อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>FLC (Flowering Locus C)</strong> = ยีนยับยั้งการออกดอก<br>ในต้นที่ยังไม่ผ่านหนาว: FLC สูง → ไม่ออกดอก<br>ผ่านหนาว: FLC ถูก <strong>silence</strong> ด้วย <strong>epigenetic modification</strong> (H3K27 methylation)<br>การ silence <strong>คงตัว</strong> แม้กลับมาที่อุ่น → "จำได้" ว่าผ่านหนาว → ออกดอกได้<br>เป็นตัวอย่างคลาสสิกของ <strong>epigenetic memory</strong> ในพืช<br>💡 เปรียบเหมือนพืชมี "นาฬิกาแม่นยำ" ที่นับวันเย็น</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — Climate change effect</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> โลกร้อนส่งผลกับ vernalization อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ฤดูหนาวสั้นลง + อุ่นขึ้น → พืช <strong>ไม่ได้ chilling hours พอ</strong><br>ผล:<br>- <strong>Apples:</strong> ผลผลิตลด, สุกไม่สม่ำเสมอ<br>- <strong>Cherries:</strong> ดอกไม่ออกพร้อมกัน<br>- ในเขตอบอุ่นที่กำลังร้อนขึ้น → ต้องย้ายไปสูงขึ้น/ทางเหนือมากขึ้น<br>การแก้:<br>(1) พันธุ์ "low chill" — เช่น "Anna" apple<br>(2) สเปรย์ chemical: hydrogen cyanamide<br>(3) เปลี่ยนชนิดพืช<br>💡 ปัญหาจริงในการผลิตแอปเปิ้ลในจีน, เกาหลี, ญี่ปุ่น</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: Tropical fruit chill</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมในไทยเราเก็บกล้วยในตู้เย็นไม่ได้ผลดี?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> กล้วยและผลไม้เขตร้อน <strong>ไม่ทนความเย็น</strong> (chilling injury):<br>- ที่ &lt; 12°C: phospholipid ในเยื่อหุ้มเซลล์ <strong>แข็งตัว</strong> → ปกป้องเซลล์ไม่ได้<br>- ผลิต ethylene และ ROS<br>- ผิวกลายเป็น <strong>ดำคล้ำ</strong> + เนื้อเสีย<br>วิธีเก็บกล้วยที่ถูก: <strong>15-18°C</strong>, ความชื้น 85-95%<br>ผลไม้ที่ทนเย็น (แอปเปิ้ล, สาลี่, องุ่น): เก็บ 0-4°C ได้ดี<br>💡 จึงร้านอาหารเก็บกล้วย ที่อุณหภูมิห้อง</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — Defense</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — Chemical defense</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Caffeine, nicotine, capsaicin (รสเผ็ดของพริก) มีไว้เพื่ออะไรในพืช?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เป็น <strong>secondary metabolites</strong> ใช้ป้องกันแมลง/สัตว์ที่จะกิน:<br>- <strong>Caffeine:</strong> พิษต่อแมลงและสัตว์เล็ก<br>- <strong>Nicotine:</strong> ส่งผลต่อระบบประสาทแมลง<br>- <strong>Capsaicin:</strong> ทำให้สัตว์เลี้ยงลูกด้วยนมเจ็บปวด — แต่ <strong>นกไม่รู้สึก</strong> (ไม่มี receptor) → นกกินเมล็ดพริก → กระจาย<br>💡 มนุษย์เรียนรู้ที่จะ "ชอบ" สารพิษเหล่านี้ในปริมาณน้อย → กาแฟ, บุหรี่, อาหารเผ็ด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — Induced defense</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เมื่อพืชโดนแมลงกัด พืชรู้ตัวและตอบสนองอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Induced defense:</strong><br>(1) แมลงกัด → ปล่อย oral secretions → กระตุ้น receptor บนพืช<br>(2) Jasmonic acid (JA) signaling → สร้าง <strong>สารพิษเพิ่ม</strong> (alkaloids, tannins)<br>(3) ปล่อย <strong>VOCs (volatile organic compounds)</strong> — เรียก natural enemies ของแมลง (ตัวต่อ, นก)<br>(4) ต้นข้างเคียงรับ VOCs → เริ่มสร้างสารพิษ "ล่วงหน้า"<br>💡 เรียก "tritrophic interactions" — พืช + แมลงศัตรู + ศัตรูของศัตรู</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — SAR</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Systemic Acquired Resistance (SAR) คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เมื่อพืชถูกเชื้อโรคที่จุดหนึ่ง → ส่งสัญญาณ <strong>salicylic acid (SA)</strong> ผ่าน phloem ไปทั่วต้น → <strong>ทุกส่วนของต้นเตรียมพร้อม</strong>ต่อสู้เชื้อ<br>คล้ายระบบภูมิคุ้มกันของสัตว์ — แต่ไม่มี memory cells<br>SA ยังเป็น precursor ของ <strong>aspirin</strong> (acetylsalicylic acid)<br>💡 ในเกษตร: ฉีด SA ที่ใบ → กระตุ้นภูมิคุ้มกันโดยไม่ใช้ยาฆ่าเชื้อ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: Wood Wide Web</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ต้นไม้ "สื่อสาร" ผ่าน mycorrhizae อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Mycorrhizae เชื่อม root ของต้นไม้หลายต้น → "Wood Wide Web"<br>การสื่อสาร:<br>(1) <strong>ส่งสัญญาณภัย:</strong> ต้นที่ถูกแมลงกัดส่งสัญญาณเคมีผ่าน fungi → ต้นข้างเคียงสร้างสารพิษ<br>(2) <strong>แชร์น้ำตาล:</strong> ต้นแม่ส่งน้ำตาลให้ลูกอ่อนใต้ canopy<br>(3) <strong>แชร์ N:</strong> Birch (deciduous) ส่ง N ให้ Fir (evergreen) ในฤดูใบไม้ผลิ — fir ส่งคืนในฤดูใบไม้ร่วง<br>นักวิจัย: <strong>Suzanne Simard</strong> (Canada) — Mother Tree Project<br>💡 "ป่าไม่ใช่กลุ่มต้นไม้ แต่เป็น superorganism"</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — การประยุกต์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — 2,4-D</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> 2,4-D เป็นสารกำจัดวัชพืชเลือกตัวอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> 2,4-D = synthetic auxin ที่ <strong>เข้มข้นสูง</strong> → กระตุ้นการเจริญผิดปกติ → พืชตาย<br>เลือก:<br>- <strong>Dicots (พืชใบเลี้ยงคู่):</strong> ตอบสนองต่อ auxin มาก → ตาย (วัชพืช เช่น dandelion)<br>- <strong>Monocots (พืชใบเลี้ยงเดี่ยว):</strong> ทนได้ — เพราะ leaf orientation และเอนไซม์ย่อย auxin → ข้าวโพด ข้าวสาลี ปลอดภัย<br>ใช้ในนาข้าวโพด, นาข้าวสาลี กำจัดวัชพืชใบเลี้ยงคู่<br>💡 หลีกเลี่ยงในนาข้าว/พืชเลี้ยงคู่อื่น ๆ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — แก้วมังกรนอกฤดู</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เกษตรกรไทยทำให้แก้วมังกรออกผลนอกฤดูได้อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> แก้วมังกรเป็น <strong>Short-day plant</strong> (ออกดอกฤดูร้อน-ฝนที่กลางคืนยาว)<br>นอกฤดู (ฤดูหนาว): กลางคืนสั้น → ไม่ออกดอกตามธรรมชาติ<br>การแก้: <strong>เปิดไฟกระตุ้น</strong> ตั้งแต่ 6 โมงเย็น - 4 ทุ่ม → คืนยาว → กระตุ้นการสร้าง florigen → ออกดอก<br>ใช้หลอด incandescent หรือ LED red light<br>ผลผลิต: ขายได้ราคาดี ในช่วง demand สูง<br>💡 เทคนิคเดียวกันใช้กับเบญจมาศ (ฉีดไฟยับยั้งการออกดอกในฤดูธรรมชาติ → ปรับเวลาขาย)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — Paclobutrazol</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Paclobutrazol ใช้ในมะม่วงและมะนาวอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Paclobutrazol = <strong>GA inhibitor</strong> (ยับยั้งการสร้าง gibberellin)<br>ผล:<br>(1) <strong>ลดยืดยาว</strong> → พืชเตี้ยลง<br>(2) <strong>เพิ่มดอก</strong> — ลดการเจริญ vegetative → ดอกมากขึ้น<br>(3) <strong>ออกดอกนอกฤดู</strong><br>การใช้:<br>- ราดดินรอบโคน 30-60 มล./ต้น<br>- ฉีดพ่นใบ<br>ใช้กับ: มะม่วง มะนาว ลำไย ทุเรียน<br>💡 ระวัง: ทำให้ดินสะสมสารเคมี → ส่งผลกระทบสิ่งแวดล้อม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: GMO ทนแล้ง</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> นักวิจัยใช้ความรู้เกี่ยวกับฮอร์โมนพืชสร้าง GMO ทนแล้งได้อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> หลายกลยุทธ์:<br>(1) <strong>Overexpression ของ ABA receptor (PYR/PYL):</strong> เพิ่มความไวต่อ ABA → ปิด stomata เร็ว → ทนแล้ง<br>(2) <strong>DREB transcription factors:</strong> เปิดยีนต้านความเครียดหลายตัว<br>(3) <strong>Trehalose biosynthesis:</strong> ผลิตน้ำตาล trehalose ป้องกันโปรตีน<br>(4) <strong>Compatible solutes:</strong> proline, glycine betaine — ดูดน้ำในเซลล์<br>ตัวอย่างจริง: <strong>DroughtGard corn</strong> (Monsanto, 2013) — ได้รับการอนุมัติในสหรัฐ<br>ลดการใช้น้ำ 25% โดยไม่ลดผลผลิต<br>💡 จำเป็นในยุค climate change → ความต้องการอาหารโลก</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>5 ฮอร์โมน:</strong> Auxin · Gibberellin · Cytokinin · Ethylene · ABA<br>
        <strong>Tropism:</strong> Photo · Gravi · Hydro · Thigmo · Chemo (มีทิศทาง)<br>
        <strong>Nastic:</strong> Thigmo · Photo · Nycti · Thermo (เร็ว ไม่มีทิศ)<br>
        <strong>Photoperiodism:</strong> SDP · LDP · Day-neutral · Phytochrome · Florigen (FT)<br>
        <strong>Vernalization:</strong> ผ่านเย็น → silence FLC → ออกดอก<br>
        <strong>Defense:</strong> Physical · Chemical · Induced · SAR · HR
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>พืชไม่เคลื่อนไหว</td><td>เคลื่อนไหวได้ — ผ่าน tropism, nastic, growth</td></tr>
        <tr><td>Photoperiodism วัดความยาวกลางวัน</td><td>วัด <strong>ความยาวกลางคืน</strong> (continuous darkness)</td></tr>
        <tr><td>Auxin ดีทั้งหมด</td><td>เข้มข้นมาก → พิษ (2,4-D เป็นสารฆ่าวัชพืช)</td></tr>
        <tr><td>Ethylene เป็นของเหลว</td><td>เป็น <strong>แก๊ส (C₂H₄)</strong></td></tr>
        <tr><td>กล้วยไม่มีฮอร์โมน</td><td>กล้วยปล่อย ethylene → ผลใกล้เคียงสุก</td></tr>
        <tr><td>พืชไม่มีความจำ</td><td>มี <strong>epigenetic memory</strong> เช่น vernalization (FLC silencing)</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> Auxin = "เจริญ" · GA = "สูง" · Cyt = "แบ่ง" · Eth = "สุก" · ABA = "เครียด"</div>
    </div>
  `
});
