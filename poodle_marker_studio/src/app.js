/**
 * Poodle Marker Studio — Application Engine v2.0
 * ✅ Sharp Rendering: fabric.devicePixelRatio, viewportTransform zoom, integer-pixel snap
 * ✅ Bug Fixes: Undo caching, rawText sync, file:// warning, pan via viewportTransform
 * ✅ Thai Word Segmentation (Intl.Segmenter), IBM Plex Sans Thai Looped
 * ✅ Lucide SVG Icons (Eye/EyeOff/Edit/Trash/BookHeart)
 */

/* ─────────────────────────────────────────────
   GLOBAL STATE
───────────────────────────────────────────── */
const state = {
  canvas: null,
  originalImage: null,
  originalFileName: 'image',
  originalFileExt: 'png',
  imageWidth: 0,
  imageHeight: 0,
  zoomLevel: 1,

  activeTool: 'marker', // 'marker' | 'alpha' | 'textbox' | 'rect' | 'select' | 'pan'
  isDrawing: false,
  isPanning: false,
  panStart: { x: 0, y: 0 },

  history: [],
  historyIndex: -1,
  isHistoryLocked: false,

  sequences: {
    marker: { current: 1, start: 1 },
    alpha:  { current: 1, start: 1 }
  },

  properties: {
    bgColor:     '#10b981',
    fontColor:   '#ffffff',
    size:        34,
    strokeWidth: 3,
    fontSize:    18,
    fontFamily:  'IBM Plex Sans Thai Looped',
    textAlign:   'left'
  },

  editingObject: null
};

/* ─────────────────────────────────────────────
   LUCIDE SVG ICONS
───────────────────────────────────────────── */
const LUCIDE = {
  eye: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`,
  edit: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>`,
  trash: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`,
  bookHeart: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.4-1.8 1-.4-.6-1-.9-1.8-.9C9 6.1 8 7 8 8.2c0 .6.3 1.2.7 1.6L12 13l3.3-3.2c.4-.4.7-1 .7-1.6z"/></svg>`
};

/* ─────────────────────────────────────────────
   UTILITIES
───────────────────────────────────────────── */
function hexToRgba(hex, alpha = 0.2) {
  let c = (hex || '#10b981').replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
}

function getNextSequenceText(tool) {
  const seq = state.sequences[tool] || state.sequences.marker;
  return tool === 'alpha' ? toAlpha(seq.current) : String(seq.current);
}

function incrementSequence(tool) {
  if (state.sequences[tool]) {
    state.sequences[tool].current += 1;
    updateSequencePreviews();
  }
}

function toAlpha(num) {
  let result = '', n = num;
  while (n > 0) {
    const r = (n - 1) % 26;
    result = String.fromCharCode(65 + r) + result;
    n = Math.floor((n - 1) / 26);
  }
  return result || 'A';
}

/* ─────────────────────────────────────────────
   THAI WORD WRAP (Intl.Segmenter)
───────────────────────────────────────────── */
function wrapThaiText(text, maxWidth, fontSize, fontFamily) {
  const tmp = document.createElement('canvas');
  const ctx = tmp.getContext('2d');
  ctx.font = `${fontSize}px "${fontFamily}", sans-serif`;

  let words = [];
  if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    const seg = new Intl.Segmenter('th', { granularity: 'word' });
    words = Array.from(seg.segment(text)).map(s => s.segment);
  } else {
    words = text.split(/(\s+)/);
  }

  const lines = [];
  let line = '';

  for (const word of words) {
    if (word.includes('\n')) {
      for (const [j, part] of word.split('\n').entries()) {
        if (j > 0) { lines.push(line); line = ''; }
        const test = line + part;
        if (ctx.measureText(test).width > maxWidth && line.length > 0) {
          lines.push(line); line = part;
        } else { line = test; }
      }
      continue;
    }
    const test = line + word;
    if (ctx.measureText(test).width > maxWidth && line.length > 0) {
      lines.push(line); line = word;
    } else { line = test; }
  }
  if (line.length > 0) lines.push(line);
  return lines.join('\n');
}

