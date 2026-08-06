# Plan Module — Handoff Specification for Vue.js Development

## 1. Purpose

เอกสารส่งต่อ Dev เพื่อนำ mock ของ Plan ไปพัฒนาเป็น module ในโปรแกรมหลัก (Vue.js)

Reference:

- `NP/plan/plan_editor.html` — **ต้นฉบับ Editor** (ฐาน UI + logic)
- `NP/plan/plan_view.html` — มุมมองอ่านสรุป (skeleton)
- `NP/plan/plan_manual.md` — Manual / display rules (ฉบับเต็ม)

---

## 2. Module Scope

### Plan Editor (per visit tab)

- Header: brand `KAHIS` / `Plan Editor`, Filters (By Date / DVM / Dept), Go Today, View Logic/Rule
- Layout:
  1. **Plans rail** — รายการแผนของ visit tab ปัจจุบัน (+ เพิ่มประเภท form)
  2. **Detail + Record Meta** — การ์ดชุดเดียวกัน · highlight เชื่อมกับรายการที่เลือก (olive)
- Form types: Common · VPE · Lab · Form A · Form B

### ตารางรวม plans (HN-level)

- รวมแผนข้ามวัน / ข้าม visit tab ของ HN เดียวกัน
- ไม่กระโดดกลับ editor ตาม filter date (เลิกใช้ Go)
- ใช้ **View** popup ต่อรายการ + สิทธิ์เจ้าของ

---

## 3. Key concepts

| แนวคิด | ความหมาย |
| :--- | :--- |
| **Schedule on** | วัน+เวลาเป้าหมายของแผน (target) — ไม่ใช่ created/processed |
| **for-date** | วันที่ visit ที่กำลังดู (เช่น `05/08/2026`) · เป็นเกณฑ์ Record / Update / Active |
| **Record Time** | เวลาบันทึก · อยู่บน for-date |
| **Update Time** | มีหรือไม่มีก็ได้ · ถ้ามีต้อง ≥ for-date |
| **Active / Inactive** | จากวันที่ Schedule on เทียบ for-date (ไม่นับเวลา) |
| **Owner edit** | DVM ของแผน = user ปัจจุบัน + exam card ตรง → แก้ใน View ได้ |

รูปแบบแสดงวันที่: **`dd/mm/yyyy HH:mm`** (เก็บภายในเป็น ISO/`YYYY-MM-DDTHH:mm` ได้)

---

## 4. Suggested Component Map

| Component | หน้าที่ |
| :--- | :--- |
| `PlanEditorModal` | Overlay + visit tabs + filters |
| `PlanRail` | รายการแผนของ visit ปัจจุบัน · เพิ่มประเภท |
| `PlanDetailPanel` | Title, Level, type-specific fields |
| `PlanRecordMeta` | Schedule on, DVM, Dept, Note, Confirm/Apply |
| `PlanSummaryTable` | ตารางรวม + filters |
| `PlanViewModal` | Detail+Meta ต่อ 1 plan · edit ถ้าเป็นเจ้าของ |
| `PlanStatusBadge` | Plan / Done / Disable / Inactive |
| `PlanLevelIcon` | tag icon เขียว/เหลือง/แดง |

---

## 5. Data Contract (ร่าง)

```
Plan {
  id?: string                    // null = draft
  uid: string                    // client key
  type: 'common' | 'vpe' | 'lab' | 'form-a' | 'form-b'
  title: string
  level: 'green' | 'yellow' | 'red'
  status: 'plan' | 'done' | 'disable'
  visitTab?: number              // origin visit tab (1–4)
  message?: string               // common
  vpe?: Record<string, boolean>  // field + sec-* keys
  lab?: Record<string, boolean>
  meta: {
    scheduleOn: string           // ISO datetime
    dvm: string
    department: string
    note?: string
    examCardId: string
    recordTime?: string
    recordUser?: string
    updateTime?: string
    updateUser?: string
  }
}
```

---

## 6. Business rules (ต้อง implement)

1. Draft ไม่มี id → Delete ได้หลังยืนยัน · Confirm ได้ id + status `plan`
2. Saved → สลับ Disable ↔ Plan (toggle) ที่ editor/View เจ้าของ · ทุกครั้ง stamp Update Time · Apply อัปเดตเนื้อหา
3. ตาราง Change: ได้เฉพาะ `done` | `plan` · **ห้าม** ตั้ง `disable` จากตาราง (กันกดผิดจากภาพรวม)
4. Inactive = `date(scheduleOn) < forDate` · เรียงท้าย · เก่า→ใหม่ · ห้าม Change
5. แถว `status=disable` แสดงสไตล์ตัวอักษรแบบ Inactive ทั้งแถว
6. View: `dvm === currentUserDvm && examCard matches` → editable + Apply + Disable toggle · ไม่งั้น readonly
7. VPE: checkbox section + ครบฟิลด์ Vital & PE (47) · Lab: Hemato / Chem / UA / Path
8. ไม่มี navigation จากตารางไป visit tab ตามวัน filter (เลิก Go)

คู่มือผู้ใช้ (TH + ตัวอย่าง event): `plan_user_manual_th.md`

---

## 7. API / integration (แนะนำ)

- `GET plans?hn=&from=&to=&status=&type=` สำหรับตารางรวม
- `GET/PATCH plan/:id` สำหรับ View/Apply
- สิทธิ์แก้: จาก exam-card membership + DVM owner (หรือ role ที่เทียบเท่า)
- Sync กับ Exam Card free-text Plan หรือไม่ — ยังเปิดเป็นคำถาม

---

## 8. Open Questions

- สิทธิ์แก้ให้ใช้เฉพาะ DVM เจ้าของ หรือรวม assistant ของแผนกเดียวกัน
- Inactive อัตโนมัติเปลี่ยน status จริงหรือเป็น display-only (mock ปัจจุบัน = display-only)
- เชื่อม Lab items กับระบบ order เมื่อพร้อมอย่างไร
