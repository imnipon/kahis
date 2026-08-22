import {
  CalendarCheck, Stethoscope, Siren, Scissors, ClipboardList, Syringe, PawPrint,
  HeartPulse, Pill, Banknote, HelpCircle, type LucideIcon,
} from 'lucide-react';
import { getStation } from '../data/stations';

const ICONS: Record<string, LucideIcon> = {
  'calendar-check': CalendarCheck,
  stethoscope: Stethoscope,
  siren: Siren,
  scissors: Scissors,
  'clipboard-list': ClipboardList,
  syringe: Syringe,
  'paw-print': PawPrint,
  'heart-pulse': HeartPulse,
  pill: Pill,
  banknote: Banknote,
  'help-circle': HelpCircle,
};

export function StationIcon({ code, className }: { code: string; className?: string }) {
  const station = getStation(code);
  const Icon = (station && ICONS[station.icon]) || HelpCircle;
  return <Icon className={className} />;
}

export function StationBadge({ code, size = 'md' }: { code: string; size?: 'sm' | 'md' | 'lg' }) {
  const station = getStation(code);
  if (!station) return null;
  const sizeCls = size === 'lg' ? 'text-base px-3 py-1.5 gap-2' : size === 'sm' ? 'text-xs px-2 py-0.5 gap-1' : 'text-sm px-2.5 py-1 gap-1.5';
  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold text-white ${sizeCls}`}
      style={{ backgroundColor: station.color }}
    >
      <StationIcon code={code} className={size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5'} />
      {station.name}
    </span>
  );
}
