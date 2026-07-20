# Vital & PE Input Form Options and Reference Ranges Mapping

เอกสารนี้ระบุตารางฟิลด์ข้อมูลทั้งหมด **52 ฟิลด์** (แบ่งเป็น 9 ตารางย่อย ครอบคลุม 8 เซกชัน และข้อมูลผู้ใช้) สำหรับระบบ Vital & PE Editor โดยอ้างอิงตามแนวทางมาตรฐานขององค์กรสัตวแพทย์สากล เช่น AAHA, ACVIM, WSAVA, RECOVER, Merck Veterinary Manual และ UC Davis School of Veterinary Medicine

---

## Section 1: Core Vital Signs

| # | ฟิลด์ข้อมูล | ประเภท | Placeholder/Options | มาตรฐานสากลที่ใช้อ้างอิง |
|---|-------------|--------|---------------------|--------------------------|
| 1 | Temp | `number` | Placeholder: `100.0–102.5 °F` (Canine) / `100.5–102.5 °F` (Feline) | Merck Vet Manual / AAHA Vital Signs Guidelines |
| 2 | HR | `number` | Placeholder: `60–140 bpm` (Canine) / `140–220 bpm` (Feline) | UC Davis Small Animal Practice / VIN |
| 3 | RR | `number` | Placeholder: `15–30 rpm` (Canine) / `20–30 rpm` (Feline) | ACVIM Pulmonology / Merck Vet Manual |
| 4 | Pulse | `number` | Placeholder: `60–140 bpm` (Canine) / `140–220 bpm` (Feline) | Matches Heart Rate / Core Physical Assessment |
| 5 | Weight | `number` | Placeholder: `10.00 kg` (Canine) / `4.50 kg` (Feline) | Clinical Practice Baseline |
| 6 | CRT | `select` | Options: `กรุณาเลือกข้อมูล`, `< 2 sec (Normal)`, `2–3 sec (Mildly Prolonged)`, `> 3 sec (Prolonged)`, `< 1 sec (Hyperdynamic / Brick Red)`, `Unable to assess` | AAHA Emergency Standards / VECCS Triage Guidelines |
| 7 | FBS | `number` | Placeholder: `75–120 mg/dL` (Canine) / `70–150 mg/dL` (Feline) — ความเครียดทำให้แมวน้ำตาลขึ้นสูงชั่วคราวได้ง่าย | Merck Vet Manual / Plumb's Veterinary Drugs |
| 8 | Hydration Status | `select` | Options: `กรุณาเลือกข้อมูล`, `Normal (<5%)`, `Mild Dehydration (5–6%)`, `Moderate Dehydration (7–9%)`, `Severe Dehydration (≥10–12%)`, `Overhydrated (Fluid Overload)`, `Unable to assess` | AAHA Fluid Therapy Guidelines for Dogs and Cats |
| 9 | Estimated Dehydration | `number` | Placeholder: `0%` (ช่วงที่กรอกได้คือ 0–12%) | AAHA Fluid Therapy Guidelines |

---

## Section 2: Blood Pressure & Advanced Monitoring

| # | ฟิลด์ข้อมูล | ประเภท | Placeholder/Options | มาตรฐานสากลที่ใช้อ้างอิง |
|---|-------------|--------|---------------------|--------------------------|
| 10 | NIBP SYS | `number` | Placeholder: `110–140 mmHg` (Canine) / `120–140 mmHg` (Feline) | ACVIM Consensus Statement (Hypertension) |
| 11 | NIBP DIA | `number` | Placeholder: `60–90 mmHg` (Canine) / `70–90 mmHg` (Feline) | ACVIM Consensus Statement (Hypertension) |
| 12 | NIBP MAP | `number` | Placeholder: `70–110 mmHg` (Canine) / `80–110 mmHg` (Feline) | ACVIM Consensus Statement (Hypertension) |
| 13 | BP Method | `select` | Options: `กรุณาเลือกข้อมูล`, `Oscillometric`, `Doppler`, `High-Definition Oscillometry (HDO)`, `Invasive / Direct`, `Other` | ACVIM Consensus Guidelines / TVP Journal |
| 14 | Cuff Site | `select` | Options: `กรุณาเลือกข้อมูล`, `Left forelimb`, `Right forelimb`, `Left hindlimb`, `Right hindlimb`, `Tail`, `Other` | Today's Veterinary Practice (TVP Journal) |
| 15 | SpO2 | `number` | Placeholder: `95–100%` | VECCS Critical Care / Anesthesia Monitoring |
| 16 | EtCO2 | `number` | Placeholder: `35–45 mmHg` | ACVIM Consensus / ACVA Anesthesia Guidelines |
| 17 | Oxygen Support | `select` | Options: `กรุณาเลือกข้อมูล`, `Room air`, `Flow-by`, `Nasal cannula`, `Mask`, `Oxygen cage / Hood`, `Mechanical Ventilation / Intubated`, `Other` | VECCS Critical Care Oxygenation Guidelines |

