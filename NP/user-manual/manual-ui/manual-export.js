/**
 * KAHIS Manual — PDF export (Paged.js default, Legacy fallback)
 *
 * โหมด Paged.js ต้องเปิดผ่าน http:// (Local Server) — เปิด file:// ตรงๆ ไม่ได้
 * รัน start-server.bat แล้วเปิด http://localhost:8080/chapter-01-ui-components.html
 */
(function () {
  const STORAGE_KEY = 'kahis-print-mode';
  const MODES = {
    paged: {
      css: 'manual-print-paged.css',
      label: 'Paged.js (14mm)',
      hint: 'ต้องเปิดผ่าน Local Server — Print dialog: ระยะขอบ = ไม่มี'
    },
    legacy: {
      css: 'manual-print-legacy.css',
      label: 'Legacy (14/26mm)',
      hint: 'เปิด file:// ได้ — Print dialog: ระยะขอบ = ค่าเริ่มต้น'
    }
  };

  let pagedRendered = false;
  let exporting = false;

  function isFileProtocol() {
    return window.location.protocol === 'file:';
  }

  function getMode() {
    const param = new URLSearchParams(window.location.search).get('export');
    if (param === 'legacy' || param === 'paged') {
      if (param === 'paged' && isFileProtocol()) return 'legacy';
      return param;
    }
    if (isFileProtocol()) return 'legacy';
    return localStorage.getItem(STORAGE_KEY) || 'paged';
  }

  function getStylesheetLink() {
    return document.getElementById('print-mode-css');
  }

  function updateUI(mode) {
    document.body.dataset.printMode = mode;
    const meta = MODES[mode];
    const indicator = document.getElementById('print-mode-indicator');
    const legacyBtn = document.getElementById('btn-mode-legacy');
    const pagedBtn = document.getElementById('btn-mode-paged');
    const notice = document.getElementById('file-protocol-notice');

    if (indicator) {
      indicator.textContent = 'โหมด: ' + meta.label;
      indicator.title = meta.hint;
    }
    if (legacyBtn) legacyBtn.classList.toggle('is-active', mode === 'legacy');
    if (pagedBtn) {
      pagedBtn.classList.toggle('is-active', mode === 'paged');
      pagedBtn.disabled = isFileProtocol();
      pagedBtn.title = isFileProtocol()
        ? 'ต้องรัน start-server.bat ก่อน'
        : '';
    }
    if (notice) notice.hidden = !isFileProtocol();
  }

  function applyMode(mode, options) {
    const opts = options || {};
    if (!MODES[mode]) mode = 'paged';
    if (mode === 'paged' && isFileProtocol()) mode = 'legacy';
    const link = getStylesheetLink();
    if (link) link.href = MODES[mode].css;
    if (!isFileProtocol()) localStorage.setItem(STORAGE_KEY, mode);
    updateUI(mode);
    if (!opts.silent && pagedRendered) {
      window.location.reload();
    }
  }

  function setMode(mode) {
    if (mode === 'paged' && isFileProtocol()) {
      alert(
        'โหมด Paged.js ใช้กับ file:// ไม่ได้\n\n' +
        '1. ดับเบิลคลิก start-server.bat\n' +
        '2. เปิด http://localhost:8080/chapter-01-ui-components.html\n' +
        '3. กด Export PDF อีกครั้ง'
      );
      return;
    }
    applyMode(mode);
  }

  async function renderPaged() {
    if (isFileProtocol()) {
      throw new Error('Paged.js ใช้กับ file:// ไม่ได้ — รัน start-server.bat');
    }
    if (!window.PagedPolyfill) {
      throw new Error('Paged.js ยังโหลดไม่สำเร็จ — ตรวจสอบอินเทอร์เน็ต');
    }
    if (pagedRendered) return;
    document.body.classList.add('pagedjs-busy');
    await window.PagedPolyfill.preview();
    pagedRendered = true;
    document.body.classList.add('pagedjs-active');
    document.body.classList.remove('pagedjs-busy');
  }

  async function exportPdf() {
    if (exporting) return;
    exporting = true;
    const btn = document.getElementById('btn-export-pdf');
    const prevText = btn ? btn.textContent : '';
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'กำลังจัดหน้า…';
    }

    try {
      let mode = getMode();
      if (mode === 'paged' && isFileProtocol()) {
        mode = 'legacy';
        applyMode('legacy', { silent: true });
      }
      if (mode === 'paged') {
        await renderPaged();
      }
      window.print();
    } catch (err) {
      console.error(err);
      const msg = String(err.message || err);
      if (msg.includes('file:') || msg.includes('file://') || isFileProtocol()) {
        alert(
          'Export ไม่สำเร็จ (เปิดไฟล์ตรงๆ ไม่รองรับ Paged.js)\n\n' +
          'วิธีแก้:\n' +
          '• ดับเบิลคลิก start-server.bat\n' +
          '• เปิด http://localhost:8080/chapter-01-ui-components.html\n\n' +
          'หรือกด Legacy แล้ว Export แบบเดิม (14/26mm)'
        );
        applyMode('legacy', { silent: true });
      } else {
        alert('Export ไม่สำเร็จ: ' + msg);
      }
    } finally {
      exporting = false;
      if (btn) {
        btn.disabled = false;
        btn.textContent = prevText || 'Export PDF (A4)';
      }
    }
  }

  function onAfterPrint() {
    if (getMode() === 'paged' && pagedRendered) {
      window.location.reload();
    }
  }

  function init() {
    applyMode(getMode(), { silent: true });
    window.addEventListener('afterprint', onAfterPrint);
  }

  window.KahisExport = {
    getMode,
    setMode,
    exportPdf,
    isFileProtocol,
    MODES
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
