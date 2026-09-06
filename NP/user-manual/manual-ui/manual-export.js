/**
 * KAHIS Manual — PDF export (Paged.js default, Legacy fallback)
 *
 * โหมด Paged.js ต้องเปิดผ่าน http:// (Local Server) — เปิด file:// ตรงๆ ไม่ได้
 * รัน start-server.bat แล้วเปิด http://localhost:8080/manual-ui/chapter-01-ui-components.html
 * (start-server.bat รัน python -m http.server จากโฟลเดอร์ user-manual/ ซึ่งเป็นระดับบน
 *  ของ manual-ui/ และ Label/ — จำเป็นต้องเป็นระดับนี้เพื่อให้ path ../Label/... ใช้งานได้ถูกต้อง)
 */
(function () {
  const STORAGE_KEY = 'kahis-print-mode';
  const THAI_MONTHS = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];
  const MODES = {
    paged: {
      css: 'manual-print-paged.css',
      label: 'ขอบเท่ากัน (14 มม. ทุกด้าน)',
      shortLabel: 'ขอบเท่ากัน',
      hint: 'ตั้งค่าพิมพ์: ระยะขอบ = ไม่มี · เปิดกราฟิกพื้นหลัง'
    },
    legacy: {
      css: 'manual-print-legacy.css',
      label: 'ขอบมาตรฐาน (บน 26 มม. · ล่าง 14 มม.)',
      shortLabel: 'ขอบมาตรฐาน',
      hint: 'ตั้งค่าพิมพ์: ระยะขอบ = ค่าเริ่มต้น'
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

  function getFooterConfig() {
    const cfg = document.querySelector('.print-footer-config');
    return {
      brand: (cfg && cfg.getAttribute('data-brand')) || 'KAHIS (Kasetsart Animal Hospital Information System)',
      chapter: (cfg && cfg.getAttribute('data-chapter')) || 'บทที่ 1 : ส่วนประกอบหลักของ UI',
      version: (cfg && cfg.getAttribute('data-version')) || 'Version 2026.08.14.01'
    };
  }

  function formatPrintDateTime(date) {
    const d = date.getDate();
    const month = THAI_MONTHS[date.getMonth()];
    const year = date.getFullYear() + 543;
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return d + ' ' + month + ' ' + year + ' เวลา ' + hh + ':' + mm + ' น.';
  }

  function buildFooterMetaHtml(cfg, pageLabel, printedAt) {
    return (
      '<div class="print-footer-line1">' + cfg.chapter + ' หน้าที่ ' + pageLabel + '</div>' +
      '<div class="print-footer-line2">' + cfg.version + ' พิมพ์เมื่อ ' + printedAt + '</div>'
    );
  }

  function updateLegacyFooter(printedAt) {
    const cfg = getFooterConfig();
    const foot = document.querySelector('.print-running-footer');
    if (!foot) return;
    const brand = foot.querySelector('.print-footer-brand');
    const meta = foot.querySelector('.print-footer-meta');
    if (brand) brand.textContent = cfg.brand;
    if (meta) {
      meta.innerHTML =
        '<div class="print-footer-line1">' + cfg.chapter +
        ' หน้าที่ <span class="print-footer-page-num"></span></div>' +
        '<div class="print-footer-line2">' + cfg.version +
        ' พิมพ์เมื่อ <span class="print-footer-printed-at">' + printedAt + '</span></div>';
    }
  }

  function injectPagedFooters(printedAt) {
    const cfg = getFooterConfig();
    const pages = document.querySelectorAll('.pagedjs_page');
    const total = pages.length;

    pages.forEach(function (pageEl, index) {
      let foot = pageEl.querySelector('.pagedjs-page-footer');
      if (!foot) {
        foot = document.createElement('div');
        foot.className = 'pagedjs-page-footer';
        foot.setAttribute('aria-hidden', 'true');
        pageEl.appendChild(foot);
      }

      const pageLabel = (index + 1) + '/' + total;
      foot.innerHTML =
        '<span class="print-footer-brand">' + cfg.brand + '</span>' +
        '<div class="print-footer-meta">' + buildFooterMetaHtml(cfg, pageLabel, printedAt) + '</div>';
    });
  }

  function updateUI(mode) {
    document.body.dataset.printMode = mode;
    const meta = MODES[mode];
    const indicator = document.getElementById('print-mode-indicator');
    const legacyBtn = document.getElementById('btn-mode-legacy');
    const pagedBtn = document.getElementById('btn-mode-paged');
    const notice = document.getElementById('file-protocol-notice');

    if (indicator) {
      indicator.textContent = 'การสั่งพิมพ์: โหมด ' + meta.label;
      indicator.title = meta.hint;
    }
    if (legacyBtn) {
      legacyBtn.classList.toggle('is-active', mode === 'legacy');
      legacyBtn.textContent = MODES.legacy.shortLabel;
    }
    if (pagedBtn) {
      pagedBtn.classList.toggle('is-active', mode === 'paged');
      pagedBtn.textContent = MODES.paged.shortLabel;
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
        'โหมดขอบเท่ากัน ใช้กับการเปิดไฟล์จากเครื่องโดยตรงไม่ได้\n\n' +
        '1. ดับเบิลคลิก start-server.bat\n' +
        '2. เปิด http://localhost:8080/manual-ui/chapter-01-ui-components.html\n' +
        '3. กด Export PDF อีกครั้ง\n\n' +
        'หรือใช้โหมดขอบมาตรฐานได้ทันที'
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

      const printedAt = formatPrintDateTime(new Date());

      if (mode === 'paged') {
        await renderPaged();
        injectPagedFooters(printedAt);
      } else {
        updateLegacyFooter(printedAt);
      }
      window.print();
    } catch (err) {
      console.error(err);
      const msg = String(err.message || err);
      if (msg.includes('file:') || msg.includes('file://') || isFileProtocol()) {
        alert(
          'Export ไม่สำเร็จ (เปิดไฟล์จากเครื่องโดยตรง)\n\n' +
          '• ดับเบิลคลิก start-server.bat\n' +
          '• เปิด http://localhost:8080/manual-ui/chapter-01-ui-components.html\n\n' +
          'หรือใช้โหมดขอบมาตรฐานแล้ว Export อีกครั้ง'
        );
        applyMode('legacy', { silent: true });
      } else {
        alert('Export ไม่สำเร็จ: ' + msg);
      }
    } finally {
      exporting = false;
      if (btn) {
        btn.disabled = false;
        btn.textContent = prevText || 'ส่งออก PDF (A4)';
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
