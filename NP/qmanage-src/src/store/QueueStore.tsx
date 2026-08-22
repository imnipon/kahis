import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { QueueItem, QueueLog, StationVisit, VisitStatus } from '../types';
import { CLINICAL_STATION_CODES } from '../types';
import { fetchState, saveState, resetState, STORAGE_KEY, type PersistedState } from '../services/storageService';

const DEFAULT_ACTOR = 'เจ้าหน้าที่ (mockup)';

function visitKey(queueItemId: string, stationCode: string): string {
  return `${queueItemId}__${stationCode}`;
}

let logIdSeq = 100000;
function nextLogId(): string {
  logIdSeq += 1;
  return `log-${logIdSeq}`;
}

interface QueueStoreValue {
  queueItems: QueueItem[];
  visits: StationVisit[];
  logs: QueueLog[];
  isLoading: boolean;
  getVisit: (queueItemId: string, stationCode: string) => StationVisit | undefined;
  getVisitsForStation: (stationCode: string) => { item: QueueItem; visit: StationVisit }[];
  getLogsForItem: (queueItemId: string) => QueueLog[];
  assignStation: (queueItemId: string, stationCode: string) => void;
  callVisit: (queueItemId: string, stationCode: string) => void;
  undoCall: (queueItemId: string, stationCode: string) => void;
  markMissed: (queueItemId: string, stationCode: string) => void;
  holdVisit: (queueItemId: string, stationCode: string) => void;
  resumeFromHold: (queueItemId: string, stationCode: string) => void;
  enterRoom: (queueItemId: string, stationCode: string) => void;
  quickTransfer: (queueItemId: string, fromStation: string, toStation: string) => void;
  finishAndRoute: (queueItemId: string, fromStation: string, destStation: string) => void;
  finishTerminal: (queueItemId: string, stationCode: string) => void;
  resetSeed: () => void;
}

const QueueStoreContext = createContext<QueueStoreValue | null>(null);

const EMPTY_STATE: PersistedState = { queueItems: [], visits: [], logs: [] };

