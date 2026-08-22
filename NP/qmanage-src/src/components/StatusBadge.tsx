import type { VisitStatus } from '../types';
import { STATUS_LABEL_TH } from '../types';

const STATUS_STYLE: Record<VisitStatus, string> = {
  waiting: 'bg-slate-100 text-slate-700 border-slate-300',
  calling: 'bg-amber-100 text-amber-800 border-amber-400 animate-pulse',
  missed: 'bg-red-100 text-red-700 border-red-400',
  in_progress: 'bg-blue-100 text-blue-700 border-blue-400',
  on_hold: 'bg-orange-100 text-orange-700 border-orange-400',
  done: 'bg-emerald-100 text-emerald-700 border-emerald-400',
  refer_from: 'bg-violet-100 text-violet-700 border-violet-400',
  refer_to: 'bg-gray-100 text-gray-500 border-gray-300',
};

export function StatusBadge({ status, className = '' }: { status: VisitStatus; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold ${STATUS_STYLE[status]} ${className}`}>
      {STATUS_LABEL_TH[status]}
    </span>
  );
}