---

## Section 3: Perfusion, Mucosa & Bleeding

| # | ฟิลด์ข้อมูล | ประเภท | Placeholder/Options | มาตรฐานสากลที่ใช้อ้างอิง |
|---|-------------|--------|---------------------|--------------------------|
| 18 | Mucous Membrane Site | `checkbox` | Options: `Oral mucosa`, `Conjunctiva`, `Prepuce`, `Vulva`, `Other` — Oral mucosa เป็นค่าเริ่มต้นที่เช็คไว้ใน UI | Today's Veterinary Practice Physical Exam |
| 19 | Mucous Membrane Color | `select` | Options: `กรุณาเลือกข้อมูล`, `Pink (Normal)`, `Pale / Porcelain White`, `Hyperemic / Injected / Red`, `Muddy / Brick Red`, `Jaundiced / Icteric / Yellow`, `Cyanotic / Blue`, `Gray / Ashen`, `Unable to assess` | UC Davis Core Physical Exam Protocol / AAHA |
| 20 | Bleeding Status | `select` | Options: `กรุณาเลือกข้อมูล`, `No active bleeding`, `Active — controlled`, `Active — uncontrolled`, `Suspected internal bleeding`, `Unable to assess` | Veterinary Standard Emergency Triage Protocols |
| 21 | Bleeding Severity | `select` | Options: `กรุณาเลือกข้อมูล`, `None`, `Mild`, `Moderate`, `Severe` | Veterinary Standard Emergency Triage Protocols |
| 22 | Bleeding Site | `text` | Placeholder: `e.g., Left forelimb / Oral cavity` | Clinical Practice Documentation Standards |

---

## Section 4: Cardiac & Critical Events

| # | ฟิลด์ข้อมูล | ประเภท | Placeholder/Options | มาตรฐานสากลที่ใช้อ้างอิง |
|---|-------------|--------|---------------------|--------------------------|
| 23 | Heart Sound | `select` | Options: `กรุณาเลือกข้อมูล`, `Normal (S1/S2 clear)`, `Systolic Murmur`, `Diastolic Murmur`, `Continuous Murmur (เช่น PDA)`, `Gallop Rhythm (S3/S4)`, `Muffled / Distant`, `Arrhythmia / Irregular`, `Unable to assess` | ACVIM Cardiology Consensus / TVP Journal |
| 24 | Critical Event Time | `datetime-local` | Placeholder: `YYYY-MM-DD hh:mm` | Clinical Documentation System Standard |
| 25 | Critical Events | `checkbox` | Options: `Cyanosis`, `Seizure`, `Cardiopulmonary Arrest (CPA)`, `Respiratory Arrest`, `Severe Dyspnea / Distress`, `Syncope / Collapse`, `Other` | RECOVER Initiative CPR Guidelines / VECCS |
| 26 | Critical Events Note | `text` | Placeholder: `e.g., Generalized tonic-clonic seizure lasting 2 mins` | Clinical Practice Documentation Standards |

---

## Section 5: Respiratory Assessment

