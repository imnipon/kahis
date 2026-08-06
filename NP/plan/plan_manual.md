# Plan Module — Manual & Logic Rule Summary

ไฟล์อ้างอิง:

- `plan_editor.html` — **ต้นฉบับ Editor** (ห้ามลบ)
- `plan_view.html` — มุมมองอ่านสรุป (skeleton)
- `for_dev_plan.md` — สเปกส่งต่อ Dev (Vue.js)
- `plan_user_manual_th.md` — คู่มือผู้ใช้ภาษาไทย + ตัวอย่าง event

---

## 1. Overview

- Header แบบ Objective: **KAHIS + Plan Editor**, Filters (By Date / DVM / Dept), View Logic/Rule, Go Today, Refresh, Close
- เลย์เอาต์แบบ QuillBot-inspired continuity: **Plans rail** (ซ้าย) + **Detail + Record Meta** เป็นการ์ดชุดเดียวกัน (ขวา) มีตัวเชื่อม highlight สีเขียวมะกอก (`#8a9a5a`)
- พื้น active (รายการที่เลือก + Detail + Meta) เป็นสีขาว · รายการที่ไม่ได้เลือกเป็นเทา เพื่อไม่กลืนกัน
- Visit tabs: การบันทึกต่อ DVM/แผนก (tab 1 ใช้งาน · tab 2–4 disabled แต่จำลองข้อมูลในตารางรวม) · **ตารางรวม plans** (tab 5)

---

## 2. Plans list (rail)

| ประเภท | พฤติกรรม |
| :--- | :--- |
| **Common Plan** | Message + templates / rich text |
| **VPE Plan** | รายการตรวจ (checkbox) จาก Vital & PE |
| **Lab Plan** | รายการส่งตรวจตัวอย่างทางห้องปฏิบัติการ |
| Form A / Form B | Title + Level เท่านั้น (ว่างรอออกแบบ) |

- เพิ่มซ้ำได้ด้วยปุ่ม **+**
- Draft (ยังไม่มี id) → **Delete** (ยืนยัน) · **Confirm** เพื่อได้ id
- Saved (มี id) → **Disable** แทน Delete · แก้ด้วย **Apply**
- Rail ของ tab 1 แสดงเฉพาะแผนของ visit tab 1 · แผนจาก tab อื่นอยู่เฉพาะในตารางรวม

---

## 3. Shared fields (ทุก form)

| ฟิลด์ | ประเภท | หมายเหตุ |
| :--- | :--- | :--- |
| **Title** | text | หัวข้อแผน |
| **Level Symbol** | icon × 3 | เขียว / เหลือง / แดง (tag เดียวกัน · ตารางแสดงเฉพาะ icon ไม่มีข้อความ) |

Subtitle ของ record band อยู่บรรทัดเดียวกับชื่อ form: `Saved · PLAN-… · Detail + Meta เป็นชุดเดียวกัน`

---

## 4. VPE Plan — รายการตรวจ

- Checkbox **ระดับหัวข้อ section** (เช่น `1. Core Vital Signs`) + checkbox **ครบทุกฟิลด์** ตาม Form Editor ของ Vital & PE (**47 ฟิลด์**)
- จัดกลุ่ม 8 section เดียวกับ `vital_pe_editor.html`
- ไม่กรอกค่าจริงใน Plan — แค่ระบุว่าให้ตรวจอะไร
- โน้ตอนาคตใน Detail ของทุก plan: Plans บางชนิดอาจย้ายไปเป็นส่วนของ VPE จริงได้

---

## 5. Lab Plan — รายการส่งตรวจตัวอย่างทางห้องปฏิบัติการ

กลุ่ม mock (อ้างอิงแผงที่ใช้บ่อย เช่น Cornell / Merck / IDEXX):

| กลุ่ม | ตัวอย่างรายการ |
| :--- | :--- |
| Hematology | CBC, WBC, RBC, Hb, Hct/PCV, PLT, Diff, Blood smear, Retic |
| Blood Chemistry | Chem panel, BUN, Creatinine, ALT, ALP, AST, GGT, … |
| UA | Complete UA, USG, Dipstick, Sediment, UPC |
| Path Lab | Cytology, Fluid cytology, Biopsy/Histopathology, Impression smear |

ยังไม่เชื่อม order/items จนกว่าจะมีระบบ order ในอนาคต

---

## 6. Record Meta

