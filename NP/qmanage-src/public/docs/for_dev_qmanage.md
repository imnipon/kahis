# Board — Queue Management (qmanage) — Handoff Specification for Dev

## 1. Purpose

เอกสารส่งต่อ Dev เพื่อนำ mock ของระบบจัดการคิว โมดูล **Board** (qmanage) ไปพัฒนาเป็น module จริงที่เชื่อมกับ KAHIS

Reference:

- `NP/qmanage-src/` — **ต้นฉบับ mockup** (Vite + React + TypeScript + Tailwind) — ฐาน UI + logic ทั้งหมด
- `NP/qmanage/` — build output (static site) ที่ deploy บน GitHub Pages
- ปุ่ม "จัดคิว" บนตารางลงทะเบียนเดิมของ KAHIS คือจุดเรียกเข้าโมดูลนี้ (เปิดหน้าต่าง/แท็บใหม่)

---

## 2. Module Scope

### หน้าเจ้าหน้าที่ (Staff — ไม่ขึ้นจอสาธารณะ)

หน้าเดียว **`WorklistPage`** ("รายการลงทะเบียน") ครอบทั้งสองโหมดผ่าน tab สถานี (ไม่มี route แยกอีกต่อไป — `/unassigned` ถูกลบ):

- **แถบ tab สถานี**: `ทั้งหมด` → `ไม่จัดกลุ่มคิว` (สีเหลือง/amber ไฮไลต์) → รายชื่อสถานีคลินิก/terminal ทั้งหมด
- **โหมดปกติ** (`ทั้งหมด` หรือเลือกสถานีใดสถานีหนึ่ง): ตารางรวมทุกคิวที่ "จัดเข้าสถานีแล้ว" มีค้นหา + filter สถานะ + filter วันที่ (ตัวอย่าง UI), action หลักคือ "จัดการคิว" (เรียก/พัก/ส่งต่อ) และ "ประวัติ" — ดูกฎการแสดงผลหลายแถวต่อ 1 visit ใน §6.4
- **โหมด "ไม่จัดกลุ่มคิว"** (tab เฉพาะ): สลับเนื้อหาตารางเป็น `UnassignedTable` — รายการที่ auto-detect หาสถานีไม่ได้ (รหัส HIS ไม่ตรง / ลงทะเบียนเอง) action หลักคือ "จัดคิวเข้าสถานี" (มีเฉพาะ tab นี้ — ตารางหลักไม่มีปุ่มนี้ ย้ายสถานีทำผ่าน "ส่งต่อ" เท่านั้น) ซ่อน filter สถานะ/วันที่เพราะไม่มีความหมายกับ tab นี้ แต่ยังใช้กล่องค้นหาเดียวกัน (แชร์ state กับตารางหลัก)
- ปุ่ม **"เปิดจอ"** (เปิดจอแสดงผลสาธารณะในหน้าต่างใหม่) อยู่ชิดขวาของหัวข้อ H1 "รายการลงทะเบียน"/"ไม่จัดกลุ่มคิว" — แสดงเสมอไม่ว่าจะอยู่ tab ไหน (ย้ายมาจาก header กลางของแอปเดิม)

### จอแสดงผลสาธารณะ (`MonitorPage`)

