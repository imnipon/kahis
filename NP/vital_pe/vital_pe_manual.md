# Vital & PE Editor — Manual & Rule Summary

ไฟล์: `vital_pe_editor.html`

> **อ้างอิงตัวเลือกฟิลด์และ Reference Ranges**: ดูรายละเอียดฟิลด์แบบฟอร์มทั้งหมด 51 ฟิลด์ (Field Hint/Placeholder/Options และมาตรฐานสากล) ได้ที่ `ref_pe.md`

---

## 1. แนวคิดหลัก

- เป็นการ **สร้างฐานข้อมูล** ด้วย — ไม่แนะนำให้ใช้ form ที่มีการเปลี่ยนแปลงบ่อย
- ตัวอย่าง form ในระบบ: **Vital Sign**
- ข้อมูลแต่ละแถวมีค่า **Processed On** เพื่อแสดงวันที่ประมวลผล/วันที่ตรวจในตารางรวม

---

## 2. การเข้าถึง Editor (2 ทาง)

### ทางที่ 1 — เข้าผ่าน Exam Card
- ดึง **DVM/User** และ **Department** จาก exam card นั้นมาแสดงใน Record Meta อัตโนมัติ
- แสดง badge **exam-card id** (เช่น `exam-card-69001234`) ใน Record Meta

### ทางที่ 2 — เข้าผ่านปุ่มโดยไม่ระบุ Exam Card
- ดึง **user ที่ login** มาใส่อัตโนมัติ และดึง **Department** จาก localStorage หรือแหล่งอื่น
- แสดง badge เป็น **—** (ไม่มีเลข id)

---

## 3. Processed On & การเรียงลำดับ

- การบันทึกจะระบุ **Processed On** เพื่อแสดงวันที่ประมวลผล/วันที่ตรวจในตารางรวม
- ข้อมูลตัวอย่างสร้างวันที่ย้อนหลังและบางแถวมี offset เพื่อจำลองการกรอกผลย้อนหลัง
- อนาคตจะมี **Schedule On** เพิ่มเติม

---

## 4. การแก้ไข (Edit)

- เบื้องต้นน่าจะต้องให้ **ลบแล้วสร้างใหม่** (โดยการลบเป็นสิทธิ์ระดับ **admin**)
- เพื่อความชัดเจนของข้อมูล — **ผิดไม่ได้**

---

## 5. การบันทึก & การแสดงผล

- ถ้ามี **exam-card id** → ส่งข้อมูลไปปรากฏใน exam card นั้น (เหมือนเขียนใบตรวจปัจจุบัน ใครเขียนใบไหนก็ต้องไปอ่านใบนั้น)
- ถ้า **ไม่มี exam-card id** → ดูผ่าน **ตารางรวม** (เช่น กรอกโดยยังไม่ตรวจ เช่น screen ER case)

---

## 6. ปุ่มเข้าหน้า Vital & PE

- ปุ่ม **"Vital & PE"** โทนสีม่วง (`#7c3aed`) คลิกแล้วเปิด modal `assess-modal`
- มี **View Logic/Rule** badge เปิด modal สรุปแนวคิด กฎ และการทำงาน
- มี **date picker** สำหรับเลือกวันที่
- มี **select** เลือกวันที่มีประวัติการตรวจ

---

## 7. Tab System (3 Tabs)

- **Tab 1** (HN 69001234 — การบันทึกข้อมูล): Form Editor แบบแก้ไขได้ และมีปุ่ม Confirm
- **Tab 5** (HN 69001234 — ตารางข้อมูลพื้นฐาน): ตารางพื้นฐาน 28 คอลัมน์ + Basic Filter แบบไม่แยก topic
- **Tab 6** (HN 69001234 — ตารางข้อมูลทั้งหมด): ตารางรวม 53 คอลัมน์ + Filter แยกตาม topic
- คลิก tab → ซ่อน content อื่น แสดง tab ที่เลือก และอัปเดต `last update by` ตาม DVM/User ของ tab

---

## 8. Layout: 3-Column Grid (Tab 1)

### คอลัมน์ 1 — Forms
- รายการฟอร์ม (Vital Sign) มี checkmark ✓

### คอลัมน์ 2 — Form Editor
แบ่งเป็น 8 ส่วน (section navigation ด้านบน):