/* ─────────────────────────────────────────────
   INIT
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  if (document.fonts) await document.fonts.ready;

  // A1: Set devicePixelRatio BEFORE fabric canvas init
  fabric.devicePixelRatio = window.devicePixelRatio || 1;

  // Disable objectCaching globally
  fabric.Object.prototype.objectCaching  = false;
  fabric.Group.prototype.objectCaching   = false;
  fabric.Text.prototype.objectCaching    = false;
  fabric.Textbox.prototype.objectCaching = false;
  fabric.Rect.prototype.objectCaching    = false;
  fabric.Circle.prototype.objectCaching  = false;

  // Custom rounded & padded background rendering for Textbox to envelop Thai ascenders/descenders
  fabric.Textbox.prototype._renderBackground = function(ctx) {
    if (!this.backgroundColor) return;
    
    const dim = this._getNonTransformedDimensions();
    const padX = this.boxPaddingX !== undefined ? this.boxPaddingX : 14;
    const padY = this.boxPaddingY !== undefined ? this.boxPaddingY : 10;
    const rx   = this.boxRadius !== undefined ? this.boxRadius : 8;

    const w = dim.x + padX * 2;
    const h = dim.y + padY * 2;
    const x = -w / 2;
    const y = -h / 2;

    ctx.save();
    ctx.fillStyle = this.backgroundColor;
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(x, y, w, h, [rx]);
    } else {
      ctx.moveTo(x + rx, y);
      ctx.lineTo(x + w - rx, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + rx);
      ctx.lineTo(x + w, y + h - rx);
      ctx.quadraticCurveTo(x + w, y + h, x + w - rx, y + h);
      ctx.lineTo(x + rx, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - rx);
      ctx.lineTo(x, y + rx);
      ctx.quadraticCurveTo(x, y, x + rx, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };

  initCanvas();
  setupEventListeners();
  updateContextualSettingsPanel();
  updateSequencePreviews();
  renderLayersList();

  // B3: Warn if running from file:// (Save As dialog won't work)
  if (window.location.protocol === 'file:') {
    setTimeout(() => showToast('💡 เคล็ดลับ: เปิดผ่าน localhost เพื่อใช้ Save As dialog ได้ครบถ้วน'), 1500);
  }
});

/* ─────────────────────────────────────────────
   CANVAS INIT
───────────────────────────────────────────── */
function initCanvas() {
  const canvasEl = document.getElementById('main-canvas');

  state.canvas = new fabric.Canvas(canvasEl, {
    preserveObjectStacking: true,
    selection: true,
    uniformScaling: false,
    enableRetinaScaling: true,   // A1: Fabric respects fabric.devicePixelRatio
    renderOnAddRemove: true
  });

  // Fabric control style
  fabric.Object.prototype.transparentCorners = false;
  fabric.Object.prototype.cornerColor        = '#10b981';
  fabric.Object.prototype.cornerStrokeColor  = '#ffffff';
  fabric.Object.prototype.borderColor        = '#10b981';
  fabric.Object.prototype.cornerSize         = 9;
  fabric.Object.prototype.cornerStyle        = 'circle';

  // Canvas events
  state.canvas.on('mouse:down',     onCanvasMouseDown);
  state.canvas.on('mouse:move',     onCanvasMouseMove);
  state.canvas.on('mouse:up',       onCanvasMouseUp);
  state.canvas.on('mouse:wheel',    onCanvasWheel);
  state.canvas.on('selection:created', onSelectionChange);
  state.canvas.on('selection:updated', onSelectionChange);
  state.canvas.on('selection:cleared', onSelectionCleared);

  state.canvas.on('mouse:dblclick', e => {
    if (e.target?.selectable) openRichEditForObject(e.target);
  });

  state.canvas.on('object:modified', () => { saveHistoryState(); renderLayersList(); });
  state.canvas.on('object:added',    () => { if (!state.isHistoryLocked) { saveHistoryState(); renderLayersList(); } });
  state.canvas.on('object:removed',  () => { if (!state.isHistoryLocked) { saveHistoryState(); renderLayersList(); } });

  // B2: Sync rawText whenever user types directly in a Textbox on canvas
  state.canvas.on('text:changed', e => {
    if (e.target?.customType === 'thai-textbox') {
      e.target.rawText = e.target.text;
    }
  });

  // Dynamic Thai textbox resize — adjusts box width & background without modifying font size
  state.canvas.on('object:scaling', e => {
    const obj = e.target;
    if (obj?.customType === 'thai-textbox') {
      // Adjust width based on scaleX, keeping font size unchanged
      const newW = Math.max(80, Math.round(obj.width * obj.scaleX));

      obj.set({
        width:  newW,
        scaleX: 1,
        scaleY: 1
      });

      if (obj.rawText) {
        const wrapW = Math.max(40, newW - (obj.boxPaddingX !== undefined ? obj.boxPaddingX * 2 : 28));
        obj.text = wrapThaiText(obj.rawText, wrapW, obj.fontSize, obj.fontFamily || state.properties.fontFamily);
      }
      state.canvas.requestRenderAll();
    }
  });
}

