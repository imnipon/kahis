// ===================== Station =====================

export type StationKind = 'clinical' | 'terminal' | 'virtual';

export interface StationGroup {
  code: string; // เช่น MA, WI, ER, ... , PHARMACY, FINANCE, UNASSIGNED
  name: string; // ชื่อไทยเต็ม
  shortLabel: string; // ป้ายสั้นสำหรับปุ่ม/บัดจ์ (เท่ากับ code ปกติ)
  color: string; // hex สำหรับ tile/badge
  icon: string; // lucide icon name (จัดการใน iconMap)
  order: number;
  kind: StationKind; // clinical = 8 สถานีหลัก, terminal = PHARMACY/FINANCE, virtual = UNASSIGNED
  publicDisplay: boolean; // ขึ้นจอแสดงผลสาธารณะหรือไม่
}

export interface StationMappingRule {
  hisPrefix: string; // ตัวอักษร 2 ตัวจาก HIS เช่น "MA"
  stationCode: string; // รหัสสถานีปลายทาง
}

// ===================== Status =====================

export type VisitStatus =
  | 'waiting'
  | 'calling'
  | 'missed'
  | 'in_progress'
  | 'on_hold'
  | 'done'
  | 'refer_from'
  | 'refer_to';

export const STATUS_LABEL_TH: Record<VisitStatus, string> = {
  waiting: 'รอเรียก',
  calling: 'กำลังเรียก',
  missed: 'เรียกไม่มา',
  in_progress: 'เข้าห้องตรวจ',
  on_hold: 'พัก',
  done: 'จบงาน',
  refer_from: 'ส่งมาจากสถานีอื่น',
  refer_to: 'ส่งต่อสถานีอื่นแล้ว',
};

// ===================== QueueItem =====================

export interface QueueItem {
  id: string;
  hn: string;
  petName: string;
  species: string;
  ownerName: string;
  dvmName: string;
  hisNote: string; // ข้อความ/อาการเบื้องต้นที่จำลองมาจาก HIS (คนละส่วนกับ StationVisit.note ที่เป็น audit note)
  room: string; // ห้องตรวจจาก HIS
  hisQRaw: string; // ดิบจาก HIS เช่น "MA001, SA045" ("" ถ้ากรอกเอง)
  hisQList: string[]; // parsed ทั้งหมด (สูงสุด 6 ชุด)
  primaryHisQ: string; // ชุดที่ 1 (Q1) ที่ใช้ auto-detect ("" ถ้าไม่มี)
  isManualEntry: boolean; // true = กรอกเอง ไม่ได้รันจากระบบ
  checkInAt: string; // ISO datetime — อาจไม่ใช่วันนี้ (ส่งมาจาก ward)
  currentStation: string; // station code ที่ item นี้ "active" อยู่ตอนนี้ (รวม UNASSIGNED)
  deleted?: boolean;
}

// ===================== StationVisit =====================

export interface StationVisit {
  id: string; // = `${queueItemId}__${stationCode}` (unique key)
  queueItemId: string;
  stationCode: string;
  status: VisitStatus;
  referAt: string | null; // ISO datetime — เกิดเฉพาะตอนส่งต่อเข้า/ออกจากสถานีนี้ (วันนี้เท่านั้น)
  referPeerStation: string | null; // สถานีอีกฝั่งของการส่งต่อ
  enteredAt: string; // ISO datetime แรกที่เข้าสถานีนี้
  calledAt: string | null;
  updatedAt: string;
  updatedBy: string;
  note: string;
}

// ===================== QueueLog =====================

export interface QueueLog {
  id: string;
  queueItemId: string;
  stationCode: string;
  action: string;
  note: string;
  actor: string;
  at: string; // ISO datetime
}

export const CLINICAL_STATION_CODES = ['MA', 'WI', 'ER', 'SA', 'SX', 'VA', 'EX', 'CA'] as const;
export const TERMINAL_STATION_CODES = ['PHARMACY', 'FINANCE'] as const;
export const UNASSIGNED_CODE = 'UNASSIGNED';
