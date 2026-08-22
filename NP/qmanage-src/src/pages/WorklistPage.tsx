import { useMemo, useState } from 'react';
import { useQueueStore } from '../store/QueueStore';
import { STATIONS } from '../data/stations';
import type { QueueItem } from '../types';
import { StationBadge } from '../components/StationBadge';
import { StatusBadge } from '../components/StatusBadge';
import { formatDateTime } from '../utils/date';
import StationAssignModal from '../components/StationAssignModal';
import StatusModal from '../components/StatusModal';
import LogModal from '../components/LogModal';
import { Search, ListPlus, Settings2, History } from 'lucide-react';

export default function WorklistPage() {
  const { queueItems, getVisit, isLoading } = useQueueStore();
  const [search, setSearch] = useState('');
  const [stationFilter, setStationFilter] = useState('ALL');
  const [assignTarget, setAssignTarget] = useState<QueueItem | null>(null);
  const [statusTarget, setStatusTarget] = useState<QueueItem | null>(null);
  const [logTarget, setLogTarget] = useState<QueueItem | null>(null);

  const filtered = useMemo(() => {
    return queueItems
      .filter((q) => !q.deleted)
      .filter((q) => stationFilter === 'ALL' || q.currentStation === stationFilter)
      .filter((q) => {
        if (!search.trim()) return true;
        const s = search.trim().toLowerCase();
        return (
          q.hn.toLowerCase().includes(s) ||
          q.petName.toLowerCase().includes(s) ||
          q.ownerName.toLowerCase().includes(s) ||
          q.hisQRaw.toLowerCase().includes(s)
        );
      })
      .sort((a, b) => b.checkInAt.localeCompare(a.checkInAt));
  }, [queueItems, stationFilter, search]);

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-lg font-bold text-slate-800">รายการลงทะเบียน (Work Schedule)</h1>
          <p className="text-sm text-slate-400">
            รายการเช็คอินจาก KAHIS — กดปุ่ม “จัดคิว” เพื่อเรียกใช้ระบบจัดการคิว ({filtered.length}/{queueItems.length} รายการ)
          </p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="ค้นหา HN / ชื่อสัตว์ / เจ้าของ / รหัส HIS"
              className="w-64 rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm focus:border-blue-400 focus:outline-none"
            />
          </div>
          <select
            value={stationFilter}
            onChange={(e) => setStationFilter(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-blue-400 focus:outline-none"
          >
            <option value="ALL">ทุกสถานี</option>
            {STATIONS.map((s) => (
              <option key={s.code} value={s.code}>
                {s.code} — {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-slate-400">กำลังโหลดข้อมูล...</div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-4 py-3">เช็คอิน</th>
                <th className="px-4 py-3">HN / สัตว์เลี้ยง</th>
                <th className="px-4 py-3">เจ้าของ / สพ.</th>
                <th className="px-4 py-3">รหัส HIS</th>
                <th className="px-4 py-3">สถานี</th>
                <th className="px-4 py-3">สถานะ</th>
                <th className="px-4 py-3 text-right">การจัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((item) => {
                const visit = getVisit(item.id, item.currentStation);
                return (
                  <tr key={item.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-slate-500 whitespace-nowrap">{formatDateTime(item.checkInAt)}</td>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-slate-800">{item.hn}</div>
                      <div className="text-slate-500">{item.petName} · {item.species}</div>
                    </td>
                    <td className="px-4 py-3 text-slate-500">
                      <div>{item.ownerName}</div>
                      <div className="text-slate-400">{item.dvmName}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-xs font-semibold text-slate-700">
                        {item.hisQRaw || <span className="italic text-slate-400">กรอกเอง</span>}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <StationBadge code={item.currentStation} size="sm" />
                    </td>
                    <td className="px-4 py-3">{visit && <StatusBadge status={visit.status} />}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-1.5">
                        <button
                          onClick={() => setAssignTarget(item)}
                          className="flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100"
                          title="จัดคิวเข้าสถานี"
                        >
                          <ListPlus className="w-3.5 h-3.5" />
                          จัดคิว
                        </button>
                        {item.currentStation !== 'UNASSIGNED' && (
                          <button
                            onClick={() => setStatusTarget(item)}
                            className="flex items-center gap-1 rounded-lg bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
                            title="จัดการสถานะ/ส่งต่อ"
                          >
                            <Settings2 className="w-3.5 h-3.5" />
                            จัดการคิว
                          </button>
                        )}
                        <button
                          onClick={() => setLogTarget(item)}
                          className="flex items-center gap-1 rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-100"
                          title="ดูประวัติ (Log)"
                        >
                          <History className="w-3.5 h-3.5" />
                          ประวัติ
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-slate-400">
                    ไม่พบรายการ
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {assignTarget && <StationAssignModal item={assignTarget} onClose={() => setAssignTarget(null)} />}
      {statusTarget && <StatusModal item={statusTarget} onClose={() => setStatusTarget(null)} />}
      {logTarget && <LogModal item={logTarget} onClose={() => setLogTarget(null)} />}
    </div>
  );
}