/* ─────────────────────────────────────────────
   EVENT LISTENERS
───────────────────────────────────────────── */
function setupEventListeners() {
  const fileInput      = document.getElementById('image-file-input');
  const dropzone       = document.getElementById('main-dropzone');
  const btnBrowse      = document.getElementById('btn-browse-file');
  const btnChangeImage = document.getElementById('btn-change-image');

  btnBrowse?.addEventListener('click', () => fileInput.click());
  btnChangeImage?.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', handleFileSelect);

  dropzone.addEventListener('dragover',  e => { e.preventDefault(); dropzone.classList.add('drag-over'); });
  dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
  dropzone.addEventListener('drop', e => {
    e.preventDefault(); dropzone.classList.remove('drag-over');
    if (e.dataTransfer.files?.[0]) loadImageFromFile(e.dataTransfer.files[0]);
  });

  window.addEventListener('paste', e => {
    for (const item of (e.clipboardData?.items || [])) {
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (file) { loadImageFromFile(file); showToast('🐾 วางภาพจาก Clipboard สำเร็จ!'); break; }
      }
    }
  });

  // Tool buttons
  document.querySelectorAll('.tool-btn-compact').forEach(btn =>
    btn.addEventListener('click', () => setTool(btn.dataset.tool))
  );

  // Num Label sequence
  document.getElementById('prop-start-num')?.addEventListener('change', e => {
    const v = parseInt(e.target.value) || 1;
    state.sequences.marker.start = v;
    state.sequences.marker.current = v;
    updateSequencePreviews();
  });
  document.getElementById('btn-reset-num-seq').addEventListener('click', () => {
    state.sequences.marker.current = state.sequences.marker.start;
    updateSequencePreviews(); showToast('🔄 รีเซ็ตลำดับตัวเลขแล้ว');
  });

  // Alpha Label sequence
  document.getElementById('prop-start-alpha')?.addEventListener('change', e => {
    const v = parseInt(e.target.value) || 1;
    state.sequences.alpha.start = v;
    state.sequences.alpha.current = v;
    updateSequencePreviews();
  });
  document.getElementById('btn-reset-alpha-seq').addEventListener('click', () => {
    state.sequences.alpha.current = state.sequences.alpha.start;
    updateSequencePreviews(); showToast('🔄 รีเซ็ตลำดับตัวอักษรแล้ว');
  });

  // Size slider
  document.getElementById('prop-size-slider').addEventListener('input', e => {
    const v = parseInt(e.target.value);
    document.getElementById('prop-size-val').textContent = `${v}px`;
    state.properties.size = v;
  });
  // Font size slider
  document.getElementById('prop-font-size-slider').addEventListener('input', e => {
    const v = parseInt(e.target.value);
    document.getElementById('prop-font-size-val').textContent = `${v}px`;
    state.properties.fontSize = v;

    const activeObj = state.canvas?.getActiveObject();
    if (activeObj?.customType === 'thai-textbox') {
      activeObj.set({ fontSize: v });
      if (activeObj.rawText) {
        const wrapW = Math.max(40, activeObj.width - (activeObj.boxPaddingX !== undefined ? activeObj.boxPaddingX * 2 : 28));
        activeObj.text = wrapThaiText(activeObj.rawText, wrapW, v, activeObj.fontFamily || state.properties.fontFamily);
      }
      state.canvas.requestRenderAll();
      saveHistoryState();
    }
  });
  // Stroke slider
  document.getElementById('prop-stroke-slider').addEventListener('input', e => {
    const v = parseInt(e.target.value);
    document.getElementById('prop-stroke-val').textContent = `${v}px`;
    state.properties.strokeWidth = v;
  });

  // Text alignment buttons — sidebar (for new and active textboxes)
  document.querySelectorAll('#prop-align-group .align-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#prop-align-group .align-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.properties.textAlign = btn.dataset.align;

      const activeObj = state.canvas?.getActiveObject();
      if (activeObj?.customType === 'thai-textbox') {
        activeObj.set({ textAlign: btn.dataset.align });
        state.canvas.requestRenderAll();
        saveHistoryState();
      }
    });
  });

  // Text alignment buttons — modal (for existing textboxes)
  document.querySelectorAll('#modal-align-group .align-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#modal-align-group .align-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  setupDualColorPickers();

  // Export
  document.getElementById('btn-export-top').addEventListener('click', openExportModal);
  document.getElementById('btn-confirm-export').addEventListener('click', executeExport);
  document.getElementById('btn-cancel-export').addEventListener('click', closeExportModal);

  // Floating bar
  document.getElementById('btn-edit-selected-modal').addEventListener('click', () => {
    const obj = state.canvas.getActiveObject();
    if (obj) openRichEditForObject(obj);
  });
  document.getElementById('btn-duplicate-selected').addEventListener('click', duplicateSelectedObject);
  document.getElementById('btn-del-floating').addEventListener('click', deleteSelectedObjects);

  // Rich Edit modal
  document.getElementById('modal-btn-save').addEventListener('click', saveRichEditModal);
  document.getElementById('modal-btn-delete').addEventListener('click', deleteEditingObject);
  ['modal-slider-size', 'modal-slider-fontsize', 'modal-slider-strokewidth'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', e => {
      document.getElementById(id + '-val').textContent = `${e.target.value}px`;
    });
  });

  // Undo / Redo / Clear
  document.getElementById('btn-undo').addEventListener('click', undo);
  document.getElementById('btn-redo').addEventListener('click', redo);
  document.getElementById('btn-delete-selected').addEventListener('click', deleteSelectedObjects);
  document.getElementById('btn-clear-all').addEventListener('click', clearAllAnnotations);

  // Viewport Pan & Zoom
  document.getElementById('btn-tool-pan')?.addEventListener('click', () => {
    setTool(state.activeTool === 'pan' ? 'select' : 'pan');
  });
  document.getElementById('btn-zoom-in').addEventListener('click', () => changeZoom(0.15));
  document.getElementById('btn-zoom-out').addEventListener('click', () => changeZoom(-0.15));
  document.getElementById('btn-zoom-fit').addEventListener('click', fitImageToScreen);
  document.getElementById('btn-zoom-reset').addEventListener('click', resetZoom100);

  window.addEventListener('keydown', handleKeyboardShortcuts);
}

/* ─────────────────────────────────────────────
   DUAL COLOR PICKERS
───────────────────────────────────────────── */
function setupDualColorPickers() {
  const bgNative   = document.getElementById('prop-bg-color-native');
  const fontNative = document.getElementById('prop-font-color-native');

  bgNative.addEventListener('input', e => {
    state.properties.bgColor = e.target.value;
    document.querySelectorAll('#bg-color-presets .color-dot-compact').forEach(d => d.classList.remove('active'));
  });
  document.querySelectorAll('#bg-color-presets .color-dot-compact').forEach(dot =>
    dot.addEventListener('click', () => {
      document.querySelectorAll('#bg-color-presets .color-dot-compact').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      state.properties.bgColor = dot.dataset.color;
      bgNative.value = dot.dataset.color;
    })
  );

  fontNative.addEventListener('input', e => {
    state.properties.fontColor = e.target.value;
    document.querySelectorAll('#font-color-presets .color-dot-compact').forEach(d => d.classList.remove('active'));
  });
  document.querySelectorAll('#font-color-presets .color-dot-compact').forEach(dot =>
    dot.addEventListener('click', () => {
      document.querySelectorAll('#font-color-presets .color-dot-compact').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      state.properties.fontColor = dot.dataset.color;
      fontNative.value = dot.dataset.color;
    })
  );
}

/* ─────────────────────────────────────────────
   TOOL SWITCHING
───────────────────────────────────────────── */
function setTool(tool) {
  state.activeTool = tool;

  // Sidebar tool buttons
  document.querySelectorAll('.tool-btn-compact').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.tool === tool)
  );

  // Bottom viewport Pan button
  const panBtn = document.getElementById('btn-tool-pan');
  if (panBtn) {
    panBtn.classList.toggle('active', tool === 'pan');
  }

  updateContextualSettingsPanel();

  if (tool === 'select') {
    state.canvas.selection = true;
    state.canvas.defaultCursor = 'default';
  } else if (tool === 'pan') {
    state.canvas.selection = false;
    state.canvas.defaultCursor = 'grab';
  } else {
    state.canvas.selection = false;
    state.canvas.defaultCursor = 'crosshair';
  }
}

function updateContextualSettingsPanel() {
  const toolLabels = {
    marker: '1,2,3 Num Label (ตัวเลข)',
    alpha:  'A,B,C Text Label (อักษร)',
    textbox:'Tt Textbox (ข้อความไทย)',
    rect:   '🏠 Rectangle (กรอบสี่เหลี่ยม)',
    select: '👆 Select (เลือก/ย้าย)',
    pan:    '✋ Pan (เลื่อนภาพ)'
  };
  document.getElementById('prop-active-tool-badge').textContent =
    toolLabels[state.activeTool] || '🛠️ ตั้งค่าเครื่องมือ';

  document.getElementById('prop-seq-number').style.display   = state.activeTool === 'marker'  ? 'block' : 'none';
  document.getElementById('prop-seq-alpha').style.display    = state.activeTool === 'alpha'   ? 'block' : 'none';
  document.getElementById('prop-text-controls').style.display= state.activeTool === 'textbox' ? 'block' : 'none';
  document.getElementById('prop-stroke-controls').style.display = state.activeTool === 'rect' ? 'block' : 'none';
  document.getElementById('prop-group-size').style.display   = ['marker','alpha'].includes(state.activeTool) ? 'block' : 'none';

  updateSequencePreviews();
}

