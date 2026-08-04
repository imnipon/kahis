# Objective Module — Manual & Logic Rule Summary

ไฟล์อ้างอิง:

- `objective.html` — **ต้นฉบับ** (ห้ามลบ)
- `objective_quillbotdesign.html` — สำเนาสำหรับปรับ UI ใหม่ (QuillBot design)

> **เอกสารส่งต่อ Dev (Vue / component / data contract):** ดูที่ `for_dev_objective.md`

---

## 1. Overview

- Objective เป็นหน้า **อ่านสรุปของ visit ตาม Exam Card ID** — รวม Exam Card, Vital Sign & PE, TX/LAB/RX, Assessment ในแถวเดียว
- เปิดจากปุ่ม **Objective** → modal ขนาดคงที่ประมาณ `1400px × 95vh`
- ข้อมูลทุกบล็อกดึงเฉพาะรายการที่ผูก Exam Card / visit ที่เลือก
- ปุ่ม **i** ท้ายหัวข้อแต่ละบล็อกอธิบาย pattern ของบล็อกนั้น
- ปุ่ม **View Logic/Rule** เปิด modal สรุปกฎการทำงาน (เนื้อหาเดียวกับเอกสารนี้)

### Daily View (QuillBot design — `objective_quillbotdesign.html`)

Filters ค้นหา **แยก 3 โหมด** (แต่ละโหมดมีปุ่ม Search ของตัวเอง — ไม่ใช่ AND รวมสามช่อง):

| โหมด | พฤติกรรม |
| :--- | :--- |
| **By Date** (default) | เปิดหน้าแล้วโหลด Exam Card ของ **วันนี้** · เปลี่ยนวันจาก dropdown หรือปุ่มปฏิทิน แล้วกด Search |
| **By DVM** | เลือกสัตวแพทย์ → Search → ดึง Exam Card **ทั้งหมด** ของ DVM นั้น (ข้ามวัน) |
| **By Department** | เลือกแผนก → Search → ดึง Exam Card **ทั้งหมด** ของแผนกนั้น (ข้ามวัน) |

- ปุ่ม **Go Today** = กลับโหมด By Date เป็นวันนี้ แล้วโหลดใหม่
- รายการ Visit Tabs = ผลลัพธ์ของโหมดค้นหาล่าสุดเท่านั้น

---

## 2. Header / Dropdown / Tabs

| องค์ประกอบ | พฤติกรรม |
| :--- | :--- |
| Dropdown วันที่ | แสดง **วัน เดือน ปี + HN + ชื่อสัตว์** (เช่น `9 กรกฏาคม 2569 HN 69001234 ดุ๊กดิ๊ก`) |
| Date picker | เลือกวันที่ visit |
| Go to today | กลับไปวันปัจจุบัน |
| Tab 1–4 | visit ของสัตวแพทย์/แผนก — แสดง grid 4 บล็อก |
| Tab Vital Sign & PE (ตาราง) | สีม่วง — ตารางข้อมูล VPE ทั้ง HN |
| Tab Assessment (ตาราง) | สีส้ม — ตารางข้อมูล Assessment ทั้ง HN |
| Visit topbar | `for {date}` + `last update` ตาม DVM ของ tab ที่เลือก |
| ปุ่ม ✕ | confirm ก่อนปิด modal |

เส้นใต้ `visit-tabs` เปลี่ยนสีตาม tab ที่ active (น้ำเงิน / ม่วง / ส้ม)

---

## 3. Layout 4 บล็อก (Tab visit)

สัดส่วน grid:

| บล็อก | สัดส่วน | บทบาท |
| :--- | :--- | :--- |
| Exam Card | `3fr` | free-text ตาม topic จาก Exam Card |
| Vital Sign & PE | `2fr` | snapshot ค่าวัดตามเวลา |
| TX / LAB / RX | `2fr` | คำสั่งยา / ฉลากบ้าน / รายการตรวจ |
| Assessment | `2fr` | PDT ที่เลือก + Assessment Summary |

- คั่นด้วยเส้นแนวตั้ง ไม่ใช้การ์ดแยก; มุมล่างโค้ง 12px
- ตัวอักษรเนื้อหาเป็นสีเทา; หัวข้อบล็อกเข้มกว่า

---

## 4. Exam Card

- รูปแบบเดียวกับ **View History ใน Subjective** — free-text ตาม topic
- Pattern: **เลขที่. ชื่อ topic** → เส้นเดี่ยว → เนื้อหาขึ้นบรรทัดตามที่บันทึก
- หมวดย่อย (เช่น `DX:` / `TX:` / `RX:`) เป็นหัวข้อย่อย แล้วตามด้วยบรรทัดขึ้นต้น `-`
- โทน: บันทึกคลินิกบรรยาย ไม่ใช่ตารางฟิลด์ตายตัว

