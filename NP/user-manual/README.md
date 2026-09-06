# KAHIS User Manual (HTML → PDF)

คู่มือการใช้งาน KAHIS แบบ HTML สำหรับส่งออกเป็น PDF A4

## ทางเข้าหลัก (Portal)

https://imnipon.github.io/kahis/NP/user-manual/

หรือเปิดไฟล์ `index.html` ในโฟลเดอร์นี้ — มีสารบัญด้านซ้ายแบบ Explorer และลิงก์ไปแต่ละบท

## โครงสร้าง

```
user-manual/
├── index.html          # Portal / สารบัญ
├── README.md
├── manual-ui/          # HTML รายบท + CSS/JS พิมพ์
│   ├── chapter-01-….html
│   ├── chapter-02-….html
│   ├── chapter-03-….html
│   ├── chapter-04-vpe-editor.html
│   ├── chapter-05-assessment-editor.html
│   └── chapter-06-favorite-hn.html
└── Label/              # ภาพ Label ประกอบแต่ละบท
```

## เพิ่มบทใหม่

1. สร้างไฟล์ HTML ใน `manual-ui/`
2. วางภาพ Label ใน `Label/`
3. เพิ่มรายการในอาร์เรย์ `CHAPTERS` ภายใน `index.html`
4. (ถ้าต้องการ) เพิ่มใน `NP/files.js` / `NP/list.js` ของ kahis Explorer

## การสั่งพิมพ์ในแต่ละบท

| โหมด | เหมาะกับ | ตั้งค่าพิมพ์ |
|------|----------|-------------|
| **ขอบเท่ากัน** | เปิดจากเว็บ GitHub | ระยะขอบ = ไม่มี · เปิดกราฟิกพื้นหลัง |
| **ขอบมาตรฐาน** | เปิดไฟล์จากเครื่อง | ระยะขอบ = ค่าเริ่มต้น |

## บทที่ทำแล้ว

| บท | ไฟล์ HTML | ภาพ Label |
|----|-----------|-----------|
| 1 — ส่วนประกอบหลัก UI | `chapter-01-ui-components.html` | `Label/01_VR001.png` |
| 2 — ใบบันทึกการตรวจ | `chapter-02-exam-card-viewer.html` | `Label/02_VR004.png`, `Label/02_examcard_datepicker.png` |
| 3 — การลงข้อมูลใบบันทึกการตรวจ | `chapter-03-exam-card-editor.html` | `Label/03_VR005 …`, `Label/03_examcard_changedept.png` |
| 4 — การลงข้อมูล Vital Sign & PE (VPE) | `chapter-04-vpe-editor.html` | `Label/04_vpe_form.png`, `Label/04_vpe_full_detail.png` |
| 5 — การลงข้อมูล Assessment | `chapter-05-assessment-editor.html` | `Label/05_assessment_concept.png`, `Label/05_assessment_form.png`, `Label/05_assessment_table.png` |
| 6 — Favorite HN (รายการโปรด) | `chapter-06-favorite-hn.html` | `Label/06_favorite_hn_search.png`, `Label/06_favorite_hn_modal.png` |
