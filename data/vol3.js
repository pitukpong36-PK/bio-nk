/* เนื้อหาชีววิทยา 3 — สร้างจาก split.py · แก้เนื้อหาที่ไฟล์นี้ได้เลย แล้วรัน _build/build.py */
window.BIO = window.BIO || {}; BIO.CH = BIO.CH || {};
Object.assign(BIO.CH, {
  b3c9: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> Mendel และต้นถั่วลันเตา<br>
        <strong>02</strong> กฎเมนเดล 2 ข้อ (Segregation &amp; Independent Assortment)<br>
        <strong>03</strong> คำศัพท์: gene · allele · genotype · phenotype<br>
        <strong>04</strong> Monohybrid Cross &amp; Punnett Square (3:1)<br>
        <strong>05</strong> Dihybrid Cross (9:3:3:1) &amp; Test Cross<br>
        <strong>06</strong> Non-Mendelian: Incomplete · Codominance · Multiple alleles · Polygenic<br>
        <strong>07</strong> หมู่เลือด ABO &amp; Sex-linked traits<br>
        <strong>08</strong> Pedigree analysis &amp; Probability
      </div>
      <div class="tip-box">💡 พันธุศาสตร์เริ่มจาก <strong>Gregor Mendel</strong> ที่ทดลองต้นถั่วลันเตา 1856-1863 — แม้ตอนนั้นยังไม่รู้ว่ามี DNA แต่กฎที่เขาค้นพบยังถูกต้องในปัจจุบัน</div>
    </div>

    <!-- 1. Mendel + SVG -->
    <div class="content-section">
      <h3>🌱 Gregor Mendel — บิดาแห่งพันธุศาสตร์</h3>
      <p><strong>Mendel</strong> (1822-1884) บาทหลวงและนักวิทยาศาสตร์ชาวออสเตรีย ใช้ <strong>ต้นถั่วลันเตา (Pisum sativum)</strong> ในการทดลอง — เลือกเพราะ:</p>
      <ul>
        <li><span class="li-dot sc-dot"></span>มีลักษณะตรงข้ามชัดเจน 7 คู่ (สีเมล็ด, รูปเมล็ด, สีฝัก, ความสูงต้น, ฯลฯ)</li>
        <li><span class="li-dot sc-dot"></span>ปลูกง่าย วงจรชีวิตสั้น ผลิตลูกได้หลายร้อย</li>
        <li><span class="li-dot sc-dot"></span>ผสมตัวเอง (self-pollinating) ตามปกติ → ควบคุมการผสมข้ามได้</li>
      </ul>
      <table class="content-table">
        <tr><th>ลักษณะ</th><th>เด่น</th><th>ด้อย</th></tr>
        <tr><td>รูปเมล็ด</td><td>เรียบ (R)</td><td>ย่น (r)</td></tr>
        <tr><td>สีเมล็ด</td><td>เหลือง (Y)</td><td>เขียว (y)</td></tr>
        <tr><td>สีฝัก</td><td>เขียว (G)</td><td>เหลือง (g)</td></tr>
        <tr><td>รูปฝัก</td><td>กลม (V)</td><td>ย่น (v)</td></tr>
        <tr><td>สีดอก</td><td>ม่วง (P)</td><td>ขาว (p)</td></tr>
        <tr><td>ตำแหน่งดอก</td><td>ข้าง (A)</td><td>ปลาย (a)</td></tr>
        <tr><td>ความสูงต้น</td><td>สูง (T)</td><td>เตี้ย (t)</td></tr>
      </table>
      <div class="tip-box">💡 งานของ Mendel ถูก "ลืม" 35 ปี จนปี 1900 ที่ Hugo de Vries, Carl Correns, Erich von Tschermak ค้นพบใหม่อิสระต่อกัน</div>
    </div>

    <!-- 2. กฎ Mendel -->
    <div class="content-section">
      <h3>📜 กฎของเมนเดล 2 ข้อ</h3>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.95;">
        <li><strong>กฎการแยก (Law of Segregation):</strong><br>
          ในการสร้างเซลล์สืบพันธุ์ (Meiosis) คู่ของ <strong>allele แต่ละคู่</strong> จะแยกออกจากกัน → แต่ละ gamete ได้ <strong>1 allele</strong> เท่านั้น<br>
          <em>(เกิดที่ Anaphase I — เมื่อ homologous chromosomes แยก)</em>
        </li>
        <li><strong>กฎการรวมกลุ่มอย่างอิสระ (Independent Assortment):</strong><br>
          Allele ของยีนต่างคู่กันแยกอย่างอิสระต่อกัน → การได้ allele ของยีนหนึ่ง ไม่ส่งผลกับการได้ allele ของอีกยีน<br>
          <em>(เกิดที่ Metaphase I — homologous pairs เรียงสุ่ม)</em>
        </li>
      </ol>
      <div class="note-box">⚠️ <strong>ข้อยกเว้นของกฎที่ 2:</strong> ยีนที่อยู่บน chromosome เดียวกันใกล้กัน (linked genes) จะถ่ายทอดด้วยกัน — ยกเว้นกรณีเกิด <strong>crossing over</strong></div>
    </div>

    <!-- 3. Vocabulary -->
    <div class="content-section">
      <h3>📚 คำศัพท์สำคัญ</h3>
      <div class="vocab-grid">
        <div class="vocab-pill"><b>Gene</b>ยีน — หน่วยพันธุกรรม</div>
        <div class="vocab-pill"><b>Allele</b>แอลลีล — รูปแบบของยีน เช่น A, a</div>
        <div class="vocab-pill"><b>Homozygous (พันธุ์แท้)</b>มี allele เหมือนกัน (AA, aa)</div>
        <div class="vocab-pill"><b>Heterozygous (พันธุ์ทาง)</b>มี allele ต่าง (Aa)</div>
        <div class="vocab-pill"><b>Genotype</b>ลักษณะทางพันธุกรรม (AA, Aa)</div>
        <div class="vocab-pill"><b>Phenotype</b>ลักษณะที่ปรากฏ (สูง เตี้ย)</div>
        <div class="vocab-pill"><b>Dominant</b>เด่น — แสดงออกใน heterozygous</div>
        <div class="vocab-pill"><b>Recessive</b>ด้อย — แสดงเฉพาะ homozygous</div>
        <div class="vocab-pill"><b>P generation</b>รุ่นพ่อแม่ดั้งเดิม</div>
        <div class="vocab-pill"><b>F1, F2</b>รุ่นลูก รุ่นหลาน</div>
        <div class="vocab-pill"><b>Locus</b>ตำแหน่งของ gene บน chromosome</div>
        <div class="vocab-pill"><b>Trait</b>ลักษณะ เช่น สีตา ความสูง</div>
      </div>
    </div>

    <!-- 4. Monohybrid + SVG -->
    <div class="content-section">
      <h3>🧪 Monohybrid Cross &amp; Punnett Square</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Punnett Square: Aa × Aa</text>
          <g font-family="Sarabun" font-size="11" fill="#1E293B">
            <!-- Parent labels -->
            <text x="200" y="60" text-anchor="middle" font-weight="700" fill="#9F1239">A</text>
            <text x="320" y="60" text-anchor="middle" font-weight="700" fill="#9F1239">a</text>
            <text x="120" y="115" text-anchor="middle" font-weight="700" fill="#1E40AF">A</text>
            <text x="120" y="195" text-anchor="middle" font-weight="700" fill="#1E40AF">a</text>

            <!-- 2x2 grid -->
            <rect x="155" y="80" width="120" height="70" fill="#D1FAE5" stroke="#065F46" stroke-width="2"/>
            <text x="215" y="115" text-anchor="middle" font-family="Prompt" font-weight="700" font-size="18" fill="#065F46">AA</text>
            <text x="215" y="135" text-anchor="middle" font-size="9" fill="#065F46">homozygous เด่น</text>

            <rect x="275" y="80" width="120" height="70" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/>
            <text x="335" y="115" text-anchor="middle" font-family="Prompt" font-weight="700" font-size="18" fill="#B45309">Aa</text>
            <text x="335" y="135" text-anchor="middle" font-size="9" fill="#B45309">heterozygous</text>

            <rect x="155" y="150" width="120" height="70" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/>
            <text x="215" y="185" text-anchor="middle" font-family="Prompt" font-weight="700" font-size="18" fill="#B45309">Aa</text>
            <text x="215" y="205" text-anchor="middle" font-size="9" fill="#B45309">heterozygous</text>

            <rect x="275" y="150" width="120" height="70" fill="#FFE4E6" stroke="#9F1239" stroke-width="2"/>
            <text x="335" y="185" text-anchor="middle" font-family="Prompt" font-weight="700" font-size="18" fill="#9F1239">aa</text>
            <text x="335" y="205" text-anchor="middle" font-size="9" fill="#9F1239">homozygous ด้อย</text>

            <text x="275" y="250" text-anchor="middle" font-weight="700" font-size="12" fill="#065F46">Phenotype 3 : 1 (เด่น : ด้อย)</text>
            <text x="275" y="265" text-anchor="middle" font-size="10" fill="#065F46">Genotype 1 AA : 2 Aa : 1 aa</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: Punnett Square ของ Monohybrid Cross — Aa × Aa</div>
      </div>

      <h4>ขั้นตอน Punnett Square</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li>ระบุ genotype พ่อแม่</li>
        <li>หา gametes ที่เป็นไปได้ (Aa → A หรือ a)</li>
        <li>วาดตาราง 2×2 ใส่ gametes ที่หัวแถวและหัวคอลัมน์</li>
        <li>กรอกผลรวมในแต่ละช่อง</li>
        <li>นับอัตราส่วน Genotype และ Phenotype</li>
      </ol>
      <div class="formula-box">
        <div class="formula-label">สัดส่วนสำคัญที่ต้องจำ</div>
        <strong>AA × aa</strong> → ลูก F1 = 100% Aa (heterozygous, phenotype เด่นทั้งหมด)<br>
        <strong>Aa × Aa</strong> → ลูก F2 = 1 AA : 2 Aa : 1 aa = <strong>3 : 1</strong> (phenotype)<br>
        <strong>Aa × aa (Test cross)</strong> → 1 Aa : 1 aa = 1 : 1
      </div>
    </div>

    <!-- 5. Dihybrid + SVG -->
    <div class="content-section">
      <h3>🔀 Dihybrid Cross — ผสม 2 ลักษณะ</h3>
      <p>ผสม AaBb × AaBb (เช่น เมล็ดเหลือง-เรียบ × เมล็ดเหลือง-เรียบ ที่ heterozygous ทั้งคู่)</p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Dihybrid Cross: AaBb × AaBb (9:3:3:1)</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- 4 gametes header (top) -->
            <text x="160" y="60" text-anchor="middle" font-weight="700">AB</text>
            <text x="225" y="60" text-anchor="middle" font-weight="700">Ab</text>
            <text x="290" y="60" text-anchor="middle" font-weight="700">aB</text>
            <text x="355" y="60" text-anchor="middle" font-weight="700">ab</text>
            <!-- gametes left -->
            <text x="100" y="105" text-anchor="middle" font-weight="700">AB</text>
            <text x="100" y="155" text-anchor="middle" font-weight="700">Ab</text>
            <text x="100" y="205" text-anchor="middle" font-weight="700">aB</text>
            <text x="100" y="255" text-anchor="middle" font-weight="700">ab</text>

            <!-- grid -->
            <g stroke="#065F46" stroke-width="1.5" fill="#D1FAE5">
              <rect x="125" y="75" width="65" height="40"/>
              <rect x="125" y="125" width="65" height="40"/>
              <rect x="190" y="75" width="65" height="40"/>
              <rect x="190" y="125" width="65" height="40" fill="#FEF3C7"/>
            </g>
            <g stroke="#065F46" stroke-width="1.5" fill="#D1FAE5">
              <rect x="255" y="75" width="65" height="40"/>
              <rect x="125" y="175" width="65" height="40"/>
            </g>
            <g stroke="#065F46" stroke-width="1.5" fill="#FEF3C7">
              <rect x="320" y="75" width="65" height="40"/>
              <rect x="320" y="125" width="65" height="40" fill="#FFE4E6"/>
              <rect x="320" y="175" width="65" height="40" fill="#DBEAFE"/>
              <rect x="190" y="175" width="65" height="40"/>
              <rect x="255" y="125" width="65" height="40"/>
              <rect x="255" y="175" width="65" height="40"/>
            </g>
            <g stroke="#065F46" stroke-width="1.5" fill="#DBEAFE">
              <rect x="125" y="225" width="65" height="40"/>
              <rect x="190" y="225" width="65" height="40" fill="#FEF3C7"/>
              <rect x="255" y="225" width="65" height="40"/>
              <rect x="320" y="225" width="65" height="40" fill="#FFE4E6"/>
            </g>

            <!-- labels in cells (just font letters) -->
            <text x="157" y="100" text-anchor="middle" font-weight="700" font-size="9">AABB</text>
            <text x="222" y="100" text-anchor="middle" font-weight="700" font-size="9">AABb</text>
            <text x="287" y="100" text-anchor="middle" font-weight="700" font-size="9">AaBB</text>
            <text x="352" y="100" text-anchor="middle" font-weight="700" font-size="9">AaBb</text>

            <text x="157" y="150" text-anchor="middle" font-weight="700" font-size="9">AABb</text>
            <text x="222" y="150" text-anchor="middle" font-weight="700" font-size="9">AAbb</text>
            <text x="287" y="150" text-anchor="middle" font-weight="700" font-size="9">AaBb</text>
            <text x="352" y="150" text-anchor="middle" font-weight="700" font-size="9">Aabb</text>

            <text x="157" y="200" text-anchor="middle" font-weight="700" font-size="9">AaBB</text>
            <text x="222" y="200" text-anchor="middle" font-weight="700" font-size="9">AaBb</text>
            <text x="287" y="200" text-anchor="middle" font-weight="700" font-size="9">aaBB</text>
            <text x="352" y="200" text-anchor="middle" font-weight="700" font-size="9">aaBb</text>

            <text x="157" y="250" text-anchor="middle" font-weight="700" font-size="9">AaBb</text>
            <text x="222" y="250" text-anchor="middle" font-weight="700" font-size="9">Aabb</text>
            <text x="287" y="250" text-anchor="middle" font-weight="700" font-size="9">aaBb</text>
            <text x="352" y="250" text-anchor="middle" font-weight="700" font-size="9">aabb</text>

            <!-- legend -->
            <rect x="420" y="80" width="15" height="15" fill="#D1FAE5" stroke="#065F46"/>
            <text x="440" y="92" font-size="10">9 A_B_</text>
            <rect x="420" y="105" width="15" height="15" fill="#FEF3C7" stroke="#065F46"/>
            <text x="440" y="117" font-size="10">3 A_bb</text>
            <rect x="420" y="130" width="15" height="15" fill="#DBEAFE" stroke="#065F46"/>
            <text x="440" y="142" font-size="10">3 aaB_</text>
            <rect x="420" y="155" width="15" height="15" fill="#FFE4E6" stroke="#065F46"/>
            <text x="440" y="167" font-size="10">1 aabb</text>

            <text x="260" y="295" text-anchor="middle" font-weight="700" font-size="12" fill="#065F46">Phenotype 9 : 3 : 3 : 1</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: Dihybrid Cross AaBb × AaBb — 16 ช่อง อัตราส่วน 9:3:3:1</div>
      </div>

      <div class="formula-box">
        <div class="formula-label">9 : 3 : 3 : 1</div>
        9 เด่นทั้ง 2 ลักษณะ (A_B_)<br>
        3 เด่น A ด้อย B (A_bb)<br>
        3 ด้อย A เด่น B (aaB_)<br>
        1 ด้อยทั้ง 2 ลักษณะ (aabb)
      </div>
      <h4>Test Cross — หา genotype ที่ไม่รู้</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>ผสมกับ <strong>homozygous recessive</strong> (aa) เสมอ</li>
        <li><span class="li-dot sc-dot"></span>ถ้าลูกออก phenotype เด่นทั้งหมด → พ่อแม่ที่ไม่รู้เป็น <strong>AA</strong> (homozygous)</li>
        <li><span class="li-dot sc-dot"></span>ถ้าลูกออก 1:1 เด่น:ด้อย → พ่อแม่เป็น <strong>Aa</strong> (heterozygous)</li>
      </ul>
    </div>

    <!-- 6. Non-Mendelian + SVG -->
    <div class="content-section">
      <h3>🎨 พันธุศาสตร์ที่ไม่ตามกฎเมนเดล (Non-Mendelian)</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Incomplete Dominance vs Codominance</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Incomplete -->
            <text x="130" y="50" text-anchor="middle" font-weight="700" fill="#9F1239">Incomplete Dominance</text>
            <text x="130" y="65" text-anchor="middle" font-size="9" fill="#9F1239">ดอกซ่อนกลิ่น (snapdragon)</text>
            <circle cx="70" cy="100" r="22" fill="#F43F5E"/>
            <text x="70" y="135" text-anchor="middle" font-weight="700" fill="#9F1239">RR (แดง)</text>
            <text x="105" y="105" font-size="14">×</text>
            <circle cx="140" cy="100" r="22" fill="white" stroke="#9F1239" stroke-width="2"/>
            <text x="140" y="135" text-anchor="middle" font-weight="700" fill="#9F1239">rr (ขาว)</text>
            <text x="105" y="160" text-anchor="middle">↓</text>
            <circle cx="110" cy="190" r="22" fill="#F472B6"/>
            <text x="155" y="195" font-weight="700" fill="#9F1239">Rr (ชมพู)</text>

            <!-- Codominance -->
            <text x="380" y="50" text-anchor="middle" font-weight="700" fill="#1E40AF">Codominance</text>
            <text x="380" y="65" text-anchor="middle" font-size="9" fill="#1E40AF">หมู่เลือด AB</text>
            <circle cx="320" cy="100" r="22" fill="#3B82F6"/>
            <text x="320" y="105" text-anchor="middle" font-weight="700" font-size="9" fill="white">A</text>
            <text x="320" y="135" text-anchor="middle" font-weight="700" fill="#1E40AF">I^A I^A</text>
            <text x="355" y="105" font-size="14">×</text>
            <circle cx="390" cy="100" r="22" fill="#F59E0B"/>
            <text x="390" y="105" text-anchor="middle" font-weight="700" font-size="9" fill="white">B</text>
            <text x="390" y="135" text-anchor="middle" font-weight="700" fill="#1E40AF">I^B I^B</text>
            <text x="355" y="160" text-anchor="middle">↓</text>
            <g>
              <circle cx="360" cy="190" r="22" fill="#3B82F6"/>
              <circle cx="360" cy="190" r="22" fill="#F59E0B" clip-path="inset(0 0 0 50%)"/>
            </g>
            <text x="400" y="195" font-weight="700" fill="#1E40AF">AB (แสดงทั้ง 2)</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: Incomplete Dominance (สีผสม) vs Codominance (แสดงทั้ง 2)</div>
      </div>

      <table class="content-table">
        <tr><th>รูปแบบ</th><th>คำอธิบาย</th><th>ตัวอย่าง</th><th>อัตราส่วน F2</th></tr>
        <tr><td>Incomplete dominance</td><td>Heterozygote อยู่ "กึ่งกลาง"</td><td>ดอกซ่อนกลิ่น RR แดง × rr ขาว → Rr ชมพู</td><td>1 : 2 : 1</td></tr>
        <tr><td>Codominance</td><td>แสดง <strong>ทั้ง 2 phenotypes</strong>พร้อมกัน</td><td>หมู่เลือด AB · ขนวัวลาย</td><td>1 : 2 : 1</td></tr>
        <tr><td>Multiple alleles</td><td>มี allele &gt; 2 ในประชากร</td><td>หมู่เลือด ABO (I^A, I^B, i)</td><td>—</td></tr>
        <tr><td>Polygenic</td><td>หลายยีนควบคุม 1 ลักษณะ</td><td>สีผิว · ความสูง · น้ำหนัก</td><td>กราฟระฆัง</td></tr>
        <tr><td>Pleiotropy</td><td>1 ยีน → หลายลักษณะ</td><td>Sickle cell — ส่งผลหลายอวัยวะ</td><td>—</td></tr>
        <tr><td>Epistasis</td><td>1 ยีน "บัง" ยีนอื่น</td><td>สีขนของหนู (BB, Bb, bb × CC, Cc, cc)</td><td>9 : 3 : 4 หรืออื่น ๆ</td></tr>
      </table>
    </div>

    <!-- 7. Sex-linked + ABO -->
    <div class="content-section">
      <h3>🧑 หมู่เลือด ABO &amp; Sex-Linked Traits</h3>
      <h4>หมู่เลือด ABO (Multiple alleles + Codominance)</h4>
      <table class="content-table">
        <tr><th>Genotype</th><th>Phenotype</th><th>Antigen บน RBC</th><th>Antibody ในพลาสมา</th></tr>
        <tr><td>I^A I^A · I^A i</td><td>A</td><td>A</td><td>anti-B</td></tr>
        <tr><td>I^B I^B · I^B i</td><td>B</td><td>B</td><td>anti-A</td></tr>
        <tr><td>I^A I^B</td><td>AB</td><td>A และ B</td><td>—</td></tr>
        <tr><td>ii</td><td>O</td><td>—</td><td>anti-A, anti-B</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">การให้/รับเลือด</div>
        <strong>O = universal donor</strong> (ให้ได้ทุกหมู่ ไม่มี antigen)<br>
        <strong>AB = universal recipient</strong> (รับได้ทุกหมู่ ไม่มี antibody)<br>
        ในการปฏิบัติจริง ให้เลือดหมู่เดียวกันเสมอเมื่อทำได้
      </div>
      <h4>Sex-Linked Traits (ยีนบน X chromosome)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>เพราะเพศชายมี X เพียง 1 ตัว → ถ้ามี allele ด้อยก็แสดงออกเลย (hemizygous)</li>
        <li><span class="li-dot sc-dot"></span>เพศหญิงต้องเป็น homozygous (X^a X^a) ถึงจะแสดง</li>
        <li><span class="li-dot sc-dot"></span>โรค X-linked recessive พบในผู้ชายมากกว่าผู้หญิงมาก</li>
      </ul>
      <table class="content-table">
        <tr><th>โรค</th><th>คำอธิบาย</th></tr>
        <tr><td>ตาบอดสี (Color blindness)</td><td>X-linked recessive — ชาย 8% เป็น, หญิง &lt;1%</td></tr>
        <tr><td>Hemophilia</td><td>เลือดไม่แข็งตัว — Royal disease ใน Queen Victoria</td></tr>
        <tr><td>Duchenne muscular dystrophy</td><td>กล้ามเนื้ออ่อนแรง — เริ่มเด็กชาย</td></tr>
        <tr><td>G6PD deficiency</td><td>RBC แตกง่าย — พบในไทยบ่อย โดยเฉพาะชาย</td></tr>
      </table>
      <div class="note-box">⚠️ หญิงสามารถเป็น <strong>carrier (X^A X^a)</strong> ของโรค X-linked recessive — ไม่แสดงอาการ แต่ส่งต่อให้ลูกชายได้ 50%</div>
    </div>

    <!-- 8. Pedigree -->
    <div class="content-section">
      <h3>🧬 Pedigree Analysis &amp; Probability</h3>
      <h4>สัญลักษณ์ในแผนภาพ pedigree</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>⬜ = ผู้ชายปกติ &middot; ⬛ = ผู้ชายเป็นโรค</li>
        <li><span class="li-dot sc-dot"></span>⚪ = ผู้หญิงปกติ &middot; ⚫ = ผู้หญิงเป็นโรค</li>
        <li><span class="li-dot sc-dot"></span>⊘ ครึ่งดำ = carrier (heterozygous)</li>
        <li><span class="li-dot sc-dot"></span>เส้นแนวนอน = แต่งงาน &middot; เส้นแนวตั้ง = ลูก</li>
      </ul>
      <h4>เกณฑ์การวิเคราะห์</h4>
      <table class="content-table">
        <tr><th>รูปแบบ</th><th>ลักษณะ</th></tr>
        <tr><td>Autosomal dominant</td><td>พบทุกรุ่น พ่อ/แม่ที่เป็นโรค → ลูกครึ่งหนึ่งเป็น</td></tr>
        <tr><td>Autosomal recessive</td><td>ข้ามรุ่นได้ พ่อแม่ปกติแต่ลูกเป็น → ทั้งคู่เป็น carrier</td></tr>
        <tr><td>X-linked recessive</td><td>ชายเป็นมากกว่าหญิง ส่งจากพ่อ → ลูกหญิง (carrier) → หลานชาย (เป็น)</td></tr>
        <tr><td>X-linked dominant</td><td>พ่อที่เป็น → ลูกหญิงทุกคนเป็น แต่ลูกชายไม่เป็น</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">Probability — ใช้กฎคูณและกฎบวก</div>
        <strong>กฎคูณ (AND):</strong> เหตุการณ์เกิดพร้อมกัน → P(A และ B) = P(A) × P(B)<br>
        <strong>กฎบวก (OR):</strong> เหตุการณ์ใดเหตุการณ์หนึ่ง → P(A หรือ B) = P(A) + P(B)<br>
        ตัวอย่าง: P(Aa × Aa → aa) = 1/4 · P(2 ลูกเป็น aa) = 1/4 × 1/4 = 1/16
      </div>
    </div>

    <!-- ============ 32 PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — กฎเมนเดล</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — Law of Segregation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Law of Segregation ของ Mendel เกิดที่ระยะใดของ Meiosis?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Anaphase I</strong> — Homologous chromosomes (พร้อม alleles คนละ allele) แยกออกจากกันไปอยู่คนละขั้ว → แต่ละ gamete ได้ 1 allele<br>💡 Mendel ไม่รู้เรื่องนี้ตอนนั้น — กฎเขาตั้งจากผลการทดลอง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — Mendel เลือกถั่วลันเตา</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เพราะอะไร Mendel จึงเลือกต้นถั่วลันเตา?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) มีลักษณะตรงข้ามชัดเจน 7 คู่<br>(2) ปลูกง่าย วงจรชีวิตสั้น<br>(3) ผลิตลูกได้มาก<br>(4) <strong>ผสมตัวเอง (self-pollinating)</strong> → ควบคุมการผสมข้ามได้<br>💡 ถ้าเลือกพันธุ์อื่น เช่น เถาวัลย์ที่ผสมข้าม อาจวิเคราะห์ยากกว่ามาก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — F1 vs F2</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> P (TT × tt) → F1 = ? → F1 × F1 → F2 = ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>F1: 100% Tt — สูงทั้งหมด (เด่นบัง)<br>F2 (Tt × Tt): 1 TT : 2 Tt : 1 tt = <strong>Phenotype 3 สูง : 1 เตี้ย</strong><br>💡 จุดสำคัญ — F1 ไม่ใช่ "กึ่งกลาง" แต่เป็นเด่นเหมือนพ่อแม่ตัวที่เด่น</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: Linkage</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม Independent Assortment ไม่เป็นจริงสำหรับยีนที่อยู่บน chromosome เดียวกัน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ยีนบน chromosome เดียวกันถ่ายทอดพร้อมกัน (linked) เพราะแยกเป็นชุดเดียวกัน<br>เฉพาะกรณีเกิด <strong>crossing over</strong> ระหว่าง 2 loci ก็จะเปลี่ยน combinations<br>ยิ่งระยะห่างไกล crossing over เกิดได้บ่อยขึ้น → ใช้คำนวณ <strong>genetic distance</strong> (1 cM = 1% recombination)<br>💡 ใช้ในการสร้าง genetic map</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — Punnett Square</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — Aa × Aa</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ผสม Aa × Aa — บอก genotype และ phenotype ของลูก</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>Genotype: 1 AA : 2 Aa : 1 aa<br>Phenotype: <strong>3 เด่น : 1 ด้อย</strong> (ถ้าเป็น dominant ปกติ)<br>💡 ในการสอบ มักถามอัตราส่วน F2</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — TT × tt</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Homozygous เด่น × Homozygous ด้อย → ลูกเป็นอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ลูก F1 = <strong>100% Tt</strong> (heterozygous, แสดงลักษณะเด่น)<br>💡 ทุกคนเหมือนกัน — เรียก F1 generation</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — Test Cross</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> นักศึกษามีต้นถั่ว phenotype สูง แต่ไม่รู้ว่าเป็น TT หรือ Tt — ทำ test cross อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ผสมกับ <strong>tt (เตี้ย)</strong> เสมอ:<br>- ถ้าลูกสูงทุกต้น → ต้นปริศนาเป็น <strong>TT</strong><br>- ถ้าลูกออก 1:1 (สูง:เตี้ย) → ต้นปริศนาเป็น <strong>Tt</strong><br>💡 ใช้ recessive เป็น "ตัวเปิดเผย" เพราะ allele ด้อยไม่บังในลูก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: Probability</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Aa × Aa → ความน่าจะเป็นที่ลูก 3 คนจะเป็น aa ทั้งหมดคือเท่าใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> P(aa ในลูกแต่ละคน) = 1/4<br>P(ทั้ง 3 คนเป็น aa) = 1/4 × 1/4 × 1/4 = <strong>1/64</strong><br>💡 ใช้กฎคูณ — แต่ละ event เป็นอิสระต่อกัน</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — Dihybrid Cross</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — 9:3:3:1</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ผสม AaBb × AaBb — ความน่าจะเป็นของ phenotype A_B_ (เด่นทั้ง 2)?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>9/16</strong><br>P(A_) × P(B_) = 3/4 × 3/4 = 9/16<br>💡 ใช้กฎคูณกับ Independent Assortment</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — เมล็ดถั่วของ Mendel</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Mendel ผสม YYRR (เหลือง-เรียบ) × yyrr (เขียว-ย่น) → F2 มีอัตราส่วนเท่าใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> F1 = YyRr (เหลือง-เรียบทั้งหมด)<br>F1 × F1 → F2 = <strong>9 เหลือง-เรียบ : 3 เหลือง-ย่น : 3 เขียว-เรียบ : 1 เขียว-ย่น</strong><br>💡 Mendel ทดลองและพบอัตรานี้จริงในต้นถั่วหลายร้อยต้น</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — Dihybrid Test Cross</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> AaBb × aabb → อัตราส่วนของลูก?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>1 : 1 : 1 : 1</strong> (AaBb : Aabb : aaBb : aabb)<br>ทั้ง 4 phenotype มีโอกาสเท่ากัน 1/4<br>💡 Test cross dihybrid ก็ยังให้ผลที่อ่านง่าย</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: 3 ยีน</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ผสม AaBbCc × AaBbCc → ความน่าจะเป็นที่ลูกเป็น aabbcc?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้กฎคูณ:<br>P(aa) × P(bb) × P(cc) = 1/4 × 1/4 × 1/4 = <strong>1/64</strong><br>💡 จำนวน combinations = 4³ = 64 (ในตาราง Punnett)</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — Non-Mendelian</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — Incomplete Dominance</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ดอกซ่อนกลิ่น RR แดง × rr ขาว → F1 = ? F2 = ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> F1 = <strong>Rr (ชมพู)</strong> ทั้งหมด (incomplete dominance)<br>F1 × F1 → F2 = <strong>1 แดง : 2 ชมพู : 1 ขาว</strong><br>💡 Phenotype = Genotype 1:2:1 (ต่างจาก 3:1 ของเมนเดล)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — Codominance</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Codominance ต่างจาก Incomplete dominance อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Incomplete:</strong> Heterozygote อยู่ "กลาง" (เช่น ชมพู = แดง+ขาวผสม)<br><strong>Codominance:</strong> Heterozygote แสดง <strong>ทั้ง 2 phenotypes พร้อมกัน</strong> (เช่น หมู่เลือด AB มีทั้ง A และ B antigens)<br>💡 ขนวัว Roan = ขนแดงและขาวสลับกัน (codominance)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — Polygenic</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมสีผิวมนุษย์มีหลายระดับไม่ใช่แค่ดำ-ขาว?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> สีผิวเป็น <strong>Polygenic trait</strong> — มีหลายยีน (~4-5 หลัก) ที่ควบคุมการสร้างเมลานิน<br>ผลรวมของ allele เด่นทุกยีน → สีผิวต่างกันเป็น <strong>continuous distribution</strong> (กราฟระฆัง)<br>💡 ลักษณะ polygenic อื่น: ความสูง น้ำหนัก IQ สีตา</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: Pleiotropy</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Sickle cell เป็นตัวอย่างของ pleiotropy — อธิบาย</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ยีน <strong>HBB (β-globin)</strong> ตัวเดียวที่กลายพันธุ์ → ส่งผลกับหลายระบบ:<br>- เซลล์เม็ดเลือดแดงเสียรูป (sickle)<br>- โลหิตจาง<br>- ปวดเส้นเลือดอุดตัน<br>- ม้ามอักเสบ<br>- ตับ-ไตเสียหายระยะยาว<br>💡 1 ยีน → หลายลักษณะ = pleiotropy</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — หมู่เลือด ABO</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — Genotype ABO</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุ genotype ที่เป็นไปได้ของหมู่เลือด A</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>I^A I^A</strong> (homozygous) หรือ <strong>I^A i</strong> (heterozygous)<br>ทั้งคู่แสดง phenotype A เพราะ I^A เด่นต่อ i<br>💡 หมู่เลือด O ต้องเป็น ii เท่านั้น</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — ลูกเป็นอะไรได้บ้าง</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> พ่อหมู่ A (I^A i) × แม่หมู่ B (I^B i) → ลูกอาจเป็นหมู่อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Punnett Square:<br>I^A I^B (AB), I^A i (A), I^B i (B), ii (O)<br>→ <strong>ทุกหมู่เลือดเป็นไปได้!</strong> อัตราส่วน 1 : 1 : 1 : 1<br>💡 จึงไม่สามารถวินิจฉัยพ่อจากหมู่เลือดได้แน่ชัด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — Universal donor</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมหมู่ O เรียกว่า universal donor?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> RBC ของหมู่ O <strong>ไม่มี antigen</strong> A หรือ B → ใส่ให้ใครก็ไม่ถูก antibody ของผู้รับโจมตี<br>แต่ <strong>plasma ของหมู่ O มี antibody ทั้ง anti-A และ anti-B</strong> — จึงให้แต่ RBC (packed cells) ในกรณีฉุกเฉิน<br>💡 พิจารณา Rh factor ด้วย — O⁻ คือ "universal donor" จริง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: Rh incompatibility</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> แม่ Rh⁻ ตั้งครรภ์ลูก Rh⁺ ครั้งที่ 2 — เกิดอะไร? และป้องกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ในการคลอดครั้งแรก เลือดของลูก Rh⁺ ปนเข้าเลือดแม่ → แม่สร้าง <strong>anti-Rh antibody</strong><br>ครั้งที่ 2 ถ้าตั้งครรภ์ลูก Rh⁺ อีก → anti-Rh ผ่าน placenta → ทำลาย RBC ของลูก → <strong>Erythroblastosis fetalis</strong> (อันตรายถึงชีวิต)<br>ป้องกัน: ฉีด <strong>RhoGAM (anti-D immunoglobulin)</strong> ให้แม่หลังคลอดครั้งแรก<br>💡 RhoGAM กำจัด fetal RBC ก่อนกระตุ้นภูมิคุ้มกัน</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — Sex-Linked</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — ตาบอดสี</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมตาบอดสีพบในชายมากกว่าหญิง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ยีนตาบอดสีเป็น <strong>X-linked recessive</strong> — บน X chromosome<br>ชาย XY: มี X เพียง 1 ตัว → 1 allele ด้อยก็แสดงเป็นโรค<br>หญิง XX: ต้องมี 2 allele ด้อย (homozygous) จึงเป็นโรค<br>💡 ความถี่: ชาย ~8%, หญิง ~0.5% (carrier ~14%)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — Hemophilia</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> แม่ carrier (X^H X^h) × พ่อปกติ (X^H Y) → ลูกอาจเป็นอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Punnett:<br>ลูกหญิง: 1 X^H X^H (ปกติ) : 1 X^H X^h (carrier)<br>ลูกชาย: 1 X^H Y (ปกติ) : 1 X^h Y (เป็น hemophilia)<br>สรุป: ลูกหญิงปกติทั้งหมด, ลูกชาย 50% เป็นโรค<br>💡 Royal disease ของ Queen Victoria เป็นแบบนี้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — Carrier</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Carrier คืออะไร และทำไมไม่แสดงโรค?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Carrier = ผู้ที่ <strong>heterozygous</strong> สำหรับ allele ด้อย — มี 1 allele ด้อย และ 1 allele ปกติ<br>Allele ปกติ (เด่น) ครอบงำ → ไม่แสดงโรค<br>แต่สามารถส่ง allele ด้อยไปยังลูกได้ 50%<br>💡 จึงต้องตรวจ genetic screening ก่อนแต่งงานในบางครอบครัว</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: Y-linked</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ยีน Y-linked มีการถ่ายทอดอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ส่งจาก <strong>พ่อสู่ลูกชาย</strong> เท่านั้น (ตามสาย Y)<br>ทุกลูกชายจะมีลักษณะเดียวกัน — ไม่ข้ามไปลูกหญิง<br>ตัวอย่าง: ยีน <strong>SRY</strong> กำหนดเพศชาย, ขนใบหู (hairy ears)<br>💡 Y chromosome เล็กมีไม่กี่ยีน — ส่วนใหญ่อยู่บน X</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — Pedigree</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — Autosomal recessive</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ในแผนภาพ pedigree พ่อแม่ปกติ ลูกเป็นโรค — ลักษณะนี้น่าจะเป็นอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Autosomal recessive</strong> — พ่อแม่ทั้งคู่เป็น <strong>carrier</strong> (Aa × Aa) → ลูกมีโอกาส 1/4 เป็น aa (โรค)<br>ตัวอย่าง: Cystic fibrosis, Tay-Sachs, PKU, sickle cell<br>💡 มักข้ามรุ่น (พบในรุ่นหลานแต่ไม่พบในพ่อแม่)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — Autosomal dominant</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ลักษณะใดที่บอกว่าโรคเป็น <strong>autosomal dominant</strong>?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>ปรากฏทุกรุ่น</strong> ไม่ข้าม<br>(2) คนที่เป็นโรคมีลูกเป็น ~50%<br>(3) คนปกติไม่ส่งโรค<br>(4) พบทั้งชายและหญิงเท่ากัน<br>ตัวอย่าง: Huntington disease, Achondroplasia (dwarfism)<br>💡 ถ้าพ่อ Aa เป็นโรค × แม่ aa ปกติ → ลูก Aa หรือ aa อย่างละครึ่ง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — X-linked recessive pattern</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ในแผนภาพ pedigree พบว่าโรคพบในชายเป็นหลัก ส่งจากปู่ → หลานชายผ่านยายแม่ — บอกอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เป็น <strong>X-linked recessive</strong><br>ปู่ X^h Y (เป็น) → ลูกหญิงทุกคน X^H X^h (carrier)<br>ลูกหญิงนี้ × ชายปกติ → ลูกชาย 50% เป็นโรค<br>💡 ลำดับการเดิน: เป็น → carrier → เป็น (zigzag)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: Genetic counseling</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> คู่สามีภรรยาที่มีพี่น้องเป็น cystic fibrosis (CF) - มาขอคำปรึกษาความเสี่ยงในการมีลูกเป็น CF</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> CF = autosomal recessive<br>ถ้าพี่น้องของแต่ละคนเป็น CF → พ่อแม่ทั้ง 2 ฝ่ายเป็น carrier<br>โอกาสที่ตัวเองเป็น carrier = <strong>2/3</strong> (จาก 1 AA : 2 Aa ในลูกที่ไม่เป็นโรค)<br>P(ลูกของทั้งคู่เป็น CF) = 2/3 × 2/3 × 1/4 = <strong>1/9</strong> ≈ 11%<br>แนะนำ: ตรวจ DNA carrier screening<br>💡 ถ้าตรวจแล้วทั้งคู่เป็น carrier จริง → 1/4</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — การประยุกต์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — Forensic</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Paternity test ใช้หลักการพันธุศาสตร์อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เปรียบเทียบ <strong>DNA markers (STR)</strong> ของพ่อ-แม่-ลูก<br>ลูกต้องได้ <strong>1 allele จากพ่อ + 1 allele จากแม่</strong> ของแต่ละ marker<br>ถ้า allele ในลูกไม่ตรงกับพ่อสมมติฐาน → ปฏิเสธความเป็นพ่อ<br>ใช้ ~15-20 markers → ความแม่นยำ &gt; 99.999%<br>💡 ใช้ในศาลและการพิสูจน์ตัวตน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — Crop breeding</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เกษตรกรปรับปรุงพันธุ์ข้าวให้ทนแล้งและให้ผลผลิตสูง — ใช้หลักเมนเดลอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้ <strong>Selective breeding</strong>:<br>1) เลือกพ่อแม่ที่มีลักษณะดี (ทนแล้ง + ผลผลิตสูง)<br>2) ผสม → ได้ลูก F1<br>3) คัดเลือก F2/F3 ที่ได้ทั้ง 2 ลักษณะ<br>4) ผสมตัวเองหลายรุ่น (inbreeding) → ได้ <strong>pure line</strong><br>💡 ใช้เวลา ~10-15 ปี ในการสร้างพันธุ์ใหม่</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — Hybrid vigor</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> "Hybrid vigor" (heterosis) คืออะไร และใช้ในเกษตรกรรมอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Hybrid vigor = ลูก F1 จากพ่อแม่ 2 pure lines ต่างกัน <strong>มีสมรรถนะดีกว่า</strong> พ่อแม่ (โตเร็ว ทนทาน ผลผลิตสูง)<br>เหตุ: heterozygosity เพิ่มทำให้ลด recessive harmful alleles<br>ใช้ใน <strong>hybrid corn</strong> ทั่วโลก — แต่เมล็ดของ F1 ใช้ปลูกซ้ำไม่ได้ (F2 จะมี variation)<br>💡 เกษตรกรต้องซื้อเมล็ดใหม่ทุกปี — เป็นจุดที่บริษัทเมล็ดได้กำไร</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: Genetic counseling</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เพราะอะไรการแต่งงานกับญาติใกล้ชิดจึงเพิ่มความเสี่ยงของโรคพันธุกรรม?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ญาติใกล้ชิดมี <strong>DNA คล้ายกัน</strong> → มี allele recessive เดียวกันได้บ่อย<br>โอกาสที่ลูกได้ homozygous recessive (aa) สูงขึ้นมาก<br>โรค autosomal recessive ที่หายากปกติ เช่น <strong>cystic fibrosis, Tay-Sachs, PKU</strong> มีความเสี่ยงเพิ่ม<br>ในบางวัฒนธรรมที่แต่งงานในตระกูล (consanguinity) พบโรคเหล่านี้บ่อย<br>💡 จึงมีข้อห้ามทางสังคมและศาสนาในหลายประเทศ</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>กฎเมนเดล 2 ข้อ:</strong> Segregation (Anaphase I) · Independent Assortment (Metaphase I)<br>
        <strong>Punnett:</strong> Aa × Aa → <strong>3:1</strong> ; AaBb × AaBb → <strong>9:3:3:1</strong><br>
        <strong>Test cross:</strong> ผสมกับ homozygous recessive (aa)<br>
        <strong>Non-Mendelian:</strong> Incomplete · Codominance · Multiple alleles · Polygenic · Pleiotropy · Epistasis<br>
        <strong>ABO:</strong> I^A, I^B (codominant), i (recessive)<br>
        <strong>X-linked:</strong> ชายเป็นมากกว่าหญิง (ตาบอดสี, hemophilia, Duchenne, G6PD)
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>Heterozygote มีลักษณะกลาง</td><td>เฉพาะใน incomplete dominance — ปกติแสดงลักษณะเด่น</td></tr>
        <tr><td>หมู่เลือด AB ตามกฎ Mendel</td><td>เป็น codominance — ไม่ใช่ simple dominance</td></tr>
        <tr><td>โรค X-linked recessive ส่งจากพ่อสู่ลูกชาย</td><td>ไม่ — พ่อให้ Y กับลูกชาย ส่งผ่านลูกหญิง (carrier) แทน</td></tr>
        <tr><td>Test cross ใช้ homozygous dominant</td><td>ใช้ <strong>homozygous recessive (aa)</strong></td></tr>
        <tr><td>9:3:3:1 ใช้ได้กับทุก dihybrid</td><td>เฉพาะ heterozygous × heterozygous (AaBb × AaBb)</td></tr>
        <tr><td>1 ยีน = 1 ลักษณะ</td><td>มี pleiotropy (1 ยีน → หลายลักษณะ) และ polygenic</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> ถ้าโจทย์ให้อัตราส่วน F2 = 1:2:1 → คิดถึง Incomplete Dominance ; 3:1 = Mendelian ; 9:3:3:1 = Dihybrid</div>
    </div>
  `,
  b3c10: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> Chromosomal Theory of Inheritance<br>
        <strong>02</strong> โครงสร้างและจำนวนโครโมโซมในมนุษย์<br>
        <strong>03</strong> Karyotype &amp; Karyotyping<br>
        <strong>04</strong> โครโมโซมเพศ &amp; การกำหนดเพศ<br>
        <strong>05</strong> Linked Genes &amp; การทดลองของ Morgan<br>
        <strong>06</strong> Crossing Over &amp; Recombination<br>
        <strong>07</strong> Genetic Mapping (cM)<br>
        <strong>08</strong> ความผิดปกติของโครโมโซม &amp; การวินิจฉัยก่อนคลอด
      </div>
      <div class="tip-box">💡 ยีนอยู่บนโครโมโซม → กฎเมนเดลและพฤติกรรมของโครโมโซมใน meiosis อธิบายกันและกันได้</div>
    </div>

    <!-- 1. Chromosomal Theory -->
    <div class="content-section">
      <h3>🧬 Chromosomal Theory of Inheritance</h3>
      <p><strong>Walter Sutton</strong> (1902) และ <strong>Theodor Boveri</strong> สังเกตว่าพฤติกรรมของ chromosomes ใน meiosis ตรงกับกฎเมนเดล → เสนอว่า <strong>"ยีนอยู่บนโครโมโซม"</strong></p>
      <table class="content-table">
        <tr><th>พฤติกรรมของโครโมโซม</th><th>ตรงกับกฎเมนเดล</th></tr>
        <tr><td>Homologous chromosomes แยกใน Anaphase I</td><td>Law of Segregation</td></tr>
        <tr><td>Homologous pairs เรียงอิสระใน Metaphase I</td><td>Law of Independent Assortment</td></tr>
        <tr><td>chromosomes มาเป็นคู่</td><td>ยีนเป็นคู่ของ alleles</td></tr>
        <tr><td>Gamete มีโครโมโซม 1 ชุด (n)</td><td>Gamete มี 1 allele ต่อยีน</td></tr>
      </table>
    </div>

    <!-- 2. โครโมโซมในมนุษย์ -->
    <div class="content-section">
      <h3>📐 โครโมโซมในมนุษย์</h3>
      <ul>
        <li><span class="li-dot sc-dot"></span>มี <strong>46 chromosomes = 23 คู่</strong> (diploid, 2n=46)</li>
        <li><span class="li-dot sc-dot"></span><strong>22 คู่ออโตโซม (Autosomes)</strong> — chromosomes 1-22</li>
        <li><span class="li-dot sc-dot"></span><strong>1 คู่โครโมโซมเพศ (Sex chromosomes)</strong> — XX (หญิง) หรือ XY (ชาย)</li>
        <li><span class="li-dot sc-dot"></span>Y chromosome เล็กกว่า X มาก แต่มียีน <strong>SRY</strong> กำหนดเพศชาย</li>
      </ul>
      <h4>โครงสร้างของ chromosome</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Centromere</strong> — จุดติด spindle ใน mitosis/meiosis</li>
        <li><span class="li-dot sc-dot"></span><strong>Telomere</strong> — ปลายของ chromosome (ลำดับซ้ำ TTAGGG)</li>
        <li><span class="li-dot sc-dot"></span><strong>p arm</strong> = แขนสั้น (petite), <strong>q arm</strong> = แขนยาว</li>
        <li><span class="li-dot sc-dot"></span>DNA พันรอบ histone → nucleosome → chromatin → chromosome</li>
      </ul>
    </div>

    <!-- 3. Karyotype + SVG -->
    <div class="content-section">
      <h3>🔬 Karyotype &amp; Karyotyping</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Karyotype ปกติของมนุษย์เพศชาย (46, XY)</text>
          <g font-family="Sarabun" font-size="8" fill="#1E293B">
            <!-- Rows of chromosomes (simplified) -->
            <!-- Row 1: chr 1-5 (large) -->
            <g>
              <rect x="40" y="50" width="14" height="40" fill="#3B82F6" rx="3"/><text x="47" y="100" text-anchor="middle">1</text>
              <rect x="60" y="50" width="14" height="40" fill="#3B82F6" rx="3"/>
              <rect x="90" y="52" width="14" height="38" fill="#3B82F6" rx="3"/><text x="97" y="100" text-anchor="middle">2</text>
              <rect x="110" y="52" width="14" height="38" fill="#3B82F6" rx="3"/>
              <rect x="140" y="55" width="13" height="35" fill="#3B82F6" rx="3"/><text x="146" y="100" text-anchor="middle">3</text>
              <rect x="159" y="55" width="13" height="35" fill="#3B82F6" rx="3"/>
              <rect x="190" y="56" width="13" height="34" fill="#3B82F6" rx="3"/><text x="196" y="100" text-anchor="middle">4</text>
              <rect x="209" y="56" width="13" height="34" fill="#3B82F6" rx="3"/>
              <rect x="240" y="57" width="13" height="33" fill="#3B82F6" rx="3"/><text x="246" y="100" text-anchor="middle">5</text>
              <rect x="259" y="57" width="13" height="33" fill="#3B82F6" rx="3"/>
            </g>
            <!-- Row 2: chr 6-12 -->
            <g>
              <rect x="40" y="115" width="13" height="30" fill="#10B981" rx="3"/><text x="47" y="155" text-anchor="middle">6</text>
              <rect x="59" y="115" width="13" height="30" fill="#10B981" rx="3"/>
              <rect x="90" y="116" width="13" height="29" fill="#10B981" rx="3"/><text x="97" y="155" text-anchor="middle">7</text>
              <rect x="109" y="116" width="13" height="29" fill="#10B981" rx="3"/>
              <rect x="140" y="117" width="13" height="28" fill="#10B981" rx="3"/><text x="146" y="155" text-anchor="middle">8</text>
              <rect x="159" y="117" width="13" height="28" fill="#10B981" rx="3"/>
              <rect x="190" y="118" width="13" height="27" fill="#10B981" rx="3"/><text x="196" y="155" text-anchor="middle">9</text>
              <rect x="209" y="118" width="13" height="27" fill="#10B981" rx="3"/>
              <rect x="240" y="119" width="13" height="26" fill="#10B981" rx="3"/><text x="246" y="155" text-anchor="middle">10</text>
              <rect x="259" y="119" width="13" height="26" fill="#10B981" rx="3"/>
              <rect x="290" y="120" width="13" height="25" fill="#10B981" rx="3"/><text x="296" y="155" text-anchor="middle">11</text>
              <rect x="309" y="120" width="13" height="25" fill="#10B981" rx="3"/>
              <rect x="340" y="121" width="13" height="24" fill="#10B981" rx="3"/><text x="346" y="155" text-anchor="middle">12</text>
              <rect x="359" y="121" width="13" height="24" fill="#10B981" rx="3"/>
            </g>
            <!-- Row 3: chr 13-22 (small) -->
            <g>
              <rect x="40" y="175" width="12" height="22" fill="#F59E0B" rx="3"/><text x="46" y="207" text-anchor="middle">13</text>
              <rect x="58" y="175" width="12" height="22" fill="#F59E0B" rx="3"/>
              <rect x="85" y="176" width="12" height="21" fill="#F59E0B" rx="3"/><text x="91" y="207" text-anchor="middle">14</text>
              <rect x="103" y="176" width="12" height="21" fill="#F59E0B" rx="3"/>
              <rect x="130" y="177" width="12" height="20" fill="#F59E0B" rx="3"/><text x="136" y="207" text-anchor="middle">15</text>
              <rect x="148" y="177" width="12" height="20" fill="#F59E0B" rx="3"/>
              <rect x="175" y="178" width="12" height="19" fill="#F59E0B" rx="3"/><text x="181" y="207" text-anchor="middle">16</text>
              <rect x="193" y="178" width="12" height="19" fill="#F59E0B" rx="3"/>
              <rect x="220" y="178" width="11" height="19" fill="#F59E0B" rx="3"/><text x="226" y="207" text-anchor="middle">17</text>
              <rect x="237" y="178" width="11" height="19" fill="#F59E0B" rx="3"/>
              <rect x="265" y="180" width="11" height="17" fill="#F59E0B" rx="3"/><text x="271" y="207" text-anchor="middle">18</text>
              <rect x="282" y="180" width="11" height="17" fill="#F59E0B" rx="3"/>
              <rect x="310" y="181" width="11" height="16" fill="#F59E0B" rx="3"/><text x="316" y="207" text-anchor="middle">19</text>
              <rect x="327" y="181" width="11" height="16" fill="#F59E0B" rx="3"/>
              <rect x="355" y="182" width="11" height="15" fill="#F59E0B" rx="3"/><text x="361" y="207" text-anchor="middle">20</text>
              <rect x="372" y="182" width="11" height="15" fill="#F59E0B" rx="3"/>
              <rect x="400" y="184" width="10" height="13" fill="#F59E0B" rx="3"/><text x="405" y="207" text-anchor="middle">21</text>
              <rect x="416" y="184" width="10" height="13" fill="#F59E0B" rx="3"/>
              <rect x="445" y="184" width="10" height="13" fill="#F59E0B" rx="3"/><text x="450" y="207" text-anchor="middle">22</text>
              <rect x="461" y="184" width="10" height="13" fill="#F59E0B" rx="3"/>
            </g>
            <!-- Sex chromosomes -->
            <g>
              <rect x="220" y="230" width="14" height="30" fill="#F43F5E" rx="3"/><text x="227" y="270" text-anchor="middle" font-weight="700">X</text>
              <rect x="260" y="240" width="12" height="18" fill="#F43F5E" rx="3"/><text x="266" y="270" text-anchor="middle" font-weight="700">Y</text>
            </g>

            <text x="20" y="70" font-weight="700" fill="#3B82F6">A</text>
            <text x="20" y="130" font-weight="700" fill="#10B981">B-C</text>
            <text x="20" y="190" font-weight="700" fill="#F59E0B">D-G</text>
            <text x="160" y="270" font-weight="700" fill="#F43F5E">Sex chr.</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: Karyotype มนุษย์ — 22 คู่ออโตโซม + 1 คู่ XY (ชาย) หรือ XX (หญิง)</div>
      </div>

      <h4>การทำ Karyotyping</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li>เก็บเซลล์จากเลือด (lymphocyte) หรือน้ำคร่ำ</li>
        <li>กระตุ้นให้แบ่งตัว แล้วหยุดที่ <strong>metaphase</strong> ด้วย colchicine</li>
        <li>ย้อมด้วย Giemsa stain → เห็น banding pattern</li>
        <li>ถ่ายภาพและจัดเรียง chromosomes คู่เหมือนตามขนาดและ centromere</li>
        <li>วิเคราะห์ความผิดปกติ (trisomy, monosomy, translocation)</li>
      </ol>
      <div class="tip-box">💡 Karyotype <strong>46,XX</strong> = ผู้หญิงปกติ · <strong>46,XY</strong> = ผู้ชายปกติ · <strong>47,XX,+21</strong> = Down syndrome หญิง</div>
    </div>

    <!-- 4. Sex Determination + SVG -->
    <div class="content-section">
      <h3>🚹 โครโมโซมเพศและการกำหนดเพศ</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">การกำหนดเพศในมนุษย์</text>
          <g font-family="Sarabun" font-size="11" fill="#1E293B">
            <!-- Parents -->
            <text x="120" y="60" text-anchor="middle" font-weight="700" fill="#9F1239">แม่ XX</text>
            <text x="400" y="60" text-anchor="middle" font-weight="700" fill="#1E40AF">พ่อ XY</text>

            <!-- Gametes from mother -->
            <rect x="80" y="80" width="35" height="40" fill="#FFE4E6" stroke="#9F1239" rx="4"/>
            <text x="97" y="105" text-anchor="middle" font-weight="700">X</text>
            <rect x="125" y="80" width="35" height="40" fill="#FFE4E6" stroke="#9F1239" rx="4"/>
            <text x="142" y="105" text-anchor="middle" font-weight="700">X</text>

            <!-- Gametes from father -->
            <rect x="360" y="80" width="35" height="40" fill="#DBEAFE" stroke="#1E40AF" rx="4"/>
            <text x="377" y="105" text-anchor="middle" font-weight="700">X</text>
            <rect x="405" y="80" width="35" height="40" fill="#DBEAFE" stroke="#1E40AF" rx="4"/>
            <text x="422" y="105" text-anchor="middle" font-weight="700">Y</text>

            <!-- Punnett -->
            <rect x="180" y="150" width="70" height="50" fill="#FFE4E6" stroke="#9F1239" rx="6"/>
            <text x="215" y="180" text-anchor="middle" font-weight="700" font-size="14">XX</text>
            <text x="215" y="195" text-anchor="middle" font-size="9">หญิง</text>

            <rect x="270" y="150" width="70" height="50" fill="#DBEAFE" stroke="#1E40AF" rx="6"/>
            <text x="305" y="180" text-anchor="middle" font-weight="700" font-size="14">XY</text>
            <text x="305" y="195" text-anchor="middle" font-size="9">ชาย</text>

            <text x="260" y="225" text-anchor="middle" font-weight="700" font-size="11" fill="#065F46">อัตราส่วน 1 หญิง : 1 ชาย</text>
            <text x="260" y="68" text-anchor="middle" font-size="10" fill="#64748B">พ่อกำหนดเพศของลูก (XX หรือ XY) เพราะแม่ให้ X เท่านั้น</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: การกำหนดเพศในมนุษย์ — พ่อให้ X หรือ Y → ลูกเป็นหญิงหรือชาย 50:50</div>
      </div>

      <table class="content-table">
        <tr><th>ระบบ</th><th>ลักษณะ</th><th>ตัวอย่าง</th></tr>
        <tr><td>XX/XY</td><td>เพศชายเป็น heterogamete</td><td>มนุษย์ สัตว์เลี้ยงลูกด้วยนม</td></tr>
        <tr><td>ZZ/ZW</td><td>เพศหญิงเป็น heterogamete</td><td>นก ผีเสื้อ ปลาบางชนิด</td></tr>
        <tr><td>XX/XO</td><td>เพศชายไม่มี Y (มี X 1 ตัว)</td><td>แมลง grasshopper</td></tr>
        <tr><td>Temperature-dependent</td><td>อุณหภูมิกำหนดเพศ</td><td>เต่า จระเข้ จิ้งจก</td></tr>
        <tr><td>Haplodiploid</td><td>ชาย = n, หญิง = 2n</td><td>ผึ้ง ต่อ มด</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>SRY (Sex-determining Region Y)</strong> เป็นยีนบน Y ที่กำหนดให้พัฒนาเป็นเพศชาย — เซลล์ไม่มี SRY → พัฒนาเป็นหญิงตาม "default"</div>
    </div>

    <!-- 5. Morgan & Linked Genes -->
    <div class="content-section">
      <h3>🔗 Linked Genes — Thomas Hunt Morgan</h3>
      <p><strong>Morgan</strong> (1910s) ใช้แมลงวันผลไม้ <em>Drosophila melanogaster</em> ค้นพบยีนที่อยู่บน chromosome เดียวกัน — เรียก <strong>"linked"</strong> → ไม่ตามกฎ Independent Assortment</p>
      <h4>การทดลองของ Morgan</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>ผสม Drosophila ที่มียีน 2 ลักษณะ: สีลำตัว (gray/black) และความยาวปีก (normal/vestigial)</li>
        <li><span class="li-dot sc-dot"></span>ถ้า independent → ลูก F2 ควรได้ 9:3:3:1</li>
        <li><span class="li-dot sc-dot"></span>แต่พบว่า <strong>ลักษณะส่วนใหญ่ติดกัน</strong> (gray-normal และ black-vestigial มาก, ส่วนผสมกลับน้อย)</li>
        <li><span class="li-dot sc-dot"></span>สรุป: 2 ยีนนี้อยู่บน chromosome เดียวกัน (linked)</li>
      </ul>
      <div class="formula-box">
        <div class="formula-label">Parental vs Recombinant</div>
        <strong>Parental types</strong> = ลูกที่มี combination เหมือนพ่อแม่<br>
        <strong>Recombinant types</strong> = ลูกที่ combination ใหม่ (เกิดจาก crossing over)<br>
        <em>% Recombination = (Recombinants / Total) × 100</em>
      </div>
      <div class="tip-box">💡 Drosophila เหมาะสำหรับการทดลอง: วงจรชีวิตสั้น (~2 สัปดาห์), ลูกหลายร้อย, มี chromosomes แค่ 4 คู่</div>
    </div>

    <!-- 6. Crossing Over + SVG -->
    <div class="content-section">
      <h3>🧬 Crossing Over &amp; Recombination</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Crossing Over ใน Prophase I</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Before -->
            <text x="120" y="55" text-anchor="middle" font-weight="700">ก่อน</text>
            <rect x="80" y="65" width="20" height="80" fill="#3B82F6" rx="4"/>
            <text x="90" y="85" text-anchor="middle" font-weight="700" fill="white">A</text>
            <text x="90" y="125" text-anchor="middle" font-weight="700" fill="white">B</text>
            <rect x="105" y="65" width="20" height="80" fill="#3B82F6" rx="4"/>
            <text x="115" y="85" text-anchor="middle" font-weight="700" fill="white">A</text>
            <text x="115" y="125" text-anchor="middle" font-weight="700" fill="white">B</text>
            <rect x="135" y="65" width="20" height="80" fill="#F43F5E" rx="4"/>
            <text x="145" y="85" text-anchor="middle" font-weight="700" fill="white">a</text>
            <text x="145" y="125" text-anchor="middle" font-weight="700" fill="white">b</text>
            <rect x="160" y="65" width="20" height="80" fill="#F43F5E" rx="4"/>
            <text x="170" y="85" text-anchor="middle" font-weight="700" fill="white">a</text>
            <text x="170" y="125" text-anchor="middle" font-weight="700" fill="white">b</text>

            <!-- Arrow -->
            <text x="220" y="105" font-size="20" fill="#065F46">→</text>

            <!-- Crossing over visual -->
            <text x="280" y="55" text-anchor="middle" font-weight="700">Crossing Over</text>
            <rect x="245" y="65" width="20" height="80" fill="#3B82F6" rx="4"/>
            <text x="255" y="85" text-anchor="middle" font-weight="700" fill="white">A</text>
            <text x="255" y="125" text-anchor="middle" font-weight="700" fill="white">B</text>
            <rect x="270" y="65" width="20" height="80" fill="#3B82F6" rx="4"/>
            <text x="280" y="85" text-anchor="middle" font-weight="700" fill="white">A</text>
            <rect x="270" y="105" width="20" height="40" fill="#F43F5E"/>
            <text x="280" y="125" text-anchor="middle" font-weight="700" fill="white">b</text>
            <rect x="298" y="65" width="20" height="80" fill="#F43F5E" rx="4"/>
            <text x="308" y="85" text-anchor="middle" font-weight="700" fill="white">a</text>
            <rect x="298" y="105" width="20" height="40" fill="#3B82F6"/>
            <text x="308" y="125" text-anchor="middle" font-weight="700" fill="white">B</text>
            <rect x="323" y="65" width="20" height="80" fill="#F43F5E" rx="4"/>
            <text x="333" y="85" text-anchor="middle" font-weight="700" fill="white">a</text>
            <text x="333" y="125" text-anchor="middle" font-weight="700" fill="white">b</text>

            <text x="385" y="105" font-size="20" fill="#065F46">→</text>

            <!-- 4 gametes -->
            <text x="450" y="55" text-anchor="middle" font-weight="700">4 Gametes</text>
            <rect x="410" y="65" width="22" height="18" fill="#3B82F6"/>
            <text x="421" y="78" text-anchor="middle" font-size="9" fill="white" font-weight="700">AB</text>
            <rect x="435" y="65" width="22" height="18" fill="#3B82F6" stroke="#F43F5E" stroke-width="2"/>
            <text x="446" y="78" text-anchor="middle" font-size="9" fill="white" font-weight="700">Ab</text>
            <rect x="460" y="65" width="22" height="18" fill="#F43F5E" stroke="#3B82F6" stroke-width="2"/>
            <text x="471" y="78" text-anchor="middle" font-size="9" fill="white" font-weight="700">aB</text>
            <rect x="485" y="65" width="22" height="18" fill="#F43F5E"/>
            <text x="496" y="78" text-anchor="middle" font-size="9" fill="white" font-weight="700">ab</text>

            <text x="425" y="105" text-anchor="middle" font-size="9" fill="#1E40AF">Parental</text>
            <text x="495" y="105" text-anchor="middle" font-size="9" fill="#1E40AF">Parental</text>
            <text x="460" y="120" text-anchor="middle" font-size="9" fill="#9F1239" font-weight="700">Recombinant</text>

            <text x="460" y="175" text-anchor="middle" font-size="10" fill="#065F46">% Recombination = ระยะระหว่างยีน (เป็น cM)</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: Crossing over สร้าง recombinant chromatids — ใช้คำนวณ genetic distance</div>
      </div>

      <ul>
        <li><span class="li-dot sc-dot"></span><strong>เกิดที่ Prophase I</strong> ของ meiosis</li>
        <li><span class="li-dot sc-dot"></span>Non-sister chromatids ของ homologous chromosomes แลกชิ้น DNA</li>
        <li><span class="li-dot sc-dot"></span>เกิดที่ <strong>chiasma</strong> (จุดที่ chromatids ไขว้กัน)</li>
        <li><span class="li-dot sc-dot"></span>ทำให้เกิด <strong>genetic variation</strong> ในเซลล์สืบพันธุ์</li>
        <li><span class="li-dot sc-dot"></span>ยีนยิ่งห่างไกล → crossing over เกิดบ่อยขึ้น → % recombination สูง</li>
      </ul>
    </div>

    <!-- 7. Genetic Mapping -->
    <div class="content-section">
      <h3>🗺️ Genetic Mapping</h3>
      <p>ใช้ <strong>% recombination</strong> สร้างแผนที่ยีนบน chromosome — เสนอโดย <strong>Alfred Sturtevant</strong> (1913) นักศึกษาของ Morgan</p>
      <div class="formula-box">
        <div class="formula-label">หน่วย centimorgan (cM)</div>
        <strong>1 cM = 1% recombination frequency</strong><br>
        ระยะห่างยีน A-B ห่างกัน 10 cM → 10% ของ gametes เป็น recombinant<br>
        <em>(สูงสุดได้ 50% — เพราะถ้าห่างมาก ๆ ก็เหมือน independent assortment)</em>
      </div>
      <h4>ขั้นตอนการสร้างแผนที่ 3 ยีน</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>วัด % recombination ระหว่าง A-B, B-C, A-C</li>
        <li><span class="li-dot sc-dot"></span>เรียงตามระยะ — ระยะรวม A-C ควรเท่ากับ A-B + B-C</li>
        <li><span class="li-dot sc-dot"></span>ตัวอย่าง: A-B = 5 cM, B-C = 12 cM, A-C = 17 cM → ลำดับ A-B-C</li>
      </ul>
      <div class="tip-box">💡 <strong>Human Genome Project</strong> (2003) สร้าง map ครบทั้ง 24 chromosomes (22 autosomes + X + Y) ของมนุษย์</div>
    </div>

    <!-- 8. Disorders -->
    <div class="content-section">
      <h3>⚠️ ความผิดปกติของโครโมโซม</h3>
      <h4>ความผิดปกติของจำนวน (Aneuploidy)</h4>
      <table class="content-table">
        <tr><th>ภาวะ</th><th>Karyotype</th><th>อาการ</th></tr>
        <tr><td>Down syndrome</td><td>47, +21 (Trisomy 21)</td><td>IQ ต่ำ ตาเฉียง ปัญหาหัวใจ</td></tr>
        <tr><td>Edwards syndrome</td><td>47, +18</td><td>เสียชีวิตในวัยทารก</td></tr>
        <tr><td>Patau syndrome</td><td>47, +13</td><td>ผิดปกติหลายระบบ</td></tr>
        <tr><td>Klinefelter syndrome</td><td>47, XXY</td><td>ชาย ตัวสูง เต้านมโต เป็นหมัน</td></tr>
        <tr><td>Turner syndrome</td><td>45, X (XO)</td><td>หญิง ตัวเตี้ย รังไข่ไม่พัฒนา</td></tr>
        <tr><td>XYY (Jacob)</td><td>47, XYY</td><td>ชาย ตัวสูง ปกติส่วนใหญ่</td></tr>
        <tr><td>Triple X</td><td>47, XXX</td><td>หญิง อาจปกติหรือมี IQ ต่ำเล็กน้อย</td></tr>
      </table>
      <h4>ความผิดปกติของโครงสร้าง</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Deletion:</strong> สูญเสียส่วน — Cri-du-chat syndrome (5p deletion) ทารกร้องเสียงแมว</li>
        <li><span class="li-dot sc-dot"></span><strong>Duplication:</strong> ซ้ำส่วน</li>
        <li><span class="li-dot sc-dot"></span><strong>Inversion:</strong> ส่วนของ chromosome กลับด้าน</li>
        <li><span class="li-dot sc-dot"></span><strong>Translocation:</strong> ย้ายไปอีก chromosome — Philadelphia chromosome (9-22) ในมะเร็งเม็ดเลือดขาว CML</li>
      </ul>
      <div class="note-box">⚠️ <strong>Down syndrome ความเสี่ยงสูงขึ้นตามอายุแม่:</strong> อายุ 25 ปี = 1/1300, อายุ 35 ปี = 1/400, อายุ 45 ปี = 1/30 — เพราะไข่ค้างที่ Prophase I ตั้งแต่ทารก</div>
    </div>

    <!-- ============ 32 PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — Chromosomal Theory</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — Sutton-Boveri</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Sutton-Boveri Chromosomal Theory บอกว่าอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>"ยีนอยู่บนโครโมโซม"</strong> และพฤติกรรมของ chromosomes ใน meiosis ตรงกับกฎเมนเดล<br>หลักฐาน:<br>- Chromosomes อยู่เป็นคู่ ↔ alleles อยู่เป็นคู่<br>- Homologs แยกใน Anaphase I ↔ Law of Segregation<br>- Independent orientation ↔ Independent Assortment<br>💡 เสนอใน 1902 — ก่อนค้นพบ DNA</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — Anaphase I = Segregation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> พฤติกรรม chromosome ใดตรงกับ Law of Segregation?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Anaphase I</strong> ของ meiosis — Homologous chromosomes แยกกันไปคนละขั้ว → แต่ละ gamete ได้ 1 chromosome (= 1 allele) ของแต่ละคู่<br>💡 จึง gamete มี ploidy ลดจาก 2n เป็น n</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — Metaphase I = Independent Assortment</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Independent Assortment ของ Mendel เชื่อมโยงกับระยะใดของ meiosis?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Metaphase I</strong> — Homologous pairs เรียงสุ่มตรงกลาง (2²³ = 8.4 ล้าน combinations ในมนุษย์)<br>การได้ allele ของยีนหนึ่ง ไม่ส่งผลกับยีนอื่น (ถ้าอยู่คนละ chromosome)<br>💡 หลักการเดียวกับการโยนเหรียญ 23 ครั้ง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: ข้อยกเว้น</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Independent Assortment <strong>ใช้ไม่ได้</strong> กับยีนแบบใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ยีนที่ <strong>linked</strong> (อยู่บน chromosome เดียวกัน) — ถ่ายทอดด้วยกันแทนที่จะแยกอิสระ<br>ยกเว้นกรณีเกิด <strong>crossing over</strong> ระหว่างยีน 2 ตัว — ยิ่งห่างไกล โอกาส recombination ยิ่งสูง<br>💡 จึงทำให้ Morgan ค้นพบ linked genes และสร้าง genetic map ได้</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — Karyotype</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — มนุษย์มี chromosome กี่ตัว</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> มนุษย์มี chromosome ทั้งหมดกี่ตัว และแบ่งเป็นอะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> รวม <strong>46 chromosomes (23 คู่)</strong><br>22 คู่ออโตโซม (1-22) + 1 คู่โครโมโซมเพศ (XX หรือ XY)<br>💡 จำว่า "46 = 23 × 2"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — Karyotype 47,XX,+21</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Karyotype "47,XX,+21" หมายถึงอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ผู้หญิงเป็น <strong>Down syndrome</strong>:<br>- 47 = chromosome 47 ตัว<br>- XX = เพศหญิง<br>- +21 = มี chromosome 21 เกิน 1 ตัว (trisomy 21)<br>💡 ผู้ชาย Down = 47,XY,+21</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — เก็บเซลล์ระยะใด</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำ karyotype ต้องเก็บเซลล์ในระยะใดและทำไม?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ระยะ <strong>Metaphase</strong> — เพราะ chromosomes <strong>หดสั้นที่สุด</strong> และเห็นชัดได้แยก<br>ใช้ <strong>colchicine</strong> ยับยั้ง spindle → chromosomes ค้างที่ metaphase<br>💡 ในระยะอื่น chromosomes เป็น chromatin ที่ไม่สามารถนับและจัดเรียงได้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: Banding</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมการย้อม Giemsa จึงทำให้เห็น "banding pattern" บน chromosomes?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Giemsa จับกับ DNA ที่มี <strong>AT-rich regions</strong> (heterochromatin) → ปรากฏเป็นแถบเข้ม<br>GC-rich regions (euchromatin, active genes) ปรากฏเป็นแถบจาง<br>แต่ละ chromosome มี pattern เฉพาะ — ใช้ระบุชนิดและตรวจหา <strong>microdeletion</strong> หรือ <strong>translocation</strong><br>💡 G-banding เป็นมาตรฐานในการทำ karyotyping</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — Sex Determination</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — ใครกำหนดเพศ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> พ่อหรือแม่ที่กำหนดเพศของลูก? เพราะอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>พ่อ</strong> เป็นผู้กำหนดเพศของลูก<br>เพราะแม่ให้ <strong>X</strong> เท่านั้น (XX) ส่วนพ่อให้ <strong>X หรือ Y</strong> (XY)<br>- ลูกหญิง (XX) = ได้ X จากพ่อ<br>- ลูกชาย (XY) = ได้ Y จากพ่อ<br>💡 ในประวัติศาสตร์โทษแม่ที่ไม่มีลูกชาย — ผิด!</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — SRY gene</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> SRY gene คืออะไรและทำหน้าที่อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> SRY = <strong>Sex-determining Region Y</strong> — ยีนบน Y chromosome ที่กระตุ้นการสร้าง <strong>testis-determining factor (TDF)</strong> → พัฒนาเป็นอัณฑะ → ผลิต testosterone → ลักษณะเพศชาย<br>เซลล์ไม่มี SRY → พัฒนาเป็นหญิง (default)<br>💡 บางกรณีพิเศษ XX เพศชาย (มี SRY translocated) หรือ XY เพศหญิง (SRY mutation)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — ZZ/ZW</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ในนกระบบ ZW เป็นอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>เพศหญิง = ZW (heterogamete)</strong> และ <strong>เพศชาย = ZZ (homogamete)</strong><br>ตรงข้ามกับมนุษย์ — แม่นกกำหนดเพศของลูก<br>พบใน นก ผีเสื้อ ปลาบางชนิด สัตว์เลื้อยคลานบางชนิด<br>💡 จึงนักวิทยาศาสตร์สามารถเลือกเพศไก่ในฟาร์มได้</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: TSD</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Temperature-dependent Sex Determination (TSD) ในเต่ามีผลกระทบจากภาวะโลกร้อนอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ในเต่าทะเลหลายชนิด:<br>- อุณหภูมิ &lt; 29 องศา C → เพศชาย<br>- อุณหภูมิ &gt; 29 องศา C → เพศหญิง<br>โลกร้อน → ทรายร้อนขึ้น → ลูกเต่าเกือบทั้งหมดเป็นหญิง → <strong>เสียสมดุล demography</strong> → สูญพันธุ์ในระยะยาว<br>💡 ปัญหาจริงในเต่าทะเลออสเตรเลีย ปัจจุบัน 99% ของลูกเป็นเพศเมีย</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — Linkage</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — Morgan + Drosophila</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Morgan ใช้ Drosophila พบอะไรที่ขัดกับกฎ Mendel?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ยีน 2 ตัวบน chromosome เดียวกัน (สีลำตัวและความยาวปีก) <strong>ไม่เป็นอิสระ</strong> — ลักษณะของพ่อแม่ติดกันมาเป็นชุด<br>นี่คือการค้นพบ <strong>"linked genes"</strong> และเริ่มศาสตร์ <strong>genetic linkage</strong><br>💡 Morgan ได้ Nobel Prize ในปี 1933</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — Parental vs Recombinant</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Parental และ Recombinant types คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Parental:</strong> ลูกที่มี allele combination เหมือนพ่อแม่<br><strong>Recombinant:</strong> ลูกที่มี combination ใหม่ (เกิดจาก crossing over)<br>ในการผสม linked genes: parental มักมากกว่า recombinant<br>💡 ถ้า recombinant = 50% → ยีนไม่ linked (independent)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — 50% recombination</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม % recombination สูงสุดได้แค่ 50%?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เพราะถ้ายีน 2 ตัวห่างไกลมาก crossing over ระหว่างยีนเกิดในแทบทุกครั้ง → กลายเป็น <strong>independent assortment</strong><br>ที่จุดนี้ลูกได้ parental 50% และ recombinant 50%<br>💡 จึง 50% recombination = ยีนอยู่ไกลมาก หรือคนละ chromosome</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: Linked vs Independent</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> AaBb × aabb ในกรณี linked (cis configuration) → ลูกควรเป็นอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ถ้า independent → 1:1:1:1 (AaBb : Aabb : aaBb : aabb)<br>ถ้า linked tightly (cis: AB/ab) → ส่วนใหญ่จะเป็น <strong>AaBb และ aabb</strong> (parental) — ส่วนน้อยจะเป็น Aabb และ aaBb (recombinant)<br>เช่น ถ้า 10% recombination → 45 : 5 : 5 : 45<br>💡 ยิ่ง linked ยิ่งห่างจาก 1:1:1:1</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — Crossing Over</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — Chiasma</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Chiasma คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> จุดที่ <strong>non-sister chromatids ของ homologous chromosomes ไขว้กัน</strong> ใน Prophase I ของ meiosis — เป็นที่เกิด crossing over<br>มองได้ภายใต้กล้องจุลทรรศน์ที่ระยะ <strong>diplotene</strong> ของ Prophase I<br>💡 พหูพจน์: chiasmata</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — เกิดที่ระยะไหน</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Crossing over เกิดที่ระยะใดของ meiosis?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Prophase I</strong> โดยเฉพาะระยะ <strong>pachytene</strong> — เมื่อ homologous chromosomes มาคู่กัน (synapsis) สร้าง <strong>tetrad/bivalent</strong><br>💡 ไม่เกิดใน mitosis (ไม่มี synapsis)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — 4 gametes</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Tetrad AB/AB / ab/ab เมื่อเกิด crossing over 1 จุด → gametes 4 ชนิดอะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>2 parental: <strong>AB และ ab</strong> (chromatids ที่ไม่ได้แลก)<br>2 recombinant: <strong>Ab และ aB</strong> (chromatids ที่แลกชิ้น)<br>💡 1 crossing over → 2 parental + 2 recombinant</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: Importance</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม Crossing over จึงสำคัญต่อวิวัฒนาการ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> สร้าง <strong>combinations ใหม่ของ alleles</strong> ที่ไม่มีในพ่อแม่ → เพิ่ม genetic variation ในประชากร<br>variation นี้เป็น "วัตถุดิบ" ของ <strong>natural selection</strong> — selection กรอง combinations ที่เหมาะกับสิ่งแวดล้อม<br>ถ้าไม่มี crossing over: ทุก allele บน chromosome เดียวกันถ่ายเป็นชุด → variation ลดมาก<br>💡 พบใน eukaryotes แทบทุกชนิด — เป็นที่มาความหลากหลายของชีวิต</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — Genetic Mapping</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — cM</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> 1 centimorgan (cM) หมายถึงอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>1 cM = 1% recombination frequency</strong> ระหว่าง 2 ยีน<br>ตั้งชื่อเพื่อให้เกียรติ <strong>Thomas Hunt Morgan</strong><br>ในจีโนมมนุษย์ 1 cM ≈ ~1 ล้าน base pairs (เฉลี่ย)<br>💡 สูงสุด 50 cM = independent</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — สร้างแผนที่</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> A-B = 10 cM, B-C = 15 cM, A-C = 25 cM → จัดเรียงยีน</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ลำดับ <strong>A — B — C</strong><br>เพราะ A-C = A-B + B-C (10+15=25) → B อยู่กลาง<br>💡 ถ้า A-C &lt; A-B + B-C อาจมี double crossover</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — % recombination</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Test cross AaBb × aabb พบ recombinants 80 จาก 400 ลูก → ระยะ A-B กี่ cM?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> % Recombination = (80/400) × 100 = <strong>20%</strong> = 20 cM<br>💡 จึงระยะระหว่าง A-B = 20 cM</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: HGP</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Human Genome Project (2003) สำเร็จอะไรบ้าง?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ถอดรหัส DNA ทั้งหมดของมนุษย์ ~<strong>3 พันล้าน base pairs</strong> และระบุยีน ~20,000-25,000 ตัว<br>ใช้เวลา 13 ปี งบประมาณ 3 พันล้านดอลลาร์<br>ปัจจุบันถอดได้ใน 1 วัน ราคา &lt; 1,000 ดอลลาร์ (Next-Gen Sequencing)<br>การประยุกต์: precision medicine, ค้นยาใหม่, การวินิจฉัยโรคพันธุกรรม<br>💡 เปลี่ยนวงการแพทย์อย่างรุนแรง</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — Chromosomal Disorders</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — Down syndrome</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Down syndrome เกิดจากอะไรในระดับโครโมโซม?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Trisomy 21</strong> — มี chromosome 21 จำนวน 3 ตัว (47,+21)<br>เกิดจาก <strong>nondisjunction</strong> ที่ Anaphase I ของ meiosis ในไข่ (90%) หรือ sperm (10%)<br>ความเสี่ยงเพิ่มเมื่อแม่อายุมาก: 25 ปี = 1/1300, 45 ปี = 1/30<br>💡 ตัวบ่งชี้ลักษณะ: ตาเฉียงขึ้น ใบหน้าแบน IQ ต่ำ ปัญหาหัวใจ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — Turner vs Klinefelter</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Turner syndrome (45,X) และ Klinefelter (47,XXY) ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Turner (45,X):</strong> เพศหญิง ขาด X 1 ตัว — ตัวเตี้ย รังไข่ไม่พัฒนา ไม่มีประจำเดือน เป็นหมัน<br><strong>Klinefelter (47,XXY):</strong> เพศชาย มี X เกิน — ตัวสูง อัณฑะเล็ก เต้านมขยาย เป็นหมัน<br>💡 ทั้งคู่เกิดจาก nondisjunction ของ sex chromosomes</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — Cri-du-chat</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Cri-du-chat syndrome เกิดจากความผิดปกติแบบใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Deletion ของแขนสั้นของ chromosome 5</strong> (5p deletion)<br>ทารกร้องเสียงเหมือนแมว (cry of cat ในภาษาฝรั่งเศส = "cri-du-chat")<br>อาการ: IQ ต่ำ ใบหน้าผิดปกติ พัฒนาช้า<br>💡 เป็นตัวอย่างของ structural chromosomal disorder</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: Translocation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Philadelphia chromosome คืออะไรและเกี่ยวข้องกับมะเร็งใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Reciprocal translocation</strong> ระหว่าง chromosome 9 และ 22 → สร้าง <strong>BCR-ABL fusion gene</strong> → สร้างเอนไซม์ tyrosine kinase ที่ทำงานตลอดเวลา → กระตุ้นการแบ่งเซลล์เม็ดเลือดขาว<br>เป็นเหตุของ <strong>Chronic Myeloid Leukemia (CML)</strong><br>ปัจจุบันรักษาได้ด้วยยา <strong>Imatinib (Gleevec)</strong> ที่ยับยั้ง BCR-ABL kinase<br>💡 เป็นกรณีศึกษาแรกของ "targeted cancer therapy"</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — การประยุกต์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — Amniocentesis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Amniocentesis คืออะไร และใช้เพื่ออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เจาะน้ำคร่ำ (~15-20 mL) ที่อายุครรภ์ <strong>14-20 สัปดาห์</strong> → เก็บเซลล์ทารก → ทำ karyotype<br>ใช้วินิจฉัยก่อนคลอด:<br>- Down syndrome (Trisomy 21)<br>- Edwards, Patau<br>- Neural tube defects (AFP test)<br>- เพศของทารก<br>ความเสี่ยง: แท้งบุตร ~0.5%<br>💡 ปัจจุบันมี <strong>NIPT (Non-invasive Prenatal Test)</strong> — เจาะเลือดแม่หา fetal DNA เท่านั้น ไม่มีความเสี่ยง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — CVS</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Chorionic Villus Sampling (CVS) ต่างจาก amniocentesis อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> CVS เก็บเซลล์จาก <strong>chorionic villi (placenta)</strong> — ทำได้เร็ว 10-13 สัปดาห์ (ก่อน amniocentesis)<br>ข้อดี: รู้ผลเร็วกว่า → ตัดสินใจได้ทันเวลา<br>ข้อเสีย: ความเสี่ยงแท้ง 1-2% (สูงกว่า amniocentesis)<br>ผลตรงกัน 99% เพราะ placenta มาจาก zygote เดียวกับทารก<br>💡 เลือกใช้ตามความจำเป็น</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — PGD</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Preimplantation Genetic Diagnosis (PGD) คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ในกระบวนการ <strong>IVF</strong> นำ embryo ระยะ 8-cell ออก <strong>1 เซลล์</strong> → ตรวจ DNA → เลือกเฉพาะ embryo ที่ไม่มียีนที่ผิดปกติฝังในมดลูก<br>ใช้สำหรับครอบครัวที่มีโรคพันธุกรรมรุนแรง เช่น:<br>- Cystic fibrosis<br>- Tay-Sachs<br>- Huntington<br>- BRCA1/2 (เสี่ยงมะเร็งเต้านม)<br>💡 มีประเด็นจริยธรรม "designer babies"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: 23andMe</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> บริษัทอย่าง 23andMe ทำการตรวจ DNA ส่วนตัว — มีข้อดีและข้อเสียอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>ข้อดี:</strong> รู้บรรพบุรุษ · พบความเสี่ยงโรคพันธุกรรม · ค้นพบญาติ · ปรับวิถีชีวิตให้เหมาะ<br><strong>ข้อเสีย:</strong><br>- ความเป็นส่วนตัวของ DNA<br>- บริษัทอาจขายข้อมูลให้ pharma/insurance<br>- ผลอาจตีความผิด (ไม่มี genetic counselor)<br>- ส่งผลกระทบจิตใจ (รู้ว่ามีความเสี่ยง Alzheimer)<br>- ปัญหาทางกฎหมาย (พบความสัมพันธ์ทางสายเลือดที่ไม่คาด)<br>💡 ในสหรัฐ มี Genetic Information Nondiscrimination Act (GINA) คุ้มครอง</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>มนุษย์:</strong> 46 chromosomes (23 คู่) = 22 autosomes + 1 คู่ sex chromosomes<br>
        <strong>เพศ:</strong> XX = หญิง · XY = ชาย · พ่อกำหนดเพศ · SRY ใน Y<br>
        <strong>Karyotype:</strong> ดูที่ metaphase · ย้อม Giemsa · 47,XX,+21 = Down ♀<br>
        <strong>Linked genes:</strong> ไม่ตาม Independent Assortment · ใช้ % recombination วัด<br>
        <strong>1 cM = 1% recombination · สูงสุด 50%</strong><br>
        <strong>Disorders:</strong> Down (47,+21) · Turner (45,X) · Klinefelter (47,XXY)
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>แม่กำหนดเพศของลูก</td><td>พ่อกำหนด — เพราะแม่ให้ X เท่านั้น</td></tr>
        <tr><td>มนุษย์มี 46 ยีน</td><td>มี 46 <strong>chromosomes</strong> และ ~20,000 <strong>ยีน</strong></td></tr>
        <tr><td>Y chromosome ใหญ่กว่า X</td><td>Y เล็กกว่า X มาก — มี gene น้อย</td></tr>
        <tr><td>% recombination สูงสุด 100%</td><td>สูงสุดได้ 50% (independent assortment)</td></tr>
        <tr><td>ยีน linked ไม่แยก</td><td>แยกได้ผ่าน crossing over</td></tr>
        <tr><td>Karyotype ทำได้ทุกระยะ</td><td>ต้องที่ <strong>metaphase</strong> เท่านั้น</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> ถ้าโจทย์ถามถึงอัตรา F2 ที่ไม่ใช่ 9:3:3:1 → คิดถึง linkage; ถ้าถาม karyotype → ดูที่จำนวน chromosomes และ XY</div>
    </div>
  `,
  b3c11: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> การค้นพบ DNA และโครงสร้าง Double Helix<br>
        <strong>02</strong> Base pairing &amp; กฎ Chargaff<br>
        <strong>03</strong> DNA Replication (semi-conservative)<br>
        <strong>04</strong> Transcription: DNA &rarr; mRNA<br>
        <strong>05</strong> Genetic Code &amp; Translation: mRNA &rarr; Protein<br>
        <strong>06</strong> Mutations: Point · Frameshift · Chromosomal<br>
        <strong>07</strong> เทคโนโลยีพันธุกรรม: PCR · Gel electrophoresis · Recombinant DNA<br>
        <strong>08</strong> CRISPR-Cas9 · GMO · จริยธรรม
      </div>
      <div class="tip-box">💡 DNA = พิมพ์เขียวของชีวิต — รหัสเดียวกันใช้ได้ในทุกสิ่งมีชีวิต (universal genetic code) → ใส่ยีนเรืองแสงของแมงกะพรุนเข้ามะเขือเทศได้</div>
    </div>

    <!-- 1. การค้นพบ -->
    <div class="content-section">
      <h3>🧬 การค้นพบ DNA</h3>
      <table class="content-table">
        <tr><th>นักวิทยาศาสตร์</th><th>ปี</th><th>การค้นพบ</th></tr>
        <tr><td>Friedrich Miescher</td><td>1869</td><td>แยก "nuclein" จากเซลล์เม็ดเลือดขาว — เป็นการค้นพบ DNA ครั้งแรก</td></tr>
        <tr><td>Frederick Griffith</td><td>1928</td><td>การทดลอง <strong>Transformation</strong> ใน Pneumococcus — มีสารพันธุกรรมส่งต่อได้</td></tr>
        <tr><td>Avery, MacLeod, McCarty</td><td>1944</td><td>พิสูจน์ว่าสารพันธุกรรมคือ <strong>DNA</strong> (ไม่ใช่โปรตีน)</td></tr>
        <tr><td>Hershey-Chase</td><td>1952</td><td>การทดลอง <strong>blender</strong> ด้วย bacteriophage + radioactive — ยืนยัน DNA เป็นสารพันธุกรรม</td></tr>
        <tr><td>Erwin Chargaff</td><td>1950</td><td>%A = %T, %G = %C ใน DNA ของทุกสิ่งมีชีวิต</td></tr>
        <tr><td>Rosalind Franklin</td><td>1952</td><td>X-ray crystallography "Photo 51" — แสดงโครงสร้างเกลียว</td></tr>
        <tr><td>Watson &amp; Crick</td><td>1953</td><td>เสนอแบบจำลอง <strong>Double Helix</strong> (Nobel 1962)</td></tr>
        <tr><td>Meselson-Stahl</td><td>1958</td><td>พิสูจน์ <strong>Semi-conservative replication</strong> ด้วย ¹⁵N</td></tr>
      </table>
      <div class="note-box">⚠️ Rosalind Franklin เสียชีวิตจากมะเร็งรังไข่ในปี 1958 (อายุ 37) — Nobel ไม่มอบให้คนตาย → ไม่ได้รับเกียรติร่วมกับ Watson-Crick</div>
    </div>

    <!-- 2. โครงสร้าง DNA + SVG -->
    <div class="content-section">
      <h3>🔗 โครงสร้าง DNA (Double Helix)</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">DNA Double Helix</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- 5' and 3' labels -->
            <text x="80" y="55" font-weight="700" fill="#9F1239">5'</text>
            <text x="245" y="55" font-weight="700" fill="#1E40AF">3'</text>
            <text x="80" y="265" font-weight="700" fill="#9F1239">3'</text>
            <text x="245" y="265" font-weight="700" fill="#1E40AF">5'</text>

            <!-- Sugar-phosphate backbone (left strand) -->
            <g stroke="#9F1239" stroke-width="2.5" fill="none">
              <line x1="100" y1="60" x2="100" y2="80"/>
              <line x1="100" y1="100" x2="100" y2="120"/>
              <line x1="100" y1="140" x2="100" y2="160"/>
              <line x1="100" y1="180" x2="100" y2="200"/>
              <line x1="100" y1="220" x2="100" y2="240"/>
            </g>
            <!-- pentose pentagons -->
            <g fill="#FFE4E6" stroke="#9F1239" stroke-width="1">
              <circle cx="100" cy="90" r="8"/>
              <circle cx="100" cy="130" r="8"/>
              <circle cx="100" cy="170" r="8"/>
              <circle cx="100" cy="210" r="8"/>
            </g>
            <text x="80" y="92" font-size="8" fill="#9F1239">P</text>
            <text x="80" y="132" font-size="8" fill="#9F1239">P</text>
            <text x="80" y="172" font-size="8" fill="#9F1239">P</text>
            <text x="80" y="212" font-size="8" fill="#9F1239">P</text>

            <!-- right backbone -->
            <g stroke="#1E40AF" stroke-width="2.5" fill="none">
              <line x1="225" y1="60" x2="225" y2="80"/>
              <line x1="225" y1="100" x2="225" y2="120"/>
              <line x1="225" y1="140" x2="225" y2="160"/>
              <line x1="225" y1="180" x2="225" y2="200"/>
              <line x1="225" y1="220" x2="225" y2="240"/>
            </g>
            <g fill="#DBEAFE" stroke="#1E40AF" stroke-width="1">
              <circle cx="225" cy="90" r="8"/>
              <circle cx="225" cy="130" r="8"/>
              <circle cx="225" cy="170" r="8"/>
              <circle cx="225" cy="210" r="8"/>
            </g>
            <text x="235" y="92" font-size="8" fill="#1E40AF">P</text>
            <text x="235" y="132" font-size="8" fill="#1E40AF">P</text>
            <text x="235" y="172" font-size="8" fill="#1E40AF">P</text>
            <text x="235" y="212" font-size="8" fill="#1E40AF">P</text>

            <!-- Base pairs -->
            <g>
              <line x1="108" y1="90" x2="217" y2="90" stroke="#10B981" stroke-width="2" stroke-dasharray="3 2"/>
              <rect x="135" y="83" width="20" height="14" fill="#3B82F6" rx="2"/>
              <text x="145" y="93" text-anchor="middle" font-size="9" fill="white" font-weight="700">A</text>
              <rect x="170" y="83" width="20" height="14" fill="#F59E0B" rx="2"/>
              <text x="180" y="93" text-anchor="middle" font-size="9" fill="white" font-weight="700">T</text>
              <text x="265" y="93" font-size="9" fill="#065F46">A=T (2 H)</text>

              <line x1="108" y1="130" x2="217" y2="130" stroke="#10B981" stroke-width="2" stroke-dasharray="3 2"/>
              <rect x="135" y="123" width="20" height="14" fill="#F43F5E" rx="2"/>
              <text x="145" y="133" text-anchor="middle" font-size="9" fill="white" font-weight="700">G</text>
              <rect x="170" y="123" width="20" height="14" fill="#7C3AED" rx="2"/>
              <text x="180" y="133" text-anchor="middle" font-size="9" fill="white" font-weight="700">C</text>
              <text x="265" y="133" font-size="9" fill="#065F46">G≡C (3 H)</text>

              <line x1="108" y1="170" x2="217" y2="170" stroke="#10B981" stroke-width="2" stroke-dasharray="3 2"/>
              <rect x="135" y="163" width="20" height="14" fill="#F59E0B" rx="2"/>
              <text x="145" y="173" text-anchor="middle" font-size="9" fill="white" font-weight="700">T</text>
              <rect x="170" y="163" width="20" height="14" fill="#3B82F6" rx="2"/>
              <text x="180" y="173" text-anchor="middle" font-size="9" fill="white" font-weight="700">A</text>
              <text x="265" y="173" font-size="9" fill="#065F46">T=A</text>

              <line x1="108" y1="210" x2="217" y2="210" stroke="#10B981" stroke-width="2" stroke-dasharray="3 2"/>
              <rect x="135" y="203" width="20" height="14" fill="#7C3AED" rx="2"/>
              <text x="145" y="213" text-anchor="middle" font-size="9" fill="white" font-weight="700">C</text>
              <rect x="170" y="203" width="20" height="14" fill="#F43F5E" rx="2"/>
              <text x="180" y="213" text-anchor="middle" font-size="9" fill="white" font-weight="700">G</text>
              <text x="265" y="213" font-size="9" fill="#065F46">C≡G</text>
            </g>

            <text x="380" y="70" font-weight="700" fill="#065F46">Antiparallel:</text>
            <text x="380" y="85" font-size="9" fill="#065F46">สาย 1: 5' &rarr; 3'</text>
            <text x="380" y="98" font-size="9" fill="#065F46">สาย 2: 3' &rarr; 5'</text>

            <text x="380" y="130" font-weight="700" fill="#065F46">Base pairing:</text>
            <text x="380" y="145" font-size="9" fill="#065F46">Purine (A,G) จับ</text>
            <text x="380" y="158" font-size="9" fill="#065F46">Pyrimidine (T,C)</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: DNA Double Helix — 2 สาย antiparallel เชื่อมด้วย hydrogen bonds (A=T, G≡C)</div>
      </div>

      <h4>องค์ประกอบของนิวคลีโอไทด์</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li><strong>น้ำตาล Deoxyribose</strong> (5 คาร์บอน)</li>
        <li><strong>หมู่ฟอสเฟต</strong></li>
        <li><strong>เบสไนโตรเจน</strong>: A, T, G, C</li>
      </ol>
      <table class="content-table">
        <tr><th>เบส</th><th>ประเภท</th><th>คู่กับ</th><th>จำนวน H-bonds</th></tr>
        <tr><td>Adenine (A)</td><td>Purine (2 วง)</td><td>Thymine (T)</td><td>2</td></tr>
        <tr><td>Guanine (G)</td><td>Purine (2 วง)</td><td>Cytosine (C)</td><td>3</td></tr>
        <tr><td>Thymine (T)</td><td>Pyrimidine (1 วง)</td><td>Adenine (A)</td><td>2</td></tr>
        <tr><td>Cytosine (C)</td><td>Pyrimidine (1 วง)</td><td>Guanine (G)</td><td>3</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">กฎ Chargaff</div>
        %A = %T &middot; %G = %C<br>
        ดังนั้น A + G = T + C (สัดส่วน purine = pyrimidine)<br>
        แต่ %(A+T) ไม่จำเป็นต้องเท่ากับ %(G+C) — ต่างกันในแต่ละสิ่งมีชีวิต
      </div>
    </div>

    <!-- 3. DNA Replication + SVG -->
    <div class="content-section">
      <h3>🔄 DNA Replication — Semi-conservative</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Replication Fork</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Parental DNA -->
            <g stroke="#9F1239" stroke-width="3" fill="none">
              <path d="M 40 100 L 200 100"/>
            </g>
            <g stroke="#1E40AF" stroke-width="3" fill="none">
              <path d="M 40 140 L 200 140"/>
            </g>
            <!-- Connection -->
            <g stroke="#10B981" stroke-width="1" stroke-dasharray="2 2">
              <line x1="60" y1="105" x2="60" y2="135"/>
              <line x1="90" y1="105" x2="90" y2="135"/>
              <line x1="120" y1="105" x2="120" y2="135"/>
              <line x1="150" y1="105" x2="150" y2="135"/>
              <line x1="180" y1="105" x2="180" y2="135"/>
            </g>

            <!-- Helicase opens -->
            <circle cx="210" cy="120" r="18" fill="#7C3AED" stroke="#5B21B6" stroke-width="2"/>
            <text x="210" y="124" text-anchor="middle" font-size="9" fill="white" font-weight="700">Hel</text>

            <!-- Fork opens -->
            <g stroke="#9F1239" stroke-width="3" fill="none">
              <path d="M 230 105 Q 260 105 300 80 L 460 80"/>
            </g>
            <g stroke="#1E40AF" stroke-width="3" fill="none">
              <path d="M 230 135 Q 260 135 300 160 L 460 160"/>
            </g>

            <!-- Leading strand (continuous) -->
            <g stroke="#10B981" stroke-width="2.5" fill="none">
              <path d="M 300 80 L 460 80"/>
            </g>
            <text x="380" y="70" text-anchor="middle" font-size="9" fill="#065F46" font-weight="700">Leading (continuous 5'→3')</text>

            <!-- Polymerase on leading -->
            <circle cx="440" cy="80" r="10" fill="#10B981" stroke="#065F46"/>
            <text x="440" y="83" text-anchor="middle" font-size="8" fill="white">Pol</text>

            <!-- Lagging strand (Okazaki fragments) -->
            <g stroke="#10B981" stroke-width="2.5" fill="none">
              <path d="M 300 160 L 340 160"/>
              <path d="M 360 160 L 400 160"/>
              <path d="M 420 160 L 460 160"/>
            </g>
            <text x="380" y="180" text-anchor="middle" font-size="9" fill="#065F46" font-weight="700">Lagging (Okazaki fragments)</text>

            <!-- Ligase -->
            <circle cx="350" cy="160" r="8" fill="#F59E0B" stroke="#B45309"/>
            <text x="350" y="163" text-anchor="middle" font-size="7" fill="white">Lig</text>
            <circle cx="410" cy="160" r="8" fill="#F59E0B" stroke="#B45309"/>
            <text x="410" y="163" text-anchor="middle" font-size="7" fill="white">Lig</text>

            <text x="200" y="220" text-anchor="middle" font-size="10" fill="#065F46">Helicase คลายเกลียว · Polymerase สังเคราะห์สายใหม่ · Ligase เชื่อม Okazaki</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: Replication Fork — Leading strand ต่อเนื่อง, Lagging strand เป็น Okazaki fragments</div>
      </div>

      <h4>เอนไซม์สำคัญ</h4>
      <table class="content-table">
        <tr><th>เอนไซม์</th><th>หน้าที่</th></tr>
        <tr><td>Helicase</td><td>คลายเกลียว DNA (แตก H-bonds)</td></tr>
        <tr><td>Single-strand binding protein (SSB)</td><td>ป้องกันไม่ให้สาย DNA จับกันใหม่</td></tr>
        <tr><td>Topoisomerase</td><td>คลายการบิดเกลียวข้างหน้า fork</td></tr>
        <tr><td>Primase</td><td>สร้าง RNA primer (~10 nt)</td></tr>
        <tr><td>DNA Polymerase III</td><td>สังเคราะห์สายใหม่จาก 5' &rarr; 3' (ติด nucleotide ที่ปลาย 3')</td></tr>
        <tr><td>DNA Polymerase I</td><td>แทนที่ RNA primer ด้วย DNA</td></tr>
        <tr><td>Ligase</td><td>เชื่อม Okazaki fragments</td></tr>
      </table>
      <div class="formula-box">
        <div class="formula-label">Semi-conservative</div>
        DNA ลูกแต่ละสายมี 1 สายเก่า (template) + 1 สายใหม่<br>
        Meselson-Stahl (1958) พิสูจน์ด้วย ¹⁵N → ¹⁴N density gradient
      </div>
      <div class="note-box">⚠️ <strong>Leading vs Lagging:</strong> เพราะ polymerase สังเคราะห์เฉพาะ 5'→3' → สายตามจริง (lagging) ต้องสร้างเป็นชิ้นย้อนกลับ (Okazaki) ที่ ligase เชื่อมในภายหลัง</div>
    </div>

    <!-- 4. Transcription + SVG -->
    <div class="content-section">
      <h3>📝 Transcription — DNA &rarr; mRNA</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Transcription: DNA &rarr; mRNA</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- DNA template -->
            <g stroke="#1E40AF" stroke-width="3" fill="none">
              <path d="M 40 100 L 200 100 L 220 130 L 220 170 L 200 200 L 40 200"/>
            </g>
            <g stroke="#9F1239" stroke-width="3" fill="none">
              <path d="M 40 130 L 180 130 L 200 100"/>
              <path d="M 200 200 L 180 170 L 40 170"/>
            </g>
            <text x="20" y="105" font-size="9" font-weight="700" fill="#9F1239">Template</text>
            <text x="20" y="170" font-size="9" font-weight="700" fill="#1E40AF">Coding</text>

            <!-- RNA Polymerase -->
            <ellipse cx="200" cy="145" rx="38" ry="28" fill="#10B981" stroke="#065F46" stroke-width="2"/>
            <text x="200" y="143" text-anchor="middle" font-weight="700" fill="white" font-size="10">RNA</text>
            <text x="200" y="156" text-anchor="middle" font-weight="700" fill="white" font-size="10">Pol</text>

            <!-- mRNA -->
            <path d="M 240 145 L 460 145" stroke="#F59E0B" stroke-width="3" fill="none"/>
            <text x="465" y="148" font-weight="700" fill="#B45309">mRNA</text>

            <!-- Direction -->
            <path d="M 460 145 L 470 145" stroke="#F59E0B" stroke-width="3" marker-end="url(#arrT)"/>

            <!-- Promoter/Terminator -->
            <rect x="10" y="80" width="40" height="40" fill="#FBBF24" stroke="#B45309" opacity="0.4"/>
            <text x="30" y="105" text-anchor="middle" font-size="9" fill="#92400E" font-weight="700">Promoter</text>

            <rect x="430" y="180" width="50" height="20" fill="#F472B6" stroke="#831843" opacity="0.4"/>
            <text x="455" y="195" text-anchor="middle" font-size="9" fill="#831843" font-weight="700">Terminator</text>

            <text x="260" y="215" text-anchor="middle" font-size="9" fill="#64748B">RNA Pol อ่าน template 3'&rarr;5' สร้าง mRNA 5'&rarr;3'</text>
          </g>
          <defs><marker id="arrT" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#F59E0B"/></marker></defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: Transcription — RNA Polymerase อ่าน template strand สร้าง mRNA</div>
      </div>

      <h4>3 ขั้นตอน</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li><strong>Initiation:</strong> RNA Polymerase จับ <strong>promoter</strong> (TATA box ใน eukaryotes) → คลาย DNA</li>
        <li><strong>Elongation:</strong> อ่าน template strand 3'&rarr;5' สร้าง mRNA 5'&rarr;3' โดยใส่ A=U, T=A, G=C, C=G</li>
        <li><strong>Termination:</strong> ถึง terminator sequence → mRNA ปล่อยออก</li>
      </ol>
      <h4>การปรับแต่ง mRNA ใน eukaryotes (Post-transcriptional)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>5' cap:</strong> เติม 7-methylguanosine ที่ปลาย 5' — ป้องกัน RNase</li>
        <li><span class="li-dot sc-dot"></span><strong>Poly-A tail:</strong> เติม A 100-250 ตัวที่ปลาย 3'</li>
        <li><span class="li-dot sc-dot"></span><strong>Splicing:</strong> ตัด <strong>introns</strong> ออก ต่อ <strong>exons</strong> เข้าด้วยกัน — โดย spliceosome</li>
      </ul>
      <div class="tip-box">💡 <strong>Alternative splicing</strong> ทำให้ 1 ยีนสร้างได้หลายโปรตีน → จึงมียีน ~20,000 แต่สร้างโปรตีนได้ &gt; 100,000 ชนิด</div>
    </div>

    <!-- 5. Translation -->
    <div class="content-section">
      <h3>🛠️ Translation — mRNA &rarr; Protein</h3>
      <h4>Genetic Code</h4>
      <div class="formula-box">
        <div class="formula-label">รหัสพันธุกรรม</div>
        Codon = 3 nucleotides = 1 amino acid<br>
        4³ = <strong>64 codons</strong> &middot; 20 amino acids (degenerate code)<br>
        <strong>Start codon:</strong> AUG (Methionine)<br>
        <strong>Stop codons:</strong> UAA, UAG, UGA<br>
        <strong>Universal:</strong> ใช้ในสิ่งมีชีวิตทุกชนิด (ยกเว้นบางกรณีเล็กน้อย)
      </div>
      <h4>ส่วนประกอบ</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>mRNA</strong> — พิมพ์เขียวที่มี codons</li>
        <li><span class="li-dot sc-dot"></span><strong>Ribosome</strong> — โรงงานสร้างโปรตีน (large + small subunits)</li>
        <li><span class="li-dot sc-dot"></span><strong>tRNA</strong> — มี anticodon (3 nt) และพา amino acid ที่กำหนด</li>
        <li><span class="li-dot sc-dot"></span><strong>Amino acids 20 ชนิด</strong></li>
      </ul>
      <h4>3 ขั้นตอน</h4>
      <table class="content-table">
        <tr><th>ขั้นตอน</th><th>เกิดอะไร</th></tr>
        <tr><td>Initiation</td><td>Ribosome small subunit จับ mRNA ที่ AUG &rarr; tRNA-Met เข้า P site &rarr; large subunit ผนึก</td></tr>
        <tr><td>Elongation</td><td>tRNA-AA เข้า A site &rarr; peptide bond ระหว่าง AA สอง &rarr; ribosome translocate 1 codon</td></tr>
        <tr><td>Termination</td><td>Stop codon (UAA/UAG/UGA) &rarr; release factor &rarr; ปล่อยโปรตีน + ribosome แยก</td></tr>
      </table>
      <div class="tip-box">💡 Translation เกิดที่ <strong>ไรโบโซมในไซโทพลาซึม</strong> — Free ribosomes สร้างโปรตีนใช้ในเซลล์ · Bound ribosomes (บน rough ER) สร้างโปรตีนส่งออก</div>
    </div>

    <!-- 6. Mutations -->
    <div class="content-section">
      <h3>⚠️ Mutations — การกลายพันธุ์</h3>
      <h4>Point Mutations (1 เบส)</h4>
      <table class="content-table">
        <tr><th>ชนิด</th><th>คำอธิบาย</th><th>ผล</th></tr>
        <tr><td>Silent</td><td>เปลี่ยนเบสแต่ codon ใหม่ยังให้ AA เดิม</td><td>ไม่กระทบ (degenerate)</td></tr>
        <tr><td>Missense</td><td>เปลี่ยนเบส &rarr; AA เปลี่ยน</td><td>โปรตีนอาจทำงานต่าง — เช่น sickle cell</td></tr>
        <tr><td>Nonsense</td><td>เปลี่ยนเบส &rarr; stop codon ก่อนเวลา</td><td>โปรตีนสั้น มักไม่ทำงาน</td></tr>
      </table>
      <h4>Frameshift Mutations</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Insertion:</strong> เพิ่มเบส 1 ตัว &rarr; เลื่อน reading frame ทั้งหมด</li>
        <li><span class="li-dot sc-dot"></span><strong>Deletion:</strong> ลบเบส 1 ตัว &rarr; เลื่อน frame เช่นกัน</li>
        <li><span class="li-dot sc-dot"></span>ผลกระทบมาก — เปลี่ยน AA ตั้งแต่จุดที่ mutate ลงไป</li>
      </ul>
      <h4>สาเหตุ (Mutagens)</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>รังสี:</strong> UV (สร้าง pyrimidine dimers), X-ray, gamma (ตัด DNA)</li>
        <li><span class="li-dot sc-dot"></span><strong>สารเคมี:</strong> nitrous acid, benzopyrene (บุหรี่), formaldehyde</li>
        <li><span class="li-dot sc-dot"></span><strong>ไวรัส:</strong> บาง virus สอด DNA ตัวเองในจีโนม</li>
      </ul>
      <div class="note-box">⚠️ <strong>Mutation ไม่ใช่เรื่องเลวเสมอ:</strong> เป็นที่มาของ <strong>genetic variation</strong> และวิวัฒนาการ — เซลล์มี DNA repair mechanisms ที่แก้ผิดได้กว่า 99.99%</div>
    </div>

    <!-- 7. PCR & Genetic Tech -->
    <div class="content-section">
      <h3>🧪 เทคโนโลยีพันธุกรรม</h3>
      <h4>PCR (Polymerase Chain Reaction)</h4>
      <p>เพิ่มจำนวน DNA จากตัวอย่างเล็กน้อย → คิดค้นโดย <strong>Kary Mullis</strong> (1983, Nobel 1993)</p>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li><strong>Denaturation (95°C):</strong> ทำลาย H-bonds → DNA แยกเป็น 2 สาย</li>
        <li><strong>Annealing (~55°C):</strong> Primers จับ template</li>
        <li><strong>Extension (72°C):</strong> Taq polymerase (ทนความร้อน) สังเคราะห์สายใหม่</li>
      </ol>
      <div class="formula-box">
        <div class="formula-label">การเพิ่มจำนวน DNA</div>
        หลัง n รอบ &rarr; DNA เพิ่มเป็น <strong>2ⁿ เท่า</strong><br>
        30 รอบ &rarr; 2³⁰ ≈ 1 พันล้านเท่า (ในเวลา ~2-3 ชม)
      </div>
      <h4>Gel Electrophoresis</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>ใส่ DNA ใน agarose gel + กระแสไฟ</li>
        <li><span class="li-dot sc-dot"></span>DNA มีประจุลบ → เคลื่อนไปขั้วบวก</li>
        <li><span class="li-dot sc-dot"></span>ชิ้นเล็กเคลื่อนเร็วกว่า → แยก DNA ตามขนาด</li>
        <li><span class="li-dot sc-dot"></span>ใช้ในการ DNA fingerprint, ตรวจ paternity, นิติเวช</li>
      </ul>
      <h4>Recombinant DNA</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Restriction enzymes (EcoRI, BamHI, ฯลฯ)</strong> — ตัด DNA ที่ลำดับจำเพาะ → สร้าง <strong>sticky ends</strong></li>
        <li><span class="li-dot sc-dot"></span>ตัด DNA จาก 2 แหล่ง → ใช้ <strong>ligase</strong> เชื่อม → สร้าง DNA ผสม</li>
        <li><span class="li-dot sc-dot"></span>ใส่ใน <strong>plasmid</strong> ของแบคทีเรีย → กลายเป็น "โรงงานผลิตยีน"</li>
        <li><span class="li-dot sc-dot"></span><strong>การประยุกต์:</strong> ผลิต insulin, growth hormone, vaccine จากแบคทีเรีย</li>
      </ul>
    </div>

    <!-- 8. CRISPR + GMO -->
    <div class="content-section">
      <h3>✂️ CRISPR-Cas9 และ GMO</h3>
      <h4>CRISPR-Cas9 — "DNA scissors"</h4>
      <p>ค้นพบในแบคทีเรีย — ระบบภูมิคุ้มกันต่อ virus<br>
      ใช้แก้ไข DNA แม่นยำได้ตำแหน่งใด ๆ — โดย <strong>Jennifer Doudna</strong> และ <strong>Emmanuelle Charpentier</strong> (Nobel 2020)</p>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Guide RNA (gRNA)</strong> — บอก Cas9 ว่าจะตัดตรงไหน (จับคู่ DNA ด้วย complementary)</li>
        <li><span class="li-dot sc-dot"></span><strong>Cas9 enzyme</strong> — ตัด DNA ทั้ง 2 สาย</li>
        <li><span class="li-dot sc-dot"></span>เซลล์ซ่อมด้วย NHEJ (knock-out gene) หรือ HDR (knock-in gene)</li>
      </ul>
      <h4>การประยุกต์ของ CRISPR</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>รักษาโรคพันธุกรรม: sickle cell anemia, beta-thalassemia (อนุมัติแล้ว 2023)</li>
        <li><span class="li-dot sc-dot"></span>ปรับปรุงพืช: ข้าวทนแล้ง, มะเขือเทศไม่มียีนแพ้</li>
        <li><span class="li-dot sc-dot"></span>วิจัยมะเร็ง — สร้าง model cell lines ที่มี mutation จำเพาะ</li>
      </ul>
      <h4>GMO (Genetically Modified Organisms)</h4>
      <table class="content-table">
        <tr><th>GMO</th><th>ดัดแปลง</th><th>ประโยชน์</th></tr>
        <tr><td>Bt corn</td><td>ใส่ยีน Bt toxin จากแบคทีเรีย</td><td>ต้านแมลง</td></tr>
        <tr><td>Roundup Ready soybean</td><td>ทนยาฆ่าหญ้า</td><td>ปลูกง่าย ลดสารเคมี</td></tr>
        <tr><td>Golden Rice</td><td>ผลิต β-carotene (vit A)</td><td>แก้ปัญหาขาด vit A</td></tr>
        <tr><td>Recombinant Insulin</td><td>ผลิตในแบคทีเรีย</td><td>ราคาถูก ไม่ต้องใช้ตับอ่อนสัตว์</td></tr>
        <tr><td>GloFish</td><td>ยีน jellyfish เรืองแสง</td><td>ปลาสวยงาม</td></tr>
      </table>
      <div class="note-box">⚠️ <strong>ประเด็นจริยธรรม:</strong> Designer babies (เลือกลักษณะ), germline editing (เปลี่ยน DNA ที่ถ่ายทอด), ความเป็นเจ้าของยีน (patent), ผลกระทบต่อระบบนิเวศของ GMO</div>
    </div>

    <!-- ============ 32 PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — ประวัติการค้นพบ DNA</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — Griffith</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Griffith (1928) ค้นพบอะไรในการทดลอง pneumococcus?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ผสมแบคทีเรีย R (ไม่ก่อโรค) + S ที่ฆ่าด้วยความร้อน &rarr; ฉีดให้หนู &rarr; หนูตาย!<br>สรุป: มี "transforming principle" จาก S ถ่ายเข้า R ทำให้ R กลายเป็น S<br>ภายหลัง Avery-MacLeod-McCarty (1944) พิสูจน์ว่าคือ <strong>DNA</strong><br>💡 จุดเริ่มต้นของการค้นพบ DNA เป็นสารพันธุกรรม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — Hershey-Chase</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> การทดลอง Hershey-Chase (1952) พิสูจน์อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้ bacteriophage T2 — DNA ติด ³²P (ฟอสฟอรัส), protein ติด ³⁵S (กำมะถัน) &rarr; ติดเชื้อ E. coli &rarr; ปั่น blender &rarr; ตรวจว่ารังสีอะไรเข้าเซลล์<br>พบว่า <strong>³²P (DNA) เข้าเซลล์</strong> ไม่ใช่ ³⁵S (protein) &rarr; ยืนยัน DNA เป็นสารพันธุกรรม<br>💡 ก่อนหน้านี้นักวิทยาศาสตร์เชื่อว่าโปรตีนเป็นสารพันธุกรรม</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — Watson-Crick</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Watson และ Crick (1953) เสนออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Double Helix Model</strong> ของ DNA:<br>- 2 สาย antiparallel<br>- น้ำตาล-ฟอสเฟต เป็น backbone นอก<br>- เบสอยู่ใน เชื่อมด้วย H-bonds (A=T, G≡C)<br>- เกลียวขวา 10 base/turn<br>ใช้ข้อมูล X-ray ของ Rosalind Franklin (Photo 51) ที่ Wilkins มอบให้<br>💡 Nobel Prize ปี 1962 — Franklin ไม่ได้รับเพราะเสียชีวิตปี 1958</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: Meselson-Stahl</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Meselson-Stahl ใช้ ¹⁵N พิสูจน์อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> เลี้ยง E. coli ใน ¹⁵N (DNA หนัก) &rarr; ย้ายไป ¹⁴N (DNA เบา) &rarr; วัด density<br>หลัง replication 1 รอบ &rarr; ได้ DNA <strong>density กลาง</strong> (ไม่ใช่หนักหรือเบา)<br>หลัง 2 รอบ &rarr; 50% กลาง 50% เบา<br>ผลตรงกับ <strong>semi-conservative</strong> (ไม่ใช่ conservative หรือ dispersive)<br>💡 ถือเป็น "the most beautiful experiment in biology"</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — โครงสร้าง DNA</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — Chargaff's Rule</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> DNA มี A = 30% &rarr; หา T, G, C</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> A = T = <strong>30%</strong><br>A + T = 60% &rarr; G + C = 40% &rarr; G = C = <strong>20%</strong> แต่ละตัว<br>💡 จำว่า A=T, G=C เสมอ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — Base pairing</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม A คู่กับ T (2H) และ G คู่กับ C (3H)?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Purines (A,G) จับ Pyrimidines (T,C) — ขนาดและตำแหน่งอะตอมที่ form H-bond ต้องตรงกัน<br>A-T form ได้ 2 H-bonds (donor-acceptor คู่)<br>G-C form ได้ 3 H-bonds (3 คู่)<br>💡 DNA ที่มี G-C สูง = ทน heat กว่า (เพราะ 3 H-bonds)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — Antiparallel</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> "Antiparallel" ใน DNA หมายถึงอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> 2 สาย DNA วิ่งทิศ <strong>ตรงข้ามกัน</strong>:<br>สาย 1: 5' &rarr; 3'<br>สาย 2: 3' &rarr; 5'<br>ทำให้ deoxyribose ของ 2 สายอยู่ในตำแหน่งที่เบสจับคู่กันได้พอดี<br>💡 ส่งผลให้ replication ต้องมี leading vs lagging strand</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: ขนาด DNA</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> DNA ของมนุษย์ในเซลล์เดียวยาว ~2 เมตร — เก็บใน nucleus ขนาด 10 µm ได้อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ผ่านการพันและขด:<br>1) DNA พันรอบ <strong>histone</strong> (8 histones) &rarr; nucleosome ("beads on string")<br>2) Nucleosomes ขดเป็น <strong>chromatin fiber (30 nm)</strong><br>3) Chromatin loops เกาะกับ scaffold protein<br>4) สุดท้ายขดเป็น <strong>chromosome</strong> หนาแน่นใน metaphase<br>การอัด: ~10,000 เท่า<br>💡 ถ้าวาง DNA ของ 1 คนเรียงต่อกัน = ระยะทางไป-กลับดวงอาทิตย์หลายร้อยรอบ</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — Replication</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — Helicase</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Helicase ทำหน้าที่อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>คลายเกลียว DNA</strong> โดยทำลาย H-bonds ระหว่าง base pairs &rarr; แยก DNA เป็น 2 single strands &rarr; ใช้ ATP เป็นพลังงาน<br>เปิด <strong>replication fork</strong> ที่ใช้สำหรับ synthesis<br>💡 ทำงานคล้ายซิป ที่ดึงออก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — Leading vs Lagging</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Leading และ Lagging strand ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Leading:</strong> สังเคราะห์ <strong>ต่อเนื่อง</strong> ทิศ 5'&rarr;3' ตาม fork ที่เปิด — ต้องการ primer 1 ตัว<br><strong>Lagging:</strong> สังเคราะห์เป็น <strong>ชิ้น (Okazaki fragments)</strong> ทิศตรงข้าม — ต้องการ primer หลาย ๆ ตัว<br>เพราะ DNA polymerase สังเคราะห์ได้เฉพาะ 5'&rarr;3'<br>💡 Ligase เชื่อม Okazaki fragments ในภายหลัง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — Primer</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม DNA Replication ต้องการ RNA primer?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> DNA polymerase ต้องมี <strong>3' OH ที่เริ่ม</strong> ก่อนจึงจะใส่ nucleotide ใหม่ได้ — ไม่สามารถสร้างจากศูนย์<br>Primase สร้าง <strong>RNA primer สั้น (~10 nt)</strong> ที่มี 3' OH ให้ polymerase เริ่ม<br>ภายหลัง DNA Pol I แทนที่ RNA primer ด้วย DNA<br>💡 ในการทดลอง PCR ใช้ DNA primer แทน (ออกแบบเอง)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: Telomere</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เพราะอะไร telomere สั้นลงทุกครั้งที่ replicate?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ที่ปลาย chromosome เมื่อ RNA primer สุดท้ายของ lagging strand ถูกถอด → ไม่มี 3' OH ให้ polymerase ติด → <strong>end-replication problem</strong><br>ทุก replication telomere สั้นลง ~50-100 bp<br>หลังหลายรอบ → cells หยุดแบ่ง (senescence) — เกี่ยวกับการแก่<br>เซลล์มะเร็งและ stem cells มี <strong>telomerase</strong> เพิ่มความยาว telomere &rarr; แบ่งไม่จำกัด<br>💡 Elizabeth Blackburn ได้ Nobel ปี 2009 สำหรับการค้นพบ telomerase</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — Transcription</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — DNA → mRNA</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Template DNA = 3'-TACGGAATC-5' → mRNA = ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>5'-AUGCCUUAG-3'</strong><br>จับคู่: A-U, T-A, G-C, C-G — และอ่านทิศตรงข้าม<br>💡 ระวัง: ใน RNA ใช้ U แทน T</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — RNA Polymerase vs DNA Pol</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> RNA Polymerase ต่างจาก DNA Polymerase อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>RNA Pol: สร้าง mRNA ใช้ NTP, <strong>ไม่ต้องการ primer</strong>, ไม่มี proofreading (มี error rate สูงกว่า)<br>DNA Pol: สร้าง DNA ใช้ dNTP, ต้องการ primer, มี proofreading 3'&rarr;5' exonuclease<br>💡 RNA Pol error rate ~1 ใน 10⁴-10⁵; DNA Pol ~1 ใน 10⁹-10¹⁰</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — Splicing</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Introns และ Exons คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Exons:</strong> ส่วนที่ "expressed" — จะอยู่ในโปรตีนสุดท้าย<br><strong>Introns:</strong> ส่วน "intervening" — ถูกตัดออกใน splicing<br>เกิดในนิวเคลียสของ eukaryotes โดย <strong>spliceosome</strong><br>💡 จำง่าย: in→tron stay <strong>in</strong> the nucleus (ตัดออก), ex→on go <strong>out</strong> (เข้าสู่โปรตีน)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: Alternative Splicing</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Alternative splicing สำคัญอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> 1 ยีน สามารถสร้างได้ <strong>หลายโปรตีน</strong> โดยรวม exons ในรูปแบบต่าง ๆ<br>มนุษย์มียีน ~20,000 แต่สร้างโปรตีน &gt; 100,000 ชนิด<br>ตัวอย่าง: ยีน Tropomyosin สร้างได้ 30+ isoforms ใช้ในกล้ามเนื้อต่างกัน<br>💡 อธิบายว่าทำไมมนุษย์มียีนพอ ๆ กับหนอนเล็ก แต่ซับซ้อนกว่ามาก</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — Translation</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — Codon</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> มี codon ทั้งหมดกี่ตัว และเข้ารหัสกรดอะมิโนกี่ชนิด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> 4 เบส × 3 ตำแหน่ง = <strong>4³ = 64 codons</strong><br>เข้ารหัส <strong>20 amino acids</strong> + 3 stop codons (UAA, UAG, UGA)<br>เป็น <strong>degenerate code</strong> — 1 amino acid อาจมีหลาย codons<br>💡 Start codon AUG = Methionine</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — tRNA</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> tRNA ทำหน้าที่อะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>"ตัวแปลรหัส"</strong> — มี anticodon ที่จับกับ codon ของ mRNA และพา amino acid ที่ตรงกัน<br>โครงสร้างเหมือนตัว L:<br>- ปลาย 3' จับ amino acid<br>- ห่วงกลางมี anticodon (3 nt)<br>มี tRNA ~30-40 ชนิด ในเซลล์ — ใช้ wobble pairing<br>💡 Aminoacyl-tRNA synthetase ทำหน้าที่จับคู่ tRNA กับ AA ที่ถูก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — Polysome</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Polysome คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> mRNA 1 ตัวมี ribosomes <strong>หลายตัว</strong> ทำงานพร้อมกัน — สร้างโปรตีนได้หลาย copies จาก mRNA เดียวกัน<br>เพิ่มประสิทธิภาพ translation มาก<br>💡 พบมากในเซลล์ที่ผลิตโปรตีนรวดเร็ว เช่น เซลล์ตับ ต่อมไร้ท่อ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: Antibiotics</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ยาปฏิชีวนะ tetracycline ทำงานอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Tetracycline จับกับ <strong>ribosome 30S</strong> ของแบคทีเรีย → ขัดขวางการจับของ tRNA → <strong>หยุด translation</strong> → แบคทีเรียตาย<br>ไม่ทำลายเซลล์มนุษย์เพราะ ribosome 80S โครงสร้างต่าง<br>ยาอื่น ๆ ที่โจมตี translation: streptomycin (30S), erythromycin (50S), chloramphenicol (50S)<br>💡 จึงเป็น "selective toxicity"</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — Mutations</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — Silent vs Missense</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ความต่างระหว่าง silent, missense, nonsense mutations?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Silent:</strong> เปลี่ยน codon แต่ AA เหมือนเดิม (degenerate code)<br><strong>Missense:</strong> เปลี่ยน AA &rarr; โปรตีนต่าง<br><strong>Nonsense:</strong> เปลี่ยนเป็น stop codon &rarr; โปรตีนสั้น<br>💡 ตัวอย่าง sickle cell = missense (Glu &rarr; Val)</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — Frameshift</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม Frameshift mutations จึงรุนแรงกว่า point mutations?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Frameshift (insertion/deletion 1 เบส) เปลี่ยน <strong>reading frame</strong> ทั้งหมดตั้งแต่จุดที่ mutate ลงไป → <strong>ทุก AA ตั้งแต่จุดนั้นเปลี่ยน</strong><br>มักเจอ stop codon เร็ว &rarr; โปรตีนสั้นและไม่ทำงาน<br>💡 ถ้าใส่/ลบ 3 เบส (1 codon) ไม่เปลี่ยน frame</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — UV</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> UV ทำให้ DNA เสียหายอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> UV ทำให้ pyrimidine 2 ตัวข้างกันจับกันเป็น <strong>thymine dimer (T-T dimer)</strong> &rarr; ขัดขวาง replication และ transcription<br>เซลล์มีระบบ <strong>nucleotide excision repair</strong> ตัด dimer ออก<br>ผู้ป่วย <strong>Xeroderma pigmentosum</strong> ขาด repair → ผิวไวต่อ UV → เป็นมะเร็งผิวหนังง่ายมาก<br>💡 จึงต้องทา sunscreen ปกป้องผิว</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: Beneficial mutation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ยกตัวอย่าง mutation ที่เป็นประโยชน์</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(1) <strong>Lactase persistence:</strong> mutation ทำให้ผู้ใหญ่ย่อยนมได้ — พบมากในยุโรปและแอฟริกาเลี้ยงวัว<br>(2) <strong>CCR5-Δ32:</strong> ป้องกัน HIV (ไม่มี receptor บนเซลล์ T)<br>(3) <strong>Sickle cell trait (heterozygous):</strong> ป้องกันมาลาเรีย<br>(4) <strong>Bacteria antibiotic resistance:</strong> ดีต่อแบคทีเรีย (แม้ไม่ดีต่อเรา)<br>💡 "ประโยชน์" ขึ้นกับสิ่งแวดล้อม — เปลี่ยนได้</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — PCR &amp; Cloning</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — PCR steps</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> 3 ขั้นของ PCR แต่ละขั้นอุณหภูมิเท่าใด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>1) <strong>Denaturation (95°C):</strong> แยก DNA เป็น 2 สาย<br>2) <strong>Annealing (~55°C):</strong> primers จับ template<br>3) <strong>Extension (72°C):</strong> Taq polymerase สังเคราะห์<br>30 รอบ &rarr; 2³⁰ = ~1 พันล้านเท่า<br>💡 Taq มาจาก <em>Thermus aquaticus</em> ในบ่อน้ำพุร้อน Yellowstone — ทนความร้อน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — COVID PCR</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> PCR test สำหรับ COVID-19 ทำอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> SARS-CoV-2 เป็น <strong>RNA virus</strong> ต้องใช้ <strong>RT-PCR</strong>:<br>1) เก็บตัวอย่าง (nasal swab)<br>2) สกัด RNA<br>3) <strong>Reverse transcription (RT):</strong> RNA &rarr; cDNA<br>4) PCR เพิ่มจำนวน cDNA<br>5) ตรวจด้วย fluorescent probe<br>💡 จึงเรียก "RT-PCR" — sensitive และ specific สูงมาก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — Gel electrophoresis</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Gel electrophoresis แยก DNA อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใส่ DNA ใน agarose gel + กระแสไฟ<br>DNA มี <strong>ประจุลบ (จากฟอสเฟต)</strong> → เคลื่อนไปขั้วบวก<br>DNA <strong>เล็กเคลื่อนเร็ว</strong> ผ่าน gel matrix → ไกลกว่า<br>ใหญ่ติดอยู่ใกล้บ่อ<br>เปรียบเทียบกับ ladder (size standard)<br>💡 ใช้สี EtBr หรือ SYBR แต้มเห็น DNA</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: Recombinant Insulin</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ผลิตอินซูลินจากแบคทีเรียได้อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ขั้นตอน:<br>1) ตัดยีน insulin มนุษย์ด้วย <strong>restriction enzyme</strong> (เช่น EcoRI)<br>2) ตัด plasmid ของ E. coli ด้วย EcoRI เดียวกัน → ได้ sticky ends ตรงกัน<br>3) ใช้ <strong>ligase</strong> เชื่อม insulin gene เข้า plasmid<br>4) ใส่ plasmid กลับเข้า E. coli (transformation)<br>5) เลี้ยง E. coli &rarr; ผลิต insulin ในจำนวนมาก<br>6) สกัดและทำให้บริสุทธิ์<br>💡 ลดราคา insulin จากแหล่งดั้งเดิม (ตับอ่อนวัว/หมู) — เปิดยุค biotech</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — CRISPR &amp; Ethics</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — CRISPR ทำงาน</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> CRISPR-Cas9 ทำงานอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> 2 องค์ประกอบหลัก:<br>(1) <strong>Guide RNA (gRNA)</strong> — ออกแบบให้คู่กับ DNA ที่ต้องการตัด<br>(2) <strong>Cas9 enzyme</strong> — เป็น "กรรไกร" ตัด DNA<br>เซลล์ซ่อม DNA ด้วย:<br>- <strong>NHEJ:</strong> ซ่อมหยาบ ๆ &rarr; knock-out yีน<br>- <strong>HDR:</strong> ใช้ template &rarr; ใส่/แก้ไขยีนตรงเป๊ะ<br>💡 ต้นกำเนิดจากระบบ "ภูมิคุ้มกัน" ของแบคทีเรียที่ต่อสู้กับ virus</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — Golden Rice</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Golden Rice คืออะไรและแก้ปัญหาอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ข้าวที่ดัดแปลงพันธุกรรมให้ผลิต <strong>β-carotene</strong> (สารตั้งต้นของ vitamin A) — มีสีเหลืองทอง<br>แก้ปัญหา <strong>vitamin A deficiency</strong> ในประเทศกำลังพัฒนา → ตาบอด ระบบภูมิคุ้มกันอ่อน ตายในเด็ก<br>WHO ประมาณ 500,000 เด็กตาบอดต่อปี — 50% ตายภายในปีแรก<br>มีการต่อต้านจาก anti-GMO movement → ทำให้ล่าช้า ~20 ปี<br>💡 ตัวอย่างที่ดีของ "GMO เพื่อมนุษยธรรม"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — Bt corn</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Bt corn ป้องกันแมลงอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใส่ยีน <strong>Bt toxin</strong> จากแบคทีเรีย <em>Bacillus thuringiensis</em> เข้าจีโนมข้าวโพด → ข้าวโพดผลิต Cry protein ในใบ<br>เมื่อแมลงกิน → Cry protein จับ midgut receptor → ทำให้ลำไส้ทะลุ → แมลงตาย<br>ไม่อันตรายกับสัตว์เลี้ยงลูกด้วยนม (ไม่มี receptor)<br>ลดการใช้ยาฆ่าแมลง 30-40%<br>💡 ปัจจุบัน &gt; 90% ของข้าวโพดในอเมริกาเป็น GMO</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: Designer babies</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ปัญหาจริยธรรมของ "designer babies" คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> CRISPR อาจใช้:<br>- รักษาโรคพันธุกรรมรุนแรง (ดี ทุกคนเห็นด้วย)<br>- เพิ่มความฉลาด · ความสูง · กล้ามเนื้อ (ปัญหาจริยธรรม)<br>ความกังวล:<br>(1) <strong>Eugenics:</strong> ความเหลื่อมล้ำ — เฉพาะคนรวยทำได้<br>(2) <strong>Germline editing:</strong> เปลี่ยน DNA ที่ส่งต่อทุกรุ่น — irreversible<br>(3) <strong>Unintended effects:</strong> off-target mutations<br>(4) <strong>Loss of diversity:</strong> ทุกคน "perfect" เหมือนกัน → เสี่ยงต่อโรคใหม่<br>ในปี 2018 He Jiankui (จีน) ทำ CRISPR ใน embryo เพื่อทำให้ป้องกัน HIV → ถูกตัดสินจำคุก 3 ปี<br>💡 WHO และวงการวิทยาศาสตร์ระงับ germline editing ในมนุษย์ชั่วคราว</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>DNA:</strong> Double helix · antiparallel · A=T, G≡C · Chargaff<br>
        <strong>Replication:</strong> Semi-conservative · Helicase · Polymerase 5'&rarr;3' · Leading/Lagging · Ligase<br>
        <strong>Transcription:</strong> DNA → mRNA · RNA Pol · cap + tail + splicing<br>
        <strong>Translation:</strong> mRNA → Protein · Ribosome + tRNA · 64 codons · AUG = start<br>
        <strong>Mutations:</strong> Silent · Missense · Nonsense · Frameshift<br>
        <strong>Tech:</strong> PCR (2ⁿ) · Restriction enzyme · CRISPR-Cas9
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>DNA Polymerase สังเคราะห์ได้ทั้ง 2 ทิศ</td><td>เฉพาะ <strong>5'&rarr;3'</strong> เท่านั้น</td></tr>
        <tr><td>U (uracil) อยู่ใน DNA</td><td>U อยู่ใน <strong>RNA</strong> เท่านั้น (DNA ใช้ T)</td></tr>
        <tr><td>Translation เกิดในนิวเคลียส</td><td>เกิดที่ <strong>ribosome ในไซโทพลาซึม</strong></td></tr>
        <tr><td>1 codon = 1 amino acid (1:1)</td><td>1 amino acid อาจมีหลาย codons (degenerate)</td></tr>
        <tr><td>Mutations เลวเสมอ</td><td>สามารถเป็นกลาง เลว หรือดี — ขึ้นกับสภาพ</td></tr>
        <tr><td>GMO อันตรายทุกชนิด</td><td>ขึ้นกับชนิด — มีงานวิจัยมากว่า 30 ปี แสดงว่าปลอดภัย</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> จำคู่ Replication-Transcription-Translation: <strong>"3 R-T-T"</strong> &middot; DNA pol vs RNA pol &middot; codon vs anticodon</div>
    </div>
  `,
  b3c12: `
    <!-- TOC -->
    <div class="content-section">
      <h3>📋 หัวข้อที่จะได้เรียนในบทนี้</h3>
      <div class="formula-box">
        <div class="formula-label">โครงเรื่องของบท</div>
        <strong>01</strong> Darwin และการเดินทาง HMS Beagle<br>
        <strong>02</strong> ทฤษฎี Natural Selection<br>
        <strong>03</strong> หลักฐานของวิวัฒนาการ 6 ด้าน<br>
        <strong>04</strong> กลไกวิวัฒนาการ: Mutation · Selection · Drift · Gene Flow<br>
        <strong>05</strong> Hardy-Weinberg Equilibrium<br>
        <strong>06</strong> Speciation: Allopatric · Sympatric<br>
        <strong>07</strong> Phylogenetic Tree &amp; วิวัฒนาการมนุษย์<br>
        <strong>08</strong> ความเข้าใจผิดและการประยุกต์
      </div>
      <div class="tip-box">💡 Theodosius Dobzhansky: "<em>Nothing in biology makes sense except in the light of evolution</em>" — วิวัฒนาการเป็นแก่นของชีววิทยาทั้งหมด</div>
    </div>

    <!-- 1. Darwin -->
    <div class="content-section">
      <h3>🦕 Charles Darwin และการเดินทาง HMS Beagle</h3>
      <p><strong>Charles Darwin</strong> (1809-1882) นักธรรมชาติวิทยาชาวอังกฤษ — เดินทางรอบโลกบนเรือ HMS Beagle (1831-1836) สังเกตสิ่งมีชีวิตในที่ต่าง ๆ โดยเฉพาะ <strong>หมู่เกาะกาลาปากอส</strong></p>
      <h4>การสังเกตที่สำคัญ</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>นกฟินช์ของ Darwin (Darwin's finches):</strong> แต่ละเกาะมีรูปจะงอยปากต่างกันตามอาหาร</li>
        <li><span class="li-dot sc-dot"></span><strong>เต่ายักษ์ Galápagos:</strong> รูปทรงเปลือกต่างกันในแต่ละเกาะ</li>
        <li><span class="li-dot sc-dot"></span><strong>ฟอสซิลในอเมริกาใต้:</strong> สัตว์ใหญ่ (megafauna) ที่สูญพันธุ์ คล้ายสัตว์ปัจจุบัน</li>
      </ul>
      <h4>หนังสือสำคัญ</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>"On the Origin of Species" (1859)</strong> — เสนอทฤษฎี Natural Selection</li>
        <li><span class="li-dot sc-dot"></span><strong>"The Descent of Man" (1871)</strong> — เกี่ยวกับวิวัฒนาการมนุษย์</li>
      </ul>
      <div class="note-box">⚠️ <strong>Alfred Russel Wallace</strong> ค้นพบ Natural Selection โดยอิสระในเวลาเดียวกัน — เสนอร่วมกับ Darwin ที่ Linnean Society (1858) แต่ Darwin มีหลักฐานมากกว่าและตีพิมพ์หนังสือก่อน</div>
    </div>

    <!-- 2. Natural Selection + SVG -->
    <div class="content-section">
      <h3>🧪 ทฤษฎี Natural Selection</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Natural Selection 4 หลักการ</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- 1 Variation -->
            <rect x="20" y="50" width="120" height="160" fill="#DBEAFE" stroke="#1E40AF" stroke-width="2" rx="8"/>
            <text x="80" y="70" text-anchor="middle" font-weight="700" fill="#1E40AF" font-size="11">1. Variation</text>
            <text x="80" y="83" text-anchor="middle" font-size="9" fill="#1E40AF">ความแปรผัน</text>
            <circle cx="50" cy="110" r="10" fill="#3B82F6"/>
            <circle cx="80" cy="110" r="14" fill="#3B82F6"/>
            <circle cx="115" cy="110" r="8" fill="#3B82F6"/>
            <circle cx="50" cy="150" r="12" fill="#3B82F6"/>
            <circle cx="85" cy="150" r="9" fill="#3B82F6"/>
            <circle cx="115" cy="150" r="11" fill="#3B82F6"/>
            <text x="80" y="195" text-anchor="middle" font-size="9" fill="#1E40AF">ตัวต่างขนาด/สี</text>

            <!-- Arrow -->
            <path d="M 145 130 L 165 130" stroke="#065F46" stroke-width="2" marker-end="url(#arrNS)"/>

            <!-- 2 Heritable -->
            <rect x="170" y="50" width="120" height="160" fill="#FEF3C7" stroke="#B45309" stroke-width="2" rx="8"/>
            <text x="230" y="70" text-anchor="middle" font-weight="700" fill="#B45309" font-size="11">2. Heritable</text>
            <text x="230" y="83" text-anchor="middle" font-size="9" fill="#B45309">ถ่ายทอดได้</text>
            <text x="230" y="120" text-anchor="middle" font-size="20">🧬</text>
            <text x="230" y="155" text-anchor="middle" font-size="9" fill="#B45309">ลักษณะมาจากยีน</text>
            <text x="230" y="170" text-anchor="middle" font-size="9" fill="#B45309">ส่งสู่ลูก</text>

            <!-- Arrow -->
            <path d="M 295 130 L 315 130" stroke="#065F46" stroke-width="2" marker-end="url(#arrNS)"/>

            <!-- 3 Differential Survival -->
            <rect x="320" y="50" width="120" height="160" fill="#FFE4E6" stroke="#9F1239" stroke-width="2" rx="8"/>
            <text x="380" y="70" text-anchor="middle" font-weight="700" fill="#9F1239" font-size="11">3. Selection</text>
            <text x="380" y="83" text-anchor="middle" font-size="9" fill="#9F1239">ผู้เหมาะรอด</text>
            <circle cx="345" cy="110" r="8" fill="#9F1239"/>
            <text x="345" y="113" text-anchor="middle" font-size="8" fill="white">x</text>
            <circle cx="380" cy="110" r="14" fill="#F43F5E"/>
            <text x="380" y="114" text-anchor="middle" font-size="9" fill="white">✓</text>
            <circle cx="415" cy="110" r="9" fill="#9F1239"/>
            <text x="415" y="113" text-anchor="middle" font-size="8" fill="white">x</text>
            <text x="380" y="170" text-anchor="middle" font-size="9" fill="#9F1239">รอด+สืบพันธุ์เก่ง</text>

            <!-- Arrow -->
            <path d="M 445 130 L 465 130" stroke="#065F46" stroke-width="2" marker-end="url(#arrNS)"/>

            <!-- 4 Evolution -->
            <rect x="465" y="50" width="40" height="160" fill="#D1FAE5" stroke="#065F46" stroke-width="2" rx="6"/>
            <text x="485" y="120" text-anchor="middle" font-weight="700" fill="#065F46" font-size="10" transform="rotate(-90 485 120)">EVOLUTION</text>
          </g>
          <defs><marker id="arrNS" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="#065F46"/></marker></defs>
        </svg>
        <div class="bio-svg-caption">ภาพ 1: 4 หลักการของ Natural Selection — Variation → Heritable → Selection → Evolution</div>
      </div>

      <ol style="padding-left:18px;color:var(--muted);line-height:1.95;">
        <li><strong>Variation (ความแปรผัน):</strong> ในประชากร สิ่งมีชีวิตมีลักษณะแตกต่างกัน (มาจาก mutation + recombination)</li>
        <li><strong>Heritable (ถ่ายทอดได้):</strong> ลักษณะหลายอย่างเป็นทางพันธุกรรม ส่งสู่ลูก</li>
        <li><strong>Differential Survival &amp; Reproduction:</strong> ผู้ที่เหมาะกับสภาพแวดล้อม <strong>รอด</strong> และ <strong>สืบพันธุ์</strong> ได้มากกว่า</li>
        <li><strong>Evolution:</strong> ในระยะยาว <strong>ความถี่ของ allele</strong> ในประชากรเปลี่ยน → สปีชีส์เปลี่ยน</li>
      </ol>
      <div class="formula-box">
        <div class="formula-label">"Survival of the Fittest"</div>
        Fittest = เหมาะกับ <strong>สภาพแวดล้อมตอนนี้</strong> (ไม่ใช่ "แข็งแกร่งที่สุด")<br>
        Fitness = ความสามารถในการ <strong>สืบพันธุ์ส่งลูก</strong> ไปยังรุ่นต่อไป
      </div>
    </div>

    <!-- 3. หลักฐาน + SVG -->
    <div class="content-section">
      <h3>🦴 หลักฐานของวิวัฒนาการ 6 ด้าน</h3>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Homologous Structures — บรรพบุรุษร่วม</text>
          <g font-family="Sarabun" font-size="10" fill="#1E293B">
            <!-- Human arm -->
            <g>
              <text x="80" y="55" text-anchor="middle" font-weight="700" fill="#9F1239">มนุษย์</text>
              <ellipse cx="80" cy="80" rx="22" ry="14" fill="#FFE4E6" stroke="#9F1239"/>
              <text x="80" y="83" text-anchor="middle" font-size="8">humerus</text>
              <line x1="80" y1="95" x2="65" y2="125" stroke="#9F1239" stroke-width="3"/>
              <line x1="80" y1="95" x2="95" y2="125" stroke="#9F1239" stroke-width="3"/>
              <text x="55" y="135" font-size="8">radius</text>
              <text x="98" y="135" font-size="8">ulna</text>
              <g stroke="#9F1239" stroke-width="2">
                <line x1="55" y1="145" x2="50" y2="170"/>
                <line x1="65" y1="145" x2="65" y2="172"/>
                <line x1="75" y1="145" x2="80" y2="172"/>
                <line x1="85" y1="145" x2="95" y2="170"/>
                <line x1="95" y1="145" x2="110" y2="165"/>
              </g>
              <text x="80" y="190" text-anchor="middle" font-size="9" fill="#9F1239">5 นิ้ว</text>
            </g>

            <!-- Whale flipper -->
            <g>
              <text x="200" y="55" text-anchor="middle" font-weight="700" fill="#1E40AF">วาฬ</text>
              <ellipse cx="200" cy="80" rx="22" ry="14" fill="#DBEAFE" stroke="#1E40AF"/>
              <line x1="200" y1="95" x2="185" y2="120" stroke="#1E40AF" stroke-width="3"/>
              <line x1="200" y1="95" x2="215" y2="120" stroke="#1E40AF" stroke-width="3"/>
              <g stroke="#1E40AF" stroke-width="2">
                <line x1="175" y1="140" x2="170" y2="170"/>
                <line x1="185" y1="140" x2="185" y2="175"/>
                <line x1="195" y1="140" x2="200" y2="178"/>
                <line x1="210" y1="140" x2="215" y2="175"/>
                <line x1="220" y1="140" x2="230" y2="170"/>
              </g>
              <ellipse cx="200" cy="155" rx="35" ry="25" fill="none" stroke="#1E40AF" stroke-width="1" stroke-dasharray="3 2"/>
              <text x="200" y="200" text-anchor="middle" font-size="9" fill="#1E40AF">flipper</text>
            </g>

            <!-- Bat wing -->
            <g>
              <text x="320" y="55" text-anchor="middle" font-weight="700" fill="#065F46">ค้างคาว</text>
              <ellipse cx="320" cy="80" rx="22" ry="14" fill="#D1FAE5" stroke="#065F46"/>
              <line x1="320" y1="95" x2="305" y2="120" stroke="#065F46" stroke-width="3"/>
              <line x1="320" y1="95" x2="335" y2="120" stroke="#065F46" stroke-width="3"/>
              <g stroke="#065F46" stroke-width="2">
                <line x1="305" y1="135" x2="295" y2="180"/>
                <line x1="310" y1="135" x2="310" y2="185"/>
                <line x1="320" y1="135" x2="335" y2="190"/>
                <line x1="330" y1="135" x2="355" y2="185"/>
              </g>
              <path d="M 295 180 Q 320 195 355 185" fill="#A7F3D0" stroke="#065F46" stroke-width="1" opacity="0.5"/>
              <text x="320" y="210" text-anchor="middle" font-size="9" fill="#065F46">ปีก</text>
            </g>

            <!-- Bird wing -->
            <g>
              <text x="440" y="55" text-anchor="middle" font-weight="700" fill="#B45309">นก</text>
              <ellipse cx="440" cy="80" rx="22" ry="14" fill="#FEF3C7" stroke="#B45309"/>
              <line x1="440" y1="95" x2="430" y2="120" stroke="#B45309" stroke-width="3"/>
              <line x1="440" y1="95" x2="450" y2="120" stroke="#B45309" stroke-width="3"/>
              <g stroke="#B45309" stroke-width="2">
                <line x1="430" y1="140" x2="420" y2="170"/>
                <line x1="440" y1="140" x2="450" y2="170"/>
                <line x1="450" y1="140" x2="475" y2="160"/>
              </g>
              <path d="M 420 170 Q 440 175 475 160" fill="#FDE68A" stroke="#B45309" stroke-width="1" opacity="0.5"/>
              <text x="440" y="200" text-anchor="middle" font-size="9" fill="#B45309">ปีก</text>
            </g>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 2: Homologous Structures — กระดูกแขนหน้าของสัตว์เลี้ยงลูกด้วยนม 4 ชนิดมีโครงสร้างเดียวกันแต่ทำหน้าที่ต่าง</div>
      </div>

      <table class="content-table">
        <tr><th>ประเภท</th><th>ตัวอย่าง</th></tr>
        <tr><td>1. Fossil record (ฟอสซิล)</td><td><em>Archaeopteryx</em> — ระหว่างไดโนเสาร์กับนก, <em>Tiktaalik</em> — ระหว่างปลากับสัตว์บก</td></tr>
        <tr><td>2. Comparative Anatomy</td><td>Homologous (กระดูกแขนคน-วาฬ-ค้างคาว), Vestigial (ไส้ติ่ง, coccyx, ตาในงู)</td></tr>
        <tr><td>3. Comparative Embryology</td><td>Embryo ของ vertebrates คล้ายกันในระยะแรก (เหงือก หาง)</td></tr>
        <tr><td>4. Biogeography</td><td>กระเป๋าหน้าท้องในออสเตรเลีย · นกบนเกาะที่แยกตัว</td></tr>
        <tr><td>5. Molecular Biology</td><td>DNA มนุษย์-ชิมแปนซี ใกล้กัน 98.8% · ทุกสิ่งมีชีวิตใช้ ATP และ universal genetic code</td></tr>
        <tr><td>6. Direct Observation</td><td>แบคทีเรียดื้อยาปฏิชีวนะ · ผีเสื้อ peppered moth ในยุค Industrial Revolution</td></tr>
      </table>
      <div class="tip-box">💡 <strong>Vestigial structures</strong> = โครงสร้างที่ลดบทบาท เช่น ไส้ติ่งของมนุษย์ (เคยใช้ย่อยใบไม้), กระดูกขาในงูเหลือม</div>
    </div>

    <!-- 4. กลไก -->
    <div class="content-section">
      <h3>🧬 กลไกของวิวัฒนาการ</h3>
      <table class="content-table">
        <tr><th>กลไก</th><th>คำอธิบาย</th><th>ตัวอย่าง</th></tr>
        <tr><td>Mutation</td><td>แหล่งกำเนิด variation ใหม่ — สุ่ม</td><td>การกลายพันธุ์ของแบคทีเรีย</td></tr>
        <tr><td>Natural Selection</td><td>คัดเลือกผู้เหมาะ — ไม่สุ่ม</td><td>แบคทีเรียดื้อยา</td></tr>
        <tr><td>Genetic Drift</td><td>การเปลี่ยน allele frequency แบบสุ่ม</td><td>Bottleneck (สึนามิ), Founder effect</td></tr>
        <tr><td>Gene Flow</td><td>การย้าย allele ระหว่างประชากร</td><td>คนที่อพยพไปอีกประเทศ</td></tr>
        <tr><td>Sexual Selection</td><td>การคัดเลือกจากคู่ผสมพันธุ์</td><td>หางนกยูง · เขากวาง</td></tr>
        <tr><td>Non-random mating</td><td>เลือกคู่ตามลักษณะ</td><td>คนเลือกคู่ที่มีลักษณะคล้ายกัน</td></tr>
      </table>
      <h4>ประเภทของ Natural Selection 3 รูปแบบ</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Directional:</strong> ดันไปทางใดทางหนึ่ง — เช่น ยีราฟคอยาวขึ้น</li>
        <li><span class="li-dot sc-dot"></span><strong>Stabilizing:</strong> รักษาค่ากลาง — เช่น น้ำหนักทารกเฉลี่ย ~3 kg (เล็กไป-ใหญ่ไปเสี่ยงตาย)</li>
        <li><span class="li-dot sc-dot"></span><strong>Disruptive (Diversifying):</strong> เลือก 2 ค่าสุดขั้ว — เช่น นกฟินช์ปากเล็กและใหญ่ที่กินอาหารต่างกัน</li>
      </ul>
      <div class="note-box">⚠️ <strong>Genetic Drift</strong> สำคัญมากในประชากรเล็ก — ทำให้ allele บางตัว <strong>หายไป</strong> หรือ <strong>fix</strong> ที่ 100% โดยบังเอิญ (ไม่เกี่ยวกับ fitness)</div>
    </div>

    <!-- 5. Hardy-Weinberg + SVG -->
    <div class="content-section">
      <h3>📊 Hardy-Weinberg Equilibrium</h3>
      <p>หลักการที่ Godfrey Hardy และ Wilhelm Weinberg เสนอ (1908) — ในสภาวะที่ไม่มี force ใด ๆ ความถี่ของ alleles ในประชากรจะ <strong>คงที่จากรุ่นสู่รุ่น</strong></p>

      <div class="bio-svg-wrap">
        <svg class="bio-svg" viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg">
          <text x="260" y="22" text-anchor="middle" font-family="Prompt" font-size="14" font-weight="700" fill="#065F46">Hardy-Weinberg Equation</text>
          <g font-family="Sarabun" font-size="11" fill="#1E293B">
            <rect x="60" y="50" width="400" height="100" fill="#D1FAE5" stroke="#065F46" stroke-width="2" rx="12"/>
            <text x="260" y="85" text-anchor="middle" font-family="Prompt" font-weight="700" font-size="22" fill="#065F46">p² + 2pq + q² = 1</text>
            <text x="260" y="115" text-anchor="middle" font-family="Prompt" font-weight="700" font-size="18" fill="#065F46">p + q = 1</text>

            <text x="60" y="170" font-size="10" fill="#065F46"><tspan font-weight="700">p</tspan> = ความถี่ของ allele เด่น (A)</text>
            <text x="200" y="170" font-size="10" fill="#065F46"><tspan font-weight="700">q</tspan> = ความถี่ของ allele ด้อย (a)</text>
            <text x="340" y="170" font-size="10" fill="#065F46"><tspan font-weight="700">p² · 2pq · q²</tspan> = AA, Aa, aa</text>
          </g>
        </svg>
        <div class="bio-svg-caption">ภาพ 3: สมการ Hardy-Weinberg</div>
      </div>

      <h4>เงื่อนไข Hardy-Weinberg Equilibrium (5 ข้อ)</h4>
      <ol style="padding-left:18px;color:var(--muted);line-height:1.9;">
        <li><strong>ไม่มี Mutation</strong></li>
        <li><strong>ไม่มี Natural Selection</strong></li>
        <li><strong>ไม่มี Gene Flow</strong> (ไม่มีการอพยพ)</li>
        <li><strong>ไม่มี Genetic Drift</strong> (ประชากรใหญ่มาก)</li>
        <li><strong>Random Mating</strong></li>
      </ol>
      <div class="formula-box">
        <div class="formula-label">ตัวอย่างการคำนวณ</div>
        ในประชากร 1,000 คน พบคนเป็น aa (โรค) 40 คน → q² = 40/1000 = 0.04<br>
        q = √0.04 = 0.2<br>
        p = 1 - 0.2 = 0.8<br>
        AA = p² = 0.64 (640 คน), Aa = 2pq = 0.32 (320 คน), aa = q² = 0.04 (40 คน)<br>
        <strong>Carrier (Aa) = 320 คน</strong>
      </div>
      <div class="tip-box">💡 <strong>ในชีวิตจริง</strong> Hardy-Weinberg ไม่ได้สมบูรณ์แบบ — ความเบี่ยงเบนคือสัญญาณว่ามี <strong>evolution</strong> เกิดขึ้น</div>
    </div>

    <!-- 6. Speciation -->
    <div class="content-section">
      <h3>🌳 Speciation — การเกิดสปีชีส์ใหม่</h3>
      <h4>นิยามของ Species (Biological Species Concept)</h4>
      <p>กลุ่มประชากรที่ <strong>ผสมพันธุ์กันแล้วได้ลูกที่สมบูรณ์</strong> (fertile offspring) — แยกจากกลุ่มอื่นด้วย <strong>reproductive isolation</strong></p>
      <h4>ประเภทของ Speciation</h4>
      <table class="content-table">
        <tr><th>ประเภท</th><th>กลไก</th><th>ตัวอย่าง</th></tr>
        <tr><td>Allopatric</td><td>แยกทางภูมิศาสตร์ (geographic barrier)</td><td>นกฟินช์กาลาปากอส · กระรอกในแกรนด์แคนยอน</td></tr>
        <tr><td>Sympatric</td><td>เกิดในพื้นที่เดียวกัน (polyploidy, niche separation)</td><td>ปลา cichlid ในทะเลสาบ Victoria · พืช polyploid</td></tr>
        <tr><td>Peripatric</td><td>กลุ่มเล็กที่ขอบของประชากร</td><td>นกบนเกาะใหม่</td></tr>
        <tr><td>Adaptive Radiation</td><td>แตกแขนงเร็วในที่ใหม่</td><td>แมลงในฮาวาย · สัตว์เลี้ยงลูกด้วยนมหลัง dinosaur สูญพันธุ์</td></tr>
      </table>
      <h4>Reproductive Isolation</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span><strong>Prezygotic (ก่อนปฏิสนธิ):</strong> Habitat · Temporal · Behavioral · Mechanical · Gametic isolation</li>
        <li><span class="li-dot sc-dot"></span><strong>Postzygotic (หลังปฏิสนธิ):</strong> Hybrid inviability · Hybrid sterility (เช่น ม้าลา = mule เป็นหมัน) · Hybrid breakdown</li>
      </ul>
    </div>

    <!-- 7. Phylogeny + Human Evolution -->
    <div class="content-section">
      <h3>🌳 Phylogenetic Tree &amp; วิวัฒนาการมนุษย์</h3>
      <h4>Phylogenetic Tree</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>แสดงความสัมพันธ์ทางวิวัฒนาการ — สาขาแยกที่ <strong>common ancestor</strong></li>
        <li><span class="li-dot sc-dot"></span>สร้างจากข้อมูล morphology + molecular (DNA, protein sequences)</li>
        <li><span class="li-dot sc-dot"></span>ใช้ <strong>cladistics</strong> — จัดกลุ่มตาม shared derived characters</li>
      </ul>
      <h4>วิวัฒนาการมนุษย์ (Human Evolution)</h4>
      <table class="content-table">
        <tr><th>สปีชีส์</th><th>ช่วงเวลา (ปี)</th><th>ลักษณะเด่น</th></tr>
        <tr><td>Sahelanthropus</td><td>7 ล้าน</td><td>เก่าแก่ที่สุด ใกล้บรรพบุรุษร่วมกับชิมแปนซี</td></tr>
        <tr><td>Australopithecus afarensis (Lucy)</td><td>4 ล้าน</td><td>เดินสองขา (bipedal) สมองเล็ก</td></tr>
        <tr><td>Homo habilis</td><td>2.4 ล้าน</td><td>"ผู้ใช้เครื่องมือหิน" สมองเริ่มใหญ่</td></tr>
        <tr><td>Homo erectus</td><td>1.9 ล้าน - 110,000</td><td>ใช้ไฟ ออกจากแอฟริกาเป็นครั้งแรก</td></tr>
        <tr><td>Homo neanderthalensis</td><td>400,000 - 40,000</td><td>ในยุโรปและเอเชียตะวันตก สมองใหญ่กว่าเรา</td></tr>
        <tr><td><strong>Homo sapiens</strong></td><td>300,000 - ปัจจุบัน</td><td>มนุษย์สมัยใหม่ ภาษา ศิลปะ เทคโนโลยี</td></tr>
      </table>
      <div class="note-box">⚠️ มนุษย์ <strong>ไม่ได้</strong> วิวัฒนาการมาจากชิมแปนซี — เราและชิมแปนซีมี <strong>บรรพบุรุษร่วม</strong> เมื่อ ~6-7 ล้านปีก่อน</div>
      <div class="tip-box">💡 ใน DNA ของมนุษย์ปัจจุบัน (non-African) มี <strong>Neanderthal DNA ~1-4%</strong> — แสดงว่าเคยผสมพันธุ์กัน</div>
    </div>

    <!-- 8. Misconceptions & Applications -->
    <div class="content-section">
      <h3>🌍 ความเข้าใจผิดและการประยุกต์</h3>
      <h4>ความเข้าใจผิด</h4>
      <ul>
        <li><span class="li-dot sc-dot"></span>"วิวัฒนาการมีเป้าหมาย" — <strong>ผิด</strong> วิวัฒนาการ <strong>ไม่มีทิศทาง</strong> เป็นกระบวนการสุ่ม + selection</li>
        <li><span class="li-dot sc-dot"></span>"มนุษย์มาจากลิง" — <strong>ผิด</strong> — มาจาก <strong>บรรพบุรุษร่วม</strong> เท่านั้น</li>
        <li><span class="li-dot sc-dot"></span>"Survival of the fittest = แข็งแกร่งสุด" — <strong>ผิด</strong> — Fittest = เหมาะกับสภาพ → สืบพันธุ์มาก</li>
        <li><span class="li-dot sc-dot"></span>"ทฤษฎี = แค่เดา" — <strong>ผิด</strong> — Theory ในวิทยาศาสตร์ผ่านการทดสอบหลายครั้ง</li>
        <li><span class="li-dot sc-dot"></span>"สัตว์สิ้นสุดวิวัฒนาการแล้ว" — <strong>ผิด</strong> — วิวัฒนาการเกิดต่อเนื่อง</li>
      </ul>
      <h4>การประยุกต์</h4>
      <table class="content-table">
        <tr><th>การประยุกต์</th><th>หลักการ</th></tr>
        <tr><td>ปฏิชีวนะ</td><td>เข้าใจการเกิด resistance &rarr; ใช้ยาให้ครบโดส</td></tr>
        <tr><td>วัคซีนไข้หวัดใหญ่</td><td>ไวรัสกลายพันธุ์เร็ว &rarr; ต้องปรับวัคซีนทุกปี</td></tr>
        <tr><td>การเกษตร</td><td>Selective breeding · GMO · ป้องกัน pest resistance</td></tr>
        <tr><td>การอนุรักษ์</td><td>รักษา genetic diversity → ป้องกันสูญพันธุ์</td></tr>
        <tr><td>นิติเวช + การแพทย์</td><td>HIV mutation rate · cancer evolution</td></tr>
        <tr><td>Bioinformatics</td><td>เปรียบเทียบ genomes ระหว่างสปีชีส์</td></tr>
      </table>
    </div>

    <!-- ============ 32 PROBLEMS ============ -->
    <div class="content-section">
      <h3>✏️ แบบฝึกหัดและตัวอย่างโจทย์ (32 ข้อ · 8 หมวด)</h3>

      <div class="problem-topic-header">📑 หมวด A — Darwin &amp; Natural Selection</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 1 — 4 หลักการของ Darwin</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุ 4 หลักการของ Natural Selection</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) <strong>Variation</strong> ในประชากร (2) <strong>Heritable</strong> — ลักษณะถ่ายทอดได้ (3) <strong>Differential survival</strong> — ผู้เหมาะรอด+สืบพันธุ์มาก (4) <strong>Evolution</strong> — ความถี่ alleles เปลี่ยน<br>💡 จำ Variation → Heritable → Selection → Evolution</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 2 — Survival of the Fittest</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> "Survival of the fittest" หมายถึงอะไรกันแน่?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> "Fittest" = ผู้ที่เหมาะกับ <strong>สภาพแวดล้อมตอนนี้</strong> ในแง่ของ <strong>"reproductive success"</strong> — ไม่ใช่ "แข็งแกร่งที่สุด"<br>เช่น แบคทีเรียที่ดื้อยา fittest ในขณะใช้ยา · ผีเสื้อ peppered สีเข้ม fittest ในยุค Industrial Revolution<br>💡 Fitness วัดจากจำนวนลูกที่อยู่รอดและสืบพันธุ์ต่อ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 3 — Darwin's finches</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมนกฟินช์บนเกาะกาลาปากอสมีจะงอยปากต่างกัน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> นกฟินช์มาจากบรรพบุรุษร่วม → แต่ละเกาะมี <strong>อาหารต่างกัน</strong> (เมล็ดเล็ก/ใหญ่, แมลง, ดอกไม้) → Natural Selection คัดเลือกจะงอยปากที่เหมาะกับอาหารนั้น → เกิด <strong>adaptive radiation</strong><br>ผลสุดท้าย: 13 สปีชีส์ที่แตกต่างกัน<br>💡 เป็นหลักฐานคลาสสิกของวิวัฒนาการ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 4 — Higher-order: Wallace</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม Alfred Russel Wallace ไม่โด่งดังเท่า Darwin ทั้งที่คิดเรื่องเดียวกัน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Wallace เขียนจดหมายถึง Darwin (1858) ที่บอกความคิดเดียวกัน → Darwin ตื่นและรีบเสนอร่วมกันที่ Linnean Society<br>เหตุที่ Darwin ดังกว่า:<br>(1) มีหลักฐานสะสมมา <strong>20 ปี</strong> (จาก HMS Beagle)<br>(2) ตีพิมพ์หนังสือ "Origin of Species" ปีถัดมา (1859)<br>(3) อยู่ในวงการวิทยาศาสตร์อังกฤษระดับสูง<br>💡 ในปัจจุบันเรียกทฤษฎีว่า "Darwin-Wallace theory" ในบางตำรา</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด B — หลักฐานวิวัฒนาการ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 5 — Homologous vs Analogous</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ความต่างระหว่าง homologous และ analogous structures?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Homologous:</strong> โครงสร้างเดียวกัน หน้าที่ต่าง — จาก <strong>common ancestor</strong> (เช่น แขนคน-ปีกค้างคาว-ครีบวาฬ)<br><strong>Analogous:</strong> หน้าที่เดียวกัน โครงสร้างต่าง — <strong>convergent evolution</strong> (เช่น ปีกแมลง-ปีกนก)<br>💡 ทั้งคู่เป็นหลักฐานวิวัฒนาการ แต่บอกต่างกัน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 6 — Vestigial</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ยกตัวอย่าง vestigial structures ในมนุษย์</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>- <strong>ไส้ติ่ง (Appendix):</strong> เคยใช้ย่อยเซลลูโลส<br>- <strong>กระดูกก้นกบ (Coccyx):</strong> เคยเป็นหาง<br>- <strong>กล้ามเนื้อขยับหู:</strong> เคยใช้หันหูตามเสียง<br>- <strong>ฟันกราม Wisdom teeth:</strong> เคยจำเป็นในการกินอาหารหยาบ<br>- <strong>Goosebumps (ขนลุก):</strong> เคยทำให้ขนตั้งเพื่ออบอุ่น<br>💡 vestigial = "ของเก่าที่ไม่จำเป็นแล้ว"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 7 — Tiktaalik</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Tiktaalik สำคัญอย่างไรในวิวัฒนาการ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Tiktaalik (~375 ล้านปี) เป็น <strong>"transitional fossil"</strong> ระหว่างปลากับสัตว์บก<br>มีลักษณะของทั้งสอง:<br>- ปลา: เหงือก, เกล็ด, ครีบ<br>- สัตว์บก: คอ, กระดูก wrist (ที่จะกลายเป็นข้อมือ)<br>พบในแคนาดาปี 2004<br>💡 เป็นหลักฐานสำคัญว่าสัตว์บกวิวัฒนาการจากปลา</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 8 — Higher-order: Molecular evidence</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม DNA เป็นหลักฐานที่แม่นยำที่สุดของวิวัฒนาการ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> (1) DNA <strong>universal</strong> — ทุกสิ่งมีชีวิตใช้รหัสเดียวกัน<br>(2) สามารถ <strong>วัด</strong> ความต่างได้แม่นยำ (มนุษย์-ชิมแปนซี 1.2%)<br>(3) อัตรา mutation ค่อนข้างคงที่ → ใช้เป็น <strong>"molecular clock"</strong> ประมาณเวลาที่สปีชีส์แยกกัน<br>(4) หลีกเลี่ยงปัญหา convergent evolution ที่ดูจาก morphology ภายนอก<br>(5) ใช้ทำ phylogenetic tree ที่แม่นยำกว่าเดิม<br>💡 มนุษย์-ยีสต์ใช้ histone gene เหมือนกัน 92% — แสดงบรรพบุรุษร่วมยุค pre-Cambrian</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด C — กลไกวิวัฒนาการ</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 9 — Mutation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม mutation เป็น "วัตถุดิบ" ของวิวัฒนาการ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Mutation เป็นแหล่งกำเนิด <strong>variation ใหม่</strong> เพียงแหล่งเดียว (recombination แค่ผสม allele ที่มี)<br>ถ้าไม่มี mutation → ไม่มี variation → ไม่มี selection → ไม่มี evolution<br>Mutation <strong>สุ่ม</strong> ไม่มีทิศทาง — แต่ selection <strong>ไม่สุ่ม</strong> คัดเลือกตามสภาพแวดล้อม<br>💡 Mutation rate ในมนุษย์ ~1 ใน 10⁸ bp ต่อรุ่น — แต่จีโนมใหญ่ → mutations ใหม่ ~70 ต่อรุ่น</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 10 — Genetic Drift</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Genetic Drift คืออะไร และเมื่อใดสำคัญที่สุด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> การเปลี่ยน allele frequency แบบ <strong>สุ่ม</strong> (ไม่เกี่ยวกับ fitness) — เกิดจากความบังเอิญในการสืบพันธุ์<br>สำคัญมากใน <strong>ประชากรเล็ก</strong> เพราะการสุ่มมีผลใหญ่<br>2 รูปแบบพิเศษ:<br>- <strong>Bottleneck:</strong> ประชากรลดฉับพลัน (ภัย, โรค) → genetic diversity ลด<br>- <strong>Founder effect:</strong> กลุ่มเล็กไปตั้งใหม่ → ความถี่ alleles ต่างจากต้นทาง<br>💡 ตัวอย่าง: ชาว Amish ในอเมริกามีโรคพันธุกรรมหายากบางอย่างมากเพราะเป็น founder population</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 11 — Sexual Selection</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Sexual selection เกี่ยวกับอะไร และยกตัวอย่าง</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> การคัดเลือกจาก <strong>คู่ผสมพันธุ์</strong> (ไม่ใช่จากสภาพแวดล้อม) — อาจขัดกับ natural selection<br>2 แบบ:<br>- <strong>Intrasexual:</strong> ตัวผู้ต่อสู้กันเอง (เขากวาง, สิงโต)<br>- <strong>Intersexual:</strong> ตัวเมียเลือกตัวผู้ (หางนกยูง, ดอกไม้ของนก bowerbird)<br>หางนกยูงใหญ่ทำให้ <strong>หนีนักล่ายาก</strong> แต่ตัวเมียชอบ → fitness รวมยังดี<br>💡 อธิบายลักษณะ "เกินจำเป็น" ที่ดูแปลกในธรรมชาติ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 12 — Higher-order: 3 types of selection</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ระบุประเภทของ selection: (ก) ยีราฟคอยาวขึ้น (ข) น้ำหนักทารก ~3 kg (ค) นกฟินช์ปากเล็กและใหญ่</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>(ก) <strong>Directional</strong> — ดันไปทางหนึ่ง (คอยาว)<br>(ข) <strong>Stabilizing</strong> — รักษาค่ากลาง (ทารกใหญ่/เล็กไปเสี่ยงตาย)<br>(ค) <strong>Disruptive (Diversifying)</strong> — เลือก 2 ค่าสุดขั้ว ลด medium<br>💡 ในธรรมชาติ stabilizing พบบ่อยที่สุด</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด D — Hardy-Weinberg</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 13 — H-W equation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เขียนสมการ Hardy-Weinberg และความหมายของแต่ละตัว</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>p² + 2pq + q² = 1</strong> และ <strong>p + q = 1</strong><br>p = ความถี่ allele เด่น (A)<br>q = ความถี่ allele ด้อย (a)<br>p² = ความถี่ AA (homozygous เด่น)<br>2pq = ความถี่ Aa (heterozygous)<br>q² = ความถี่ aa (homozygous ด้อย)<br>💡 ใช้คำนวณ carrier (Aa) ในประชากร</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 14 — เงื่อนไข 5 ข้อ</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> เงื่อนไขใดบ้างที่ทำให้ประชากรอยู่ใน H-W equilibrium?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> 5 ข้อ:<br>(1) ไม่มี mutation<br>(2) ไม่มี natural selection<br>(3) ไม่มี gene flow (อพยพ)<br>(4) ไม่มี genetic drift (ประชากรใหญ่)<br>(5) Random mating<br>💡 ในธรรมชาติ <strong>เกือบไม่มี</strong> ประชากรที่เข้าเงื่อนไขทั้งหมด → ประชากรจริงมีวิวัฒนาการเสมอ</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 15 — คำนวณ q</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ในประชากร 10,000 คน พบคนเป็นโรค aa = 400 คน → คำนวณ p, q, จำนวน carrier</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>q² = 400/10,000 = 0.04 → q = 0.2<br>p = 1 - 0.2 = 0.8<br>2pq = 2(0.8)(0.2) = 0.32<br>Carrier (Aa) = 0.32 × 10,000 = <strong>3,200 คน</strong><br>AA = p² × 10,000 = 6,400 คน<br>💡 เห็นได้ว่า carrier มากกว่าผู้ป่วยมาก</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 16 — Higher-order: คำนวณ allele freq</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ในประชากรที่มี genotypes AA=49%, Aa=42%, aa=9% — คำนวณ allele frequencies และตรวจสอบว่าอยู่ใน H-W หรือไม่</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br>p = ความถี่ allele A = AA + 0.5 × Aa = 0.49 + 0.5(0.42) = 0.70<br>q = ความถี่ allele a = aa + 0.5 × Aa = 0.09 + 0.5(0.42) = 0.30<br>ตรวจ H-W:<br>p² = 0.49 ✓<br>2pq = 0.42 ✓<br>q² = 0.09 ✓<br>→ <strong>อยู่ใน H-W equilibrium</strong><br>💡 ถ้าไม่ตรง → ประชากรกำลัง evolve</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด E — Speciation</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 17 — Allopatric vs Sympatric</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Allopatric และ Sympatric speciation ต่างกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Allopatric:</strong> เกิดจากการ <strong>แยกทางภูมิศาสตร์</strong> (ภูเขา, แม่น้ำ, เกาะ) — กลุ่มประชากรไม่ผสมกัน → วิวัฒนาการแยก<br><strong>Sympatric:</strong> เกิดใน <strong>พื้นที่เดียวกัน</strong> — โดยการแยก niche, polyploidy (ในพืช), หรือ sexual selection<br>💡 Allopatric พบบ่อยกว่าในสัตว์, sympatric พบบ่อยในพืช</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 18 — Mule</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไม mule (ลูกม้า × ลา) จึงเป็นหมัน?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ม้ามี chromosomes 64, ลามี 62 → mule ได้ 63 (เลขคี่!) → ใน meiosis chromosomes ไม่สามารถจับคู่ homologous ได้ครบ → สร้าง gametes ไม่ได้<br>เป็นตัวอย่างของ <strong>postzygotic hybrid sterility</strong> → ม้ากับลาเป็น<strong>คนละสปีชีส์</strong>ตาม biological species concept<br>💡 พิสูจน์ว่าม้ากับลา reproductively isolated</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 19 — Adaptive radiation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Adaptive radiation คืออะไร และยกตัวอย่าง</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> การที่สปีชีส์หนึ่งแตกแขนงเป็นหลายสปีชีส์ใหม่ <strong>อย่างรวดเร็ว</strong> เพื่อเข้าครอบครอง niches ใหม่<br>ตัวอย่าง:<br>- นกฟินช์กาลาปากอส (13 สปีชีส์)<br>- ปลา Cichlid ในทะเลสาบ Victoria (~500 สปีชีส์ใน 15,000 ปี)<br>- สัตว์เลี้ยงลูกด้วยนมหลัง dinosaur สูญพันธุ์ (65 ล้านปีก่อน)<br>- แมลงในฮาวาย<br>💡 เกิดเมื่อมี "ecological opportunity"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 20 — Higher-order: Reproductive isolation</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Reproductive isolation 2 ประเภทคืออะไร และยกตัวอย่างแต่ละกลไก</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Prezygotic (ก่อนปฏิสนธิ):</strong><br>- Habitat: อยู่คนละที่ (สัตว์น้ำจืด vs ทะเล)<br>- Temporal: ผสมพันธุ์คนละเวลา (พืชออกดอกคนละฤดู)<br>- Behavioral: การเกี้ยวต่าง (เพลงนกต่างกัน)<br>- Mechanical: อวัยวะสืบพันธุ์ไม่เข้ากัน<br>- Gametic: sperm-egg recognition ไม่ตรง<br><strong>Postzygotic:</strong><br>- Hybrid inviability: ลูกตายในครรภ์<br>- Hybrid sterility: mule<br>- Hybrid breakdown: F2 อ่อนแอ<br>💡 ปกติมีหลายกลไกพร้อมกัน</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด F — Phylogeny</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 21 — Common ancestor</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ใน phylogenetic tree "common ancestor" คืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> จุดที่สาขาแยกออก — แทน <strong>บรรพบุรุษร่วมล่าสุด (most recent common ancestor)</strong> ของกลุ่มที่อยู่ในสาขาเหล่านั้น<br>ลึกลงมาในต้นไม้ = บรรพบุรุษเก่าแก่กว่า<br>ทุกสปีชีส์บนโลกมีบรรพบุรุษร่วมสุดท้าย = <strong>LUCA (Last Universal Common Ancestor)</strong> เมื่อ ~3.5-4 พันล้านปีก่อน<br>💡 ต้นไม้แห่งชีวิตเริ่มที่ LUCA</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 22 — Convergent evolution</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Convergent evolution คืออะไร และยกตัวอย่าง</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> 2 สปีชีส์ที่ไม่เกี่ยวข้องวิวัฒนาการลักษณะคล้ายกันเพราะอยู่ในสภาพแวดล้อมคล้ายกัน<br>ตัวอย่าง:<br>- <strong>ปลาโลมา vs ปลาฉลาม:</strong> รูปร่างคล้ายกัน (โลมา = mammal, ฉลาม = ปลา)<br>- <strong>กระบองเพชร (อเมริกา) vs euphorbia (แอฟริกา):</strong> ปรับตัวเป็น succulent คล้ายกัน<br>- <strong>ปีกแมลง vs ปีกนก:</strong> ทำหน้าที่บินเหมือนกัน<br>💡 สร้าง analogous structures</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 23 — Molecular clock</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Molecular clock ใช้ทำอะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ใช้ <strong>อัตรา mutation</strong> ที่ค่อนข้างคงที่ในยีนบางตัวเป็น "นาฬิกา" ประมาณ <strong>เวลา</strong> ที่สปีชีส์แยกจากกัน<br>เช่น Cytochrome c มี mutation rate ~ 1 ใน 20 ล้านปี → เปรียบเทียบความต่างของ cytochrome c ระหว่าง 2 สปีชีส์ → คำนวณว่าแยกกันเมื่อใด<br>มนุษย์ - ชิมแปนซี ~6 ล้านปี<br>มนุษย์ - หนู ~75 ล้านปี<br>💡 ใช้กับยีนที่เปลี่ยนช้า (neutral) ที่ไม่ถูก selection</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 24 — Higher-order: Mass extinction</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Mass extinctions ในประวัติศาสตร์โลกมีบทบาทอย่างไรต่อวิวัฒนาการ?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> มี 5 ครั้งใหญ่ในประวัติศาสตร์ (กำลังเข้าครั้งที่ 6):<br>- Ordovician (440 mya)<br>- Devonian (370 mya)<br>- <strong>Permian (252 mya):</strong> สูญพันธุ์ใหญ่ที่สุด 96% ของสปีชีส์ทะเล<br>- Triassic (200 mya)<br>- <strong>Cretaceous-Paleogene (66 mya):</strong> ไดโนเสาร์สูญพันธุ์ (อุกกาบาต)<br>หลัง extinction → <strong>adaptive radiation</strong> ของกลุ่มที่รอด<br>เช่น สัตว์เลี้ยงลูกด้วยนมแพร่ขยายหลัง K-Pg → นำไปสู่มนุษย์<br>💡 Extinction เปิด "ecological niche" ใหม่</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด G — วิวัฒนาการมนุษย์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 25 — มนุษย์ vs ลิง</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> "มนุษย์มาจากลิง" ถูกหรือผิด?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>ผิด</strong> — มนุษย์และลิงสมัยใหม่มี <strong>บรรพบุรุษร่วม</strong> เมื่อ ~6-7 ล้านปีก่อน (สำหรับชิมแปนซี) แต่ไม่ได้เป็นบรรพบุรุษของกันและกัน<br>ทั้งสองวิวัฒนาการ <strong>แยกกัน</strong> ตั้งแต่นั้น → ลิงในปัจจุบันก็มีวิวัฒนาการมายาวนาน ไม่ใช่ "ลิงดั้งเดิม"<br>💡 เปรียบเทียบเหมือนเรากับลูกพี่ลูกน้อง — มีปู่ย่าตายายร่วม แต่ไม่ใช่ "เราเป็นลูกของลูกพี่ลูกน้อง"</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 26 — Lucy</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> "Lucy" เป็นใครและสำคัญอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Lucy</strong> = ฟอสซิลของ <em>Australopithecus afarensis</em> อายุ ~3.2 ล้านปี พบในเอธิโอเปียปี 1974<br>ความสำคัญ:<br>(1) สมบูรณ์ ~40% ของโครงกระดูก<br>(2) แสดงว่า <strong>เดินสองขา (bipedal)</strong> แล้ว — แต่สมองยังเล็ก (~400 cc)<br>(3) เปลี่ยนความเข้าใจ — bipedalism เกิด <strong>ก่อน</strong> สมองใหญ่<br>ตั้งชื่อตามเพลง "Lucy in the Sky with Diamonds" ของ Beatles ที่ฟังในการขุด<br>💡 Lucy เป็นญาติเก่าของมนุษย์ ไม่ใช่บรรพบุรุษโดยตรง</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 27 — Neanderthal</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Homo neanderthalensis ต่างจาก Homo sapiens อย่างไร และเกี่ยวข้องกันอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Neanderthal (400,000 - 40,000 ปีก่อน) ในยุโรปและเอเชียตะวันตก<br>ความต่าง:<br>- รูปร่างแข็งแรงกว่า เตี้ยกว่า<br>- <strong>สมองใหญ่กว่า</strong> Homo sapiens (~1,500 cc vs ~1,350)<br>- ใช้เครื่องมือ, ฝังศพ, มีศิลปะ<br>ความสัมพันธ์: เคย <strong>ผสมพันธุ์กับ Homo sapiens</strong> → คนปัจจุบัน (ไม่ใช่แอฟริกา) มี <strong>Neanderthal DNA ~1-4%</strong><br>สาเหตุการสูญพันธุ์: เป็นที่ถกเถียง — climate change, ถูก Homo sapiens แทนที่ในการแย่งทรัพยากร<br>💡 ปัจจุบันมีเพียง Homo sapiens ที่อยู่รอด</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 28 — Higher-order: Out of Africa</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทฤษฎี "Out of Africa" บอกอะไรเกี่ยวกับ Homo sapiens?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> Homo sapiens กำเนิดใน <strong>แอฟริกา</strong> ~300,000 ปีก่อน → อพยพออก ~60,000-70,000 ปีก่อน → แพร่ไปทั่วโลก<br>หลักฐาน:<br>(1) <strong>Mitochondrial Eve</strong> — mtDNA ของทุกมนุษย์ปัจจุบันมาจากผู้หญิงในแอฟริกา ~200,000 ปีก่อน<br>(2) <strong>Y-chromosomal Adam</strong> — Y chromosome ของทุกผู้ชายมาจากผู้ชายในแอฟริกา<br>(3) Genetic diversity สูงที่สุดในแอฟริกา → ที่อื่นเป็น "subset"<br>(4) ฟอสซิลเก่าที่สุดของ Homo sapiens อยู่ในแอฟริกา (Jebel Irhoud, โมร็อกโก, 315,000 ปี)<br>💡 ทุกคนบนโลกในปัจจุบันเป็น "ลูกของชาวแอฟริกา"</div>
        </details>
      </div>

      <div class="problem-topic-header">📑 หมวด H — การประยุกต์</div>
      <div class="problem-card">
        <h4>โจทย์ที่ 29 — Antibiotic resistance</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> แบคทีเรียดื้อยาเป็นปัญหาวิวัฒนาการอย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> <strong>Natural Selection ในจังหวะที่เห็นด้วยตา</strong>:<br>1) ในประชากรแบคทีเรียมี mutation สุ่ม — บางตัวทนยา (rare)<br>2) ให้ยา → แบคทีเรียที่ทนรอด, ตัวอื่นตาย<br>3) ตัวที่รอดแบ่งตัวเป็นล้านล้าน → ประชากรใหม่ส่วนใหญ่ทน<br>4) ในหลายชั่วอายุ → ทนทุกตัว<br>วิธีแก้: ใช้ยาให้ครบโดส, ไม่ใช้พร่ำเพรื่อ, พัฒนายาใหม่<br>💡 MRSA, TB ดื้อยาเป็นปัญหาสำคัญในปัจจุบัน</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 30 — Flu vaccine</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> ทำไมต้องฉีดวัคซีนไข้หวัดใหญ่ทุกปี?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> ไข้หวัดใหญ่ (influenza) <strong>กลายพันธุ์เร็ว</strong> เพราะ:<br>(1) RNA virus → RNA polymerase ไม่มี proofreading<br>(2) Segmented genome → reassortment ระหว่าง strains<br>2 รูปแบบ:<br>- <strong>Antigenic drift:</strong> mutation เล็ก ๆ ทุกปี → ต้องปรับวัคซีน<br>- <strong>Antigenic shift:</strong> reassortment ใหญ่ → pandemic (1918, 2009 H1N1)<br>💡 ทุกปี WHO ทำนาย strains ที่จะมา → ผลิตวัคซีนล่วงหน้า</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 31 — Selective breeding</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> Selective breeding ต่างจาก natural selection อย่างไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong><br><strong>Natural Selection:</strong> สภาพแวดล้อมเป็นผู้คัดเลือก — เลือกผู้ที่เหมาะกับสภาพ<br><strong>Selective Breeding (Artificial Selection):</strong> <strong>มนุษย์</strong> เป็นผู้คัดเลือก — เลือกพ่อแม่ตามลักษณะที่ต้องการ<br>ตัวอย่าง: ข้าวพันธุ์ดี, สุนัขพันธุ์ต่าง ๆ, วัวนมที่ให้น้ำนมเยอะ<br>Darwin ใช้ artificial selection เป็นตัวอย่างยืนยันว่า natural selection ก็เป็นไปได้<br>💡 จาก wolf → สุนัขทุกพันธุ์ในโลก ใช้เวลา ~15,000-40,000 ปี</div>
        </details>
      </div>
      <div class="problem-card">
        <h4>โจทย์ที่ 32 — Higher-order: 6th extinction</h4>
        <div class="problem-statement"><strong>โจทย์:</strong> "Sixth mass extinction" ที่นักวิทยาศาสตร์พูดถึงคืออะไร?</div>
        <details class="solution-details"><summary>เปิด/ปิด วิธีทำ</summary>
          <div class="solution-content"><strong>คำตอบ:</strong> นักวิทยาศาสตร์เชื่อว่าเรากำลังเข้าสู่ <strong>การสูญพันธุ์ครั้งใหญ่ครั้งที่ 6</strong> — แต่ครั้งนี้เกิดจาก <strong>มนุษย์</strong> (Anthropocene extinction)<br>สาเหตุ:<br>- การทำลายถิ่นที่อยู่ (deforestation, urbanization)<br>- ภาวะโลกร้อน (climate change)<br>- มลพิษ (plastic, chemicals)<br>- การล่าและประมงเกิน<br>- Invasive species<br>อัตราสูญพันธุ์ปัจจุบัน <strong>เร็วกว่าปกติ 100-1000 เท่า</strong><br>คาดการณ์: 1 ใน 4 ของสปีชีส์อาจสูญในศตวรรษนี้<br>💡 มนุษย์เป็นทั้งผู้ก่อและผู้ที่สามารถแก้ปัญหาได้</div>
        </details>
      </div>
    </div>

    <!-- SUMMARY -->
    <div class="content-section">
      <h3>🧠 สรุปจำง่าย + ความเข้าใจผิดที่พบบ่อย</h3>
      <div class="formula-box">
        <div class="formula-label">คำสำคัญต้องจำของบทนี้</div>
        <strong>Darwin:</strong> HMS Beagle · Galápagos · "Origin of Species" (1859)<br>
        <strong>Natural Selection 4 ข้อ:</strong> Variation · Heritable · Selection · Evolution<br>
        <strong>หลักฐาน 6 ด้าน:</strong> Fossil · Anatomy · Embryology · Biogeography · Molecular · Direct observation<br>
        <strong>5 กลไก:</strong> Mutation · Selection · Drift · Gene Flow · Sexual Selection<br>
        <strong>Hardy-Weinberg:</strong> p² + 2pq + q² = 1 (5 เงื่อนไข)<br>
        <strong>Speciation:</strong> Allopatric · Sympatric · Adaptive radiation
      </div>
      <h4>ความเข้าใจผิดที่พบบ่อย</h4>
      <table class="content-table">
        <tr><th>❌ ผิด</th><th>✓ ถูก</th></tr>
        <tr><td>มนุษย์มาจากลิง</td><td>มี <strong>common ancestor</strong> เมื่อ 6-7 ล้านปีก่อน</td></tr>
        <tr><td>วิวัฒนาการมีเป้าหมาย</td><td>ไม่มีทิศทาง — เกิดจาก mutation สุ่ม + selection</td></tr>
        <tr><td>Fittest = แข็งแกร่งสุด</td><td>Fittest = เหมาะกับสภาพปัจจุบัน → สืบพันธุ์มาก</td></tr>
        <tr><td>Theory = ไม่แน่ใจ</td><td>Theory ในวิทยาศาสตร์ = ได้รับการพิสูจน์มากที่สุด</td></tr>
        <tr><td>Individual ตัวหนึ่งวิวัฒนาการ</td><td><strong>ประชากร</strong> วิวัฒนาการ ไม่ใช่ตัวเดียว</td></tr>
        <tr><td>การใช้-ไม่ใช้ส่งต่อได้ (Lamarck)</td><td>ลักษณะที่ได้มาภายหลัง <strong>ไม่ส่งต่อ</strong> (ยกเว้น epigenetics)</td></tr>
      </table>
      <div class="tip-box">💡 <strong>เคล็ดลับสอบ:</strong> เห็น "fittest" → คิดถึง reproduction · "homologous" → common ancestor · "analogous" → convergent evolution</div>
    </div>
  `
});
