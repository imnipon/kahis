import { useMemo, useState } from 'react';
import { useQueueStore } from '../store/QueueStore';
import type { QueueItem } from '../types';
import { formatDateTime, formatDateTimeFull } from '../utils/date';
import StationAssignModal from './StationAssignModal';
import LogModal from './LogModal';
import { parseHisQRaw } from '../services/autoDetect';
import { QCell } from '../pages/WorklistPage';
import { ListPlus, History } from 'lucide-react';

/** ตารางรายการ "ไม่จัดกลุ่มคิว" — ใช้เป็น tab ภายใน WorklistPage (ค้นหาใช้ search ที่รับมาจากภายนอก) */
export default function UnassignedTable({ search }: { search: string }) {
  const { queueItems, getVisit } = useQueueStore();
  const [assignTarget, setAssignTarget] = useState<QueueItem | null>(null);
  const [logTarget, setLogTarget] = useState<QueueItem | null>(null);

  const allItems = useMemo(
    () => queueItems.filter((q) => !q.deleted && q.currentStation === 'UNASSIGNED').sort((a, b) => a.checkInAt.localeCompare(b.checkInAt)),
    [queueItems]
  );

  const items = useMemo(() => {
    if (!search.trim()) return allItems;
    const s = search.trim().toLowerCase();
    return allItems.filter(
      (item) =>
        item.hn.toLowerCase().includes(s) ||
        item.visitNo.toLowerCase().includes(s) ||
        item.petName.toLowerCase().includes(s) ||
        item.ownerName.toLowerCase().includes(s) ||
        item.hisQRaw.toLowerCase().includes(s)
    );
  }, [allItems, search]);

  return (
    <>
      <div className="max-h-[calc(100vh-320px)] overflow-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="sticky top-0 z-10 bg-slate-50 text-xs uppercase text-slate-400">
            <tr>
              <th className="whitespace-nowrap px-4 py-3">Time</th>
              <th className="whitespace-nowrap px-4 py-3">Q</th>
              <th className="whitespace-nowrap px-4 py-3">HN</th>
              <th className="whitespace-nowrap px-4 py-3">สัตว์เลี้ยง</th>
              <th className="whitespace-nowrap px-4 py-3">ชนิด</th>
              <th className="whitespace-nowrap px-4 py-3">เจ้าของ</th>
              <th className="whitespace-nowrap px-4 py-3">Note / Assigned DVM</th>
              <th className="whitespace-nowrap px-4 py-3">ห้อง</th>
              <th className="whitespace-nowrap px-4 py-3">เหตุผลที่ยังไม่จัดกลุ่ม</th>
              <th className="whitespace-nowrap px-4 py-3 text-right">การจัดการ</th>
              <th className="whitespace-nowrap px-4 py-3">อัปเดตล่าสุด</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((item) => {
              const parsed = parseHisQRaw(item.hisQRaw);
              const visit = getVisit(item.id, 'UNASSIGNED');
              return (
                <tr key={item.id} className="hover:bg-amber-50/40">
                  <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-500">
                    <div>T —</div>
                    <div>C {formatDateTimeFull(item.checkInAt)}</div>
                  </td>
                  <td className="px-4 py-3">
                    <QCell item={item} />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 font-semibold text-slate-800">
                    <div>{item.hn}</div>
                    <div className="font-mono text-[11px] font-normal text-slate-400">{item.visitNo}</div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-700">{item.petName}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-500">{item.species}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-500">{item.ownerName}</td>
                  <td className="max-w-[220px] whitespace-normal break-words px-4 py-3 text-xs text-slate-500">
                    {item.hisNote} · DVM {item.dvmName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-500">{item.room || '—'}</td>
                  <td className="px-4 py-3 text-xs text-amber-700">
                    {item.isManualEntry ? 'กรอกเอง ไม่มีรหัส HIS' : `ไม่พบสถานีที่ตรงกับรหัส "${parsed.primaryHisQ}"`}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-1.5">
                      <button
                        onClick={() => setAssignTarget(item)}
                        className="flex items-center gap-1 whitespace-nowrap rounded-lg bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
                        title="จัดคิวเข้าสถานี"
                      >
                        <ListPlus className="w-3.5 h-3.5" />
                        จัดคิวเข้าสถานี
                      </button>
                      <button
                        onClick={() => setLogTarget(item)}
                        className="flex items-center gap-1 whitespace-nowrap rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-100"
                        title="ดูประวัติ (Log)"
                      >
                        <History className="w-3.5 h-3.5" />
                        ประวัติ
                      </button>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-400">
                    {visit ? `${formatDateTime(visit.updatedAt)} · ${visit.updatedBy}` : '—'}
                  </td>
                </tr>
              );
            })}
            {items.length === 0 && (
              <tr>
                <td colSpan={11} className="px-4 py-10 text-center text-slate-400">
                  {allItems.length === 0 ? 'ไม่มีรายการที่ต้องจัดกลุ่ม 🎉' : 'ไม่พบรายการ'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {assignTarget && <StationAssignModal item={assignTarget} onClose={() => setAssignTarget(null)} />}
      {logTarget && <LogModal item={logTarget} onClose={() => setLogTarget(null)} />}
    </>
  );
}
