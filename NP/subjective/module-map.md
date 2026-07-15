# Subjective Page — Module Map

> ใช้สำหรับสื่อสารระหว่างการพัฒนา อ้างอิงด้วยรหัสโมดูล (เช่น **C1b** = ปุ่ม Tx, **H4c-3** = Detail Grid ของ Tx)

---

## A. App Shell

| รหัส | ชื่อ | ID / Class | หน้าที่ |
|------|-----|-----------|---------|
| **A** | App Shell | `.app` | คอนเทนเนอร์หลักของทั้งหน้า |
| **A1** | Editor Header | `.editor-header` | แสดง "For 10 Jul 2026" |
| **A2** | Editor Body | `.editor-body` | แบ่งซ้าย-ขวา (topics-col + editor-col) |

---

## B. Topics Column (ซ้าย)

| รหัส | ชื่อ | ID / Class | หน้าที่ |
|------|-----|-----------|---------|
| **B** | Topics Column | `.topics-col` | คอลัมน์ซ้าย: รายการ topics |
| **B1** | Topics Header | `.topics-header` | ชื่อคอลัมน์ "Topics" |
| **B2** | Topics Nav | `#topicsNav` | รายการ 24 topics (History Taking → Rx) |

---

## C. Editor Column (ขวา)

| รหัส | ชื่อ | ID / Class | หน้าที่ |
|------|-----|-----------|---------|
| **C** | Editor Column | `.editor-col` | คอลัมน์ขวา: พื้นที่แสดงเนื้อหา |
| **C1** | Editor Col Header | `.editor-col-header` | คำว่า "Editor" + 3 ปุ่ม badge |
| **C1a** | Assessment Button | `.assessment-badge` | badge สีม่วง → เปิด `#assess-modal` |
| **C1b** | Tx Button | `.tx-badge` | badge สีฟ้า → เปิด `#tx-modal` |
| **C1c** | Rx Button | `.rx-badge` | badge สีเขียว → เปิด `#rx-modal` |
| **C2** | Topics Content | `#topicsContent` | พื้นที่แสดงเนื้อหา topic ที่เลือก |

---

## D. Assessment Modal (`#assess-modal`)

| รหัส | ชื่อ Block | ID / Class | รายละเอียด |
|------|-----------|-----------|-----------|
| **D** | Assessment Modal | `#assess-modal` | โอเวอร์เลย์หลัก |
| **D1** | Modal Header | `.assess-editor-header` | หัว modal: "Assessment Editor ↻" |
| **D1a** | Section Title | `.section-title` | ข้อความ "Assessment Editor ↻" |
| **D1b** | Exam Card Bar | `.examcard-bar` | แถบปุ่มด้านขวา |
| **D1b-1** | View Logic/Rule | `.logic-badge` | → เปิด `#logic-modal` |
| **D1b-2** | Go to Today | `.examcard-btn-out` | dropdown วันที่ |
| **D1b-3** | Date Picker | `.examcard-pick` | input type=date |
| **D1b-4** | Exam Card Select | `.examcard-select` | เลือกวันที่มีประวัติ |
| **D1b-5** | Go Button | `.examcard-go` | ปุ่มไป |
| **D1b-6** | Close (✕) | `.modal-close` | → เปิด `#assess-confirm` |
| **D2** | Visit Tabs | `.visit-tabs` | แถบ tab 5 ครั้งเยี่ยม |
| **D2-1** | Tab 1 | `.vtab[data-tab=1]` | นิพนธ์ — คลินิกพิเศษ โรคหัวใจ (NEW) |
| **D2-2** | Tab 2 | `.vtab[data-tab=2]` | นิพนธ์ — อายุรกรรมทั่วไป |
| **D2-3** | Tab 3 | `.vtab[data-tab=3]` | วิชัย — ภาพวินิจฉัย |
| **D2-4** | Tab 4 | `.vtab[data-tab=4]` | ปนัดดา — อายุรกรรมทั่วไป |
| **D2-5** | Tab 5 | `.vtab[data-tab=5]` | HN 69001234 — ตารางข้อมูลทั้งหมด |
| **D3** | Visit Topbar | `.visit-topbar` | "for 09 Jul 2026" + last update |
| **D4** | Tab Content (1-4) | `#content-1` ถึง `#content-4` | เนื้อหาแต่ละ tab (grid 4 ช่อง) |
| **D4a** | Panel 1: Categories | `.editor-panel` (1st) | รายการหมวด 10 หมวด |
| **D4b** | Panel 2: Problem/Diagnosis List | `.editor-panel` (2nd) | รายการปัญหา/วินิจฉัย + search |
| **D4c** | Panel 3: Selected Problems/Diagnosis | `.editor-panel` (3rd) | รายการที่เลือก + detail grid |
| **D4c-1** | Selected List | `.sel-list` | รายการที่เลือก (sel-row) |
| **D4c-2** | Detail Banner | `.detail-banner` | ชื่อรายการ active + tag |
| **D4c-3** | Detail Grid | `.detail-grid` | form: Problem Type, Prognosis, Status, Severity, Duration, Confidence, Findings, Reasoning, Note, Relation |
| **D4d** | Panel 4: Record Meta | `.editor-panel` (4th) | DVM, Department, Assessment Note |
| **D4d-1** | Required Tags | `.req-tags` | ✓ Problem, ✓ DVM, ✓ Dept, exam-card |
| **D4d-2** | DVM | `.form-group` | ชื่อสัตวแพทย์ |
| **D4d-3** | Department | `.form-group` | แผนก |
| **D4d-4** | Assessment Note | `textarea` / `.meta-readonly` | สรุปการประเมิน (active=textarea, inactive=meta-readonly) |
| **D4d-5** | Confirm Button | `.btn-confirm` / `.btn-confirm-inactive` | → `assessConfirm(tabNum)` |
| **D5** | Tab 5 (Table) | `#content-5` | ตารางข้อมูลทั้งหมด |
| **D5a** | Data Table Bar | `.data-table-bar` | search + filter dropdowns |
| **D5b** | Data Table | `.data-table` | ตารางรวมทุก tab |

