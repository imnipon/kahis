import type { QueueItem } from '../types';
import { useQueueStore } from '../store/QueueStore';
import { getStation } from '../data/stations';
import Modal from './Modal';
import { StationBadge } from './StationBadge';
import { formatDateTime } from '../utils/date';
import { History, User } from 'lucide-react';

/** ดูประวัติ QueueLog ทั้งหมดของ QueueItem — ผ่านสถานีไหนมาบ้าง เวลาไหน ใครทำ (audit trail แบบ append-only) */
export default function LogModal({ item, onClose }: { item: QueueItem; onClose: () => void }) {
  const { getLogsForItem } = useQueueStore();
  const logs = getLogsForItem(item.id);

  return (
    <Modal title="ประวัติการดำเนินการ (Log)" onClose={onClose} width="max-w-xl">
      <div className="mb-3 text-sm">
        <div className="font-bold text-slate-800">
          {item.hn} — {item.petName} <span className="text-slate-400 font-normal">({item.species})</span>
        </div>
        <div className="text-slate-500">เจ้าของ: {item.ownerName}</div>
      </div>

      {logs.length === 0 ? (
        <div className="flex flex-col items-center gap-1.5 py-8 text-slate-400">
          <History className="h-6 w-6 opacity-40" />
          <span className="text-sm">ยังไม่มีประวัติ</span>
        </div>
      ) : (
        <ol className="relative space-y-3 border-l border-slate-200 pl-4">
          {logs.map((l) => {
            const station = getStation(l.stationCode);
            return (
              <li key={l.id} className="relative">
                <span className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-blue-500" />
                <div className="flex flex-wrap items-center gap-2">
                  {station ? <StationBadge code={station.code} size="sm" /> : (
                    <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-500">{l.stationCode}</span>
                  )}
                  <span className="text-sm font-semibold text-slate-700">{l.action}</span>
                  <span className="text-xs text-slate-400">{formatDateTime(l.at)}</span>
                </div>
                {l.note && <div className="mt-0.5 text-xs text-slate-500">{l.note}</div>}
                <div className="mt-0.5 flex items-center gap-1 text-xs text-slate-400">
                  <User className="h-3 w-3" />
                  {l.actor}
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </Modal>
  );
}
