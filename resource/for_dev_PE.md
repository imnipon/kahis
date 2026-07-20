# Vital & PE Module — Handoff Specification for Vue.js Development

## 1. Purpose

เอกสารนี้ใช้ส่งต่อให้ Dev เพื่อนำ mock ของ Vital & Physical Examination ไปพัฒนาเป็น module หนึ่งของโปรแกรมหลัก โดยใช้ Vue.js เป็น framework หลัก

Reference implementation:

- `NP/vital_pe/vital_pe_editor.html`
- `NP/vital_pe/vital_pe_manual.md`
- `NP/vital_pe/ref_pe.md`

Mock นี้เป็น UI/interaction reference ไม่ใช่ production data layer และไม่ควรนำ DOM manipulation เดิมไปใช้ตรง ๆ ใน Vue

---

## 2. Module Scope

Module ประกอบด้วย 3 tabs:

1. **Form Editor** — บันทึกข้อมูล Vital & PE
2. **Basic Data Table** — ตารางข้อมูลสำคัญ 28 columns และ Flat Filter
3. **All Data Table** — ตารางข้อมูลทั้งหมด 53 columns และ Topic Filter

องค์ประกอบร่วม:

- Vital & PE modal/container
- Record Meta
- Confirm action
- Toast หลังบันทึก
- View Logic/Rule modal
- Close confirmation overlay
- Mock/reference data table

---

## 3. Current Data Counts

- **Form Editor:** 47 fields
- **Record Meta:** 4 fields
- **Total form fields:** 51 fields
- **All Data Table:** 53 columns
- **Basic Data Table:** 28 columns
- **Mock rows:** 25 rows
- **Filter topics:** 10 topics

Filter topics:

- Date
- Vital Signs
- Monitoring
- Perfusion
- Critical Events
- Respiratory
- Neuro / LOC
- Mobility
- Pain
- Meta

---

## 4. Recommended Vue Component Structure

```text
VitalPeModule
├── VitalPeHeader
├── VitalPeTabs
├── VitalPeFormTab
│   ├── FormSectionNav
│   ├── CoreVitalSection
│   ├── MonitoringSection
│   ├── PerfusionSection
│   ├── CriticalEventsSection
│   ├── RespiratorySection
│   ├── NeuroSection
│   ├── ReflexGrid
│   ├── MobilitySection
│   ├── PainSection
│   └── RecordMetaPanel
├── BasicDataTableTab
│   ├── FlatFilterPanel
│   └── DataTable
├── AllDataTableTab
│   ├── TopicFilterPanel
│   └── DataTable
├── MultiCheckDropdown
├── FilterActions
├── ConfirmCloseOverlay
├── SaveToast
└── LogicReferenceModal
```

แนะนำให้แยก component ตาม responsibility ไม่ควรทำเป็น component เดียวขนาดใหญ่ เพราะ Form, Filter และ Table มี lifecycle และ state ต่างกัน

---

## 5. Data Model

แนะนำให้แยก state เป็น 4 ส่วน:

```js
{
  formData: {},
  recordMeta: {},
  tableRows: [],
  filterState: {}
}
```

ตัวอย่างโครงสร้าง:

```js
const formData = reactive({
  temp: '',
  hr: '',
  rr: '',
  pulse: '',
  weight: '',
  crt: '',
  fbs: '',
  hydration: '',
  dehydration: '',
  nibpSys: '',
  nibpDia: '',
  nibpMap: '',
  bpMethod: '',
  cuffSite: '',
  spo2: '',
  etco2: '',
  oxygenSupport: '',
  mm: '',
  mmSite: [],
  bleedingStatus: '',
  bleedingSeverity: '',
  bleedingSite: '',
  heart: '',
  crit: [],
  critTime: '',
  critNote: '',
  respEffort: '',
  respDepth: '',
  affectedPhase: '',
  lungSide: '',
  lungRegion: '',
  lung: [],
  cons: '',
  stimuli: '',
  palpebralL: '',
  palpebralR: '',
  menaceL: '',
  menaceR: '',
  plrL: '',
  plrR: '',
  pedalL: '',
  pedalR: '',
  gait: '',
  posture: '',
  mobilityNote: '',
  painScore: '',
  painIndicators: []
})

const recordMeta = reactive({
  processedOn: '',
  dvm: '',
  dept: '',
  formNote: '',
  examCardId: ''
})
```

