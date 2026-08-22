import type { ReactNode } from 'react';
import { X } from 'lucide-react';

export default function Modal({
  title,
  onClose,
  children,
  width = 'max-w-lg',
  dismissable = true,
  headerExtra,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
  width?: string;
  /** ปิดปุ่ม X และ backdrop-click-to-close — ใช้บังคับให้ผู้ใช้ต้องเลือก action ในโมดัลก่อน (เช่นสถานะ calling) */
  dismissable?: boolean;
  /** เนื้อหาเพิ่มเติมทางซ้ายของปุ่ม X เช่นปุ่ม View */
  headerExtra?: ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={dismissable ? onClose : undefined}>
      <div
        className={`w-full ${width} max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 rounded-t-2xl">
          <h2 className="text-base font-bold text-slate-800">{title}</h2>
          <div className="flex items-center gap-1.5">
            {headerExtra}
            {dismissable && (
              <button onClick={onClose} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
        <div className="px-5 py-4">{children}</div>
      </div>
    </div>
  );
}