- เปิดจากปุ่ม "เปิดจอ" ในหน้า `WorklistPage` — คนละหน้าต่าง/แท็บ, sync ผ่าน `localStorage` storage event
- แบ่งตาม tab สถานี (เฉพาะสถานีที่ `publicDisplay: true` — ไม่รวม `UNASSIGNED`)
- คอลัมน์: รอเรียก / กำลังเรียก / กำลังดำเนินการ+พัก / เรียกไม่มา — ไม่แสดงแถวที่ `done`/`refer_to`
- ไม่มี icon สถานีแล้ว (เอาออกทั้งที่ tab และ header banner) — ใช้สีพื้นหลัง + code/ชื่อสถานีล้วน
- แต่ละคอลัมน์แสดงข้อมูลต่างกัน (ตั้งใจไม่โชว์เวลาทุกที่ — จอสาธารณะควรเรียบง่าย):

  | คอลัมน์ | แสดง | ไม่แสดง |
  | :--- | :--- | :--- |
  | รอเรียกรับบริการ (`waiting`) | เลขคิวอย่างเดียว | เวลา / ห้อง |
  | กำลังเรียก (`calling`) | ห้องตรวจ (จำลอง — งานจริงมีห้องกำกับ user เสมอ) + เวลาที่กด **"เรียก"** (`calledAt`) | — |
  | กำลังดำเนินการ / พัก (`in_progress`, `on_hold`) | ห้องตรวจ | เวลา |
  | เรียกไม่มา (`missed`) | เลขคิวอย่างเดียว | เวลา / ห้อง |

  สีของ `on_hold` (ส้ม/พีช) ตั้งใจให้ต่างจาก `missed` (เทา) อย่างชัดเจน เพื่อไม่ให้เจ้าหน้าที่สับสนว่าเป็นสถานะเดียวกัน — สีส้มเดียวกันนี้ใช้ย้อมคำว่า "/ พัก" ("/ ON HOLD") ใน title ของคอลัมน์ "กำลังดำเนินการ" ด้วย เพื่อบอกว่าคอลัมน์นี้รวม 2 สถานะ
- ป้ายคิวของ "รอเรียกรับบริการ" ใช้สีอ่อน (พื้นจาง + ตัวอักษรสีสถานี) ต่างจาก "กำลังเรียก" ที่ใช้สีเข้มเต็ม (ไล่ระดับความสำคัญทางสายตา — กำลังเรียกต้องเด่นที่สุด)
- ความสูงคอลัมน์ฝั่งขวา: "กำลังดำเนินการ/พัก" : "เรียกไม่มา" = **2 : 1** (คอลัมน์ที่ต้องการความสนใจของเจ้าหน้าที่มากกว่าได้พื้นที่มากกว่า)

---

## 3. Key concepts

| แนวคิด | ความหมาย |
| :--- | :--- |
| **QueueItem** | ข้อมูล check-in 1 รายการจาก HIS (คงที่ตลอด lifecycle — HN, สัตว์เลี้ยง, เจ้าของ, hisQRaw ฯลฯ) |
| **visitNo** | เลขที่ visit ของการมาครั้งนี้ (field ของ `QueueItem`, รูปแบบ `VNYY123456` — เหมือน `hn` แต่มี prefix `VN`) คนละความหมายกับ `hn` ที่เป็นเลขทะเบียนสัตว์ (คงที่ข้ามการมาแต่ละครั้ง) — แสดงเป็นบรรทัดที่ 2 ใต้ HN ในทุกตาราง (มี mono font, สีจาง) |
| **StationVisit** | สถานะของ QueueItem ณ สถานีหนึ่ง (upsert ต่อ `queueItemId + stationCode`) — เปลี่ยนได้ตลอด, 1 QueueItem มีได้หลาย StationVisit (ประวัติผ่านหลายสถานี) — ตั้งแต่การ redesign ล่าสุด **Worklist แสดงทุก StationVisit ที่ไม่ใช่ `UNASSIGNED`** ไม่ใช่แค่ตัวที่ตรงกับ `currentStation` เท่านั้น (ดู §6.4) |
| **preCallStatus** | field ของ `StationVisit` (`VisitStatus \| null`) — เก็บสถานะ "ก่อนกด เรียก" ไว้ทุกครั้งที่ `callVisit` เปลี่ยนเป็น `calling` เพื่อให้ปุ่ม "กดผิด" คืนค่าได้ (ดู §6.3) |
| **QueueLog** | audit trail แบบ append-only — ไม่ลบ/ไม่แก้ ใช้แสดงในหน้า "ประวัติ" |
| **Q1 (primaryHisQ)** | รหัสคิวชุดแรกจาก HIS (สูงสุด 6 ชุด คั่นด้วย comma) — ใช้ auto-detect สถานีเท่านั้น ชุดอื่น (Q2-Q6) แสดงผลแต่ไม่ใช้ logic |
| **checkInAt vs referAt** | `checkInAt` = เวลาเช็คอินจริงจาก HIS (อาจเป็นวันก่อนหน้า เช่น refer จาก ward) · `referAt` = เวลาส่งต่อ **วันนี้เสมอ** (null ถ้ายังไม่เคยส่งต่อ) |
| **currentStation** | สถานีที่ QueueItem "active" อยู่ตอนนี้ (รวม `UNASSIGNED`) — ย้ายทุกครั้งที่ assign/ส่งต่อ |
| **Terminal station** | `PHARMACY`/`FINANCE` — ปลายทางบังคับเมื่อกด "จบ/ออกจากห้องตรวจ" จากสถานีคลินิก (หรือส่งต่อสถานีคลินิกอื่นก็ได้) |