- **1. Core Vital Signs**: Temp, HR, RR, Pulse, Weight, CRT, FBS, Hydration Status, Estimated Dehydration
- **2. Blood Pressure & Advanced Monitoring**: NIBP SYS/DIA/MAP, BP Method, Cuff Site, SpO2, EtCO2, Oxygen Support
- **3. Perfusion, Mucosa & Bleeding**: Mucous Membrane Site (checkbox), Mucous Membrane Color, Bleeding Status, Bleeding Severity, Bleeding Site
- **4. Cardiac & Critical Events**: Heart Sound, Critical Event Time, Critical Events (checkbox), Critical Events Note
- **5. Respiratory Assessment**: Lung/Airway Sounds (checkbox), Lung Sound Side, Lung Region, Respiratory Effort, Depth, Affected Phase
- **6. Neurologic & Mentation**: Level of Consciousness, Reaction to Stimuli, Palpebral L/R, Menace L/R, PLR L/R, Pedal L/R
- **7. Mobility & Posture**: Gait, Posture, Mobility Note
- **8. Pain Assessment**: Pain Score, Observed Pain Indicators (checkbox)

> รวม 47 ฟิลด์ใน Form Editor + 4 ฟิลด์ Record Meta = **51 ฟิลด์** (ดูรายละเอียดที่ `ref_pe.md`)

### คอลัมน์ 3 — Record Meta
- **req-tags**: ✓ Form, ✓ DVM/User, ✓ Dept, exam-card-ID
- **Processed on**: `datetime-local` ใน Tab 1
- **DVM/User**: readonly
- **Department**: readonly
- **Form Note**: textarea ใน Tab 1

---

## 9. Field Hint, Placeholder & Styling

- ค่าช่วงอ้างอิงของ numeric fields แสดงเป็น **field hint ใต้ช่องกรอก** ไม่ใช่ค่าที่กรอกไว้ล่วงหน้า
- ช่อง text ที่ต้องการตัวอย่างการกรอกใช้ placeholder เช่น Bleeding Site, Critical Events Note และ Mobility Note
- `<select>` ใช้ `กรุณาเลือกข้อมูล` เป็นค่าเริ่มต้น
- Form Note textarea มี placeholder ตัวอย่างประโยคยาว
- **Mucous Membrane Site**: Oral mucosa เป็นค่าเริ่มต้นที่เช็คไว้ใน UI
- Field ที่มีข้อมูลหรือถูกเลือกจะแสดงสถานะ active ด้วยสี เพื่อให้เห็นว่ามีการกรอกข้อมูลแล้ว

---

## 10. Processed On

- Tab 1 ใช้ `<input type="datetime-local">` และป้องกันการพิมพ์ด้วยแป้นพิมพ์ (`onkeydown="return false"`) ให้เลือกจาก date/time picker
- ตารางใช้ค่า Processed On เป็นข้อมูลวันที่ประมวลผล/วันที่ตรวจ และใช้แสดงในคอลัมน์ Date

---

## 11. Confirm & Toast

- ปุ่ม **Confirm** ของ Tab 1 เรียก `assessConfirm(1)`
- แสดง toast ประมาณ 2 วินาที พร้อม DVM/User, Department และ last update
- Tab ตารางไม่มีปุ่ม Confirm

---

## 12. ปุ่ม Close (✕)

- คลิก ✕ → เปิด **confirm overlay** เตือนข้อมูลที่ยังไม่บันทึก
- **ปิดโดยไม่บันทึก** (ปุ่มแดง) → ปิดทั้ง confirm + modal
- **กลับไปแก้ไข** (ปุ่มเขียว) → ปิดเฉพาะ confirm overlay

---

## 13. Tab 5 — ตารางข้อมูลพื้นฐาน (Basic)

> ตารางพื้นฐานแสดง 28 คอลัมน์สำคัญจากทั้งหมด 53 คอลัมน์ในตารางทั้งหมด (Tab 6) และมี filter เฉพาะ 28 คอลัมน์นี้แบบ Flat Filter ไม่แบ่ง topic

### คอลัมน์ตารางพื้นฐาน (28 คอลัมน์)