| ฟิลด์ | พฤติกรรม |
| :--- | :--- |
| **Schedule on** | วัน+เวลาเป้าหมายของแผน (`datetime-local`) + ปุ่ม Today — **ไม่ใช่** created date |
| DVM / User | readonly (จาก exam card / visit) |
| Department | readonly |
| Plan Note | หมายเหตุภายใน (บางรายการ mock ~10 บรรทัด) |
| Confirm / Apply | Draft → ได้ id + status `plan` · Saved → Apply |

### วันที่ Record / Update

- **Record Time** ของรายการที่บันทึกแล้ว = วัน **for-date** ของ visit (mock: `05/08/2026` / `2026-08-05`)
- **Update Time** มีบ้าง / ว่างบ้าง · ถ้ามีต้อง **ไม่เก่ากว่า for-date**
- รูปแบบแสดงผลทั้งตารางและ View: **`dd/mm/yyyy HH:mm`**

---

## 7. Status

| สถานะ | แหล่งตั้งค่า | กลับสถานะ |
| :--- | :--- | :--- |
| **Plan** | Confirm · Change จากตาราง · Enable จาก toggle | — |
| **Disable** | Toggle ใน **editor** หรือ **View ของเจ้าของ** เท่านั้น | Enable (Plan) ใน editor/View · หรือ Change → Plan จากตาราง |
| **Done** | Change → Done จากตาราง | Change → Plan จากตาราง |

### Toggle Disable ↔ Plan

- มี id แล้ว: ปุ่มสลับ `Disable` / `Enable (Plan)` ที่ editor และ View เจ้าของ
- ทุกครั้งที่สลับ → อัปเดต **Update Time / Update User**
- คนไม่ใช่เจ้าของไม่มีปุ่มนี้ใน View

### ตาราง Change

- ได้เฉพาะ **Plan** และ **Done**
- **ห้าม Disable จากตาราง** (กันกดผิดจากภาพรวม HN)
- แถว **Inactive (Schedule)** ห้าม Change

### การแสดงผลแถว Disable

- status = Disable → ทั้งแถวตัวอักษรจางแบบ Inactive + badge Disable

---

## 8. Active / Inactive (ตาราง — จาก Schedule)

เกณฑ์: เทียบ **วันที่ของ Schedule on** กับ **for-date** (ไม่นับเวลา)

- `Schedule on` วันที่ ≥ for-date → Active (ด้าน Schedule)
- `Schedule on` วันที่ &lt; for-date → Inactive (ท้ายตาราง · ป้าย Inactive)
- เรียงเก่า → ใหม่ ในแต่ละกลุ่ม
- กลับ Active (Schedule): แก้ Schedule on ≥ for-date แล้ว Apply

> **Disable** (สถานะ) ≠ **Inactive** (Schedule อดีต)

---

## 9. ตารางรวม plans (tab 5)

คอลัมน์:

`Schedule On | Plans | Title | Level | Plan Note | Status | DVM | Department | Action | Record Time | Record User | Update Time | Update User`

### Action

| ปุ่ม | พฤติกรรม |
| :--- | :--- |
| **View** | Detail + Meta · เจ้าของแก้ได้ + Disable/Enable |
| **Change** | Done หรือ Plan เท่านั้น · ไม่มี Disable |

คู่มือผู้ใช้ภาษาไทย + ตัวอย่าง event: **`plan_user_manual_th.md`**  
ในหน้า editor มีปุ่มเปิดเอกสารข้าง **View Logic/Rule**: คู่มือผู้ใช้ · Manual · For Dev

### สิทธิ์ View

- เจ้าของ (DVM + exam card) → แก้ + Apply + Disable/Enable
- คนละ DVM → อ่านอย่างเดียว
- จำลอง Disable หลายรายการในตาราง
- Schedule ตัวอย่าง: วันเดียวกันต่างเวลา / เวลาเดียวกันคนละ DVM

---

## 10. Tabs (visit)

| Tab | เนื้อหา |
| :--- | :--- |
| 1 · นิพนธ์ · CA หัวใจนอกเวลา | Editor ใช้งานจริง |
| 2–4 | Disabled ใน UI · มีแถวในตารางรวม |
| 5 · ตารางรวม plans | ตาราง + filter + View / Change |

---

## 11. ประวัติข้อกำหนด (สรุป)

1–8 ตาม iteration ก่อนหน้า (editor, VPE/Lab, ตาราง, View เจ้าของ, วันที่ dd/mm/yyyy HH:mm, Schedule A/B)  
9. Toggle Disable↔Plan + Update Time · View มี Disable · ตารางห้าม Disable · แถว Disable สไตล์ Inactive · คู่มือผู้ใช้ TH  

