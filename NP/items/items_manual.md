# Items Manager — Manual (Mock)

**จุดเข้า:** `items_picker.html` (เลือกแบบ 1 / 2 / 3)  
**Seed ร่วม:** `items_seed.js` จาก `resource/order_tx-2026-07-24.xlsx` (~298 รายการ)  
**ออกแบบ:** `items_design_notes.md`

---

## 1. ขอบเขต

- Backend **catalog + pricing** (ไม่ใช่คลังยา)
- สูตรราคา A / B / C · ยาหมดแยกจาก Disabled
- ยังไม่เชื่อม editor / ไม่บันทึกเซิร์ฟเวอร์

---

## 2. Mock แยก 3 แบบ

| แบบ | ไฟล์ | จุดเด่น |
| :---: | :--- | :--- |
| **1** | `items_manager.html` | ตารางบาง + Drawer ราคาเต็ม |
| **2** | `items_manager_v2.html` | สลับ Catalog mode / Pricing mode + editor ขวา |
| **3** | `items_manager_v3.html` | สถิติคลิกกรอง + ชิปราคา + ขยายแถว |

ทุกหน้ามีแถบ **Items mock** ด้านบนสลับแบบได้ · หรือเริ่มจาก `items_picker.html`

### แบบที่ 1
- ตารางใกล้ต้นแบบ **คอลัมน์ครบ 14 ช่อง · แถวเดียว (ellipsis)**  
  Code · Description · Trade · Common · Unit · Receipt · Alert Min/Max · Formula · Rx Default · Tx Default · Sell Price · Status · Action
- **Status:** Active / Disabled (ไอคอนสี) + ชิป **ยาหมด** ในคอลัมน์เดียวกันเมื่อ OOS  
  (Inactive = Disabled ใน mock นี้)
- **Action:** ปุ่ม Edit ส้ม + เมนู ⋮ แยกหัวข้อ รายการ / ห้องยา / Admin
- **ฟอร์มเสริม (ตาม screenshot):**
  - `+ Add New` / Edit → **Add New Item / Edit Item** (`items_dialogs.js`) — Code · Prefix · Status toggle · Description · Trade/Common · Receipt · Unit · Alert · Sell Price A/B/C · Close/Save
  - `+ Add Rx Default` → **Add Rx Default** — วิธีใช้ / รายละเอียด / หมายเหตุ
  - `+ Add Tx Default` → **Add Tx Default** — Route · Dose · Frequency · Note (+)
- Trade/Common ที่ไม่มีใน Excel = ค่า demo ใน seed (— ถ้าว่าง)

### แบบที่ 2
- **Catalog:** ชื่อ · unit · receipt · Tx/Rx · status · availability (ปุ่มไปตั้งราคา)
- **Pricing:** list ซ้าย + แผงแก้ A/B/C ขวา (Save mock ในหน่วยความจำ)

### แบบที่ 3
- การ์ดสถิติ: ทั้งหมด / Active / ยาหมด / รอราคา / Formula A / B·C
- ตารางชิป: สูตร + สรุปราคา + status
- คลิกแถวขยายแผงราคา (ไม่มี Drawer)

---

## 3. สองแกนสถานะ

| แกน | ค่า | ผู้ทำ (แนวคิด) |
| :--- | :--- | :--- |
| `status` | Active / Disabled | Admin |
| `availability` | available / out_of_stock | ห้องยา |

---

## 4. Seed

`pricing` · `txDefault`/`rxDefault` · `availability`/`outOfStock` · `priceStatus`  
ราคาบาทเป็นค่าจำลอง (ไม่มีใน Excel)

---

## 5. ยังไม่ทำ

- สิทธิ์ login จริง · เชื่อม TX/RX picker · persist เซิร์ฟเวอร์