| # | คอลัมน์ | หมายเหตุ |
|---|---------|----------|
| 1 | Processed On | วันเวลาที่ประมวลผล/วันที่ตรวจ |
| 2 | Temp (°F) | อุณหภูมิ |
| 3 | HR (bpm) | อัตราการเต้นหัวใจ |
| 4 | RR (rpm) | อัตราการหายใจ |
| 5 | Pulse (bpm) | ชีพจร |
| 6 | Wt. (kg) | น้ำหนัก |
| 7 | CRT (sec) | Capillary Refill Time |
| 8 | FBS (mg/dL) | น้ำตาลในเลือด |
| 9 | Hydration Status | สถานะน้ำในร่างกาย |
| 10 | NIBP SYS (mmHg) | ความดันบน |
| 11 | NIBP DIA (mmHg) | ความดันล่าง |
| 12 | SpO2 (%) | ออกซิเจนในเลือด |
| 13 | Mucous Membrane Color | สีเยื่อเมือก |
| 14 | Heart Sound | เสียงหัวใจ |
| 15 | Critical Event Time | เวลาเหตุวิกฤต |
| 16 | Critical Events | เหตุวิกฤต (หลายค่าคั่นด้วย `,`) |
| 17 | Respiratory Effort | ความพยายามหายใจ |
| 18 | Lung Sounds | เสียงปอด (หลายค่าคั่นด้วย `,`) |
| 19 | LOC | ระดับสติ |
| 20 | Palpebral L | Palpebral reflex — Left |
| 21 | Palpebral R | Palpebral reflex — Right |
| 22 | Gait | การเดิน |
| 23 | Pain Score | คะแนนความปวด (0–4) |
| 24 | DVM/User | สัตวแพทย์/ผู้ใช้ |
| 25 | Department | แผนก |
| 26 | Created on | วันที่สร้าง |
| 27 | Last Update | วันที่แก้ไขล่าสุด (บางแถวว่าง) |
| 28 | Exam Card ID | สีม่วง ถ้าไม่มีแสดง — สีเทา |

### ข้อมูล
- 25 แถว จำลองการทยอยใส่ (บางฟิลด์ว่าง 20%)
- Processed On บางแถวตรง/ไม่ตรง Created on (35% ของแถวมี offset ±2.5 วัน)
- Last Update บางแถวว่าง (30%)
- Critical Event หนึ่งแถวมีหลายค่าคั่นด้วย `,` (comma)
- Exam Card ID: บางแถวมี id (เช่น `exam-card-69001234`), บางแถวเป็น `—` (ไม่มี exam card)
- Palpebral L/R: บางแถวเหมือนกัน (correlated), บางแถวต่างกัน
- Pain Score และ Pain Indicators: สุ่มอิสระ

### CSS ตาราง
- `table-layout: auto`, `min-width: 1550px` — ตารางไม่ซ้อน, เลื่อนแนวนอนได้
- `padding-bottom: 60px` ที่ `.data-table-wrap` — เว้นพื้นที่ด้านล่าง
- `white-space: nowrap` สำหรับทุก cell

---

## 14. Filter Design & Behavior

### ตารางพื้นฐาน (Tab 5)

- ใช้ **Flat Filter** ไม่แยก topic เพื่อให้ค้นหา field สำคัญได้เร็วและไม่รก
- แสดงเฉพาะ filter ของ 28 คอลัมน์ใน `basicColumns`
- Field เรียงแบบ wrap ในกรอบเดียว และ panel มี scroll ภายใน
- แต่ละ field มีกรอบย่อยและสีตาม topic

### ตารางทั้งหมด (Tab 6)

- แสดง filter ครบทุกคอลัมน์ที่มี filter configuration
- แยกเป็น topic: Date, Vital Signs, Monitoring, Perfusion, Critical Events, Respiratory, Neuro/LOC, Mobility, Pain และ Meta
- แต่ละ field มีกรอบย่อยและสีตาม topic
- panel มี scroll แนวตั้ง/แนวนอนภายในกรอบ

### ประเภท filter

- **Numeric**: operator `=`, `>`, `<` และช่องกรอกค่า
- **Text**: ช่องค้นหาข้อความแบบ contains
- **Multi-check**: เลือกได้หลายค่า โดยปุ่มแสดง `ยังไม่เลือก` หรือ `เลือก x รายการ`
- Multi-check dropdown ใช้ fixed overlay เพื่อไม่ให้ถูกตารางบัง
- Date text filter มีปุ่ม `Today` สำหรับ Processed On

### Logic

- ไม่กรอกค่า = ไม่กรอง field นั้น
- กรอกหลาย field = ใช้ **AND logic** ระหว่าง field
- เลือกหลายค่าใน multi-check = ใช้ **OR logic** ภายใน field เดียวกัน
- ฟิลด์แบบ multi-crit เช่น Critical Events และ Lung Sounds ตรวจแบบ contains จากค่าที่คั่นด้วย comma
- ปุ่ม **ค้นหา** ใช้กรองข้อมูลตามค่าปัจจุบัน
- ปุ่ม **ล้างตัวกรอง** รีเซ็ต numeric, text, select, multi-check, สี active และข้อความ `เลือก x รายการ` แล้วแสดงข้อมูลทั้งหมด