---

## E-G. Assessment Sub-modals

| รหัส | ชื่อ | ID | เปิดจาก | หน้าที่ |
|------|-----|-----|---------|---------|
| **E** | Logic/Rule Modal | `#logic-modal` | D1b-1 | แสดงกฎการทำงาน |
| **F** | Confirm Close | `#assess-confirm` | D1b-6 | ยืนยันปิด modal |
| **G** | Toast | `#assess-toast` | D4d-5 | แสดงผลการบันทึก |

---

## H-K. Tx Modal (`#tx-modal`) — โคลนจาก Assessment และปรับแต่ง

| รหัส | ชื่อ Block | ID / Class | ความต่างจาก Assessment |
|------|-----------|-----------|----------------------|
| **H** | Tx Modal | `#tx-modal` | โอเวอร์เลย์หลัก |
| **H1** | Modal Header | `.assess-editor-header` | ชื่อ "Tx by exam card ↻" |
| **H1b-1** | View Logic/Rule | `.logic-badge` | → เปิด `#tx-logic-modal` |
| **H1b-6** | Close (✕) | `.modal-close` | → เปิด `#tx-confirm` |
| **H2** | Visit Tabs | `.visit-tabs` | เหมือน Assessment (5 tabs) |
| **H4a** | Panel 1: Categories | `.editor-panel` (1st) | 3 หมวด: ยาฉีด, สารน้ำ, หัตถการ |
| **H4b** | Panel 2: Items | `.editor-panel` (2nd) | รายการยา/หัตถการตามหมวดที่เลือก |
| **H4c** | Panel 3: Selected Items | `.editor-panel` (3rd) | รายการที่บันทึกแล้ว + Detail Grid |
| **H4c-1** | Selected List | `.sel-list` | รายการยา/หัตถการที่เลือก (2 บรรทัด: ชื่อ + badges) |
| **H4c-2** | Detail Banner | `.detail-banner` | ชื่อยา/หัตถการที่กำลังทำงาน |
| **H4c-3** | Detail Grid | `.detail-grid` | Route (select), Dose (input+unit select), Frequency (select), Note (textarea) |
| **H4d** | Panel 4: Record Meta | `.editor-panel` (4th) | DVM, Department, Tx Note |
| **H4d-4** | Tx Note | `textarea` / `.meta-readonly` | สรุปการสั่งยา/หัตถการ (active=textarea, inactive=meta-readonly) |
| **H5** | Tab 5 (Table) | `#tx-content-5` | ตารางรวมยา/หัตถการทั้งหมด |
| **I** | Tx Logic/Rule Modal | `#tx-logic-modal` | กฎการทำงานของ Tx |
| **J** | Tx Confirm Close | `#tx-confirm` | ยืนยันปิด Tx modal |
| **K** | Tx Toast | `#tx-toast` | แสดงผลการบันทึก Tx |