function updateSequencePreviews() {
  const pNum   = document.getElementById('prop-next-val-number');
  const pAlpha = document.getElementById('prop-next-val-alpha');
  if (pNum)   pNum.textContent   = getNextSequenceText('marker');
  if (pAlpha) pAlpha.textContent = getNextSequenceText('alpha');
}

/* ─────────────────────────────────────────────
   IMAGE LOADING
───────────────────────────────────────────── */
function handleFileSelect(e) {
  if (e.target.files?.[0]) loadImageFromFile(e.target.files[0]);
}

function loadImageFromFile(file) {
  const name = file.name || 'image.png';
  const dot  = name.lastIndexOf('.');
  state.originalFileName = dot !== -1 ? name.substring(0, dot) : name;
  state.originalFileExt  = dot !== -1 ? name.substring(dot + 1).toLowerCase() : 'png';

  const reader = new FileReader();
  reader.onload = ev => {
    const img = new Image();
    img.src = ev.target.result;
    img.onload = () => setupImageOnCanvas(img);
  };
  reader.readAsDataURL(file);
}

function setupImageOnCanvas(imgEl) {
  state.originalImage = imgEl;
  state.imageWidth    = imgEl.naturalWidth  || imgEl.width;
  state.imageHeight   = imgEl.naturalHeight || imgEl.height;

  document.getElementById('initial-instructions-view').classList.add('hidden');
  document.getElementById('canvas-workspace-view').style.display = 'block';

  state.canvas.setWidth(state.imageWidth);
  state.canvas.setHeight(state.imageHeight);

  const fabricImg = new fabric.Image(imgEl, {
    selectable: false, evented: false,
    originX: 'left', originY: 'top',
    objectCaching: false
  });

  state.canvas.clear();
  state.canvas.setBackgroundImage(fabricImg, () => {
    fitImageToScreen();
    resetHistory();
    saveHistoryState();
    renderLayersList();
    showToast(`🐾 โหลดรูปภาพสำเร็จ (${state.imageWidth} × ${state.imageHeight} px)`);
  });
}

/* ─────────────────────────────────────────────
   ZOOM SYSTEM — A2: viewportTransform (no CSS blur)
───────────────────────────────────────────── */
function fitImageToScreen() {
  const container = document.getElementById('canvas-container-wrap');
  const cW = container.clientWidth  - 50;
  const cH = container.clientHeight - 50;
  const scale = Math.min(cW / state.imageWidth, cH / state.imageHeight, 1);
  applyZoom(scale);
}

function resetZoom100() {
  applyZoom(1);
}

function changeZoom(delta) {
  const newZoom = Math.min(Math.max(0.1, state.zoomLevel + delta), 4.0);
  applyZoom(newZoom);
}

/**
 * A2: Use viewportTransform instead of setZoom() to avoid CSS matrix blur.
 * setViewportTransform scales the internal coordinate system — no bitmap interpolation.
 */
function applyZoom(scale) {
  state.zoomLevel = scale;
  // Set viewport transform: [scaleX, 0, 0, scaleY, translateX, translateY]
  state.canvas.setViewportTransform([scale, 0, 0, scale, 0, 0]);
  // Resize the canvas HTML element to match visual size (Fabric adjusts the buffer × DPR automatically)
  state.canvas.setWidth(Math.round(state.imageWidth  * scale));
  state.canvas.setHeight(Math.round(state.imageHeight * scale));
  state.canvas.requestRenderAll();
  updateZoomUI();
}

function updateZoomUI() {
  const el = document.getElementById('zoom-percentage-text');
  if (el) el.textContent = `${Math.round(state.zoomLevel * 100)}%`;
}

function onCanvasWheel(opt) {
  if (opt.e.ctrlKey) {
    opt.e.preventDefault();
    opt.e.stopPropagation();
    changeZoom(opt.e.deltaY < 0 ? 0.1 : -0.1);
  }
}

/* ─────────────────────────────────────────────
   CANVAS MOUSE — B4: Pan via viewportTransform
───────────────────────────────────────────── */
let currentRect    = null;
let rectStartPoint = null;

function onCanvasMouseDown(opt) {
  const pointer = state.canvas.getPointer(opt.e);

  // B4: Pan mode — use viewportTransform offset (not container scroll)
  if (state.activeTool === 'pan' || opt.e.button === 1) {
    state.isPanning = true;
    state.panStart  = { x: opt.e.clientX, y: opt.e.clientY };
    state.canvas.defaultCursor = 'grabbing';
    return;
  }

  if (['marker', 'alpha'].includes(state.activeTool)) {
    if (opt.target?.selectable) return;
    createMarkerAt(pointer.x, pointer.y, state.activeTool);
  } else if (state.activeTool === 'rect') {
    state.isDrawing = true;
    rectStartPoint  = { x: Math.round(pointer.x), y: Math.round(pointer.y) };
    currentRect = new fabric.Rect({
      left: rectStartPoint.x, top: rectStartPoint.y,
      width: 0, height: 0,
      fill: hexToRgba(state.properties.bgColor, 0.2),
      stroke: state.properties.fontColor,
      strokeWidth: state.properties.strokeWidth,
      rx: 6, ry: 6,
      objectCaching: false,
      customType: 'rect',
      bgColor:   state.properties.bgColor,
      fontColor: state.properties.fontColor
    });
    state.canvas.add(currentRect);
  } else if (state.activeTool === 'textbox') {
    if (opt.target?.customType === 'thai-textbox') return;
    createThaiTextBoxAt(Math.round(pointer.x), Math.round(pointer.y));
  }
}

