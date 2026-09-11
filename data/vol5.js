/* เนื้อหาชีววิทยา 5 — สร้างจาก split.py · แก้เนื้อหาที่ไฟล์นี้ได้เลย แล้วรัน _build/build.py */
window.BIO = window.BIO || {}; BIO.CH = BIO.CH || {};
Object.assign(BIO.CH, {
  b5c18: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> ภาพรวมการย่อยอาหาร — การย่อยเชิงกล vs เชิงเคมี และเหตุผลที่ต้องย่อย<br>
        <strong>02</strong> การย่อยอาหารในสัตว์ไม่มีกระดูกสันหลัง (food vacuole &rarr; gastrovascular cavity &rarr; alimentary canal)<br>
        <strong>03</strong> ทางเดินอาหารของมนุษย์ทีละอวัยวะ พร้อมเอนไซม์และค่า pH<br>
        <strong>04</strong> อวัยวะช่วยย่อย — ตับ ตับอ่อน ถุงน้ำดี<br>
        <strong>05</strong> การดูดซึมที่ลำไส้เล็ก — villi และ microvilli<br>
        <strong>06</strong> ฮอร์โมนควบคุมการย่อยอาหาร (gastrin, secretin, CCK)<br>
        <strong>07</strong> สารอาหาร พลังงาน และดัชนีมวลกาย (BMI)<br>
        <strong>08</strong> โรคและความผิดปกติของระบบย่อยอาหาร
      </div>
      <div class="tip-box">💡 หัวใจของบทนี้คือ "อาหารโมเลกุลใหญ่ &rarr; โมเลกุลเล็ก &rarr; ดูดซึม &rarr; เซลล์ใช้งาน" จับลำดับนี้ให้แม่น แล้วทุกอวัยวะจะเชื่อมโยงเป็นเรื่องเดียวกัน</div>
    </div>

    <!-- 1. ภาพรวม -->
    <div class="content-section">
      <h3>🍽️ ภาพรวมการย่อยอาหาร</h3>
      <p>เซลล์ใช้สารอาหารโมเลกุลใหญ่ (แป้ง โปรตีน ไขมัน) โดยตรงไม่ได้ เพราะโมเลกุลใหญ่เกินกว่าจะผ่านเยื่อหุ้มเซลล์ จึงต้องผ่าน <strong>การย่อยอาหาร (Digestion)</strong> เพื่อตัดให้เป็นหน่วยเล็ก (น้ำตาลโมเลกุลเดี่ยว กรดอะมิโน กรดไขมัน) แล้วจึงดูดซึมเข้าสู่เซลล์เพื่อใช้เป็นพลังงานและวัตถุดิบ</p>
      <table class="content-table">
        <tr><th>รูปแบบการย่อย</th><th>กลไก</th><th>ตัวอย่าง</th></tr>
        <tr><td>เชิงกล (Mechanical)</td><td>บดเคี้ยว นวด คลุกเคล้า เพิ่มพื้นที่ผิว ไม่เปลี่ยนพันธะเคมี</td><td>ฟันเคี้ยว, กระเพาะนวดอาหาร, น้ำดี emulsify ไขมัน</td></tr>
        <tr><td>เชิงเคมี (Chemical)</td><td>เอนไซม์เร่งปฏิกิริยา hydrolysis ตัดพันธะ เปลี่ยนเป็นโมเลกุลเล็ก</td><td>อะไมเลสตัดแป้ง, เปปซินตัดโปรตีน, ไลเปสตัดไขมัน</td></tr>
      </table>
      <div class="tip-box">💡 การย่อยเชิงเคมีทั้งหมดเป็นปฏิกิริยา <strong>ไฮโดรไลซิส (hydrolysis)</strong> — เติมน้ำเข้าไปเพื่อตัดพันธะระหว่างหน่วยย่อย ส่วนการสร้างพอลิเมอร์ในร่างกายเป็น dehydration synthesis ซึ่งเป็นปฏิกิริยาย้อนกลับ</div>
      <div class="note-box">⚠️ อย่าสับสนระหว่าง <strong>การกิน (ingestion)</strong>, <strong>การย่อย (digestion)</strong>, <strong>การดูดซึม (absorption)</strong> และ <strong>การกำจัดกาก (egestion)</strong> ทั้ง 4 ขั้นนี้เป็นคนละกระบวนการที่ต่อเนื่องกัน</div>
    </div>

    <!-- 2. สัตว์ไม่มีกระดูกสันหลัง + SVG -->
    <div class="content-section">
      <h3>🦠 การย่อยอาหารในสัตว์ไม่มีกระดูกสันหลัง</h3>
      <p>วิวัฒนาการของระบบย่อยพัฒนาจากการย่อยภายในเซลล์ (intracellular) ไปสู่การย่อยภายนอกเซลล์ (extracellular) ในช่องที่ซับซ้อนขึ้น</p>
      <table class="content-table">
        <tr><th>กลุ่ม</th><th>โครงสร้าง</th><th>ลักษณะเด่น</th></tr>
        <tr><td>โพรทิสต์ (อะมีบา พารามีเซียม)</td><td>ฟูดแวคิวโอล (Food vacuole)</td><td>ย่อยภายในเซลล์ทั้งหมด ใช้ phagocytosis จับอาหาร</td></tr>
        <tr><td>ไฮดรา ฟองน้ำ พลานาเรีย</td><td>ช่องแกสโทรวาสคิวลาร์ (Gastrovascular cavity)</td><td>มีช่องเปิดทางเดียว (ปาก=ทวาร) ย่อยทั้งนอกและในเซลล์</td></tr>
        <tr><td>ไส้เดือนดิน แมลง สัตว์ชั้นสูง</td><td>ทางเดินอาหารสมบูรณ์ (Alimentary canal)</td><td>มีปากและทวารแยกกัน อาหารเดินทางทางเดียว ย่อยเป็นช่วง ๆ ได้ประสิทธิภาพสูง</td></tr>
      </table>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="20" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">วิวัฒนาการของช่องย่อยอาหาร</text>
          <!-- Hydra: one opening -->
          <g>
            <ellipse cx="100" cy="120" rx="45" ry="60" fill="#D1FAE5" stroke="#10B981" stroke-width="2"/>
            <path d="M100 65 l-10 -18 M100 65 l10 -18 M100 65 l0 -20" stroke="#10B981" stroke-width="2" fill="none"/>
            <ellipse cx="100" cy="125" rx="18" ry="38" fill="#A7F3D0"/>
            <text x="100" y="60" text-anchor="middle" font-family="Sarabun" font-size="9" fill="#065F46">ปาก = ทวาร</text>
            <text x="100" y="195" text-anchor="middle" font-family="Prompt" font-size="11" font-weight="700" fill="#065F46">ไฮดรา</text>
            <text x="100" y="208" text-anchor="middle" font-family="Sarabun" font-size="9" fill="#64748B">Gastrovascular cavity</text>
          </g>
          <!-- Earthworm: full canal -->
          <g>
            <rect x="190" y="100" width="280" height="34" rx="17" fill="#D1FAE5" stroke="#0EA5A0" stroke-width="2"/>
            <circle cx="205" cy="117" r="9" fill="#34D399"/><text x="205" y="92" text-anchor="middle" font-family="Sarabun" font-size="9" fill="#065F46">ปาก</text>
            <rect x="235" y="108" width="40" height="18" rx="6" fill="#6EE7B7"/><text x="255" y="150" text-anchor="middle" font-family="Sarabun" font-size="9" fill="#065F46">คอหอย</text>
            <ellipse cx="305" cy="117" rx="16" ry="12" fill="#34D399"/><text x="305" y="92" text-anchor="middle" font-family="Sarabun" font-size="9" fill="#065F46">กระเพาะพัก</text>
            <ellipse cx="350" cy="117" rx="16" ry="12" fill="#10B981"/><text x="350" y="150" text-anchor="middle" font-family="Sarabun" font-size="9" fill="#065F46">กึ๋น</text>
            <rect x="375" y="108" width="70" height="18" rx="6" fill="#0D9488"/><text x="410" y="92" text-anchor="middle" font-family="Sarabun" font-size="9" fill="#065F46">ลำไส้</text>
            <circle cx="458" cy="117" r="9" fill="#0F766E"/><text x="458" y="150" text-anchor="middle" font-family="Sarabun" font-size="9" fill="#065F46">ทวาร</text>
            <text x="330" y="195" text-anchor="middle" font-family="Prompt" font-size="11" font-weight="700" fill="#065F46">ไส้เดือนดิน</text>
            <text x="330" y="208" text-anchor="middle" font-family="Sarabun" font-size="9" fill="#64748B">Alimentary canal (ทางเดียว)</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: จากช่องเปิดทางเดียวของไฮดรา สู่ทางเดินอาหารสมบูรณ์ของไส้เดือนดิน</div>
      </div>

      <ul>
        <li><span class="li-dot sc-dot"></span><strong>ไฮดรา:</strong> ปล่อยเอนไซม์เข้าช่อง gastrovascular ย่อยภายนอกเซลล์เบื้องต้น แล้วเซลล์บุผนังจับชิ้นเล็กไปย่อยต่อภายในเซลล์ กากถ่ายออกทางปากเดิม</li>
        <li><span class="li-dot sc-dot"></span><strong>ไส้เดือนดิน:</strong> มี ปาก &rarr; คอหอย &rarr; หลอดอาหาร &rarr; กระเพาะพัก (crop) เก็บอาหาร &rarr; กึ๋น (gizzard) บดอาหาร &rarr; ลำไส้ดูดซึม &rarr; ทวาร</li>
        <li><span class="li-dot sc-dot"></span><strong>แมลง:</strong> ทางเดินอาหารแบ่งเป็น foregut, midgut (ย่อยและดูดซึมหลัก), hindgut มีต่อมน้ำลายและถุงเก็บอาหาร</li>
      </ul>
    </div>

    <!-- 3. ทางเดินอาหารมนุษย์ + SVG -->
    <div class="content-section">
      <h3>🚶 ทางเดินอาหารของมนุษย์</h3>
      <p>ทางเดินอาหารมนุษย์เป็นท่อยาวประมาณ 9 เมตร อาหารเคลื่อนที่ด้วยการบีบตัวเป็นจังหวะของกล้ามเนื้อเรียบ เรียกว่า <strong>เพอริสตัลซิส (Peristalsis)</strong></p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg">
          <text x="210" y="20" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">ทางเดินอาหารของมนุษย์</text>
          <!-- mouth -->
          <ellipse cx="150" cy="48" rx="30" ry="16" fill="#A7F3D0" stroke="#10B981" stroke-width="2"/>
          <text x="150" y="52" text-anchor="middle" font-family="Sarabun" font-size="10" fill="#065F46">ปาก</text>
          <!-- esophagus -->
          <rect x="142" y="62" width="16" height="70" rx="8" fill="#6EE7B7" stroke="#0EA5A0" stroke-width="1.5"/>
          <text x="200" y="100" font-family="Sarabun" font-size="10" fill="#065F46">หลอดอาหาร</text>
          <!-- stomach -->
          <path d="M150 132 C120 140 110 175 130 195 C150 215 180 205 175 175 C172 155 170 138 150 132 Z" fill="#34D399" stroke="#0EA5A0" stroke-width="2"/>
          <text x="240" y="170" font-family="Sarabun" font-size="10" fill="#065F46">กระเพาะอาหาร (pH ~2)</text>
          <!-- liver + pancreas hints -->
          <ellipse cx="95" cy="160" rx="26" ry="16" fill="#FCA5A5" stroke="#DC2626" stroke-width="1.5"/>
          <text x="95" y="163" text-anchor="middle" font-family="Sarabun" font-size="9" fill="#7F1D1D">ตับ</text>
          <ellipse cx="205" cy="210" rx="24" ry="11" fill="#FDE68A" stroke="#D97706" stroke-width="1.5"/>
          <text x="205" y="213" text-anchor="middle" font-family="Sarabun" font-size="8" fill="#92400E">ตับอ่อน</text>
          <!-- small intestine -->
          <path d="M140 205 q-20 30 10 40 q40 12 0 30 q-40 14 5 30 q40 12 -5 28" fill="none" stroke="#10B981" stroke-width="11" stroke-linecap="round"/>
          <text x="240" y="270" font-family="Sarabun" font-size="10" fill="#065F46">ลำไส้เล็ก (ดูดซึมหลัก)</text>
          <!-- large intestine frame -->
          <path d="M110 240 L110 320 L210 320 L210 250" fill="none" stroke="#0D9488" stroke-width="13" stroke-linecap="round"/>
          <text x="225" y="305" font-family="Sarabun" font-size="10" fill="#065F46">ลำไส้ใหญ่ (ดูดน้ำกลับ)</text>
          <!-- rectum/anus -->
          <rect x="152" y="320" width="16" height="34" rx="6" fill="#0F766E"/>
          <text x="180" y="345" font-family="Sarabun" font-size="9" fill="#065F46">ทวารหนัก</text>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: แผนภาพทางเดินอาหารมนุษย์และอวัยวะช่วยย่อย (ตับ ตับอ่อน)</div>
      </div>

      <table class="content-table">
        <tr><th>อวัยวะ</th><th>การย่อยเชิงกล</th><th>เอนไซม์ / สารคัด</th><th>pH</th></tr>
        <tr><td>ปาก</td><td>ฟันเคี้ยว ลิ้นคลุกเคล้า</td><td>น้ำลาย: ซาลิวารีอะไมเลส (แป้ง &rarr; มอลโทส)</td><td>~6.5–7</td></tr>
        <tr><td>หลอดอาหาร</td><td>เพอริสตัลซิสลำเลียง</td><td>— (ไม่มีเอนไซม์ มีเมือกหล่อลื่น)</td><td>~7</td></tr>
        <tr><td>กระเพาะอาหาร</td><td>กล้ามเนื้อ 3 ชั้นนวดเป็นไคม์ (chyme)</td><td>HCl + เปปซิน (โปรตีน &rarr; พอลิเพปไทด์), เรนนิน (ทารก)</td><td>~1.5–2</td></tr>
        <tr><td>ลำไส้เล็ก (ดูโอดีนัม-เจจูนัม-ไอเลียม)</td><td>การบีบแบบ segmentation</td><td>มอลเทส แล็กเทส ซูเครส อะมิโนเพปทิเดส + เอนไซม์ตับอ่อน</td><td>~7.5–8.5</td></tr>
        <tr><td>ลำไส้ใหญ่</td><td>เคลื่อนกากช้า ๆ</td><td>ไม่มีเอนไซม์ย่อย — แบคทีเรียประจำถิ่นสร้างวิตามิน K, B</td><td>~7</td></tr>
        <tr><td>ทวารหนัก</td><td>หูรูดควบคุมการขับถ่าย</td><td>—</td><td>—</td></tr>
      </table>
      <div class="note-box">⚠️ เปปซินถูกหลั่งในรูปไม่ทำงาน <strong>เปปซิโนเจน (pepsinogen)</strong> แล้วถูก HCl เปลี่ยนเป็นเปปซินที่ทำงานได้ กลไกนี้ป้องกันไม่ให้เอนไซม์ย่อยเซลล์ที่สร้างมันเอง ส่วนผนังกระเพาะมีเมือก (mucus) เคลือบกันกรดกัด</div>
      <div class="tip-box">💡 กระเพาะอาหารดูดซึมสารอาหารน้อยมาก แต่ดูดซึมแอลกอฮอล์และยาบางชนิดได้ จึงเมาเร็วเมื่อดื่มตอนท้องว่าง</div>
    </div>

    <!-- 4. อวัยวะช่วยย่อย -->
    <div class="content-section">
      <h3>🧪 อวัยวะช่วยย่อย (Accessory Organs)</h3>
      <p>อวัยวะเหล่านี้อาหารไม่ได้ผ่านเข้าไปโดยตรง แต่หลั่งสารช่วยย่อยเข้าสู่ทางเดินอาหาร โดยเฉพาะที่ดูโอดีนัม</p>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>ตับ (Liver):</strong> สร้าง <strong>น้ำดี (Bile)</strong> ซึ่งไม่ใช่เอนไซม์ แต่ทำหน้าที่ <em>emulsify</em> ไขมันให้เป็นหยดเล็ก เพิ่มพื้นที่ผิวให้ไลเปสทำงาน นอกจากนี้ตับยังกำจัดสารพิษและควบคุมระดับน้ำตาลในเลือด</li>
        <li><span class="li-dot sc-dot"></span><strong>ถุงน้ำดี (Gallbladder):</strong> เก็บและทำให้น้ำดีเข้มข้น ปล่อยน้ำดีเข้าดูโอดีนัมเมื่อมีไขมันเข้ามา</li>
        <li><span class="li-dot sc-dot"></span><strong>ตับอ่อน (Pancreas):</strong> หลั่งน้ำย่อยที่มีเอนไซม์ครบทุกหมู่ — แพนครีเอติกอะไมเลส (แป้ง), ทริปซิน/ไคโมทริปซิน (โปรตีน), ไลเปส (ไขมัน), นิวคลีเอส (กรดนิวคลีอิก) พร้อม <strong>โซเดียมไบคาร์บอเนต (NaHCO₃)</strong> ปรับไคม์ที่เป็นกรดจากกระเพาะให้เป็นด่าง</li>
      </ul>
      <div class="tip-box">💡 ตับอ่อนเป็นทั้งต่อมมีท่อ (exocrine — หลั่งเอนไซม์) และต่อมไร้ท่อ (endocrine — หลั่งอินซูลิน/กลูคากอนจาก islets of Langerhans) ในอวัยวะเดียวกัน</div>
    </div>

    <!-- 5. การดูดซึม + SVG -->
    <div class="content-section">
      <h3>🩺 การดูดซึมที่ลำไส้เล็ก</h3>
      <p>ลำไส้เล็กคือบริเวณดูดซึมหลัก พื้นผิวด้านในเพิ่มมหาศาลด้วยโครงสร้าง 3 ระดับ ทำให้พื้นที่ผิวรวมมากถึงประมาณ 250–300 ตารางเมตร (เท่าสนามเทนนิส)</p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="20" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">โครงสร้างวิลลัส (Villi) และไมโครวิลไล</text>
          <!-- intestinal wall folds -->
          <rect x="40" y="40" width="200" height="170" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="1.5"/>
          <!-- villi -->
          <g fill="#34D399" stroke="#0EA5A0" stroke-width="1.5">
            <path d="M60 210 q12 -120 24 0 Z"/>
            <path d="M100 210 q12 -120 24 0 Z"/>
            <path d="M140 210 q12 -120 24 0 Z"/>
            <path d="M180 210 q12 -120 24 0 Z"/>
          </g>
          <!-- capillary + lacteal inside one villus -->
          <line x1="116" y1="200" x2="116" y2="120" stroke="#DC2626" stroke-width="2"/>
          <line x1="124" y1="200" x2="124" y2="120" stroke="#3B82F6" stroke-width="2"/>
          <line x1="120" y1="200" x2="120" y2="110" stroke="#FACC15" stroke-width="2.5"/>
          <text x="150" y="70" font-family="Sarabun" font-size="9" fill="#065F46">วิลลัส (villus)</text>
          <!-- legend -->
          <g font-family="Sarabun" font-size="10">
            <line x1="270" y1="55" x2="290" y2="55" stroke="#DC2626" stroke-width="3"/><text x="296" y="59" fill="#7F1D1D">หลอดเลือดฝอย — รับน้ำตาล/กรดอะมิโน</text>
            <line x1="270" y1="80" x2="290" y2="80" stroke="#FACC15" stroke-width="3"/><text x="296" y="84" fill="#92400E">แลกทีล (lacteal) — รับไขมัน</text>
          </g>
          <!-- microvilli zoom -->
          <rect x="270" y="110" width="220" height="120" rx="8" fill="#F0FDFA" stroke="#0EA5A0" stroke-width="1.5"/>
          <text x="380" y="128" text-anchor="middle" font-family="Sarabun" font-size="10" fill="#065F46">ขยายผิวเซลล์ &rarr; ไมโครวิลไล</text>
          <g stroke="#10B981" stroke-width="2.5" stroke-linecap="round">
            <line x1="290" y1="220" x2="290" y2="150"/><line x1="305" y1="220" x2="305" y2="150"/>
            <line x1="320" y1="220" x2="320" y2="150"/><line x1="335" y1="220" x2="335" y2="150"/>
            <line x1="350" y1="220" x2="350" y2="150"/><line x1="365" y1="220" x2="365" y2="150"/>
            <line x1="380" y1="220" x2="380" y2="150"/><line x1="395" y1="220" x2="395" y2="150"/>
            <line x1="410" y1="220" x2="410" y2="150"/><line x1="425" y1="220" x2="425" y2="150"/>
            <line x1="440" y1="220" x2="440" y2="150"/><line x1="455" y1="220" x2="455" y2="150"/>
            <line x1="470" y1="220" x2="470" y2="150"/>
          </g>
          <text x="380" y="240" text-anchor="middle" font-family="Sarabun" font-size="9" fill="#64748B">brush border บนผิวเซลล์เยื่อบุ</text>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: รอยพับ &rarr; วิลไล &rarr; ไมโครวิลไล เพิ่มพื้นที่ผิวดูดซึมหลายร้อยเท่า</div>
      </div>

      <ul>
        <li><span class="li-dot sc-dot"></span><strong>3 ระดับเพิ่มพื้นที่ผิว:</strong> รอยพับวงกลม (circular folds) &rarr; วิลไล (villi) &rarr; ไมโครวิลไล (microvilli / brush border) บนเซลล์เยื่อบุ</li>
        <li><span class="li-dot sc-dot"></span><strong>กลูโคสและกรดอะมิโน</strong> ละลายน้ำ &rarr; เข้าสู่หลอดเลือดฝอย &rarr; ลำเลียงสู่ตับทาง <em>hepatic portal vein</em> ก่อนเข้าสู่หัวใจ</li>
        <li><span class="li-dot sc-dot"></span><strong>กรดไขมันและกลีเซอรอล</strong> รวมเป็นไคโลไมครอน &rarr; เข้าสู่ <em>แลกทีล (lacteal)</em> ในระบบน้ำเหลือง &rarr; ปล่อยเข้าเลือดที่หลอดเลือดดำใต้ไหปลาร้า</li>
      </ul>
    </div>

    <!-- 6. ฮอร์โมนควบคุม -->
    <div class="content-section">
      <h3>🧬 ฮอร์โมนควบคุมการย่อยอาหาร</h3>
      <p>การหลั่งน้ำย่อยถูกควบคุมทั้งโดยระบบประสาทและฮอร์โมนจากเยื่อบุทางเดินอาหารเอง เพื่อให้หลั่งเฉพาะเมื่อจำเป็น</p>
      <table class="content-table">
        <tr><th>ฮอร์โมน</th><th>หลั่งจาก</th><th>สิ่งกระตุ้น</th><th>ผล</th></tr>
        <tr><td>แกสทริน (Gastrin)</td><td>ผนังกระเพาะอาหาร</td><td>อาหาร (โปรตีน) เข้าสู่กระเพาะ</td><td>กระตุ้นกระเพาะหลั่ง HCl และเปปซิโนเจน</td></tr>
        <tr><td>ซีครีติน (Secretin)</td><td>ผนังดูโอดีนัม</td><td>ไคม์ที่เป็นกรดเข้าสู่ลำไส้เล็ก</td><td>กระตุ้นตับอ่อนหลั่ง NaHCO₃ ปรับ pH เป็นด่าง</td></tr>
        <tr><td>โคเลซิสโตไคนิน (CCK)</td><td>ผนังดูโอดีนัม</td><td>ไขมันและกรดอะมิโนในลำไส้เล็ก</td><td>กระตุ้นถุงน้ำดีบีบน้ำดี + ตับอ่อนหลั่งเอนไซม์</td></tr>
      </table>
      <div class="tip-box">💡 จำง่าย: <strong>Secretin</strong> ดูแล "กรด-ด่าง" (เรียกน้ำด่างมาดับกรด), <strong>CCK</strong> ดูแล "ไขมัน-เอนไซม์" (เรียกน้ำดีและเอนไซม์มาย่อยไขมัน)</div>
    </div>

    <!-- 7. สารอาหารและพลังงาน -->
    <div class="content-section">
      <h3>🥦 สารอาหารและพลังงาน</h3>
      <table class="content-table">
        <tr><th>สารอาหาร</th><th>พลังงาน (kcal/g)</th><th>หน้าที่หลัก</th></tr>
        <tr><td>คาร์โบไฮเดรต</td><td>4</td><td>แหล่งพลังงานหลักของเซลล์</td></tr>
        <tr><td>โปรตีน</td><td>4</td><td>สร้าง/ซ่อมเนื้อเยื่อ เอนไซม์ ฮอร์โมน</td></tr>
        <tr><td>ไขมัน</td><td>9</td><td>พลังงานสำรอง เยื่อหุ้มเซลล์ ฮอร์โมน</td></tr>
        <tr><td>วิตามินและแร่ธาตุ</td><td>0</td><td>โคแฟกเตอร์ของเอนไซม์ โครงสร้างกระดูก/เลือด</td></tr>
        <tr><td>น้ำ</td><td>0</td><td>ตัวทำละลายและตัวกลางของทุกปฏิกิริยา</td></tr>
        <tr><td>ใยอาหาร (Fiber)</td><td>0</td><td>กระตุ้นการบีบตัวของลำไส้ ลดท้องผูก</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">การคำนวณดัชนีมวลกาย</div>
        <strong>BMI</strong> = น้ำหนัก (kg) &divide; [ส่วนสูง (m)]²
      </div>
      <table class="content-table">
        <tr><th>ช่วง BMI (เกณฑ์เอเชีย)</th><th>การแปลผล</th></tr>
        <tr><td>&lt; 18.5</td><td>น้ำหนักน้อย / ผอม</td></tr>
        <tr><td>18.5 – 22.9</td><td>ปกติ (เหมาะสม)</td></tr>
        <tr><td>23.0 – 24.9</td><td>น้ำหนักเกิน</td></tr>
        <tr><td>&ge; 25.0</td><td>อ้วน</td></tr>
      </table>
      <div class="tip-box">💡 ตัวอย่าง: น้ำหนัก 60 kg สูง 1.70 m &rarr; BMI = 60 &divide; (1.70)² = 60 &divide; 2.89 &asymp; 20.8 อยู่ในเกณฑ์ปกติ</div>
    </div>

    <!-- 8. โรค -->
    <div class="content-section">
      <h3>⚠️ โรคและความผิดปกติของระบบย่อยอาหาร</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>กรดไหลย้อน (GERD):</strong> หูรูดหลอดอาหารส่วนล่างอ่อนแอ กรดจากกระเพาะไหลย้อนขึ้นมาแสบหน้าอก</li>
        <li><span class="li-dot sc-dot"></span><strong>แผลในกระเพาะ/ลำไส้ (Peptic ulcer):</strong> ส่วนใหญ่เกิดจากแบคทีเรีย <em>Helicobacter pylori</em> ที่ทำลายชั้นเมือกป้องกัน</li>
        <li><span class="li-dot sc-dot"></span><strong>นิ่วในถุงน้ำดี (Gallstones):</strong> คอเลสเตอรอลในน้ำดีเข้มข้นเกินจนตกผลึก</li>
        <li><span class="li-dot sc-dot"></span><strong>ไส้ติ่งอักเสบ (Appendicitis):</strong> ไส้ติ่งอุดตันและติดเชื้อ ปวดท้องน้อยขวา มักต้องผ่าตัด</li>
        <li><span class="li-dot sc-dot"></span><strong>ภาวะย่อยแล็กโทสไม่ได้ (Lactose intolerance):</strong> ขาดเอนไซม์แล็กเทส ทำให้ท้องอืดเมื่อดื่มนม</li>
      </ul>
    </div>

    <!-- คำถามทบทวน -->
    <div class="content-section">
      <h3>📝 คำถามทบทวน</h3>
      <div class="q-box">Q1: ทำไมต้องเคี้ยวอาหารให้ละเอียด?
        <div class="q-a">ตอบ: เพื่อเพิ่มพื้นที่ผิวให้เอนไซม์ทำปฏิกิริยาได้มากขึ้น และช่วยลดภาระการบดของกระเพาะอาหาร</div>
      </div>
      <div class="q-box">Q2: น้ำดี (Bile) ย่อยไขมันได้หรือไม่ เพราะอะไร?
        <div class="q-a">ตอบ: ไม่ย่อย — น้ำดีไม่ใช่เอนไซม์ ทำเพียง emulsify ไขมันให้เป็นหยดเล็ก ๆ เพิ่มพื้นที่ผิว แล้วเอนไซม์ไลเปสจึงย่อยได้เร็วขึ้น</div>
      </div>
      <div class="q-box">Q3: เปรียบเทียบช่อง gastrovascular cavity กับ alimentary canal ต่างกันอย่างไร?
        <div class="q-a">ตอบ: gastrovascular cavity มีช่องเปิดทางเดียว (ปาก=ทวาร) อาหารและกากปนกัน ส่วน alimentary canal มีปากและทวารแยกกัน อาหารเดินทางทางเดียว ย่อยเป็นช่วง ๆ ได้ประสิทธิภาพสูงกว่า</div>
      </div>
      <div class="q-box">Q4: เหตุใดเปปซินจึงถูกหลั่งในรูปเปปซิโนเจนก่อน?
        <div class="q-a">ตอบ: เพื่อป้องกันไม่ให้เอนไซม์ย่อยโปรตีนของเซลล์ที่สร้างมันเอง โดยเปปซิโนเจนจะถูกกรด HCl เปลี่ยนเป็นเปปซินที่ทำงานได้เฉพาะในช่องกระเพาะ</div>
      </div>
      <div class="q-box">Q5: ฮอร์โมน Secretin และ CCK ต่างกันที่หน้าที่อย่างไร?
        <div class="q-a">ตอบ: Secretin กระตุ้นตับอ่อนหลั่ง NaHCO₃ เพื่อปรับกรดให้เป็นด่าง ส่วน CCK กระตุ้นถุงน้ำดีบีบน้ำดีและตับอ่อนหลั่งเอนไซม์ (เด่นเรื่องการย่อยไขมัน)</div>
      </div>
      <div class="q-box">Q6: เหตุใดสารอาหารที่ดูดซึมจากลำไส้เล็กจึงต้องผ่านตับก่อน?
        <div class="q-a">ตอบ: น้ำตาลและกรดอะมิโนเข้าสู่ hepatic portal vein ไปยังตับก่อน เพื่อให้ตับปรับระดับน้ำตาล สะสมไกลโคเจน และกำจัดสารพิษ ก่อนปล่อยเข้าสู่กระแสเลือดทั่วร่างกาย</div>
      </div>
    </div>
  `,
  b5c19: `
    <div class="content-section">
      <h3>❤️ ภาพรวม</h3>
      <p>ระบบหมุนเวียนเลือด (Circulatory system) ขนส่งสารอาหาร แก๊ส ของเสีย ฮอร์โมน และความร้อนทั่วร่างกาย ผ่าน <strong>หัวใจ หลอดเลือด และเลือด</strong></p>
    </div>
    <div class="content-section">
      <h3>💓 โครงสร้างหัวใจ</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>4 ห้อง: Atrium ซ้าย-ขวา (ห้องบน), Ventricle ซ้าย-ขวา (ห้องล่าง)</li>
        <li><span class="li-dot sc-dot"></span>ลิ้น: Tricuspid (ขวาบน-ล่าง), Mitral/Bicuspid (ซ้ายบน-ล่าง), Semilunar (สู่หลอดเลือด)</li>
        <li><span class="li-dot sc-dot"></span>SA node คุมจังหวะ → AV node → Bundle of His → Purkinje fibers</li>
      </ul>
    </div>
    <div class="content-section">
      <h3>🔄 วงจรการไหลเวียน</h3>
      <table class="content-table">
        <tr><th>วงจร</th><th>เส้นทาง</th></tr>
        <tr><td>Pulmonary (สู่ปอด)</td><td>RA → RV → Pulmonary artery → ปอด → Pulmonary vein → LA</td></tr>
        <tr><td>Systemic (สู่ร่างกาย)</td><td>LA → LV → Aorta → ร่างกาย → Vena cava → RA</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>เลือดที่ pulmonary artery</strong> เป็นเลือดดำ (deoxygenated) — เป็น artery เดียวที่นำเลือดดำ ส่วน pulmonary vein นำเลือดแดงกลับเข้าหัวใจ</div>
    </div>
    <div class="content-section">
      <h3>🩸 องค์ประกอบของเลือด</h3>
      <table class="content-table">
        <tr><th>ส่วนประกอบ</th><th>%</th><th>หน้าที่</th></tr>
        <tr><td>พลาสมา</td><td>55%</td><td>น้ำ โปรตีน ฮอร์โมน สารอาหาร</td></tr>
        <tr><td>เม็ดเลือดแดง (RBC)</td><td>44%</td><td>ขนส่ง O₂ ผ่าน hemoglobin (~5 ล้าน/μL)</td></tr>
        <tr><td>เม็ดเลือดขาว (WBC)</td><td>1%</td><td>ภูมิคุ้มกัน (~5,000-10,000/μL)</td></tr>
        <tr><td>เกล็ดเลือด (Platelet)</td><td>&lt;1%</td><td>การแข็งตัวของเลือด</td></tr>
      </table>
    </div>
    <div class="content-section">
      <h3>🚰 หลอดเลือด 3 ชนิด</h3>
      <table class="content-table">
        <tr><th>ชนิด</th><th>นำเลือดจาก/ไป</th><th>ลักษณะ</th></tr>
        <tr><td>Artery</td><td>ออกจากหัวใจ</td><td>ผนังหนา ยืดหยุ่น แรงดันสูง</td></tr>
        <tr><td>Vein</td><td>กลับเข้าหัวใจ</td><td>ผนังบาง มี valve กันไหลย้อน</td></tr>
        <tr><td>Capillary</td><td>เชื่อม artery-vein</td><td>ผนังบาง 1 ชั้น แลกเปลี่ยนสาร</td></tr>
      </table>
    </div>
    <div class="content-section">
      <h3>🆎 หมู่เลือดและการให้เลือด</h3>
      <table class="content-table">
        <tr><th>หมู่เลือด</th><th>Antigen บน RBC</th><th>Antibody ในพลาสมา</th><th>รับได้จาก</th></tr>
        <tr><td>A</td><td>A</td><td>anti-B</td><td>A, O</td></tr>
        <tr><td>B</td><td>B</td><td>anti-A</td><td>B, O</td></tr>
        <tr><td>AB</td><td>A และ B</td><td>—</td><td>ทุกหมู่ (Universal recipient)</td></tr>
        <tr><td>O</td><td>—</td><td>anti-A และ anti-B</td><td>O เท่านั้น (Universal donor)</td></tr>
      </table>
      <div class="tip-box">💡 <strong>Rh factor:</strong> มี Rh⁺ หรือ Rh⁻ — แม่ Rh⁻ ตั้งครรภ์ลูก Rh⁺ ครั้งที่ 2 อาจเกิด erythroblastosis fetalis ต้องฉีด RhoGAM</div>
    </div>
    <div class="content-section">
      <h3>🚨 โรคที่เกี่ยวข้อง</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>ความดันโลหิตสูง (Hypertension): &gt;140/90 mmHg</li>
        <li><span class="li-dot sc-dot"></span>หลอดเลือดแข็งตัว (Atherosclerosis): ไขมันสะสมในผนัง</li>
        <li><span class="li-dot sc-dot"></span>หัวใจขาดเลือด: หลอดเลือดโคโรนารีอุดตัน</li>
        <li><span class="li-dot sc-dot"></span>โรคโลหิตจาง (Anemia): RBC น้อย หรือ Hb ต่ำ</li>
      </ul>
    </div>
    <div class="content-section">
      <h3>📝 คำถามทบทวน</h3>
      <div class="q-box">Q1: ทำไมหัวใจห้องล่างซ้ายมีผนังหนาที่สุด?
        <div class="q-a">ตอบ: เพราะต้องบีบเลือดส่งไปทั่วร่างกายผ่าน aorta — แรงดันสูงที่สุด</div>
      </div>
      <div class="q-box">Q2: คนหมู่เลือด O สามารถให้เลือดกับคนหมู่ AB ได้หรือไม่?
        <div class="q-a">ตอบ: ได้ในกรณีฉุกเฉิน เพราะ O ไม่มี antigen — แต่ในทางปฏิบัติพยายามให้เลือดหมู่เดียวกันเสมอ</div>
      </div>
    </div>
  `,
  b5c20: `
    <div class="content-section">
      <h3>🫁 ภาพรวม</h3>
      <p>ระบบหายใจรับออกซิเจนเข้าและขับคาร์บอนไดออกไซด์ออก — แลกเปลี่ยนแก๊สที่ <strong>ถุงลม (Alveoli)</strong> ในปอด</p>
    </div>
    <div class="content-section">
      <h3>🚪 ทางเดินอากาศ</h3>
      <p>จมูก → คอหอย (Pharynx) → กล่องเสียง (Larynx) → หลอดลม (Trachea) → หลอดลมแขนง (Bronchi) → Bronchioles → Alveoli</p>
      <ul>
        <li><span class="li-dot sc-dot"></span>ขนจมูกและมูกดักฝุ่น</li>
        <li><span class="li-dot sc-dot"></span>ฝาปิดกล่องเสียง (Epiglottis) ป้องกันอาหารเข้าหลอดลม</li>
        <li><span class="li-dot sc-dot"></span>Trachea มีกระดูกอ่อนรูปตัว C กันยุบ</li>
        <li><span class="li-dot sc-dot"></span>ถุงลมประมาณ 300 ล้านถุง พื้นที่รวม ~70 ตร.ม.</li>
      </ul>
    </div>
    <div class="content-section">
      <h3>🔄 กลไกการหายใจ</h3>
      <table class="content-table">
        <tr><th>การหายใจ</th><th>กล้ามเนื้อ</th><th>ความดันในปอด</th></tr>
        <tr><td>เข้า (Inhalation)</td><td>กระบังลมหดต่ำ + กล้ามเนื้อซี่โครงดึงขึ้น</td><td>ลดลง → อากาศไหลเข้า</td></tr>
        <tr><td>ออก (Exhalation)</td><td>กล้ามเนื้อคลาย กระบังลมกลับ</td><td>เพิ่มขึ้น → อากาศออก</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">ปริมาตรอากาศในปอด</div>
        Tidal volume (TV) = ปกติ ~500 mL<br>
        Vital capacity (VC) ≈ 4-5 L<br>
        Total lung capacity ≈ 6 L
      </div>
    </div>
    <div class="content-section">
      <h3>🔄 การแลกเปลี่ยนแก๊ส</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>O₂: ถุงลม (PO₂ สูง) → capillary (PO₂ ต่ำ) → จับกับ Hb → เนื้อเยื่อ</li>
        <li><span class="li-dot sc-dot"></span>CO₂: เนื้อเยื่อ (PCO₂ สูง) → เลือด → ปอด → หายใจออก</li>
        <li><span class="li-dot sc-dot"></span>CO₂ ส่วนใหญ่ขนส่งในรูป HCO₃⁻ ใน plasma (~70%)</li>
      </ul>
    </div>
    <div class="content-section">
      <h3>🧠 การควบคุมการหายใจ</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>ศูนย์ควบคุมที่ก้านสมอง (Medulla oblongata)</li>
        <li><span class="li-dot sc-dot"></span>ตรวจ pCO₂ และ pH ในเลือดเป็นหลัก (ไม่ใช่ pO₂)</li>
        <li><span class="li-dot sc-dot"></span>CO₂ สูง → pH ต่ำ → กระตุ้นหายใจเร็วขึ้น</li>
      </ul>
      <div class="tip-box">💡 <strong>ทำไมกลั้นหายใจนาน ๆ ไม่ได้?</strong> เพราะ CO₂ สะสม ไม่ใช่ O₂ หมด — ร่างกายจึงบังคับให้หายใจอีกครั้ง</div>
    </div>
    <div class="content-section">
      <h3>⚠️ โรคที่เกี่ยวข้อง</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>หอบหืด (Asthma): หลอดลมตีบ</li>
        <li><span class="li-dot sc-dot"></span>ถุงลมโป่งพอง (Emphysema): จากสูบบุหรี่</li>
        <li><span class="li-dot sc-dot"></span>วัณโรค (TB): เชื้อ Mycobacterium tuberculosis</li>
        <li><span class="li-dot sc-dot"></span>COVID-19: เชื้อไวรัส SARS-CoV-2</li>
        <li><span class="li-dot sc-dot"></span>PM 2.5: ฝุ่นละเอียดเข้าถึง alveoli ทำลายปอด</li>
      </ul>
    </div>
    <div class="content-section">
      <h3>📝 คำถามทบทวน</h3>
      <div class="q-box">Q1: ทำไมขึ้นภูเขาสูงแล้วเหนื่อยง่าย?
        <div class="q-a">ตอบ: ที่ระดับสูง pO₂ ในอากาศต่ำลง → ร่างกายได้ออกซิเจนน้อยลงต่อการหายใจหนึ่งครั้ง</div>
      </div>
      <div class="q-box">Q2: ถุงลมต้องเปียกชื้นเสมอเพราะอะไร?
        <div class="q-a">ตอบ: เพื่อให้แก๊สละลายในน้ำก่อนแพร่ผ่านเยื่อหุ้มเซลล์เข้า capillary</div>
      </div>
    </div>
  `,
  b5c21: `
    <div class="content-section">
      <h3>💧 ภาพรวม</h3>
      <p>ระบบขับถ่ายกำจัดของเสียจากการเผาผลาญ (ยูเรีย กรดยูริก) และควบคุมสมดุลน้ำและเกลือแร่ในร่างกาย — มี <strong>ไต ท่อไต กระเพาะปัสสาวะ ท่อปัสสาวะ</strong></p>
    </div>
    <div class="content-section">
      <h3>🫘 โครงสร้างของไต</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>ไตประกอบด้วย Cortex (นอก) + Medulla (ใน) + Renal pelvis</li>
        <li><span class="li-dot sc-dot"></span>หน่วยทำงาน = Nephron มีประมาณ 1 ล้าน nephron ต่อไต</li>
        <li><span class="li-dot sc-dot"></span>Nephron ประกอบด้วย: Glomerulus + Bowman's capsule + Proximal tubule + Loop of Henle + Distal tubule + Collecting duct</li>
      </ul>
    </div>
    <div class="content-section">
      <h3>🔄 กระบวนการสร้างปัสสาวะ</h3>
      <table class="content-table">
        <tr><th>ขั้นตอน</th><th>สถานที่</th><th>เกิดอะไร</th></tr>
        <tr><td>1. การกรอง (Filtration)</td><td>Glomerulus → Bowman's capsule</td><td>กรองน้ำ เกลือ กลูโคส ยูเรีย ออกจากเลือด</td></tr>
        <tr><td>2. การดูดกลับ (Reabsorption)</td><td>Proximal tubule, Loop of Henle</td><td>ดูดกลับ น้ำ กลูโคส ไอออน 99%</td></tr>
        <tr><td>3. การหลั่ง (Secretion)</td><td>Distal tubule</td><td>หลั่ง H⁺, K⁺ จากเลือดเข้าท่อ</td></tr>
        <tr><td>4. การขับถ่าย (Excretion)</td><td>Collecting duct → กระเพาะปัสสาวะ</td><td>ปัสสาวะ ~1.5 L/วัน</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>ปกติแล้ว ไม่ควรมีกลูโคสในปัสสาวะ</strong> — ถ้ามี แสดงว่าน้ำตาลในเลือดสูงเกินกว่าที่ไตจะดูดกลับได้หมด (เบาหวาน)</div>
    </div>
    <div class="content-section">
      <h3>💧 ฮอร์โมนควบคุม</h3>
      <table class="content-table">
        <tr><th>ฮอร์โมน</th><th>หน้าที่</th></tr>
        <tr><td>ADH (Antidiuretic hormone)</td><td>เพิ่มการดูดน้ำกลับ → ปัสสาวะเข้มข้น</td></tr>
        <tr><td>Aldosterone</td><td>เพิ่มการดูด Na⁺ กลับ</td></tr>
        <tr><td>Renin-Angiotensin</td><td>ปรับความดันโลหิต</td></tr>
        <tr><td>ANP (Atrial natriuretic peptide)</td><td>เพิ่มการขับ Na⁺ ออก</td></tr>
      </table>
    </div>
    <div class="content-section">
      <h3>🩸 การฟอกไต (Dialysis)</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>ผู้ป่วยไตวาย ใช้เครื่องกรองแทนไต</li>
        <li><span class="li-dot sc-dot"></span>Hemodialysis: ใช้เครื่อง 3-4 ชั่วโมง × 3 ครั้ง/สัปดาห์</li>
        <li><span class="li-dot sc-dot"></span>Peritoneal dialysis: ใช้เยื่อบุช่องท้องเป็นตัวกรอง</li>
      </ul>
    </div>
    <div class="content-section">
      <h3>⚠️ อวัยวะอื่นที่ช่วยขับของเสีย</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>ผิวหนัง: ขับเหงื่อ (น้ำ + เกลือ + ยูเรียเล็กน้อย)</li>
        <li><span class="li-dot sc-dot"></span>ปอด: ขับ CO₂</li>
        <li><span class="li-dot sc-dot"></span>ตับ: เปลี่ยนแอมโมเนีย → ยูเรีย (urea cycle)</li>
        <li><span class="li-dot sc-dot"></span>ลำไส้ใหญ่: ขับกากอาหาร</li>
      </ul>
      <div class="tip-box">💡 <strong>การดูแลไต:</strong> ดื่มน้ำเพียงพอ 6-8 แก้ว/วัน ลดเกลือ ไม่กินยาเกินขนาด ตรวจสุขภาพประจำปี</div>
    </div>
    <div class="content-section">
      <h3>📝 คำถามทบทวน</h3>
      <div class="q-box">Q1: ทำไมปัสสาวะตอนเช้าจึงเข้มข้นกว่าตอนกลางวัน?
        <div class="q-a">ตอบ: ตอนกลางคืน ADH หลั่งมากกว่า → ดูดน้ำกลับมาก → ปัสสาวะเข้มข้น</div>
      </div>
    </div>
  `,
  b5c22: `
    <div class="content-section">
      <h3>🧠 ภาพรวม</h3>
      <p>ระบบประสาทควบคุมและประสานงานทุกกิจกรรมของร่างกาย ผ่าน <strong>เซลล์ประสาท (Neuron)</strong> ส่งสัญญาณไฟฟ้าและเคมี</p>
    </div>
    <div class="content-section">
      <h3>🔌 โครงสร้าง Neuron</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>Dendrite: รับสัญญาณเข้า</li>
        <li><span class="li-dot sc-dot"></span>Cell body (Soma): มีนิวเคลียส</li>
        <li><span class="li-dot sc-dot"></span>Axon: ส่งสัญญาณออก (ยาวที่สุดในมนุษย์ ~1 m)</li>
        <li><span class="li-dot sc-dot"></span>Myelin sheath: ฉนวน เพิ่มความเร็วการนำสัญญาณ</li>
        <li><span class="li-dot sc-dot"></span>Node of Ranvier: ช่องว่างใน myelin — saltatory conduction</li>
      </ul>
    </div>
    <div class="content-section">
      <h3>⚡ Action Potential</h3>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li>Resting potential: −70 mV (Na⁺ นอก, K⁺ ใน)</li>
        <li>Depolarization: Na⁺ ไหลเข้า → +30 mV</li>
        <li>Repolarization: K⁺ ไหลออก → กลับเป็นลบ</li>
        <li>Hyperpolarization: K⁺ ไหลออกเกิน → ใต้ −70 mV</li>
        <li>Na⁺/K⁺ pump รีเซ็ตให้กลับสู่ resting</li>
      </ol>
    </div>
    <div class="content-section">
      <h3>🔗 Synapse และสารสื่อประสาท</h3>
      <table class="content-table">
        <tr><th>Neurotransmitter</th><th>หน้าที่</th></tr>
        <tr><td>Acetylcholine</td><td>กล้ามเนื้อหดตัว ความจำ</td></tr>
        <tr><td>Dopamine</td><td>ความสุข ระบบรางวัล</td></tr>
        <tr><td>Serotonin</td><td>อารมณ์ การนอน</td></tr>
        <tr><td>GABA</td><td>ยับยั้ง (สงบประสาท)</td></tr>
        <tr><td>Norepinephrine</td><td>ตื่นตัว สู้หรือหนี</td></tr>
      </table>
    </div>
    <div class="content-section">
      <h3>🧠 โครงสร้างระบบประสาทมนุษย์</h3>
      <table class="content-table">
        <tr><th>ส่วน</th><th>หน้าที่</th></tr>
        <tr><td>Cerebrum (สมองใหญ่)</td><td>คิด เรียนรู้ ความจำ การพูด</td></tr>
        <tr><td>Cerebellum (สมองเล็ก)</td><td>การเคลื่อนไหว การทรงตัว</td></tr>
        <tr><td>Brainstem</td><td>หัวใจ การหายใจ การกลืน</td></tr>
        <tr><td>Hypothalamus</td><td>ควบคุมอุณหภูมิ ฮอร์โมน</td></tr>
        <tr><td>Spinal cord</td><td>เชื่อมสมองกับร่างกาย รีเฟล็กซ์</td></tr>
      </table>
      <h4>ระบบประสาทอัตโนมัติ (Autonomic NS)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>Sympathetic: "Fight or flight" — หัวใจเต้นเร็ว ม่านตาขยาย</li>
        <li><span class="li-dot sc-dot"></span>Parasympathetic: "Rest and digest" — หัวใจเต้นช้า ย่อยอาหารดี</li>
      </ul>
    </div>
    <div class="content-section">
      <h3>👁️ อวัยวะรับความรู้สึก 5 ชนิด</h3>
      <table class="content-table">
        <tr><th>ประสาทสัมผัส</th><th>อวัยวะ</th><th>ตัวรับ</th></tr>
        <tr><td>การมองเห็น</td><td>ตา (retina)</td><td>Rod (ขาว-ดำ) + Cone (สี)</td></tr>
        <tr><td>การได้ยิน</td><td>หูชั้นใน (cochlea)</td><td>Hair cells</td></tr>
        <tr><td>การได้กลิ่น</td><td>จมูก (olfactory bulb)</td><td>Chemoreceptor</td></tr>
        <tr><td>การรับรส</td><td>ลิ้น (taste buds)</td><td>หวาน เปรี้ยว เค็ม ขม อูมามิ</td></tr>
        <tr><td>การสัมผัส</td><td>ผิวหนัง</td><td>ร้อน เย็น เจ็บ กด แตะ</td></tr>
      </table>
      <div class="tip-box">💡 <strong>การมองเห็น:</strong> แสง → กระจกตา → รูม่านตา → เลนส์ → จอตา (retina) → optic nerve → สมองส่วน occipital lobe</div>
    </div>
    <div class="content-section">
      <h3>📝 คำถามทบทวน</h3>
      <div class="q-box">Q1: ทำไมมือดึงออกจากของร้อนทันทีก่อนสมองจะรู้?
        <div class="q-a">ตอบ: เป็น reflex arc — สัญญาณวิ่งผ่านไขสันหลังแล้วตอบสนองทันที โดยไม่ต้องผ่านสมอง สมองจะรู้ทีหลังจึงรู้สึกเจ็บ</div>
      </div>
    </div>
  `,
  b5c23: `
    <div class="content-section">
      <h3>💊 ภาพรวม</h3>
      <p>ระบบต่อมไร้ท่อ (Endocrine system) สร้างฮอร์โมนปล่อยเข้าเลือด เพื่อควบคุมการทำงานของอวัยวะต่าง ๆ ทำงานคู่กับระบบประสาท แต่ผลช้ากว่าและยาวกว่า</p>
    </div>
    <div class="content-section">
      <h3>🏥 ต่อมและฮอร์โมนหลัก</h3>
      <table class="content-table">
        <tr><th>ต่อม</th><th>ฮอร์โมน</th><th>หน้าที่</th></tr>
        <tr><td>Hypothalamus</td><td>ปล่อย releasing hormones</td><td>ควบคุม pituitary</td></tr>
        <tr><td>Pituitary (ต่อมใต้สมอง)</td><td>GH, TSH, ACTH, FSH, LH, prolactin, ADH, oxytocin</td><td>"Master gland" — ควบคุมต่อมอื่น</td></tr>
        <tr><td>Thyroid</td><td>Thyroxine (T4, T3)</td><td>เร่งเมแทบอลิซึม</td></tr>
        <tr><td>Parathyroid</td><td>PTH</td><td>เพิ่ม Ca²⁺ ในเลือด</td></tr>
        <tr><td>Adrenal cortex</td><td>Cortisol, Aldosterone</td><td>ปรับน้ำตาล/เกลือ ตอบสนองความเครียด</td></tr>
        <tr><td>Adrenal medulla</td><td>Epinephrine (Adrenaline)</td><td>สู้หรือหนี</td></tr>
        <tr><td>Pancreas</td><td>Insulin / Glucagon</td><td>ควบคุมน้ำตาลในเลือด</td></tr>
        <tr><td>Ovary</td><td>Estrogen / Progesterone</td><td>ลักษณะเพศหญิง รอบเดือน</td></tr>
        <tr><td>Testis</td><td>Testosterone</td><td>ลักษณะเพศชาย สร้างอสุจิ</td></tr>
        <tr><td>Pineal</td><td>Melatonin</td><td>วงจรการนอน</td></tr>
      </table>
    </div>
    <div class="content-section">
      <h3>🩸 การควบคุมน้ำตาลในเลือด</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>น้ำตาลสูง:</strong> ตับอ่อนหลั่ง insulin → เซลล์รับ glucose → เก็บเป็น glycogen ในตับ</li>
        <li><span class="li-dot sc-dot"></span><strong>น้ำตาลต่ำ:</strong> ตับอ่อนหลั่ง glucagon → ตับสลาย glycogen → ปล่อย glucose ออก</li>
        <li><span class="li-dot sc-dot"></span>เบาหวาน Type 1: ขาด insulin (ภูมิคุ้มกันทำลายเบต้าเซลล์)</li>
        <li><span class="li-dot sc-dot"></span>เบาหวาน Type 2: เซลล์ดื้อ insulin</li>
      </ul>
      <div class="note-box">⚠️ <strong>เบาหวาน</strong> — น้ำตาลในเลือดสูงเรื้อรัง → เสียหายต่อเส้นเลือดทั่วร่างกาย ไต ตา ปลายเท้า ป้องกันโดยควบคุมน้ำหนัก ออกกำลังกาย กินอาหารถูกหลัก</div>
    </div>
    <div class="content-section">
      <h3>🔁 Feedback Mechanisms</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Negative feedback:</strong> ผลลัพธ์ยับยั้งกระบวนการ (พบมากที่สุด) เช่น TSH-Thyroxine</li>
        <li><span class="li-dot sc-dot"></span><strong>Positive feedback:</strong> ผลลัพธ์เร่งกระบวนการ เช่น Oxytocin ตอนคลอดบุตร</li>
      </ul>
    </div>
    <div class="content-section">
      <h3>⚠️ โรคที่เกี่ยวข้อง</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>Cretinism (Hypothyroid วัยเด็ก): ตัวเตี้ย ปัญญาอ่อน</li>
        <li><span class="li-dot sc-dot"></span>Goiter: ขาดไอโอดีน → ต่อมไทรอยด์โต</li>
        <li><span class="li-dot sc-dot"></span>Cushing syndrome: Cortisol สูง</li>
        <li><span class="li-dot sc-dot"></span>Acromegaly: GH หลั่งเกินในผู้ใหญ่</li>
      </ul>
      <div class="tip-box">💡 <strong>เกลือเสริมไอโอดีน</strong> ป้องกันโรคคอพอกและภาวะสติปัญญาบกพร่องในเด็กที่ขาด iodine</div>
    </div>
    <div class="content-section">
      <h3>📝 คำถามทบทวน</h3>
      <div class="q-box">Q1: ทำไมต้องไปฉีดยาคุมแบบฮอร์โมน?
        <div class="q-a">ตอบ: ฮอร์โมนเลียนแบบ estrogen และ progesterone ยับยั้งการตกไข่ผ่าน negative feedback</div>
      </div>
    </div>
  `,
  b5c24: `
    <div class="content-section">
      <h3>👶 ภาพรวม</h3>
      <p>ระบบสืบพันธุ์ทำหน้าที่สร้างเซลล์สืบพันธุ์ ปฏิสนธิ และเลี้ยงดูเอ็มบริโอ — เพื่อดำรงเผ่าพันธุ์</p>
    </div>
    <div class="content-section">
      <h3>♀️ ระบบสืบพันธุ์เพศหญิง</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>รังไข่ (Ovary) สร้างไข่และฮอร์โมน estrogen, progesterone</li>
        <li><span class="li-dot sc-dot"></span>ท่อนำไข่ (Fallopian tube): ปฏิสนธิเกิดที่นี่</li>
        <li><span class="li-dot sc-dot"></span>มดลูก (Uterus): เอ็มบริโอฝังตัวและเจริญ</li>
        <li><span class="li-dot sc-dot"></span>ปากมดลูก (Cervix) และช่องคลอด (Vagina)</li>
      </ul>
      <h4>รอบเดือน (Menstrual cycle ~28 วัน)</h4>
      <table class="content-table">
        <tr><th>ระยะ</th><th>วัน</th><th>เหตุการณ์</th></tr>
        <tr><td>Menstruation</td><td>1-5</td><td>ขับเยื่อบุมดลูก</td></tr>
        <tr><td>Follicular phase</td><td>6-13</td><td>FSH กระตุ้น follicle, Estrogen สูงขึ้น</td></tr>
        <tr><td>Ovulation</td><td>~14</td><td>LH peak → ไข่ตก</td></tr>
        <tr><td>Luteal phase</td><td>15-28</td><td>Corpus luteum หลั่ง progesterone</td></tr>
      </table>
    </div>
    <div class="content-section">
      <h3>♂️ ระบบสืบพันธุ์เพศชาย</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>อัณฑะ (Testis): สร้าง sperm + testosterone</li>
        <li><span class="li-dot sc-dot"></span>ท่อ epididymis: เก็บและหมัก sperm</li>
        <li><span class="li-dot sc-dot"></span>Vas deferens: นำ sperm</li>
        <li><span class="li-dot sc-dot"></span>ต่อมสร้างน้ำเลี้ยง: Seminal vesicle, Prostate, Bulbourethral</li>
        <li><span class="li-dot sc-dot"></span>หลั่ง 200-500 ล้าน sperm/ครั้ง</li>
      </ul>
    </div>
    <div class="content-section">
      <h3>🤰 การปฏิสนธิและการตั้งครรภ์</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>Sperm + Egg → Zygote (2n) → Morula → Blastocyst → ฝังตัวที่มดลูก (~6-9 วัน)</li>
        <li><span class="li-dot sc-dot"></span>Placenta: แลกเปลี่ยนสารระหว่างแม่กับลูก หลั่ง hCG (ตรวจการตั้งครรภ์)</li>
        <li><span class="li-dot sc-dot"></span>ตั้งครรภ์ 9 เดือน แบ่งเป็น 3 trimester</li>
      </ul>
      <div class="note-box">⚠️ <strong>ระวังในการตั้งครรภ์:</strong> หลีกเลี่ยงเหล้า บุหรี่ ยาบางชนิด รังสี และเชื้อโรคบางอย่าง เพราะอาจส่งผลต่อทารก</div>
    </div>
    <div class="content-section">
      <h3>🛡️ การคุมกำเนิด</h3>
      <table class="content-table">
        <tr><th>วิธี</th><th>หลักการ</th><th>ประสิทธิภาพ</th></tr>
        <tr><td>ถุงยางอนามัย</td><td>กั้นทางกายภาพ</td><td>~85-98%</td></tr>
        <tr><td>ยาคุม</td><td>ฮอร์โมนยับยั้งการตกไข่</td><td>~91-99%</td></tr>
        <tr><td>ห่วงคุมกำเนิด (IUD)</td><td>ทำให้มดลูกไม่ฝังตัว</td><td>&gt;99%</td></tr>
        <tr><td>ทำหมัน</td><td>ตัดท่อนำไข่/ท่ออสุจิ</td><td>&gt;99%</td></tr>
      </table>
    </div>
    <div class="content-section">
      <h3>📈 การเจริญเติบโตและพัฒนาการ</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>ทารกแรกเกิด → วัยทารก → วัยเด็ก → วัยรุ่น (puberty) → วัยผู้ใหญ่ → วัยชรา</li>
        <li><span class="li-dot sc-dot"></span>วัยรุ่น: ฮอร์โมนเพศเพิ่ม → ลักษณะเพศชาย/หญิงปรากฏ</li>
        <li><span class="li-dot sc-dot"></span>วัยทอง (Menopause) ในผู้หญิง ~50 ปี — รังไข่หยุดทำงาน</li>
      </ul>
    </div>
    <div class="content-section">
      <h3>📝 คำถามทบทวน</h3>
      <div class="q-box">Q1: ทำไมแฝดเหมือนจึงเพศเดียวกันเสมอ?
        <div class="q-a">ตอบ: เพราะมาจาก zygote เดียวที่แบ่งเป็นสองตัว — มี DNA เหมือนกันรวมถึงโครโมโซมเพศ</div>
      </div>
    </div>
  `
});
