# Objective Module — Handoff Specification for Vue.js Development

## 1. Purpose

เอกสารนี้ใช้ส่งต่อให้ Dev เพื่อนำ mock ของ Objective ไปพัฒนาเป็น module ในโปรแกรมหลัก (Vue.js)

ใช้แทนชื่อทั่วไปอย่าง `instruction.md` — ให้สอดคล้องกับ `resource/for_dev_PE.md`

Reference implementation:

- `NP/objective/objective.html` — **ต้นฉบับ** (อย่าแก้/ลบ — ใช้เป็นฐานอ้างอิง logic + content)
- `NP/objective/objective_quillbotdesign.html` — สำเนาสำหรับทดลอง UI ใหม่ (layout แนว QuillBot docs)
- `NP/objective/objective_manual.md` — Logic / display rules สำหรับผู้ใช้และ QA

Mock นี้เป็น **read-only summary / aggregation view** ไม่ใช่ form editor — ไม่ควรนำ DOM manipulation เดิมไปใช้ตรง ๆ ใน Vue

---

## 2. Module Scope

Objective รวมข้อมูลจากโมดูลอื่นตาม **Exam Card ID** แล้วแสดงในมุมมองเดียว

### Visit tabs (Tab 1–4)

Layout 4 คอลัมน์:

1. **Exam Card** — free-text ตาม topic (จาก Subjective / Exam Card)
2. **Vital Sign & PE** — snapshot ตามเวลา (จาก Vital & PE)
3. **TX / LAB / RX** — Selected + Tx Detail (จาก order modules)
4. **Assessment** — Selected PDT + Assessment Summary (จาก Assessment)

### HN-level tabs

5. **ตาราง Assessment** — ข้อมูล PDT ทั้ง HN
6. **ตาราง Vital Sign & PE** — ข้อมูล VPE ทั้ง HN

องค์ประกอบร่วม:

- Objective modal/container
- Header + date / visit selector
- Visit tabs + topbar (`for date`, last update)
- Panel info popover (`i`)
- View Logic/Rule modal
- Close confirmation overlay

### Daily View Filters (QuillBot design)

ใน `objective_quillbotdesign.html` Filters เป็น **3 โหมดค้นหาแยก** ไม่ใช่ฟอร์ม Apply รวม:

| Mode | API intent (แนะนำ) | ผลลัพธ์ |
| :--- | :--- | :--- |
| `byDate` (default) | `GET exam-cards?date=YYYY-MM-DD` | Exam Card ของวันนั้น · default = today |
| `byDvm` | `GET exam-cards?dvmId=…` | Exam Card ทั้งหมดของ DVM (ทุกวัน) |
| `byDept` | `GET exam-cards?departmentId=…` | Exam Card ทั้งหมดของแผนก (ทุกวัน) |

แต่ละโหมดมีปุ่ม Search ของตัวเอง · กด Search = สลับโหมดและโหลดใหม่ · `Go Today` = `byDate` + today

---

## 3. Recommended Vue Component Structure

```text
ObjectiveModule
├── ObjectiveHeader
│   ├── FiltersPopover          // By Date / By DVM / By Department — Search แยกโหมด
│   ├── LogicRuleButton
│   ├── GoToTodayButton
│   ├── RefreshButton
│   └── CloseButton
├── VisitTabs
│   ├── VisitTab          // data-tab 1–4 (DVM + Department)
│   ├── VpeTableTab       // ม่วง — HN table
│   └── AssessTableTab    // ส้ม — HN table
├── VisitTopbar           // for date + last update by
├── VisitSummaryTab       // 4-column grid
│   ├── ExamCardPanel
│   │   ├── PanelHeader   // title + InfoButton
│   │   └── TopicFeed     // hist-block by topic
│   ├── VitalPePanel
│   │   ├── PanelHeader
│   │   └── TimeSnapshotFeed
│   ├── TxLabRxPanel
│   │   ├── PanelHeader
│   │   ├── TxSelectedList
│   │   ├── RxSelectedList
│   │   ├── LabPathSelectedList
│   │   └── TxDetailSummaries
│   └── AssessmentPanel
│       ├── PanelHeader
│       ├── SelectedPdtList
│       └── AssessmentSummaryDetail
├── VpeDataTableTab
│   ├── TopicFilterPanel
│   └── DataTable
├── AssessmentDataTableTab
│   ├── FlatFilterPanel
│   └── DataTable
├── PanelInfoPopover
├── ConfirmCloseOverlay
└── LogicReferenceModal
```

แยกตาม responsibility — VisitSummary เป็น read aggregation; Table tabs เป็น list/filter คนละ lifecycle

---

## 4. Component Map (อ้างอิงใน Mock)

ใช้รหัสนี้เมื่อคุยกับ Dev / designer เกี่ยวกับจุดบนหน้าจอ

