import type { QueueItem, QueueLog, StationVisit } from '../types';
import { generateSeed } from '../data/seed';

export const STORAGE_KEY = 'qmanage_state_v1';
const SIMULATED_LATENCY_MS = 120;

export interface PersistedState {
  queueItems: QueueItem[];
  visits: StationVisit[];
  logs: QueueLog[];
}

function delay<T>(value: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), SIMULATED_LATENCY_MS));
}

/**
 * Mock ของ API `GET /api/qmanage/state` — ตอนนี้อ่านจาก localStorage
 * เมื่อเชื่อมต่อ backend จริง ให้แทนที่ implementation นี้ด้วย fetch()
 */
export async function fetchState(): Promise<PersistedState> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return delay(JSON.parse(raw) as PersistedState);
  } catch {
    // ignore corrupted cache, fall back to seed
  }
  return delay(generateSeed());
}

/**
 * Mock ของ API `PUT /api/qmanage/state` — ตอนนี้เขียนลง localStorage
 */
export async function saveState(state: PersistedState): Promise<void> {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  return delay(undefined);
}

export async function resetState(): Promise<PersistedState> {
  const seed = generateSeed();
  await saveState(seed);
  return seed;
}