---

## L-O. Rx Modal (`#rx-modal`) — โคลนจาก Assessment (ยังไม่ปรับแต่ง)

| รหัส | ชื่อ | ID | สถานะ |
|------|-----|-----|-------|
| **L** | Rx Modal | `#rx-modal` | โคลนเหมือน Assessment ทุกอย่าง |
| **M** | Rx Logic/Rule | `#rx-logic-modal` | โคลน |
| **N** | Rx Confirm | `#rx-confirm` | โคลน |
| **O** | Rx Toast | `#rx-toast` | โคลน |

---

## P. หัวข้อใน Topics Column (24 หัวข้อ)

| ลำดับ | หัวข้อ | ประเภทการแสดงผล | ตัวเลือกในแต่ละหัวข้อ |
|------|--------|----------------|---------------------|
| 1 | History Taking | textarea + dropdowns | Remarkable (checkbox), My exam template (dropdown), Guideline (dropdown), Order (combined dropdown: Tx/Rx/LAB/PATH/all + แบบที่ 1-3) |
| 2 | History Medication and Food | textarea + dropdowns | เหมือนข้อ 1 |
| 3 | Note | textarea + dropdowns | เหมือนข้อ 1 |
| 4 | Appearance | textarea + dropdowns | เหมือนข้อ 1 |
| 5 | Hydration | textarea + dropdowns | เหมือนข้อ 1 |
| 6 | Abdomen | textarea + dropdowns | เหมือนข้อ 1 |
| 7 | Heart (Cardiology) | textarea + dropdowns | เหมือนข้อ 1 |
| 8 | Thorax | textarea + dropdowns | เหมือนข้อ 1 |
| 9 | Eye (Ophthalmology) | textarea + dropdowns | เหมือนข้อ 1 |
| 10 | Ear | textarea + dropdowns | เหมือนข้อ 1 |
| 11 | Nose | textarea + dropdowns | เหมือนข้อ 1 |
| 12 | Oral/Dental | textarea + dropdowns | เหมือนข้อ 1 |
| 13 | Musculoskeletal | textarea + dropdowns | เหมือนข้อ 1 |
| 14 | Neurological | textarea + dropdowns | เหมือนข้อ 1 |
| 15 | Dermatological | textarea + dropdowns | เหมือนข้อ 1 |
| 16 | Gynecological | textarea + dropdowns | เหมือนข้อ 1 |
| 17 | Urological | textarea + dropdowns | เหมือนข้อ 1 |
| 18 | Oncological | textarea + dropdowns | เหมือนข้อ 1 |
| 19 | Lymph nodes | textarea + dropdowns | เหมือนข้อ 1 |
| 20 | Add Images | upload | อัปโหลดรูป (จำกัด 5 รูป, 10 MB) |
| 21 | Assessment | read-only block | แสดงผลจาก Assessment Modal (สรุป + รายการที่เลือก + Detail Panel) |
| 22 | Tx | read-only block | แสดงผลจาก Tx Modal (สรุป + รายการยา/หัตถการ + Detail Panel) |
| 23 | Rx | read-only block | แสดงผลจาก Rx Modal (สรุป + รายการ + Detail Panel) |

---

## Q. ตัวเลือกใน Assessment Modal — Detail Grid (D4c-3)

| ฟิลด์ | ตัวเลือก | หมายเหตุ |
|------|---------|---------|
| **Problem Type** | Clinical Sign (Sign), Working Diagnosis (Dx), Differential Diagnosis (DDx), Rule Out (R/O) | เลือกแล้ว Prognosis จะ disabled เมื่อเลือก R/O |
| **Prognosis** | ตอบสนองการรักษาดี (Good), ต้องเฝ้าระวัง (Guarded), ความคืบหน้าไม่แน่นอน (Poor), อาการรุนแรงมาก (Grave) | disabled เมื่อ Problem Type = R/O |
| **Status** | กำลังรักษา (Active), รอผลการตรวจ (Pending), หาย/สงบ (Resolved/Inactive), ต่อเนื่อง (Follow), เรื้อรัง (Chronic) | |
| **Severity** | อาการเล็กน้อย (Mild), ปานกลาง (Moderate), รุนแรง (Severe), เสี่ยงอันตรายถึงชีวิต (Life-threatening) | |
| **Expected Duration** | text input | เช่น "1-3 วัน", "3-5 วัน" |
| **Confidence** | มีหลักฐานสนับสนุนชัดเจน (High), มีหลักฐานบางส่วน (Medium), เป็นไปได้แต่ยังไม่ยืนยัน (Low) | |
| **Confirmatory Findings** | textarea | ข้อความอิสระ |
| **Clinical Reasoning** | textarea | ข้อความอิสระ |
| **Problem Note** | textarea | ข้อความอิสระ |
| **Relation Diagnosis** | select (disabled) | "อยู่ในแผนพัฒนาระยะท้าย" |

