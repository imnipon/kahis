import { CLINICAL_STATIONS, TERMINAL_STATIONS } from '../data/stations';
import { StationIcon } from './StationBadge';

export default function StationPickerGrid({
  exclude = [],
  includeTerminal = false,
  suggested,
  onPick,
}: {
  exclude?: string[];
  includeTerminal?: boolean;
  suggested?: string | null;
  onPick: (code: string) => void;
}) {
  const options = [...CLINICAL_STATIONS, ...(includeTerminal ? TERMINAL_STATIONS : [])].filter(
    (s) => !exclude.includes(s.code)
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {options.map((s) => {
        const isSuggested = s.code === suggested;
        return (
          <button
            key={s.code}
            onClick={() => onPick(s.code)}
            className={`flex flex-col items-center gap-1.5 rounded-xl border-2 px-3 py-3 text-center transition-all ${
              isSuggested
                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: s.color }}
            >
              <StationIcon code={s.code} className="w-4.5 h-4.5" />
            </span>
            <span className="text-xs font-bold text-slate-700">{s.code}</span>
            <span className="text-[11px] leading-tight text-slate-500">{s.name}</span>
            {isSuggested && <span className="text-[10px] font-semibold text-blue-600">แนะนำ (auto-detect)</span>}
          </button>
        );
      })}
    </div>
  );
}
