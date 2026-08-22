import { useState } from 'react';
import type { QueueItem } from '../types';
import { parseHisQRaw } from '../services/autoDetect';
import { useQueueStore } from '../store/QueueStore';
import Modal from './Modal';
import StationPickerGrid from './StationPickerGrid';
import { StationBadge } from './StationBadge';
import { formatDateTime } from '../utils/date';

export default function StationAssignModal({ item, onClose }: { item: QueueItem; onClose: () => void }) {
  const { assignStation } = useQueueStore();
  const parsed = parseHisQRaw(item.hisQRaw);
  const [selected, setSelected] = useState<string | null>(
    parsed.detectedStation !== 'UNASSIGNED' ? parsed.detectedStation : null
  );

  const handleConfirm = () => {
    if (!selected) return;
    assignStation(item.id, selected);
    onClose();
  };

  return (
    <Modal title="จัดคิวเข้าสถานี" onClose={onClose} width="max-w-xl">
      <div className="mb-4 rounded-xl bg-slate-50 border border-slate-200 p-3 text-sm">
        <div className="flex items-center justify-between">
          <div className="font-bold text-slate-800">
            {item.hn} — {item.petName} <span className="text-slate-400 font-normal">({item.species})</span>
          </div>
          <span className="text-xs text-slate-400">{formatDateTime(item.checkInAt)}</span>
        </div>
        <div className="text-slate-500 mt-0.5">เจ้าของ: {item.ownerName} · สพ.: {item.dvmName} · ห้อง: {item.room}</div>
        <div className="mt-2 flex items-center gap-2 text-xs">
          <span className="text-slate-400">รหัส HIS:</span>
          <span className="font-mono font-semibold text-slate-700">{item.hisQRaw || '(กรอกเอง — ไม่มีรหัส)'}</span>
        </div>
        {parsed.hisQList.length > 1 && (
          <div className="mt-1 text-xs text-amber-600">
            มีรหัสหลายชุด ({parsed.hisQList.length}) — ใช้ชุดที่ 1 (Q1 = <span className="font-mono">{parsed.primaryHisQ}</span>) ในการตรวจหาสถานีอัตโนมัติเท่านั้น
          </div>
        )}
        <div className="mt-2 flex items-center gap-2 text-xs">
          <span className="text-slate-400">ผลตรวจหาอัตโนมัติ:</span>
          {parsed.detectedStation !== 'UNASSIGNED' ? (
            <StationBadge code={parsed.detectedStation} size="sm" />
          ) : (
            <span className="rounded-full bg-slate-200 px-2 py-0.5 font-semibold text-slate-500">ไม่พบ / ต้องเลือกเอง</span>
          )}
        </div>
      </div>

      <div className="mb-2 text-sm font-semibold text-slate-600">เลือกสถานี</div>
      <StationPickerGrid suggested={parsed.detectedStation !== 'UNASSIGNED' ? parsed.detectedStation : null} onPick={setSelected} />

      {selected && (
        <div className="mt-3 text-sm">
          เลือกแล้ว: <StationBadge code={selected} size="sm" />
        </div>
      )}

      <div className="mt-5 flex justify-end gap-2">
        <button onClick={onClose} className="rounded-lg px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100">
          ยกเลิก
        </button>
        <button
          onClick={handleConfirm}
          disabled={!selected}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-40 hover:bg-blue-700"
        >
          ยืนยันจัดคิว
        </button>
      </div>
    </Modal>
  );
}
