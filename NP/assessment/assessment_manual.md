# คู่มือการใช้งานระบบบันทึกข้อวินิจฉัยทางการสัตวแพทย์ (Assessment Editor User Manual)
**มาตรฐานข้อมูล:** SNOMED CT (Veterinary Extension - VetSCT) & SA-PDT Standard

---

## 1. บทนำและวัตถุประสงค์ (Introduction)

ระบบบันทึกข้อมูลทางคลินิก (Assessment Editor) ได้รับการออกแบบขึ้นเพื่อรวบรวมและจัดเก็บข้อมูลการประเมินทางสัตวแพทย์อย่างเป็นระบบ โดยอิงตามรหัสคำศัพท์มาตรฐานสากล **SNOMED CT (Veterinary Extension)** และมาตรฐาน **SA-PDT (Problems and Diagnoses Terms)** เพื่อช่วยให้การสื่อสารภายในทีมสัตวแพทย์ มีความแม่นยำ ถูกต้อง และสามารถนำข้อมูลไปวิเคราะห์ประมวลผลต่อในระดับสากลได้

---

## 2. โครงสร้างและคำศัพท์มาตรฐานในหน้าจอ (System Field Reference)

ส่วนนี้สรุปหัวข้อฟิลด์และตัวเลือกมาตรฐาน (Dropdown Options / Checkboxes) ที่เปิดใช้งานจริงในหน้าจอ **Assessment Editor**

### 2.1 ส่วนจัดการหัวข้อ (Section Headers)
* **ส่วนรายการปัญหาที่บันทึกแล้ว (Header):** `Selected Problem and Diagnosis Terms (PDT)`
* **ส่วนฟอร์มบันทึกปัญหาใหม่ (Header):** `New Problem and Diagnosis Term (PDT)`

---

### 2.2 ตารางระบุคำศัพท์มาตรฐานและตัวเลือกในฟิลด์ข้อมูล (Field Mapping)

| ชื่อฟิลด์ใน UI (Field Label) | คำแปลภาษาไทย / ความหมายทางคลินิก | รายการตัวเลือกที่เปิดใช้งาน (Selected Dropdown / Checkbox Options) | SNOMED CT / Standard Mapping Context |
| :--- | :--- | :--- | :--- |
| **ประเภทปัญหา (Problem Type)** | ประเภทปัญหาทางคลินิก | • การวินิจฉัยเบื้องต้น (*Working Diagnosis*)<br>• อาการและอาการแสดง (*Clinical Sign*)<br>• การวินิจฉัยแยกโรค (*Differential Diagnosis*)<br>• สงสัยเพื่อพิสูจน์ขจัด (*Rule Out*) | `Clinical Condition Category`<br>• Working diagnosis (`148006`)<br>• Clinical sign (`60955000`)<br>• Differential diagnosis (`82298002`)<br>• Rule out (`415684004`) |
| **ลักษณะการดำเนินโรคและการรับบริการ (Course & Encounter)** | สภาพการดำเนินโรค และประเภทการมารับบริการ | • `[ ]` เฉียบพลัน (*Acute*)<br>• `[ ]` เรื้อรัง (*Chronic*)<br>• `[ ]` กลับเป็นซ้ำ (*Recurrent*)<br>• `[ ]` ติดตามอาการ (*Follow-up*) | `Course (qualifier value)` & `Encounter`<br>• Acute course (`373933003`)<br>• Chronic course (`90734009`)<br>• Recurrent course (`255227004`)<br>• Follow-up visit (`390906007`) |
| **สถานะ (Status)** | สถานะปัจจุบันของปัญหาทางคลินิก | • ยังเป็นอยู่/กำลังรักษา (*Active*)<br>• อยู่ระหว่างตรวจสืบค้น (*Under Investigation / Pending*)<br>• หายแล้ว/สงบ (*Resolved*) | `Clinical Status (qualifier value)`<br>• Active (`55561003`)<br>• Pending/Investigation (`7087005`)<br>• Resolved (`410513005`) |
| **ความรุนแรง (Severity)** | ระดับความรุนแรงของโรค | • เล็กน้อย (*Mild*)<br>• ปานกลาง (*Moderate*)<br>• รุนแรง (*Severe*)<br>• วิกฤต/อันตรายถึงชีวิต (*Life-threatening*) | `Severity (qualifier value)`<br>• Mild (`255604002`)<br>• Moderate (`6736007`)<br>• Severe (`24484000`)<br>• Life threatening (`442452003`) |
| **พยากรณ์โรค (Prognosis)** | การคาดการณ์แนวโน้มการรักษา | • พยากรณ์โรคดี (*Good Prognosis*)<br>• ต้องเฝ้าระวัง (*Guarded Prognosis*)<br>• พยากรณ์โรคไม่ดี (*Poor Prognosis*)<br>• วิกฤต/ทรุดหนัก (*Grave Prognosis*) | `Prognosis (qualifier value)`<br>• Good prognosis (`170969009`)<br>• Guarded prognosis (`170971004`)<br>• Poor prognosis (`170970005`)<br>• Grave prognosis (`170972006`) |
| **ระดับความมั่นใจ (Confidence)** | ความแน่นอนของการวินิจฉัย | • ยืนยันชัดเจน (*Confirmed / High Certainty*)<br>• น่าจะใช่/มีหลักฐานบางส่วน (*Probable / Medium*)<br>• สงสัย/ยังไม่ยืนยัน (*Possible / Low*) | `Verification Status`<br>• Confirmed (`410605003`)<br>• Probable (`2931005`)<br>• Possible (`415684004`) |
| **ระยะเวลาที่คาดว่าจะป่วย/รักษา (Expected Duration)** | ระยะเวลาคาดการณ์ | *(กรอกข้อความอิสระ / Free Text)* | `Clinical Duration` |
| **ผลการตรวจยืนยันทางคลินิก (Confirmatory Findings)** | ผลตรวจแล็บ/ภาพวินิจฉัย | *(กรอกข้อความอิสระ / Free Text)* | `Confirmatory Finding` |
| **เหตุผลและความเห็นทางคลินิก (Clinical Reasoning)** | กระบวนการคิดทางสัตวแพทย์ | *(กรอกข้อความอิสระ / Free Text)* | `Diagnostic Justification` |
| **บันทึกเพิ่มเติมเกี่ยวกับปัญหา (Problem Note)** | บันทึกรายละเอียดเพิ่มเติม | *(กรอกข้อความอิสระ / Free Text)* | `Clinical Note / Annotation` |
| **สรุปการประเมิน (Assessment Summary)** | สรุปผลการประเมินรวม | *(กรอกข้อความอิสระ / Free Text)* | `Assessment Narrative` |

