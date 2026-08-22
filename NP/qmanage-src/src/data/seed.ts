import type { QueueItem, StationVisit, QueueLog, VisitStatus } from '../types';
import { CLINICAL_STATIONS, TERMINAL_STATIONS } from './stations';
import { PET_NAMES, OWNER_NAMES, DVM_NAMES, SPECIES, ROOMS, rand, randInt } from './mockNames';
import { daysAgoISO, todayAt } from '../utils/date';
import { parseHisQRaw } from '../services/autoDetect';

export interface SeedResult {
  queueItems: QueueItem[];
  visits: StationVisit[];
  logs: QueueLog[];
}

let hnSeq = 1000;
let idSeq = 1;

function nextId(prefix: string): string {
  idSeq += 1;
  return `${prefix}-${idSeq}`;
}

function nextHn(): string {
  hnSeq += 1;
  return `HN-${hnSeq}`;
}

function visitKey(queueItemId: string, stationCode: string): string {
  return `${queueItemId}__${stationCode}`;
}

function basePerson() {
  const [species, breed] = rand(SPECIES);
  return {
    petName: rand(PET_NAMES),
    species: `${species} (${breed})`,
    ownerName: rand(OWNER_NAMES),
    dvmName: rand(DVM_NAMES),
    room: rand(ROOMS),
  };
}

function pushLog(logs: QueueLog[], queueItemId: string, stationCode: string, action: string, note = ''): void {
  logs.push({
    id: nextId('log'),
    queueItemId,
    stationCode,
    action,
    note,
    actor: 'ระบบ (seed)',
    at: new Date().toISOString(),
  });
}

/** สร้างรายการปกติ 1 รหัส HIS ตรง 1 สถานี พร้อมสถานะที่กำหนด */
function buildNormalItem(stationCode: string, status: VisitStatus, checkInHour: number): { item: QueueItem; visit: StationVisit } {
  const id = nextId('q');
  const seq = String(randInt(1, 60)).padStart(3, '0');
  const hisQRaw = `${stationCode}${seq}`;
  const parsed = parseHisQRaw(hisQRaw);
  const checkInAt = todayAt(checkInHour, randInt(0, 59));

  const item: QueueItem = {
    id,
    hn: nextHn(),
    ...basePerson(),
    hisQRaw,
    hisQList: parsed.hisQList,
    primaryHisQ: parsed.primaryHisQ,
    isManualEntry: false,
    checkInAt,
    currentStation: stationCode,
  };

  const visit: StationVisit = {
    id: visitKey(id, stationCode),
    queueItemId: id,
    stationCode,
    status,
    referAt: null,
    referPeerStation: null,
    enteredAt: checkInAt,
    calledAt: status === 'waiting' ? null : todayAt(checkInHour, randInt(0, 59)),
    updatedAt: checkInAt,
    updatedBy: 'ระบบ HIS',
    note: '',
  };

  return { item, visit };
}

function buildMultiCodeItem(primaryStation: string, otherPrefixes: string[]): { item: QueueItem; visit: StationVisit } {
  const id = nextId('q');
  const seq = String(randInt(1, 60)).padStart(3, '0');
  const codes = [`${primaryStation}${seq}`, ...otherPrefixes.map((p) => `${p}${String(randInt(1, 60)).padStart(3, '0')}`)];
  const hisQRaw = codes.join(', ');
  const parsed = parseHisQRaw(hisQRaw);
  const checkInAt = todayAt(randInt(7, 11), randInt(0, 59));

  const item: QueueItem = {
    id,
    hn: nextHn(),
    ...basePerson(),
    hisQRaw,
    hisQList: parsed.hisQList,
    primaryHisQ: parsed.primaryHisQ,
    isManualEntry: false,
    checkInAt,
    currentStation: primaryStation,
  };

  const visit: StationVisit = {
    id: visitKey(id, primaryStation),
    queueItemId: id,
    stationCode: primaryStation,
    status: rand<VisitStatus>(['waiting', 'calling']),
    referAt: null,
    referPeerStation: null,
    enteredAt: checkInAt,
    calledAt: null,
    updatedAt: checkInAt,
    updatedBy: 'ระบบ HIS',
    note: `รหัสคิวจาก HIS มีหลายชุด (${codes.length} ชุด) — ใช้ชุดที่ 1 (Q1) ในการจัดกลุ่มอัตโนมัติ`,
  };

  return { item, visit };
}