function onCanvasMouseMove(opt) {
  if (state.isPanning) {
    // B4: Pan by shifting viewport translate (works even when canvas smaller than container)
    const dx = opt.e.clientX - state.panStart.x;
    const dy = opt.e.clientY - state.panStart.y;
    state.panStart = { x: opt.e.clientX, y: opt.e.clientY };

    const vpt = state.canvas.viewportTransform.slice();
    vpt[4] += dx;
    vpt[5] += dy;
    // Clamp so canvas does not fly out of view completely
    const maxX = 0, maxY = 0;
    const minX = -(state.imageWidth  * state.zoomLevel - 100);
    const minY = -(state.imageHeight * state.zoomLevel - 100);
    vpt[4] = Math.min(maxX, Math.max(minX, vpt[4]));
    vpt[5] = Math.min(maxY, Math.max(minY, vpt[5]));

    state.canvas.setViewportTransform(vpt);
    state.canvas.requestRenderAll();
    return;
  }

  if (!state.isDrawing) return;
  const pointer = state.canvas.getPointer(opt.e);
  if (state.activeTool === 'rect' && currentRect) {
    const l = Math.round(Math.min(pointer.x, rectStartPoint.x));
    const t = Math.round(Math.min(pointer.y, rectStartPoint.y));
    const w = Math.round(Math.abs(pointer.x - rectStartPoint.x));
    const h = Math.round(Math.abs(pointer.y - rectStartPoint.y));
    currentRect.set({ left: l, top: t, width: w, height: h });
    state.canvas.requestRenderAll();
  }
}

function onCanvasMouseUp() {
  if (state.isPanning) {
    state.isPanning = false;
    state.canvas.defaultCursor = state.activeTool === 'pan' ? 'grab' : 'crosshair';
  }
  if (state.isDrawing) {
    state.isDrawing = false;
    if (state.activeTool === 'rect' && currentRect) {
      if (currentRect.width < 6 || currentRect.height < 6) {
        state.canvas.remove(currentRect);
      } else {
        currentRect.setCoords();
        saveHistoryState();
      }
      currentRect = null;
    }
  }
}

/* ─────────────────────────────────────────────
   CREATE MARKER — A3: integer pixel snap
───────────────────────────────────────────── */
function createMarkerAt(x, y, toolType) {
  const textVal  = getNextSequenceText(toolType);
  const size     = Math.round(state.properties.size || 34);
  const radius   = Math.round(size / 2);
  const bgColor  = state.properties.bgColor;
  const fontColor= state.properties.fontColor;

  const circle = new fabric.Circle({
    radius, fill: bgColor,
    originX: 'center', originY: 'center',
    objectCaching: false,
    shadow: new fabric.Shadow({ color: 'rgba(0,0,0,0.25)', blur: 4, offsetX: 0, offsetY: 2 })
  });

  const label = new fabric.Text(textVal, {
    fontFamily: state.properties.fontFamily,
    fontSize:   Math.round(size * 0.48),
    fontWeight: '700',
    fill: fontColor,
    originX: 'center', originY: 'center',
    objectCaching: false
  });

  // A3: Snap to integer pixel
  const group = new fabric.Group([circle, label], {
    left: Math.round(x - radius),
    top:  Math.round(y - radius),
    customType: 'marker',
    toolType, markerValue: textVal,
    markerSize: size, bgColor, fontColor,
    objectCaching: false,
    selectable: true, hasRotatingPoint: false
  });

  state.canvas.add(group);
  state.canvas.setActiveObject(group);
  incrementSequence(toolType);
  saveHistoryState();
}

/* ─────────────────────────────────────────────
   CREATE TEXTBOX — A3: integer pixel snap
───────────────────────────────────────────── */
function createThaiTextBoxAt(x, y) {
  const initialText = 'พิมพ์ข้อความภาษาไทยที่นี่...';
  const width       = 240;
  const fontSize    = Math.round(state.properties.fontSize || 18);
  const bgColor     = state.properties.bgColor;
  const fontColor   = state.properties.fontColor;
  const align       = state.properties.textAlign || 'left';
  const wrapped     = wrapThaiText(initialText, width - 28, fontSize, state.properties.fontFamily);

  const textbox = new fabric.Textbox(wrapped, {
    left: x, top: y,
    width, fontSize,
    fontFamily: state.properties.fontFamily,
    lineHeight: 1.55,          // ✅ Extra breathing room for Thai ascenders/descenders
    textAlign:  align,         // ✅ Text alignment
    fill: fontColor,
    backgroundColor: bgColor,
    boxPaddingX:  14,          // ✅ Padded background fill width margin
    boxPaddingY:  10,          // ✅ Padded background fill height margin
    boxRadius:    8,           // ✅ Smooth rounded background box
    padding:      16,          // ✅ Control box margin sits cleanly outside rounded box
    objectCaching: false,      // ✅ must be false for sharp rendering
    lockScalingY: true,        // ✅ Resize box width/background without distorting font size
    editable: true,
    customType: 'thai-textbox',
    rawText:   initialText,
    bgColor, fontColor,
    shadow: new fabric.Shadow({ color: 'rgba(0,0,0,0.12)', blur: 6, offsetX: 0, offsetY: 3 })
  });

  state.canvas.add(textbox);
  state.canvas.setActiveObject(textbox);
  textbox.enterEditing();
  textbox.selectAll();
  saveHistoryState();
}

