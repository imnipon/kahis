# Exam Card — Entry & Display Logic

Flowchart สำหรับจุดเข้าบันทึก (VPE / Order / Assessment) และการแสดงผล (ตารางรวม / Subjective / Daily View)

```mermaid
flowchart TD
  start([เริ่มบันทึกข้อมูล]) --> chooseModule{เลือกโมดูล}

  chooseModule -->|Vital Sign and PE| vpeEntry{เข้าทางไหน?}
  chooseModule -->|Order TX RX Lab Path| orderEntry{เข้าทางไหน?}
  chooseModule -->|Assessment| assessOnly[ใส่ได้เฉพาะใน Exam Card]

  %% VPE
  vpeEntry -->|Exam Card| vpeSave{{Save Exam Card เพื่อเกิด exam_card id}}
  vpeSave --> vpeOpen[เปิดเมนู VPE จาก Exam Card]
  vpeOpen --> vpePrefill[/Input prefill: exam id, DVM, Department จาก exam id/]
  vpePrefill --> vpeSaveData[(บันทึก VPE ผูกกับ exam id)]

  vpeEntry -->|FAB| vpeFab[ไม่ระบุ exam id]
  vpeFab --> vpeFabInput[/เลือกค่าแล้วใส่ได้เลย/]
  vpeFabInput --> vpeFabSave[(บันทึก VPE ไม่ผูก exam id)]

  %% Order
  orderEntry -->|TAB ปัจจุบัน| orderTab[เมนู TAB ไม่ระบุ exam id]
  orderTab --> orderTabInput[/ใส่ Order ได้โดยไม่ผูก exam id/]
  orderTabInput --> orderTabSave[(บันทึก Order ไม่ผูก exam id)]

  orderEntry -->|Exam Card| orderSave{{Save Exam Card เพื่อเกิด exam_card id}}
  orderSave --> orderOpen[เปิดเมนู Order จาก Exam Card]
  orderOpen --> orderPrefill[/Input prefill: exam id, DVM, Department จาก exam id/]
  orderPrefill --> orderSaveData[(บันทึก Order ผูกกับ exam id)]

  %% Assessment
  assessOnly --> assessOpen[เปิด Assessment ใน Exam Card]
  assessOpen --> assessPrefill[/ต้องมี exam id เท่านั้น/]
  assessPrefill --> assessSave[(บันทึก Assessment ผูกกับ exam id)]

  %% Display
  vpeSaveData & vpeFabSave & orderTabSave & orderSaveData & assessSave --> display{การแสดงผล}

  display --> tableAll[\ตารางรวม: แสดงทุกรายการ จากหน้าไหนก็ได้\]
  display --> subjective[Subjective Exam Card]
  display --> dailyView[Objective Daily View]

  subjective --> subReadonly[Block แบบ readonly ใน Exam Card]
  subReadonly --> subArrange[จัดเรียงตามประเภท เช่น Tx]

  dailyView --> dailyById[แสดงเฉพาะข้อมูลที่สัมพันธ์กับ exam id]
  dailyById --> dailyByDay[จัดตามวันของ Exam]

  dailyByDay --> examRule{{กฎ Exam Card}}
  examRule --> rule1[ไม่ข้ามวัน]
  examRule --> rule2[1 สัตวแพทย์ = 1 ใบต่อหน่วย ต่อวัน]

  style start fill:#C2E5FF,stroke:#3DADFF
  style chooseModule fill:#FFECBD,stroke:#FFC943
  style vpeEntry fill:#FFECBD,stroke:#FFC943
  style orderEntry fill:#FFECBD,stroke:#FFC943
  style display fill:#FFECBD,stroke:#FFC943
  style assessOnly fill:#FFE0C2,stroke:#FF9E42
  style assessPrefill fill:#FFE0C2,stroke:#FF9E42
  style examRule fill:#DCCCFF,stroke:#874FFF
  style rule1 fill:#DCCCFF,stroke:#874FFF
  style rule2 fill:#DCCCFF,stroke:#874FFF
  style tableAll fill:#CDF4D3,stroke:#66D575
  style subReadonly fill:#CDF4D3,stroke:#66D575
  style dailyById fill:#CDF4D3,stroke:#66D575
```

## สรุป

| โมดูล | จุดเข้า | exam id |
|---|---|---|
| Vital Sign & PE | Exam Card | มี — Save เพื่อเกิด id แล้ว prefill exam id, DVM, Department |
| Vital Sign & PE | FAB | ไม่ระบุ id — เลือกค่าแล้วใส่ได้เลย |
| Order (TX/RX/Lab/Path) | TAB (ปัจจุบัน) | ไม่ระบุ exam id |
| Order (TX/RX/Lab/Path) | Exam Card | มี — Save เพื่อเกิด id แล้ว prefill exam id, DVM, Department |
| Assessment | Exam Card เท่านั้น | ต้องมี exam id |

### การแสดงผล

- **ตารางรวม** — จากหน้าไหนก็ตาม แสดงรายการทั้งหมด
- **Subjective (Exam Card)** — block แบบ readonly; บางข้อมูลจัดเรียงตามประเภท เช่น Tx
- **Daily View (Objective)** — แสดงข้อมูลที่สัมพันธ์กับ exam id ตามวันของ exam
  - Exam Card ไม่ข้ามวัน
  - 1 สัตวแพทย์ = 1 ใบต่อหน่วย ในแต่ละวัน
