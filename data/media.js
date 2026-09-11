/* ============================================================
   คลังสื่อการเรียน — แก้ลิงก์/เพิ่มสื่อได้ที่ไฟล์นี้ไฟล์เดียว
   ไม่ต้องแตะ index.html · แก้แล้วอย่าลืมอัปเลขเวอร์ชันใน sw.js

   แต่ละรายการ: ic=ไอคอน · ti=ชื่อ · de=คำอธิบาย · url=ปลายทาง · src=ชื่อแหล่ง
   ถ้าไม่ใส่ url การ์ดจะแสดงเป็น "เร็ว ๆ นี้" และกดไม่ได้ (ไม่หลอกให้กด)
   ============================================================ */
window.BIO = window.BIO || {};
BIO.MEDIA = [
  { cat: '🧫 หมวด: ชีววิทยาของเซลล์ (Cell Biology)', items: [
    { ic:'🔬', ti:'โครงสร้างเซลล์ 3 มิติ', de:'แอนิเมชันแสดงออร์แกเนลล์ภายในเซลล์สัตว์และเซลล์พืช',
      url:'https://learn.genetics.utah.edu/content/cells/insideacell/', src:'Learn.Genetics' },
    { ic:'🧪', ti:'การลำเลียงผ่านเยื่อหุ้มเซลล์', de:'วิดีโออธิบาย diffusion, osmosis, active transport',
      url:'https://phet.colorado.edu/th/simulations/membrane-channels', src:'PhET (ไทย)' },
    { ic:'⚡', ti:'การหายใจระดับเซลล์', de:'ขั้นตอน Glycolysis, Krebs cycle, ETC',
      url:'https://learn.genetics.utah.edu/content/metabolism/', src:'Learn.Genetics' },
    { ic:'🌱', ti:'การสังเคราะห์ด้วยแสง', de:'Light reaction และ Calvin cycle',
      url:'https://www.scimath.org/search?keyword=การสังเคราะห์ด้วยแสง', src:'SciMath สสวท.' }
  ]},
  { cat: '🧬 หมวด: พันธุศาสตร์ (Genetics)', items: [
    { ic:'🧬', ti:'โครงสร้าง DNA', de:'การจำลอง DNA replication และ transcription',
      url:'https://learn.genetics.utah.edu/content/basics/dna/', src:'Learn.Genetics' },
    { ic:'📊', ti:'กฎเมนเดล', de:'การทดลองพันธุกรรมในต้นถั่วลันเตา',
      url:'https://learn.genetics.utah.edu/content/pigeons/', src:'Learn.Genetics' },
    { ic:'🔄', ti:'Mitosis & Meiosis', de:'เปรียบเทียบการแบ่งเซลล์แบบไมโทซิสและไมโอซิส',
      url:'https://www.scimath.org/search?keyword=การแบ่งเซลล์', src:'SciMath สสวท.' },
    { ic:'✂️', ti:'CRISPR-Cas9', de:'เทคโนโลยีแก้ไขจีโนมยุคใหม่',
      url:'https://learn.genetics.utah.edu/content/gentech/', src:'Learn.Genetics' }
  ]},
  { cat: '🌿 หมวด: ชีววิทยาของพืช (Plant Biology)', items: [
    { ic:'🌳', ti:'โครงสร้างพืชดอก', de:'ราก ลำต้น ใบ ดอก ผล เมล็ด',
      url:'https://www.scimath.org/search?keyword=โครงสร้างพืชดอก', src:'SciMath สสวท.' },
    { ic:'💧', ti:'การลำเลียงน้ำในพืช', de:'Transpiration pull และ root pressure',
      url:'https://www.scimath.org/search?keyword=การลำเลียงในพืช', src:'SciMath สสวท.' },
    { ic:'🌸', ti:'การปฏิสนธิและสืบพันธุ์', de:'การถ่ายเรณู (pollination) และการเกิดผลและเมล็ด',
      url:'https://learn.genetics.utah.edu/content/flowers/', src:'Learn.Genetics' },
    { ic:'📐', ti:'การตอบสนองของพืช', de:'Phototropism, Gravitropism, Thigmotropism',
      url:'https://www.scimath.org/search?keyword=การตอบสนองของพืช', src:'SciMath สสวท.' }
  ]},
  { cat: '🫀 หมวด: ระบบร่างกายมนุษย์ (Human Body Systems)', items: [
    { ic:'🍽️', ti:'ระบบย่อยอาหาร', de:'เส้นทางอาหารจากปากถึงลำไส้ใหญ่',
      url:'https://www.scimath.org/search?keyword=ระบบย่อยอาหาร', src:'SciMath สสวท.' },
    { ic:'❤️', ti:'หัวใจและการไหลเวียนเลือด', de:'วงจรปอดและวงจรร่างกาย',
      url:'https://www.scimath.org/search?keyword=ระบบหมุนเวียนเลือด', src:'SciMath สสวท.' },
    { ic:'🫁', ti:'ระบบหายใจ', de:'การแลกเปลี่ยนแก๊สที่ alveoli',
      url:'https://www.scimath.org/search?keyword=ระบบหายใจ', src:'SciMath สสวท.' },
    { ic:'🧠', ti:'ระบบประสาท', de:'Neuron, action potential, synapse',
      url:'https://phet.colorado.edu/th/simulations/neuron', src:'PhET (ไทย)' },
    { ic:'💊', ti:'ระบบต่อมไร้ท่อ', de:'ฮอร์โมนและการควบคุม homeostasis',
      url:'https://www.scimath.org/search?keyword=ต่อมไร้ท่อ', src:'SciMath สสวท.' },
    { ic:'👶', ti:'ระบบสืบพันธุ์', de:'การเจริญของตัวอ่อน 9 เดือน',
      url:'https://www.scimath.org/search?keyword=ระบบสืบพันธุ์', src:'SciMath สสวท.' }
  ]},
  { cat: '🌍 หมวด: ระบบนิเวศและความหลากหลาย (Ecology)', items: [
    { ic:'🌳', ti:'ป่าเขตร้อนชื้น', de:'โครงสร้างเรือนยอดและความหลากหลายในไทย',
      url:'https://www.scimath.org/search?keyword=ระบบนิเวศ', src:'SciMath สสวท.' },
    { ic:'🐠', ti:'ระบบนิเวศปะการัง', de:'ความสัมพันธ์ symbiosis และการฟอกขาว',
      url:'https://www.scimath.org/search?keyword=ปะการัง', src:'SciMath สสวท.' },
    { ic:'🔄', ti:'วัฏจักรสารในธรรมชาติ', de:'วัฏจักรคาร์บอน ไนโตรเจน น้ำ',
      url:'https://www.scimath.org/search?keyword=วัฏจักรของสาร', src:'SciMath สสวท.' },
    { ic:'📈', ti:'การเติบโตของประชากร', de:'J-curve, S-curve และ carrying capacity',
      url:'https://phet.colorado.edu/th/simulations/natural-selection', src:'PhET (ไทย)' }
  ]}
];