---

## R. ตัวเลือกใน Tx Modal — Detail Grid (H4c-3)

| ฟิลด์ | ตัวเลือก | หมายเหตุ |
|------|---------|---------|
| **Route (วิธีให้ยา)** | ฉีดเข้าใต้ผิวหนัง (SC), ฉีดเข้ากล้ามเนื้อ (IM), ฉีดเข้าหลอดเลือดดำ (IV push), ฉีดเข้าหลอดเลือดดำแบบหยด (IV drip), ฉีดเข้าช่องท้อง (IP), ให้ทางสายให้อาหาร/ท่อ (per tube), ป้อนยาทางปาก (Oral), หยอดตา (Eye), หยอดหู (Ear), ทาภายนอก (Topical), พ่น/ดมทางเดินหายใจ (Inhalation) | disabled สำหรับหัตถการ |
| **Dose (ปริมาณ)** | input + unit: ซีซี (CC), มิลลิลิตร (ml), มิลลิกรัม (mg), เม็ด (Tablet), แคปซูล (Capsule), หยด (Drop), ลิตร/นาที (LPM), ยูนิต (Unit) | disabled สำหรับหัตถการ |
| **Frequency/Rate** | วันละ 1 ครั้ง (SID), วันละ 2 ครั้ง (BID), วันละ 3 ครั้ง (TID), วันเว้นวัน (EOD), ทุก 8 ชม., ทุก 12 ชม., ทุก 24 ชม., ครั้งเดียว (Single dose), ตามอาการ (PRN), ให้ต่อเนื่อง (Continuous/CRI), 40 ml/hr (minidrip), 60 ml/hr (minidrip), 80 ml/hr (minidrip), 100 ml/hr (macrodrip), 120 ml/hr (macrodrip) | disabled สำหรับหัตถการ |
| **Note** | textarea | ข้อความอิสระ |

### Tx Categories (3 หมวด)

| หมวด | รายการ |
|------|--------|
| **ยาฉีด (Injection)** | Prednisolone (predni), Enrofloxacin (enro), Maropitant (maropitant) |
| **สารน้ำ / IV Fluid** | NSS (nss), LRS (lrs), D5W (d5w), Acetar (acetar), Hetastarch (hetastarch), Blood (blood), Oxygen (oxygen) |
| **หัตถการ (Procedure)** | Wound care (wound), Urinary catheter (ucath), Enema (enema) |

---

## S. Badge และสีทั้งหมด

### S1. ปุ่ม Badge ใน Editor Header (C1)

| Badge | สีตัวอักษร | สีพื้นหลัง | สี border | สี dot | เปิด Modal |
|-------|-----------|----------|----------|-------|-----------|
| **Assessment** | #ea580c (ส้มเข้ม) | #fff7ed | #fdba74 | #f97316 | `#assess-modal` |
| **Tx** | #2563eb (น้ำเงิน) | #eff6ff | #93c5fd | #3b82f6 | `#tx-modal` |
| **Rx** | #16a34a (เขียวเข้ม) | #f0fdf4 | #86efac | #22c55e | `#rx-modal` |
| **Logic/Rule** | #db2777 (ชมพู) | #fdf2f8 | #f9a8d4 | #ec4899 | `#logic-modal` |

### S2. Badge ประเภทปัญหา (ptype) — แสดงใน sel-row และตาราง