/* ─────────────────────────────────────────────
   LAYERS LIST (RIGHT SIDEBAR)
───────────────────────────────────────────── */
function renderLayersList() {
  const container  = document.getElementById('layers-list-container');
  const countBadge = document.getElementById('layer-count-badge');
  if (!container) return;

  const objects = state.canvas
    ? state.canvas.getObjects().filter(o => o !== state.canvas.backgroundImage)
    : [];

  if (countBadge) countBadge.textContent = `${objects.length} ชิ้น`;

  if (objects.length === 0) {
    container.innerHTML = `
      <div class="empty-layers-msg">
        <span>🐾 ยังไม่มี Marker หรือข้อความบนภาพ</span>
        <div style="margin-top:4px;font-size:0.72rem;color:var(--text-subtle)">
          คลิกเลือกเครื่องมือแล้วคลิกบนภาพเพื่อวางได้เลย
        </div>
      </div>`;
    return;
  }

  container.innerHTML = '';
  const activeObj = state.canvas.getActiveObject();

  objects.forEach((obj, idx) => {
    const card = document.createElement('div');
    card.className = `layer-item-card ${activeObj === obj ? 'active' : ''}`;
    card.onclick = () => {
      state.canvas.setActiveObject(obj);
      state.canvas.requestRenderAll();
      renderLayersList();
    };

    let icon = '1,2,3', label = `ชิ้นงาน #${idx + 1}`, color = '#10b981';

    if (obj.customType === 'marker') {
      icon  = obj.toolType === 'alpha' ? 'A,B,C' : '1,2,3';
      label = `Marker: "${obj.markerValue || '1'}"`;
      color = obj.bgColor || obj._objects?.[0]?.fill || '#10b981';
    } else if (obj.customType === 'thai-textbox') {
      icon  = 'Tt';
      label = `Text: "${(obj.rawText || obj.text || '').substring(0, 14)}..."`;
      color = obj.backgroundColor || '#10b981';
    } else if (obj.customType === 'rect') {
      icon  = '🏠';
      label = 'Rectangle';
      color = obj.stroke || '#10b981';
    }

    card.innerHTML = `
      <div class="layer-left">
        <div class="layer-badge" style="background:${color};font-size:0.65rem">${icon}</div>
        <div class="layer-name" title="${label}">${label}</div>
      </div>
      <div class="layer-actions" onclick="event.stopPropagation()">
        <button class="layer-btn-icon" title="แก้ไข" onclick="openRichEditForObjectByIndex(${idx})">${LUCIDE.edit}</button>
        <button class="layer-btn-icon ${!obj.visible ? 'is-hidden' : ''}" title="${obj.visible ? 'ซ่อน' : 'แสดง'}" onclick="toggleObjectVisibility(${idx})">
          ${obj.visible ? LUCIDE.eye : LUCIDE.eyeOff}
        </button>
        <button class="layer-btn-icon text-danger" title="ลบ" onclick="deleteObjectByIndex(${idx})">${LUCIDE.trash}</button>
      </div>`;

    container.appendChild(card);
  });
}

function toggleObjectVisibility(idx) {
  const objs = state.canvas.getObjects().filter(o => o !== state.canvas.backgroundImage);
  if (objs[idx]) { objs[idx].visible = !objs[idx].visible; state.canvas.requestRenderAll(); renderLayersList(); }
}
function deleteObjectByIndex(idx) {
  const objs = state.canvas.getObjects().filter(o => o !== state.canvas.backgroundImage);
  if (objs[idx]) { state.canvas.remove(objs[idx]); state.canvas.requestRenderAll(); saveHistoryState(); renderLayersList(); showToast('ลบชิ้นงานแล้ว'); }
}
function openRichEditForObjectByIndex(idx) {
  const objs = state.canvas.getObjects().filter(o => o !== state.canvas.backgroundImage);
  if (objs[idx]) openRichEditForObject(objs[idx]);
}

/* ─────────────────────────────────────────────
   RICH EDIT MODAL
───────────────────────────────────────────── */
function openRichEditForObject(obj) {
  state.editingObject = obj;
  const modal   = document.getElementById('rich-edit-modal');
  const title   = document.getElementById('rich-edit-title');
  const textIn  = document.getElementById('modal-input-text');
  const textLbl = document.getElementById('modal-label-value');
  const fSize   = document.getElementById('modal-field-size');
  const fFont   = document.getElementById('modal-field-fontsize');
  const fStroke = document.getElementById('modal-field-strokewidth');
  const colorBg = document.getElementById('modal-color-bg');
  const colorFn = document.getElementById('modal-color-font');

  const setSlider = (id, val) => {
    document.getElementById(id).value = val;
    document.getElementById(id + '-val').textContent = `${val}px`;
  };

  // Reset align group visibility
  document.getElementById('modal-align-group').style.display = 'none';

  if (obj.customType === 'marker') {
    title.textContent  = `✏️ แก้ไข Marker (${obj.markerValue || ''})`;
    textLbl.textContent = 'ค่าใน Marker:';
    textIn.value = obj.markerValue || '';
    fSize.style.display = 'block'; fFont.style.display = 'none'; fStroke.style.display = 'none';
    setSlider('modal-slider-size', obj.markerSize || 34);
    colorBg.value = obj.bgColor   || '#10b981';
    colorFn.value = obj.fontColor || '#ffffff';
  } else if (obj.customType === 'thai-textbox') {
    title.textContent  = '✏️ แก้ไขกล่องข้อความ (Textbox)';
    textLbl.textContent = 'ข้อความ:';
    textIn.value = obj.rawText || obj.text || '';
    fSize.style.display = 'none'; fFont.style.display = 'block'; fStroke.style.display = 'none';
    setSlider('modal-slider-fontsize', obj.fontSize || 18);
    colorBg.value = obj.backgroundColor || obj.bgColor   || '#10b981';
    colorFn.value = obj.fill            || obj.fontColor || '#ffffff';
    // Show modal align group and set active button
    document.getElementById('modal-align-group').style.display = 'flex';
    const curAlign = obj.textAlign || 'left';
    document.querySelectorAll('#modal-align-group .align-btn').forEach(btn =>
      btn.classList.toggle('active', btn.dataset.align === curAlign)
    );
  } else if (obj.customType === 'rect') {
    title.textContent  = '✏️ แก้ไขกรอบสี่เหลี่ยม (Rectangle)';
    textLbl.textContent = 'ชื่อกำกับ:';
    textIn.value = '';
    fSize.style.display = 'none'; fFont.style.display = 'none'; fStroke.style.display = 'block';
    setSlider('modal-slider-strokewidth', obj.strokeWidth || 3);
    colorBg.value = obj.bgColor   || '#10b981';
    colorFn.value = obj.fontColor || obj.stroke || '#ffffff';
  }

  modal.style.display = 'flex';
}

