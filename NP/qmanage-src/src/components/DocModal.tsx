import { useEffect, useState } from 'react';
import Modal from './Modal';
import { renderSimpleMarkdown } from '../utils/simpleMarkdown';

/** เปิดไฟล์ .md (fetch runtime แล้ว render เป็น HTML) — ตามแพทเทิร์นเดียวกับ openPlanMd() ของ NP/plan/plan_editor.html */
export default function DocModal({ file, title, onClose }: { file: string; title: string; onClose: () => void }) {
  const [html, setHtml] = useState<string>('<p>กำลังโหลด…</p>');

  useEffect(() => {
    let mounted = true;
    const url = `${import.meta.env.BASE_URL}${file}`;
    fetch(url, { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (mounted) setHtml(renderSimpleMarkdown(text));
      })
      .catch((err) => {
        if (!mounted) return;
        setHtml(
          `<div class="md-err">โหลดไฟล์ไม่สำเร็จ: <code>${file}</code><br>${String(err && err.message ? err.message : err)}</div>`
        );
      });
    return () => {
      mounted = false;
    };
  }, [file]);

  return (
    <Modal title={title} onClose={onClose} width="max-w-3xl">
      <div className="doc-md" dangerouslySetInnerHTML={{ __html: html }} />
    </Modal>
  );
}