| Badge | Class | สีพื้น | สีตัวอักษร | สี border |
|-------|-------|--------|-----------|----------|
| **Sign** | `.ptype.sign` | #e0f2fe (ฟ้าอ่อน) | #075985 | #bae6fd |
| **Dx** | `.ptype.dx` | #ffedd5 (ส้มอ่อน) | #9a3412 | #fed7aa |
| **DDx** | `.ptype.ddx` | #fef3c7 (เหลืองอ่อน) | #92400e | #fde68a |
| **R/O** | `.ptype.ro` | #d1fae5 (เขียวอ่อน) | #065f46 | #a7f3d0 |
| **Finding** | `.ptype.finding` | #ede9fe (ม่วงอ่อน) | #5b21b6 | #ddd6fe |
| **Disorder** | `.ptype.disorder` | #fce7f3 (ชมพูอ่อน) | #9d174d | #fbcfe8 |
| **Problem** | `.ptype.prob` | #ede9fe (ม่วงอ่อน) | #5b21b6 | #ddd6fe |

### S3. Badge สถานะ (Status)

| Badge | Class | สีพื้น | สีตัวอักษร | สี border |
|-------|-------|--------|-----------|----------|
| **Active** | `.status-active` | #ffedd5 (ส้มอ่อน) | #9a3412 | #fed7aa |
| **Pending** | `.status-pending` | #fef3c7 (เหลืองอ่อน) | #92400e | #fde68a |
| **Resolved/Inactive** | `.status-resolved` | #d1fae5 (เขียวอ่อน) | #065f46 | #a7f3d0 |
| **Follow** | `.status-follow` | #e0f2fe (ฟ้าอ่อน) | #075985 | #bae6fd |
| **Chronic** | `.status-chronic` | #f1f5f9 (เทาอ่อน) | #475569 | #e2e8f0 |

### S4. Badge พยากรณ์โรค (Prognosis)

| Badge | Class | สีพื้น | สีตัวอักษร | สี border |
|-------|-------|--------|-----------|----------|
| **Good** | `.prog-good` | #d1fae5 (เขียวอ่อน) | #065f46 | #a7f3d0 |
| **Guarded** | `.prog-guarded` | #e0f2fe (ฟ้าอ่อน) | #075985 | #bae6fd |
| **Poor** | `.prog-poor` | #ffedd5 (ส้มอ่อน) | #9a3412 | #fed7aa |
| **Grave** | `.prog-grave` | #fee2e2 (แดงอ่อน) | #991b1b | #fecaca |

### S5. Badge หมวดยา (Tx)

| Badge | Class | สีพื้น | สีตัวอักษร |
|-------|-------|--------|-----------|
| **ยาฉีด (med)** | `.tag-med` | #e0e7ff (ครามอ่อน) | #3730a3 |
| **สารน้ำ (fluid)** | `.tag-fluid` | #dcfce7 (เขียวอ่อน) | #166534 |
| **หัตถการ (proc)** | `.tag-proc` | #fef3c7 (เหลืองอ่อน) | #92400e |

### S6. Badge อื่นๆ

| Badge | Class | สีพื้น | สีตัวอักษร | ใช้ที่ไหน |
|-------|-------|--------|-----------|----------|
| **✓ Required (ok)** | `.tag.ok` | #e6f7ee (เขียวอ่อน) | #16a34a | Required Tags ใน Record Meta |
| **✗ Required (no)** | `.tag.no` | #fdeef0 (แดงอ่อน) | #e53935 | Required Tags (ยังไม่ครบ) |
| **visit/exam-card** | `.tag.visit` | #f3e8ff (ม่วงอ่อน) | #7c3aed | exam-card ID ใน Required Tags |

### S7. สีปุ่ม

| ปุ่ม | สีพื้น | สีตัวอักษร | สถานะ |
|------|--------|-----------|--------|
| **Confirm (active)** | #22c55e (เขียว) | #fff | กดได้ |
| **Confirm (inactive)** | #f3f4f6 (เทา) | #9ca3af | กดไม่ได้ (disabled) |
| **New Record** | #fff | #34d399 (เขียว) | สร้างรายการใหม่ |
| **Update** | #fffbeb (เหลืองอ่อน) | #d97706 | แก้ไขรายการที่มี |
| **Close (✕)** | #fff | #dc2626 (แดง) | ปิด modal |

---

## T. ความสัมพันธ์ระหว่างตัวเลือกกับส่วนแสดงผล

### T1. Assessment Modal → ส่วนแสดงผล 3 ที่

