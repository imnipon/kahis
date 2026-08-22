import { STATION_MAPPING_RULES } from '../data/stations';
import { UNASSIGNED_CODE } from '../types';

const HIS_Q_PATTERN = /^([A-Za-z]{2})(\d{3,})$/;
const MAX_HIS_Q_SETS = 6;

export interface ParsedHisQ {
  hisQList: string[];
  primaryHisQ: string;
  isManualEntry: boolean;
  detectedStation: string; // station code หรือ UNASSIGNED
}

/**
 * แยก hisQRaw ด้วย comma (สูงสุด 6 ชุด) แล้วดูแค่ชุดที่ 1 (Q1) เพื่อ auto-detect สถานี
 * รูปแบบที่รองรับ: [ตัวอักษร 2 ตัว][เลขอย่างน้อย 3 หลัก] เช่น MA001
 */
export function parseHisQRaw(hisQRaw: string): ParsedHisQ {
  const hisQList = hisQRaw
    .split(',')
    .map((s) => s.trim().toUpperCase())
    .filter(Boolean)
    .slice(0, MAX_HIS_Q_SETS);

  if (hisQList.length === 0) {
    return { hisQList: [], primaryHisQ: '', isManualEntry: true, detectedStation: UNASSIGNED_CODE };
  }

  const primaryHisQ = hisQList[0];
  const match = primaryHisQ.match(HIS_Q_PATTERN);
  if (!match) {
    return { hisQList, primaryHisQ, isManualEntry: true, detectedStation: UNASSIGNED_CODE };
  }

  const prefix = match[1];
  const rule = STATION_MAPPING_RULES.find((r) => r.hisPrefix === prefix);
  return {
    hisQList,
    primaryHisQ,
    isManualEntry: false,
    detectedStation: rule ? rule.stationCode : UNASSIGNED_CODE,
  };
}
