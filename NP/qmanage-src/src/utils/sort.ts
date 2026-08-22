import type { QueueItem, StationVisit, VisitStatus } from '../types';

/** เวลาที่ใช้เรียงคิว: referAt ถ้ามี (ส่งต่อวันนี้เสมอ) ไม่งั้นใช้ checkInAt (อาจเป็นวันก่อนหน้า) */
export function getSortTimestamp(item: QueueItem, visit: StationVisit): string {
  return visit.referAt || item.checkInAt;
}

export function sortByQueueTime<T extends { item: QueueItem; visit: StationVisit }>(rows: T[]): T[] {
  return [...rows].sort((a, b) => getSortTimestamp(a.item, a.visit).localeCompare(getSortTimestamp(b.item, b.visit)));
}

/**
 * ลำดับกลุ่ม status สำหรับตารางฝั่งเจ้าหน้าที่ (worklist):
 * รอดำเนินการ (waiting/refer_from) ก่อน → กำลังดำเนินการ (calling/in_progress/on_hold) → เรียกไม่มา (missed)
 * → ปิดแล้ว (refer_to/done) ไปท้ายตารางเสมอ + แสดงจาง
 */
export const STATUS_SORT_RANK: Record<VisitStatus, number> = {
  waiting: 0,
  refer_from: 1,
  calling: 2,
  in_progress: 3,
  on_hold: 4,
  missed: 5,
  refer_to: 6,
  done: 7,
};

export const CLOSED_STATUSES: readonly VisitStatus[] = ['refer_to', 'done'];

export function isClosedStatus(status: VisitStatus): boolean {
  return CLOSED_STATUSES.includes(status);
}

/** เรียงตาม status group ก่อน (active มาก่อน closed เสมอ) แล้วเรียงตามเวลาคิวภายในกลุ่มเดียวกัน */
export function sortWorklistRows<T extends { item: QueueItem; visit: StationVisit }>(rows: T[]): T[] {
  return [...rows].sort((a, b) => {
    const rankDiff = STATUS_SORT_RANK[a.visit.status] - STATUS_SORT_RANK[b.visit.status];
    if (rankDiff !== 0) return rankDiff;
    return getSortTimestamp(a.item, a.visit).localeCompare(getSortTimestamp(b.item, b.visit));
  });
}