รูปแบบแสดงเวลา: **`HH:mm`** ถ้าเป็นวันนี้ / **`dd/mm/yyyy(พ.ศ.) HH:mm`** ถ้าไม่ใช่วันนี้ (ดู `formatDateTime()`) — **ยกเว้นคอลัมน์ Time ของ Worklist/Unassigned** ที่ใช้ `formatDateTimeFull()` แสดงวันที่เต็มเสมอแม้เป็นวันนี้ (ดู §6.6 และ §6.7 สำหรับเหตุผล)

---

## 4. Suggested Component Map

| Component | หน้าที่ |
| :--- | :--- |
| `WorklistPage` | ตารางรวมคิวที่จัดสถานีแล้ว + tab สถานี (รวม tab "ไม่จัดกลุ่มคิว") + filter + ปุ่ม "เปิดจอ" |
| `UnassignedTable` | ตารางคิวที่ยังไม่จัดกลุ่ม + ปุ่มจัดคิว — เรนเดอร์ภายใน `WorklistPage` เมื่อเลือก tab "ไม่จัดกลุ่มคิว" (ไม่มี route แยกแล้ว) รับ `search` เป็น prop จากตารางหลัก |
| `MonitorPage` | จอแสดงผลสาธารณะ แบ่งคอลัมน์ตามสถานะ |
| `StationAssignModal` | จัดคิวเข้าสถานี (ครั้งแรก/override) — auto-suggest จาก Q1 |
| `StatusModal` | เรียก/พัก/ส่งต่อ/จบงาน ตาม state machine (ดู §6.3) — มีปุ่ม "View" + หน้าจอ "Go to Vetroom Tab" (ดู §6.3.1) และบังคับตัดสินใจระหว่าง `calling` (ดู §6.3.2) |
| `Modal` | shell กลาง รองรับ `dismissable` (ปิด X + backdrop-click เมื่อ false) และ `headerExtra` (ปุ่มเสริมซ้ายของ X เช่นปุ่ม View) |
| `LogModal` | timeline ของ `QueueLog` ต่อ 1 QueueItem |
| `StationBadge` / `StatusBadge` | badge สี ไม่มี icon พื้นหลังสีจาง (alpha-blend จาก `station.color`) |
| `QCell` | เรนเดอร์ Q1-Q6 (3 ต่อบรรทัด), Q1 highlight สีตามสถานีที่ map ไป |

---

## 5. Data Contract (ร่าง — ดู `src/types.ts` ของจริง)