function closeRichEditModal() {
  document.getElementById('rich-edit-modal').style.display = 'none';
  state.editingObject = null;
}

function saveRichEditModal() {
  const obj      = state.editingObject; if (!obj) return;
  const textVal  = document.getElementById('modal-input-text').value.trim();
  const bgCol    = document.getElementById('modal-color-bg').value;
  const fontCol  = document.getElementById('modal-color-font').value;
  const sizeVal  = parseInt(document.getElementById('modal-slider-size').value)         || 34;
  const fsVal    = parseInt(document.getElementById('modal-slider-fontsize').value)     || 18;
  const swVal    = parseInt(document.getElementById('modal-slider-strokewidth').value)  || 3;

  if (obj.customType === 'marker') {
    obj.markerValue = textVal; obj.markerSize = sizeVal; obj.bgColor = bgCol; obj.fontColor = fontCol;
    const circle = obj._objects?.[0]; const label = obj._objects?.[1];
    circle?.set({ fill: bgCol, radius: Math.round(sizeVal / 2) });
    label?.set({ text: textVal, fill: fontCol, fontSize: Math.round(sizeVal * 0.48) });
    obj.setCoords();
  } else if (obj.customType === 'thai-textbox') {
    const alignVal = document.querySelector('#modal-align-group .align-btn.active')?.dataset?.align || obj.textAlign || 'left';
    obj.rawText = textVal; obj.bgColor = bgCol; obj.fontColor = fontCol;
    obj.set({
      fontSize: fsVal, fill: fontCol, backgroundColor: bgCol,
      textAlign: alignVal,
      lineHeight: 1.55,
      boxPaddingX: 14,
      boxPaddingY: 10,
      boxRadius: 8,
      padding: 16
    });
    obj.text = wrapThaiText(textVal, obj.width - 28, fsVal, obj.fontFamily || state.properties.fontFamily);
    obj.setCoords();
  } else if (obj.customType === 'rect') {
    obj.bgColor = bgCol; obj.fontColor = fontCol;
    obj.set({ fill: hexToRgba(bgCol, 0.2), stroke: fontCol, strokeWidth: swVal });
    obj.setCoords();
  }

  state.canvas.requestRenderAll();
  saveHistoryState(); renderLayersList(); closeRichEditModal();
  showToast('💾 บันทึกการเปลี่ยนแปลงเรียบร้อย');
}

function deleteEditingObject() {
  if (!state.editingObject) return;
  state.canvas.remove(state.editingObject);
  state.canvas.requestRenderAll();
  saveHistoryState(); renderLayersList(); closeRichEditModal();
  showToast('ลบชิ้นงานแล้ว');
}

function duplicateSelectedObject() {
  const obj = state.canvas.getActiveObject(); if (!obj) return;
  obj.clone(cloned => {
    cloned.set({ left: obj.left + 20, top: obj.top + 20, evented: true, objectCaching: false });
    if (cloned.type === 'activeSelection') {
      cloned.canvas = state.canvas;
      cloned.forEachObject(o => { o.objectCaching = false; state.canvas.add(o); });
      cloned.setCoords();
    } else { state.canvas.add(cloned); }
    state.canvas.setActiveObject(cloned);
    state.canvas.requestRenderAll();
    saveHistoryState(); renderLayersList(); showToast('ทำสำเนาเรียบร้อย');
  });
}

/* ─────────────────────────────────────────────
   SELECTION EVENTS
───────────────────────────────────────────── */
function onSelectionChange() {
  const bar = document.getElementById('floating-selection-toolbar');
  if (bar) bar.style.display = 'flex';
  renderLayersList();
}
function onSelectionCleared() {
  const bar = document.getElementById('floating-selection-toolbar');
  if (bar) bar.style.display = 'none';
  renderLayersList();
}
function deleteSelectedObjects() {
  const objs = state.canvas.getActiveObjects();
  if (!objs.length) return;
  objs.forEach(o => state.canvas.remove(o));
  state.canvas.discardActiveObject();
  state.canvas.requestRenderAll();
  saveHistoryState(); renderLayersList(); showToast('ลบวัตถุที่เลือกแล้ว');
}
function clearAllAnnotations() {
  if (!confirm('คุณต้องการลบ Marker และข้อความทั้งหมดบนภาพนี้ใช่หรือไม่?')) return;
  state.canvas.getObjects().slice().forEach(o => {
    if (o !== state.canvas.backgroundImage) state.canvas.remove(o);
  });
  state.canvas.discardActiveObject();
  state.canvas.requestRenderAll();
  saveHistoryState(); renderLayersList(); showToast('ล้างภาพเรียบร้อยแล้ว');
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────── */
window.toggleFaq = el => {
  const item = el.parentElement;
  const open = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!open) item.classList.add('open');
};

/* ─────────────────────────────────────────────
   MANUAL MODAL
───────────────────────────────────────────── */
window.openManual  = () => { document.getElementById('manual-modal').style.display = 'flex'; };
window.closeManual = () => { document.getElementById('manual-modal').style.display = 'none';  };

/* ─────────────────────────────────────────────
   GLOBAL FUNCTION EXPOSURE
───────────────────────────────────────────── */
window.openRichEditForObjectByIndex = openRichEditForObjectByIndex;
window.toggleObjectVisibility       = toggleObjectVisibility;
window.deleteObjectByIndex          = deleteObjectByIndex;
window.closeRichEditModal           = closeRichEditModal;

/* ─────────────────────────────────────────────
   HISTORY (UNDO / REDO) — B1: deep objectCaching fix
───────────────────────────────────────────── */
const HISTORY_PROPS = ['customType','toolType','markerValue','markerSize','bgColor','fontColor','rawText','textAlign','fontSize','lineHeight','padding','boxPaddingX','boxPaddingY','boxRadius'];

