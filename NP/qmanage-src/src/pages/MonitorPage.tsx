import { useCallback, useEffect, useMemo, useState } from 'react';
import { useQueueStore } from '../store/QueueStore';
import { PUBLIC_STATIONS, getStation } from '../data/stations';
import { StationIcon } from '../components/StationBadge';
import { WaitingCol, CallingCol, InProcessCol, MissedCol } from '../components/monitor/MonitorColumns';
import { sortByQueueTime } from '../utils/sort';
import { RefreshCw, Maximize, Minimize, Tv } from 'lucide-react';

const INTERVAL_SEC = 30;

export default function MonitorPage() {
  const { queueItems, getVisitsForStation } = useQueueStore();
  const [activeStation, setActiveStation] = useState(PUBLIC_STATIONS[0]?.code ?? '');
  const [lastUpdated, setLastUpdated] = useState('--:--:--');
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const refresh = useCallback(() => {
    const now = new Date();
    setLastUpdated(`${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`);
    setProgress(0);
  }, []);

  useEffect(() => {
    refresh();
    let elapsed = 0;
    const tick = setInterval(() => {
      elapsed += 1;
      setProgress((elapsed / INTERVAL_SEC) * 100);
      if (elapsed >= INTERVAL_SEC) {
        elapsed = 0;
        refresh();
      }
    }, 1000);
    return () => clearInterval(tick);
  }, [refresh]);

  useEffect(() => {
    const onFS = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFS);
    return () => document.removeEventListener('fullscreenchange', onFS);
  }, []);

  const toggleFS = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  };

  const rows = useMemo(() => {
    const raw = getVisitsForStation(activeStation).filter((r) => r.visit.status !== 'done' && r.visit.status !== 'refer_to');
    return sortByQueueTime(raw);
  }, [activeStation, getVisitsForStation, queueItems]);

  const waiting = rows.filter((r) => r.visit.status === 'waiting' || r.visit.status === 'refer_from');
  const calling = rows.filter((r) => r.visit.status === 'calling');
  const inprocess = rows.filter((r) => r.visit.status === 'in_progress' || r.visit.status === 'on_hold');
  const missed = rows.filter((r) => r.visit.status === 'missed');

  const station = getStation(activeStation);
  const stationColor = station?.color || '#4B5563';

  return (
    <div
      className="h-screen w-screen flex flex-col bg-slate-100 overflow-hidden select-none"
      style={{ fontFamily: "'IBMPlexSansThaiLooped','Sarabun',sans-serif", fontWeight: 300 }}
    >
      {!isFullscreen && (
        <div className="bg-white border-b border-gray-200 shadow-sm px-4 py-2 flex items-center gap-3 shrink-0 flex-wrap">
          <Tv className="w-4 h-4 text-blue-500 shrink-0" />
          <h1 className="font-black text-gray-800 mr-2 shrink-0" style={{ fontSize: '0.875rem' }}>จอแสดงผลคิว</h1>

          <div className="flex items-center gap-1 flex-wrap">
            {PUBLIC_STATIONS.map((s) => (
              <button
                key={s.code}
                onClick={() => setActiveStation(s.code)}
                className="flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-bold transition-colors"
                style={{
                  fontSize: '0.75rem',
                  backgroundColor: activeStation === s.code ? s.color : '#f1f5f9',
                  color: activeStation === s.code ? 'white' : '#64748b',
                }}
              >
                <StationIcon code={s.code} className="w-3.5 h-3.5" />
                {s.code}
              </button>
            ))}
          </div>

          <div className="w-px h-5 bg-gray-200 mx-1 shrink-0" />
          <span className="font-mono text-gray-400 shrink-0" style={{ fontSize: '0.75rem' }}>{lastUpdated}</span>
          <button onClick={refresh} title="รีเฟรช" className="text-gray-400 hover:text-blue-500 p-1.5 rounded-lg hover:bg-gray-100 transition shrink-0">
            <RefreshCw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={toggleFS}
            className="ml-auto bg-slate-700 hover:bg-slate-800 text-white px-3 py-1 rounded-lg font-bold flex items-center gap-1.5 transition shrink-0"
            style={{ fontSize: '0.75rem' }}
          >
            <Maximize className="w-3.5 h-3.5" /> Full Screen
          </button>
        </div>
      )}

      <div className="flex items-center gap-2 px-4 py-2 shrink-0" style={{ backgroundColor: stationColor }}>
        <StationIcon code={activeStation} className="w-5 h-5 text-white" />
        <span className="font-black text-white text-lg">{station?.name}</span>
        <span className="text-white/70 font-bold text-sm">({activeStation})</span>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-3 p-3 min-h-0 overflow-hidden">
        <WaitingCol rows={waiting} color={stationColor} />
        <CallingCol rows={calling} color={stationColor} />
        <div className="flex flex-col gap-3 overflow-hidden min-h-0">
          <InProcessCol rows={inprocess} />
          <MissedCol rows={missed} />
        </div>
      </div>

      <div className="h-1 bg-slate-200 shrink-0">
        <div className="h-full transition-all duration-1000" style={{ width: `${progress}%`, background: 'linear-gradient(90deg,#3b82f6,#06b6d4)' }} />
      </div>

      {isFullscreen && (
        <>
          <div className="fixed top-3 left-3 z-50 flex items-center gap-1 rounded-xl bg-black/30 p-1">
            {PUBLIC_STATIONS.map((s) => (
              <button
                key={s.code}
                onClick={() => setActiveStation(s.code)}
                className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-bold transition-colors"
                style={{ fontSize: '0.75rem', backgroundColor: activeStation === s.code ? s.color : 'transparent', color: 'white' }}
              >
                <StationIcon code={s.code} className="w-3.5 h-3.5" />
                {s.code}
              </button>
            ))}
          </div>
          <button
            onClick={toggleFS}
            className="fixed top-3 right-3 bg-black/30 hover:bg-black/50 text-white px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 z-50 transition"
            style={{ fontSize: '0.75rem' }}
          >
            <Minimize className="w-3.5 h-3.5" /> ออกจาก Full Screen
          </button>
        </>
      )}
    </div>
  );
}