```
QueueItem {
  id: string
  hn: string                // "YYNNNNNN" — YY = ปี พ.ศ. 2 หลักของปีที่ลงทะเบียนครั้งแรก (เช่น "53" = พ.ศ. 2553), NNNNNN = เลข 6 หลัก (mock: สุ่มล้วน ไม่การันตี unique — งานจริงต้องเป็นเลขทะเบียนจริงจาก HIS)
  visitNo: string            // "VNYYNNNNNN" — เลขที่ visit ของการมาครั้งนี้ (รูปแบบเดียวกับ hn แต่มี prefix "VN") แสดงบรรทัดที่ 2 ใต้ HN
  petName: string
  species: string
  ownerName: string
  dvmName: string
  hisNote: string          // จำลองข้อความ/อาการเบื้องต้นจาก HIS (คนละส่วนกับ StationVisit.note)
  room: string
  hisQRaw: string           // ดิบจาก HIS เช่น "MA001, SA045" ("" = กรอกเอง)
  hisQList: string[]        // parsed สูงสุด 6 ชุด
  primaryHisQ: string       // Q1 — ใช้ auto-detect
  isManualEntry: boolean
  checkInAt: string          // ISO — อาจไม่ใช่วันนี้
  currentStation: string     // รวม 'UNASSIGNED'
}

StationVisit {
  id: string                 // `${queueItemId}__${stationCode}`
  queueItemId: string
  stationCode: string
  status: 'waiting' | 'calling' | 'missed' | 'in_progress' | 'on_hold'
        | 'done' | 'refer_from' | 'refer_to'
  referAt: string | null     // ISO — วันนี้เสมอถ้ามีค่า
  referPeerStation: string | null   // สถานีอีกฝั่งของการส่งต่อ (หรือ 'WARD')
  enteredAt: string
  calledAt: string | null
  preCallStatus: VisitStatus | null   // สถานะก่อนกด "เรียก" — set ตอน callVisit, ใช้คืนค่าตอนกด "กดผิด" (undoCall)
  updatedAt: string
  updatedBy: string
  note: string                // audit note ภายใน (คนละส่วนกับ QueueItem.hisNote)
}

QueueLog {
  id: string
  queueItemId: string
  stationCode: string
  action: string
  note: string
  actor: string
  at: string
}
```

---

## 6. Business rules (ต้อง implement)

### 6.1 HIS auto-detect (`parseHisQRaw`)

1. แยก `hisQRaw` ด้วย comma → สูงสุด 6 ชุด → ดูแค่ **ชุดที่ 1 (Q1)**
2. รูปแบบที่รองรับ: ตัวอักษร 2 ตัว + เลขอย่างน้อย 3 หลัก (เช่น `MA001`)
3. จับคู่ตัวอักษร 2 ตัวแรกกับ `StationMappingRule` → ได้สถานีคลินิก
4. ไม่ match (รูปแบบผิด / ไม่มีสถานีนี้ / `hisQRaw` ว่าง) → เข้ากลุ่ม **`UNASSIGNED`** ต้องจัดคิวมือ

### 6.2 Station list

- คลินิก (8): `MA WI ER SA SX VA EX CA`
- Terminal (2, ปลายทางบังคับตอนจบงานจากคลินิก): `PHARMACY` (ยานำกลับ), `FINANCE` (การเงิน)
- Virtual (1, ไม่ขึ้นจอสาธารณะ): `UNASSIGNED`

### 6.3 Status state machine

ปุ่มในตารางนี้เรียงตามลำดับ **ซ้าย→ขวา** ที่ `StatusModal` ต้อง render จริงสำหรับ status นั้น (ดู §6.3.2 สำหรับ layout ปุ่มแบบเต็มต่อสถานะ):