function buildUnassignedItem(manual: boolean): { item: QueueItem; visit: StationVisit } {
  const id = nextId('q');
  const checkInAt = todayAt(randInt(7, 11), randInt(0, 59));
  const hisQRaw = manual ? '' : `ZZ${String(randInt(1, 60)).padStart(3, '0')}`;
  const parsed = parseHisQRaw(hisQRaw);

  const item: QueueItem = {
    id,
    hn: nextHn(),
    ...basePerson(),
    hisQRaw,
    hisQList: parsed.hisQList,
    primaryHisQ: parsed.primaryHisQ,
    isManualEntry: parsed.isManualEntry,
    checkInAt,
    currentStation: 'UNASSIGNED',
  };

  const visit: StationVisit = {
    id: visitKey(id, 'UNASSIGNED'),
    queueItemId: id,
    stationCode: 'UNASSIGNED',
    status: 'waiting',
    referAt: null,
    referPeerStation: null,
    enteredAt: checkInAt,
    calledAt: null,
    updatedAt: checkInAt,
    updatedBy: manual ? 'เจ้าหน้าที่ (กรอกเอง)' : 'ระบบ HIS',
    note: manual ? 'ลงทะเบียนเองไม่ได้รันจากระบบ HIS' : `รหัส HIS "${hisQRaw}" ไม่ตรงกับสถานีใดในระบบ`,
  };

  return { item, visit };
}

/** เคสส่งมาจาก ward: checkInAt เป็นเมื่อวาน แต่ referAt (ส่งเข้าคิว) เป็นวันนี้เสมอ */
function buildWardCase(stationCode: string): { item: QueueItem; visit: StationVisit } {
  const id = nextId('q');
  const checkInAt = daysAgoISO(1, randInt(8, 18), randInt(0, 59));
  const referAt = todayAt(randInt(7, 10), randInt(0, 59));

  const item: QueueItem = {
    id,
    hn: nextHn(),
    ...basePerson(),
    hisQRaw: '',
    hisQList: [],
    primaryHisQ: '',
    isManualEntry: true,
    checkInAt,
    currentStation: stationCode,
  };

  const visit: StationVisit = {
    id: visitKey(id, stationCode),
    queueItemId: id,
    stationCode,
    status: 'refer_from',
    referAt,
    referPeerStation: 'WARD',
    enteredAt: referAt,
    calledAt: null,
    updatedAt: referAt,
    updatedBy: 'เจ้าหน้าที่หอผู้ป่วย (Ward)',
    note: 'ส่งต่อจากหอผู้ป่วย (Ward) — check-in เดิมไม่ใช่วันนี้ แต่การส่งต่อเกิดขึ้นวันนี้เท่านั้น',
  };

  return { item, visit };
}

