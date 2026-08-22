import type { QueueItem, StationVisit } from '../types';

/** เวลาที่ใช้เรียงคิว: referAt ถ้ามี (ส่งต่อวันนี้เสมอ) ไม่งั้นใช้ checkInAt (อาจเป็นวันก่อนหน้า) */
export function getSortTimestamp(item: QueueItem, visit: StationVisit): string {
  return visit.referAt || item.checkInAt;
}

export function sortByQueueTime<T extends { item: QueueItem; visit: StationVisit }>(rows: T[]): T[] {
  return [...rows].sort((a, b) => getSortTimestamp(a.item, a.visit).localeCompare(getSortTimestamp(b.item, b.visit)));
}
