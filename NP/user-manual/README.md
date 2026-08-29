# KAHIS User Manual (HTML → PDF)

คู่มือการใช้งาน KAHIS แบบ HTML สำหรับส่งออกเป็น PDF A4

## โครงสร้าง

```
user-manual/
├── manual-ui/          # HTML, CSS, JS
│   └── chapter-01-ui-components.html
└── Label/              # ภาพ Label ประกอบแต่ละบท (NN_VR00N.png)
```

## การสั่งพิมพ์ — เลือกโหมด

| โหมด | เหมาะกับ | ตั้งค่าพิมพ์ |
|------|----------|-------------|
| **ขอบเท่ากัน** | เปิดจากเว็บ GitHub | ระยะขอบ = ไม่มี · เปิดกราฟิกพื้นหลัง |
| **ขอบมาตรฐาน** | เปิดไฟล์จากเครื่อง | ระยะขอบ = ค่าเริ่มต้น |

### เปิดจาก GitHub Pages (แนะนำ)

https://imnipon.github.io/kahis/NP/user-manual/manual-ui/chapter-01-ui-components.html  
https://imnipon.github.io/kahis/NP/user-manual/manual-ui/chapter-02-exam-card-viewer.html

เลือกโหมด **ขอบเท่ากัน** → ส่งออก PDF

### เปิดไฟล์จากเครื่อง (file://)

เลือกโหมด **ขอบมาตรฐาน** → ส่งออก PDF (ขอบบน 26 มม. · ล่าง 14 มม.)

### Local server

```bat
cd manual-ui
start-server.bat
```

แล้วเปิด http://localhost:8080/chapter-01-ui-components.html หรือ chapter-02-…

## บทที่ทำแล้ว

| บท | ไฟล์ HTML | ภาพ Label |
|----|-----------|-----------|
| 1 — ส่วนประกอบหลัก UI (VR001) | `chapter-01-ui-components.html` | `Label/01_VR001.png` |
| 2 — ประวัติและ Exam Card Editor (VR004) | `chapter-02-exam-card-viewer.html` | `Label/02_VR004.png` |

## การตั้งชื่อภาพ

- Label: `NN_VR00N.png` (เช่น `01_VR001.png`)
- Manual ต้นฉบับ: เก็บใน `Manual/` (เพิ่มภายหลังเมื่อมีบทใหม่)
