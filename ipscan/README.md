# IP Scanner - LAN Network Discovery Tool

Web app สำหรับค้นหา IP ในวงแลนที่เชื่อมต่ออยู่

## โครงสร้าง

```
ipscan/
├── package.json          # Root - รัน backend + frontend พร้อมกัน
├── server/
│   ├── index.js          # Express server (port 3001)
│   └── scanner.js        # IP scanning logic (ping + ARP + DNS)
└── client/
    ├── package.json      # Frontend dependencies
    ├── vite.config.js    # Vite config (port 5173, proxy /api -> 3001)
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── index.html
    └── src/
        ├── main.jsx
        ├── App.jsx       # Main UI component
        └── index.css
```

## วิธีรัน

```bash
# 1. Install dependencies
cd ipscan
npm run install:all

# 2. รันทั้ง backend และ frontend พร้อมกัน
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## ฟีเจอร์

- **Auto-detect network interface** - ตรวจจับ IP และ subnet อัตโนมัติ
- **Ping sweep** - สแกน IP ทั้งหมดใน subnet ด้วย ICMP ping
- **ARP table lookup** - ดึง MAC address ของอุปกรณ์ที่พบ
- **Reverse DNS** - ค้นหา hostname ของแต่ละ IP
- **Real-time progress** - แสดงความคืบหน้าแบบ real-time ผ่าน SSE
- **Search & Filter** - ค้นหาตาม IP, MAC, หรือ hostname
- **Export CSV** - ส่งออกผลลัพธ์เป็น CSV

## ข้อมูลที่ได้

| ข้อมูล | วิธีการ |
|---|---|
| IP ที่ active | Ping sweep |
| MAC Address | ARP table |
| MAC Vendor/Manufacturer | OUI database lookup |
| Hostname | Reverse DNS + NetBIOS |
| Workgroup | NetBIOS (Windows) |
| OS Guess | TTL analysis (Windows=128, Linux=64, Router=255) |
| Latency (ms) | Ping response time |
| TTL | From ping response |
| Open Ports | TCP connect scan (22 common ports) |
| ARP Type | dynamic/static |

## ข้อจำกัด

- ต้องรัน backend บนเครื่องที่อยู่ในวงแลนที่ต้องการสแกน
- Firewall อาจบล็อก ICMP ping
- การสแกน /24 (254 IPs) ใช้เวลาประมาณ 15-30 วินาที
- บางอุปกรณ์อาจไม่ตอบ ping แม้จะเชื่อมต่ออยู่
