import { useMemo, useRef, useState } from 'react';
import { useQueueStore } from '../store/QueueStore';
import { CLINICAL_STATIONS, TERMINAL_STATIONS, getStation } from '../data/stations';
import type { QueueItem, StationVisit, VisitStatus } from '../types';
import { STATUS_LABEL_TH, UNASSIGNED_CODE } from '../types';
import { StationBadge } from '../components/StationBadge';
import { StatusBadge } from '../components/StatusBadge';
import UnassignedTable from '../components/UnassignedTable';
import { formatDateTime, formatDateTimeFull, formatDateShort, todayISO } from '../utils/date';
import { sortWorklistRows, isClosedStatus } from '../utils/sort';
import { parseHisQRaw } from '../services/autoDetect';
import StatusModal from '../components/StatusModal';
import LogModal from '../components/LogModal';
import { Search, Settings2, History, X, CalendarDays, AlertTriangle, EyeOff, Tv, ExternalLink } from 'lucide-react';

const FILTERABLE_STATIONS = [...CLINICAL_STATIONS, ...TERMINAL_STATIONS];
const STATUS_OPTIONS = Object.keys(STATUS_LABEL_TH) as VisitStatus[];

/** จัดกลุ่มคิว Q1-Q6 เป็นชุดละ 3 สำหรับขึ้นบรรทัดใหม่ในคอลัมน์ Q */
function chunkQueues(list: string[], size = 3): string[][] {
  const out: string[][] = [];
  for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
  return out;
}

function peerLabel(peer: string | null): string {
  if (!peer) return '';
  if (peer === 'WARD') return 'Ward';
  return getStation(peer)?.shortLabel || getStation(peer)?.name || peer;
}

