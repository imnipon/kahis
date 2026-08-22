import type { QueueItem, StationVisit } from '../../types';
import { QueueTile, QueueCallingCard, EmptyCol } from './MonitorTiles';
import { PawPrint, BellRing, Play, BellOff, Coffee, Bell } from 'lucide-react';

type Row = { item: QueueItem; visit: StationVisit };

export function WaitingCol({ rows, color }: { rows: Row[]; color: string }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-sm p-3 flex flex-col min-h-0">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-blue-100 shrink-0">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'linear-gradient(135deg,#2563eb,#3b82f6)' }}>
          <PawPrint className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-black text-blue-800 leading-tight" style={{ fontSize: '0.875rem' }}>รอเรียกรับบริการ</div>
          <div className="font-bold uppercase tracking-widest text-blue-400" style={{ fontSize: '0.625rem' }}>WAITING</div>
        </div>
        <span className="ml-auto font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full" style={{ fontSize: '0.75rem' }}>{rows.length}</span>
      </div>
      <div className="flex flex-wrap gap-1.5 flex-1 min-h-0 overflow-y-auto content-start">
        {rows.length === 0 ? (
          <EmptyCol label="ไม่มีคิว" icon={Coffee} />
        ) : (
          rows.map(({ item, visit }) => <QueueTile key={item.id} item={item} visit={visit} color={color} />)
        )}
      </div>
    </div>
  );
}

export function CallingCol({ rows, color }: { rows: Row[]; color: string }) {
  return (
    <div className="rounded-2xl shadow-sm p-3 flex flex-col min-h-0" style={{ background: 'linear-gradient(160deg,#fef9c3,#fef08a)', border: '1px solid #fde047' }}>
      <div className="flex items-center gap-2 mb-3 pb-2 shrink-0" style={{ borderBottom: '1px solid #fde047' }}>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'linear-gradient(135deg,#eab308,#facc15)' }}>
          <BellRing className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-black leading-tight" style={{ color: '#854d0e', fontSize: '0.875rem' }}>กำลังเรียก</div>
          <div className="font-bold uppercase tracking-widest" style={{ color: '#ca8a04', fontSize: '0.625rem' }}>CALLING</div>
        </div>
        <span className="ml-auto font-bold px-2 py-0.5 rounded-full" style={{ color: '#a16207', background: '#fef08a', fontSize: '0.75rem' }}>{rows.length}</span>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto space-y-2">
        {rows.length === 0 ? (
          <EmptyCol label="ไม่มีการเรียกคิว" icon={Bell} />
        ) : (
          rows.map(({ item, visit }) => <QueueCallingCard key={item.id} item={item} visit={visit} color={color} />)
        )}
      </div>
    </div>
  );
}

export function InProcessCol({ rows }: { rows: Row[] }) {
  return (
    <div className="rounded-2xl border border-green-200 shadow-sm p-3 flex flex-col min-h-0 flex-1" style={{ background: 'linear-gradient(160deg,#f0fdf4,#dcfce7)' }}>
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-green-200 shrink-0">
        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm" style={{ background: 'linear-gradient(135deg,#15803d,#22c55e)' }}>
          <Play className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="font-black text-green-800 leading-tight" style={{ fontSize: '0.875rem' }}>กำลังดำเนินการ / พัก</div>
          <div className="font-bold uppercase tracking-widest text-green-500" style={{ fontSize: '0.625rem' }}>IN PROCESS</div>
        </div>
        <span className="ml-auto font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full" style={{ fontSize: '0.75rem' }}>{rows.length}</span>
      </div>
      <div className="flex flex-wrap gap-1.5 flex-1 min-h-0 overflow-y-auto content-start">
        {rows.length === 0 ? (
          <EmptyCol label="ไม่มีคิว" icon={Coffee} />
        ) : (
          rows.map(({ item, visit }) => (
            <QueueTile key={item.id} item={item} visit={visit} color="" variant={visit.status === 'on_hold' ? 'noshow' : 'inprocess'} />
          ))
        )}
      </div>
    </div>
  );
}

export function MissedCol({ rows }: { rows: Row[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 shadow-sm p-3 flex flex-col min-h-0 flex-1 bg-white/60">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200 shrink-0">
        <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-sm bg-slate-400">
          <BellOff className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="font-black text-slate-600 leading-tight" style={{ fontSize: '0.875rem' }}>เรียกไม่มา</div>
          <div className="font-bold uppercase tracking-widest text-slate-400" style={{ fontSize: '0.625rem' }}>MISSED</div>
        </div>
        <span className="ml-auto font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full" style={{ fontSize: '0.75rem' }}>{rows.length}</span>
      </div>
      <div className="flex flex-wrap gap-1.5 flex-1 min-h-0 overflow-y-auto content-start">
        {rows.length === 0 ? (
          <EmptyCol label="ไม่มีคิว" icon={BellOff} />
        ) : (
          rows.map(({ item, visit }) => <QueueTile key={item.id} item={item} visit={visit} color="" variant="noshow" />)
        )}
      </div>
    </div>
  );
}
