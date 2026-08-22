import { useState } from 'react';
import type { QueueItem } from '../types';
import { useQueueStore } from '../store/QueueStore';
import { getStation } from '../data/stations';
import Modal from './Modal';
import StationPickerGrid from './StationPickerGrid';
import { StationBadge } from './StationBadge';
import { StatusBadge } from './StatusBadge';
import LogModal from './LogModal';
import { formatDateTime } from '../utils/date';
import { PhoneCall, PauseCircle, PlayCircle, LogIn, LogOut, RotateCw, CheckCircle2, History } from 'lucide-react';

type PickerMode = 'transfer' | 'finish' | null;

export default function StatusModal({ item, onClose }: { item: QueueItem; onClose: () => void }) {
  const store = useQueueStore();
  const [picker, setPicker] = useState<PickerMode>(null);
  const [showLog, setShowLog] = useState(false);

  const stationCode = item.currentStation;
  const station = getStation(stationCode);
  const visit = store.getVisit(item.id, stationCode);

  if (!station || !visit) return null;
  const isTerminal = station.kind === 'terminal';

  const close = () => onClose();

  const handleTransferPick = (dest: string) => {
    store.quickTransfer(item.id, stationCode, dest);
    setPicker(null);
    close();
  };

  const handleFinishPick = (dest: string) => {
    store.finishAndRoute(item.id, stationCode, dest);
    setPicker(null);
    close();
  };

  if (picker === 'transfer') {
    return (
      <Modal title={`ส่งต่อจาก ${station.name}`} onClose={() => setPicker(null)} width="max-w-xl">
        <p className="mb-3 text-sm text-slate-500">เลือกสถานีปลายทาง (สถานีคลินิกอื่นเท่านั้น)</p>
        <StationPickerGrid exclude={[stationCode]} onPick={handleTransferPick} />
      </Modal>
    );
  }

  if (picker === 'finish') {
    return (
      <Modal title={`จบ/ออกจากห้องตรวจ — ${station.name}`} onClose={() => setPicker(null)} width="max-w-xl">
        <p className="mb-3 text-sm text-slate-500">ต้องเลือกปลายทางเสมอ: สถานีคลินิกอื่น หรือ ยานำกลับ / การเงิน</p>
        <StationPickerGrid exclude={[stationCode]} includeTerminal onPick={handleFinishPick} />
      </Modal>
    );
  }

  return (
    <Modal title="จัดการคิว / สถานะ" onClose={close} width="max-w-lg">
      <div className="mb-4 rounded-xl bg-slate-50 border border-slate-200 p-3 text-sm">
        <div className="flex items-center justify-between">
          <div className="font-bold text-slate-800">
            {item.hn} — {item.petName} <span className="text-slate-400 font-normal">({item.species})</span>
          </div>
          <span className="text-xs text-slate-400">เช็คอิน: {formatDateTime(item.checkInAt)}</span>
        </div>
        <div className="text-slate-500 mt-0.5">เจ้าของ: {item.ownerName} · สพ.: {item.dvmName} · ห้อง: {item.room}</div>
        <div className="mt-2 flex items-center gap-2">
          <StationBadge code={stationCode} size="md" />
          <StatusBadge status={visit.status} />
        </div>
        {visit.referAt && (
          <div className="mt-2 text-xs text-violet-600">
            ส่งต่อ {formatDateTime(visit.referAt)}
            {visit.referPeerStation && (
              <>
                {' '}
                {visit.status === 'refer_from' ? 'จาก' : 'ไปยัง'}{' '}
                {visit.referPeerStation === 'WARD' ? 'หอผู้ป่วย (Ward)' : getStation(visit.referPeerStation)?.name || visit.referPeerStation}
              </>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {!isTerminal && (visit.status === 'waiting' || visit.status === 'refer_from') && (
          <ActionButton icon={PhoneCall} label="เรียก" onClick={() => { store.callVisit(item.id, stationCode); close(); }} color="amber" />
        )}
        {!isTerminal && visit.status === 'waiting' && (
          <ActionButton icon={PauseCircle} label="พัก" onClick={() => { store.holdVisit(item.id, stationCode); close(); }} color="orange" />
        )}
        {!isTerminal && (visit.status === 'waiting' || visit.status === 'on_hold') && (
          <ActionButton icon={LogOut} label="ส่งต่อ" onClick={() => setPicker('transfer')} color="violet" />
        )}
        {!isTerminal && visit.status === 'on_hold' && (
          <ActionButton icon={PlayCircle} label="กลับมารอเรียก" onClick={() => { store.resumeFromHold(item.id, stationCode); close(); }} color="slate" />
        )}
        {!isTerminal && visit.status === 'calling' && (
          <>
            <ActionButton icon={LogIn} label="เข้าห้องตรวจ" onClick={() => { store.enterRoom(item.id, stationCode); close(); }} color="blue" />
            <ActionButton icon={RotateCw} label="เรียกไม่มา" onClick={() => { store.markMissed(item.id, stationCode); close(); }} color="red" />
          </>
        )}
        {!isTerminal && visit.status === 'missed' && (
          <ActionButton icon={PhoneCall} label="เรียกอีกครั้ง" onClick={() => { store.callVisit(item.id, stationCode); close(); }} color="amber" />
        )}
        {!isTerminal && visit.status === 'in_progress' && (
          <ActionButton icon={LogOut} label="จบ/ออกจากห้องตรวจ" onClick={() => setPicker('finish')} color="emerald" />
        )}

        {isTerminal && (visit.status === 'waiting' || visit.status === 'refer_from') && (
          <ActionButton icon={PhoneCall} label="เรียก" onClick={() => { store.callVisit(item.id, stationCode); close(); }} color="amber" />
        )}
        {isTerminal && visit.status === 'calling' && (
          <>
            <ActionButton icon={LogIn} label="เข้ารับบริการ" onClick={() => { store.enterRoom(item.id, stationCode); close(); }} color="blue" />
            <ActionButton icon={RotateCw} label="เรียกไม่มา" onClick={() => { store.markMissed(item.id, stationCode); close(); }} color="red" />
          </>
        )}
        {isTerminal && visit.status === 'missed' && (
          <ActionButton icon={PhoneCall} label="เรียกอีกครั้ง" onClick={() => { store.callVisit(item.id, stationCode); close(); }} color="amber" />
        )}
        {isTerminal && visit.status === 'in_progress' && (
          <ActionButton icon={CheckCircle2} label="จบงาน" onClick={() => { store.finishTerminal(item.id, stationCode); close(); }} color="emerald" />
        )}

        {(visit.status === 'done' || visit.status === 'refer_to') && (
          <p className="text-sm text-slate-400">รายการนี้ปิดแล้วที่สถานีนี้ — ไม่มีการดำเนินการเพิ่มเติม</p>
        )}
      </div>

      <button
        onClick={() => setShowLog(true)}
        className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-600"
      >
        <History className="w-3.5 h-3.5" />
        ดูประวัติ (Log)
      </button>

      {showLog && <LogModal item={item} onClose={() => setShowLog(false)} />}
    </Modal>
  );
}

function ActionButton({
  icon: Icon,
  label,
  onClick,
  color,
}: {
  icon: typeof PhoneCall;
  label: string;
  onClick: () => void;
  color: 'amber' | 'orange' | 'violet' | 'slate' | 'blue' | 'red' | 'emerald';
}) {
  const colorMap: Record<string, string> = {
    amber: 'bg-amber-500 hover:bg-amber-600',
    orange: 'bg-orange-500 hover:bg-orange-600',
    violet: 'bg-violet-500 hover:bg-violet-600',
    slate: 'bg-slate-500 hover:bg-slate-600',
    blue: 'bg-blue-600 hover:bg-blue-700',
    red: 'bg-red-500 hover:bg-red-600',
    emerald: 'bg-emerald-600 hover:bg-emerald-700',
  };
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold text-white ${colorMap[color]}`}
    >
      <Icon className="w-4 h-4" />
      {label}
    </button>
  );
}