| # | ฟิลด์ข้อมูล | ประเภท | Placeholder/Options | มาตรฐานสากลที่ใช้อ้างอิง |
|---|-------------|--------|---------------------|--------------------------|
| 27 | Lung / Airway Sounds | `checkbox` | Options: `Normal (Vesiculobronchial)`, `Referred Upper Airway Sound (Stertor/Stridor)`, `Wheezes (Rhonchi)`, `Crackles (Fine/Coarse)`, `Harsh`, `Dull / Diminished`, `Absent`, `Other` | ACVIM Pulmonary Diagnostics Consensus |
| 28 | Lung Sound Side | `select` | Options: `กรุณาเลือกข้อมูล`, `Left`, `Right`, `Bilateral`, `Unable to localize` | Today's Veterinary Practice Physical Exam |
| 29 | Lung Region | `select` | Options: `กรุณาเลือกข้อมูล`, `All lung fields (Diffuse)`, `Cranioventral`, `Caudodorsal`, `Cranial`, `Caudal`, `Dorsal`, `Ventral` | Today's Veterinary Practice / UC Davis Protocol |
| 30 | Respiratory Effort | `select` | Options: `กรุณาเลือกข้อมูล`, `Normal (Eupneic)`, `Increased (Mild-Moderate)`, `Severe Labored (Dyspneic)`, `Paradoxical Effort`, `Unable to assess` | VECCS Respiratory Emergency & Triage |
| 31 | Respiratory Depth | `select` | Options: `กรุณาเลือกข้อมูล`, `Normal`, `Shallow (Hypopnea)`, `Deep (Hyperpnea)`, `Variable`, `Unable to assess` | VECCS Respiratory Emergency Guidelines |
| 32 | Affected Phase | `select` | Options: `กรุณาเลือกข้อมูล`, `None`, `Inspiratory`, `Expiratory`, `Biphasic`, `Unable to assess` | ACVIM Pulmonary Consensus Statement |

---

## Section 6: Neurologic & Mentation

| # | ฟิลด์ข้อมูล | ประเภท | Placeholder/Options | มาตรฐานสากลที่ใช้อ้างอิง |
|---|-------------|--------|---------------------|--------------------------|
| 33 | Level of Consciousness / Mentation | `select` | Options: `กรุณาเลือกข้อมูล`, `BAR (Bright, Alert, Responsive)`, `QAR (Quiet, Alert, Responsive)`, `Lethargic / Dull / Depressed`, `Obtunded`, `Stuporous`, `Comatose`, `Hyperactive / Agitated`, `Unable to assess` | ACVIM Neurology Consensus / MGCS (Modified Glasgow Coma Scale) |
| 34 | Reaction to Stimuli & Surroundings | `select` | Options: `กรุณาเลือกข้อมูล`, `Appropriate / Normal`, `Hyper-reactive / Exaggerated`, `Hypo-reactive / Decreased`, `Absent`, `Inappropriate`, `Unable to assess` | ACVIM Neurology Core Examination Protocol |
| 35 | Palpebral Reflex — Left | `select` | Options: `กรุณาเลือกข้อมูล`, `Intact / Normal (Present)`, `Decreased / Sluggish`, `Absent`, `Exaggerated / Hyperreflexic`, `Unable to assess` | ACVIM Neurology Protocols |
| 36 | Palpebral Reflex — Right | `select` | Options: `กรุณาเลือกข้อมูล`, `Intact / Normal (Present)`, `Decreased / Sluggish`, `Absent`, `Exaggerated / Hyperreflexic`, `Unable to assess` | ACVIM Neurology Protocols |
| 37 | Menace Response — Left | `select` | Options: `กรุณาเลือกข้อมูล`, `Intact / Normal (Present)`, `Decreased / Sluggish`, `Absent`, `Exaggerated / Hyperreflexic`, `Unable to assess` | ACVIM Neurology Protocols |
| 38 | Menace Response — Right | `select` | Options: `กรุณาเลือกข้อมูล`, `Intact / Normal (Present)`, `Decreased / Sluggish`, `Absent`, `Exaggerated / Hyperreflexic`, `Unable to assess` | ACVIM Neurology Protocols |
| 39 | Pupillary Light Reflex (PLR) — Left | `select` | Options: `กรุณาเลือกข้อมูล`, `Intact / Normal (Present)`, `Decreased / Sluggish`, `Absent`, `Exaggerated / Hyperreflexic`, `Unable to assess` | ACVIM Neurology Protocols |
| 40 | Pupillary Light Reflex (PLR) — Right | `select` | Options: `กรุณาเลือกข้อมูล`, `Intact / Normal (Present)`, `Decreased / Sluggish`, `Absent`, `Exaggerated / Hyperreflexic`, `Unable to assess` | ACVIM Neurology Protocols |
| 41 | Pedal Withdrawal Reflex — Left | `select` | Options: `กรุณาเลือกข้อมูล`, `Intact / Normal (Present)`, `Decreased / Sluggish`, `Absent`, `Exaggerated / Hyperreflexic`, `Unable to assess` | ACVIM Neurology Protocols |
| 42 | Pedal Withdrawal Reflex — Right | `select` | Options: `กรุณาเลือกข้อมูล`, `Intact / Normal (Present)`, `Decreased / Sluggish`, `Absent`, `Exaggerated / Hyperreflexic`, `Unable to assess` | ACVIM Neurology Protocols |

