import type { QueueItem, StationVisit } from '../../types';
import { formatDateTime } from '../../utils/date';
import { Bell } from 'lucide-react';

function displayCode(item: QueueItem): string {
  return item.primaryHisQ || item.hn;
}

export function QueueTile({
  item,
  visit,
  color,
  variant,
}: {
  item: QueueItem;
  visit: StationVisit;
  color: string;
  variant?: 'inprocess' | 'noshow';
}) {
  const bg =
    variant === 'inprocess'
      ? { background: 'linear-gradient(135deg,#86efac,#4ade80)', color: '#14532d', textShadow: 'none' }
      : variant === 'noshow'
      ? { backgroundColor: '#94a3b8', opacity: 0.85, color: 'white' }
      : { backgroundColor: color, color: 'white', textShadow: '0 1px 3px rgba(0,0,0,0.2)' };

  const timeLabel = formatDateTime(visit.referAt || item.checkInAt);
  const tip = [item.hn, item.petName, item.ownerName].filter(Boolean).join(' · ');

  return (
    <div
      title={tip}
      style={{
        ...bg,
        fontSize: '2rem',
        fontWeight: 900,
        padding: '0.3rem 0.875rem 0.4rem',
        borderRadius: '0.625rem',
        letterSpacing: '0.06em',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        cursor: 'default',
        flexShrink: 0,
        animation: 'tileIn 0.25s ease-out forwards',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.15rem',
      }}
    >
      <span>{displayCode(item)}</span>
      <span style={{ fontSize: '0.6rem', fontWeight: 500, letterSpacing: 0, opacity: 0.82, lineHeight: 1, textShadow: 'none' }}>
        {visit.status === 'refer_from' ? `ส่งต่อจาก ${visit.referPeerStation === 'WARD' ? 'Ward' : visit.referPeerStation} · ` : ''}
        {timeLabel}
      </span>
    </div>
  );
}

export function QueueCallingCard({ item, visit, color }: { item: QueueItem; visit: StationVisit; color: string }) {
  const callTime = formatDateTime(visit.calledAt || visit.referAt || item.checkInAt);
  const hnPet = [item.hn, item.petName].filter(Boolean).join(' · ');
  return (
    <div
      style={{ animation: 'callSlideIn 0.3s ease-out forwards', boxShadow: '0 2px 10px -1px rgba(0,0,0,0.12)' }}
      className="bg-white rounded-2xl flex items-center overflow-hidden shrink-0"
    >
      <div className="self-stretch shrink-0" style={{ width: 6, backgroundColor: color, borderRadius: '0.875rem 0 0 0.875rem' }} />
      <div
        className="shrink-0 flex flex-col items-center text-white font-black leading-none"
        style={{
          background: color,
          fontSize: '1.75rem',
          letterSpacing: '0.06em',
          textShadow: '0 1px 3px rgba(0,0,0,0.2)',
          padding: '0.3rem 0.875rem',
          borderRadius: '0.625rem',
          margin: '0.875rem 0 0.875rem 0.875rem',
        }}
      >
        <span>{displayCode(item)}</span>
        {visit.status === 'refer_from' && (
          <span style={{ fontSize: '0.55rem', fontWeight: 500, opacity: 0.85, textShadow: 'none' }}>ส่งต่อ</span>
        )}
      </div>
      <div className="flex-1 min-w-0 flex flex-col text-right" style={{ gap: '0.18rem', margin: '0.75rem 1rem 0.75rem 0.75rem' }}>
        <div className="font-bold text-gray-800 truncate" style={{ fontSize: '1rem' }} title={hnPet}>{hnPet}</div>
        <div className="font-medium text-gray-500 truncate" style={{ fontSize: '0.8rem' }}>{item.ownerName || '—'}</div>
        <div className="flex items-center justify-end gap-1.5 font-bold" style={{ fontSize: '0.8rem', color: '#475569' }}>
          <span className="flex items-center gap-1 shrink-0">
            <Bell className="w-3 h-3" />
            เรียก {callTime}
          </span>
        </div>
      </div>
    </div>
  );
}

export function EmptyCol({ label, icon: Icon }: { label: string; icon: React.ElementType }) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-6 gap-1" style={{ color: '#94a3b8', fontSize: '0.8rem' }}>
      <Icon style={{ width: '1.2rem', height: '1.2rem', opacity: 0.4 }} />
      <span>{label}</span>
    </div>
  );
}
