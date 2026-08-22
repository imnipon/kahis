import { useMemo, useState } from 'react';
import { useQueueStore } from '../store/QueueStore';
import type { QueueItem } from '../types';
import { formatDateTime } from '../utils/date';
import StationAssignModal from '../components/StationAssignModal';
import { parseHisQRaw } from '../services/autoDetect';
import { AlertTriangle, ListPlus, EyeOff } from 'lucide-react';

export default function UnassignedPage() {
  const { queueItems } = useQueueStore();
  const [assignTarget, setAssignTarget] = useState<QueueItem | null>(null);

  const items = useMemo(
    () => queueItems.filter((q) => !q.deleted && q.currentStation === 'UNASSIGNED').sort((a, b) => a.checkInAt.localeCompare(b.checkInAt)),
    [queueItems]
  );

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="flex items-center gap-2 text-lg font-bold text-slate-800">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            ไม่จัดกลุ่มคิว
          </h1>
          <p className="text-sm text-slate-400">
            รายการที่ auto-detect หาสถานีไม่ได้ (รหัส HIS ไม่ตรง / ลงทะเบียนเอง) ต้องจัดคิวด้วยตนเอง
          </p>
        </div>
        <span className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
          <EyeOff className="h-3.5 w-3.5" />
          แท็บนี้ไม่แสดงบนจอสาธารณะ (TV)
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const parsed = parseHisQRaw(item.hisQRaw);
          return (
            <div key={item.id} className="rounded-xl border border-amber-200 bg-amber-50/40 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800">{item.hn}</span>
                <span className="text-xs text-slate-400">{formatDateTime(item.checkInAt)}</span>
              </div>
              <div className="mt-0.5 text-sm text-slate-600">{item.petName} · {item.species}</div>
              <div className="text-xs text-slate-400">เจ้าของ: {item.ownerName}</div>
              <div className="mt-2 text-xs">
                <span className="text-slate-400">รหัส HIS: </span>
                <span className="font-mono font-semibold text-slate-700">
                  {item.hisQRaw || <span className="italic text-slate-400">ไม่มี (กรอกเอง)</span>}
                </span>
              </div>
              {!item.isManualEntry && parsed.primaryHisQ && (
                <div className="mt-1 text-xs text-amber-700">
                  ไม่พบสถานีที่ตรงกับรหัส "{parsed.primaryHisQ}"
                </div>
              )}
              <button
                onClick={() => setAssignTarget(item)}
                className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <ListPlus className="w-4 h-4" />
                จัดคิวเข้าสถานี
              </button>
            </div>
          );
        })}
        {items.length === 0 && (
          <div className="col-span-full rounded-xl border border-slate-200 bg-white p-10 text-center text-slate-400">
            ไม่มีรายการที่ต้องจัดกลุ่ม 🎉
          </div>
        )}
      </div>

      {assignTarget && <StationAssignModal item={assignTarget} onClose={() => setAssignTarget(null)} />}
    </div>
  );
}