---

## Section 7: Mobility & Posture

| # | ฟิลด์ข้อมูล | ประเภท | Placeholder/Options | มาตรฐานสากลที่ใช้อ้างอิง |
|---|-------------|--------|---------------------|--------------------------|
| 43 | Gait | `select` | Options: `กรุณาเลือกข้อมูล`, `Normal / Ambulatory`, `Ataxic (Proprioceptive/Vestibular/Cerebellar)`, `Paresis (Weakness)`, `Plegia (Paralysis)`, `Lameness (Grade 1–5)`, `Non-ambulatory`, `Unable to assess`, `Other` | ACVIM Neurology / Orthopedics Clinical Gait Analysis |
| 44 | Posture | `select` | Options: `กรุณาเลือกข้อมูล`, `Normal`, `Orthopneic stance`, `Schiff-Sherrington posture`, `Decerebrate posture`, `Decerebellate posture`, `Head tilt / Turn`, `Kyphosis / Hunched`, `Recumbent (Sternal/Lateral)`, `Unable to assess` | ACVIM Neurology Clinical Localization |
| 45 | Mobility Note | `text` | Placeholder: `e.g., Grade 2/5 CP deficit on left hindlimb` | Clinical Practice Documentation Standards |

---

## Section 8: Pain Assessment

| # | ฟิลด์ข้อมูล | ประเภท | Placeholder/Options | มาตรฐานสากลที่ใช้อ้างอิง |
|---|-------------|--------|---------------------|--------------------------|
| 46 | Pain Score | `select` | Options: `กรุณาเลือกข้อมูล`, `0`, `1`, `2`, `3`, `4` | WSAVA Pain Management Guidelines / Glasgow Pain Scale |
| 47 | Observed Pain Severity | `select` | Options: `กรุณาเลือกข้อมูล`, `None (0)`, `Mild (1)`, `Moderate (2)`, `Severe (3–4)` | WSAVA Global Pain Guidelines / CSU Scales |
| 48 | Observed Pain Indicators | `checkbox` | Options: `Vocalization`, `Facial Expression (Grimace)`, `Abnormal Posture / Guarding`, `Restlessness / Agitation`, `Reduced Movement / Lethargy`, `Aggression / Resistance to touch`, `Anorexia` | WSAVA / Feline Grimace Scale Guidelines |

---

## Section 9: Record Meta

| # | ฟิลด์ข้อมูล | ประเภท | Placeholder/Options | มาตรฐานสากลที่ใช้อ้างอิง |
|---|-------------|--------|---------------------|--------------------------|
| 49 | Processed on | `datetime-local` | value: `2026-07-09T10:57` | Clinical System Standard Specification |
| 50 | DVM/User | readonly | readonly text | Clinical System Architecture Standard |
| 51 | Department | readonly | readonly text | Clinical System Architecture Standard |
| 52 | Form Note | `textarea` | placeholder: `บันทึกหมายเหตุเพิ่มเติมเกี่ยวกับการตรวจร่างกาย...` | Clinical Practice Documentation Standards |

---

## สรุปหลักเกณฑ์การอ้างอิงสากล (Global Veterinary Reference Sources)

- **AAHA (American Animal Hospital Association) & AAFP Guidelines**: อ้างอิงช่วงประเมิน Vital Signs, Fluid Therapy, และ Pain Management Scale

- **ACVIM (American College of Veterinary Internal Medicine) Consensus**: อ้างอิงเกณฑ์การวัดความดันโลหิต (Hypertension/BP), ระบบหัวใจ (Cardiology), ระบบประสาท (Neurology), และระบบหายใจ (Pulmonary)

- **Merck Veterinary Manual (MSD Vet Manual) & UC Davis School of Veterinary Medicine**: อ้างอิงช่วงค่าปกติทางสรีรวิทยา (Physiological Reference Ranges) ของสุนัขและแมว

- **RECOVER Initiative / VECCS (Veterinary Emergency and Critical Care Society)**: อ้างอิงศัพท์ทางคลินิกสำหรับสภาวะฉุกเฉินและ Critical Events

- **WSAVA (World Small Animal Veterinary Association)**: อ้างอิง Pain Assessment Scale และการสังเกตพฤติกรรมแสดงความเจ็บปวด
