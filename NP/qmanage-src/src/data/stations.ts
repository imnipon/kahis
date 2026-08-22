import type { StationGroup, StationMappingRule } from '../types';

export const STATIONS: StationGroup[] = [
  { code: 'MA', name: 'อายุรกรรมนัดหมาย', shortLabel: 'MA', color: '#2563eb', icon: 'calendar-check', order: 1, kind: 'clinical', publicDisplay: true },
  { code: 'WI', name: 'อายุรกรรมทั่วไป', shortLabel: 'WI', color: '#0891b2', icon: 'stethoscope', order: 2, kind: 'clinical', publicDisplay: true },
  { code: 'ER', name: 'อายุรกรรมฉุกเฉิน', shortLabel: 'ER', color: '#dc2626', icon: 'siren', order: 3, kind: 'clinical', publicDisplay: true },
  { code: 'SA', name: 'ศัลยกรรม', shortLabel: 'SA', color: '#7c3aed', icon: 'scissors', order: 4, kind: 'clinical', publicDisplay: true },
  { code: 'SX', name: 'ตรวจศัลยกรรม', shortLabel: 'SX', color: '#9333ea', icon: 'clipboard-list', order: 5, kind: 'clinical', publicDisplay: true },
  { code: 'VA', name: 'วัคซีน', shortLabel: 'VA', color: '#16a34a', icon: 'syringe', order: 6, kind: 'clinical', publicDisplay: true },
  { code: 'EX', name: 'อายุรกรรมสัตว์พิเศษ', shortLabel: 'EX', color: '#ea580c', icon: 'paw-print', order: 7, kind: 'clinical', publicDisplay: true },
  { code: 'CA', name: 'อายุรกรรมโรคหัวใจ', shortLabel: 'CA', color: '#e11d48', icon: 'heart-pulse', order: 8, kind: 'clinical', publicDisplay: true },
  { code: 'PHARMACY', name: 'ยานำกลับ', shortLabel: 'ยานำกลับ', color: '#0d9488', icon: 'pill', order: 9, kind: 'terminal', publicDisplay: true },
  { code: 'FINANCE', name: 'การเงิน', shortLabel: 'การเงิน', color: '#ca8a04', icon: 'banknote', order: 10, kind: 'terminal', publicDisplay: true },
  { code: 'UNASSIGNED', name: 'ไม่จัดกลุ่มคิว', shortLabel: 'ไม่จัดกลุ่ม', color: '#64748b', icon: 'help-circle', order: 99, kind: 'virtual', publicDisplay: false },
];

export const STATION_MAP: Record<string, StationGroup> = STATIONS.reduce((acc, s) => {
  acc[s.code] = s;
  return acc;
}, {} as Record<string, StationGroup>);

export const CLINICAL_STATIONS = STATIONS.filter((s) => s.kind === 'clinical').sort((a, b) => a.order - b.order);
export const TERMINAL_STATIONS = STATIONS.filter((s) => s.kind === 'terminal').sort((a, b) => a.order - b.order);
export const PUBLIC_STATIONS = STATIONS.filter((s) => s.publicDisplay).sort((a, b) => a.order - b.order);

// Identity mapping: HIS 2-letter prefix -> Station code (เฉพาะ 8 สถานีคลินิก)
export const STATION_MAPPING_RULES: StationMappingRule[] = CLINICAL_STATIONS.map((s) => ({
  hisPrefix: s.code,
  stationCode: s.code,
}));

export function getStation(code: string): StationGroup | undefined {
  return STATION_MAP[code];
}