function saveHistoryState() {
  if (!state.canvas || state.isHistoryLocked) return;
  const json = JSON.stringify(state.canvas.toDatalessJSON(HISTORY_PROPS));
  if (state.historyIndex < state.history.length - 1) {
    state.history = state.history.slice(0, state.historyIndex + 1);
  }
  state.history.push(json);
  state.historyIndex = state.history.length - 1;
  updateUndoRedoButtons();
}

function undo() { if (state.historyIndex > 0) { state.historyIndex--; loadHistoryState(state.history[state.historyIndex]); } }
function redo()  { if (state.historyIndex < state.history.length - 1) { state.historyIndex++; loadHistoryState(state.history[state.historyIndex]); } }

function loadHistoryState(jsonStr) {
  state.isHistoryLocked = true;
  state.canvas.loadFromJSON(jsonStr, () => {
    // B1: Disable objectCaching on ALL objects including children inside Groups
    state.canvas.forEachObject(obj => {
      obj.set('objectCaching', false);
      if (obj._objects) {
        obj._objects.forEach(child => child.set('objectCaching', false));
      }
    });
    state.canvas.requestRenderAll();
    state.isHistoryLocked = false;
    updateUndoRedoButtons();
    renderLayersList();
  });
}

function resetHistory() { state.history = []; state.historyIndex = -1; updateUndoRedoButtons(); }

function updateUndoRedoButtons() {
  const btnU = document.getElementById('btn-undo');
  const btnR = document.getElementById('btn-redo');
  if (btnU) btnU.disabled = state.historyIndex <= 0;
  if (btnR) btnR.disabled = state.historyIndex >= state.history.length - 1;
}

/* ─────────────────────────────────────────────
   KEYBOARD SHORTCUTS
───────────────────────────────────────────── */
function handleKeyboardShortcuts(e) {
  if (['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  const active = state.canvas?.getActiveObject();
  if (active?.isEditing) return;

  if (e.ctrlKey && e.key.toLowerCase() === 'z') { e.preventDefault(); e.shiftKey ? redo() : undo(); }
  else if (e.ctrlKey && e.key.toLowerCase() === 'y') { e.preventDefault(); redo(); }
  else if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); deleteSelectedObjects(); }
  else if (e.key === 'Escape') { state.canvas?.discardActiveObject(); state.canvas?.requestRenderAll(); setTool('select'); }
}

/* ─────────────────────────────────────────────
   EXPORT — A4: render at full native resolution
───────────────────────────────────────────── */
function openExportModal() {
  if (!state.originalImage) { alert('กรุณาเลือกรูปภาพก่อนทำการ Export'); return; }
  const fmt      = document.getElementById('export-format-select').value || 'png';
  const filename = generateDefaultFileName(fmt);
  document.getElementById('export-filename-input').value = filename;
  document.getElementById('export-dimensions-text').textContent =
    `${state.imageWidth} × ${state.imageHeight} px (Full Resolution Native)`;
  document.getElementById('export-modal').style.display = 'flex';
}

function closeExportModal() { document.getElementById('export-modal').style.display = 'none'; }

function generateDefaultFileName(ext = 'png') {
  const base = (state.originalFileName || 'image').replace(/[^\w\d\-_ก-๙]/g, '_').substring(0, 10) || 'poodle_img';
  const now   = new Date();
  const ts    = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}`;
  return `${base}_${ts}.${ext}`;
}

async function executeExport() {
  const fmt     = document.getElementById('export-format-select').value;
  const quality = parseFloat(document.getElementById('export-quality-slider')?.value || 0.95);
  let fileName  = document.getElementById('export-filename-input').value.trim() || generateDefaultFileName(fmt);
  if (!fileName.toLowerCase().endsWith(`.${fmt}`)) fileName += `.${fmt}`;

  // A4: Export at FULL native resolution — temporarily reset viewport to 1:1
  const savedVpt  = state.canvas.viewportTransform.slice();
  const savedW    = state.canvas.getWidth();
  const savedH    = state.canvas.getHeight();

  state.canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);
  state.canvas.setWidth(state.imageWidth);
  state.canvas.setHeight(state.imageHeight);
  state.canvas.requestRenderAll();

  const dataUrl = state.canvas.toDataURL({
    format:  fmt === 'jpg' ? 'jpeg' : fmt,
    quality,
    multiplier: 1        // viewport is 1:1 now, so multiplier = 1 = native resolution
  });

  // Restore viewport
  state.canvas.setViewportTransform(savedVpt);
  state.canvas.setWidth(savedW);
  state.canvas.setHeight(savedH);
  state.canvas.requestRenderAll();

  closeExportModal();

  const mimeMap = { png: 'image/png', jpeg: 'image/jpeg', jpg: 'image/jpeg', webp: 'image/webp' };

  if ('showSaveFilePicker' in window && window.location.protocol !== 'file:') {
    try {
      const fh = await window.showSaveFilePicker({
        suggestedName: fileName,
        types: [{ description: 'Image', accept: { [mimeMap[fmt] || 'image/png']: [`.${fmt}`] } }]
      });
      const blob = await (await fetch(dataUrl)).blob();
      const wr   = await fh.createWritable();
      await wr.write(blob); await wr.close();
      showToast(`🦴 Export "${fileName}" สำเร็จ!`);
      return;
    } catch (err) {
      if (err.name === 'AbortError') return;
      console.warn('showSaveFilePicker failed, fallback:', err);
    }
  }

  // B3: Fallback download (always works, including file:// protocol)
  const a = document.createElement('a');
  a.download = fileName; a.href = dataUrl;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  showToast(`🦴 Export "${fileName}" สำเร็จ! (ดาวน์โหลดอัตโนมัติ)`);
}

/* ─────────────────────────────────────────────
   TOAST
───────────────────────────────────────────── */
function showToast(msg) {
  let ctr = document.querySelector('.toast-container');
  if (!ctr) { ctr = document.createElement('div'); ctr.className = 'toast-container'; document.body.appendChild(ctr); }
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span>${msg}</span>`;
  ctr.appendChild(t);
  setTimeout(() => {
    t.style.cssText += 'opacity:0;transform:translateY(10px);transition:all 0.3s ease';
    setTimeout(() => t.remove(), 300);
  }, 2800);
}