---

## 3. ขั้นตอนการลงบันทึกข้อมูล (Step-by-Step Guide)

1. **เลือก Concept ทางการแพทย์:**
   * คลิกปุ่ม **`เลือก Concept`** ทางด้านขวา เพื่อค้นหารหัสโรค/ปัญหามาตรฐาน SA-PDT / SNOMED CT (เช่น *Pancreatitis*, *Canine Parvovirus*)
2. **ระบุข้อมูลทางคลินิก (Clinical Context):**
   * เลือก **ประเภทปัญหา (Problem Type)** เช่น เป็นการวินิจฉัยเบื้องต้น หรือเป็นเพียงอาการแสดง
   * ติ๊กเลือก Checkbox **ลักษณะการดำเนินโรคและการรับบริการ (Course & Encounter)** สามารถเลือกได้มากกว่า 1 ข้อตามบริบทจริง
   * ระบุ **สถานะ (Status)**, **ความรุนแรง (Severity)**, **พยากรณ์โรค (Prognosis)** และ **ระดับความมั่นใจ (Confidence)** จากรายการ Dropdown
3. **บันทึกเหตุผลและรายละเอียดเพิ่มเติม:**
   * กรอกข้อมูลในช่อง Free Text เช่น ผลตรวจแล็บประกอบ (Confirmatory Findings) และเหตุผลทางคลินิก (Clinical Reasoning)
4. **ยืนยันการบันทึก:**
   * คลิกปุ่ม **`+ Append Problem`** เพื่อเพิ่มรายการเข้าสู่ส่วน `Selected Problem and Diagnosis Terms (PDT)`
   * ตรวจสอบความถูกต้องและกดปุ่ม **`Confirm`** มุมขวาบนเพื่อบันทึกเข้าสู่เวชระเบียน

---

## 4. ตัวอย่างการบันทึกข้อมูลตามสถานการณ์จริง (Clinical Use Cases)

---

### 🟢 ตัวอย่างที่ 1: เคสฉุกเฉิน มารับบริการครั้งแรก (Acute Emergency Case)
> **สถานการณ์:** สุนัขพันธุ์ชิวาวา มารับบริการด้วยอาการอาเจียนเป็นเลือดและถ่ายซูมฉับพลัน ตรวจพบเป็นตับอ่อนอักเสบเฉียบพลัน (Acute Pancreatitis)

* **Concept ที่เลือก:** `Pancreatitis`
* **ประเภทปัญหา (Problem Type):** `การวินิจฉัยเบื้องต้น (Working Diagnosis)`
* **ลักษณะการดำเนินโรค (Course & Encounter):** `[x] เฉียบพลัน (Acute)`
* **สถานะ (Status):** `ยังเป็นอยู่/กำลังรักษา (Active)`
* **ความรุนแรง (Severity):** `รุนแรง (Severe)`
* **พยากรณ์โรค (Prognosis):** `ต้องเฝ้าระวัง (Guarded Prognosis)`
* **ระดับความมั่นใจ (Confidence):** `น่าจะใช่/มีหลักฐานบางส่วน (Probable / Medium)`
* **ผลการตรวจยืนยัน (Confirmatory Findings):** `cPL Test Positive, US พบ Hyperechoic pancreas`
* **เหตุผลทางคลินิก (Clinical Reasoning):** `สุนัขมีอาการปวดท้องรุนแรงร่วมกับเอนไซม์ตับอ่อนสูง`