---

## 5. Vital Sign & PE

- แสดงเฉพาะรายการที่ตรง Exam Card ID เรียงเวลา **ใหม่ → เก่า**
- Pattern: **เวลา** → เส้นคู่ → เฉพาะฟิลด์ที่มีค่า (`Label: ค่า`) → เส้นเดี่ยวปิดรอบ
- ฟิลด์ว่าง → **ไม่แสดง**
- โทน: snapshot ค่าวัดตามเวลา ไม่มีข้อความเล่าเรื่อง

---

## 6. TX / LAB / RX

### Selected (มีกรอบเทาขอบบาง)

ทั้งสามส่วนใช้รูปแบบเดียวกัน:

1. หัวข้อ `XXX Selected Items (N บันทึกแล้ว)` + เส้นคู่
2. **เลขที่. ชื่อ (ตัวหนา)**
3. บรรทัดย่อยขึ้นต้นด้วย `→`

| ส่วน | บรรทัดย่อย |
| :--- | :--- |
| **TX Selected** | `→ Category \| Route \| Dose` แล้ว `→ เวลา (processed on)` รวมทุกรอบในลิสต์เดียว (ใหม่→เก่า) |
| **RX Selected** | `→` คำแนะนำวิธีใช้ / ข้อควรระวัง (หลายบรรทัดต่อรายการ) |
| **LAB/PATH Selected** | `→ Order Clinical Lab` หรือ `→ Order Pathology Lab` |

### Detail (ไม่มีกรอบ) — เฉพาะ Tx

- แยกบล็อกตามรอบเวลา: `Tx Summary — บันทึกแล้ว วันเวลา`
- เส้นเดี่ยว → `: note ของ order` → เส้นเดี่ยว
- ไล่ทีละตัวยา: ชื่อ — บันทึกแล้ว …; `-Field: ค่า`; Note เป็นข้อๆ ขึ้นต้นด้วย `-`
- **ไม่มี Detail ของ RX / LAB** — แสดงเฉพาะ Selected

---

## 7. Assessment

### Selected PDT (มีกรอบ)

- หัวข้อ + เส้นคู่ → `เลขที่. ชื่อ` → `→ Kind | Problem Type | Status` → `→ เวลา`

### Assessment Summary (ไม่มีกรอบ)

- หัวข้อ — บันทึกแล้ว วันเวลา → เส้นเดี่ยว → `: สรุปภาพรวมทางคลินิก` → เส้นเดี่ยว
- ไล่ทีละ PDT: ชื่อ — บันทึกแล้ว …
- ฟิลด์สั้น: `-Field: ค่า`
- ฟิลด์ยาว (Findings / Reasoning / Note / Relation): `-Field:` แล้วขึ้นบรรทัดใหม่เป็นข้อความธรรมดา **ไม่ใส่ `-` นำหน้า**
- โทน: ให้เหตุผลทางคลินิก ไม่ใช่ขั้นตอนให้ยา

---

## 8. ความต่างโทนการบรรยาย (สรุป)

| บล็อก | โทน |
| :--- | :--- |
| Exam Card | free-text ตาม topic |
| Vital Sign & PE | ค่าวัดตามเวลา |
| TX | คำสั่งในคลินิก + เวลา / order note |
| RX | ฉลากยาบ้าน / วิธีใช้ |
| LAB/PATH | รายการตรวจ + ประเภท order |
| Assessment | สรุปภาพรวม + หลักฐาน / reasoning ของ PDT |

---

## 9. ตารางข้อมูล (HN-level tabs)

### Tab Vital Sign & PE

- แสดงตารางข้อมูล Vital Sign & PE ทั้ง HN (ไม่ผูกแค่ visit เดียว)
- Filter ตาม topic ได้ (pattern เดียวกับ Vital & PE Editor)

### Tab Assessment

- แสดงตารางข้อมูล Assessment / PDT ทั้ง HN
- Filter ตามหมวด / สถานะ / ประเภทปัญหา ได้

---

## 10. กฎการดึงข้อมูล

1. เลือกวันที่ / visit จาก dropdown → โหลด Exam Cards ของวันนั้น
2. แต่ละ visit tab = 1 Exam Card (DVM + Department)
3. บล็อกทั้ง 4 ดึงเฉพาะข้อมูลที่ผูก **Exam Card ID** ของ tab นั้น
4. Tab ตาราง (VPE / Assessment) ดึงข้อมูลระดับ **HN** ทั้งชุด

---

## 11. ข้อจำกัดของ Mock

- เป็น UI / display pattern reference ไม่มี API persistence จริง
- ข้อมูลตัวอย่าง hardcode ใน HTML
- Confirm close เป็น UX เท่านั้น ไม่มีการบันทึก
- ตาราง VPE / Assessment เป็น mock data สำหรับดู layout และ filter
