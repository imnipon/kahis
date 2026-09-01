# Poodle Marker Studio

ระบบมาร์กเกอร์ภาพ (Image Label / Marker) แบบ **100% Local & Offline** — วางตัวเลข, ตัวอักษร, Textbox และ Rectangle บนภาพ พร้อม Export

## โครงสร้าง

```
poodle_marker_studio/
├── src/              # Source สำหรับแก้ไขพัฒนา
│   ├── index.html
│   ├── app.js
│   ├── styles.css
│   ├── fonts.css
│   ├── fonts/
│   └── lib/
├── app/              # เวอร์ชันพร้อมใช้งาน (เปิด index.html ได้ทันที)
│   └── (เหมือน src/)
├── build.bat         # คัดลอก src → app หลังแก้ไข
└── README.md
```

## วิธีใช้งาน

**เปิดใช้งานทันที (ไม่ต้อง build):**

- จาก KAHIS Explorer: `poodle_marker_studio/app/index.html`
- หรือเปิดไฟล์ `app/index.html` ผ่าน Live Server / static host

**หลังแก้ไขใน `src/`:**

```bat
build.bat
```

## เทคโนโลยี

- Vanilla HTML / CSS / JavaScript
- [Fabric.js](https://fabricjs.com/) 5.x (bundled ใน `lib/fabric.min.js`)
- IBM Plex Sans Thai (local fonts)