| รหัส | ชื่อ | Selector / ตำแหน่ง | หน้าที่ |
| :--- | :--- | :--- | :--- |
| **A** | Entry Badge | `.objective-badge` | เปิด `#objective-modal` |
| **B** | Modal Shell | `#objective-modal` / `.modal-box` | คอนเทนเนอร์หลัก |
| **B1** | Header | `.assess-editor-header` | ชื่อ module + แถบควบคุม |
| **B1a** | Title | `.section-title` | `Objective Module` |
| **B1b** | Exam Card Bar | `.examcard-bar` | Logic / date / select / close |
| **B1b-1** | View Logic/Rule | `.logic-badge` | เปิด `#manual-modal` |
| **B1b-2** | Filters | `.obj-filter-trigger` / `#objFilterPop` | ค้นหาแยก 3 โหมด: By Date / By DVM / By Department |
| **B1b-3** | Go Today | `#objGoToday` | กลับโหมด By Date = วันนี้ |
| **B1b-4** | Refresh | `#objRefresh` | โหลดซ้ำตามโหมดปัจจุบัน |
| **B1b-5** | Close | `.modal-close` | เปิด confirm |
| **C** | Visit Tabs | `.visit-tabs` | tab เยี่ยม + ตาราง HN |
| **C1–C4** | Visit tab | `.vtab[data-tab=1..4]` | DVM + Department |
| **C5** | Assessment table tab | `.vtab.assess-table-tab` | ตาราง Assessment |
| **C6** | VPE table tab | `.vtab.vpe-table-tab` | ตาราง Vital & PE |
| **D** | Topbar | `.visit-topbar` | for date + last update |
| **E** | Visit content | `#content-1..4` / `.grid` | grid 4 บล็อก |
| **E1** | Exam Card panel | `.editor-panel` (1st) | TopicFeed |
| **E2** | Vital & PE panel | `.editor-panel` (2nd) | TimeSnapshotFeed |
| **E3** | TX/LAB/RX panel | `.editor-panel` (3rd) | Selected + Tx Detail |
| **E4** | Assessment panel | `.editor-panel` (4th) | PDT + Summary |
| **E0** | Panel info | `.panel-info-btn` / `.panel-info-pop` | อธิบาย pattern ต่อบล็อก |
| **F** | Confirm close | `#objective-confirm` | ยืนยันปิด |
| **G** | Logic modal | `#manual-modal` | สรุปกฎ (sync กับ manual.md) |

---

## 5. Data Model (แนะนำ)

แยก state ตามแหล่งข้อมูล — Objective **ไม่เขียน** ข้อมูลต้นทาง แค่ aggregate / filter ตาม Exam Card

```js
{
  selection: {
    hn: '',
    date: '',           // ISO date
    examCardId: '',
    activeTab: '1'      // visit id หรือ 'vpe-table' / 'assess-table'
  },
  visitMeta: {
    forDateLabel: '',
    lastUpdateAt: '',
    lastUpdateBy: ''
  },
  examCard: {
    topics: []          // [{ order, title, lines: string[], subsections?: [] }]
  },
  vitalPeSnapshots: [], // [{ time, fields: [{ label, value }] }]  // เฉพาะที่มีค่า
  orders: {
    txSelected: [],
    rxSelected: [],
    labPathSelected: [],
    txDetails: []       // แยกตามรอบเวลา
  },
  assessment: {
    selectedPdt: [],
    summaries: []       // Assessment Summary ต่อรอบบันทึก
  },
  tables: {
    vpeRows: [],
    assessRows: [],
    vpeFilter: {},
    assessFilter: {}
  },
  ui: {
    logicOpen: false,
    confirmCloseOpen: false,
    panelInfoKey: null  // 'exam' | 'vpe' | 'tx' | 'assess'
  }
}
```

### ตัวอย่าง payload ต่อบล็อก

```js
// Exam Card topic
{ order: 1, title: 'History Taking', lines: ['กลับบ้านไปไม่กิน(เอง)', 'ไม่มีอาเจียน'] }

// Vital snapshot (แสดงเฉพาะ field ที่มีค่า)
{ time: '18:30', fields: [{ label: 'Temp', value: '102.1 °F' }, { label: 'HR', value: '128 bpm' }] }

// TX selected
{
  name: 'Prednisolone acetate injection (25 mg/ml) (Predni-Ject)',
  category: 'ยาฉีด (Injection)',
  route: 'SC',
  dose: '0.4 CC',
  processedOn: '20:30'
}

// LAB/PATH selected
{ name: 'CBC', orderType: 'Order Clinical Lab' } // หรือ Order Pathology Lab

// Selected PDT
{
  name: 'Pancreatitis',
  kind: 'Problem',
  problemType: 'Working Diagnosis',
  status: 'Active',
  processedOn: '08:15'
}
```

---

## 6. Display Contracts (สำคัญ)

กฎการ render ต้องตรงกับ `objective_manual.md` — สรุปสั้น:

| บล็อก | กฎหลัก |
| :--- | :--- |
| Exam Card | topic เรียงลำดับ; หัวข้อย่อย DX/TX/RX + บรรทัด `-` |
| Vital & PE | ใหม่→เก่า; ว่างไม่แสดง; `Label: ค่า` |
| TX Selected | `Category \| Route \| Dose` + processed on |
| RX Selected | วิธีใช้หลายบรรทัด |
| LAB/PATH | เฉพาะประเภท order |
| Tx Detail | มีเฉพาะ TX; แยกตามรอบเวลา |
| Assessment Selected | Kind \| Problem Type \| Status + เวลา |
| Assessment Detail | ฟิลด์สั้น `-Field: ค่า`; ฟิลด์ยาวขึ้นบรรทัดใหม่โดยไม่ใส่ `-` |

Grid ratio: `3fr | 2fr | 2fr | 2fr`

---

## 7. Integration Dependencies

Objective พึ่งพาโมดูลต้นทาง:

| แหล่ง | ใช้ใน Objective | หมายเหตุ |
| :--- | :--- | :--- |
| Subjective / Exam Card | Exam Card panel | รูปแบบ View History |
| Vital & PE | VPE panel + VPE table tab | filter ตาม `examCardId` / HN |
| TX / RX / Lab order | TX/LAB/RX panel | Selected + Tx Detail |
| Assessment | Assessment panel + table tab | Selected PDT + Summary |

API ที่ Dev ควรขอให้ชัดก่อนลงมือ:

- `GET` visits / exam cards ตาม HN + date
- `GET` exam card content ตาม `examCardId`
- `GET` vital/PE records ตาม `examCardId` และตาม HN (สำหรับ table)
- `GET` orders (TX/RX/LAB) ตาม `examCardId`
- `GET` assessment / PDT ตาม `examCardId` และตาม HN
- Permission: view-only vs deep-link ไปแก้ไขต้นทาง
- Timezone / locale สำหรับวันที่ไทยใน dropdown

ไม่ควร hardcode ชื่อ DVM, Department, HN, Exam Card ID ใน production

---

## 8. Interaction Requirements

- สลับ visit tab → โหลด 4 บล็อกของ Exam Card นั้น + อัปเดต last update
- สลับ HN table tab → แสดงตาราง + เปลี่ยนสีเส้นใต้ tab
- ปิด modal → confirm overlay
- ปุ่ม `i` → popover อธิบาย pattern (ปิดเมื่อคลิกนอก / scroll / resize)
- View Logic/Rule → modal อ่านอย่างเดียว (เนื้อหา sync กับ manual)
- Deep-link (optional ใน phase 2): จากรายการใน panel ไปเปิด editor ของโมดูลต้นทาง

---

## 9. Styling Notes (จาก Mock)

| โทเค็น | ค่าโดยประมาณ |
| :--- | :--- |
| Accent (visit) | `#2563eb` |
| VPE tab | `#7c3aed` |
| Assessment tab | `#f97316` / `#ea580c` |
| Objective badge | teal `#0f766e` / `#14b8a6` |
| Modal bg | `#f0f2f5` |
| Panel divider | เส้นแนวตั้ง ไม่ใช่การ์ดยกเงา |
| Content text | เทา; header เข้มกว่า |

คง pattern ให้สอดคล้อง Subjective / Assessment / Vital & PE ที่ใช้ header + visit-tabs แบบเดียวกัน

---

## 10. Mock Limitations

- ไม่มี API / persistence
- Mock data hardcode และตารางสุ่มบางส่วน
- ไม่มี auth / permission จริง
- ไม่มี pagination / server-side filter จริง
- ไม่มี deep-link ไปแก้ต้นทาง
- Logic modal เป็น static HTML

---

## 11. Definition of Done

ถือว่า module พร้อม integration เมื่อ:

- [ ] เลือกวันที่ / visit แล้วโหลด Exam Cards ได้จริง
- [ ] 4 บล็อก filter ตาม `examCardId` ถูกต้อง
- [ ] Display contract ทุกบล็อกตรง manual (ว่างไม่โชว์, Selected vs Detail, โทนฟิลด์ยาว/สั้น)
- [ ] Tab สีและเส้นใต้ถูกต้อง (visit / VPE / Assessment)
- [ ] ตาราง HN ของ VPE และ Assessment ทำงานแยกจาก visit summary
- [ ] Info popover และ Logic modal ครบ
- [ ] Confirm close + focus / Escape ของ modal ผ่าน
- [ ] Loading / empty / error state ครบทุกบล็อก
- [ ] ไม่มี mock hardcode ใน production path
- [ ] เอกสาร API contract ลงนามกับ backend แล้ว

---

## 12. File Checklist ในโฟลเดอร์นี้

| ไฟล์ | บทบาท | ผู้ใช้หลัก |
| :--- | :--- | :--- |
| `objective.html` | **ต้นฉบับ** — ห้ามลบ; อ้างอิง logic/content | Designer / PM / Dev |
| `objective_quillbotdesign.html` | สำเนาสำหรับปรับ UI ใหม่ (QuillBot design) | Designer / Dev |
| `objective_manual.md` | Logic & display rules | QA / Clinical / Dev |
| `for_dev_objective.md` | Component tree, data model, DoD | Frontend Dev (Vue) |