| แหล่งข้อมูล | ส่วนแสดงผล | Format |
|-------------|-----------|-------|
| ชื่อจาก Problem List | sel-row → `.pname` | ข้อความธรรมดา |
| ประเภทจาก Problem List (Finding/Disorder) | sel-row → `.sel-row-badges` | badge `.ptype.finding` หรือ `.ptype.disorder` |
| Problem Type (จาก Detail Grid) | sel-row → `.sel-row-badges` | badge `.ptype.sign` / `.ptype.dx` / `.ptype.ddx` / `.ptype.ro` |
| Status (จาก Detail Grid) | sel-row → `.sel-row-badges` | badge `.ptype.status-*` |
| เวลาบันทึก | sel-row → `.last-update` | `DD/MM/YY HH:MM` |
| Problem Type | Tab 5 ตาราง → คอลัมน์ Type | `tbl-badge` ดึงค่าสั้นจากวงเล็บ (เช่น Sign, Dx) |
| Status | Tab 5 ตาราง → คอลัมน์ Status | `tbl-badge` ดึงค่าสั้นจากวงเล็บ |
| Prognosis | Tab 5 ตาราง → คอลัมน์ Prognosis | `tbl-badge` ดึงค่าสั้นจากวงเล็บ หรือ `—` |
| Confirmatory Findings | Tab 5 ตาราง → คอลัมน์ CF | ข้อความธรรมดา หรือ `—` |
| Category | Tab 5 ตาราง → คอลัมน์ Category | ข้อความธรรมดา |
| DVM | Tab 5 ตาราง → คอลัมน์ DVM | ข้อความธรรมดา |
| Department | Tab 5 ตาราง → คอลัมน์ Department | ข้อความธรรมดา |
| Assessment Summary (textarea) | Topic 21 read-only block | `--- Assessment Summary ---` ตามด้วย `: <ข้อความ>` |
| รายการที่เลือกทั้งหมด | Topic 21 read-only block | `--- Selected Problems/Diagnosis (N selected) ---` ตามด้วย `ลำดับ. <ชื่อ> → <ประเภท> | <Problem Type> | <Status>` |
| ทุกฟิลด์ใน Detail Grid | Topic 21 read-only block → Detail Panel | `<label>: <Full Thai (Short)>` เช่น `Prognosis: ตอบสนองการรักษาดี (Good)` หรือ `-` |
| Confirmatory Findings / Reasoning / Note | Topic 21 read-only block | `- <ข้อความ>` ใน `.asm-detail` |
| Relation Diagnosis | Topic 21 read-only block | `- อยู่ในแผนพัฒนาระยะท้าย (disabled)` |

### T2. Tx Modal → ส่วนแสดงผล 3 ที่

| แหล่งข้อมูล | ส่วนแสดงผล | Format |
|-------------|-----------|-------|
| ชื่อยา/หัตถการ | sel-row → `.pname` | ข้อความธรรมดา |
| หมวดยา (tag) | sel-row → `.sel-row-badges` | badge `.tag-med` / `.tag-fluid` / `.tag-proc` |
| Route (วิธีให้ยา) | sel-row → `.sel-row-badges` | badge `.ptype.prob` ดึงค่าสั้นจากวงเล็บ (เช่น SC, IV drip) |
| Dose (ปริมาณ + unit) | sel-row → `.sel-row-badges` | badge `.ptype.status-active` (เช่น `0.4 CC`) |
| ทุกฟิลด์ | Tab 5 ตาราง → แต่ละคอลัมน์ | ข้อความธรรมดา (ไม่มี badge) |
| Tx Note (textarea) | Topic 22 read-only block | `--- Tx Summary ---` ตามด้วย `: <ข้อความ>` |
| รายการยาที่เลือก | Topic 22 read-only block | `--- Selected Items (N บันทึกแล้ว) ---` ตามด้วย `ลำดับ. <ชื่อ> → <หมวด> | <Route สั้น> | <Dose>` |
| หมวดยา | Topic 22 read-only block → Detail Panel | `Category: <ชื่อเต็ม>` |
| Route | Topic 22 read-only block → Detail Panel | `Route: <ชื่อเต็ม>` |
| Dose | Topic 22 read-only block → Detail Panel | `Dose: <ปริมาณ> <unit สั้น>` |
| Frequency | Topic 22 read-only block → Detail Panel | `Frequency/Rate: <ชื่อเต็ม>` |
| Note | Topic 22 read-only block → Detail Panel | แยกบรรทัดด้วย `- ` ใน `.asm-detail` |

### T3. Rx Modal → ส่วนแสดงผล

