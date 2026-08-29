# KAHIS User Manual (HTML → PDF)

คู่มือการใช้งาน KAHIS แบบ HTML สำหรับ Export เป็น PDF A4

## โครงสร้าง

```
user-manual/
├── manual-ui/          # HTML, CSS, JS
│   └── chapter-01-ui-components.html
└── Label/              # ภาพ Label ประกอบแต่ละบท (NN_VR00N.png)
```

## เปิดใช้งาน

### GitHub Pages (แนะนำ — ใช้ Paged.js ได้)

https://imnipon.github.io/kahis/NP/user-manual/manual-ui/chapter-01-ui-components.html

- โหมด **Paged** → Export PDF → ระยะขอบ = **ไม่มี (None)**
- ขอบ 14mm ทุกด้าน

### เปิดไฟล์ตรงๆ (file://)

- ใช้โหมด **Legacy** → Export PDF → ระยะขอบ = **ค่าเริ่มต้น**
- ขอบ 14 / 14 / 14 / 26 mm

### Local server (ทดสอบ Paged.js บนเครื่อง)

```bat
cd manual-ui
start-server.bat
```

แล้วเปิด http://localhost:8080/chapter-01-ui-components.html

## บทที่ทำแล้ว

| บท | ไฟล์ HTML | ภาพ Label |
|----|-----------|-----------|
| 1 — ส่วนประกอบหลัก UI (VR001) | `chapter-01-ui-components.html` | `Label/01_VR001.png` |

## การตั้งชื่อภาพ

- Label: `NN_VR00N.png` (เช่น `01_VR001.png`)
- Manual ต้นฉบับ: เก็บใน `Manual/` (เพิ่มภายหลังเมื่อมีบทใหม่)