export function QCell({ item }: { item: QueueItem }) {
  if (item.isManualEntry || item.hisQList.length === 0) {
    return <span className="text-xs italic text-slate-400">ไม่มี (กรอกเอง)</span>;
  }
  const q1Station = getStation(parseHisQRaw(item.hisQRaw).detectedStation);
  const rows = chunkQueues(item.hisQList);
  return (
    <div className="flex flex-col gap-0.5 font-mono text-xs font-semibold">
      {rows.map((row, rIdx) => (
        <div key={rIdx} className="whitespace-nowrap">
          {row.map((code, cIdx) => {
            const isQ1 = rIdx === 0 && cIdx === 0;
            return (
              <span key={code + cIdx}>
                {cIdx > 0 && <span className="text-slate-300">, </span>}
                <span
                  className={isQ1 ? 'rounded px-1 py-0.5' : 'text-slate-600'}
                  style={isQ1 && q1Station ? { backgroundColor: `${q1Station.color}1A`, color: q1Station.color } : undefined}
                >
                  {code}
                </span>
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function StatusRoomCell({ visit, room }: { visit: StationVisit; room: string }) {
  const isTransfer = (visit.status === 'refer_from' || visit.status === 'refer_to') && visit.referAt;
  return (
    <div className="flex flex-col gap-0.5">
      {isTransfer ? (
        <span
          className={`inline-flex items-center whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-semibold ${
            visit.status === 'refer_from' ? 'border-violet-400 bg-violet-100 text-violet-700' : 'border-gray-300 bg-gray-100 text-gray-500'
          }`}
        >
          {visit.status === 'refer_from' ? 'ส่งจาก' : 'ส่งต่อ'} {peerLabel(visit.referPeerStation)}
        </span>
      ) : (
        <StatusBadge status={visit.status} />
      )}
      <span className="text-xs text-slate-400">{room || '—'}</span>
    </div>
  );
}

export default function WorklistPage() {
  const { queueItems, visits, isLoading } = useQueueStore();
  const [search, setSearch] = useState('');
  const [stationFilter, setStationFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [statusTarget, setStatusTarget] = useState<QueueItem | null>(null);
  const [logTarget, setLogTarget] = useState<QueueItem | null>(null);
  // ตัวอย่าง UI เท่านั้น — ยังไม่ผูก logic กรองข้อมูลจริง (ดูรายละเอียดใน for_dev_qmanage.md)
  const [filterDate, setFilterDate] = useState(todayISO());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const dateLabel = filterDate === todayISO() ? 'วันนี้' : formatDateShort(filterDate);

  const isUnassignedTab = stationFilter === UNASSIGNED_CODE;

  const hasFilters = search.trim() !== '' || (stationFilter !== 'ALL' && !isUnassignedTab) || statusFilter !== 'ALL';
  const clearFilters = () => {
    setSearch('');
    setStationFilter('ALL');
    setStatusFilter('ALL');
  };

  const openMonitor = () => {
    const url = `${import.meta.env.BASE_URL}#/monitor`;
    window.open(url, 'qmanage-monitor', 'width=1400,height=900,noopener,noreferrer');
  };

  const rows = useMemo(() => {
    const withVisit = visits
      .filter((v) => v.stationCode !== UNASSIGNED_CODE)
      .map((visit) => {
        const item = queueItems.find((q) => q.id === visit.queueItemId);
        return item && !item.deleted ? { item, visit } : null;
      })
      .filter((x): x is { item: QueueItem; visit: StationVisit } => x !== null)
      .filter((r) => stationFilter === 'ALL' || r.visit.stationCode === stationFilter)
      .filter((r) => statusFilter === 'ALL' || r.visit.status === statusFilter)
      .filter((r) => {
        if (!search.trim()) return true;
        const s = search.trim().toLowerCase();
        const { item } = r;
        return (
          item.hn.toLowerCase().includes(s) ||
          item.visitNo.toLowerCase().includes(s) ||
          item.petName.toLowerCase().includes(s) ||
          item.ownerName.toLowerCase().includes(s) ||
          item.hisQRaw.toLowerCase().includes(s)
        );
      });
    return sortWorklistRows(withVisit);
  }, [visits, queueItems, stationFilter, statusFilter, search]);

  const totalActive = visits.filter((v) => v.stationCode !== UNASSIGNED_CODE).length;
  const unassignedCount = queueItems.filter((q) => !q.deleted && q.currentStation === UNASSIGNED_CODE).length;

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          {isUnassignedTab ? (
            <h1 className="flex items-center gap-2 text-lg font-bold text-slate-800">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              ไม่จัดกลุ่มคิว
            </h1>
          ) : (
            <h1 className="text-lg font-bold text-slate-800">รายการลงทะเบียน (Work Schedule)</h1>
          )}
          {isUnassignedTab ? (
            <p className="text-sm text-slate-400">
              รายการที่ auto-detect หาสถานีไม่ได้ (รหัส HIS ไม่ตรง / ลงทะเบียนเอง) ต้องจัดคิวด้วยตนเอง ({unassignedCount} รายการ)
            </p>
          ) : (
            <p className="text-sm text-slate-400">
              รายการที่จัดเข้าสถานีแล้ว — กดปุ่ม “จัดการคิว” เพื่อเรียก/พัก/ส่งต่อ ({rows.length}/{totalActive} รายการ)
            </p>
          )}
        </div>
        <button
          onClick={openMonitor}
          className="flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
          title="เปิดจอแสดงผลคิวในหน้าต่างใหม่ (สำหรับ TV/มอนิเตอร์สาธารณะ)"
        >
          <Tv className="w-4 h-4" />
          เปิดจอ
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </button>
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        <button
          onClick={() => setStationFilter('ALL')}
          className="rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors"
          style={{ backgroundColor: stationFilter === 'ALL' ? '#1e293b' : '#f1f5f9', color: stationFilter === 'ALL' ? 'white' : '#64748b' }}
        >
          ทั้งหมด
        </button>
        <button
          onClick={() => setStationFilter(UNASSIGNED_CODE)}
          className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors"
          style={{ backgroundColor: isUnassignedTab ? '#f59e0b' : '#fef3c7', color: isUnassignedTab ? 'white' : '#b45309' }}
        >
          <AlertTriangle className="h-3 w-3" />
          ไม่จัดกลุ่มคิว
        </button>
        {FILTERABLE_STATIONS.map((s) => (
          <button
            key={s.code}
            onClick={() => setStationFilter(s.code)}
            title={s.name}
            className="rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors"
            style={{ backgroundColor: stationFilter === s.code ? s.color : '#f1f5f9', color: stationFilter === s.code ? 'white' : '#64748b' }}
          >
            {s.code}
          </button>
        ))}
      </div>

      <div
        className={`mb-3 flex flex-wrap items-center gap-2 rounded-xl border p-2.5 ${
          isUnassignedTab ? 'border-amber-200 bg-amber-50/50' : 'border-slate-200 bg-slate-50/70'
        }`}
      >
        <div className="relative min-w-[220px] flex-1">
          <Search className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ค้นหา HN / ชื่อสัตว์ / เจ้าของ / รหัส HIS"
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm focus:border-blue-400 focus:outline-none"
          />
        </div>
        {!isUnassignedTab && (
          <>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-blue-400 focus:outline-none"
            >
              <option value="ALL">สถานะ: ทั้งหมด</option>
              {STATUS_OPTIONS.map((st) => (
                <option key={st} value={st}>
                  {STATUS_LABEL_TH[st]}
                </option>
              ))}
            </select>
            <div className="relative">
              <button
                onClick={() => setShowDatePicker((v) => !v)}
                title="ตัวอย่าง UI — ยังไม่ผูก logic กรองจริง"
                className="flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100"
              >
                <CalendarDays className="h-3.5 w-3.5" />
                วันที่: {dateLabel}
              </button>
              {showDatePicker && (
                <div className="absolute right-0 top-full z-20 mt-1.5 w-56 rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
                  <input
                    ref={dateInputRef}
                    type="date"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value || todayISO())}
                    className="w-full rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm focus:border-blue-400 focus:outline-none"
                  />
                  <div className="mt-2 flex items-center justify-between">
                    <button
                      onClick={() => setFilterDate(todayISO())}
                      className="text-xs font-semibold text-blue-600 hover:underline"
                    >
                      กลับไปวันนี้
                    </button>
                    <button onClick={() => setShowDatePicker(false)} className="text-xs font-medium text-slate-400 hover:text-slate-600">
                      ปิด
                    </button>
                  </div>
                  <p className="mt-2 border-t border-slate-100 pt-2 text-[11px] leading-snug text-slate-400">
                    ตัวอย่าง UI — ยังไม่ผูก logic กรองจริง (เตรียมไว้สำหรับฟีเจอร์ค้นหาย้อนหลังในอนาคต)
                  </p>
                </div>
              )}
            </div>
          </>
        )}
        {isUnassignedTab && (
          <span className="flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-500">
            <EyeOff className="h-3.5 w-3.5" />
            แท็บนี้ไม่แสดงบนจอสาธารณะ (TV)
          </span>
        )}
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100"
          >
            <X className="h-3.5 w-3.5" />
            ล้างตัวกรอง
          </button>
        )}
      </div>

      {isLoading ? (
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-slate-400">กำลังโหลดข้อมูล...</div>
      ) : isUnassignedTab ? (
        <UnassignedTable search={search} />
      ) : (
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
                <th className="whitespace-nowrap px-4 py-3 text-right">การจัดการ</th>
                <th className="whitespace-nowrap px-4 py-3">สถานี</th>
                <th className="whitespace-nowrap px-4 py-3">สถานะ / ห้องตรวจ</th>
                <th className="whitespace-nowrap px-4 py-3">อัปเดตล่าสุด</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map(({ item, visit }) => {
                const closed = isClosedStatus(visit.status);
                return (
                  <tr key={visit.id} className={closed ? 'bg-slate-50/60 text-slate-400' : 'hover:bg-slate-50'}>
                    <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-500">
                      <div>T {visit.referAt ? formatDateTimeFull(visit.referAt) : '—'}</div>
                      <div>C {formatDateTimeFull(item.checkInAt)}</div>
                    </td>
                    <td className="px-4 py-3">
                      <QCell item={item} />
                    </td>
                    <td className={`whitespace-nowrap px-4 py-3 font-semibold ${closed ? 'text-slate-400' : 'text-slate-800'}`}>
                      <div>{item.hn}</div>
                      <div className={`font-mono text-[11px] font-normal ${closed ? 'text-slate-300' : 'text-slate-400'}`}>{item.visitNo}</div>
                    </td>
                    <td className={`whitespace-nowrap px-4 py-3 ${closed ? 'text-slate-400' : 'text-slate-700'}`}>{item.petName}</td>
                    <td className={`whitespace-nowrap px-4 py-3 ${closed ? 'text-slate-400' : 'text-slate-500'}`}>{item.species}</td>
                    <td className={`whitespace-nowrap px-4 py-3 ${closed ? 'text-slate-400' : 'text-slate-500'}`}>{item.ownerName}</td>
                    <td className={`max-w-[220px] whitespace-normal break-words px-4 py-3 text-xs ${closed ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.hisNote} · DVM {item.dvmName}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-1.5">
                        {!closed && (
                          <button
                            onClick={() => setStatusTarget(item)}
                            className="flex items-center gap-1 whitespace-nowrap rounded-lg bg-blue-600 px-2.5 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
                            title="จัดการสถานะ/ส่งต่อ"
                          >
                            <Settings2 className="w-3.5 h-3.5" />
                            จัดการคิว
                          </button>
                        )}
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
                    <td className="px-4 py-3">
                      <StationBadge code={visit.stationCode} size="sm" />
                    </td>
                    <td className="px-4 py-3">
                      <StatusRoomCell visit={visit} room={item.room} />
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-400">
                      {formatDateTime(visit.updatedAt)} · {visit.updatedBy}
                    </td>
                  </tr>
                );
              })}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={11} className="px-4 py-10 text-center text-slate-400">
                    ไม่พบรายการ
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {statusTarget && <StatusModal item={statusTarget} onClose={() => setStatusTarget(null)} />}
      {logTarget && <LogModal item={logTarget} onClose={() => setLogTarget(null)} />}
    </div>
  );
}