Multi-select fields ควรเก็บเป็น array ใน Vue:

```js
painIndicators: [
  'Vocalization',
  'Restlessness / Agitation'
]
```

เมื่อส่งไป API ให้กำหนด contract ให้ชัดเจนว่าจะส่งเป็น array หรือ serialize เป็น comma-separated string

---

## 6. Field Groups

### Core Vital Signs

- Temp
- HR
- RR
- Pulse
- Weight
- CRT
- FBS
- Hydration Status
- Estimated Dehydration

### Blood Pressure & Advanced Monitoring

- NIBP SYS
- NIBP DIA
- NIBP MAP
- BP Method
- Cuff Site
- SpO2
- EtCO2
- Oxygen Support

### Perfusion, Mucosa & Bleeding

- Mucous Membrane Site
- Mucous Membrane Color
- Bleeding Status
- Bleeding Severity
- Bleeding Site

### Cardiac & Critical Events

- Heart Sound
- Critical Event Time
- Critical Events
- Critical Events Note

### Respiratory Assessment

- Lung / Airway Sounds
- Lung Sound Side
- Lung Region
- Respiratory Effort
- Respiratory Depth
- Affected Phase

### Neurologic & Mentation

- Level of Consciousness / Mentation
- Reaction to Stimuli & Surroundings
- Palpebral Reflex Left/Right
- Menace Response Left/Right
- Pupillary Light Reflex Left/Right
- Pedal Withdrawal Reflex Left/Right

### Mobility & Posture

- Gait
- Posture
- Mobility Note

### Pain Assessment

- Pain Score
- Observed Pain Indicators

### Record Meta

- Processed On
- DVM/User
- Department
- Form Note
- Exam Card ID

รายละเอียด options และ reference ranges ให้ยึด `NP/vital_pe/ref_pe.md` เป็นหลัก

---

## 7. Form Behavior

- Numeric clinical fields ใช้ text input ร่วมกับ numeric input mode เพื่อไม่ให้ browser แสดง number spinner
- Reference range แสดงเป็น field hint ใต้ช่องกรอก
- Select ทุกตัวมีค่าเริ่มต้น `กรุณาเลือกข้อมูล`
- Text fields ใช้ placeholder เฉพาะจุดที่ต้องการตัวอย่าง
- Mucous Membrane Site มี `Oral mucosa` checked เป็นค่าเริ่มต้นใน mock
- Reflex L/R ต้องจัดเป็น grid ที่ตำแหน่ง label, Left และ Right คงที่
- ช่อง reflex ต้องกว้างพอให้ option เช่น `Exaggerated / Hyperreflexic` แสดงได้ครบ
- เมื่อ field มีข้อมูล ควรมี active state เพื่อให้ผู้ใช้ทราบว่า field ถูกกรอกแล้ว

ตัวอย่าง Vue active class:

```vue
<div
  class="form-field"
  :class="{ 'has-value': hasValue(formData.temp) }"
>
  <label>Temp (°F)</label>
  <input v-model="formData.temp" inputmode="decimal" />
</div>
```

---

## 8. Table Requirements

### Basic Data Table

- แสดง 28 columns ที่กำหนดใน `basicColumns`
- Filter เป็น Flat Filter ไม่แยก topic
- ทุก field filter มี sub-card และสีตาม topic ของ field
- Field เรียงแบบ wrap
- Filter panel มี scroll ภายใน

### All Data Table

