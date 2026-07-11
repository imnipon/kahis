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