| จาก | Action | ไป | เงื่อนไข |
| :--- | :--- | :--- | :--- |
| `waiting` / `refer_from` | เรียก | `calling` | ทุกสถานี (คลินิก + terminal) — capture `preCallStatus = v.status` ก่อนเปลี่ยน |
| `waiting` / `refer_from` / `on_hold` | ส่งต่อ (ด่วน) | `refer_to` (ต้นทาง) / `refer_from` (ปลายทาง) | ปลายทาง = สถานีคลินิกอื่นเท่านั้น |
| `calling` | เข้าห้องตรวจ/เข้ารับบริการ | `in_progress` | ไม่ปิด modal ทันที — เปลี่ยนไปแสดงหน้าจอ "Go to Vetroom Tab" แทน (ดู §6.3.1) |
| `calling` | เรียกไม่มา | `missed` | ปิด modal ตามปกติ |
| `calling` | **กดผิด** (ใหม่) | `preCallStatus` (หรือ `waiting` ถ้าไม่มีค่า) | `undoCall` — เคลียร์ `preCallStatus`/`calledAt`, log "กดผิด (ยกเลิกการเรียก)", ปิด modal |
| `missed` | เรียกอีกครั้ง | `calling` | ปุ่มนี้ไม่ปิด modal ทันที เช่นเดียวกับ "เรียก" (ดูหมายเหตุท้ายตาราง) |
| `in_progress` (คลินิก) | จบ/ออกจากห้องตรวจ | `refer_to`/`refer_from` | **บังคับเลือกปลายทางเสมอ**: สถานีคลินิกอื่น หรือ `PHARMACY`/`FINANCE` |
| `in_progress` (คลินิก) | พัก (ใหม่) | `on_hold` | เดิมพักได้จาก `waiting` เท่านั้น — ตอนนี้เพิ่มเส้นทางพักกลางที่ตรวจ (เช่นรอผลแล็บ) |
| `in_progress` (terminal) | จบงาน | `done` | ไม่บังคับส่งต่อ (จบจริง) |
| `on_hold` | เข้าห้องตรวจ/เข้ารับบริการ (ย้ายมาจากปุ่ม "กลับมารอเรียก" เดิม) | `in_progress` | เหมือน `calling`: ไม่ปิด modal ทันที ไปหน้า "Go to Vetroom Tab" แทน |
| `on_hold` | พัก (แสดงเป็น indicator เฉยๆ) | — | **ไม่ทำอะไร** — ปุ่มนี้ disabled/inert ใช้บอกสถานะปัจจุบันเท่านั้น ไม่ใช่ action จริง |
| `on_hold` | ส่งต่อ | `refer_to`/`refer_from` | เหมือนแถวส่งต่อด่วนด้านบน |
| `done` / `refer_to` | — | — | ปิดแล้ว ไม่มี action เพิ่ม (แสดงจาง + ตกท้ายตาราง) |

> **`StatusModal` — ปุ่ม "เรียก"/"เรียกอีกครั้ง" ไม่ปิด modal:** กด "เรียก" (จาก `waiting`/`refer_from`/`missed`) แล้ว modal ต้องเปิดต่อ เพื่อให้เจ้าหน้าที่กดต่อไปยัง "เข้าห้องตรวจ"/"เข้ารับบริการ", "เรียกไม่มา", หรือ "กดผิด" ได้ทันทีในหน้าเดิม (modal re-render ตาม state ล่าสุดของ `visit`)

#### 6.3.1 "Go to Vetroom Tab" — placeholder convention

ทุก transition ที่เปลี่ยนสถานะเป็น `in_progress` (ทั้งจาก `calling` และจาก `on_hold`) **ไม่ปิด `StatusModal` ทันที** — เปลี่ยนเนื้อหาภายใน modal เดิมเป็นข้อความกลาง "Go to Vetroom Tab" + คำอธิบายสั้นว่าเป็น placeholder (ตัวอย่าง UI เท่านั้น ในระบบจริงต้อง navigate ไปแท็บ/หน้าห้องตรวจของสัตวแพทย์จริง) โมดัลในสถานะนี้ยังปิดได้ปกติด้วยปุ่ม X/backdrop (ยกเว้นกรณีมาจาก `calling` ที่ modal เดิมถูก lock อยู่ — ดู §6.3.2 จะมีปุ่ม "ปิดหน้าต่างนี้" แทน)

ปุ่ม **View** (มุมขวาบนของ `StatusModal`, ข้าง X) ก็เปิดหน้าจอนี้ได้เช่นกันโดยไม่เปลี่ยนสถานะใดๆ — ใช้เมื่อเจ้าหน้าที่ต้องการดูตัวอย่างหน้าห้องตรวจโดยไม่ต้องกด action ก่อน มีให้กดได้ทุกสถานะ **ยกเว้น** `calling`