/** คู่ refer_to (ต้นทาง) / refer_from (ปลายทาง) ของ QueueItem เดียวกัน */
function buildReferralPair(
  sourceStation: string,
  destStation: string,
  logs: QueueLog[]
): { item: QueueItem; visits: StationVisit[] } {
  const id = nextId('q');
  const seq = String(randInt(1, 60)).padStart(3, '0');
  const hisQRaw = `${sourceStation}${seq}`;
  const parsed = parseHisQRaw(hisQRaw);
  const checkInAt = todayAt(randInt(7, 10), randInt(0, 59));
  const referAt = todayAt(randInt(11, 15), randInt(0, 59));

  const item: QueueItem = {
    id,
    hn: nextHn(),
    ...basePerson(),
    hisQRaw,
    hisQList: parsed.hisQList,
    primaryHisQ: parsed.primaryHisQ,
    isManualEntry: false,
    checkInAt,
    currentStation: destStation,
  };

  const sourceVisit: StationVisit = {
    id: visitKey(id, sourceStation),
    queueItemId: id,
    stationCode: sourceStation,
    status: 'refer_to',
    referAt,
    referPeerStation: destStation,
    enteredAt: checkInAt,
    calledAt: todayAt(randInt(10, 11), randInt(0, 59)),
    updatedAt: referAt,
    updatedBy: 'เจ้าหน้าที่สถานีต้นทาง',
    note: `ส่งต่อไปยัง ${destStation}`,
  };

  const destVisit: StationVisit = {
    id: visitKey(id, destStation),
    queueItemId: id,
    stationCode: destStation,
    status: 'refer_from',
    referAt,
    referPeerStation: sourceStation,
    enteredAt: referAt,
    calledAt: null,
    updatedAt: referAt,
    updatedBy: 'เจ้าหน้าที่สถานีต้นทาง',
    note: `รับส่งต่อจาก ${sourceStation}`,
  };

  pushLog(logs, id, sourceStation, 'ส่งต่อ', `ส่งจาก ${sourceStation} ไปยัง ${destStation}`);
  pushLog(logs, id, destStation, 'รับส่งต่อ', `รับจาก ${sourceStation}`);

  return { item, visits: [sourceVisit, destVisit] };
}

/** เคสที่ผ่านสถานีคลินิกแล้วถูกส่งไปปลายทาง (PHARMACY/FINANCE) ตอนกด "จบ/ออกจากห้องตรวจ" */
function buildTerminalCase(
  fromClinical: string,
  terminalCode: string,
  terminalStatus: VisitStatus,
  logs: QueueLog[]
): { item: QueueItem; visits: StationVisit[] } {
  const id = nextId('q');
  const seq = String(randInt(1, 60)).padStart(3, '0');
  const hisQRaw = `${fromClinical}${seq}`;
  const parsed = parseHisQRaw(hisQRaw);
  const checkInAt = todayAt(randInt(7, 9), randInt(0, 59));
  const referAt = todayAt(randInt(10, 13), randInt(0, 59));

  const item: QueueItem = {
    id,
    hn: nextHn(),
    ...basePerson(),
    hisQRaw,
    hisQList: parsed.hisQList,
    primaryHisQ: parsed.primaryHisQ,
    isManualEntry: false,
    checkInAt,
    currentStation: terminalCode,
  };

  const clinicalVisit: StationVisit = {
    id: visitKey(id, fromClinical),
    queueItemId: id,
    stationCode: fromClinical,
    status: 'refer_to',
    referAt,
    referPeerStation: terminalCode,
    enteredAt: checkInAt,
    calledAt: todayAt(randInt(9, 10), randInt(0, 59)),
    updatedAt: referAt,
    updatedBy: 'สัตวแพทย์',
    note: `ตรวจเสร็จแล้ว ส่งต่อไปยัง ${terminalCode}`,
  };

  const terminalVisit: StationVisit = {
    id: visitKey(id, terminalCode),
    queueItemId: id,
    stationCode: terminalCode,
    status: terminalStatus,
    referAt,
    referPeerStation: fromClinical,
    enteredAt: referAt,
    calledAt: terminalStatus === 'refer_from' ? null : todayAt(randInt(13, 14), randInt(0, 59)),
    updatedAt: referAt,
    updatedBy: 'เจ้าหน้าที่',
    note: '',
  };

  pushLog(logs, id, fromClinical, 'จบ/ออกจากห้องตรวจ', `ส่งต่อไปยัง ${terminalCode}`);

  return { item, visits: [clinicalVisit, terminalVisit] };
}

