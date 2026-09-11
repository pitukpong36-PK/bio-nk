/* เนื้อหาชีววิทยา 1 — สร้างจาก split.py · แก้เนื้อหาที่ไฟล์นี้ได้เลย แล้วรัน _build/build.py */
window.BIO = window.BIO || {}; BIO.CH = BIO.CH || {};
Object.assign(BIO.CH, {
  b1c1: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> นิยาม "ชีวิต" และคุณสมบัติ 8 ข้อของสิ่งมีชีวิต<br>
        <strong>02</strong> ระดับการจัดระบบจากอะตอมถึงชีวภาค (Hierarchy of Organization)<br>
        <strong>03</strong> สมบัติเกิดใหม่ (Emergent Properties) และ Reductionism vs Holism<br>
        <strong>04</strong> ระบบการจำแนก 3 Domains: Bacteria · Archaea · Eukarya<br>
        <strong>05</strong> ทฤษฎีเซลล์ (Cell Theory) — รากฐานของชีววิทยา<br>
        <strong>06</strong> การไหลของข้อมูล (DNA &rarr; RNA &rarr; Protein) และพลังงาน<br>
        <strong>07</strong> วิวัฒนาการ — แก่นกลางของชีววิทยาตาม Darwin<br>
        <strong>08</strong> วิธีการทางวิทยาศาสตร์ การประยุกต์ในชีวิตประจำวัน
      </div>
      <div class="tip-box">💡 บทนี้คือ "แผนที่ภาพรวม" ของวิชาชีววิทยาทั้งหมดที่จะเรียนใน ม.ปลาย เข้าใจบทนี้แล้วบทอื่น ๆ จะง่ายขึ้นมาก เพราะทุกบทย่อยจะเชื่อมโยงกับ <strong>วิวัฒนาการ พลังงาน ข้อมูล โครงสร้าง</strong> 4 เสาหลักนี้เสมอ</div>
    </div>

    <!-- 1. คุณสมบัติของสิ่งมีชีวิต -->
    <div class="content-section">
      <h3>🌱 คุณสมบัติของสิ่งมีชีวิต (Characteristics of Life)</h3>
      <p>การจะตอบว่า "อะไรคือสิ่งมีชีวิต" ต้องใช้เกณฑ์หลายข้อร่วมกัน — Campbell สรุปไว้ 8 ข้อหลัก สิ่งใดที่มีครบทุกข้อจึงนับว่าเป็นสิ่งมีชีวิต</p>
      <table class="content-table">
        <tr><th>คุณสมบัติ</th><th>คำอธิบายสั้น</th><th>ตัวอย่าง</th></tr>
        <tr><td>1. การจัดระเบียบ (Order)</td><td>มีโครงสร้างซับซ้อนจากเซลล์ขึ้นไป</td><td>เซลล์เยื่อบุข้างแก้มมีนิวเคลียส เยื่อหุ้ม</td></tr>
        <tr><td>2. การสืบพันธุ์ (Reproduction)</td><td>สร้างทายาทพันธุ์เดียวกัน</td><td>กบวางไข่, แบคทีเรียแบ่งตัว</td></tr>
        <tr><td>3. การเจริญและพัฒนา (Growth &amp; Development)</td><td>ขนาด/รูปร่างเปลี่ยนตามวัย</td><td>ลูกอ๊อด &rarr; กบ</td></tr>
        <tr><td>4. การใช้พลังงาน (Energy Use)</td><td>เปลี่ยนพลังงานเพื่อทำงาน</td><td>หายใจ, สังเคราะห์ด้วยแสง</td></tr>
        <tr><td>5. การตอบสนอง (Response)</td><td>ตรวจจับสิ่งเร้าและตอบโต้</td><td>ทานตะวันหันตามแสง</td></tr>
        <tr><td>6. การรักษาดุลยภาพ (Homeostasis)</td><td>คงสภาพภายในให้คงที่</td><td>เหงื่อออกเมื่อร้อน</td></tr>
        <tr><td>7. การปรับตัว (Adaptation)</td><td>เปลี่ยนรูปร่าง/พฤติกรรมให้เหมาะ</td><td>หมีขั้วโลกมีขนหนา</td></tr>
        <tr><td>8. วิวัฒนาการ (Evolution)</td><td>เปลี่ยนแปลงในระยะยาวของประชากร</td><td>ปีกของนก, รูปคอของยีราฟ</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับจำ MRS GREN:</strong> Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition — เพิ่ม Organization และ Adaptation เป็น 9 ข้อสากล</div>
      <div class="note-box">⚠️ <strong>ไวรัสไม่ใช่สิ่งมีชีวิตเต็มตัว</strong> เพราะ: ไม่มีโครงสร้างเซลล์ ไม่มีเมแทบอลิซึมของตัวเอง สืบพันธุ์เองไม่ได้ — ต้องอาศัย "เครื่อง" ของเซลล์โฮสต์เท่านั้น เปรียบเสมือน "USB drive ที่ต้องเสียบกับคอมพิวเตอร์"</div>
    </div>

    <!-- 2. ระดับการจัดระบบ + SVG -->
    <div class="content-section">
      <h3>🏗️ ระดับการจัดระบบและสมบัติเกิดใหม่</h3>
      <p>ชีววิทยาศึกษาสิ่งมีชีวิตในหลายระดับ ตั้งแต่อะตอมที่เล็กที่สุดจนถึงชีวภาค (Biosphere) ทั้งใบโลก แต่ละระดับเมื่อรวมกันจะเกิดสมบัติใหม่ที่ระดับล่างไม่มี เรียกว่า <strong>Emergent Properties</strong></p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lvlG" x1="0" x2="1">
              <stop offset="0" stop-color="#10B981"/>
              <stop offset="1" stop-color="#0EA5A0"/>
            </linearGradient>
          </defs>
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">ระดับการจัดระบบของสิ่งมีชีวิต</text>
          <!-- pyramid bands -->
          <g font-family="Sarabun" font-size="12" fill="#FFFFFF">
            <rect x="40" y="40" width="440" height="28" rx="6" fill="#A7F3D0"/><text x="260" y="59" text-anchor="middle" fill="#065F46">ชีวภาค (Biosphere) — โลกทั้งใบ</text>
            <rect x="55" y="74" width="410" height="28" rx="6" fill="#6EE7B7"/><text x="260" y="93" text-anchor="middle" fill="#065F46">ไบโอม (Biome) — ป่าฝน ทะเลทราย</text>
            <rect x="70" y="108" width="380" height="28" rx="6" fill="#34D399"/><text x="260" y="127" text-anchor="middle">ระบบนิเวศ (Ecosystem)</text>
            <rect x="85" y="142" width="350" height="28" rx="6" fill="#10B981"/><text x="260" y="161" text-anchor="middle">ชุมชน (Community)</text>
            <rect x="100" y="176" width="320" height="28" rx="6" fill="#0EA5A0"/><text x="260" y="195" text-anchor="middle">ประชากร (Population)</text>
            <rect x="115" y="210" width="290" height="28" rx="6" fill="#0D9488"/><text x="260" y="229" text-anchor="middle">สิ่งมีชีวิต (Organism)</text>
            <rect x="130" y="244" width="260" height="28" rx="6" fill="#0F766E"/><text x="260" y="263" text-anchor="middle">ระบบอวัยวะ &rarr; อวัยวะ &rarr; เนื้อเยื่อ</text>
            <rect x="160" y="278" width="200" height="28" rx="6" fill="#115E59"/><text x="260" y="297" text-anchor="middle">เซลล์ (Cell)</text>
            <rect x="185" y="312" width="150" height="28" rx="6" fill="#134E4A"/><text x="260" y="331" text-anchor="middle">โมเลกุล / อะตอม</text>
          </g>
          <text x="20" y="200" font-family="Sarabun" font-size="11" fill="#64748B" transform="rotate(-90 20 200)">ระดับสูง &larr; &nbsp; &nbsp; &rarr; ระดับต่ำ</text>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: พีระมิดระดับการจัดระบบ — แต่ละระดับมีสมบัติเกิดใหม่ที่ไม่ปรากฏในระดับล่าง</div>
      </div>

      <h4>Emergent Properties (สมบัติเกิดใหม่)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>ตัวอย่าง:</strong> อะตอม C, H, O, N เดี่ยว ๆ ไม่มีชีวิต — แต่เมื่อรวมเป็น DNA เซลล์ กลับ "มีชีวิต"</li>
        <li><span class="li-dot sc-dot"></span><strong>หัวใจ</strong> เกิดจากกล้ามเนื้อหัวใจหลายเซลล์ แต่ความสามารถ "สูบฉีดเลือดเป็นจังหวะ" คือสมบัติเกิดใหม่</li>
        <li><span class="li-dot sc-dot"></span><strong>สังคมมด</strong> มดตัวเดียวง่ายมาก แต่รังมดมีระบบงานที่ซับซ้อน เป็นสมบัติเกิดใหม่ของประชากร</li>
      </ul>
      <div class="note-box">⚠️ <strong>Reductionism (มอง "เล็กลง") ไม่พอ:</strong> เราเข้าใจ DNA ทุกตัวอักษรของยีน แต่ยังทำนายรูปร่างของสิ่งมีชีวิตที่สมบูรณ์ไม่ได้ ต้องใช้ Holism ควบคู่กัน</div>
    </div>

    <!-- 3. การไหลของข้อมูล + SVG -->
    <div class="content-section">
      <h3>🧬 การไหลของข้อมูลในเซลล์ (Central Dogma)</h3>
      <p>ข้อมูลพันธุกรรมไหลจาก DNA &rarr; RNA &rarr; โปรตีน — เป็นหลักการสำคัญที่ทุกสิ่งมีชีวิตใช้ร่วมกัน (เรียก Central Dogma)</p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">DNA &rarr; RNA &rarr; โปรตีน</text>
          <!-- DNA -->
          <g>
            <rect x="40" y="60" width="110" height="70" rx="10" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/>
            <text x="95" y="90" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#1E40AF">DNA</text>
            <text x="95" y="110" text-anchor="middle" font-family="Sarabun" font-size="10" fill="#1E40AF">เก็บข้อมูล</text>
            <text x="95" y="124" text-anchor="middle" font-family="Sarabun" font-size="10" fill="#1E40AF">ในนิวเคลียส</text>
          </g>
          <text x="170" y="98" font-family="Prompt" font-size="16" fill="#065F46">&rarr;</text>
          <text x="170" y="112" font-family="Sarabun" font-size="10" fill="#64748B">transcription</text>
          <!-- RNA -->
          <g>
            <rect x="205" y="60" width="110" height="70" rx="10" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2"/>
            <text x="260" y="90" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#B45309">RNA</text>
            <text x="260" y="110" text-anchor="middle" font-family="Sarabun" font-size="10" fill="#B45309">ส่งสารพิมพ์เขียว</text>
            <text x="260" y="124" text-anchor="middle" font-family="Sarabun" font-size="10" fill="#B45309">ออกสู่ไรโบโซม</text>
          </g>
          <text x="335" y="98" font-family="Prompt" font-size="16" fill="#065F46">&rarr;</text>
          <text x="335" y="112" font-family="Sarabun" font-size="10" fill="#64748B">translation</text>
          <!-- Protein -->
          <g>
            <rect x="370" y="60" width="120" height="70" rx="10" fill="#D1FAE5" stroke="#10B981" stroke-width="2"/>
            <text x="430" y="90" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">โปรตีน</text>
            <text x="430" y="110" text-anchor="middle" font-family="Sarabun" font-size="10" fill="#065F46">ทำงานจริง</text>
            <text x="430" y="124" text-anchor="middle" font-family="Sarabun" font-size="10" fill="#065F46">เอนไซม์ ฮอร์โมน</text>
          </g>
          <text x="260" y="160" text-anchor="middle" font-family="Sarabun" font-size="11" fill="#64748B" font-style="italic">DNA = พิมพ์เขียว · RNA = สำเนาชั่วคราว · โปรตีน = ผลิตภัณฑ์</text>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: หลัก Central Dogma — DNA เก็บข้อมูล RNA ส่งต่อ โปรตีนทำงานจริง</div>
      </div>

      <ul>
        <li><span class="li-dot sc-dot"></span>ทุกสิ่งมีชีวิตบนโลกใช้รหัสพันธุกรรมเดียวกัน (universal genetic code) แสดงว่ามีบรรพบุรุษร่วมกัน</li>
        <li><span class="li-dot sc-dot"></span>ความผิดพลาดของข้อมูล (mutation) คือแหล่งกำเนิดความหลากหลายและวิวัฒนาการ</li>
      </ul>
    </div>

    <!-- 4. พลังงาน -->
    <div class="content-section">
      <h3>⚡ พลังงานและสสารในสิ่งมีชีวิต</h3>
      <p>สิ่งมีชีวิตเป็น <strong>ระบบเปิด (Open System)</strong> ต้องรับพลังงานจากภายนอกตลอด เพราะกระบวนการในเซลล์ต้องใช้พลังงานตลอดเวลา</p>
      <table class="content-table">
        <tr><th>ลักษณะ</th><th>พลังงาน</th><th>สสาร (Matter)</th></tr>
        <tr><td>แหล่ง</td><td>ดวงอาทิตย์ (autotroph) / อาหาร (heterotroph)</td><td>โลกของเรา — ปริมาณคงที่</td></tr>
        <tr><td>การไหล</td><td>ไหลผ่านระบบ (one-way flow)</td><td>หมุนเวียน (cycle)</td></tr>
        <tr><td>ปลายทาง</td><td>กลายเป็นความร้อน สูญเสีย</td><td>ย่อยสลาย &rarr; ใช้ใหม่ได้</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">สมการสำคัญ 2 สมการ ที่ขับเคลื่อนทุกระบบนิเวศ</div>
        <strong>สังเคราะห์ด้วยแสง:</strong> 6CO₂ + 6H₂O + แสง &rarr; C₆H₁₂O₆ + 6O₂<br>
        <strong>การหายใจระดับเซลล์:</strong> C₆H₁₂O₆ + 6O₂ &rarr; 6CO₂ + 6H₂O + ATP
      </div>
      <div class="tip-box">💡 สังเกตว่า 2 สมการนี้เป็น <strong>คู่ตรงข้าม</strong> — พืชจับพลังงานแสงเก็บไว้ในกลูโคส สัตว์ปล่อยพลังงานออกจากกลูโคส</div>
    </div>

    <!-- 5. 3 Domains + SVG -->
    <div class="content-section">
      <h3>🌳 ระบบการจำแนก 3 Domains</h3>
      <p>Carl Woese (1990) ใช้ลำดับ rRNA แบ่งสิ่งมีชีวิตทั้งหมดเป็น 3 <strong>Domain</strong> (ระดับสูงกว่า Kingdom)</p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">3 Domains of Life</text>
          <!-- root -->
          <line x1="260" y1="40" x2="260" y2="80" stroke="#475569" stroke-width="2"/>
          <text x="270" y="55" font-family="Sarabun" font-size="10" fill="#475569">บรรพบุรุษร่วม (LUCA)</text>
          <!-- 3 branches -->
          <line x1="260" y1="80" x2="100" y2="130" stroke="#3B82F6" stroke-width="2.5"/>
          <line x1="260" y1="80" x2="260" y2="130" stroke="#F59E0B" stroke-width="2.5"/>
          <line x1="260" y1="80" x2="420" y2="130" stroke="#10B981" stroke-width="2.5"/>
          <!-- domain boxes -->
          <g font-family="Sarabun" font-size="11" fill="#1E293B">
            <rect x="40" y="130" width="130" height="70" rx="8" fill="#DBEAFE" stroke="#3B82F6"/>
            <text x="105" y="148" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#1E40AF">Bacteria</text>
            <text x="105" y="166" text-anchor="middle" fill="#1E40AF">โพรคาริโอต</text>
            <text x="105" y="180" text-anchor="middle" font-size="10" fill="#1E40AF">E. coli, แบคทีเรียทั่วไป</text>

            <rect x="195" y="130" width="130" height="70" rx="8" fill="#FEF3C7" stroke="#F59E0B"/>
            <text x="260" y="148" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#B45309">Archaea</text>
            <text x="260" y="166" text-anchor="middle" fill="#B45309">โพรคาริโอต</text>
            <text x="260" y="180" text-anchor="middle" font-size="10" fill="#B45309">อยู่ในที่สุดขั้ว เช่น น้ำพุร้อน</text>

            <rect x="350" y="130" width="130" height="70" rx="8" fill="#D1FAE5" stroke="#10B981"/>
            <text x="415" y="148" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#065F46">Eukarya</text>
            <text x="415" y="166" text-anchor="middle" fill="#065F46">ยูคาริโอต</text>
            <text x="415" y="180" text-anchor="middle" font-size="10" fill="#065F46">พืช · สัตว์ · เห็ดรา · โพรทิสต์</text>
          </g>
          <text x="260" y="225" text-anchor="middle" font-family="Sarabun" font-size="11" fill="#64748B">Archaea ใกล้ Eukarya มากกว่า Bacteria — จากลำดับ rRNA</text>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: ต้นไม้แห่งชีวิต 3 Domain ของ Carl Woese</div>
      </div>

      <table class="content-table">
        <tr><th>Domain</th><th>ผนังเซลล์</th><th>นิวเคลียส</th><th>ตัวอย่าง</th></tr>
        <tr><td>Bacteria</td><td>peptidoglycan</td><td>ไม่มี</td><td>E. coli · Streptococcus</td></tr>
        <tr><td>Archaea</td><td>ไม่ใช่ peptidoglycan</td><td>ไม่มี</td><td>Methanogens · halophiles</td></tr>
        <tr><td>Eukarya</td><td>เซลลูโลส (พืช), ไคติน (ฟังไจ), ไม่มี (สัตว์)</td><td>มี</td><td>พืช สัตว์ เห็ด สาหร่าย</td></tr>
      </table>
    </div>

    <!-- 6. ทฤษฎีเซลล์ -->
    <div class="content-section">
      <h3>🧫 ทฤษฎีเซลล์ (Cell Theory)</h3>
      <p>Schleiden, Schwann, และ Virchow (1830-1855) สรุปทฤษฎีเซลล์ 3 ข้อ — เป็นรากฐานของชีววิทยายุคใหม่</p>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.95;">
        <li>สิ่งมีชีวิตทั้งหมดประกอบด้วยเซลล์ตั้งแต่ 1 เซลล์ขึ้นไป</li>
        <li>เซลล์เป็นหน่วยพื้นฐานของโครงสร้างและหน้าที่</li>
        <li>เซลล์เกิดจากการแบ่งของเซลล์ที่มีอยู่เดิมเท่านั้น (Omnis cellula e cellula)</li>
      </ol>
      <div class="note-box">⚠️ ความเข้าใจผิด: "เซลล์เกิดเองได้จากสารไม่มีชีวิต" — Louis Pasteur หักล้างแล้วด้วยการทดลองคอห่านปี 1862</div>
    </div>

    <!-- 7. วิวัฒนาการ -->
    <div class="content-section">
      <h3>🌍 วิวัฒนาการ — แก่นกลางของชีววิทยา</h3>
      <p>Theodosius Dobzhansky กล่าวว่า "<em>ไม่มีสิ่งใดในชีววิทยาที่เข้าใจได้ ยกเว้นภายใต้แสงของวิวัฒนาการ</em>" — วิวัฒนาการคือเหตุผลที่อธิบายความหลากหลายและความคล้ายของสิ่งมีชีวิตทั้งโลก</p>
      <ul>
        <li><span class="li-dot sc-dot"></span>ดาร์วิน (1859) เสนอ <strong>การคัดเลือกตามธรรมชาติ</strong> (Natural Selection) ในหนังสือ <em>On the Origin of Species</em></li>
        <li><span class="li-dot sc-dot"></span>ประชากรมีความแปรผัน &rarr; สิ่งแวดล้อมคัดเลือก &rarr; ผู้เหมาะสมรอดและสืบพันธุ์มาก &rarr; เปลี่ยนความถี่ allele ในระยะยาว</li>
        <li><span class="li-dot sc-dot"></span>หลักฐาน: ฟอสซิล, กายวิภาคเปรียบเทียบ, DNA, การกระจายภูมิศาสตร์</li>
      </ul>
      <div class="tip-box">💡 ตัวอย่างง่าย: แบคทีเรียดื้อยาปฏิชีวนะคือ Natural Selection ในจังหวะที่เราเห็นด้วยตา — กลุ่มที่กลายพันธุ์ทนยาเท่านั้นรอด</div>
    </div>

    <!-- 8. วิทยาศาสตร์ -->
    <div class="content-section">
      <h3>🔬 วิทยาศาสตร์และการประยุกต์</h3>
      <p>ชีววิทยาใช้ <strong>วิธีการทางวิทยาศาสตร์</strong> (Scientific Method) เพื่อสร้างความรู้</p>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.95;">
        <li>สังเกตปรากฏการณ์</li>
        <li>ตั้งคำถามและสมมติฐาน (ต้องทดสอบและสามารถปฏิเสธได้)</li>
        <li>ออกแบบการทดลอง: ควบคุมตัวแปร · มีกลุ่มควบคุม · ทำซ้ำได้</li>
        <li>วิเคราะห์ข้อมูลและสรุปผล</li>
        <li>เผยแพร่และตรวจสอบโดยเพื่อนนักวิจัย (Peer Review)</li>
      </ol>
      <h4>การประยุกต์ใช้ชีววิทยาในชีวิตประจำวัน</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>แพทย์:</strong> ตรวจยีน BRCA วินิจฉัยความเสี่ยงมะเร็ง</li>
        <li><span class="li-dot sc-dot"></span><strong>เกษตร:</strong> ปรับปรุงพันธุ์ข้าวหอมมะลิให้ทนแล้ง</li>
        <li><span class="li-dot sc-dot"></span><strong>สิ่งแวดล้อม:</strong> ใช้จุลินทรีย์ EM บำบัดน้ำเสีย</li>
        <li><span class="li-dot sc-dot"></span><strong>อุตสาหกรรม:</strong> ผลิตอินซูลินจาก E. coli ดัดแปลงพันธุกรรม</li>
        <li><span class="li-dot sc-dot"></span><strong>นิติเวช:</strong> ใช้ DNA fingerprint หาผู้ต้องสงสัย</li>
      </ul>
    </div>

    <!-- ============ 32 PRACTICE PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — คำจำกัดความและคุณสมบัติของสิ่งมีชีวิต</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — สิ่งมีชีวิต vs ไม่มีชีวิต</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> จงระบุว่า "ผลึกเกลือ" และ "เมล็ดถั่ว" สิ่งใดเป็นสิ่งมีชีวิตและเพราะอะไร</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>วิธีคิด:</strong><br>เมล็ดถั่วเป็นสิ่งมีชีวิต เพราะมี <strong>เซลล์ มีเมแทบอลิซึม</strong> (แม้เบามาก) และสามารถ <strong>เจริญและสืบพันธุ์</strong> ได้เมื่อมีสภาพเหมาะสม ส่วนผลึกเกลือถึงจะ "โต" ขึ้นได้ แต่เป็นเพียงการเรียงตัวของไอออน ไม่มีเมแทบอลิซึม ไม่ตอบสนอง ไม่สืบพันธุ์<br>💡 อย่าสับสน "การโต" กับ "การเจริญของสิ่งมีชีวิต" — ผลึกโตเพราะเติมสสารจากภายนอก ไม่มีกระบวนการภายใน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — ไวรัสเป็นสิ่งมีชีวิตหรือไม่?</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เพราะเหตุใดนักวิทยาศาสตร์ส่วนใหญ่จึง <strong>ไม่</strong> จัดให้ไวรัสเป็นสิ่งมีชีวิตเต็มตัว?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>วิธีคิด:</strong><br>ไวรัสมี DNA/RNA และโปรตีนหุ้มก็จริง แต่ <strong>ไม่มีเซลล์</strong> ไม่มีกระบวนการเมแทบอลิซึมของตัวเอง และ <strong>เพิ่มจำนวนเองไม่ได้</strong> ต้องอาศัยเครื่องจักรของเซลล์โฮสต์ในการสร้างชิ้นส่วนใหม่ จึงขาดคุณสมบัติพื้นฐาน 2-3 ข้อ<br>💡 จดจำว่า ไวรัส = "obligate intracellular parasite"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — ตัวอย่างคุณสมบัติ Homeostasis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ยกตัวอย่างกลไก homeostasis ในร่างกายมนุษย์ 3 อย่าง แต่ละอย่างเชื่อมโยงกับระบบใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>วิธีคิด:</strong><br>(1) เหงื่อออกเมื่อร้อน &rarr; ผิวหนัง/ต่อมเหงื่อ — รักษาอุณหภูมิ ~37 องศา<br>(2) ฮอร์โมน <strong>insulin/glucagon</strong> จากตับอ่อน — รักษาน้ำตาลในเลือด ~70-110 mg/dL<br>(3) ไตปล่อย/ดูดน้ำกลับ ควบคุมโดย ADH — รักษาดุลของเหลว<br>💡 Homeostasis ใช้ <strong>negative feedback</strong> เป็นหลัก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: เทียนกับสิ่งมีชีวิต</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เทียนที่กำลังลุกไหม้มีคุณสมบัติ "ใช้พลังงาน" และ "สร้างความร้อน" คล้ายสิ่งมีชีวิต — เทียนยังขาดคุณสมบัติใดบ้างถึงไม่ใช่สิ่งมีชีวิต?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>วิธีคิด:</strong><br>เทียนขาด: <strong>การจัดระเบียบเป็นเซลล์</strong>, ไม่มี <strong>การสืบพันธุ์</strong>, ไม่มี <strong>ข้อมูลพันธุกรรม</strong>, ไม่ <strong>ตอบสนองและปรับตัว</strong>, ไม่มี <strong>homeostasis</strong> (ไส้เทียนหมดก็ดับ)<br>💡 มีพลังงานอย่างเดียวไม่พอ — ต้องมีคุณสมบัติครบจึงเป็นสิ่งมีชีวิต</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — ระดับการจัดระบบ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — เรียงลำดับระดับ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> จัดเรียงสิ่งต่อไปนี้จากเล็กไปใหญ่: เซลล์เม็ดเลือดแดง · ไบโอม · หัวใจ · มนุษย์ · ฮีโมโกลบิน · ประชากรหมีในป่า</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ฮีโมโกลบิน (โมเลกุล) &rarr; เซลล์เม็ดเลือดแดง (เซลล์) &rarr; หัวใจ (อวัยวะ) &rarr; มนุษย์ (สิ่งมีชีวิต) &rarr; ประชากรหมีในป่า (ประชากร) &rarr; ไบโอม<br>💡 ใช้พีระมิดในภาพ 1 เป็นแกนความคิด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — Emergent property</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> "การสูบฉีดเลือดเป็นจังหวะ" จัดเป็นสมบัติเกิดใหม่ที่ระดับใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ระดับ <strong>อวัยวะ</strong> (หัวใจ) — เซลล์กล้ามเนื้อหัวใจตัวเดียวเต้นได้แต่ไม่เป็นจังหวะรวม การประสานเป็นจังหวะ "ลับ-ดับ" เกิดเมื่อรวมเป็นอวัยวะ<br>💡 Emergent property = สมบัติที่ผลรวม &gt; ผลแยก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — Reductionism ใช้ได้กับอะไร?</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> นักวิทยาศาสตร์ที่ศึกษา "DNA แต่ละนิวคลีโอไทด์" ใช้แนวคิดอะไร? และข้อจำกัดคืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้ <strong>Reductionism</strong> — แยกย่อยลงไประดับโมเลกุล <br>ข้อจำกัด: เข้าใจชิ้นส่วนได้ แต่ทำนายพฤติกรรมของสิ่งมีชีวิตทั้งร่างไม่ได้ ต้องใช้ <strong>Systems Biology / Holism</strong> ควบคู่<br>💡 ทั้งสองมุมมองต้องใช้ร่วมกัน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: ไบโอมในไทย</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ป่าฝนเขตร้อนภาคใต้และทุ่งหญ้าสะวันนาในแอฟริกา จัดอยู่ในระดับใดของการจัดระบบ และมีองค์ประกอบใดที่เป็น abiotic factor?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ทั้งสองอยู่ที่ระดับ <strong>ไบโอม (Biome)</strong> ซึ่งสูงกว่าระบบนิเวศ<br>abiotic ที่ต่างกันสำคัญ: <strong>ปริมาณน้ำฝน อุณหภูมิ ดิน แสงแดด</strong> ป่าฝนได้น้ำมาก &gt;2,000 mm/ปี ทุ่งสะวันนา &lt;1,000 mm/ปี<br>💡 ไบโอมจำแนกตามภูมิอากาศและพืชเด่น</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — การจำแนก 3 Domains และอาณาจักร</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — Bacteria vs Archaea</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทั้ง Bacteria และ Archaea เป็นโพรคาริโอต แต่ Carl Woese ทำไมจึงแยกเป็น 2 Domain?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ความต่างของ <strong>ลำดับ rRNA</strong>, องค์ประกอบของ <strong>ผนังเซลล์</strong> (Archaea ไม่ใช้ peptidoglycan), และลิพิดในเยื่อหุ้ม — แสดงว่า Archaea ใกล้ Eukarya มากกว่า Bacteria<br>💡 Archaea มักอยู่ที่สุดขั้ว เช่น บ่อน้ำพุร้อน ปล่องภูเขาไฟใต้สมุทร</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — เห็ดอยู่ Kingdom ไหน?</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุ Kingdom ของ: เห็ดฟาง · สาหร่ายสไปโรไจรา · พารามีเซียม · ต้นบัวบก</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เห็ดฟาง = <strong>Fungi</strong> (ผนังไคติน, heterotroph), สาหร่ายสไปโรไจรา = <strong>Protista</strong> (autotroph เซลล์รวม), พารามีเซียม = <strong>Protista</strong> (โพรโทซัว), ต้นบัวบก = <strong>Plantae</strong><br>💡 จำหลักการ: เห็ดไม่ใช่พืช เพราะไม่มีคลอโรฟิลล์</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — Universal genetic code</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการที่ทุก domain ใช้รหัสพันธุกรรมเดียวกันจึงเป็นหลักฐานสำคัญของวิวัฒนาการ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> รหัสพันธุกรรม (codon &rarr; amino acid) เป็น <strong>universal</strong> — แสดงว่าทุกสิ่งมีชีวิตสืบเชื้อสายจาก <strong>บรรพบุรุษร่วมเดียวกัน (LUCA)</strong> ถ้าวิวัฒนาการเกิดแยกกันคงใช้รหัสต่างกัน<br>💡 นี่คือเหตุผลที่เราใส่ยีนของเรือนเรืองแสงเข้าแบคทีเรียได้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: ขอบของอาณาจักร</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Euglena มีคลอโรพลาสต์เหมือนพืช แต่กินอาหารแบบสัตว์ได้ จัดอยู่ใน Kingdom ใด? เพราะอะไรการจำแนกบางครั้งจึงยาก?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Euglena จัดใน <strong>Protista</strong> เพราะเป็นเซลล์เดียวยูคาริโอตและไม่เข้ากับเกณฑ์ของ Plantae (โครงสร้างหลายเซลล์ ผนังเซลลูโลส) หรือ Animalia<br>การจำแนกยากเพราะธรรมชาติไม่ได้เป็นกล่อง — สิ่งมีชีวิตเป็น continuum วิวัฒนาการต่อเนื่อง<br>💡 ปัจจุบันใช้ phylogenetic tree แทน Kingdom แบบเดิม</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — ทฤษฎีเซลล์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — ใครคนแรกเห็นเซลล์?</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ผู้ที่ตั้งชื่อ "cell" จากการดูชิ้นไม้คอร์กคือใคร? และ Anton van Leeuwenhoek มีบทบาทอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Robert Hooke</strong> (1665) ตั้งชื่อ cell — เขาเห็นช่องว่างของคอร์กผ่านกล้องจุลทรรศน์ที่เขาประดิษฐ์<br><strong>Leeuwenhoek</strong> (1670s) เห็นจุลินทรีย์ที่ยังมีชีวิตเป็นครั้งแรกในน้ำบ่อ — เรียกว่า "animalcules"<br>💡 ทฤษฎีเซลล์เต็มรูปแบบใช้เวลาอีก ~200 ปี กว่าจะสมบูรณ์ (1855)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — Virchow contribution</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ข้อใดเป็นข้อสำคัญที่ Rudolf Virchow เพิ่มเข้าทฤษฎีเซลล์ในปี 1855?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> "<em>Omnis cellula e cellula</em>" — เซลล์ทุกตัวเกิดจากเซลล์ที่มีอยู่เดิมโดยการแบ่งตัว — เป็นการหักล้างแนวคิด "เซลล์เกิดเองจากของไม่มีชีวิต"<br>💡 Pasteur ตรวจสอบยืนยันใน 1862 ด้วยการทดลองคอห่าน (swan-neck flask)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — Pasteur experiment</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> การทดลอง swan-neck flask ของ Pasteur แสดงอะไรและเชื่อมโยงกับทฤษฎีเซลล์อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ขวดต้มฆ่าเชื้อ ปล่อยอากาศเข้าได้แต่ฝุ่นและจุลินทรีย์ติดในคอโค้ง — อาหารใส ๆ ไม่บูด แสดงว่า <strong>จุลินทรีย์ไม่เกิดเอง</strong> ต้องมาจากภายนอก ยืนยันข้อ 3 ของทฤษฎีเซลล์<br>💡 จึงเรียกข้อ 3 ว่า "biogenesis" — ไม่ใช่ "abiogenesis"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: ข้อยกเว้น?</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทฤษฎีเซลล์ข้อ 1 บอกว่า "สิ่งมีชีวิตทุกชนิดประกอบด้วยเซลล์" — ไวรัสนับเป็นข้อยกเว้นหรือไม่? อธิบาย</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ไม่ใช่ข้อยกเว้น — เพราะไวรัส <strong>ไม่ถูกจัดเป็นสิ่งมีชีวิต</strong> เต็มตัวอยู่แล้ว ทฤษฎีเซลล์ครอบคลุมเฉพาะ "สิ่งมีชีวิต" จึงไม่ขัดแย้ง<br>💡 ตำราบางเล่มเรียกไวรัสว่า "acellular agent"</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — การไหลของข้อมูลและพลังงาน</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — Central Dogma</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เติมในช่องว่าง: DNA &rarr; ____ &rarr; โปรตีน — ขั้นที่ขาดและกระบวนการทั้งสองชื่ออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ช่องว่าง = <strong>RNA</strong> (mRNA)<br>กระบวนการ: DNA &rarr; RNA เรียก <strong>transcription</strong>, RNA &rarr; โปรตีน เรียก <strong>translation</strong><br>💡 RNA ทำหน้าที่ "พิมพ์เขียวชั่วคราว" ส่งออกจากนิวเคลียส</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — พลังงานไหลวันเวย์</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมพลังงานในระบบนิเวศจึง "ไหลทางเดียว" ในขณะที่สสารหมุนเวียน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> พลังงานทุกครั้งที่เปลี่ยนรูปจะ <strong>สูญเสียบางส่วนเป็นความร้อน</strong> (กฎอุณหพลศาสตร์ข้อ 2) — สุดท้ายกลายเป็นความร้อนหนีออกจากโลก<br>ส่วนสสาร (C, N, P) เปลี่ยนรูปแต่ <strong>อะตอมยังอยู่ครบ</strong> — จึงหมุนเวียนผ่านวัฏจักร<br>💡 พลังงานต้องเติมจากดวงอาทิตย์ตลอดเวลา</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — Autotroph vs Heterotroph</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุประเภทของ: ต้นข้าว · เห็ดฟาง · มนุษย์ · สาหร่ายสีเขียว · แบคทีเรียที่อยู่ในรากถั่ว</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ต้นข้าว = <strong>Autotroph</strong> (สังเคราะห์ด้วยแสง), เห็ดฟาง = <strong>Heterotroph</strong> (ดูดสารอาหาร), มนุษย์ = <strong>Heterotroph</strong>, สาหร่ายสีเขียว = <strong>Autotroph</strong>, แบคทีเรียในรากถั่ว = <strong>Heterotroph</strong> (ส่วนใหญ่)<br>💡 Autotroph = ผู้ผลิต / Heterotroph = ผู้บริโภค/ย่อยสลาย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: ATP สำคัญอย่างไร?</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ATP เปรียบเสมือนอะไรในชีวิตประจำวัน? ทำไมเซลล์ต้องสร้าง ATP ตลอดเวลาแม้นอนหลับ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ATP เปรียบเสมือน <strong>"แบตเตอรี่ที่ใช้ทันที"</strong> ของเซลล์ — เก็บได้น้อย ต้องผลิตต่อเนื่อง<br>แม้นอนหลับ เซลล์ยังต้องสูบไอออน (Na+/K+ pump), หายใจ, ส่งสัญญาณประสาท ฯลฯ — ทุกอย่างต้องใช้ ATP<br>💡 ร่างกายผลิต-ใช้ ATP ~50 kg/วัน แต่เก็บได้แค่ ~250 g เท่านั้น</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — วิวัฒนาการและการคัดเลือกตามธรรมชาติ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — 4 หลักของ Darwin</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Natural Selection ต้องมีเงื่อนไข 4 ข้ออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>Variation</strong> ในประชากร, (2) <strong>Heritable</strong> — ลักษณะถ่ายทอดได้, (3) <strong>Differential survival</strong> — มีลูกเกินที่อยู่รอด, (4) <strong>Adaptation</strong> — ผู้ที่เหมาะกับสภาพแวดล้อมรอดมาก<br>💡 ลำดับ: variation &rarr; selection &rarr; reproduction &rarr; evolution</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — แบคทีเรียดื้อยา</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการใช้ยาปฏิชีวนะไม่ครบขนาดจึงเพิ่มความเสี่ยงเกิดแบคทีเรียดื้อยา?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เมื่อยาฆ่าแบคทีเรียที่อ่อนแอ&nbsp;ไม่ทั้งหมด แบคทีเรียที่เหลือมักเป็น <strong>กลายพันธุ์ที่ทนยา</strong> ได้บางส่วน &rarr; แบ่งตัวสืบลูกหลานที่ทนยามากขึ้น &rarr; ในที่สุด <strong>Natural Selection</strong> ทำให้เกิดสายพันธุ์ดื้อยา<br>💡 จึงต้องกินครบโดส แม้รู้สึกหายแล้ว</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — Homologous structure</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> โครงสร้างกระดูกแขนมนุษย์ ปีกค้างคาว และครีบวาฬ มีรูปแบบเหมือนกันแม้ใช้งานต่างกัน — เรียกอะไร และเป็นหลักฐานของอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เรียก <strong>Homologous structure</strong> — เป็นหลักฐานว่าทั้ง 3 สปีชีส์มาจาก <strong>บรรพบุรุษร่วมกัน</strong> วิวัฒนาการแยกไปทำหน้าที่ต่างกัน<br>💡 ตรงข้ามคือ Analogous structure (เช่น ปีกแมลง vs ปีกนก) — หน้าที่เหมือนแต่ที่มาต่างกัน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: นกฟินช์</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> นกฟินช์ของดาร์วินที่เกาะกาลาปากอสมีรูปจะงอยปากต่างกันในแต่ละเกาะ — เกิดจากกระบวนการใด? เกี่ยวข้องกับ adaptive radiation อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เกิดจากบรรพบุรุษกลุ่มเดียวกันที่แพร่ไปแต่ละเกาะ &rarr; แต่ละเกาะมีอาหารต่างกัน &rarr; Natural Selection คัดเลือกจะงอยปากที่เหมาะกับอาหารนั้น (เมล็ดเล็ก/ใหญ่/แมลง) &rarr; เกิดสปีชีส์ใหม่ ๆ ในเวลาเร็ว เรียกว่า <strong>Adaptive radiation</strong><br>💡 หลักการเดียวกันอธิบายแมลงในฮาวาย หรือ cichlid ในทะเลสาบแอฟริกา</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — ชีววิทยาในชีวิตประจำวัน</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — วัคซีน</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการฉีดวัคซีน mRNA สำหรับโควิดจึงไม่ทำให้ DNA เราเปลี่ยน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> mRNA เป็นข้อมูลชั่วคราว — เข้าเซลล์แล้วถูกใช้สร้าง <strong>โปรตีน spike</strong> เพื่อกระตุ้นภูมิคุ้มกัน จากนั้น mRNA ถูกย่อยใน cytoplasm ภายในไม่กี่วัน <strong>ไม่เข้าสู่นิวเคลียส</strong> และ <strong>ไม่ถูกเปลี่ยนเป็น DNA</strong> เพราะเซลล์มนุษย์ไม่มีเอนไซม์ reverse transcriptase ทั่วไป<br>💡 Central Dogma ปกติ DNA &rarr; RNA ไม่ใช่ RNA &rarr; DNA</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — เกษตรอินทรีย์</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เกษตรอินทรีย์ใช้แมลงตัวห้ำ (predator) แทนยาฆ่าแมลง — เป็นการใช้หลักการชีววิทยาด้านใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้หลัก <strong>นิเวศวิทยา</strong> โดยเฉพาะ <strong>ห่วงโซ่อาหารและความสัมพันธ์ผู้ล่า-เหยื่อ</strong> (predation) — แมลงตัวห้ำกินแมลงศัตรูพืช ลดประชากรลงโดยไม่ใช้สารเคมี<br>💡 ผลพลอยได้: ไม่ทิ้งสารพิษตกค้าง รักษาความหลากหลายชีวภาพ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — Forensic DNA</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ตำรวจใช้ DNA จากเส้นผมเพียง 1 เส้นพบในที่เกิดเหตุระบุตัวคนร้ายได้ — อาศัยหลักการพื้นฐานข้อใดของชีววิทยา?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) DNA <strong>เก็บข้อมูลพันธุกรรม</strong> ของบุคคล (2) ทุกเซลล์ในร่างกายมี DNA ชุดเดียวกัน (3) คนแต่ละคนมีลำดับ DNA <strong>เฉพาะตัว</strong> (เฉพาะส่วน STR) (4) ใช้ PCR เพิ่มจำนวน DNA จากตัวอย่างเล็กน้อย<br>💡 รากฐานคือ Central Dogma + การถ่ายทอดพันธุกรรม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: SDG 13</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เป้าหมาย SDG 13 (รับมือการเปลี่ยนแปลงสภาพภูมิอากาศ) เชื่อมโยงกับชีววิทยาอย่างไร — ยกตัวอย่าง 2 ทาง</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>ป่าไม้</strong> ดูด CO2 ผ่านการสังเคราะห์ด้วยแสง &rarr; ปลูกป่าเป็นวิธีลดก๊าซเรือนกระจกตามธรรมชาติ (2) <strong>ปะการังฟอกขาว</strong> เมื่อทะเลร้อนเกินไป &rarr; ชี้วัดสุขภาพระบบนิเวศ และเป็นแหล่งอาศัยของสัตว์น้ำที่เลี้ยงประชากรมนุษย์<br>💡 ชีววิทยา = วิทยาศาสตร์แห่งความยั่งยืน</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — การคิดและสอบสวนเชิงวิทยาศาสตร์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — สมมติฐานที่ดี</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> สมมติฐานข้อใดต่อไปนี้ "ทดสอบได้": (ก) ต้นไม้ในห้องเรียนชอบนักเรียน (ข) แสงสีน้ำเงินทำให้ใบสาหร่าย Chlorella สังเคราะห์ด้วยแสงได้เร็วกว่าสีเขียว</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ข้อ (ข) ทดสอบได้ — มีตัวแปร <strong>สีของแสง</strong> (ตัวแปรต้น) และ <strong>อัตราการเกิด O2</strong> (ตัวแปรตาม) วัดได้<br>ข้อ (ก) ไม่ทดสอบได้ — "ชอบ" ไม่มีวิธีวัดที่เป็นรูปธรรม<br>💡 สมมติฐานต้อง <strong>falsifiable</strong> ตามที่ Karl Popper เสนอ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — กลุ่มควบคุม</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> นักเรียนทดลองว่า "ปุ๋ย X ทำให้ต้นไม้สูงขึ้น" — ออกแบบกลุ่มควบคุมและตัวแปรควบคุม</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>วิธีคิด:</strong><br><strong>กลุ่มควบคุม:</strong> ต้นไม้ที่ไม่ใส่ปุ๋ย X (ใส่น้ำเปล่าแทน)<br><strong>กลุ่มทดลอง:</strong> ต้นไม้ที่ใส่ปุ๋ย X<br><strong>ตัวแปรควบคุม:</strong> ชนิดและขนาดต้นเดียวกัน · ปริมาณน้ำ · ปริมาณแสง · ดิน · อุณหภูมิ<br>💡 จำนวนต้นต้องมากพอ (n &ge; 10) เพื่อความเชื่อถือทางสถิติ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — ทฤษฎี vs กฎ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> "ทฤษฎีวิวัฒนาการ" และ "กฎเมนเดล" ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>กฎ (Law):</strong> สรุปความสัมพันธ์ที่ทำซ้ำได้เสมอภายใต้เงื่อนไขเดียวกัน (เช่น กฎเมนเดล)<br><strong>ทฤษฎี (Theory):</strong> คำอธิบายเชิงเหตุผลที่ผ่านการทดสอบหลายครั้ง สามารถทำนายปรากฏการณ์ใหม่ได้ (เช่น Evolution)<br>💡 ทฤษฎีไม่ใช่ "เดา" — ในวิทยาศาสตร์ ทฤษฎีคือคำอธิบายที่ดีที่สุดที่เรามี</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: Peer review</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการตีพิมพ์ในวารสารวิชาการต้องผ่าน peer review? อะไรจะเกิดถ้าผลงาน "ลัด" ขั้นตอนนี้?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Peer review ให้นักวิทยาศาสตร์อื่นในสาขาเดียวกัน <strong>ตรวจสอบ</strong> วิธีการ ข้อมูล และข้อสรุป &mdash; ลดความผิดพลาดและการบิดเบือน<br>หาก "ลัด": อาจเผยแพร่ข้อมูลผิด เกิดผลกระทบรุนแรง เช่น งานปลอม Wakefield (1998) ที่อ้างวัคซีน MMR ทำให้เกิดออทิสติก &mdash; ภายหลังถูกถอดถอนแต่สร้างความหวาดกลัวจนหลายคนไม่ฉีดวัคซีน<br>💡 Science = self-correcting แต่ต้องอาศัย community</div>
        </details>
      </div>
    </div>

    <!-- ============ SUMMARY ============ -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>คุณสมบัติของชีวิต (8):</strong> Order · Reproduction · Growth · Energy · Response · Homeostasis · Adaptation · Evolution<br>
        <strong>ระดับการจัดระบบ:</strong> atom &rarr; molecule &rarr; cell &rarr; tissue &rarr; organ &rarr; system &rarr; organism &rarr; population &rarr; community &rarr; ecosystem &rarr; biome &rarr; biosphere<br>
        <strong>3 Domains:</strong> Bacteria · Archaea · Eukarya<br>
        <strong>Central Dogma:</strong> DNA &rarr; RNA &rarr; โปรตีน<br>
        <strong>พลังงาน:</strong> ไหลทางเดียวจากแสง &rarr; ความร้อน ; <strong>สสาร:</strong> หมุนเวียน
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>ไวรัสคือสิ่งมีชีวิต</td><td>ไวรัสไม่จัดเป็นสิ่งมีชีวิตเต็มตัว เพราะไม่มีเซลล์และเมแทบอลิซึม</td></tr>
        <tr><td>ทฤษฎี = แค่เดา</td><td>ทฤษฎีในวิทยาศาสตร์ผ่านการทดสอบนับครั้งไม่ถ้วน</td></tr>
        <tr><td>เห็ดและสาหร่ายเป็นพืช</td><td>เห็ดอยู่ Fungi, สาหร่ายส่วนใหญ่อยู่ Protista</td></tr>
        <tr><td>Archaea = แบคทีเรียพิเศษ</td><td>Archaea เป็น Domain แยก ใกล้ Eukarya มากกว่า Bacteria</td></tr>
        <tr><td>วิวัฒนาการคือ "สัตว์ต้องการเปลี่ยน"</td><td>วิวัฒนาการเกิดจาก mutation สุ่ม + Natural Selection ไม่ใช่ความตั้งใจ</td></tr>
        <tr><td>พลังงานหมุนเวียนเหมือนสสาร</td><td>พลังงานไหลทางเดียว สูญเสียเป็นความร้อนทุกขั้น</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> ถ้าโจทย์ถาม "ลักษณะใดของสิ่งมีชีวิต" ให้นึกถึง MRS GREN ทันที — ครอบคลุม 7-8 ข้อแล้ว</div>
    </div>
  `,
  b1c2: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> ชีววิทยาในฐานะวิทยาศาสตร์: การสังเกต-ตั้งคำถาม<br>
        <strong>02</strong> วิธีการทางวิทยาศาสตร์ (Scientific Method) 6 ขั้นตอน<br>
        <strong>03</strong> Inductive vs Deductive reasoning<br>
        <strong>04</strong> ตัวแปร 4 ประเภท: ต้น · ตาม · ควบคุม · กลุ่ม<br>
        <strong>05</strong> การทดลองที่มีการควบคุม (Controlled Experiment)<br>
        <strong>06</strong> หน่วย SI การวัด เลขนัยสำคัญ และกราฟ<br>
        <strong>07</strong> เครื่องมือสำคัญ: กล้องจุลทรรศน์ &amp; PCR ฯลฯ<br>
        <strong>08</strong> Hypothesis vs Theory vs Law &amp; Peer Review
      </div>
      <div class="tip-box">💡 บทนี้เป็น <strong>"ทักษะกระบวนการ"</strong> ที่ใช้ได้กับทุกบทถัดไป — เข้าใจวิธีคิดและออกแบบการทดลอง จะช่วยให้ตอบโจทย์วิเคราะห์ในข้อสอบได้ดีขึ้นมาก</div>
    </div>

    <!-- 1. ภาพรวม -->
    <div class="content-section">
      <h3>🧭 ชีววิทยาเป็นวิทยาศาสตร์อย่างไร</h3>
      <p>ชีววิทยาเป็นศาสตร์ "เชิงประจักษ์" (empirical) — เชื่อในสิ่งที่ <strong>สังเกตได้ ทดสอบได้ และตรวจสอบซ้ำได้</strong> นักวิทยาศาสตร์ใช้กระบวนการทำงานที่เป็นระบบเพื่อหาคำตอบเกี่ยวกับสิ่งมีชีวิต</p>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Discovery Science:</strong> รวบรวมข้อมูลและสังเกตเพื่ออธิบายธรรมชาติ (เช่น Jane Goodall ศึกษาลิงชิมแปนซี)</li>
        <li><span class="li-dot sc-dot"></span><strong>Hypothesis-driven Science:</strong> ตั้งสมมติฐานและทดลองทดสอบ (เช่น ทดสอบว่ายา A รักษาโรค X ได้)</li>
      </ul>
      <div class="note-box">⚠️ <strong>วิทยาศาสตร์ ≠ ความจริงสัมบูรณ์:</strong> วิทยาศาสตร์ให้ <strong>คำอธิบายที่ดีที่สุดในปัจจุบัน</strong> โดยอาศัยหลักฐาน หากมีหลักฐานใหม่ที่ดีกว่า ก็พร้อมปรับเปลี่ยน</div>
    </div>

    <!-- 2. วิธีการทางวิทยาศาสตร์ + SVG -->
    <div class="content-section">
      <h3>🔬 วิธีการทางวิทยาศาสตร์ (Scientific Method) 6 ขั้น</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 360" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">วงจรวิธีการทางวิทยาศาสตร์</text>
          <g font-family="Sarabun" font-size="11" fill="#1E293B">
            <!-- 6 nodes around a circle -->
            <circle cx="260" cy="180" r="34" fill="#A7F3D0" stroke="#065F46" stroke-width="1.5"/>
            <text x="260" y="178" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#065F46" font-size="11">วิทยาศาสตร์</text>
            <text x="260" y="192" text-anchor="middle" font-size="9" fill="#065F46">เป็นวัฏจักร</text>

            <g>
              <circle cx="260" cy="60" r="32" fill="#DBEAFE" stroke="#3B82F6"/>
              <text x="260" y="58" text-anchor="middle" font-weight="700" fill="#1E40AF">1</text>
              <text x="260" y="74" text-anchor="middle" font-size="10" fill="#1E40AF">สังเกต</text>
            </g>
            <g>
              <circle cx="430" cy="120" r="32" fill="#FEF3C7" stroke="#F59E0B"/>
              <text x="430" y="118" text-anchor="middle" font-weight="700" fill="#B45309">2</text>
              <text x="430" y="134" text-anchor="middle" font-size="10" fill="#B45309">คำถาม</text>
            </g>
            <g>
              <circle cx="430" cy="240" r="32" fill="#FFE4E6" stroke="#F43F5E"/>
              <text x="430" y="238" text-anchor="middle" font-weight="700" fill="#9F1239">3</text>
              <text x="430" y="254" text-anchor="middle" font-size="10" fill="#9F1239">สมมติฐาน</text>
            </g>
            <g>
              <circle cx="260" cy="300" r="32" fill="#EDE9FE" stroke="#7C3AED"/>
              <text x="260" y="298" text-anchor="middle" font-weight="700" fill="#5B21B6">4</text>
              <text x="260" y="314" text-anchor="middle" font-size="10" fill="#5B21B6">ทดลอง</text>
            </g>
            <g>
              <circle cx="90" cy="240" r="32" fill="#ECFCCB" stroke="#65A30D"/>
              <text x="90" y="238" text-anchor="middle" font-weight="700" fill="#3F6212">5</text>
              <text x="90" y="254" text-anchor="middle" font-size="10" fill="#3F6212">วิเคราะห์</text>
            </g>
            <g>
              <circle cx="90" cy="120" r="32" fill="#D1FAE5" stroke="#10B981"/>
              <text x="90" y="118" text-anchor="middle" font-weight="700" fill="#047857">6</text>
              <text x="90" y="134" text-anchor="middle" font-size="10" fill="#047857">สรุปผล</text>
            </g>
          </g>
          <!-- arrows -->
          <g stroke="#10B981" stroke-width="2" fill="none" opacity="0.7">
            <path d="M 290 75 Q 360 80 405 105" marker-end="url(#arr2)"/>
            <path d="M 435 155 Q 450 200 435 215" marker-end="url(#arr2)"/>
            <path d="M 405 265 Q 360 290 295 295" marker-end="url(#arr2)"/>
            <path d="M 225 295 Q 160 290 115 265" marker-end="url(#arr2)"/>
            <path d="M 85 215 Q 70 200 85 155" marker-end="url(#arr2)"/>
            <path d="M 115 105 Q 160 80 225 75" marker-end="url(#arr2)"/>
          </g>
          <defs>
            <marker id="arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#10B981"/>
            </marker>
          </defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: วงจร 6 ขั้นของวิธีการทางวิทยาศาสตร์ — เป็น loop ที่ไม่จบ มีการทดสอบและปรับสมมติฐานเสมอ</div>
      </div>

      <table class="content-table">
        <tr><th>ขั้น</th><th>กิจกรรม</th><th>ตัวอย่าง</th></tr>
        <tr><td>1. สังเกต</td><td>ใช้ประสาทสัมผัสรวบรวมข้อมูล</td><td>ใบไม้ในที่ร่มมีสีเขียวเข้มกว่าในแดด</td></tr>
        <tr><td>2. ตั้งคำถาม</td><td>ตั้งคำถามที่ทดสอบได้</td><td>ความเข้มแสงมีผลกับสีของใบไม้หรือไม่?</td></tr>
        <tr><td>3. ตั้งสมมติฐาน</td><td>คาดคะเนคำตอบ — ต้อง <em>falsifiable</em></td><td>ใบในร่มมีคลอโรฟิลล์มากกว่าใบในแดด</td></tr>
        <tr><td>4. ทดลอง</td><td>ออกแบบและทดลอง</td><td>วัดปริมาณคลอโรฟิลล์ในใบทั้ง 2 กลุ่ม</td></tr>
        <tr><td>5. วิเคราะห์</td><td>นำข้อมูลมาคำนวณ/ลงกราฟ</td><td>หาค่าเฉลี่ย ใช้ t-test เปรียบเทียบ</td></tr>
        <tr><td>6. สรุปและเผยแพร่</td><td>ยอมรับ/ปฏิเสธสมมติฐาน → publish</td><td>เขียนบทความ ส่งวารสาร peer review</td></tr>
      </table>
    </div>

    <!-- 3. Inductive vs Deductive -->
    <div class="content-section">
      <h3>🧠 การคิดเชิง Inductive vs Deductive</h3>
      <table class="content-table">
        <tr><th>การคิด</th><th>ลักษณะ</th><th>ตัวอย่าง</th></tr>
        <tr><td>Inductive (จากเฉพาะ → ทั่วไป)</td><td>รวมข้อมูลย่อย → สร้างกฎใหญ่</td><td>"ทุกหงส์ที่เคยเห็นเป็นสีขาว → หงส์ทุกตัวสีขาว"</td></tr>
        <tr><td>Deductive (จากทั่วไป → เฉพาะ)</td><td>เริ่มจากกฎ → ทำนายเฉพาะ</td><td>"สิ่งมีชีวิตทุกตัวมี DNA → ดังนั้นเชื้อราก็มี DNA"</td></tr>
      </table>
      <div class="tip-box">💡 นักวิทยาศาสตร์ใช้ทั้งสองสลับกัน — Inductive สร้างสมมติฐาน Deductive ใช้ทำนายผลการทดลอง</div>
    </div>

    <!-- 4. ตัวแปร + SVG -->
    <div class="content-section">
      <h3>🎛️ ตัวแปร 4 ประเภทในการทดลอง</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">ตัวแปรในการทดลอง</text>
          <g font-family="Sarabun" font-size="11" fill="#1E293B">
            <!-- Independent -->
            <rect x="30" y="50" width="140" height="120" rx="10" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/>
            <text x="100" y="72" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#1E40AF" font-size="13">ตัวแปรต้น</text>
            <text x="100" y="88" text-anchor="middle" font-size="10" fill="#1E40AF">(Independent)</text>
            <text x="100" y="112" text-anchor="middle" fill="#1E40AF">สิ่งที่เรา</text>
            <text x="100" y="128" text-anchor="middle" fill="#1E40AF"><tspan font-weight="700">ตั้งใจเปลี่ยน</tspan></text>
            <text x="100" y="150" text-anchor="middle" font-size="10" font-style="italic" fill="#1E40AF">เช่น ความเข้มแสง</text>

            <text x="195" y="115" text-anchor="middle" font-size="20" fill="#065F46">⇒</text>

            <!-- Dependent -->
            <rect x="220" y="50" width="140" height="120" rx="10" fill="#FFE4E6" stroke="#F43F5E" stroke-width="2"/>
            <text x="290" y="72" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#9F1239" font-size="13">ตัวแปรตาม</text>
            <text x="290" y="88" text-anchor="middle" font-size="10" fill="#9F1239">(Dependent)</text>
            <text x="290" y="112" text-anchor="middle" fill="#9F1239">สิ่งที่</text>
            <text x="290" y="128" text-anchor="middle" fill="#9F1239"><tspan font-weight="700">เปลี่ยนตาม &amp; วัด</tspan></text>
            <text x="290" y="150" text-anchor="middle" font-size="10" font-style="italic" fill="#9F1239">เช่น อัตราสังเคราะห์แสง</text>

            <!-- Controlled -->
            <rect x="380" y="50" width="120" height="120" rx="10" fill="#D1FAE5" stroke="#10B981" stroke-width="2"/>
            <text x="440" y="72" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#065F46" font-size="13">ตัวแปรควบคุม</text>
            <text x="440" y="88" text-anchor="middle" font-size="10" fill="#065F46">(Controlled)</text>
            <text x="440" y="112" text-anchor="middle" fill="#065F46">สิ่งที่ต้อง</text>
            <text x="440" y="128" text-anchor="middle" fill="#065F46"><tspan font-weight="700">คงที่</tspan></text>
            <text x="440" y="150" text-anchor="middle" font-size="10" font-style="italic" fill="#065F46">เช่น อุณหภูมิ CO₂</text>
          </g>
          <text x="260" y="190" text-anchor="middle" font-family="Sarabun" font-size="10" fill="#64748B">ตัวแปรต้นเป็นเหตุ · ตัวแปรตามเป็นผล · ตัวแปรควบคุมป้องกัน confounding</text>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: ความสัมพันธ์ของตัวแปรในการทดลองทางชีววิทยา</div>
      </div>

      <table class="content-table">
        <tr><th>ตัวแปร</th><th>ความหมาย</th><th>กลุ่มที่ใช้</th></tr>
        <tr><td>Independent (ต้น)</td><td>สิ่งที่ผู้วิจัยเปลี่ยน</td><td>1 ตัวแปรต่อการทดลอง</td></tr>
        <tr><td>Dependent (ตาม)</td><td>สิ่งที่วัดผล</td><td>เปลี่ยนตามตัวแปรต้น</td></tr>
        <tr><td>Controlled (ควบคุม)</td><td>คงที่ตลอด</td><td>ทุกกลุ่ม</td></tr>
        <tr><td>Control group</td><td>กลุ่มที่ไม่ได้รับตัวแปรต้น</td><td>เปรียบเทียบกับ experimental group</td></tr>
      </table>
      <div class="note-box">⚠️ ต้องเปลี่ยน <strong>ตัวแปรต้นแค่ตัวเดียว</strong> ต่อการทดลอง 1 ครั้ง ถ้าเปลี่ยน 2 ตัวพร้อมกันจะไม่ทราบว่าผลมาจากตัวใด (เกิด confounding)</div>
    </div>

    <!-- 5. Controlled Experiment -->
    <div class="content-section">
      <h3>🧪 การทดลองที่มีการควบคุม (Controlled Experiment)</h3>
      <p>"Controlled" ในที่นี้หมายความว่ามีกลุ่มเปรียบเทียบและควบคุมตัวแปรอื่นไม่ให้รบกวน — ไม่ได้แปลว่า "ทดลองในที่ปิด"</p>
      <h4>Case Study: Snake mimicry — สีของงูหลอก</h4>
      <p>นักชีววิทยาทดลองว่าสีสันของงูจริง (coral snake) ช่วยให้รอดจากผู้ล่าหรือไม่ โดยปั้นงูยางเลียนแบบ 2 แบบ: (ก) ลายเลียนแบบ และ (ข) สีน้ำตาลธรรมดา วางในป่าจริง สังเกตร่องรอยการกัดของผู้ล่า</p>
      <ul>
        <li><span class="li-dot sc-dot"></span>ตัวแปรต้น: ลายของงูยาง</li>
        <li><span class="li-dot sc-dot"></span>ตัวแปรตาม: จำนวนรอยกัดต่องู 1 ตัว</li>
        <li><span class="li-dot sc-dot"></span>ตัวแปรควบคุม: ขนาด, รูปร่าง, ตำแหน่งวาง, เวลาสำรวจ</li>
        <li><span class="li-dot sc-dot"></span>ผล: งูยางสีธรรมดาถูกกัดมากกว่างูลายเลียนแบบหลายเท่า → สีลายช่วยให้รอด ✓</li>
      </ul>
      <div class="tip-box">💡 การทดลองในป่าจริงเรียก <strong>"Field experiment"</strong> ส่วนในห้องเรียก <strong>"Lab experiment"</strong> แต่ละแบบมีข้อดี-ข้อด้อย</div>
    </div>

    <!-- 6. SI Units -->
    <div class="content-section">
      <h3>📊 หน่วย SI การวัด และเลขนัยสำคัญ</h3>
      <table class="content-table">
        <tr><th>ปริมาณ</th><th>หน่วย SI</th><th>สัญลักษณ์</th><th>หน่วยย่อยใช้บ่อย</th></tr>
        <tr><td>ความยาว</td><td>เมตร</td><td>m</td><td>cm, mm, µm, nm</td></tr>
        <tr><td>มวล</td><td>กิโลกรัม</td><td>kg</td><td>g, mg, µg</td></tr>
        <tr><td>เวลา</td><td>วินาที</td><td>s</td><td>min, h, day</td></tr>
        <tr><td>อุณหภูมิ</td><td>เคลวิน</td><td>K</td><td>°C (= K - 273.15)</td></tr>
        <tr><td>ปริมาณสาร</td><td>โมล</td><td>mol</td><td>mmol, µmol</td></tr>
        <tr><td>ปริมาตร (derived)</td><td>m³</td><td>m³</td><td>L, mL, µL</td></tr>
      </table>
      <h4>คำนำหน้าที่พบในชีววิทยา</h4>
      <div class="formula-box">
        <div class="formula-label">Prefix scale (10ⁿ)</div>
        kilo (k) = 10³ &middot; centi (c) = 10⁻² &middot; milli (m) = 10⁻³<br>
        micro (µ) = 10⁻⁶ &middot; nano (n) = 10⁻⁹ &middot; pico (p) = 10⁻¹²<br>
        ตัวอย่าง: เซลล์ ~ 10 µm = 10 × 10⁻⁶ m = 10⁻⁵ m
      </div>
      <h4>เลขนัยสำคัญ (Significant Figures)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>ตัวเลขไม่ใช่ศูนย์ทุกตัวมีนัยสำคัญ (1234 → 4 SF)</li>
        <li><span class="li-dot sc-dot"></span>ศูนย์ระหว่างตัวเลข มีนัยสำคัญ (1.004 → 4 SF)</li>
        <li><span class="li-dot sc-dot"></span>ศูนย์นำหน้า ไม่มีนัยสำคัญ (0.0023 → 2 SF)</li>
        <li><span class="li-dot sc-dot"></span>ศูนย์หลังทศนิยม มีนัยสำคัญ (2.50 → 3 SF)</li>
      </ul>
      <div class="note-box">⚠️ บวก/ลบ ผลลัพธ์มีทศนิยมเท่ากับตัวที่น้อยที่สุด · คูณ/หาร ผลลัพธ์มี SF เท่ากับตัวน้อยที่สุด</div>
    </div>

    <!-- 7. เครื่องมือ + SVG -->
    <div class="content-section">
      <h3>🔬 เครื่องมือในการศึกษาชีววิทยา</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">ส่วนประกอบของกล้องจุลทรรศน์ใช้แสง</text>
          <!-- microscope body -->
          <g stroke="#0F766E" stroke-width="2" fill="#A7F3D0">
            <rect x="220" y="45" width="80" height="20" rx="3"/>
            <rect x="240" y="65" width="40" height="40"/>
            <rect x="225" y="105" width="70" height="10"/>
            <rect x="180" y="115" width="160" height="60" rx="8"/>
            <rect x="220" y="175" width="80" height="20" rx="3"/>
            <rect x="160" y="195" width="200" height="35" rx="6"/>
          </g>
          <!-- stage -->
          <rect x="170" y="130" width="180" height="6" fill="#FFFFFF" stroke="#0F766E"/>
          <!-- labels with leader lines -->
          <g font-family="Sarabun" font-size="11" fill="#1E293B">
            <text x="370" y="58" fill="#0F766E">เลนส์ใกล้ตา (Eyepiece)</text>
            <line x1="305" y1="55" x2="365" y2="55" stroke="#64748B" stroke-width="0.8"/>

            <text x="370" y="85" fill="#0F766E">หลอดเลนส์ (Body tube)</text>
            <line x1="285" y1="85" x2="365" y2="85" stroke="#64748B" stroke-width="0.8"/>

            <text x="370" y="110" fill="#0F766E">Revolving nosepiece</text>
            <line x1="298" y1="110" x2="365" y2="110" stroke="#64748B" stroke-width="0.8"/>

            <text x="370" y="135" fill="#0F766E">Objective lens</text>
            <line x1="345" y1="125" x2="365" y2="132" stroke="#64748B" stroke-width="0.8"/>

            <text x="370" y="155" fill="#0F766E">Stage + Clip</text>
            <line x1="350" y1="132" x2="365" y2="152" stroke="#64748B" stroke-width="0.8"/>

            <text x="370" y="195" fill="#0F766E">Diaphragm / Light</text>
            <line x1="343" y1="190" x2="365" y2="192" stroke="#64748B" stroke-width="0.8"/>

            <text x="50" y="58" fill="#0F766E" text-anchor="start">มอง</text>
            <text x="50" y="135" fill="#0F766E" text-anchor="start">วาง</text>
            <text x="50" y="135" fill="#0F766E" text-anchor="start">วาง</text>
            <text x="20" y="135" fill="#0F766E">สไลด์</text>
            <line x1="55" y1="132" x2="170" y2="132" stroke="#64748B" stroke-width="0.8"/>

            <text x="50" y="195" fill="#0F766E">Coarse/Fine</text>
            <text x="50" y="210" fill="#0F766E">knob</text>
            <line x1="100" y1="200" x2="170" y2="205" stroke="#64748B" stroke-width="0.8"/>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: ส่วนประกอบหลักของกล้องจุลทรรศน์ใช้แสง</div>
      </div>

      <table class="content-table">
        <tr><th>เครื่องมือ</th><th>กำลังขยาย / ใช้ดู</th><th>หมายเหตุ</th></tr>
        <tr><td>กล้องจุลทรรศน์ใช้แสง (Light)</td><td>1,000× · เซลล์มีชีวิต</td><td>เห็นสี ราคาถูก</td></tr>
        <tr><td>Stereo / Dissecting</td><td>40× · ตัวอย่าง 3 มิติ</td><td>ตรวจแมลง พืชเล็ก</td></tr>
        <tr><td>TEM (Transmission EM)</td><td>1,000,000× · ภายในเซลล์</td><td>ภาพขาว-ดำ ต้องย้อมหนัก</td></tr>
        <tr><td>SEM (Scanning EM)</td><td>500,000× · พื้นผิว 3D</td><td>ภาพ topology ละเอียดมาก</td></tr>
        <tr><td>PCR Machine</td><td>เพิ่มจำนวน DNA</td><td>ใช้ในการตรวจ COVID</td></tr>
        <tr><td>Gel Electrophoresis</td><td>แยก DNA/protein</td><td>ใช้ใน DNA fingerprint</td></tr>
        <tr><td>Spectrophotometer</td><td>วัดความเข้มแสง</td><td>วัดความเข้มข้นโปรตีน</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">กำลังขยายรวม</div>
        Total Magnification = (กำลังขยายเลนส์ใกล้ตา) × (กำลังขยายเลนส์ใกล้วัตถุ)<br>
        ตัวอย่าง: 10× × 40× = 400×
      </div>
    </div>

    <!-- 8. Theory vs Law -->
    <div class="content-section">
      <h3>📜 Hypothesis · Theory · Law · Model + Peer Review</h3>
      <table class="content-table">
        <tr><th>คำ</th><th>นิยาม</th><th>ตัวอย่างในชีววิทยา</th></tr>
        <tr><td>Hypothesis</td><td>คำอธิบายชั่วคราว ทดสอบได้</td><td>"การออกกำลังกายช่วยเพิ่มจำนวนไมโทคอนเดรียในกล้ามเนื้อ"</td></tr>
        <tr><td>Theory</td><td>คำอธิบายที่ได้รับการทดสอบจำนวนมาก รวบรวมข้อเท็จจริงและสมมติฐานหลายข้อ</td><td>ทฤษฎีวิวัฒนาการ · ทฤษฎีเซลล์</td></tr>
        <tr><td>Law</td><td>สรุปความสัมพันธ์ที่ทำซ้ำได้เสมอ มักเขียนเป็นสมการ/กฎ</td><td>กฎเมนเดล · Hardy-Weinberg</td></tr>
        <tr><td>Model</td><td>แบบจำลอง (กายภาพ คณิตศาสตร์ หรือกราฟิก)</td><td>Double-helix model · Lock and Key</td></tr>
      </table>
      <h4>กระบวนการ Peer Review</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li>นักวิจัยส่งบทความ (manuscript) ไปวารสาร</li>
        <li>บรรณาธิการคัดเลือกผู้เชี่ยวชาญ 2-3 คน "อ่านตรวจ"</li>
        <li>ผู้ตรวจให้คำแนะนำ — accept / revise / reject</li>
        <li>หลังแก้ไข ถูก publish และเปิดให้ชุมชนตรวจซ้ำ</li>
      </ol>
      <div class="tip-box">💡 บทความที่ผ่าน peer review มีความน่าเชื่อถือกว่าบล็อกหรือข่าวทั่วไป — เป็นมาตรฐานทองของวิทยาศาสตร์</div>
    </div>

    <!-- ============ 32 PRACTICE PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — ความหมายและกระบวนการทางวิทยาศาสตร์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — Discovery vs Hypothesis-driven</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> แยกประเภทของงานวิจัย 2 ชิ้น: (ก) Jane Goodall บันทึกพฤติกรรมชิมแปนซีในแทนซาเนีย และ (ข) นักชีวเคมีทดสอบว่า "เอนไซม์ X ทำงานเหมาะที่ pH 7"</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(ก) Goodall = <strong>Discovery Science</strong> (เก็บข้อมูลเชิงสังเกต)<br>(ข) เอนไซม์ X = <strong>Hypothesis-driven Science</strong> (มีสมมติฐานเรื่อง pH และทดสอบ)<br>💡 ทั้งสองรูปแบบเป็นวิทยาศาสตร์ที่ถูกต้อง — ขึ้นอยู่กับคำถาม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — Falsifiable</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> สมมติฐานใดต่อไปนี้ <em>ไม่</em> สามารถปฏิเสธได้ (not falsifiable)? (ก) มีสิ่งมีชีวิตมองไม่เห็นในห้องที่หากเข้าใกล้จะหายไป (ข) แสง UV ทำลาย DNA</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (ก) ไม่ falsifiable — เพราะอ้างว่ามีสิ่งที่ไม่สามารถวัดหรือตรวจสอบได้ ไม่มีผลการทดลองใดที่จะหักล้างได้<br>(ข) falsifiable — สามารถวัด DNA damage หลังให้แสง UV ได้<br>💡 สมมติฐานวิทยาศาสตร์ต้องสามารถ <strong>"พิสูจน์ผิด"</strong> ได้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — เรียงลำดับขั้นตอน</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> จัดเรียงขั้นตอนวิทยาศาสตร์ให้ถูก: a) สรุปผล b) สังเกต c) ทดลอง d) ตั้งสมมติฐาน e) วิเคราะห์ข้อมูล f) ตั้งคำถาม</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> b → f → d → c → e → a<br>💡 จำลำดับ: สังเกต → ถาม → ตั้ง → ทดลอง → วิเคราะห์ → สรุป</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: ทำซ้ำได้ (Reproducibility)</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการทดลองทางชีววิทยาที่ดีต้อง "ทำซ้ำได้"? ยกตัวอย่างผลเสียถ้าไม่ได้</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพื่อให้นักวิทยาศาสตร์คนอื่นในที่อื่นทดลองด้วยวิธีเดียวกันแล้ว <strong>ได้ผลใกล้เคียง</strong> — ยืนยันว่าไม่ใช่ความบังเอิญ<br>ผลเสียถ้าไม่ได้: เกิด "วิกฤต reproducibility" ในชีวการแพทย์ ราว 50% ของงานวิจัยถูกทำซ้ำไม่ได้ ทำให้สังคมไม่เชื่อถือวิทยาศาสตร์<br>💡 จึงต้องบันทึก protocol ละเอียดและเปิดเผยข้อมูลดิบ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — สมมติฐานและการทดสอบ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — สมมติฐานทางเลือก (Null vs Alternative)</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> "ปุ๋ย Y ทำให้ต้นพริกออกผลมากกว่าปุ๋ยปกติ" — ระบุ Null และ Alternative hypothesis</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Null (H₀):</strong> ปุ๋ย Y ไม่มีผลต่อจำนวนผล (จำนวนผลของ 2 กลุ่มเท่ากัน)<br><strong>Alternative (H₁):</strong> ปุ๋ย Y ทำให้จำนวนผลต่างจากปกติ<br>💡 ในสถิติ เราพยายาม "ปฏิเสธ" Null โดยใช้ข้อมูล</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — Prediction</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ถ้าสมมติฐานคือ "พืชต้องการแสงเพื่อเติบโต" จงเขียน prediction ที่ทดสอบได้</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> "ถ้าวางต้นถั่วในที่มืดสนิทเปรียบเทียบกับต้นถั่วในที่มีแสง 12 ชม./วัน เป็นเวลา 2 สัปดาห์ ต้นถั่วในที่มืดจะมีความสูงเฉลี่ยน้อยกว่า"<br>💡 รูปแบบ "If... then..." ช่วยให้ prediction ชัด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — สมมติฐานคุณภาพ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> สมมติฐานข้อใดดีกว่ากัน? (ก) ผีอาจเป็นสาเหตุของแสงประหลาด (ข) แบคทีเรียเรืองแสงเป็นสาเหตุ — และดีในแง่ใด</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (ข) ดีกว่า — เป็น naturalistic, testable, และ falsifiable<br>(ก) อิงสิ่งเหนือธรรมชาติ ไม่อยู่ในขอบเขตของวิทยาศาสตร์<br>💡 สมมติฐานดี = simple + testable + based on existing knowledge</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: Modify hypothesis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> นักเรียนทดสอบ "เมล็ดถั่วงอกได้ดีในความมืด" แต่ผลออกมาว่างอกได้ทั้งในและนอกความมืด — ควรทำอย่างไรต่อ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ปรับสมมติฐานเป็น "การงอกของเมล็ดถั่วไม่ขึ้นกับแสง" หรือเพิ่มตัวแปรอื่น เช่น "น้ำ" "อุณหภูมิ" — แล้วทดลองใหม่<br>วิทยาศาสตร์ <strong>ไม่ใช่</strong> การพยายามทำให้ "ถูก" แต่เป็นการ <strong>ค้นหาความจริง</strong><br>💡 ผลลบไม่ใช่ความล้มเหลว — เป็นข้อมูลใหม่</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — ตัวแปรและการออกแบบการทดลอง</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — ระบุตัวแปร</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทดสอบว่าอุณหภูมิ (5, 25, 45 องศา C) มีผลต่ออัตราการงอกของเมล็ดถั่ว — ระบุตัวแปรต้น ตัวแปรตาม ตัวแปรควบคุม</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>ต้น = <strong>อุณหภูมิ</strong> (3 ระดับ)<br>ตาม = <strong>% เมล็ดงอกใน 7 วัน</strong><br>ควบคุม = ชนิดและอายุเมล็ด, ปริมาณน้ำ, ความชื้น, แสง, ภาชนะ<br>💡 จำนวนเมล็ดต่อกลุ่มควรเท่ากันและ ≥ 30 เพื่อสถิติ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — ตัวแปรซ่อน (Confounding variable)</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> นักเรียนวางต้นกุหลาบกลุ่ม A ในห้องครัวที่ร้อน กลุ่ม B ในห้องเรียนที่เย็น สรุปว่า "อุณหภูมิทำให้กุหลาบโตเร็ว" — มีปัญหาอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ห้องครัวและห้องเรียนต่างกันหลายอย่าง — <strong>แสง · ความชื้น · CO₂ · ผู้คน</strong> เป็นตัวแปรซ่อน อาจเป็นเหตุที่แท้จริง ไม่ใช่อุณหภูมิ<br>วิธีแก้: ใช้ตู้อบอุณหภูมิควบคุม วางต้นไม้ในห้องเดียวกันแต่ปรับเฉพาะอุณหภูมิ<br>💡 Confounding = ตัวแปรที่ไม่ถูกควบคุม ทำให้สรุปผิด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — ออกแบบง่าย</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ออกแบบการทดลองทดสอบ "น้ำตาลจำนวนมากทำให้พืชเจริญเติบโตเร็วขึ้น"</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>วิธีคิด:</strong><br>กลุ่ม A (control): พืชรดน้ำเปล่า<br>กลุ่ม B,C,D: รดน้ำที่มีน้ำตาล 1%, 5%, 10% ตามลำดับ<br>วัด: ความสูงทุก 3 วัน เป็นเวลา 4 สัปดาห์<br>ควบคุม: พันธุ์เดียวกัน, ดิน, แสง, อุณหภูมิ<br>💡 ใส่กลุ่ม control เปล่าและทดลอง ≥ 3 ระดับเพื่อหาความสัมพันธ์เชิงปริมาณ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: ปัญหา Sample size</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ใช้พืช 1 ต้น/กลุ่มเพียงพอหรือไม่? อธิบายเหตุผล</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ไม่พอ — เพราะแต่ละต้นมีความแปรผันทางพันธุกรรม สุขภาพ และ stochastic events ใช้ต้นเดียวอาจตายระหว่างทาง<br>ควรใช้ <strong>≥ 10-30 ต้น/กลุ่ม</strong> เพื่อสามารถคำนวณ <strong>ค่าเฉลี่ย ± SD</strong> และทดสอบ statistical significance<br>💡 More replicates = ความเชื่อถือสูงขึ้น</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — กลุ่มควบคุมและการลดอคติ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — Placebo control</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ในการทดลองยาแก้ปวด ทำไมต้องมีกลุ่ม placebo (ยาหลอก)?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพราะ <strong>การคาดหวังของผู้ป่วย</strong> (placebo effect) อาจทำให้รู้สึกดีขึ้นแม้ไม่ได้รับยาจริง ต้องใช้ผ่านกลุ่ม placebo เพื่อแยกผลจริงของยาออกจากผลทางจิตใจ<br>💡 ใช้ <strong>double-blind</strong> — ทั้งผู้ป่วยและแพทย์ไม่รู้ใครได้อะไร — เพื่อลดอคติเพิ่ม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — Sham operation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> นักวิจัยศึกษาบทบาทของต่อมไพเนียลในหนูโดยตัดต่อมออก — ทำไมต้องมีกลุ่มที่ถูก "ผ่าตัดหลอก" (sham)?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพื่อแยก <strong>ผลของการตัดต่อม</strong> ออกจาก <strong>ความเครียดของการผ่าตัด</strong> เอง — กลุ่ม sham ถูกเปิดและเย็บแผลแบบเดียวกันแต่ไม่ตัดต่อม<br>💡 ไม่งั้น ผลที่เห็นอาจมาจากความเครียดของการผ่าตัด ไม่ใช่จากต่อม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — Random assignment</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมต้องสุ่ม (random) แบ่งกลุ่มทดลอง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพื่อให้ตัวแปรที่ผู้วิจัยไม่ทราบ (อายุ ยีน สภาพ) <strong>กระจายเฉลี่ย</strong> ระหว่างกลุ่ม — ลด selection bias<br>💡 ถ้าไม่สุ่ม อาจเลือกพืชต้นใหญ่ ๆ ไปกลุ่มที่ใส่ปุ๋ย → สรุปผิด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: Ethics</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> การทดลองยาในมนุษย์ ต้องมีอะไรเพิ่มเติมนอกจากกลุ่มควบคุม?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>Informed consent</strong> — ผู้เข้าร่วมต้องเข้าใจและยินยอม (2) ผ่าน <strong>Ethics Committee / IRB</strong> (3) มี data safety monitoring (4) สิทธิ์ถอนตัวเมื่อไหร่ก็ได้<br>💡 Tuskegee study (1932-1972) เป็นตัวอย่างที่ละเมิดจริยธรรมจนนำมาสู่กฎเข้มงวดในปัจจุบัน</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — การวัด หน่วย SI และเลขนัยสำคัญ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — แปลงหน่วย</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เซลล์ E. coli ยาว 2 µm — มีค่าเท่ากับกี่ mm และกี่ nm?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> 2 µm = 2 × 10⁻³ mm = <strong>0.002 mm</strong><br>2 µm = 2 × 10³ nm = <strong>2,000 nm</strong><br>💡 1 µm = 10⁻³ mm = 10³ nm = 10⁻⁶ m</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — เลขนัยสำคัญ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุจำนวนเลขนัยสำคัญของ: (ก) 0.00450 (ข) 1200 (ค) 3.14159</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (ก) 3 SF (ศูนย์นำหน้าไม่นับ, ศูนย์ท้ายหลังทศนิยมนับ)<br>(ข) 2-4 SF (กำกวม — ขึ้นกับการเขียน 1.2×10³ = 2 SF, 1.200×10³ = 4 SF)<br>(ค) 6 SF<br>💡 ใช้ scientific notation ลดความกำกวม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — Mean ± SD</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> วัดความสูงพืช 5 ต้น (cm): 12, 14, 13, 15, 11 — คำนวณ Mean (เฉลี่ย) และ SD (เบี่ยงเบนมาตรฐาน)</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>วิธีคิด:</strong><br>Mean = (12+14+13+15+11)/5 = 65/5 = <strong>13 cm</strong><br>ส่วนเบี่ยงเบน: (-1)² + 1² + 0² + 2² + (-2)² = 10<br>Variance (n-1) = 10/4 = 2.5<br>SD = √2.5 ≈ <strong>1.58 cm</strong><br>💡 รายงานเป็น 13.0 ± 1.6 cm</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: เลือกกราฟ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เลือกชนิดกราฟที่เหมาะสำหรับ: (ก) อัตราการสังเคราะห์แสงที่อุณหภูมิ 10-50 องศา C (ข) % ของนักเรียนที่ชอบเรียนชีววิทยา</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (ก) <strong>Line graph</strong> — เพราะตัวแปรต้นเป็นตัวเลขต่อเนื่อง<br>(ข) <strong>Bar chart or Pie chart</strong> — เพราะเป็นข้อมูล categorical<br>💡 Continuous → Line, Categorical → Bar/Pie</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — การใช้กล้องจุลทรรศน์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — กำลังขยายรวม</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ใช้เลนส์ใกล้ตา 10× ร่วมกับเลนส์ใกล้วัตถุ 40× — กำลังขยายรวมเท่าใด? และวัตถุที่ขนาด 10 µm จะเห็นในกล้องเป็นกี่ mm?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> กำลังขยาย = 10 × 40 = <strong>400×</strong><br>วัตถุ 10 µm = 0.01 mm → ในกล้องเห็นเป็น 0.01 × 400 = <strong>4 mm</strong><br>💡 ใหญ่ขึ้น 400 เท่า</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — Resolution</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม TEM จึงเห็นไรโบโซมได้ แต่กล้องใช้แสงเห็นไม่ได้?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพราะ <strong>Resolution</strong> (กำลังแยกแยะ) ต่างกัน — กล้องใช้แสงแยกได้ ~200 nm (จำกัดด้วยความยาวคลื่นแสง) ไรโบโซม ~20 nm จึงเล็กเกินไป<br>TEM ใช้ลำอิเล็กตรอนซึ่งมีความยาวคลื่นสั้นมาก แยกได้ ~0.2 nm<br>💡 Resolution ≠ Magnification — แม้ขยายมากแต่ resolution ต่ำก็จะเบลอ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — การเตรียมสไลด์</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เรียงขั้นเตรียมสไลด์ชั่วคราวของเซลล์เยื่อบุข้างแก้ม</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) หยดน้ำลงสไลด์ (2) ขูดเซลล์ด้านในข้างแก้มอย่างเบา ๆ ด้วยไม้พันสำลี (3) ป้ายเซลล์ลงบนน้ำ (4) หยดสี methylene blue 1 หยด (5) ปิดด้วย cover slip อย่างเอียงเพื่อกันฟอง (6) ดูใต้กล้องเริ่มจาก objective 4× → 10× → 40×<br>💡 ย้อมสีช่วยให้เห็นนิวเคลียสชัด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: เลือกกล้องที่เหมาะ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ต้องการดู (ก) การเคลื่อนที่ของพารามีเซียม (ข) ส่วนละเอียดของผิวขนยุง (ค) ออร์แกเนลล์ในเซลล์ — ควรใช้กล้องอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (ก) <strong>Light microscope</strong> (เซลล์มีชีวิต ดูได้)<br>(ข) <strong>SEM</strong> (พื้นผิว 3 มิติ)<br>(ค) <strong>TEM</strong> (ภายในเซลล์ resolution สูง)<br>💡 EM ใช้กับตัวอย่างที่ตายเท่านั้น เพราะต้องอยู่ในสุญญากาศ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — Theory · Law · Model</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — แยกประเภท</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุว่า: (ก) สิ่งมีชีวิตเกิดจากเซลล์ที่มีอยู่เดิม (ข) จีโนมของไวรัสโควิดเป็น RNA (ค) ในการผสมพันธุ์ AaBb × AaBb อัตราส่วน phenotype = 9:3:3:1 — เป็น theory, law, fact, หรือ hypothesis?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(ก) ส่วนหนึ่งของ <strong>Cell Theory</strong><br>(ข) <strong>Fact</strong> ที่ตรวจสอบได้<br>(ค) <strong>Law</strong> (Mendel's Law of Independent Assortment)<br>💡 ในวิทยาศาสตร์ "theory" ไม่ใช่การเดา — มีฐานข้อมูลรองรับ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — Model</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ภาพ Double-Helix ที่แสดง DNA เป็น Theory หรือ Model?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เป็น <strong>Model</strong> — แบบจำลองโครงสร้างที่สรุปข้อมูลจริงเข้าด้วยกัน ใช้ทำนายและอธิบาย<br>💡 Model เปลี่ยนแปลงได้ถ้ามีข้อมูลใหม่ — เช่น แบบจำลองอะตอมเปลี่ยนจาก plum pudding → Bohr → quantum</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — Limitation of theory</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทฤษฎีสามารถเปลี่ยนแปลงได้หรือไม่? ยกตัวอย่าง</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ได้ — ถ้ามีข้อมูลใหม่ที่หักล้าง หรือทฤษฎีอื่นอธิบายได้ดีกว่า<br>ตัวอย่าง: ทฤษฎี endosymbiosis ของ Lynn Margulis ได้รับการยอมรับเมื่อพบ DNA ในไมโทคอนเดรียและคลอโรพลาสต์ — ปรับ paradigm ของชีววิทยา<br>💡 Self-correcting คือจุดแข็งของวิทยาศาสตร์</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: Pseudoscience</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมโหราศาสตร์ (astrology) จึงไม่ใช่วิทยาศาสตร์ ทั้งที่ใช้คำว่า "นักดาวศาสตร์"?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> โหราศาสตร์ <strong>ไม่ falsifiable</strong> (คำทำนายกำกวมเสมอ), ไม่มี Peer review, ไม่ปรับเปลี่ยนเมื่อพบหลักฐานขัดแย้ง, และไม่ทดสอบในระดับกลุ่มประชากร<br>💡 ความเป็นวิทยาศาสตร์อยู่ที่ <strong>วิธีการ</strong> ไม่ใช่ชื่อ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — การคิดวิเคราะห์ข้อมูล</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — Correlation vs Causation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ข้อมูลแสดงว่าจังหวัดที่กินไอศกรีมมากมีจมน้ำเสียชีวิตมาก — สรุปได้ว่า "ไอศกรีมทำให้จมน้ำ"?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ไม่ได้ — เป็น <strong>correlation</strong> เท่านั้น ไม่ใช่ causation ตัวแปรแฝงคือ <strong>"ฤดูร้อน"</strong> — คนกินไอศกรีมและว่ายน้ำมากขึ้น<br>💡 Correlation ≠ Causation เป็นข้อผิดพลาดทางสถิติที่พบบ่อย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — p-value</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> นักวิจัยพบ p &lt; 0.05 หมายความว่าอย่างไร? เพียงพอที่จะ "พิสูจน์" สมมติฐานหรือไม่?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> p &lt; 0.05 แปลว่า "ความน่าจะเป็นที่จะได้ผลแบบนี้โดยบังเอิญ &lt; 5%" → <strong>ปฏิเสธ Null hypothesis</strong> ได้<br>แต่ "<strong>ไม่ใช่</strong>" การพิสูจน์ — ยังต้อง replicate, ตรวจ effect size, และพิจารณา biological significance<br>💡 Statistical ≠ Biological significance</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — อ่านกราฟ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> กราฟแสดงอัตราสังเคราะห์แสงเพิ่มเมื่อ CO₂ เพิ่ม จนถึง 0.1% แล้วคงที่ — สรุปอะไรได้?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> CO₂ เป็นปัจจัยจำกัด (limiting factor) ในช่วง 0-0.1% แต่หลังจากนั้นมีปัจจัยอื่นเป็นตัวจำกัด (เช่น แสง หรืออุณหภูมิ)<br>💡 อ่านจุด <strong>saturation point</strong> และจุด <strong>plateau</strong> ในกราฟ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: Fake news science</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ข่าวบอก "นักวิจัยพบว่ากินช็อกโกแลตช่วยลดน้ำหนัก" — คุณจะตรวจสอบความน่าเชื่อถืออย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ตรวจ: (1) งานต้นฉบับตีพิมพ์ในวารสารใด มี peer review หรือไม่? (2) sample size เพียงพอไหม? (3) controlled experiment หรือ observational study? (4) ใครเป็นผู้สนับสนุนงานวิจัย? (5) ผลถูก replicate โดยกลุ่มอื่นหรือยัง?<br>💡 ระวัง: <strong>ผู้สนับสนุนทุนวิจัย</strong> อาจมีผลประโยชน์ทับซ้อน — บริษัทช็อกโกแลตให้ทุนงานนี้?</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>วิธีการ 6 ขั้น:</strong> สังเกต → คำถาม → สมมติฐาน → ทดลอง → วิเคราะห์ → สรุป<br>
        <strong>ตัวแปร 4 ชนิด:</strong> ต้น · ตาม · ควบคุม · กลุ่มควบคุม<br>
        <strong>หน่วย SI:</strong> m · kg · s · K · mol · cd · A<br>
        <strong>Hypothesis &lt; Theory &lt; Law:</strong> ระดับความเชื่อถือ + ขอบเขต<br>
        <strong>Correlation ≠ Causation</strong>
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>ทฤษฎีคือการเดา</td><td>ทฤษฎีคือคำอธิบายที่ได้รับการทดสอบหลายครั้ง</td></tr>
        <tr><td>Magnification สูง = ภาพชัด</td><td>ต้องดูที่ Resolution ด้วย — ขยายมากแต่เบลอก็ไม่มีประโยชน์</td></tr>
        <tr><td>ผลลบ = การทดลองล้มเหลว</td><td>ผลลบเป็นข้อมูลที่สำคัญ ช่วยปฏิเสธสมมติฐาน</td></tr>
        <tr><td>เปลี่ยนตัวแปรหลายตัวพร้อมกัน</td><td>เปลี่ยนทีละตัว เพื่อรู้สาเหตุของผล</td></tr>
        <tr><td>Correlation = Causation</td><td>ไม่เสมอไป ต้องระวังตัวแปรซ่อน</td></tr>
        <tr><td>กลุ่มเดียวก็พอ</td><td>ต้องมีกลุ่มควบคุมและ replicate มากพอ</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> ถ้าโจทย์ถามให้ออกแบบการทดลอง ให้ระบุ <strong>4 อย่าง</strong> เสมอ: ตัวแปรต้น ตัวแปรตาม ตัวแปรควบคุม กลุ่มควบคุม — ครบทั้งหมดได้คะแนนเต็ม</div>
    </div>
  `,
  b1c3: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> ธาตุและสารประกอบในสิ่งมีชีวิต (CHNOPS)<br>
        <strong>02</strong> อะตอม &amp; พันธะเคมี: ionic, covalent, hydrogen bond<br>
        <strong>03</strong> น้ำ — ตัวทำละลายสากลและคุณสมบัติ 5 ข้อ<br>
        <strong>04</strong> คาร์โบไฮเดรต — น้ำตาลและพอลิแซ็กคาไรด์<br>
        <strong>05</strong> ลิพิด — ไขมัน ฟอสโฟลิพิด สเตอรอยด์<br>
        <strong>06</strong> โปรตีน — กรดอะมิโน 20 ชนิด, โครงสร้าง 4 ระดับ<br>
        <strong>07</strong> กรดนิวคลีอิก — DNA &amp; RNA<br>
        <strong>08</strong> เอนไซม์ — ตัวเร่งชีวภาพและปัจจัยที่มีผล
      </div>
      <div class="tip-box">💡 บทนี้คือ <strong>"ตัวอักษร"</strong> ของชีววิทยา — เมื่อเข้าใจอะตอม โมเลกุล และชีวโมเลกุล 4 ชนิด คุณจะอ่าน "ภาษาเซลล์" ในบทต่อ ๆ ไปได้อย่างง่ายดาย</div>
    </div>

    <!-- 1. ธาตุ + SVG -->
    <div class="content-section">
      <h3>🧪 ธาตุและสารประกอบในสิ่งมีชีวิต</h3>
      <p>แม้ในโลกจะมีธาตุมากกว่า 90 ชนิด แต่สิ่งมีชีวิตใช้เพียง ~25 ชนิด โดย 4 ธาตุ <strong>C, H, O, N</strong> ครองมวล &gt; 96% ของร่างกายมนุษย์</p>
      <table class="content-table">
        <tr><th>ธาตุ</th><th>% มวลในร่างกาย</th><th>บทบาทหลัก</th></tr>
        <tr><td>O (ออกซิเจน)</td><td>65%</td><td>น้ำ + การหายใจระดับเซลล์</td></tr>
        <tr><td>C (คาร์บอน)</td><td>18.5%</td><td>โครงสร้างของสารอินทรีย์ทุกชนิด</td></tr>
        <tr><td>H (ไฮโดรเจน)</td><td>9.5%</td><td>น้ำ + สารอินทรีย์</td></tr>
        <tr><td>N (ไนโตรเจน)</td><td>3.3%</td><td>โปรตีน · กรดนิวคลีอิก</td></tr>
        <tr><td>Ca (แคลเซียม)</td><td>1.5%</td><td>กระดูก ฟัน · การหดตัวกล้ามเนื้อ</td></tr>
        <tr><td>P (ฟอสฟอรัส)</td><td>1.0%</td><td>DNA · ATP · กระดูก</td></tr>
        <tr><td>K, S, Na, Cl, Mg</td><td>~0.85%</td><td>กระแสประสาท · สมดุลของเหลว</td></tr>
        <tr><td>Trace elements (Fe, I, Cu, Zn...)</td><td>&lt;0.01%</td><td>ใช้น้อยแต่ขาดไม่ได้</td></tr>
      </table>
      <div class="tip-box">💡 จำง่าย <strong>CHNOPS</strong> = 6 ธาตุหลักของชีวโมเลกุล (Carbon, Hydrogen, Nitrogen, Oxygen, Phosphorus, Sulfur)</div>
    </div>

    <!-- 2. พันธะเคมี -->
    <div class="content-section">
      <h3>⚛️ อะตอมและพันธะเคมี</h3>
      <p>อะตอมประกอบด้วยโปรตอน นิวตรอน อิเล็กตรอน — ความแตกต่างของจำนวนโปรตอนกำหนดชนิดของธาตุ (Atomic number, Z)</p>
      <h4>ประเภทของพันธะ</h4>
      <table class="content-table">
        <tr><th>พันธะ</th><th>ลักษณะ</th><th>ตัวอย่างในสิ่งมีชีวิต</th></tr>
        <tr><td>Ionic bond</td><td>โอนอิเล็กตรอน — ไอออน + กับ -</td><td>NaCl ในเลือด, Ca²⁺ ในกระดูก</td></tr>
        <tr><td>Covalent (non-polar)</td><td>ใช้ e⁻ ร่วมกันเท่ากัน</td><td>C-C, C-H ในไขมัน</td></tr>
        <tr><td>Covalent (polar)</td><td>ใช้ e⁻ ร่วมแต่ไม่เท่ากัน (EN ต่าง)</td><td>O-H ในน้ำ</td></tr>
        <tr><td>Hydrogen bond</td><td>แรงดึงดูดอ่อนระหว่าง H กับ O/N</td><td>เกลียวคู่ DNA, น้ำคล้ายตัว</td></tr>
        <tr><td>Van der Waals</td><td>แรงอ่อนระหว่างโมเลกุล</td><td>โปรตีนพับตัว</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">ความแรงของพันธะ (kcal/mol)</div>
        Covalent ~ 50-110 (แรงสุด) &raquo; Ionic ~3-7 (ในน้ำ) &raquo; H-bond ~1-5 &raquo; Van der Waals ~0.5-1
      </div>
      <div class="note-box">⚠️ <strong>พันธะอ่อน &ne; ไม่สำคัญ:</strong> H-bond อ่อนตัวเดียวก็จริง แต่ <strong>หลายล้านพันธะรวมกัน</strong> ทำให้ DNA, โปรตีน, ผิวน้ำ มีความเสถียร</div>
    </div>

    <!-- 3. น้ำ + SVG -->
    <div class="content-section">
      <h3>💧 น้ำและคุณสมบัติพิเศษ</h3>
      <p>น้ำเป็นโมเลกุลที่ <strong>มีขั้ว (polar)</strong> เพราะออกซิเจนดึงอิเล็กตรอนแรงกว่าไฮโดรเจน → ทำให้เกิดพันธะไฮโดรเจนระหว่างโมเลกุลน้ำ</p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">โมเลกุลของน้ำและพันธะไฮโดรเจน</text>
          <!-- 3 water molecules -->
          <g font-family="Sarabun" font-size="11" fill="#FFFFFF">
            <!-- water 1 -->
            <circle cx="200" cy="100" r="28" fill="#EF4444"/><text x="200" y="105" text-anchor="middle" font-weight="700">O</text>
            <text x="180" y="80" font-size="10" fill="#991B1B">δ-</text>
            <circle cx="160" cy="135" r="18" fill="#FBBF24"/><text x="160" y="140" text-anchor="middle" font-weight="700" fill="#78350F">H</text>
            <text x="140" y="160" font-size="10" fill="#92400E">δ+</text>
            <circle cx="240" cy="135" r="18" fill="#FBBF24"/><text x="240" y="140" text-anchor="middle" font-weight="700" fill="#78350F">H</text>
            <text x="260" y="160" font-size="10" fill="#92400E">δ+</text>
            <line x1="200" y1="100" x2="160" y2="135" stroke="#1F2937" stroke-width="2"/>
            <line x1="200" y1="100" x2="240" y2="135" stroke="#1F2937" stroke-width="2"/>

            <!-- water 2 -->
            <circle cx="350" cy="180" r="28" fill="#EF4444"/><text x="350" y="185" text-anchor="middle" font-weight="700">O</text>
            <circle cx="310" cy="215" r="18" fill="#FBBF24"/><text x="310" y="220" text-anchor="middle" font-weight="700" fill="#78350F">H</text>
            <circle cx="390" cy="215" r="18" fill="#FBBF24"/><text x="390" y="220" text-anchor="middle" font-weight="700" fill="#78350F">H</text>
            <line x1="350" y1="180" x2="310" y2="215" stroke="#1F2937" stroke-width="2"/>
            <line x1="350" y1="180" x2="390" y2="215" stroke="#1F2937" stroke-width="2"/>

            <!-- water 3 -->
            <circle cx="90" cy="200" r="28" fill="#EF4444"/><text x="90" y="205" text-anchor="middle" font-weight="700">O</text>
            <circle cx="50" cy="235" r="18" fill="#FBBF24"/><text x="50" y="240" text-anchor="middle" font-weight="700" fill="#78350F">H</text>
            <circle cx="130" cy="235" r="18" fill="#FBBF24"/><text x="130" y="240" text-anchor="middle" font-weight="700" fill="#78350F">H</text>
            <line x1="90" y1="200" x2="50" y2="235" stroke="#1F2937" stroke-width="2"/>
            <line x1="90" y1="200" x2="130" y2="235" stroke="#1F2937" stroke-width="2"/>
          </g>
          <!-- H-bonds -->
          <g stroke="#10B981" stroke-width="2.5" stroke-dasharray="5 3" fill="none">
            <line x1="240" y1="135" x2="310" y2="215"/>
            <line x1="160" y1="135" x2="120" y2="185"/>
          </g>
          <text x="270" y="170" font-family="Sarabun" font-size="11" fill="#047857" font-weight="600">H-bond</text>
          <text x="100" y="170" font-family="Sarabun" font-size="11" fill="#047857" font-weight="600">H-bond</text>
          <text x="260" y="265" text-anchor="middle" font-family="Sarabun" font-size="10" fill="#64748B" font-style="italic">น้ำมีขั้ว H+δ และ O-δ จึงเกิด H-bond ระหว่างโมเลกุล</text>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: โมเลกุลน้ำเชื่อมกันด้วยพันธะไฮโดรเจน (H-bond) — ที่มาของคุณสมบัติพิเศษทั้งหมด</div>
      </div>

      <h4>คุณสมบัติพิเศษของน้ำ 5 ข้อ</h4>
      <table class="content-table">
        <tr><th>คุณสมบัติ</th><th>คำอธิบาย</th><th>ผลในชีวิต</th></tr>
        <tr><td>Cohesion / Adhesion</td><td>น้ำเกาะกันเอง + เกาะผิวอื่น</td><td>ขนส่งน้ำขึ้น xylem 100 m</td></tr>
        <tr><td>ความจุความร้อนสูง</td><td>ต้องใช้พลังงานมากในการเปลี่ยน T</td><td>ทะเลเก็บความร้อน · ร่างกายไม่ร้อนง่าย</td></tr>
        <tr><td>ความร้อนแฝงสูง</td><td>ระเหย 1 g ใช้ 540 cal</td><td>เหงื่อระเหยช่วยลด T</td></tr>
        <tr><td>น้ำแข็งลอยน้ำ</td><td>น้ำแข็งมีความหนาแน่นน้อยกว่า</td><td>สัตว์ใต้น้ำในฤดูหนาวรอด</td></tr>
        <tr><td>ตัวทำละลายสากล</td><td>ละลายสารมีขั้ว/ไอออน</td><td>เป็นตัวกลางทุกปฏิกิริยาในเซลล์</td></tr>
      </table>
      <div class="tip-box">💡 <strong>Like dissolves like</strong> — สารมีขั้ว/ไอออนละลายในน้ำ (hydrophilic) สารไม่มีขั้วไม่ละลาย (hydrophobic) เช่น น้ำมัน</div>
    </div>

    <!-- 4. คาร์โบไฮเดรต -->
    <div class="content-section">
      <h3>🍞 คาร์โบไฮเดรต (Carbohydrate)</h3>
      <p>สูตรทั่วไป <strong>(CH₂O)ₙ</strong> ทำหน้าที่ให้พลังงานและสร้างโครงสร้าง — เป็น <strong>"น้ำมันเชื้อเพลิงทันใจ"</strong> ของเซลล์</p>
      <table class="content-table">
        <tr><th>ระดับ</th><th>หน่วย</th><th>ตัวอย่าง</th><th>บทบาท</th></tr>
        <tr><td>Monosaccharide</td><td>1</td><td>กลูโคส (C₆H₁₂O₆) · ฟรุกโตส · กาแล็กโทส</td><td>หน่วยพื้นฐาน ใช้พลังงานทันที</td></tr>
        <tr><td>Disaccharide</td><td>2</td><td>มอลโทส (G+G) · ซูโครส (G+F) · แล็กโทส (G+Gal)</td><td>น้ำตาลจากธรรมชาติ</td></tr>
        <tr><td>Polysaccharide (storage)</td><td>หลายร้อย</td><td>แป้ง (พืช) · ไกลโคเจน (สัตว์)</td><td>สะสมพลังงาน</td></tr>
        <tr><td>Polysaccharide (structure)</td><td>หลายพัน</td><td>เซลลูโลส (พืช) · ไคติน (เห็ด/แมลง)</td><td>โครงสร้าง</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">การสร้างและการสลายพอลิเมอร์</div>
        <strong>Dehydration synthesis:</strong> เชื่อมหน่วย + ปล่อยน้ำ 1 โมเลกุล<br>
        <strong>Hydrolysis:</strong> เติมน้ำ + แยกหน่วย<br>
        ตัวอย่าง: glucose + glucose → maltose + H₂O
      </div>
      <div class="note-box">⚠️ <strong>แป้ง vs เซลลูโลส:</strong> ทั้งคู่เป็น polymer ของกลูโคส แต่ใช้รูป α-glucose (แป้ง) และ β-glucose (เซลลูโลส) → มนุษย์มีเอนไซม์ย่อยแป้งแต่ไม่มีย่อยเซลลูโลส</div>
    </div>

    <!-- 5. ลิพิด -->
    <div class="content-section">
      <h3>🧈 ลิพิด (Lipid)</h3>
      <p>ลิพิดเป็นสารไม่ละลายน้ำ (hydrophobic) — กลุ่มสารหลายชนิดที่ไม่ได้เป็น polymer แท้</p>
      <table class="content-table">
        <tr><th>ชนิด</th><th>โครงสร้าง</th><th>หน้าที่ / ตัวอย่าง</th></tr>
        <tr><td>Triglyceride (ไขมัน)</td><td>glycerol + กรดไขมัน 3 ตัว</td><td>เก็บพลังงาน 9 kcal/g, ฉนวนความร้อน</td></tr>
        <tr><td>Phospholipid</td><td>glycerol + กรดไขมัน 2 + ฟอสเฟต</td><td>สร้างเยื่อหุ้มเซลล์ (bilayer)</td></tr>
        <tr><td>Steroid</td><td>4 วงแหวนคาร์บอน</td><td>คอเลสเตอรอล, ฮอร์โมนเพศ, vitamin D</td></tr>
        <tr><td>Wax</td><td>ester ของกรดไขมันยาว</td><td>เคลือบใบพืช · ขนนกกันน้ำ</td></tr>
      </table>
      <h4>ไขมันอิ่มตัว vs ไม่อิ่มตัว</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>อิ่มตัว (Saturated):</strong> C-C เดี่ยวทั้งหมด → เรียงชิด แข็งที่อุณหภูมิห้อง (เนย, ไขมันสัตว์)</li>
        <li><span class="li-dot sc-dot"></span><strong>ไม่อิ่มตัว (Unsaturated):</strong> มี C=C → โค้งงอ ของเหลว (น้ำมันมะกอก, น้ำมันปลา)</li>
        <li><span class="li-dot sc-dot"></span><strong>Trans fat:</strong> ไขมันที่ถูก hydrogenate — เพิ่มความเสี่ยงโรคหัวใจ</li>
      </ul>
      <div class="tip-box">💡 <strong>Omega-3</strong> (จากปลา) เป็นไขมันไม่อิ่มตัวจำเป็น (essential) ลดอักเสบ และเสริมพัฒนาการสมอง</div>
    </div>

    <!-- 6. โปรตีน + SVG -->
    <div class="content-section">
      <h3>🧬 โปรตีน (Protein)</h3>
      <p>โปรตีนเป็นพอลิเมอร์ของ <strong>กรดอะมิโน 20 ชนิด</strong> เชื่อมต่อด้วย <strong>peptide bond</strong> — ทำหน้าที่หลากหลายที่สุดในสิ่งมีชีวิต</p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">โครงสร้างโปรตีน 4 ระดับ</text>
          <g font-family="Sarabun" font-size="11" fill="#1E293B">
            <!-- Primary -->
            <rect x="20" y="50" width="110" height="170" rx="10" fill="#DBEAFE" stroke="#3B82F6"/>
            <text x="75" y="70" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#1E40AF">1° Primary</text>
            <g transform="translate(25 90)">
              <circle cx="10" cy="20" r="9" fill="#F59E0B"/><circle cx="30" cy="20" r="9" fill="#EF4444"/><circle cx="50" cy="20" r="9" fill="#10B981"/><circle cx="70" cy="20" r="9" fill="#7C3AED"/><circle cx="90" cy="20" r="9" fill="#F43F5E"/>
              <line x1="10" y1="20" x2="90" y2="20" stroke="#1F2937" stroke-width="1.5"/>
            </g>
            <text x="75" y="165" text-anchor="middle" font-size="10" fill="#1E40AF">ลำดับกรดอะมิโน</text>
            <text x="75" y="180" text-anchor="middle" font-size="9" fill="#1E40AF">(peptide bond)</text>

            <!-- Secondary -->
            <rect x="140" y="50" width="110" height="170" rx="10" fill="#FEF3C7" stroke="#F59E0B"/>
            <text x="195" y="70" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#B45309">2° Secondary</text>
            <path d="M 160 110 Q 175 95 190 110 Q 205 125 220 110 Q 235 95 235 110" stroke="#B45309" stroke-width="2.5" fill="none"/>
            <path d="M 160 145 L 235 145" stroke="#B45309" stroke-width="2.5"/>
            <path d="M 160 160 L 235 160" stroke="#B45309" stroke-width="2.5"/>
            <text x="195" y="180" text-anchor="middle" font-size="10" fill="#B45309">α-helix / β-sheet</text>
            <text x="195" y="195" text-anchor="middle" font-size="9" fill="#B45309">(H-bond)</text>

            <!-- Tertiary -->
            <rect x="260" y="50" width="110" height="170" rx="10" fill="#D1FAE5" stroke="#10B981"/>
            <text x="315" y="70" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#065F46">3° Tertiary</text>
            <path d="M 280 95 Q 295 110 285 130 Q 275 150 300 160 Q 325 170 340 145 Q 355 120 340 100" stroke="#065F46" stroke-width="2.5" fill="#A7F3D0" fill-opacity="0.4"/>
            <text x="315" y="190" text-anchor="middle" font-size="10" fill="#065F46">การพับ 3 มิติ</text>
            <text x="315" y="205" text-anchor="middle" font-size="9" fill="#065F46">(disulfide, ionic, H-bond)</text>

            <!-- Quaternary -->
            <rect x="380" y="50" width="120" height="170" rx="10" fill="#EDE9FE" stroke="#7C3AED"/>
            <text x="440" y="70" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#5B21B6">4° Quaternary</text>
            <circle cx="415" cy="120" r="22" fill="#A78BFA"/>
            <circle cx="465" cy="120" r="22" fill="#A78BFA"/>
            <circle cx="415" cy="160" r="22" fill="#A78BFA"/>
            <circle cx="465" cy="160" r="22" fill="#A78BFA"/>
            <text x="440" y="190" text-anchor="middle" font-size="10" fill="#5B21B6">หลายสายมารวมกัน</text>
            <text x="440" y="205" text-anchor="middle" font-size="9" fill="#5B21B6">เช่น Hemoglobin (4)</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: โครงสร้างโปรตีน 4 ระดับ — โครงสร้างกำหนดหน้าที่ (Structure determines function)</div>
      </div>

      <table class="content-table">
        <tr><th>หน้าที่</th><th>ตัวอย่าง</th></tr>
        <tr><td>เอนไซม์</td><td>อะไมเลส · เปปซิน · DNA polymerase</td></tr>
        <tr><td>โครงสร้าง</td><td>คอลลาเจน (กระดูก) · เคราติน (ผม)</td></tr>
        <tr><td>ขนส่ง</td><td>ฮีโมโกลบิน (O₂) · channel proteins</td></tr>
        <tr><td>การเคลื่อนไหว</td><td>actin / myosin (กล้ามเนื้อ)</td></tr>
        <tr><td>ภูมิคุ้มกัน</td><td>แอนติบอดี</td></tr>
        <tr><td>ฮอร์โมน</td><td>อินซูลิน · growth hormone</td></tr>
        <tr><td>สะสม</td><td>เคซีนในน้ำนม · ovalbumin ในไข่</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>Denaturation:</strong> ความร้อน, กรด/เบส, โลหะหนัก ทำให้โปรตีนสูญเสียโครงสร้าง 3 มิติ → หมดหน้าที่ (เช่น ไข่ขาวสุก, นมเปรี้ยว) — บางครั้ง renature กลับได้ บางครั้งไม่ได้</div>
    </div>

    <!-- 7. กรดนิวคลีอิก -->
    <div class="content-section">
      <h3>🧫 กรดนิวคลีอิก (Nucleic Acid)</h3>
      <p>เก็บและส่งต่อข้อมูลพันธุกรรม — ประกอบด้วยหน่วย <strong>นิวคลีโอไทด์</strong> ที่มี 3 ส่วน: น้ำตาล + ฟอสเฟต + เบส</p>
      <table class="content-table">
        <tr><th>ลักษณะ</th><th>DNA</th><th>RNA</th></tr>
        <tr><td>น้ำตาล</td><td>Deoxyribose</td><td>Ribose</td></tr>
        <tr><td>เบส</td><td>A, T, G, C</td><td>A, U, G, C</td></tr>
        <tr><td>โครงสร้าง</td><td>Double helix (2 สาย)</td><td>Single strand</td></tr>
        <tr><td>หน้าที่</td><td>เก็บข้อมูลพันธุกรรม</td><td>ส่งและแปลข้อมูล (mRNA · tRNA · rRNA)</td></tr>
        <tr><td>ความเสถียร</td><td>สูง</td><td>ต่ำกว่า ย่อยสลายเร็ว</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">การจับคู่เบส (Base pairing) ในกฎ Chargaff</div>
        DNA: <strong>A &equiv; T</strong> (2 H-bonds) &middot; <strong>G &equiv; C</strong> (3 H-bonds)<br>
        RNA: A กับ U &middot; G กับ C<br>
        %A = %T &middot; %G = %C → ผลรวม A+G = T+C
      </div>
      <h4>ATP — สกุลเงินพลังงาน</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>โครงสร้าง: Adenine + Ribose + 3 phosphate</li>
        <li><span class="li-dot sc-dot"></span>สลายพันธะ P สุดท้าย: ATP → ADP + Pi + พลังงาน ~7.3 kcal/mol</li>
        <li><span class="li-dot sc-dot"></span>เซลล์ผลิต-ใช้ ATP ~50 kg/วันในมนุษย์ผู้ใหญ่</li>
      </ul>
    </div>

    <!-- 8. เอนไซม์ + SVG -->
    <div class="content-section">
      <h3>🔬 เอนไซม์ — ตัวเร่งชีวภาพ</h3>
      <p>เอนไซม์เป็นโปรตีน (หรือ ribozyme = RNA) ที่ <strong>เร่งปฏิกิริยาเคมี</strong> โดยลด activation energy</p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">การทำงานของเอนไซม์ (Lock &amp; Key + Induced Fit)</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Step 1 Substrates -->
            <text x="80" y="50" text-anchor="middle" font-weight="700">1. Substrates ลอย</text>
            <path d="M 50 70 Q 60 60 75 65 L 90 80 Q 75 95 60 90 Q 45 85 50 70 Z" fill="#FBBF24" stroke="#92400E"/>
            <circle cx="105" cy="100" r="12" fill="#FBBF24" stroke="#92400E"/>
            <!-- enzyme -->
            <path d="M 30 130 L 130 130 L 130 180 Q 100 160 70 180 L 30 180 Z" fill="#10B981" stroke="#065F46" stroke-width="2"/>
            <text x="80" y="200" text-anchor="middle" font-size="9" fill="#065F46">เอนไซม์ (Active site)</text>

            <text x="225" y="118" font-size="20" fill="#065F46">⇒</text>

            <!-- Step 2 Binding -->
            <text x="320" y="50" text-anchor="middle" font-weight="700">2. Enzyme-substrate complex</text>
            <path d="M 270 100 L 370 100 L 380 130 Q 365 140 350 135 Q 335 130 320 135 Q 305 140 290 135 L 270 130 Z" fill="#10B981" stroke="#065F46" stroke-width="2"/>
            <path d="M 290 80 Q 300 70 315 75 L 330 90 Q 315 105 300 100 Q 285 95 290 80 Z" fill="#FBBF24" stroke="#92400E"/>
            <circle cx="345" cy="90" r="12" fill="#FBBF24" stroke="#92400E"/>
            <text x="320" y="160" text-anchor="middle" font-size="9" fill="#065F46">induced fit</text>

            <text x="395" y="118" font-size="20" fill="#065F46">⇒</text>

            <!-- Step 3 Products -->
            <text x="455" y="50" text-anchor="middle" font-weight="700">3. Products + enzyme</text>
            <ellipse cx="430" cy="80" rx="20" ry="14" fill="#F472B6" stroke="#831843"/>
            <text x="430" y="84" text-anchor="middle" font-size="9" font-weight="700" fill="#831843">P</text>
            <ellipse cx="470" cy="80" rx="20" ry="14" fill="#F472B6" stroke="#831843"/>
            <text x="470" y="84" text-anchor="middle" font-size="9" font-weight="700" fill="#831843">P</text>
            <path d="M 410 130 L 510 130 L 510 180 Q 485 160 455 180 L 410 180 Z" fill="#10B981" stroke="#065F46" stroke-width="2"/>
            <text x="460" y="200" text-anchor="middle" font-size="9" fill="#065F46">เอนไซม์กลับเดิม</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: วงจรการทำงานของเอนไซม์ — substrate เข้าที่ active site ทำปฏิกิริยาแล้ว product ออก</div>
      </div>

      <h4>ปัจจัยที่มีผลต่อเอนไซม์</h4>
      <table class="content-table">
        <tr><th>ปัจจัย</th><th>ผล</th><th>ตัวอย่าง</th></tr>
        <tr><td>อุณหภูมิ</td><td>มีจุดเหมาะสม (~37 องศา C ในมนุษย์) สูงเกิน → เสียสภาพ</td><td>ไข้สูงเกิน 42 องศา C อันตราย</td></tr>
        <tr><td>pH</td><td>มีช่วงเหมาะสมจำเพาะ</td><td>เปปซิน pH 2 · ทริปซิน pH 8</td></tr>
        <tr><td>ความเข้มข้น substrate</td><td>เพิ่มขึ้นจนถึง saturation</td><td>Michaelis-Menten curve</td></tr>
        <tr><td>Inhibitor</td><td>ลดอัตรา — competitive / non-competitive</td><td>ยา methotrexate ยับยั้ง DHFR</td></tr>
        <tr><td>Cofactor / Coenzyme</td><td>ช่วย: ไอออนโลหะ หรือวิตามิน B</td><td>Mg²⁺ ใน DNA pol · NAD+ ใน metabolic</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เอนไซม์มี specificity สูง</strong> — 1 เอนไซม์มัก catalyze 1 ปฏิกิริยาเท่านั้น คล้ายกุญแจกับแม่กุญแจ (Lock and Key)</div>
    </div>

    <!-- ============ 32 PRACTICE PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — ธาตุและสัดส่วนในร่างกาย</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — CHNOPS</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เขียนชื่อเต็มของธาตุในตัวย่อ CHNOPS และยกตัวอย่างชีวโมเลกุลที่ใช้แต่ละธาตุเป็นส่วนประกอบ</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>C</strong>arbon, <strong>H</strong>ydrogen, <strong>N</strong>itrogen, <strong>O</strong>xygen, <strong>P</strong>hosphorus, <strong>S</strong>ulfur<br>C/H/O: คาร์โบไฮเดรต ลิพิด · N: โปรตีน กรดนิวคลีอิก · P: DNA ATP กระดูก · S: กรดอะมิโน cysteine, methionine<br>💡 6 ธาตุนี้สร้างชีวโมเลกุล 99% ของร่างกาย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — Trace elements</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ธาตุเหล็ก (Fe) มีในร่างกายเพียง ~0.004% — เพราะอะไรจึงสำคัญและขาดไม่ได้?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Fe เป็นองค์ประกอบกลางของ <strong>ฮีโมโกลบิน</strong> ในเม็ดเลือดแดง ใช้จับ O₂ — ขาด Fe → โลหิตจาง (anemia) เหนื่อยง่าย<br>นอกจากนี้ Fe ยังเป็น cofactor ในเอนไซม์ ETC ของไมโทคอนเดรีย<br>💡 อาหารที่มี Fe สูง: ตับ ผักใบเขียวเข้ม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — Composition</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ในร่างกายมนุษย์มี O มากที่สุด (~65%) — มาจากสารใดเป็นหลัก?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> มาจาก <strong>น้ำ (H₂O)</strong> ซึ่งคิดเป็น ~60-70% ของมวลร่างกาย — น้ำมี O 89% โดยมวล<br>💡 ดังนั้น "เราคือน้ำ" ไม่ใช่คำกล่าวเล่น</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: ขาด iodine</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการขาดธาตุ iodine จึงทำให้เกิดโรคคอพอกและสติปัญญาบกพร่อง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> iodine เป็นองค์ประกอบของ <strong>thyroxine (T4)</strong> ฮอร์โมนต่อมไทรอยด์ที่ควบคุมเมแทบอลิซึมและการเจริญของสมอง<br>ขาด iodine → ต่อมไทรอยด์ผลิตน้อย → ต่อมขยายชดเชย (คอพอก) และในทารกเกิดภาวะ cretinism<br>💡 จึงเสริม iodine ในเกลือทำอาหาร</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — พันธะเคมีและน้ำ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — แยกประเภทพันธะ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุประเภทพันธะ: (ก) Na-Cl ใน NaCl (ข) H-O ในน้ำ (ค) C-C ในเอทาน (ง) H...O ระหว่างโมเลกุลน้ำ 2 ตัว</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (ก) <strong>Ionic</strong> (ก) (ข) <strong>Polar covalent</strong> (ค) <strong>Nonpolar covalent</strong> (ง) <strong>Hydrogen bond</strong> (พันธะอ่อน)<br>💡 ดู electronegativity ต่าง: 0 = non-polar covalent, 0-1.7 = polar, &gt; 1.7 = ionic</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — Cohesion</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมมดน้ำ (water strider) จึงเดินบนผิวน้ำได้?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> โมเลกุลน้ำเกาะกันด้วย H-bond แน่น (cohesion) ที่ผิวน้ำเกิด <strong>"แรงตึงผิว"</strong> (surface tension) สูง รองรับน้ำหนักเบาของมดได้<br>💡 H-bond ของน้ำคือเหตุผลที่หลายปรากฏการณ์ในธรรมชาติเกิดขึ้น</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — น้ำแข็งลอยน้ำ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมน้ำแข็งจึงลอยบนน้ำ และเป็นเหตุผลที่สัตว์ในทะเลสาบรอดในฤดูหนาว?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เมื่อน้ำเย็นลง โมเลกุลจัดเรียงตัวเป็น <strong>โครงสร้างผลึกเปิด</strong> → ความหนาแน่นน้อยกว่าน้ำเหลว → ลอยได้<br>ผลคือชั้นน้ำแข็งบนผิวเป็น <strong>ฉนวน</strong> กันความเย็นไม่ให้น้ำใต้แข็งตัว → สัตว์ใต้น้ำรอด<br>💡 ถ้าน้ำแข็งจมลง ทะเลสาบจะแข็งจากใต้ขึ้นบน → สิ่งมีชีวิตตายหมด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: ตัวทำละลายสากล</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เกลือ NaCl ละลายในน้ำได้แต่ไม่ละลายในน้ำมัน — อธิบายในระดับโมเลกุล</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> น้ำเป็นโมเลกุลมีขั้ว → ปลาย O-δ ดึง Na⁺ ปลาย H+δ ดึง Cl⁻ → แยกไอออนออกจากผลึก สร้าง <strong>"hydration shell"</strong> รอบไอออน<br>น้ำมันไม่มีขั้ว → ไม่สามารถสร้างปฏิสัมพันธ์กับไอออนได้ → ไม่ละลาย<br>💡 "Like dissolves like"</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — คาร์โบไฮเดรต</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — สูตรของกลูโคส</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เขียนสูตรของกลูโคสและบอกว่าเป็น mono/di/poly-saccharide</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> สูตร <strong>C₆H₁₂O₆</strong> เป็น <strong>Monosaccharide</strong> ที่มี 6 คาร์บอน (hexose)<br>💡 มีไอโซเมอร์: glucose, fructose, galactose (สูตรเดียวกัน โครงสร้างต่าง)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — Dehydration synthesis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เขียนสมการรวม glucose 2 ตัวรวมเป็น maltose</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> C₆H₁₂O₆ + C₆H₁₂O₆ → C₁₂H₂₂O₁₁ + H₂O<br>สังเกตว่าผลิตภัณฑ์ขาดน้ำ 1 โมเลกุล เพราะเชื่อมด้วย dehydration synthesis<br>💡 ในการย่อย maltose ใน ลำไส้ จะเกิด <strong>hydrolysis</strong> (เติม H₂O แยกเป็น 2 glucose)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — แป้ง vs เซลลูโลส</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทั้งแป้งและเซลลูโลสเป็น polymer ของกลูโคส แต่ทำไมมนุษย์ย่อยแป้งได้แต่ย่อยเซลลูโลสไม่ได้?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> แป้งใช้ <strong>α-glucose</strong> เชื่อมแบบ α-1,4 → มนุษย์มีอะไมเลสย่อย<br>เซลลูโลสใช้ <strong>β-glucose</strong> เชื่อมแบบ β-1,4 → มนุษย์ไม่มีเอนไซม์ cellulase<br>วัวมีแบคทีเรียในกระเพาะที่ผลิต cellulase ได้<br>💡 ในมนุษย์ เซลลูโลส = ใยอาหาร (fiber) ไม่ให้พลังงานแต่ช่วยขับถ่าย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: ไกลโคเจน</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมตับเก็บไกลโคเจนเพื่อสะสมพลังงานชั่วคราว แทนที่จะเก็บเป็นกลูโคส?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพราะกลูโคสมี <strong>osmotic activity สูง</strong> ถ้าเก็บเป็น monomer หลายล้านตัวจะดึงน้ำเข้าเซลล์มาก เซลล์ตับจะบวมแตก<br>เก็บเป็นพอลิเมอร์ (ไกลโคเจน) ทำให้ <strong>1 โมเลกุล = หลายร้อยกลูโคส</strong> ลด osmotic pressure ลงมาก<br>💡 หลักการเดียวกันกับการเก็บแป้งในพืช</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — ลิพิด</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — Triglyceride</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Triglyceride ประกอบด้วยอะไรบ้าง และให้พลังงานกี่ kcal/g?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Glycerol + กรดไขมัน 3 ตัว</strong> เชื่อมด้วย ester bond<br>ให้พลังงาน <strong>9 kcal/g</strong> (มากกว่าคาร์โบไฮเดรตและโปรตีนที่ให้ 4 kcal/g)<br>💡 จึงเก็บพลังงานในรูปไขมัน ประหยัดน้ำหนัก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — Phospholipid bilayer</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Phospholipid สร้างเยื่อหุ้มเซลล์ในรูปแบบใด และทำไม?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> สร้างเป็น <strong>bilayer</strong> (2 ชั้น) — หัวฟอสเฟต (hydrophilic) หันออกสู่น้ำ ส่วนหางกรดไขมัน (hydrophobic) หันเข้าหากันภายใน<br>เพราะ phospholipid เป็น <strong>amphipathic</strong> (มีทั้งส่วนชอบและไม่ชอบน้ำ)<br>💡 รูปแบบ bilayer คือพื้นฐานของทุกเซลล์</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — อิ่มตัว vs ไม่อิ่มตัว</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมเนยจึงแข็งที่อุณหภูมิห้อง แต่น้ำมันมะกอกเป็นของเหลว?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เนยมี <strong>ไขมันอิ่มตัว</strong> (saturated, ไม่มี C=C) → โซ่ตรง เรียงชิดกันได้ → แข็ง<br>น้ำมันมะกอกมี <strong>ไขมันไม่อิ่มตัว</strong> (มี C=C) → โซ่โค้งงอ ไม่เรียงชิด → เหลว<br>💡 ไขมันอิ่มตัวเสี่ยงคอเลสเตอรอลสูง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: Steroid</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เพราะอะไรคอเลสเตอรอลถึงสำคัญ แม้คนทั่วไปคิดว่า "ไม่ดี"?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> คอเลสเตอรอลเป็นองค์ประกอบของ <strong>เยื่อหุ้มเซลล์</strong> (ควบคุมความลื่นไหล) และเป็นสาร <strong>ตั้งต้นของฮอร์โมนเพศ vitamin D และน้ำดี</strong><br>ปัญหาเกิดเมื่อ <strong>LDL</strong> สูงมาก สะสมในผนังหลอดเลือด → atherosclerosis<br>💡 ร่างกายผลิตคอเลสเตอรอลเองในตับด้วย ไม่ต้องกินก็มี</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — โปรตีนและกรดอะมิโน</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — Peptide bond</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Peptide bond เกิดระหว่างหมู่ใดในกรดอะมิโน 2 ตัว? ปลดปล่อยอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เกิดระหว่างหมู่ <strong>คาร์บอกซิล (-COOH)</strong> ของกรดอะมิโนตัวแรก และหมู่ <strong>amino (-NH₂)</strong> ของกรดอะมิโนตัวถัดไป — ปล่อย <strong>น้ำ 1 โมเลกุล</strong> (dehydration synthesis)<br>💡 ลำดับ peptide bonds = primary structure</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — 4 ระดับโครงสร้าง</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เรียงระดับโครงสร้างโปรตีนและพันธะที่รักษาแต่ละระดับ</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>1° Primary — peptide bonds<br>2° Secondary (α-helix, β-sheet) — H-bonds ระหว่าง backbone<br>3° Tertiary (3D fold) — H-bond, ionic, hydrophobic, disulfide bonds<br>4° Quaternary — 2 sub-units ขึ้นไปยึดกันด้วย bonds เดียวกัน<br>💡 Hemoglobin = 4 subunits (2α + 2β)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — Denaturation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ไข่ขาวสุกแล้วไม่สามารถกลับเป็นไข่ดิบ — อธิบายระดับโมเลกุล</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ความร้อนทำลาย H-bonds และ hydrophobic interactions ที่รักษา 3° structure ของโปรตีน <strong>albumin</strong> ในไข่ขาว → โปรตีนคลายตัวและรวมตัวกันอย่างไม่เป็นระเบียบ (aggregation) → กลับเดิมไม่ได้<br>💡 บางโปรตีนเล็ก ๆ อาจ <strong>renature</strong> ได้ถ้าไม่ aggregate</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: Sickle cell</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> โรค sickle cell anemia เกิดจากการเปลี่ยน amino acid เพียง 1 ตัว — อธิบายว่าเปลี่ยนระดับโครงสร้างใดและส่งผลอย่างไร</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เปลี่ยน amino acid ที่ตำแหน่ง 6 จาก glutamate (มีขั้ว) → valine (ไม่มีขั้ว) ใน β-globin → เปลี่ยน <strong>1° structure</strong><br>ส่งผลให้โปรตีนรวมตัวเป็นเส้นใย เม็ดเลือดแดงเสียรูปเป็นเสี้ยวพระจันทร์ (sickle shape) → ติดในเส้นเลือด ขนส่ง O₂ ได้น้อย<br>💡 แสดงว่า primary structure กำหนดทุกระดับโครงสร้างและหน้าที่</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — กรดนิวคลีอิก</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — Nucleotide</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> นิวคลีโอไทด์ของ DNA ประกอบด้วยอะไร 3 ส่วน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) น้ำตาล <strong>Deoxyribose</strong> (5 คาร์บอน) (2) <strong>ฟอสเฟต</strong> (3) <strong>เบส</strong> (A, T, G, C)<br>💡 RNA = Ribose + ฟอสเฟต + เบส (A, U, G, C)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — Chargaff</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ถ้าใน DNA ของสิ่งมีชีวิตหนึ่งมี A = 30% — หาค่า T, G, C</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้กฎ Chargaff: A = T, G = C, รวม = 100%<br>T = <strong>30%</strong><br>A + T = 60% → G + C = 40% → G = C = <strong>20%</strong> แต่ละตัว<br>💡 ใช้บ่อยในข้อสอบ — จำสูตรว่า A=T, G=C เสมอ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — ATP</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ATP ปลดปล่อยพลังงานเมื่อสลายพันธะใด? และผลิตภัณฑ์คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> สลายพันธะระหว่าง <strong>ฟอสเฟตตัวที่ 3 และตัวที่ 2</strong> (γ phosphate)<br>ATP + H₂O → ADP + Pi + พลังงาน ~7.3 kcal/mol<br>💡 ฟอสเฟตตัวสุดท้ายมีพันธะ "high-energy" ตำแหน่งคึกคัก พร้อมปลด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: ทำไม DNA เสถียรกว่า RNA?</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมเซลล์ใช้ DNA เก็บข้อมูลในระยะยาว แต่ใช้ RNA เป็น "สำเนาชั่วคราว"?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) DNA ใช้ <strong>deoxyribose</strong> ที่ขาด -OH ที่ตำแหน่ง 2' → ทนการ hydrolysis ดีกว่า ribose ของ RNA<br>(2) DNA เป็น <strong>double helix</strong> มีการ proofread → ลดข้อผิดพลาด<br>(3) RNA ตั้งใจให้สลายเร็วเพื่อควบคุมการสร้างโปรตีนได้ทันเวลา<br>💡 เป็นการแบ่งหน้าที่ที่ลงตัว: archive vs working copy</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — เอนไซม์และเมแทบอลิซึม</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — เอนไซม์คืออะไร?</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เอนไซม์ทำงานอย่างไรในเชิงพลังงาน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เอนไซม์ <strong>ลด activation energy (Ea)</strong> ของปฏิกิริยา ทำให้เกิดได้เร็วขึ้นในอุณหภูมิร่างกาย — โดยจับ substrate ที่ active site และ <strong>stabilize transition state</strong><br>💡 เอนไซม์ <strong>ไม่ถูกใช้หมด</strong> หลังปฏิกิริยา ใช้ซ้ำได้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — pH optimum</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เปปซินทำงานที่ pH 2 อะไรเป็นเหตุที่เปปซินไม่ทำงานในลำไส้เล็ก?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เปปซินมี pH optimum ~2 (ในกระเพาะ) — เมื่อเคลื่อนเข้าลำไส้เล็ก (pH ~8) โครงสร้าง 3D เปลี่ยน active site เสีย → หมดฤทธิ์<br>ในลำไส้เล็กใช้ <strong>ทริปซิน</strong> แทน ที่มี pH optimum ~8<br>💡 แต่ละเอนไซม์มีสภาพแวดล้อมที่ตนถนัด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — Inhibitor</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Competitive inhibitor และ Non-competitive inhibitor ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Competitive:</strong> โครงสร้างคล้าย substrate แย่งจับ active site → แก้ได้ด้วยเพิ่ม [substrate]<br><strong>Non-competitive:</strong> จับที่ allosteric site → เปลี่ยนรูป active site → แก้ไม่ได้ด้วยเพิ่ม substrate<br>💡 ยาหลายชนิดทำงานเป็น enzyme inhibitor</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: Cofactor</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการขาดวิตามินจึงทำให้เอนไซม์ไม่ทำงาน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพราะวิตามินหลายชนิดเป็น <strong>coenzyme</strong> ที่จำเป็นสำหรับเอนไซม์ — เช่น Vitamin B1 (thiamine) เป็น coenzyme ใน pyruvate dehydrogenase (การหายใจ)<br>ขาด B1 → เอนไซม์นี้ทำงานไม่ได้ → เกิดโรคเหน็บชา (beriberi)<br>💡 ดังนั้นต้องกินวิตามินครบทุกชนิด</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — การประยุกต์ในชีวิตจริง</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — น้ำเกลือ IV</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมน้ำเกลือ IV ใช้ NaCl 0.9% (isotonic) ไม่ใช้น้ำเปล่า?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> น้ำเปล่า (hypotonic) ทำให้น้ำแพร่เข้าเซลล์เม็ดเลือดแดง → เซลล์บวมแตก (hemolysis)<br>NaCl 0.9% ตรงกับความเข้มข้นของพลาสมา → ไม่มีการแพร่สุทธิ → เซลล์ปลอดภัย<br>💡 ออสโมซิสในการแพทย์เป็นเรื่องสำคัญ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — โยเกิร์ตและชีส</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> โยเกิร์ตและชีสเกิดจากการเปลี่ยนแปลงโปรตีนใดในนม?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> แบคทีเรียในนมผลิต <strong>กรดแลกติก</strong> ลดค่า pH → <strong>เคซีน (casein)</strong> ในนมเสีย charge → denature และตกตะกอนเป็น curd → กลายเป็นโยเกิร์ตและชีส<br>💡 การเสียสภาพโปรตีนใช้ในอาหารหลากหลาย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — ผงซักฟอกย่อยคราบ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ผงซักฟอกบางชนิดมี "enzyme" ในรายการส่วนผสม — เอนไซม์เหล่านี้คืออะไรและทำอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> มัก ได้แก่ <strong>โปรตีเอส (protease)</strong> ย่อยคราบโปรตีน (เลือด ไข่ นม), <strong>ไลเปส (lipase)</strong> ย่อยคราบไขมัน, <strong>อะไมเลส (amylase)</strong> ย่อยคราบแป้ง<br>💡 เอนไซม์ทนน้ำอุ่น 30-40 องศา C แต่ในน้ำร้อนเดือดจะ denature → ซักน้ำอุ่นได้ผลดีกว่า</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: GMO insulin</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการผลิตอินซูลินด้วยแบคทีเรียดัดแปลงพันธุกรรมจึงปลอดภัยกว่าการสกัดจากตับอ่อนหมู?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) ได้ <strong>อินซูลินตรงกับมนุษย์</strong> 100% (ไม่ใช่ของหมูที่ลำดับต่างเล็กน้อย) → ลดอาการแพ้<br>(2) ผลิตปริมาณมากในต้นทุนต่ำ<br>(3) ไม่ต้องฆ่าสัตว์<br>(4) ปราศจาก pathogen ของสัตว์<br>💡 ใช้หลัก central dogma + recombinant DNA — เป็นจุดเริ่มของยุค biotechnology</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>ธาตุหลัก:</strong> CHNOPS (C, H, N, O, P, S)<br>
        <strong>พันธะ:</strong> Covalent &gt; Ionic &gt; H-bond &gt; Van der Waals<br>
        <strong>น้ำ:</strong> มีขั้ว · cohesion · ตัวทำละลายสากล · ลอยน้ำเมื่อแข็ง<br>
        <strong>4 ชีวโมเลกุล:</strong> คาร์โบไฮเดรต · ลิพิด · โปรตีน · กรดนิวคลีอิก<br>
        <strong>โปรตีน 4 ระดับ:</strong> Primary · Secondary · Tertiary · Quaternary<br>
        <strong>เอนไซม์:</strong> ลด Ea · มี active site · denature ที่ T สูง
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>H-bond คือ covalent bond ระหว่าง H กับ O</td><td>H-bond คือ <strong>แรงดึงดูดอ่อน</strong> ระหว่างโมเลกุล — ไม่ใช่พันธะแท้</td></tr>
        <tr><td>คอเลสเตอรอลไม่ดี ต้องตัดออก</td><td>ร่างกายต้องการบ้าง — มีปัญหาเฉพาะตอน LDL สูงเกินไป</td></tr>
        <tr><td>เซลลูโลสไม่มีประโยชน์ในมนุษย์</td><td>เป็น <strong>ใยอาหาร</strong> ช่วยการขับถ่ายและสุขภาพลำไส้</td></tr>
        <tr><td>เอนไซม์ทำงานได้ทุกอุณหภูมิ</td><td>มี optimum — ร้อนเกินจะ denature</td></tr>
        <tr><td>ทุก lipid ละลายน้ำ</td><td>Lipid <strong>ไม่ละลาย</strong>น้ำ (hydrophobic)</td></tr>
        <tr><td>DNA = RNA</td><td>ต่างกัน: น้ำตาล (deoxyribose vs ribose), เบส (T vs U), จำนวนสาย (2 vs 1)</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> ถ้าโจทย์ถามถึง "ชนิดของชีวโมเลกุล" ให้ดู <strong>หน่วยย่อย (monomer)</strong>: น้ำตาล → carb, กรดอะมิโน → โปรตีน, นิวคลีโอไทด์ → กรดนิวคลีอิก, ไม่มี monomer ชัดเจน → ลิพิด</div>
    </div>
  `,
  b1c4: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> ทฤษฎีเซลล์ — รากฐานของชีววิทยา<br>
        <strong>02</strong> เซลล์โพรคาริโอต vs ยูคาริโอต<br>
        <strong>03</strong> เปรียบเทียบเซลล์พืชและเซลล์สัตว์<br>
        <strong>04</strong> นิวเคลียส &amp; ไรโบโซม<br>
        <strong>05</strong> ระบบ Endomembrane: ER · Golgi · Lysosome · Vacuole<br>
        <strong>06</strong> ออร์แกเนลล์พลังงาน: ไมโทคอนเดรีย &amp; คลอโรพลาสต์<br>
        <strong>07</strong> Cytoskeleton · Cell wall · Cell junctions<br>
        <strong>08</strong> ทฤษฎี Endosymbiosis &amp; ข้อจำกัดด้านขนาดของเซลล์
      </div>
      <div class="tip-box">💡 เซลล์คือ <strong>"โรงงานเล็กที่สมบูรณ์ในตัว"</strong> — แต่ละออร์แกเนลล์ทำหน้าที่จำเพาะ ประสานกันเพื่อให้สิ่งมีชีวิตทำงานได้</div>
    </div>

    <!-- 1. ทฤษฎีเซลล์ -->
    <div class="content-section">
      <h3>🧫 ทฤษฎีเซลล์ (Cell Theory)</h3>
      <p>ทฤษฎีเซลล์เป็นทฤษฎีหลักของชีววิทยา — พัฒนาขึ้นในช่วงปี 1830-1860 จากผลงานของนักวิทยาศาสตร์หลายท่าน</p>
      <table class="content-table">
        <tr><th>นักวิทยาศาสตร์</th><th>ปี</th><th>ผลงาน</th></tr>
        <tr><td>Robert Hooke</td><td>1665</td><td>ตั้งชื่อ "cell" จากการดูชิ้นไม้คอร์ก</td></tr>
        <tr><td>Anton van Leeuwenhoek</td><td>1670s</td><td>เห็นจุลินทรีย์มีชีวิตเป็นครั้งแรก</td></tr>
        <tr><td>Matthias Schleiden</td><td>1838</td><td>พืชทุกชนิดประกอบด้วยเซลล์</td></tr>
        <tr><td>Theodor Schwann</td><td>1839</td><td>สัตว์ทุกชนิดประกอบด้วยเซลล์</td></tr>
        <tr><td>Rudolf Virchow</td><td>1855</td><td>เซลล์เกิดจากเซลล์ที่มีอยู่เดิม</td></tr>
        <tr><td>Louis Pasteur</td><td>1862</td><td>หักล้าง spontaneous generation</td></tr>
      </table>
      <h4>3 ข้อหลักของทฤษฎีเซลล์</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.95;">
        <li>สิ่งมีชีวิตทุกชนิดประกอบด้วยเซลล์อย่างน้อย 1 เซลล์</li>
        <li>เซลล์เป็นหน่วยพื้นฐานของโครงสร้างและหน้าที่</li>
        <li>เซลล์เกิดจากการแบ่งของเซลล์ที่มีอยู่เดิม (<em>Omnis cellula e cellula</em>)</li>
      </ol>
      <div class="note-box">⚠️ <strong>ไวรัสไม่จัดเป็นข้อยกเว้น</strong> — เพราะไวรัสไม่ถูกจัดเป็นสิ่งมีชีวิตเต็มตัวอยู่แล้ว ทฤษฎีเซลล์ครอบคลุมเฉพาะ "สิ่งมีชีวิต"</div>
    </div>

    <!-- 2. Prokaryote vs Eukaryote + SVG -->
    <div class="content-section">
      <h3>🔬 เซลล์โพรคาริโอต (Prokaryote) vs ยูคาริโอต (Eukaryote)</h3>
      <table class="content-table">
        <tr><th>ลักษณะ</th><th>โพรคาริโอต</th><th>ยูคาริโอต</th></tr>
        <tr><td>ขนาด</td><td>1-10 µm</td><td>10-100 µm</td></tr>
        <tr><td>นิวเคลียส</td><td>ไม่มีเยื่อหุ้ม (nucleoid)</td><td>มีเยื่อหุ้มชัดเจน</td></tr>
        <tr><td>DNA</td><td>วงกลม ไม่มี histone</td><td>เส้นตรง พันโปรตีน histone</td></tr>
        <tr><td>ออร์แกเนลล์</td><td>ไม่มีเยื่อหุ้ม</td><td>มีหลายชนิด (mitochondria, ER, Golgi...)</td></tr>
        <tr><td>ไรโบโซม</td><td>70S (50S + 30S)</td><td>80S (60S + 40S)</td></tr>
        <tr><td>ผนังเซลล์</td><td>มี (peptidoglycan)</td><td>มีในพืช/ฟังไจ ไม่มีในสัตว์</td></tr>
        <tr><td>ตัวอย่าง</td><td>แบคทีเรีย, อาร์เคีย</td><td>พืช สัตว์ ฟังไจ โพรทิสต์</td></tr>
      </table>
      <div class="tip-box">💡 เซลล์ยูคาริโอตซับซ้อนกว่า → ต้องใช้ <strong>compartmentalization</strong> (แบ่งช่อง) เพื่อให้กระบวนการต่าง ๆ ไม่รบกวนกัน</div>
    </div>

    <!-- 3. Plant vs Animal Cell + SVG -->
    <div class="content-section">
      <h3>🌱 เปรียบเทียบเซลล์พืชและเซลล์สัตว์</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">เซลล์สัตว์ vs เซลล์พืช</text>
          <!-- Animal Cell -->
          <g>
            <text x="135" y="50" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#9F1239">เซลล์สัตว์</text>
            <ellipse cx="135" cy="180" rx="115" ry="100" fill="#FFE4E6" stroke="#9F1239" stroke-width="2"/>
            <!-- Nucleus -->
            <circle cx="135" cy="175" r="32" fill="#A78BFA" stroke="#5B21B6" stroke-width="1.5"/>
            <text x="135" y="180" text-anchor="middle" font-size="10" fill="white" font-weight="700">Nucleus</text>
            <!-- Mitochondria -->
            <ellipse cx="80" cy="130" rx="16" ry="8" fill="#F59E0B" stroke="#B45309"/>
            <ellipse cx="195" cy="125" rx="16" ry="8" fill="#F59E0B" stroke="#B45309"/>
            <!-- ER -->
            <path d="M 50 200 Q 75 215 105 205 Q 125 195 100 215" stroke="#10B981" stroke-width="2" fill="none"/>
            <!-- Golgi -->
            <g stroke="#3B82F6" stroke-width="1.5" fill="#DBEAFE">
              <ellipse cx="170" cy="220" rx="20" ry="4"/>
              <ellipse cx="170" cy="228" rx="18" ry="4"/>
              <ellipse cx="170" cy="236" rx="16" ry="4"/>
            </g>
            <!-- Centrioles -->
            <rect x="95" y="240" width="6" height="14" fill="#EF4444"/>
            <rect x="105" y="240" width="14" height="6" fill="#EF4444"/>
            <!-- Lysosome -->
            <circle cx="80" cy="220" r="6" fill="#F472B6"/>
            <circle cx="200" cy="200" r="5" fill="#F472B6"/>
          </g>

          <!-- Plant Cell -->
          <g>
            <text x="385" y="50" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#065F46">เซลล์พืช</text>
            <!-- Cell wall (outer) -->
            <rect x="280" y="80" width="210" height="200" rx="8" fill="#D1FAE5" stroke="#065F46" stroke-width="3"/>
            <!-- Plasma membrane (inner) -->
            <rect x="287" y="87" width="196" height="186" rx="6" fill="#A7F3D0" stroke="#10B981" stroke-width="1.5"/>
            <!-- Large vacuole -->
            <rect x="305" y="105" width="160" height="100" rx="12" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.5"/>
            <text x="385" y="160" text-anchor="middle" font-size="11" fill="#1E40AF" font-weight="700">Vacuole ใหญ่</text>
            <!-- Nucleus -->
            <circle cx="325" cy="240" r="22" fill="#A78BFA" stroke="#5B21B6" stroke-width="1.5"/>
            <text x="325" y="245" text-anchor="middle" font-size="9" fill="white" font-weight="700">Nucleus</text>
            <!-- Chloroplasts -->
            <ellipse cx="380" cy="245" rx="18" ry="10" fill="#10B981" stroke="#047857"/>
            <ellipse cx="430" cy="240" rx="18" ry="10" fill="#10B981" stroke="#047857"/>
            <text x="405" y="270" text-anchor="middle" font-size="9" fill="#047857" font-weight="700">Chloroplast</text>
            <!-- Mitochondria -->
            <ellipse cx="465" cy="255" rx="12" ry="6" fill="#F59E0B" stroke="#B45309"/>
          </g>

          <!-- Labels -->
          <text x="260" y="300" text-anchor="middle" font-family="Sarabun" font-size="10" fill="#64748B">เซลล์พืชมีเพิ่ม: ผนังเซลล์ · คลอโรพลาสต์ · แวคิวโอลใหญ่ — สัตว์มีเพิ่ม: เซนทริโอล · ไลโซโซมชัดเจน</text>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: เปรียบเทียบโครงสร้างเซลล์สัตว์และเซลล์พืช</div>
      </div>

      <table class="content-table">
        <tr><th>โครงสร้าง</th><th>เซลล์สัตว์</th><th>เซลล์พืช</th></tr>
        <tr><td>ผนังเซลล์ (เซลลูโลส)</td><td>ไม่มี</td><td>มี ✓</td></tr>
        <tr><td>คลอโรพลาสต์</td><td>ไม่มี</td><td>มี ✓</td></tr>
        <tr><td>แวคิวโอลใหญ่กลาง</td><td>ไม่มี (มีเล็ก ๆ หลายอัน)</td><td>มี ✓ (กิน 70-90% ของปริมาตร)</td></tr>
        <tr><td>เซนทริโอล</td><td>มี ✓</td><td>ไม่มี</td></tr>
        <tr><td>ไลโซโซม</td><td>มี ✓ ชัดเจน</td><td>มีหน้าที่คล้าย vacuole</td></tr>
        <tr><td>Plasmodesmata</td><td>ไม่มี (มี gap junction)</td><td>มี ✓</td></tr>
      </table>
    </div>

    <!-- 4. Nucleus + Ribosomes -->
    <div class="content-section">
      <h3>🏛️ นิวเคลียสและไรโบโซม</h3>
      <h4>นิวเคลียส (Nucleus) — ศูนย์ควบคุมเซลล์</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>เยื่อหุ้ม 2 ชั้น (nuclear envelope)</strong> — มีรูเล็ก ๆ (nuclear pores) ให้สาร RNA และโปรตีนผ่าน</li>
        <li><span class="li-dot sc-dot"></span><strong>DNA + histone</strong> เป็น chromatin → ม้วนเป็น chromosome เมื่อแบ่งเซลล์</li>
        <li><span class="li-dot sc-dot"></span><strong>นิวคลีโอลัส (Nucleolus)</strong> ภายในนิวเคลียส — สร้าง rRNA และประกอบ ribosome subunits</li>
      </ul>
      <h4>ไรโบโซม (Ribosome) — โรงงานสร้างโปรตีน</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>ประกอบด้วย rRNA + ribosomal proteins</li>
        <li><span class="li-dot sc-dot"></span>มี 2 subunits: ใหญ่ (large) + เล็ก (small)</li>
        <li><span class="li-dot sc-dot"></span><strong>Free ribosomes</strong> ใน cytoplasm → สร้างโปรตีนใช้ภายในเซลล์</li>
        <li><span class="li-dot sc-dot"></span><strong>Bound ribosomes</strong> ติด rough ER → สร้างโปรตีนส่งออก/membrane proteins</li>
      </ul>
      <div class="note-box">⚠️ <strong>ไรโบโซมไม่มีเยื่อหุ้ม</strong> — จึงไม่ถูกจัดเป็น "ออร์แกเนลล์" ในบางตำรา (technically แต่ในแบบเรียนทั่วไปถือเป็นออร์แกเนลล์)</div>
    </div>

    <!-- 5. Endomembrane + SVG -->
    <div class="content-section">
      <h3>🏭 ระบบ Endomembrane System</h3>
      <p>ระบบเยื่อหุ้มภายในเซลล์ — เชื่อมโยงกันด้วย vesicles ทำงานร่วมกันในการสร้าง บรรจุ และส่งสารออกจากเซลล์</p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">เส้นทาง Endomembrane: นิวเคลียส → ER → Golgi → เซลล์ผิว</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Nucleus -->
            <circle cx="65" cy="120" r="40" fill="#A78BFA" stroke="#5B21B6" stroke-width="2"/>
            <text x="65" y="125" text-anchor="middle" fill="white" font-weight="700">Nucleus</text>
            <text x="65" y="180" text-anchor="middle" font-size="9" fill="#5B21B6">DNA → mRNA</text>
            <!-- arrow -->
            <path d="M 105 120 L 145 120" stroke="#065F46" stroke-width="2" marker-end="url(#arrEM)"/>
            <text x="125" y="110" text-anchor="middle" font-size="9" fill="#065F46">mRNA</text>

            <!-- Rough ER -->
            <path d="M 155 80 Q 170 90 165 105 Q 160 120 170 130 Q 180 140 165 155" stroke="#10B981" stroke-width="3" fill="none"/>
            <!-- Ribosomes (dots) -->
            <circle cx="158" cy="85" r="3" fill="#1F2937"/><circle cx="167" cy="98" r="3" fill="#1F2937"/>
            <circle cx="163" cy="115" r="3" fill="#1F2937"/><circle cx="175" cy="135" r="3" fill="#1F2937"/>
            <text x="165" y="180" text-anchor="middle" font-size="9" fill="#065F46" font-weight="700">Rough ER</text>
            <text x="165" y="192" text-anchor="middle" font-size="8" fill="#047857">สร้างโปรตีน</text>

            <path d="M 195 120 L 245 120" stroke="#065F46" stroke-width="2" marker-end="url(#arrEM)"/>
            <text x="220" y="110" text-anchor="middle" font-size="9" fill="#065F46">vesicle</text>

            <!-- Golgi -->
            <g stroke="#3B82F6" stroke-width="2" fill="#DBEAFE">
              <path d="M 270 90 Q 310 85 320 95 Q 280 100 270 90 Z"/>
              <path d="M 275 105 Q 315 100 320 110 Q 280 115 275 105 Z"/>
              <path d="M 280 120 Q 315 115 320 125 Q 285 130 280 120 Z"/>
              <path d="M 285 135 Q 315 130 320 140 Q 290 145 285 135 Z"/>
            </g>
            <text x="298" y="170" text-anchor="middle" font-size="9" fill="#1E40AF" font-weight="700">Golgi</text>
            <text x="298" y="182" text-anchor="middle" font-size="8" fill="#1E40AF">บรรจุ ส่ง</text>

            <path d="M 335 120 L 375 120" stroke="#065F46" stroke-width="2" marker-end="url(#arrEM)"/>

            <!-- Vesicles -->
            <circle cx="395" cy="100" r="10" fill="#FBBF24" stroke="#B45309"/>
            <circle cx="395" cy="130" r="10" fill="#FBBF24" stroke="#B45309"/>
            <text x="395" y="160" text-anchor="middle" font-size="9" fill="#B45309" font-weight="700">Vesicles</text>

            <path d="M 415 115 L 455 115" stroke="#065F46" stroke-width="2" marker-end="url(#arrEM)"/>

            <!-- Plasma membrane -->
            <line x1="475" y1="60" x2="475" y2="180" stroke="#065F46" stroke-width="3"/>
            <line x1="485" y1="60" x2="485" y2="180" stroke="#065F46" stroke-width="3"/>
            <text x="485" y="200" text-anchor="middle" font-size="9" fill="#065F46" font-weight="700">เยื่อหุ้ม</text>
            <text x="485" y="212" text-anchor="middle" font-size="9" fill="#065F46">เซลล์</text>
          </g>
          <defs>
            <marker id="arrEM" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#065F46"/>
            </marker>
          </defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: เส้นทาง Endomembrane — Nucleus → Rough ER → Golgi → Vesicle → ผิวเซลล์ (exocytosis)</div>
      </div>

      <table class="content-table">
        <tr><th>ออร์แกเนลล์</th><th>ลักษณะ</th><th>หน้าที่</th></tr>
        <tr><td>Rough ER</td><td>มีไรโบโซมเกาะ</td><td>สร้างโปรตีนส่งออก / membrane proteins</td></tr>
        <tr><td>Smooth ER</td><td>ไม่มีไรโบโซม</td><td>สังเคราะห์ลิพิด · ทำลายสารพิษ · เก็บ Ca²⁺</td></tr>
        <tr><td>Golgi apparatus</td><td>ถุงแบนซ้อนกัน (cisternae)</td><td>ดัดแปลง · บรรจุ · ส่งโปรตีนไปที่หมาย</td></tr>
        <tr><td>Lysosome</td><td>ถุงเอนไซม์ย่อย (pH ~5)</td><td>ย่อยสาร/ของเสีย/แบคทีเรียที่กลืน</td></tr>
        <tr><td>Vacuole (พืช)</td><td>ถุงใหญ่กลางเซลล์</td><td>เก็บน้ำ ออกซิเจน สี ต้นเต่ง</td></tr>
        <tr><td>Peroxisome</td><td>ถุงเล็ก มี catalase</td><td>ย่อยกรดไขมัน · กำจัด H₂O₂</td></tr>
      </table>
      <div class="tip-box">💡 <strong>Tay-Sachs disease</strong> เกิดจาก lysosome ขาดเอนไซม์ย่อยลิพิด → สะสมในเซลล์ประสาท → ทำลายสมอง</div>
    </div>

    <!-- 6. Mitochondria + Chloroplast + SVG -->
    <div class="content-section">
      <h3>⚡ ออร์แกเนลล์พลังงาน: ไมโทคอนเดรียและคลอโรพลาสต์</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">โครงสร้างของ Mitochondria และ Chloroplast</text>
          <!-- Mitochondria -->
          <g>
            <text x="130" y="50" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#B45309">Mitochondria</text>
            <ellipse cx="130" cy="140" rx="85" ry="55" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/>
            <ellipse cx="130" cy="140" rx="78" ry="48" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
            <!-- Cristae (inner folds) -->
            <path d="M 70 130 Q 80 110 95 130 Q 105 150 120 130 Q 130 110 145 130 Q 155 150 170 130 Q 180 110 190 130" stroke="#92400E" stroke-width="2" fill="none"/>
            <path d="M 70 155 Q 80 175 95 155 Q 105 135 120 155 Q 130 175 145 155 Q 155 135 170 155 Q 180 175 190 155" stroke="#92400E" stroke-width="2" fill="none"/>
            <text x="130" y="205" text-anchor="middle" font-size="10" fill="#92400E" font-weight="700">โรงไฟฟ้าเซลล์</text>
            <text x="130" y="220" text-anchor="middle" font-size="9" fill="#B45309">สังเคราะห์ ATP (cellular respiration)</text>
            <text x="20" y="105" font-size="9" fill="#92400E">Outer membrane</text>
            <text x="40" y="195" font-size="9" fill="#92400E">Cristae</text>
            <text x="195" y="145" font-size="9" fill="#92400E">Matrix</text>
          </g>

          <!-- Chloroplast -->
          <g>
            <text x="390" y="50" text-anchor="middle" font-family="Prompt" font-weight="700" fill="#065F46">Chloroplast</text>
            <ellipse cx="390" cy="140" rx="85" ry="55" fill="#D1FAE5" stroke="#065F46" stroke-width="2"/>
            <ellipse cx="390" cy="140" rx="78" ry="48" fill="none" stroke="#10B981" stroke-width="1.5"/>
            <!-- Thylakoids stacked -->
            <g fill="#10B981" stroke="#065F46" stroke-width="0.8">
              <ellipse cx="345" cy="125" rx="15" ry="3"/>
              <ellipse cx="345" cy="132" rx="15" ry="3"/>
              <ellipse cx="345" cy="139" rx="15" ry="3"/>
              <ellipse cx="345" cy="146" rx="15" ry="3"/>
              <ellipse cx="345" cy="153" rx="15" ry="3"/>
            </g>
            <g fill="#10B981" stroke="#065F46" stroke-width="0.8">
              <ellipse cx="395" cy="135" rx="13" ry="3"/>
              <ellipse cx="395" cy="142" rx="13" ry="3"/>
              <ellipse cx="395" cy="149" rx="13" ry="3"/>
            </g>
            <g fill="#10B981" stroke="#065F46" stroke-width="0.8">
              <ellipse cx="435" cy="125" rx="14" ry="3"/>
              <ellipse cx="435" cy="132" rx="14" ry="3"/>
              <ellipse cx="435" cy="139" rx="14" ry="3"/>
              <ellipse cx="435" cy="146" rx="14" ry="3"/>
            </g>
            <text x="390" y="205" text-anchor="middle" font-size="10" fill="#065F46" font-weight="700">สังเคราะห์ด้วยแสง</text>
            <text x="390" y="220" text-anchor="middle" font-size="9" fill="#047857">แสง + CO₂ + H₂O → glucose + O₂</text>
            <text x="290" y="105" font-size="9" fill="#065F46">Outer/Inner membrane</text>
            <text x="345" y="172" font-size="9" fill="#065F46">Granum</text>
            <text x="430" y="172" font-size="9" fill="#065F46">Stroma</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: Mitochondria และ Chloroplast — 2 ออร์แกเนลล์ที่มีเยื่อ 2 ชั้นและ DNA ของตัวเอง</div>
      </div>

      <table class="content-table">
        <tr><th>ลักษณะ</th><th>Mitochondria</th><th>Chloroplast</th></tr>
        <tr><td>พบใน</td><td>เซลล์ยูคาริโอตเกือบทุกชนิด</td><td>เซลล์พืช, สาหร่าย, ไซยาโนแบคทีเรีย</td></tr>
        <tr><td>เยื่อหุ้ม</td><td>2 ชั้น (มี cristae)</td><td>2 ชั้น + thylakoid</td></tr>
        <tr><td>DNA</td><td>วงกลม คล้าย bacteria</td><td>วงกลม คล้าย bacteria</td></tr>
        <tr><td>ไรโบโซม</td><td>70S</td><td>70S</td></tr>
        <tr><td>กระบวนการ</td><td>การหายใจระดับเซลล์ (ATP)</td><td>การสังเคราะห์ด้วยแสง</td></tr>
        <tr><td>สมการสุทธิ</td><td>C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP</td><td>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</td></tr>
      </table>
    </div>

    <!-- 7. Cytoskeleton -->
    <div class="content-section">
      <h3>🕸️ Cytoskeleton · Cell Wall · Cell Junctions</h3>
      <h4>Cytoskeleton — โครงร่างเซลล์ 3 ชนิด</h4>
      <table class="content-table">
        <tr><th>ชนิด</th><th>หน่วยย่อย</th><th>เส้นผ่านศูนย์กลาง</th><th>หน้าที่</th></tr>
        <tr><td>Microfilament</td><td>Actin</td><td>~7 nm (เล็กสุด)</td><td>เปลี่ยนรูปเซลล์, การหดตัวกล้ามเนื้อ, cytokinesis</td></tr>
        <tr><td>Intermediate filament</td><td>Keratin, lamins</td><td>~10 nm</td><td>โครงสร้างทนแรง, ยึด organelles</td></tr>
        <tr><td>Microtubule</td><td>Tubulin</td><td>~25 nm (ใหญ่สุด)</td><td>Spindle ตอนแบ่งเซลล์, cilia, flagella</td></tr>
      </table>
      <h4>Cell Wall และ Cell Junctions</h4>
      <table class="content-table">
        <tr><th>โครงสร้าง</th><th>พบใน</th><th>หน้าที่</th></tr>
        <tr><td>Cell wall (เซลลูโลส)</td><td>พืช</td><td>คงรูป ป้องกัน</td></tr>
        <tr><td>Cell wall (ไคติน)</td><td>ฟังไจ</td><td>คงรูป</td></tr>
        <tr><td>Plasmodesmata</td><td>พืช</td><td>ช่องเชื่อมเซลล์พืช → ส่งสารระหว่างกัน</td></tr>
        <tr><td>Tight junction</td><td>สัตว์ (epithelium)</td><td>ปิดสนิทเหมือนซิป</td></tr>
        <tr><td>Desmosome</td><td>สัตว์</td><td>ยึดเซลล์ด้วยตะปู (rivet) ที่กล้ามเนื้อ ผิวหนัง</td></tr>
        <tr><td>Gap junction</td><td>สัตว์</td><td>ส่งสัญญาณ/สารเล็กผ่านได้ คล้าย plasmodesmata</td></tr>
      </table>
      <div class="tip-box">💡 Cilia และ flagella ทำจาก microtubules ในแบบ "9+2" — มี 9 doublets รอบและ 2 อันกลาง ใช้ในการเคลื่อนที่ของอสุจิ paramecium ฯลฯ</div>
    </div>

    <!-- 8. Endosymbiosis -->
    <div class="content-section">
      <h3>🦠 ทฤษฎี Endosymbiosis และข้อจำกัดด้านขนาด</h3>
      <h4>Endosymbiotic Theory (Lynn Margulis, 1967)</h4>
      <p>ไมโทคอนเดรียและคลอโรพลาสต์เคยเป็น <strong>แบคทีเรียอิสระ</strong> ที่ถูกเซลล์ยูคาริโอตยุคแรกกลืนเข้าไป แล้วเกิดความสัมพันธ์แบบ <strong>symbiosis</strong></p>
      <ul>
        <li><span class="li-dot sc-dot"></span>มี <strong>เยื่อ 2 ชั้น</strong> — ชั้นใน = bacteria เดิม, ชั้นนอก = ส่วนที่ถูกห่อ</li>
        <li><span class="li-dot sc-dot"></span>มี <strong>DNA วงกลม</strong> ของตัวเอง</li>
        <li><span class="li-dot sc-dot"></span>มี <strong>ไรโบโซม 70S</strong> เหมือนแบคทีเรีย (ไม่ใช่ 80S ของยูคาริโอต)</li>
        <li><span class="li-dot sc-dot"></span><strong>แบ่งตัวเอง</strong> โดย binary fission คล้ายแบคทีเรีย</li>
      </ul>
      <h4>ข้อจำกัดด้านขนาดของเซลล์ (Surface-to-Volume ratio)</h4>
      <div class="formula-box">
        <div class="formula-label">เซลล์ทรงกลม รัศมี r</div>
        Surface = 4πr²<br>
        Volume = (4/3)πr³<br>
        S/V = 3/r → เมื่อ r เพิ่ม S/V ลด<br>
        เซลล์ใหญ่ → S/V ต่ำ → แลกเปลี่ยนสารยาก
      </div>
      <ul>
        <li><span class="li-dot sc-dot"></span>เซลล์มีขนาดจำกัด (ส่วนใหญ่ 10-30 µm) เพราะต้องแลกเปลี่ยนสารผ่านผิว</li>
        <li><span class="li-dot sc-dot"></span>ทางออก: เซลล์ใหญ่มีผิวพับ (microvilli) หรือยาว (เซลล์ประสาท) เพื่อเพิ่มผิว</li>
      </ul>
      <div class="note-box">⚠️ เซลล์ไข่นกกระจอกเทศ (~15 cm) แต่ส่วนใหญ่เป็น yolk — protoplasm จริง ๆ ยังเล็ก</div>
    </div>

    <!-- ============ 32 PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — ทฤษฎีเซลล์และประวัติ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — Cell Theory</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุ 3 ข้อหลักของทฤษฎีเซลล์</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(1) สิ่งมีชีวิตทุกชนิดประกอบด้วยเซลล์<br>(2) เซลล์เป็นหน่วยพื้นฐานของโครงสร้างและหน้าที่<br>(3) เซลล์เกิดจากเซลล์ที่มีอยู่เดิม (Omnis cellula e cellula)<br>💡 จำว่า "ประกอบ → พื้นฐาน → สืบทอด"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — Hooke vs Leeuwenhoek</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Robert Hooke และ Anton van Leeuwenhoek เห็นอะไรต่างกันในกล้องจุลทรรศน์?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>Hooke (1665) เห็น <strong>ชิ้นไม้คอร์ก</strong> (เซลล์ตายแล้ว) — เป็นแค่ผนังเซลล์<br>Leeuwenhoek (1670s) เห็น <strong>จุลินทรีย์มีชีวิต</strong> ในน้ำบ่อน้ำลายและน้ำเปลือกฟัน<br>💡 Hooke ตั้งชื่อ "cell" จากความคล้ายห้องของพระ (cella)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — Virchow contribution</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ก่อนปี 1855 เชื่อกันอย่างไรเกี่ยวกับการกำเนิดของเซลล์ และ Virchow เปลี่ยนความเชื่ออย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ก่อนหน้านี้เชื่อ <strong>spontaneous generation</strong> (เซลล์/สิ่งมีชีวิตเกิดเองจากของไม่มีชีวิต เช่น หนูเกิดจากผ้าเก่า)<br>Virchow เสนอ <strong>"Omnis cellula e cellula"</strong> — เซลล์ทุกตัวต้องมาจากเซลล์ก่อนหน้า → ปฏิเสธ spontaneous generation<br>💡 Pasteur ทดลองยืนยันในปี 1862</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: ไวรัส</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ไวรัสไม่มีโครงสร้างเซลล์ — เป็นข้อยกเว้นของทฤษฎีเซลล์หรือไม่?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ไม่ใช่ข้อยกเว้น เพราะไวรัส <strong>ไม่ถูกจัดเป็นสิ่งมีชีวิต</strong> เต็มตัว ทฤษฎีเซลล์ใช้เฉพาะกับ "สิ่งมีชีวิต"<br>💡 ไวรัสคือ "acellular agent" อยู่ระหว่างมีชีวิตและไม่มีชีวิต</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — Prokaryote vs Eukaryote</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — แยกประเภท</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุประเภทเซลล์: (ก) E. coli (ข) ยีสต์ (ค) มนุษย์ (ง) สาหร่ายสไปโรไจรา</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (ก) <strong>Prokaryote</strong> (Bacteria)<br>(ข), (ค), (ง) <strong>Eukaryote</strong><br>💡 ดูที่นิวเคลียส — มี = euk, ไม่มี = prok</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — Ribosome size</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมยาปฏิชีวนะบางชนิดสามารถยับยั้งไรโบโซมของแบคทีเรียโดยไม่ทำลายเซลล์มนุษย์?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ไรโบโซมแบคทีเรียเป็น <strong>70S</strong> ส่วนของมนุษย์เป็น <strong>80S</strong> — โครงสร้างต่างกันพอที่ยา (เช่น tetracycline, streptomycin) จะจับเฉพาะ 70S<br>💡 จึงเป็น "selective toxicity" — ทำลายเชื้อโดยไม่ทำลายคน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — Compartmentalization</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมเซลล์ยูคาริโอตจึงต้องมีออร์แกเนลล์ที่มีเยื่อหุ้ม?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพื่อ <strong>compartmentalization</strong> — แยกกระบวนการที่ต้องสภาพแวดล้อมต่างกันออกจากกัน เช่น lysosome ต้อง pH ~5, mitochondria ต้องมี proton gradient<br>เซลล์ใหญ่และซับซ้อนต้องมีระบบนี้<br>💡 prokaryote เซลล์เล็กพอ ไม่ต้องการ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: DNA structure</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม DNA ของยูคาริโอตจึงต้องพันรอบ histone protein แต่ DNA แบคทีเรียไม่ต้อง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> DNA ของมนุษย์ยาว ~2 m ต่อเซลล์ → ต้องอัดให้พอดีนิวเคลียส (~10 µm) → ต้องการ histone ช่วย pack เป็น nucleosome → chromatin → chromosome<br>DNA แบคทีเรียเล็กกว่ามาก (~1 mm) ไม่ต้องการการอัดแน่นซับซ้อน<br>💡 อัดแน่นได้ ~10,000 เท่า</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — เซลล์พืช vs เซลล์สัตว์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — ความต่างหลัก</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุ 3 โครงสร้างที่พบในเซลล์พืชแต่ไม่พบในสัตว์</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>ผนังเซลล์</strong> (เซลลูโลส) (2) <strong>คลอโรพลาสต์</strong> (3) <strong>แวคิวโอลขนาดใหญ่</strong><br>เพิ่มเติม: plasmodesmata<br>💡 ทั้ง 3 ช่วยพืชอยู่นิ่ง สังเคราะห์แสง และคงรูป</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — เซนทริโอล</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เซลล์พืชไม่มีเซนทริโอล แล้วทำอย่างไรในการแบ่งเซลล์?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เซลล์พืชสร้าง <strong>spindle</strong> โดยไม่ใช้เซนทริโอล — ใช้ MTOC (microtubule organizing center) อื่นที่ไม่มีรูป centriole ชัด<br>💡 แสดงว่า centriole ไม่จำเป็นสำหรับการแบ่งเซลล์</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — Vacuole</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Vacuole ของพืชทำหน้าที่อะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>เก็บน้ำ</strong> รักษาความเต่ง (turgor) → ค้ำต้นพืช<br>(2) เก็บ <strong>สารอาหารและรงควัตถุสี</strong> (anthocyanin ในกลีบดอก)<br>(3) เก็บ <strong>ของเสีย/สารพิษ</strong> แยกจากไซโทพลาซึม<br>(4) ย่อยสารคล้าย lysosome<br>💡 จึงเป็น "ออร์แกเนลล์อเนกประสงค์"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: เซลล์เห็ด</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เซลล์เห็ดมีผนังเซลล์เหมือนพืชหรือไม่?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> มีผนังเซลล์ แต่ทำจาก <strong>ไคติน (chitin)</strong> ไม่ใช่เซลลูโลส<br>ไคตินก็พบในเปลือกแมลงและกุ้ง — แสดงว่าเห็ดใกล้สัตว์มากกว่าพืชในแง่วิวัฒนาการ<br>💡 ฟังไจไม่มีคลอโรพลาสต์ → ต้องเป็น heterotroph</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — Nucleus และ Ribosome</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — Nuclear pore</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Nuclear pores ทำหน้าที่อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เป็นรูในเยื่อหุ้มนิวเคลียส ให้สาร <strong>เลือก</strong> ผ่านได้ — เช่น mRNA และ tRNA ออก, โปรตีนและ ribosome subunits เข้า<br>มี nucleoporins ทำหน้าที่ gate keeper<br>💡 ขนาดเล็กผ่านได้, ขนาดใหญ่ต้องมีสัญญาณ (NLS)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — Nucleolus</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Nucleolus ทำอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> สร้าง <strong>rRNA</strong> และประกอบ <strong>ribosome subunits</strong> (large + small) แล้วส่งออกไป cytoplasm ผ่าน nuclear pores<br>💡 มักเป็นจุดเข้มภายในนิวเคลียส</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — Free vs Bound ribosome</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> โปรตีนที่สร้างจาก free ribosome และ bound ribosome ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Free ribosome:</strong> สร้างโปรตีนใช้ภายใน cytosol เช่น เอนไซม์ของ glycolysis<br><strong>Bound ribosome (บน rough ER):</strong> สร้างโปรตีนส่งออกหรือฝังในเยื่อ เช่น insulin, membrane receptors<br>💡 ทั้งคู่เหมือนกันโครงสร้าง — ขึ้นกับ signal sequence ของโปรตีน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: เซลล์ตับอ่อน</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เซลล์ตับอ่อนผลิตอินซูลินส่งออก — คาดว่ามีไรโบโซมประเภทใดเด่นและออร์แกเนลล์ใดมาก?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> มี <strong>Bound ribosome (บน rough ER) มาก</strong> เพราะอินซูลินเป็นโปรตีนส่งออก<br>มี <strong>Golgi ขนาดใหญ่</strong> ดัดแปลงและบรรจุอินซูลิน<br>มี <strong>Secretory vesicles</strong> จำนวนมาก<br>💡 โครงสร้างเซลล์สะท้อนหน้าที่เสมอ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — Endomembrane System</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — Rough ER vs Smooth ER</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Rough ER และ Smooth ER ทำหน้าที่ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Rough ER:</strong> สร้างโปรตีน (มีไรโบโซมเกาะ)<br><strong>Smooth ER:</strong> สร้างลิพิด, ทำลายสารพิษ (โดยเฉพาะในตับ), เก็บ Ca²⁺ (ในกล้ามเนื้อ)<br>💡 เซลล์ตับมี smooth ER มากเพื่อ detoxify</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — Golgi function</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Golgi apparatus ทำหน้าที่อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>"โรงแพ็คและส่งสาร"</strong> — รับโปรตีนจาก ER, ดัดแปลง (เช่น เติม carbohydrate), บรรจุใน vesicles, ติด address labels, ส่งไปจุดหมายในเซลล์หรือออกนอก<br>💡 ด้าน cis รับเข้า, ด้าน trans ส่งออก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — Lysosome disease</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Tay-Sachs disease เป็นโรคที่เกิดจาก lysosome ผิดปกติ — อธิบาย</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ผู้ป่วย Tay-Sachs ขาดเอนไซม์ <strong>hexosaminidase A</strong> ใน lysosome → ลิพิด ganglioside GM2 ไม่ถูกย่อย → สะสมในเซลล์ประสาท → เซลล์ตาย → พัฒนาการสมองหยุด<br>💡 lysosomal storage disease กลุ่มหนึ่ง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: เซลล์เม็ดเลือดขาว</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เม็ดเลือดขาวมี lysosome มาก เพราะอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพราะ <strong>phagocytosis</strong> — เม็ดเลือดขาวกินแบคทีเรียและของเสีย → lysosome ย่อยสลายภายใน → ป้องกันการติดเชื้อ<br>💡 lysosomes ของเม็ดเลือดขาวมีเอนไซม์ครบและทนต่อ pH ต่ำ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — Mitochondria และ Chloroplast</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — Cristae</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม inner membrane ของไมโทคอนเดรียจึงพับเป็น cristae?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพื่อ <strong>เพิ่มพื้นที่ผิว</strong> สำหรับ ETC และ ATP synthase — ยิ่งผิวมากยิ่งสร้าง ATP ได้มาก<br>เซลล์ที่ใช้พลังงานมาก (กล้ามเนื้อหัวใจ, เซลล์ตับ) มี cristae หนาแน่น<br>💡 หลักการเดียวกับ villi ในลำไส้และ alveoli ในปอด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — Thylakoid vs Stroma</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Light reaction และ Calvin cycle เกิดที่ส่วนใดของคลอโรพลาสต์?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Light reaction</strong>: บน <strong>thylakoid membrane</strong> (granum) — มี chlorophyll และ ETC ของแสง<br><strong>Calvin cycle</strong>: ใน <strong>stroma</strong> — ตรึง CO₂ เป็น G3P/glucose<br>💡 light = thylakoid, dark = stroma</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — Cyanide</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม cyanide จึงเป็นพิษร้ายแรงมาก?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Cyanide จับกับ <strong>cytochrome c oxidase</strong> ใน ETC ของไมโทคอนเดรีย → หยุดการสังเคราะห์ ATP → เซลล์ตายเพราะขาดพลังงาน<br>💡 ผู้ป่วยจะหายใจปกติแต่เซลล์ใช้ O₂ ไม่ได้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: เซลล์กล้ามเนื้อ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมเซลล์กล้ามเนื้อหัวใจมีไมโทคอนเดรียมากผิดปกติ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> หัวใจเต้นต่อเนื่อง ~100,000 ครั้ง/วัน → ต้องการ ATP มหาศาล → เซลล์หัวใจมีไมโทคอนเดรียถึง <strong>30-40%</strong> ของปริมาตรเซลล์ (ปกติ 5-10%)<br>💡 ดังนั้นเซลล์หัวใจไวต่อขาดเลือด/ออกซิเจน — ทำให้เกิด heart attack</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — Cytoskeleton และ Junctions</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — 3 ชนิด Cytoskeleton</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุชนิด cytoskeleton ที่ใหญ่ที่สุดและบทบาทหลัก</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Microtubule</strong> (~25 nm, ใหญ่สุด) — สร้างจาก tubulin<br>หน้าที่: spindle ในการแบ่งเซลล์, cilia/flagella, "ทางรถไฟ" สำหรับ vesicles เคลื่อนที่ในเซลล์<br>💡 ยา <strong>colchicine</strong> และ <strong>taxol</strong> โจมตี microtubule → ใช้รักษามะเร็ง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — Plasmodesmata</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Plasmodesmata คืออะไรและมีในเซลล์ใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ช่อง <strong>เชื่อมระหว่างเซลล์พืช</strong> ผ่านผนังเซลล์ — ให้น้ำ ไอออน โปรตีนเล็ก ๆ ผ่านระหว่างเซลล์ได้<br>เทียบเท่ากับ <strong>gap junction</strong> ในเซลล์สัตว์<br>💡 ช่วยสื่อสารและประสานงานในเนื้อเยื่อพืช</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — Tight junction</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เซลล์ลำไส้ต้องการ tight junction ทำไม?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพื่อ <strong>ป้องกันสารและจุลินทรีย์</strong> ในลำไส้ <strong>ไม่ให้รั่ว</strong> ระหว่างเซลล์เข้าสู่ใต้เยื่อบุ → สารที่ดูดซึมต้องผ่าน <strong>ภายใน</strong> เซลล์ (controlled)<br>💡 leaky gut = tight junction รั่ว</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: Flagella</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Flagella ของแบคทีเรียและของอสุจิมนุษย์ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>แบคทีเรีย:</strong> ทำจากโปรตีน <strong>flagellin</strong>, หมุนเหมือนใบพัด, ขับเคลื่อนด้วย proton gradient<br><strong>อสุจิ (eukaryote):</strong> ทำจาก <strong>microtubule แบบ 9+2</strong>, ขยับเป็นคลื่น (whip-like), ขับเคลื่อนด้วย ATP<br>💡 ใช้ชื่อเดียวกันแต่โครงสร้างคนละแบบ (analogous structure)</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — Endosymbiosis และการประยุกต์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — หลักฐาน Endosymbiosis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุหลักฐาน 3 ข้อที่สนับสนุนทฤษฎี endosymbiosis</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) มี <strong>เยื่อ 2 ชั้น</strong> (ชั้นในจากแบคทีเรีย, ชั้นนอกจากเซลล์เจ้าบ้าน)<br>(2) มี <strong>DNA วงกลม</strong> และ <strong>ribosome 70S</strong> เหมือนแบคทีเรีย<br>(3) แบ่งตัวเองโดย <strong>binary fission</strong><br>💡 Lynn Margulis เสนอในปี 1967 — ปัจจุบันยอมรับอย่างกว้างขวาง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — Surface-to-Volume</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมเซลล์ไม่ใหญ่ขึ้นเรื่อย ๆ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพราะปริมาตรเพิ่มเร็วกว่าผิว (V = r³, S = r²) → <strong>S/V ลดลง</strong> เมื่อเซลล์ใหญ่ขึ้น<br>ผลคือเซลล์ใหญ่มีผิวไม่พอแลกเปลี่ยนสาร → ขาด O₂, สารอาหาร, สะสมของเสีย<br>💡 ทางแก้: หลายเซลล์เล็ก ๆ ดีกว่า 1 เซลล์ใหญ่</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — เซลล์มะเร็ง</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เซลล์มะเร็งต่างจากเซลล์ปกติอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>แบ่งตัวต่อเนื่อง</strong> ไม่ตอบสนองสัญญาณหยุด<br>(2) <strong>ไม่ตายตามกำหนด</strong> (escape apoptosis)<br>(3) <strong>เคลื่อนย้าย</strong> ไปอวัยวะอื่นได้ (metastasis)<br>(4) สร้างหลอดเลือดของตัวเอง (angiogenesis)<br>💡 มะเร็งคือ "เซลล์ที่หยุดควบคุมตัวเองไม่ได้"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: Stem cell</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Stem cell ต่างจากเซลล์ปกติอย่างไร และมีศักยภาพในการแพทย์อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Stem cell มี 2 คุณสมบัติเด่น:<br>(1) <strong>Self-renewal</strong> — แบ่งตัวสร้าง stem cell ลูก<br>(2) <strong>Differentiation</strong> — เปลี่ยนเป็นเซลล์ชนิดต่าง ๆ<br>การประยุกต์: ปลูกถ่ายไขกระดูก, สร้างอวัยวะใหม่, รักษา Parkinson, เบาหวาน, ไขสันหลังบาดเจ็บ<br>💡 ปัจจุบันใช้ iPSC (induced pluripotent) ลดปัญหาจริยธรรมจาก embryonic stem cell</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>ทฤษฎีเซลล์ 3 ข้อ:</strong> ประกอบด้วยเซลล์ · เป็นหน่วยพื้นฐาน · เซลล์เกิดจากเซลล์<br>
        <strong>Prokaryote vs Eukaryote:</strong> ดูที่นิวเคลียส + ขนาด + ออร์แกเนลล์<br>
        <strong>เซลล์พืช +:</strong> ผนังเซลล์ · คลอโรพลาสต์ · vacuole ใหญ่<br>
        <strong>เซลล์สัตว์ +:</strong> เซนทริโอล · ไลโซโซมชัด<br>
        <strong>Endomembrane:</strong> Nucleus → ER → Golgi → Vesicle → ผิวเซลล์<br>
        <strong>Energy organelles:</strong> Mitochondria (ATP) · Chloroplast (สังเคราะห์แสง)<br>
        <strong>Cytoskeleton:</strong> Microfilament &lt; Intermediate &lt; Microtubule<br>
        <strong>Endosymbiosis:</strong> เยื่อ 2 ชั้น + DNA + ribosome 70S
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>ไรโบโซมคือออร์แกเนลล์ที่มีเยื่อหุ้ม</td><td>ไรโบโซม <strong>ไม่มีเยื่อหุ้ม</strong></td></tr>
        <tr><td>เซลล์พืชไม่มี mitochondria</td><td>มี! พืชต้องหายใจระดับเซลล์เหมือนสัตว์</td></tr>
        <tr><td>Nucleus = Nucleolus</td><td>Nucleolus = จุดสร้าง rRNA <strong>ภายใน</strong> nucleus</td></tr>
        <tr><td>Mitochondria = Chloroplast</td><td>คนละออร์แกเนลล์ — ทำหน้าที่ตรงข้ามกัน</td></tr>
        <tr><td>ทุกเซลล์มีคลอโรพลาสต์</td><td>เฉพาะพืช สาหร่าย และไซยาโนแบคทีเรีย</td></tr>
        <tr><td>เซลล์ใหญ่ดีกว่าเซลล์เล็ก</td><td>S/V ratio ทำให้เซลล์ใหญ่แลกเปลี่ยนสารช้า</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> เมื่อโจทย์ถามให้ระบุออร์แกเนลล์ ให้ดูที่ <strong>หน้าที่</strong> ของเซลล์ — เซลล์สร้างโปรตีนส่งออก = rough ER + Golgi เยอะ; เซลล์ใช้พลังงานสูง = mitochondria เยอะ</div>
    </div>
  `
});