#### 6.3.2 `calling` — บังคับตัดสินใจ (forced decision) + "กดผิด"

ระหว่างสถานะ `calling`, `StatusModal` เปลี่ยนพฤติกรรมเพื่อบังคับให้เจ้าหน้าที่ตัดสินใจก่อนปิดหน้าต่าง:

- **ไม่มีปุ่ม X**, **ไม่มีปุ่ม View**, **ไม่มีลิงก์ "ดูประวัติ (Log)"**, และ backdrop-click ไม่ปิด modal (`Modal` prop `dismissable={false}`)
- ปุ่มที่กดได้มีแค่ 3 ปุ่ม (ซ้าย→ขวา): **เข้าห้องตรวจ/เข้ารับบริการ** (→ หน้า Vetroom placeholder ดู §6.3.1), **เรียกไม่มา** (→ `missed`, ปิด modal ตามปกติ), **กดผิด** (ใหม่ — undo กลับสถานะก่อนกด "เรียก", ปิด modal)
- "กดผิด" ใช้ `preCallStatus` ที่ถูก capture ไว้ตอน `callVisit` — ครอบคลุมทุก origin ที่กดเรียกได้ (`waiting`, `refer_from`, `missed`) ไม่ใช่แค่ `waiting`

### 6.4 Referral / upsert logic + multi-row Worklist rule

- ส่งต่อ = ปิดต้นทางเป็น `refer_to` (stamp `referAt`, `referPeerStation` = ปลายทาง) + **upsert** ปลายทางเป็น `refer_from` (ใช้ `StationVisit` เดิมถ้ากลับมาสถานีเดิมซ้ำ ไม่สร้างซ้ำ)
- `currentStation` ของ `QueueItem` ย้ายไปปลายทางทันที
- `refer_from` **ไม่ต้อง** ack ก่อน — กดเรียก/จัดการต่อได้ทันที
- ทุก transition ต้อง append `QueueLog` (ต้นทาง + ปลายทาง คนละ entry) แบบ append-only ห้ามลบ/แก้ของเก่า
- **1 `StationVisit` ต่อ 1 คู่ `(queueItemId, stationCode)` เสมอ** (unique key `id = queueItemId__stationCode`) — สถานีเดิมกลับมาซ้ำ = upsert ทับ `StationVisit` เดิม ไม่สร้างแถวใหม่

**Worklist แสดง 1 แถวต่อ 1 สถานีที่ visit นั้นเคยผ่าน ไม่ใช่แค่ `currentStation`:** ก่อนหน้านี้ตารางกรองด้วย `item.currentStation` เท่านั้น (เห็นแค่แถวปัจจุบัน) ตอนนี้เปลี่ยนเป็น flatMap ทุก `StationVisit` ที่ `stationCode !== 'UNASSIGNED'` แล้ว join กับ `QueueItem` ของมัน — ตัวอย่าง: เคสเริ่มที่ `MA` แล้วถูกส่งต่อไป `SA` จะเห็น **2 แถว** ในตารางเดียวกัน (แถว `MA` กลายเป็น `refer_to` ("ส่งต่อ SA") แถว `SA` เป็น `refer_from` ("ส่งจาก MA") ที่ active อยู่จริง) แถวไหนที่ `visit.status` เป็น closed (`refer_to`/`done` — เช็คด้วย `isClosedStatus()`) จะแสดงจาง + ไม่มีปุ่ม "จัดการคิว" (มีแค่ "ประวัติ") โดยอัตโนมัติ — ไม่ต้องเทียบ `visit.stationCode` กับ `item.currentStation` เพิ่มเพราะสถานะ `refer_to`/`done` ครอบคลุมกรณีนี้อยู่แล้ว (แถวที่ไม่ใช่ current จะถูก mark ปิดเสมอจาก logic การส่งต่อ)
- `StatusBadge`/`StationBadge` ในแต่ละแถวต้องอ่านจาก `visit.stationCode` (ไม่ใช่ `item.currentStation`) เพื่อให้ตรงกับสถานีของแถวนั้นจริงๆ
- label การส่งต่อเปลี่ยนจาก "Transfer from/to {peer}" (อังกฤษ) เป็นภาษาไทย: **"ส่งจาก {peer}"** (สถานะ `refer_from`) / **"ส่งต่อ {peer}"** (สถานะ `refer_to`) — ใช้แทน `StatusBadge` ปกติเมื่อ `visit.referAt` มีค่า (ดู `StatusRoomCell`)

