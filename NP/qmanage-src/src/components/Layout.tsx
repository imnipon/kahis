import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { RotateCcw, FileText } from 'lucide-react';
import { useQueueStore } from '../store/QueueStore';
import DocModal from './DocModal';

export default function Layout() {
  const { resetSeed } = useQueueStore();
  const [showDoc, setShowDoc] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">B</div>
            <div className="leading-tight text-left">
              <div className="font-bold text-slate-800 text-sm">Board <span className="text-slate-400 font-medium">— ระบบจัดการคิว (Mockup)</span></div>
              <div className="text-xs text-slate-400">โรงพยาบาลสัตว์ — เชื่อมข้อมูลจาก KAHIS</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowDoc(true)}
              className="flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-100"
              title="for_dev_qmanage.md — เอกสารสำหรับ dev อธิบาย data model / logic ทั้งหมดของโมดูลนี้"
            >
              <FileText className="w-4 h-4" />
              For Dev / Logic
              <span className="rounded bg-blue-200 px-1 py-0.5 text-[9px] font-bold tracking-wide text-blue-700">.md</span>
            </button>
            <button
              onClick={() => {
                if (confirm('รีเซ็ตข้อมูลจำลองทั้งหมดกลับสู่ค่าเริ่มต้น?')) resetSeed();
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-100"
              title="รีเซ็ตข้อมูลจำลอง"
            >
              <RotateCcw className="w-4 h-4" />
              รีเซ็ตข้อมูล
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-[1800px] mx-auto w-full px-4 py-6">
        <Outlet />
      </main>

      {showDoc && (
        <DocModal file="docs/for_dev_qmanage.md" title="For Dev — Board (qmanage)" onClose={() => setShowDoc(false)} />
      )}
    </div>
  );
}