- แสดง 53 columns ที่กำหนดใน `tableColumns`
- Filter แยกตาม 10 topics
- แต่ละ topic เป็น row/group แยกชัดเจน
- แต่ละ field มี sub-card และสีตาม topic
- Filter panel มี vertical และ horizontal scroll ภายใน

### Table display

- รองรับข้อมูลว่างด้วย empty state หรือ `—`
- Exam Card ID ที่มีค่าให้ใช้สี accent แยกจากค่าไม่มีข้อมูล
- ข้อความใน cell ที่ยาวควรมี overflow strategy ที่ชัดเจน
- ตารางกว้างควร scroll แนวนอนได้ ไม่บีบทุก column จนอ่านไม่ได้

---

## 9. Filter Specification

### Filter Types

#### Numeric

- Operator: `=`, `>`, `<`
- Input value เป็น numeric semantic value
- ไม่กรอก value = ไม่กรอง field

#### Text

- ใช้ contains search
- ไม่กรอก = ไม่กรอง
- Processed On มีปุ่ม `Today`

#### Multi-check

- เลือกหลายค่าได้
- ภายใน field เดียวกันใช้ OR logic
- ปุ่มแสดง:
  - `ยังไม่เลือก`
  - `เลือก 1 รายการ`
  - `เลือก x รายการ`

#### Multi-crit

ใช้กับข้อมูลที่เก็บหลายค่า เช่น:

- Critical Events
- Lung Sounds
- Mucous Membrane Site
- Pain Indicators

การ match ใช้ contains จาก item ใน array ไม่ควรใช้ string search แบบที่อาจ match ค่าบางส่วนผิดพลาด

### Combined Logic

- หลาย field ใช้ AND logic
- หลาย option ภายใน multi-check field ใช้ OR logic
- ถ้า field มีค่า filter แต่ row ไม่มีค่า ให้ไม่แสดง row นั้น

ตัวอย่าง:

```js
const matches = rows.filter(row => {
  return matchesVitals(row) &&
    matchesNeuro(row) &&
    matchesPain(row)
})
```

### Clear Filter

Clear ต้อง reset ทั้งหมด:

- Numeric values
- Numeric operators
- Text values
- Select values
- Multi-check arrays
- Active classes
- Selected count text
- Open dropdown state

หลัง clear ต้องแสดง rows ทั้งหมดกลับมา

---

## 10. Multi-check Dropdown

ห้ามวาง dropdown ไว้ใน parent ที่มี `overflow: hidden` เพราะจะถูกตารางตัด

แนวทางที่แนะนำสำหรับ Vue:

```vue
<Teleport to="body">
  <MultiCheckDropdown
    v-if="open"
    :options="options"
    :selected="selected"
    @update:selected="selected = $event"
  />
</Teleport>
```

ข้อกำหนด:

- ปิดเมื่อคลิกนอก dropdown
- เปิดทีละหนึ่ง dropdown
- มี max-height และ internal scroll
- รองรับ keyboard navigation
- มีปุ่ม Clear ภายใน dropdown ได้
- คำนวณตำแหน่งจาก trigger button
- ตรวจสอบ viewport edge เพื่อไม่ให้ dropdown หลุดจอ

---

## 11. CSS Architecture

ไม่แนะนำให้นำ CSS inline ใน mock ไปใช้ต่อทั้งหมด ควรแยกเป็น design tokens และ component styles

แนะนำโครงสร้าง:

```text
styles/
├── tokens.css
├── base.css
├── layout.css
├── form.css
├── reflex.css
├── filter.css
├── table.css
├── modal.css
└── responsive.css
```

### Design Tokens