### 6.5 Sort rules

**Worklist (เจ้าหน้าที่):** จัดกลุ่มตาม status ก่อน (`waiting → refer_from → calling → in_progress → on_hold → missed` แล้ว `refer_to → done` ตกท้ายเสมอ + แสดงจาง) ภายในกลุ่มเดียวกันเรียงตาม `referAt` ถ้ามี ไม่งั้น `checkInAt` (เก่า→ใหม่)

**Monitor (จอสาธารณะ):** เรียงตาม `referAt` ถ้ามี ไม่งั้น `checkInAt` เท่านั้น (ไม่จัดกลุ่ม status เพราะแบ่งคอลัมน์อยู่แล้ว)

### 6.6 Table column spec (Worklist / Unassigned tab)

Time (T referAt / C checkInAt, 2 บรรทัด, **แสดงวันที่เต็มเสมอ** ผ่าน `formatDateTimeFull()` แม้เป็นวันนี้ — ต่างจากคอลัมน์อื่นที่ซ่อนวันที่ถ้าเป็นวันนี้ เพราะคอลัมน์นี้ตั้งใจให้เทียบ T กับ C ต่างวันกันได้ชัดเจน เช่นเคส ward ที่ C ย้อนหลังหลายวันแต่ T เป็นวันนี้) · Q (Q1-Q6, 3/บรรทัด, Q1 highlight สีสถานีที่ map ไป) · **HN (2 บรรทัด: `hn` แล้ว `visitNo` mono สีจางบรรทัดที่ 2)** · สัตว์เลี้ยง · ชนิด (`สุนัข`/`แมว`/`อื่นๆ` เท่านั้น ไม่ระบุพันธุ์ — เพื่อเว้นพื้นที่คอลัมน์ท้ายตาราง) · เจ้าของ · Note/Assigned DVM (`hisNote · DVM {dvmName}`) · **การจัดการ** · สถานี (Worklist เท่านั้น อ่านจาก `visit.stationCode`) · สถานะ/ห้องตรวจ (2 บรรทัด, แสดง "ส่งจาก/ส่งต่อ {peer}" แทน label ปกติถ้ามี `referAt` — ดู §6.4) · อัปเดตล่าสุด

> "Unassigned" ไม่ใช่หน้าแยกอีกต่อไป — เป็น tab ภายใน `WorklistPage` (คอลัมน์ต่างจากตารางหลักเล็กน้อย: มีคอลัมน์ "ห้อง" และ "เหตุผลที่ยังไม่จัดกลุ่ม" แทนคอลัมน์ "สถานี"/"สถานะ" เพราะยังไม่มีสถานี — ดู `UnassignedTable`)

> คอลัมน์ "การจัดการ" ถูกจัดไว้ก่อน "สถานี" (ไม่ใช่ท้ายตารางเหมือน UX ตารางทั่วไป) เพื่อให้ปุ่ม "จัดการคิว"/"ประวัติ" อยู่ในพื้นที่ที่มองเห็นได้โดยไม่ต้อง scroll ขวาสุด — ตารางเปิดแบบ container เต็มความกว้างจอ (`max-w-[1800px]`) แต่ยังต้อง scroll แนวนอนได้ในจอเล็ก

### 6.7 Inpatient / ward special-code business rule (documentation only — ไม่มี field/UI ใหม่ใน mockup นี้)