export function generateSeed(): SeedResult {
  const queueItems: QueueItem[] = [];
  const visits: StationVisit[] = [];
  const logs: QueueLog[] = [];

  const statusCycle: VisitStatus[] = ['waiting', 'calling', 'missed', 'in_progress', 'on_hold'];

  // 1) รายการปกติ: ทุกสถานีคลินิก x ทุกสถานะหลัก (8 x 5 = 40)
  for (const station of CLINICAL_STATIONS) {
    statusCycle.forEach((status, i) => {
      const { item, visit } = buildNormalItem(station.code, status, 7 + i);
      queueItems.push(item);
      visits.push(visit);
      pushLog(logs, item.id, station.code, 'ลงทะเบียนเข้าคิว', `auto-detect เข้า ${station.code} จากรหัส ${item.primaryHisQ}`);
    });
  }

  // 2) หลายรหัส HIS ต่อ 1 รายการ (ใช้ Q1) — 8 รายการ
  const otherStationPool = CLINICAL_STATIONS.map((s) => s.code);
  for (const station of CLINICAL_STATIONS) {
    const others = otherStationPool.filter((c) => c !== station.code);
    const pick = [rand(others), rand(others)];
    const { item, visit } = buildMultiCodeItem(station.code, pick);
    queueItems.push(item);
    visits.push(visit);
    pushLog(logs, item.id, station.code, 'ลงทะเบียนเข้าคิว', `hisQ หลายชุด: ${item.hisQRaw} — ใช้ Q1 = ${item.primaryHisQ}`);
  }

  // 3) ไม่จัดกลุ่มคิว — 4 กรอกเอง + 4 รหัสไม่รู้จัก
  for (let i = 0; i < 4; i++) {
    const { item, visit } = buildUnassignedItem(true);
    queueItems.push(item);
    visits.push(visit);
    pushLog(logs, item.id, 'UNASSIGNED', 'ลงทะเบียนเข้าคิว', 'กรอกเอง ไม่ได้รันจากระบบ HIS');
  }
  for (let i = 0; i < 4; i++) {
    const { item, visit } = buildUnassignedItem(false);
    queueItems.push(item);
    visits.push(visit);
    pushLog(logs, item.id, 'UNASSIGNED', 'ลงทะเบียนเข้าคิว', `รหัส HIS "${item.hisQRaw}" ไม่รู้จัก`);
  }

  // 4) เคสส่งมาจาก ward (checkInAt เมื่อวาน + referAt วันนี้) — 6 รายการ
  const wardStations = ['MA', 'ER', 'SA', 'VA', 'CA', 'WI'];
  for (const station of wardStations) {
    const { item, visit } = buildWardCase(station);
    queueItems.push(item);
    visits.push(visit);
    pushLog(logs, item.id, station, 'ส่งต่อจาก Ward', 'check-in เดิมไม่ใช่วันนี้');
  }

  // 5) คู่ refer_to/refer_from ระหว่างสถานีคลินิก — 8 รายการ
  const referPairs: [string, string][] = [
    ['MA', 'SA'], ['WI', 'ER'], ['SA', 'SX'], ['ER', 'CA'],
    ['VA', 'MA'], ['EX', 'CA'], ['WI', 'VA'], ['SX', 'EX'],
  ];
  for (const [from, to] of referPairs) {
    const { item, visits: v } = buildReferralPair(from, to, logs);
    queueItems.push(item);
    visits.push(...v);
  }

  // 6) เคสถึงปลายทาง PHARMACY/FINANCE — 4 + 4
  const terminalStatusCycle: VisitStatus[] = ['refer_from', 'calling', 'in_progress', 'done'];
  for (const terminal of TERMINAL_STATIONS) {
    const clinicalPool = CLINICAL_STATIONS.map((s) => s.code);
    terminalStatusCycle.forEach((status) => {
      const { item, visits: v } = buildTerminalCase(rand(clinicalPool), terminal.code, status, logs);
      queueItems.push(item);
      visits.push(...v);
    });
  }

  return { queueItems, visits, logs };
}