```css
:root {
  --color-bg: #ffffff;
  --color-surface: #fafafa;
  --color-border: #e5e7eb;
  --color-text: #1f2937;
  --color-muted: #6b7280;
  --color-primary: #6366f1;
  --color-active-bg: #eef2ff;
  --color-active-border: #818cf8;

  --topic-date: #475569;
  --topic-vitals: #1e40af;
  --topic-monitoring: #3730a3;
  --topic-perfusion: #9a3412;
  --topic-critical: #991b1b;
  --topic-respiratory: #115e59;
  --topic-neuro: #6b21a8;
  --topic-mobility: #166534;
  --topic-pain: #9d174d;
  --topic-meta: #334155;

  --topic-date-bg: #f1f5f9;
  --topic-vitals-bg: #eff6ff;
  --topic-monitoring-bg: #eef2ff;
  --topic-perfusion-bg: #fff7ed;
  --topic-critical-bg: #fef2f2;
  --topic-respiratory-bg: #f0fdfa;
  --topic-neuro-bg: #faf5ff;
  --topic-mobility-bg: #f0fdf4;
  --topic-pain-bg: #fdf2f8;
  --topic-meta-bg: #f8fafc;

  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --control-height: 40px;
  --filter-control-height: 30px;
}
```

### Topic Field Styles

ใช้ class หรือ data attribute แทนการ hardcode style ใน template:

```css
.filter-field[data-topic='vitals'] {
  background: var(--topic-vitals-bg);
  border-color: #bfdbfe;
}

.filter-field[data-topic='neuro'] {
  background: var(--topic-neuro-bg);
  border-color: #e9d5ff;
}
```

### Active Field State

สีของ field ที่มีข้อมูลต้องเด่นกว่าสี topic แต่ไม่ควรกลบความหมายของ topic ทั้งหมด:

```css
.filter-field.has-value {
  border-color: var(--color-active-border);
  box-shadow: 0 0 0 1px rgba(129, 140, 248, 0.18);
}

.filter-field.has-value > label {
  color: #4338ca;
  font-weight: 700;
}

.filter-field.has-value input,
.filter-field.has-value select,
.filter-field.has-value button {
  background: var(--color-active-bg);
  border-color: var(--color-active-border);
  color: #3730a3;
}
```

### Filter Layout

Basic Filter:

```css
.basic-filter-panel {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px 12px;
  max-height: 40vh;
  overflow: auto;
}
```

All Data Filter:

```css
.topic-filter-row {
  display: grid;
  grid-template-columns: 118px minmax(0, 1fr);
  align-items: start;
  width: max-content;
  min-width: 100%;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid var(--color-border);
}

.topic-filter-fields {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px 10px;
}
```

### Reflex Layout

```css
.reflex-grid {
  display: grid;
  grid-template-columns: 190px 220px 220px;
  gap: 8px 12px;
  align-items: end;
  justify-content: start;
}

.reflex-grid .control {
  width: 220px;
  min-width: 220px;
  max-width: 220px;
  box-sizing: border-box;
}
```

หากรองรับหน้าจอแคบ ให้เปลี่ยนเป็น one-column หรือ horizontal scroll แทนการบีบ select:

```css
@media (max-width: 900px) {
  .reflex-grid {
    min-width: 650px;
  }
}
```

---

## 12. Responsive Requirements

### Desktop

- Form ใช้ 3-column layout
- Table scroll แนวนอนได้เมื่อจำเป็น
- Filter panel scroll ภายใน ไม่ทำให้ modal ทั้งหมดขยายเกิน viewport

### Tablet

- ลดจำนวน column ของ form
- Topic filter ยังคง label column คงที่
- Reflex grid อนุญาตให้ horizontal scroll

### Mobile

- Form sections เรียงเป็น 1 column
- Filter fields wrap เป็น 1–2 columns
- Table ใช้ horizontal scroll
- Modal มี padding ลดลง
- ปุ่ม Filter ต้องกดง่ายและไม่ติดกันเกินไป

---

## 13. Accessibility

ควรเพิ่มใน Vue implementation:

