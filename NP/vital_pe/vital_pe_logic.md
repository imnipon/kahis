# Vital & PE Editor — Logic & Rule Summary

ไฟล์: `vital_pe_editor.html`

---

## 1. แนวคิดหลัก

- เป็นการ **สร้างฐานข้อมูล** ด้วย — ไม่แนะนำให้ใช้ form ที่มีการเปลี่ยนแปลงบ่อย
- ตัวอย่าง form ในระบบ: **Vital Sign**
- ข้อมูลที่บันทึกจะถูก **เรียงลำดับตาม Processed On** ในตารางรวม

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

- การบันทึกจะระบุ **Processed On** เพื่อใช้ในการเรียงลำดับการแสดงผลในตารางรวม
- ตารางรวมให้ความสำคัญกับ **Processed On** เพราะมักมีการกรอกผลย้อนหลัง
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

## 7. Tab System (5 Tabs)

- **Tab 1** (นิพนธ์ — คลินิกพิเศษ โรคหัวใจ นอกเวลา): **editable** ทั้งหมด, มี badge **NEW**
- **Tab 2** (นิพนธ์ — อายุรกรรมทั่วไป ในเวลา): **editable** ทั้งหมด
- **Tab 3** (วิชัย — ภาพวินิจฉัย นอกเวลา): **readonly** ทุกฟิลด์ (`meta-readonly`), ปุ่ม Confirm inactive
- **Tab 4** (ปนัดดา — อายุรกรรมทั่วไป ในเวลา): **readonly** ทุกฟิลด์, ปุ่ม Confirm inactive
- **Tab 5** (HN 69001234 — ตารางข้อมูลทั้งหมด): ตารางรวม + filter
- **Tab 2, 3, 4 ซ่อน** จาก tab navigation (`display:none`)
- คลิก tab → ซ่อน content อื่น, แสดง tab ที่เลือก, อัปเดต `last update by` ตาม DVM/User ของ tab

---

## 8. Layout: 3-Column Grid (Tab 1–4)

### คอลัมน์ 1 — Forms
- รายการฟอร์ม (Vital Sign) มี checkmark ✓

### คอลัมน์ 2 — Form Editor
แบ่งเป็น 3 ส่วน:

- **Vital Signs**: Temp, HR, RR, BP, CRT, Pulse, FBS — 4 ฟิลด์/บรรทัด (`field-row-4`), input สั้น (`vs-input`), ค่าตัวอย่างเป็น placeholder สีเทา
- **Physical Examination**: Mucous Membrane, Consciousness, Lung Sound, Heart Sound — เป็น `<select>` ค่า default "กรุณาเลือกข้อมูล" (Tab 1–2), readonly text (Tab 3–4)
- **Critical Event**: checkbox grid (Cyanosis, Seizure, Arrest + dummy)

### คอลัมน์ 3 — Record Meta
- **req-tags**: ✓ Form, ✓ DVM/User, ✓ Dept, exam-card-ID
- **Processed on**: `datetime-local` (Tab 1–2) / readonly text (Tab 3–4)
- **DVM/User**: readonly ทุก tab
- **Department**: readonly ทุก tab
- **Form Note**: textarea (Tab 1–2) / readonly text (Tab 3–4)

---

## 9. Placeholder & Styling

- ค่าตัวอย่างใน input ทั้งหมดเป็น **placeholder** สีเทา (`#9ca3af`)
- Physical Examination `<select>` มี `<option value="" disabled selected>กรุณาเลือกข้อมูล</option>`
- Form Note textarea มี placeholder ตัวอย่างประโยคยาว

---

## 10. Processed on

- **Tab 1–2** (editable): `<input type="datetime-local">` ป้องกันแก้ไขด้วยตัวอักษรโดยตรง (`onkeydown="return false"`) เลือกจากปฏิทินเท่านั้น
- **Tab 3–4** (readonly): แสดงเป็น text สีเทาเข้ม (`#4b5563`, `font-weight: 500`)

---

## 11. Confirm & Toast

- ปุ่ม **Confirm** (Tab 1–2): เรียก `assessConfirm(tabNum)` → แสดง toast 2 วินาที แสดง DVM/User, Department, last update
- ปุ่ม **Confirm** (Tab 3–4): ปุ่ม inactive ไม่ทำงาน

---

## 12. ปุ่ม Close (✕)

- คลิก ✕ → เปิด **confirm overlay** เตือนข้อมูลที่ยังไม่บันทึก
- **ปิดโดยไม่บันทึก** (ปุ่มแดง) → ปิดทั้ง confirm + modal
- **กลับไปแก้ไข** (ปุ่มเขียว) → ปิดเฉพาะ confirm overlay

---

## 13. Tab 5 — ตารางข้อมูลทั้งหมด

### คอลัมน์ (18 คอลัมน์)