---

### 🟡 ตัวอย่างที่ 2: เคสมาตามนัดเพื่อติดตามอาการโรคเรื้อรัง (Chronic Follow-up Case)
> **สถานการณ์:** แมวพันธุ์เปอร์เซีย มารับบริการตามนัด 2 สัปดาห์ เพื่อติดตามอาการโรคไตเรื้อรัง (Chronic Kidney Disease)

* **Concept ที่เลือก:** `Chronic Kidney Disease`
* **ประเภทปัญหา (Problem Type):** `การวินิจฉัยเบื้องต้น (Working Diagnosis)`
* **ลักษณะการดำเนินโรค (Course & Encounter):** `[x] เรื้อรัง (Chronic)` และ `[x] ติดตามอาการ (Follow-up)` *(เลือกคู่กัน)*
* **สถานะ (Status):** `ยังเป็นอยู่/กำลังรักษา (Active)`
* **ความรุนแรง (Severity):** `ปานกลาง (Moderate)`
* **พยากรณ์โรค (Prognosis):** `พยากรณ์โรคดี (Good Prognosis)` *(ทรงตัวได้ดีตามแผนการรักษา)*
* **ระดับความมั่นใจ (Confidence):** `ยืนยันชัดเจน (Confirmed / High Certainty)`
* **ผลการตรวจยืนยัน (Confirmatory Findings):** `BUN/Crea ทรงตัว, US Kidney พบ Corticomedullary loss`

---

### 🔴 ตัวอย่างที่ 3: เคสโรคเดิมกลับมาเป็นซ้ำ/กำเริบ (Recurrent / Relapse Case)
> **สถานการณ์:** สุนัขพันธุ์โกลเด้น เคยได้รับการรักษาโรคผิวหนังอักเสบจากเชื้อราจนหายดีแล้ว เมื่อ 3 เดือนก่อน วันนี้กลับมารับบริการด้วยรอยโรคแบบเดิมที่ตำแหน่งใหม่

* **Concept ที่เลือก:** `Dermatophytosis`
* **ประเภทปัญหา (Problem Type):** `การวินิจฉัยเบื้องต้น (Working Diagnosis)`
* **ลักษณะการดำเนินโรค (Course & Encounter):** `[x] กลับเป็นซ้ำ (Recurrent)` และ `[x] เรื้อรัง (Chronic)`
* **สถานะ (Status):** `ยังเป็นอยู่/กำลังรักษา (Active)`
* **ความรุนแรง (Severity):** `เล็กน้อย (Mild)`
* **พยากรณ์โรค (Prognosis):** `พยากรณ์โรคดี (Good Prognosis)`
* **ระดับความมั่นใจ (Confidence):** `น่าจะใช่/มีหลักฐานบางส่วน (Probable / Medium)`
* **ผลการตรวจยืนยัน (Confirmatory Findings):** `Wood's lamp positive, อยู่ระหว่างรอผล DTM Culture`

---

### 🔵 ตัวอย่างที่ 4: เคสอยู่ระหว่างตรวจสืบค้น/สงสัยโรคเพื่อตรวจแยกออก (Rule Out Case)
> **สถานการณ์:** แมวไทย มีอาการหายใจลำบากและช่องอกมีน้ำ สงสัย FIP หรือ Lymphoma อยู่ระหว่างรอผลตรวจ PCR

* **Concept ที่เลือก:** `Feline Infectious Peritonitis`
* **ประเภทปัญหา (Problem Type):** `สงสัยเพื่อพิสูจน์ขจัด (Rule Out)`
* **ลักษณะการดำเนินโรค (Course & Encounter):** `[x] เฉียบพลัน (Acute)`
* **สถานะ (Status):** `อยู่ระหว่างตรวจสืบค้น (Under Investigation / Pending)`
* **ความรุนแรง (Severity):** `วิกฤต/อันตรายถึงชีวิต (Life-threatening)`
* **พยากรณ์โรค (Prognosis):** `พยากรณ์โรคไม่ดี (Poor Prognosis)`
* **ระดับความมั่นใจ (Confidence):** `สงสัย/ยังไม่ยืนยัน (Possible / Low)`
* **เหตุผลทางคลินิก (Clinical Reasoning):** `พบ Exudative pleural effusion, อยู่ระหว่างรอผล Real-time PCR`