- ทุก input มี label ที่สัมพันธ์ด้วย `for`/`id`
- Multi-check button ใช้ `aria-expanded`
- Dropdown ใช้ `role="listbox"` หรือ `role="menu"` ให้เหมาะกับ interaction
- Checkbox ใช้ keyboard ได้
- Focus state ต้องเห็นชัด
- สีไม่ควรเป็นสัญญาณเพียงอย่างเดียว ต้องมี label/count/state ร่วมด้วย
- Modal ต้องรองรับ Escape และ focus management
- ตารางควรมี accessible header

---

## 14. API and Integration Requirements

Dev ควรขอข้อมูลจาก backend ให้ชัดเจนก่อนเริ่มแปลงเป็น production module:

- `GET` ข้อมูล Vital & PE ตาม HN / Exam Card ID
- `POST` หรือ `PUT` สำหรับบันทึกข้อมูล
- `GET` table rows พร้อม pagination
- Server-side filter เมื่อข้อมูลมีจำนวนมาก
- DVM/User จาก authenticated session
- Department จาก user context หรือ encounter context
- Exam Card ID และสิทธิ์การเข้าถึง
- Processed On timezone และรูปแบบ ISO datetime
- Validation rules ของ numeric ranges
- Permission สำหรับ view, edit, confirm, delete
- Audit log ของผู้แก้ไขและเวลาที่แก้ไข

ไม่ควร hardcode ชื่อ DVM, Department, HN หรือ Exam Card ID ใน production

---

## 15. Validation

Validation ควรแยกเป็น:

- Required validation
- Numeric format validation
- Clinical range warning
- Cross-field validation
- Date/time validation
- Multi-select validation

Reference range ไม่จำเป็นต้อง block การบันทึกเสมอไป ควรแยกเป็น:

- **Normal range**
- **Warning range**
- **Critical range**

กรณีค่าอยู่นอก normal range ควรแสดง warning ให้ผู้ใช้ยืนยัน แทนการปิดกั้นทันที เว้นแต่เป็น business rule ของระบบจริง

---

## 16. Mock Limitations

Mock ปัจจุบันมีข้อจำกัดที่ต้องเปลี่ยนเมื่อนำไปทำ production:

- Mock data สุ่มทุกครั้งที่โหลดหน้า
- ไม่มี API persistence จริง
- ไม่มี authentication จริง
- ไม่มี permission enforcement จริง
- ไม่มี server-side pagination
- ไม่มี server-side filtering
- ไม่มี optimistic update หรือ rollback
- `Edit` ใน table เป็นปุ่มตัวอย่าง
- `Confirm` แสดง toast แต่ยังไม่ได้บันทึก backend จริง
- View Logic เป็น static content

---

## 17. Definition of Done

ถือว่า module พร้อมสำหรับ integration เมื่อ:

- Form fields ครบ 51 fields ตาม data contract
- Table columns ครบตาม `basicColumns` และ `tableColumns`
- Basic Filter และ All Data Filter แยก behavior ถูกต้อง
- AND/OR filter logic ผ่าน test
- Clear filter reset state ครบ
- Dropdown ไม่ถูก clipping
- Active state แสดงถูกต้องทั้ง form และ filter
- Reflex L/R alignment ทำงานบน desktop และ tablet
- Responsive layout ผ่าน breakpoint ที่กำหนด
- Keyboard navigation และ modal focus ผ่าน
- API error/loading/empty state ครบ
- Permission และ audit data ถูกส่งครบ
- ไม่มีข้อมูล mock hardcode ใน production path

---

## 18. Files Used as Visual and Behavior Reference

- Mock UI: `NP/vital_pe/vital_pe_editor.html`
- Product/manual behavior: `NP/vital_pe/vital_pe_manual.md`
- Field options and reference ranges: `NP/vital_pe/ref_pe.md`
- Landing link: `index.html`

เอกสารนี้เป็น handoff specification สำหรับการนำ mock ไปพัฒนาเป็น Vue.js module โดยให้ยึด data contract และ behavior เป็นหลัก ส่วน CSS ให้ยึด design tokens, topic colors, active state, responsive rules และ overflow strategy ตามเอกสารนี้
