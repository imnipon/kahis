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
  const sizeCls = size === 'lg' ? 'text-base px-3 py-1.5' : size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-2.5 py-1';
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full font-semibold ${sizeCls}`}
      style={{ backgroundColor: `${station.color}1A`, color: station.color }}
    >
      <span className="font-mono">{station.code}</span>
      <span className="opacity-60">·</span>
      {station.name}
    </span>
  );
}