| แหล่งข้อมูล | ส่วนแสดงผล | Format |
|-------------|-----------|-------|
| ทุกฟิลด์ | Topic 23 read-only block | เหมือน Assessment (clone ยังไม่ปรับแต่ง) — ใช้ `--- Rx Summary ---` แทน `--- Tx Summary ---` |

### T4. กฎการแปลงค่า (Format Conversion)

| จาก (Modal select option) | สู่ sel-row badge | สู่ Tab 5 ตาราง | สู่ Topic read-only block |
|---------------------------|-----------------|----------------|------------------------|
| `Clinical Sign (Sign)` | `.ptype.sign` แสดง `Sign` | `tbl-badge .ptype.sign` แสดง `Sign` | `Clinical Sign` (เต็ม) |
| `Working Diagnosis (Dx)` | `.ptype.dx` แสดง `Dx` | `tbl-badge .ptype.dx` แสดง `Dx` | `Working Diagnosis` (เต็ม) |
| `Differential Diagnosis (DDx)` | `.ptype.ddx` แสดง `DDx` | `tbl-badge .ptype.ddx` แสดง `DDx` | `Differential Diagnosis` (เต็ม) |
| `Rule Out (R/O)` | `.ptype.ro` แสดง `R/O` | `tbl-badge .ptype.ro` แสดง `R/O` | `Rule Out` (เต็ม) |
| `กำลังรักษา (Active)` | `.status-active` แสดง `Active` | `tbl-badge .status-active` แสดง `Active` | `กำลังรักษา (Active)` (เต็ม) |
| `รอผลการตรวจ (Pending)` | `.status-pending` แสดง `Pending` | `tbl-badge .status-pending` แสดง `Pending` | `รอผลการตรวจ (Pending)` (เต็ม) |
| `หาย/สงบ (Resolved/Inactive)` | `.status-resolved` แสดง `Resolved/Inactive` | `tbl-badge .status-resolved` แสดง `Resolved/Inactive` | `หาย/สงบ (Resolved/Inactive)` (เต็ม) |
| `ต่อเนื่อง (Follow)` | `.status-follow` แสดง `Follow` | `tbl-badge .status-follow` แสดง `Follow` | `ต่อเนื่อง (Follow)` (เต็ม) |
| `เรื้อรัง (Chronic)` | `.status-chronic` แสดง `Chronic` | `tbl-badge .status-chronic` แสดง `Chronic` | `เรื้อรัง (Chronic)` (เต็ม) |
| `ตอบสนองการรักษาดี (Good)` | ไม่แสดงใน sel-row | `tbl-badge .prog-good` แสดง `Good` | `ตอบสนองการรักษาดี (Good)` (เต็ม) |
| `ต้องเฝ้าระวัง (Guarded)` | ไม่แสดงใน sel-row | `tbl-badge .prog-guarded` แสดง `Guarded` | `ต้องเฝ้าระวัง (Guarded)` (เต็ม) |
| `ความคืบหน้าไม่แน่นอน (Poor)` | ไม่แสดงใน sel-row | `tbl-badge .prog-poor` แสดง `Poor` | `ความคืบหน้าไม่แน่นอน (Poor)` (เต็ม) |
| `อาการรุนแรงมาก (Grave)` | ไม่แสดงใน sel-row | `tbl-badge .prog-grave` แสดง `Grave` | `อาการรุนแรงมาก (Grave)` (เต็ม) |
| `ฉีดเข้าใต้ผิวหนัง (SC)` (Tx) | `.ptype.prob` แสดง `SC` | ข้อความธรรมดา | `ฉีดเข้าใต้ผิวหนัง (SC)` (เต็ม) |
| `0.4` + `ซีซี (CC)` (Tx) | `.ptype.status-active` แสดง `0.4 CC` | ข้อความธรรมดา | `0.4 CC` (ดึง unit สั้น) |

### T5. หลักการสรุป

- **sel-row badges**: แสดงค่าสั้นจากวงเล็บ ในรูป badge มีสี
- **Tab 5 ตาราง (Assessment)**: แสดงค่าสั้นจากวงเล็บ ในรูป `tbl-badge` มีสี (เฉพาะ Type, Status, Prognosis)
- **Tab 5 ตาราง (Tx)**: แสดงเป็นข้อความธรรมดา ไม่มี badge
- **Topic read-only block**: แสดงค่าเต็มในรูป `Full Thai (Short)` ไม่มี badge ไม่มีสี ในรูป `label: value`
