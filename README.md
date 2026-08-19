# KAHIS

ชุด mock UI ของระบบ HIS (SOAP / Exam Card / Items) สำหรับเปิดดูและออกแบบบนเครื่องตัวเอง

อย่าเปิดไฟล์ผ่าน `file://` — หน้า Landing ใช้ `fetch` เพื่อดาวน์โหลดโฟลเดอร์เป็น ZIP และอ่าน Last-Modified จึงต้องรันผ่าน HTTP server

## Clone แล้วทำงานแบบ local

```bash
git clone https://github.com/imnipon/kahis.git
cd kahis
python3 -m http.server 8080
```

จากนั้นเปิด:

- Landing / Explorer: [http://localhost:8080](http://localhost:8080)
- Terminology builder: [http://localhost:8080/terminology_builder/app/](http://localhost:8080/terminology_builder/app/)

ถ้า port 8080 ถูกใช้แล้ว เปลี่ยนเลขพอร์ตได้ เช่น `python3 -m http.server 5500`

## โครงสร้างหลัก

| โฟลเดอร์ | ใช้ทำอะไร |
| --- | --- |
| `index.html` | Landing + Explorer ของโมดูล NP |
| `NP/` | Mock SOAP: Subjective, Vital/PE, Objective, Assessment, Plan, Items |
| `terminology_builder/` | เครื่องมือรวม terminology แบบ offline ในเบราว์เซอร์ |
| `resource/` | รูปอ้างอิง UI |
| `ipscan/` | เครื่องมือสแกน LAN (แยกจาก mock HIS) |

## IPScan (ถ้าต้องการ)

ต้องอยู่ในวง LAN ที่จะสแกน และใช้ Node.js

```bash
cd ipscan
npm run install:all
npm run dev
```

- Frontend: http://localhost:5173
- API: http://localhost:3001