export function QueueStoreProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PersistedState>(EMPTY_STATE);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetchState().then((loaded) => {
      if (!mounted) return;
      setState(loaded);
      setIsLoading(false);
      setHasLoaded(true);
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!hasLoaded) return; // อย่า save ทับก่อนโหลดเสร็จ
    saveState(state);
  }, [state, hasLoaded]);

  // sync ข้าม tab/หน้าต่าง (เช่น หน้าเจ้าหน้าที่ vs จอ monitor ที่เปิดแยกหน้าต่าง)
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY || !e.newValue) return;
      try {
        setState(JSON.parse(e.newValue) as PersistedState);
      } catch {
        // ignore malformed payload
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const pushLog = useCallback(
    (logs: QueueLog[], queueItemId: string, stationCode: string, action: string, note = ''): QueueLog[] => {
      const entry: QueueLog = {
        id: nextLogId(),
        queueItemId,
        stationCode,
        action,
        note,
        actor: DEFAULT_ACTOR,
        at: new Date().toISOString(),
      };
      return [...logs, entry];
    },
    []
  );

  const getVisit = useCallback(
    (queueItemId: string, stationCode: string) => state.visits.find((v) => v.id === visitKey(queueItemId, stationCode)),
    [state.visits]
  );

  const getVisitsForStation = useCallback(
    (stationCode: string) => {
      return state.visits
        .filter((v) => v.stationCode === stationCode)
        .map((visit) => {
          const item = state.queueItems.find((q) => q.id === visit.queueItemId);
          return item ? { item, visit } : null;
        })
        .filter((x): x is { item: QueueItem; visit: StationVisit } => x !== null && x.item.currentStation === stationCode);
    },
    [state.visits, state.queueItems]
  );

  const getLogsForItem = useCallback(
    (queueItemId: string) => state.logs.filter((l) => l.queueItemId === queueItemId).sort((a, b) => a.at.localeCompare(b.at)),
    [state.logs]
  );

  /** จัดคิวเข้าสถานี (Station Assign Modal) — ทั้งกรณี unassigned → สถานี และ override สถานีที่ผิด */
  const assignStation = useCallback((queueItemId: string, stationCode: string) => {
    setState((prev) => {
      const item = prev.queueItems.find((q) => q.id === queueItemId);
      if (!item) return prev;
      const now = new Date().toISOString();
      const existing = prev.visits.find((v) => v.id === visitKey(queueItemId, stationCode));

      const newVisit: StationVisit = existing
        ? { ...existing, status: 'waiting', updatedAt: now, updatedBy: DEFAULT_ACTOR }
        : {
            id: visitKey(queueItemId, stationCode),
            queueItemId,
            stationCode,
            status: 'waiting',
            referAt: null,
            referPeerStation: null,
            enteredAt: now,
            calledAt: null,
            preCallStatus: null,
            updatedAt: now,
            updatedBy: DEFAULT_ACTOR,
            note: '',
          };

      const visits = existing
        ? prev.visits.map((v) => (v.id === newVisit.id ? newVisit : v))
        : [...prev.visits, newVisit];

      const queueItems = prev.queueItems.map((q) => (q.id === queueItemId ? { ...q, currentStation: stationCode } : q));
      const logs = pushLog(prev.logs, queueItemId, stationCode, 'จัดคิวเข้าสถานี', `จัดเข้า ${stationCode}`);

      return { queueItems, visits, logs };
    });
  }, [pushLog]);

  const updateVisitStatus = useCallback(
    (queueItemId: string, stationCode: string, patch: Partial<StationVisit>, actionLabel: string, note = '') => {
      setState((prev) => {
        const key = visitKey(queueItemId, stationCode);
        const now = new Date().toISOString();
        const visits = prev.visits.map((v) => (v.id === key ? { ...v, ...patch, updatedAt: now, updatedBy: DEFAULT_ACTOR } : v));
        const logs = pushLog(prev.logs, queueItemId, stationCode, actionLabel, note);
        return { ...prev, visits, logs };
      });
    },
    [pushLog]
  );

  const callVisit = useCallback(
    (queueItemId: string, stationCode: string) => {
      setState((prev) => {
        const key = visitKey(queueItemId, stationCode);
        const now = new Date().toISOString();
        const visits = prev.visits.map((v) =>
          v.id === key ? { ...v, preCallStatus: v.status, status: 'calling' as VisitStatus, calledAt: now, updatedAt: now, updatedBy: DEFAULT_ACTOR } : v
        );
        const logs = pushLog(prev.logs, queueItemId, stationCode, 'เรียก');
        return { ...prev, visits, logs };
      });
    },
    [pushLog]
  );

  /** ปุ่ม "กดผิด" — คืนสถานะก่อนกด "เรียก" (ใช้เฉพาะระหว่างสถานะ calling) */
  const undoCall = useCallback(
    (queueItemId: string, stationCode: string) => {
      setState((prev) => {
        const key = visitKey(queueItemId, stationCode);
        const now = new Date().toISOString();
        const visits = prev.visits.map((v) =>
          v.id === key
            ? { ...v, status: v.preCallStatus ?? ('waiting' as VisitStatus), preCallStatus: null, calledAt: null, updatedAt: now, updatedBy: DEFAULT_ACTOR }
            : v
        );
        const logs = pushLog(prev.logs, queueItemId, stationCode, 'กดผิด (ยกเลิกการเรียก)', 'คืนสถานะก่อนหน้า');
        return { ...prev, visits, logs };
      });
    },
    [pushLog]
  );

  const markMissed = useCallback(
    (queueItemId: string, stationCode: string) => {
      updateVisitStatus(queueItemId, stationCode, { status: 'missed' as VisitStatus }, 'เรียกไม่มา');
    },
    [updateVisitStatus]
  );

  const holdVisit = useCallback(
    (queueItemId: string, stationCode: string) => {
      updateVisitStatus(queueItemId, stationCode, { status: 'on_hold' as VisitStatus }, 'พัก');
    },
    [updateVisitStatus]
  );

  const resumeFromHold = useCallback(
    (queueItemId: string, stationCode: string) => {
      updateVisitStatus(queueItemId, stationCode, { status: 'waiting' as VisitStatus }, 'กลับมารอเรียก');
    },
    [updateVisitStatus]
  );

  const enterRoom = useCallback(
    (queueItemId: string, stationCode: string) => {
      updateVisitStatus(queueItemId, stationCode, { status: 'in_progress' as VisitStatus }, 'เข้าห้องตรวจ/เริ่มรับบริการ');
    },
    [updateVisitStatus]
  );

  /** กลไกส่งต่อร่วม: ปิดต้นทางเป็น refer_to, upsert ปลายทางเป็น refer_from */
  const doTransfer = useCallback(
    (queueItemId: string, fromStation: string, toStation: string, actionLabel: string) => {
      setState((prev) => {
        const now = new Date().toISOString();
        const fromKey = visitKey(queueItemId, fromStation);
        const toKey = visitKey(queueItemId, toStation);

        const visits = prev.visits.map((v) =>
          v.id === fromKey
            ? { ...v, status: 'refer_to' as VisitStatus, referAt: now, referPeerStation: toStation, updatedAt: now, updatedBy: DEFAULT_ACTOR }
            : v
        );

        const existingTo = visits.find((v) => v.id === toKey);
        const toVisit: StationVisit = existingTo
          ? { ...existingTo, status: 'refer_from', referAt: now, referPeerStation: fromStation, updatedAt: now, updatedBy: DEFAULT_ACTOR }
          : {
              id: toKey,
              queueItemId,
              stationCode: toStation,
              status: 'refer_from',
              referAt: now,
              referPeerStation: fromStation,
              enteredAt: now,
              calledAt: null,
              preCallStatus: null,
              updatedAt: now,
              updatedBy: DEFAULT_ACTOR,
              note: '',
            };

        const finalVisits = existingTo ? visits.map((v) => (v.id === toKey ? toVisit : v)) : [...visits, toVisit];
        const queueItems = prev.queueItems.map((q) => (q.id === queueItemId ? { ...q, currentStation: toStation } : q));

        let logs = pushLog(prev.logs, queueItemId, fromStation, actionLabel, `ส่งจาก ${fromStation} ไปยัง ${toStation}`);
        logs = pushLog(logs, queueItemId, toStation, 'รับส่งต่อ', `รับจาก ${fromStation}`);

        return { queueItems, visits: finalVisits, logs };
      });
    },
    [pushLog]
  );

  /** ปุ่ม "ส่งต่อ" ด่วน — อนุญาตเฉพาะ waiting/on_hold, ปลายทางเป็นสถานีคลินิกอื่น */
  const quickTransfer = useCallback(
    (queueItemId: string, fromStation: string, toStation: string) => {
      const current = getVisit(queueItemId, fromStation);
      if (!current || (current.status !== 'waiting' && current.status !== 'on_hold')) return;
      if (!(CLINICAL_STATION_CODES as readonly string[]).includes(toStation)) return;
      doTransfer(queueItemId, fromStation, toStation, 'ส่งต่อ');
    },
    [getVisit, doTransfer]
  );

  /** ปุ่ม "จบ/ออกจากห้องตรวจ" — อนุญาตเฉพาะ in_progress ที่สถานีคลินิก บังคับเลือกปลายทางเสมอ */
  const finishAndRoute = useCallback(
    (queueItemId: string, fromStation: string, destStation: string) => {
      const current = getVisit(queueItemId, fromStation);
      if (!current || current.status !== 'in_progress') return;
      doTransfer(queueItemId, fromStation, destStation, 'จบ/ออกจากห้องตรวจ');
    },
    [getVisit, doTransfer]
  );

  /** จบงานจริงที่ PHARMACY/FINANCE — ไม่บังคับส่งต่อ */
  const finishTerminal = useCallback(
    (queueItemId: string, stationCode: string) => {
      const current = getVisit(queueItemId, stationCode);
      if (!current || current.status !== 'in_progress') return;
      updateVisitStatus(queueItemId, stationCode, { status: 'done' as VisitStatus }, 'จบงาน');
    },
    [getVisit, updateVisitStatus]
  );

  const resetSeed = useCallback(() => {
    resetState().then(setState);
  }, []);

  const value = useMemo<QueueStoreValue>(
    () => ({
      queueItems: state.queueItems,
      visits: state.visits,
      logs: state.logs,
      isLoading,
      getVisit,
      getVisitsForStation,
      getLogsForItem,
      assignStation,
      callVisit,
      undoCall,
      markMissed,
      holdVisit,
      resumeFromHold,
      enterRoom,
      quickTransfer,
      finishAndRoute,
      finishTerminal,
      resetSeed,
    }),
    [
      state.queueItems,
      state.visits,
      state.logs,
      isLoading,
      getVisit,
      getVisitsForStation,
      getLogsForItem,
      assignStation,
      callVisit,
      undoCall,
      markMissed,
      holdVisit,
      resumeFromHold,
      enterRoom,
      quickTransfer,
      finishAndRoute,
      finishTerminal,
      resetSeed,
    ]
  );

  return <QueueStoreContext.Provider value={value}>{children}</QueueStoreContext.Provider>;
}

export function useQueueStore(): QueueStoreValue {
  const ctx = useContext(QueueStoreContext);
  if (!ctx) throw new Error('useQueueStore must be used within QueueStoreProvider');
  return ctx;
}