| # | คอลัมน์ | หมายเหตุ |
|---|---------|----------|
| 1 | Processed On | วันเวลาที่ประมวลผล (ใช้เรียงลำดับ) |
| 2 | Temp (°F) | อุณหภูมิ |
| 3 | HR (bpm) | อัตราการเต้นหัวใจ |
| 4 | RR (rpm) | อัตราการหายใจ |
| 5 | CRT (sec) | Capillary Refill Time |
| 6 | Pulse (bpm) | ชีพจร |
| 7 | BP (mmHg) | ความดันเลือด |
| 8 | FBS (mg/dL) | น้ำตาลในเลือด |
| 9 | Consciousness | ระดับสติ |
| 10 | Mucous Membrane | เยื่อเมือก |
| 11 | Lung Sound | เสียงปอด |
| 12 | Heart Sound | เสียงหัวใจ |
| 13 | Critical Event | เหตุวิกฤต (หลายค่าคั่นด้วย `,`) |
| 14 | DVM/User | สัตวแพทย์/ผู้ใช้ |
| 15 | Department | แผนก |
| 16 | Created on | วันที่สร้าง |
| 17 | Last Update | วันที่แก้ไขล่าสุด (บางแถวว่าง) |
| 18 | Exam Card ID | สีม่วง ถ้าไม่มีแสดง — สีเทา |

### ข้อมูล
- 20 แถว จำลองการทยอยใส่ (บางฟิลด์ว่าง)
- Processed On บางแถวตรง/ไม่ตรง Created on (ทั้งก่อนและหลัง)
- Last Update บางแถวว่าง (สุ่ม)
- Critical Event หนึ่งแถวมีหลายค่าคั่นด้วย `,` (comma)
- Exam Card ID: บางแถวมี id (เช่น `exam-card-69001234`), บางแถวเป็น `—` (ไม่มี exam card)

### CSS ตาราง
- `table-layout: auto`, `min-width: 1550px` — ตารางไม่ซ้อน, เลื่อนแนวนอนได้
- `padding-bottom: 60px` ที่ `.data-table-wrap` — เว้นพื้นที่ด้านล่าง
- `white-space: nowrap` สำหรับทุก cell

---

## 14. Filter — แถวที่ 1 (Numeric)

| ฟิลด์ | ประเภท | ตัวเลือก |
|-------|--------|----------|
| Temp (°F) | Numeric | `=`, `>`, `<` + กรอกค่า |
| HR (bpm) | Numeric | `=`, `>`, `<` + กรอกค่า |
| RR (rpm) | Numeric | `=`, `>`, `<` + กรอกค่า |
| CRT (sec) | Dropdown | ทั้งหมด, `<2`, อื่นๆ |
| Pulse (bpm) | Numeric | `=`, `>`, `<` + กรอกค่า |
| BP (mmHg) | Numeric | `=`, `>`, `<` + กรอกค่า |
| FBS (mg/dL) | Numeric | `=`, `>`, `<` + กรอกค่า |

### Logic
- ถ้าไม่กรอกค่า = ไม่กรองฟิลด์นั้น
- ถ้ากรอกค่าแต่ข้อมูลแถวนั้นว่าง = ไม่แสดงแถว
- CRT ใช้ dropdown เพราะมีค่า `<2` ที่ไม่ใช่ตัวเลขล้วน
  - **ทั้งหมด** = ไม่กรอง
  - **`<2`** = แสดงเฉพาะแถวที่ CRT = `<2`
  - **อื่นๆ** = แสดงแถวที่ CRT ไม่ใช่ `<2` และไม่ใช่ค่าว่าง
- ขอบ `select` + `input` ต่อเนื่องกัน (`height: 30px`, `box-sizing: border-box`)

---

## 15. Filter — แถวที่ 2 (Multi-check Dropdown)

| กลุ่ม | ตัวเลือก |
|-------|----------|
| Mucous Membrane | Pink (normal), Pale, Yellow, Red, Cyanosis |
| Consciousness | Alert, Depressed, Stupor, Comatose |
| Lung Sound | Normal, Crackles, Wheezes, Diminished, Absent |
| Heart Sound | Normal, Gallop, Murmur, Muffled, Arrhythmia |
| Critical Event | Cyanosis, Seizure, Arrest |

### Logic
- คลิกปุ่ม → เปิด panel, คลิกนอก → ปิดอัตโนมัติ
- เลือกหลายค่าได้ (**OR logic**)
- Critical Event เช็คแบบ **contains** เพราะหนึ่งแถวมีหลายค่าคั่นด้วย `,`
- Filter 2 แถว **ไม่มีเส้นแบ่ง** (`border-bottom` ถูกลบออก)

---

## 16. ปุ่ม Filter

- **ค้นหา**: กรองข้อมูลตามเงื่อนไขทั้งหมด (AND ระหว่างฟิลด์, OR ภายใน multi-check)
- **ล้างตัวกรอง**: รีเซ็ตค่าทั้งหมด (numeric, CRT, multi-check) แล้วแสดงข้อมูลทั้งหมด