ในงานจริง เคสที่ส่งมาจากหอผู้ป่วย (ward) มีความซับซ้อนกว่าการส่งต่อทั่วไป:

- สัตว์ป่วยในถูก check-in ครั้งแรกเข้าสู่ระบบด้วยรหัสคิว/เคสหนึ่งชุด แล้ว "ออกจาก" งานคิวปกติเพื่อไปพักที่หอผู้ป่วย — เคสนี้จึงเป็น **identity แยกที่เกิดขึ้นซ้ำทุกวัน** ไม่ใช่ visit เดียวที่ค้างอยู่
- ทุกวันที่สัตว์ยังพักอยู่ ระบบ HIS จะ **ออกรหัสคิวใหม่/เปลี่ยนรหัส** ให้กับ "การส่งต่อวันนี้" ของเคสเดิม (เช่น เปลี่ยนจาก `WARD-xxx` วันก่อน เป็นรหัสอื่นวันนี้) — นี่คือที่มาของ mock ปัจจุบัน: `checkInAt` (C) คงที่เป็นวันที่ผู้ป่วยเข้าหอผู้ป่วยครั้งแรก (สุ่มย้อนหลัง 1-14 วันใน seed) แต่ `referAt` (T) เป็น "วันนี้" เสมอ เพราะการส่งต่อเข้าคิวคลินิกเกิดขึ้นใหม่ทุกวัน
- ผลคือเจ้าหน้าที่หน้าเคาน์เตอร์อาจเห็นคิวที่ T = วันนี้ แต่ C = หลายวันก่อน และต้องสามารถ **ระบุตัวสัตว์ป่วยในตัวเดิม** ให้ถูกต้อง ไม่ใช่เข้าใจผิดว่าเป็นเคสใหม่
- ฟีเจอร์ **date filter** ในหน้า Worklist (ปัจจุบันเป็นแค่ UI ตัวอย่าง ยังไม่ผูก logic กรองจริง — ดูปุ่ม "วันที่: ..." เหนือตาราง) คือจุดเริ่มต้นที่เตรียมไว้สำหรับฟีเจอร์จริงในอนาคต: ให้เจ้าหน้าที่เลือกดูว่า "รหัสคิวของเคส ward ตัวนี้ในวันที่ X (ย้อนหลัง) คือรหัสอะไร" เพื่อ cross-reference กับรหัสที่ HIS ออกให้วันนี้ และยืนยันว่าเป็นสัตว์ป่วยในตัวเดิมที่ส่งต่อมาซ้ำ — ต้อง implement การ query ประวัติ/เคสตามวันที่จริงตอนต่อกับ HIS

---

## 7. API / integration (แนะนำ)

- `GET queue?station=&status=&from=&to=` สำหรับตารางรวม
- `POST queue/:id/assign` `{ stationCode }` — จัดคิวเข้าสถานี (ครั้งแรก/override)
- `PATCH queue/:id/visit/:stationCode` `{ status, ... }` — เรียก/พัก/เรียกไม่มา/เข้าห้องตรวจ
- `POST queue/:id/transfer` `{ fromStation, toStation }` — ครอบทั้งส่งต่อด่วนและจบ/ออกจากห้องตรวจ (สร้าง log ทั้ง 2 ฝั่งใน transaction เดียว)
- `GET queue/:id/logs` — สำหรับ LogModal
- Sync จอ Monitor แนะนำ WebSocket/SSE แทน polling ที่ mock ใช้อยู่ (`localStorage` storage event ใช้ได้แค่ข้ามแท็บในเบราว์เซอร์เดียว)

---

## 8. Open Questions

- HIS ส่ง webhook/poll เมื่อมี check-in ใหม่หรือ qmanage ต้อง poll เอง
- สิทธิ์เจ้าหน้าที่ต่อสถานี (จำกัดตาม station assignment ของ user หรือทุกคนเห็น/แก้ได้หมด)
- เก็บ log ของ `PHARMACY`/`FINANCE` ต้องเชื่อมกับระบบ dispensing/billing จริงหรือ mock พอ
