/* Items Manager — Add/Edit Item, Rx Default, Tx Default modals (mock) */
(function (global) {
  var editingCode = null;
  var txNotes = [];
  var scratchItem = { pricing: { type: 'B', ranges: [{ from: 0.01, to: 0.5, price: '' }, { from: 0.51, to: 1, price: '' }] } };

  function el(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  var UNITS = ["เม็ด","แคปซูล","ขวด","ซีซี","ครั้ง","แผ่น","ซอง","หลอด","ชิ้น","dose","Ampule","กระปุก","ถุง","อัน","ชั่วโมง","คืน","กิโลกรัม","บาท","ตัวอย่าง"];
  var RECEIPTS = ["ค่ายานำกลับ","ค่ายาฉีด / สารน้ำ","ค่าบริการทางการแพทย์","ค่าบัตร","ค่าผ่าตัด","ค่าวัคซีน","ค่าวินิจฉัยด้วยภาพถ่ายรังสี","ค่าหัตถการ","ค่าตรวจทางห้องปฎิบัติการ","ค่าเวชภัณฑ์ / วัสดุการแพทย์","อื่นๆ"];
  var ROUTES = ["IV","IM","SC","PO","Topical","Inhalation","Other"];
  var DOSES = ["1 เม็ด","1/2 เม็ด","1 ซีซี","2 ซีซี","5 ซีซี","10 ซีซี","ตามน้ำหนัก","อื่นๆ"];
  var FREQS = ["SID (วันละ 1 ครั้ง)","BID (วันละ 2 ครั้ง)","TID (วันละ 3 ครั้ง)","QID","EOD","PRN","ต่อเนื่อง","อื่นๆ"];
  var RX_HOWTO = ["รับประทาน","ฉีด","ทา","หยอด","สูดดม","อื่นๆ"];
  var RX_DETAIL = ["หลังอาหาร","ก่อนอาหาร","พร้อมอาหาร","เมื่อมีอาการ","ตามแพทย์สั่ง"];
  var RX_NOTE = ["ห้ามให้พร้อมนม","เก็บในตู้เย็น","เขย่าก่อนใช้","สังเกตอาการแพ้","อื่นๆ"];

  function opts(list, selected) {
    return list.map(function (v) {
      return '<option value="' + esc(v) + '"' + (v === selected ? ' selected' : '') + '>' + esc(v) + '</option>';
    }).join('');
  }

  function ensureShell() {
    if (el('dlg-root')) return;
    var root = document.createElement('div');
    root.id = 'dlg-root';
    root.innerHTML =
      '<div class="dlg-overlay" id="dlg-overlay"></div>' +
      '<div class="dlg" id="dlg-item" role="dialog" aria-modal="true"></div>' +
      '<div class="dlg dlg-wide" id="dlg-rx" role="dialog" aria-modal="true"></div>' +
      '<div class="dlg" id="dlg-tx" role="dialog" aria-modal="true"></div>';
    document.body.appendChild(root);
    el('dlg-overlay').addEventListener('click', closeAll);
  }

  function closeAll() {
    document.querySelectorAll('.dlg').forEach(function (d) { d.classList.remove('show'); });
    var ov = el('dlg-overlay');
    if (ov) ov.classList.remove('show');
  }

  function showDlg(id) {
    ensureShell();
    closeAll();
    el('dlg-overlay').classList.add('show');
    el(id).classList.add('show');
  }

  function formulaHint(f) {
    if (f === 'B') return 'B calculates by quantity range.';
    if (f === 'C') return 'C calculates by every-N quantity.';
    return 'A calculates by unit price.';
  }

  function sellPriceBody(it, formula) {
    var p = (it && it.pricing) || {};
    if (formula === 'B') {
      var ranges = (p.ranges && p.ranges.length) ? p.ranges : [{ from: 0.01, to: 0.5, price: '' }, { from: 0.51, to: 1, price: '' }];
      return '<div id="item-ranges">' + ranges.map(function (r, i) {
        return '<div class="range-row">' +
          '<input type="number" step="0.01" data-k="from" value="' + esc(r.from) + '" placeholder="from">' +
          '<span class="range-sep">–</span>' +
          '<input type="number" step="0.01" data-k="to" value="' + esc(r.to) + '" placeholder="to">' +
          '<span class="range-sep">=</span>' +
          '<input type="number" step="0.01" data-k="price" value="' + esc(r.price) + '" placeholder="price">' +
          '<button type="button" class="icon-x" onclick="ItemsDialogs.removeRange(' + i + ')">×</button></div>';
      }).join('') + '</div>' +
        '<button type="button" class="link-btn" onclick="ItemsDialogs.addRange()">+ Add range</button>';
    }
    if (formula === 'C') {
      return '<div class="grid-2">' +
        '<div class="f"><label>Every Qty (N)</label><input id="item-every" type="number" step="1" value="' + esc(p.everyQty != null ? p.everyQty : '') + '"></div>' +
        '<div class="f"><label>Price / block</label><input id="item-cprice" type="number" step="0.01" value="' + esc(p.price != null ? p.price : '') + '"></div>' +
      '</div>';
    }
    var u = p.unitPrice != null ? p.unitPrice : (it && it.unitPrice != null ? it.unitPrice : '');
    return '<div class="f"><label>Unit Price</label><input id="item-unit-price" type="number" step="0.01" value="' + esc(u) + '"></div>';
  }

  function currentItemForPrice() {
    if (editingCode && global.findItem) return global.findItem(editingCode) || scratchItem;
    return scratchItem;
  }

  function paintSellBody() {
    var f = el('item-formula').value;
    el('item-formula-hint').textContent = formulaHint(f);
    el('item-sell-body').innerHTML = sellPriceBody(currentItemForPrice(), f);
  }

  function openItemForm(code) {
    ensureShell();
    editingCode = code || null;
    scratchItem = { pricing: { type: 'B', ranges: [{ from: 0.01, to: 0.5, price: '' }, { from: 0.51, to: 1, price: '' }] } };
    var isEdit = !!code;
    var it = isEdit && global.findItem ? global.findItem(code) : null;
    var receipts = RECEIPTS.slice();
    var units = UNITS.slice();
    if (global.items) {
      global.items.forEach(function (x) {
        if (x.receiptCategory && receipts.indexOf(x.receiptCategory) < 0) receipts.push(x.receiptCategory);
        if (x.unit && units.indexOf(x.unit) < 0) units.push(x.unit);
      });
    }
    var formula = it ? it.formula : 'A';
    var enabled = !it || it.status !== 'Disabled';
    var codeVal = it ? it.itemCode : '';
    var prefix = codeVal ? String(codeVal).slice(0, 2) : '00';

    el('dlg-item').innerHTML =
      '<div class="dlg-head">' +
        '<div><div class="dlg-eyebrow">ITEMS MANAGEMENT</div>' +
        '<div class="dlg-title" id="item-dlg-title">' + (isEdit ? 'Edit Item' : 'Add New Item') + '</div></div>' +
        '<button type="button" class="dlg-x" onclick="ItemsDialogs.closeAll()">×</button>' +
      '</div>' +
      '<div class="dlg-body">' +
        '<div class="row-code">' +
          '<div class="f grow"><label>Item Code (รหัส)</label>' +
            '<input id="item-code" class="' + (isEdit ? 'readonly' : '') + '" ' + (isEdit ? 'readonly' : '') + ' value="' + esc(codeVal) + '" placeholder="000000000001"></div>' +
          '<div class="f prefix"><label>Prefix</label><select id="item-prefix">' +
            ['00','01','02','03','10','20','30','50'].map(function (p) {
              return '<option value="' + p + '"' + (p === prefix ? ' selected' : '') + '>' + p + '</option>';
            }).join('') +
          '</select></div>' +
          '<div class="f status-f"><label>&nbsp;</label>' +
            '<label class="toggle"><input type="checkbox" id="item-enable"' + (enabled ? ' checked' : '') + '>' +
            '<span class="toggle-ui"></span><span class="toggle-lab" id="item-enable-lab">Status: ' + (enabled ? 'Enable' : 'Disable') + '</span></label></div>' +
        '</div>' +
        '<div class="f"><label>Description (ชื่อยา/บริการ) <span class="req">*</span></label>' +
          '<input id="item-desc" value="' + esc(it ? (it.description || it.name) : '') + '"></div>' +
        '<div class="grid-2">' +
          '<div class="f"><label>Trade Name (ชื่อการค้า)</label><input id="item-trade" value="' + esc(it ? it.tradeName : '') + '"></div>' +
          '<div class="f"><label>Common Name (ชื่อใช้เรียกโดยทั่วไป)</label><input id="item-common" value="' + esc(it ? it.commonName : '') + '"></div>' +
        '</div>' +
        '<div class="grid-4">' +
          '<div class="f"><label>Receipt Category (หมวดในใบเสร็จ)</label><select id="item-receipt">' + opts(receipts, it ? it.receiptCategory : receipts[0]) + '</select></div>' +
          '<div class="f"><label>Unit (หน่วยนับ)</label>' +
            '<div class="unit-wrap"><input type="checkbox" id="item-unit-custom" title="Custom unit"> <select id="item-unit">' + opts(units, it ? it.unit : 'เม็ด') + '</select></div></div>' +
          '<div class="f"><label>Alert Min</label><input id="item-amin" type="number" value="' + esc(it && it.alertMin != null ? it.alertMin : 0) + '"></div>' +
          '<div class="f"><label>Alert Max</label><input id="item-amax" type="number" value="' + esc(it && it.alertMax != null ? it.alertMax : 0) + '"></div>' +
        '</div>' +
        '<div class="sell-box">' +
          '<div class="sell-head">' +
            '<div><div class="sell-title">Sell Price</div><div class="sell-hint" id="item-formula-hint">' + formulaHint(formula) + '</div></div>' +
            '<select id="item-formula" onchange="ItemsDialogs.onFormulaChange()">' +
              '<option value="A"' + (formula === 'A' ? ' selected' : '') + '>A - Unit price</option>' +
              '<option value="B"' + (formula === 'B' ? ' selected' : '') + '>B - Range price</option>' +
              '<option value="C"' + (formula === 'C' ? ' selected' : '') + '>C - Every-N price</option>' +
            '</select>' +
          '</div>' +
          '<div id="item-sell-body">' + sellPriceBody(it, formula) + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="dlg-foot">' +
        '<button type="button" class="btn-close" onclick="ItemsDialogs.closeAll()">Close</button>' +
        '<button type="button" class="btn-save" onclick="ItemsDialogs.saveItem()">Save</button>' +
      '</div>';

    showDlg('dlg-item');
    el('item-enable').addEventListener('change', function () {
      el('item-enable-lab').textContent = 'Status: ' + (this.checked ? 'Enable' : 'Disable');
    });
  }

  function onFormulaChange() { paintSellBody(); }

  function addRange() {
    var it = currentItemForPrice();
    if (!it.pricing) it.pricing = { type: 'B', ranges: [] };
    if (!it.pricing.ranges) it.pricing.ranges = [];
    collectRangesInto(it);
    it.pricing.ranges.push({ from: '', to: '', price: '' });
    el('item-sell-body').innerHTML = sellPriceBody(it, 'B');
  }

  function removeRange(i) {
    var it = currentItemForPrice();
    if (!it.pricing) it.pricing = { ranges: [] };
    collectRangesInto(it);
    it.pricing.ranges.splice(i, 1);
    if (!it.pricing.ranges.length) it.pricing.ranges = [{ from: '', to: '', price: '' }];
    el('item-sell-body').innerHTML = sellPriceBody(it, 'B');
  }

  function collectRangesInto(it) {
    var rows = document.querySelectorAll('#item-ranges .range-row');
    var ranges = [];
    rows.forEach(function (row) {
      var inputs = row.querySelectorAll('input');
      ranges.push({
        from: inputs[0].value === '' ? '' : parseFloat(inputs[0].value),
        to: inputs[1].value === '' ? '' : parseFloat(inputs[1].value),
        price: inputs[2].value === '' ? '' : parseFloat(inputs[2].value)
      });
    });
    if (!it.pricing) it.pricing = {};
    it.pricing.ranges = ranges;
  }

  function saveItem() {
    var desc = el('item-desc').value.trim();
    if (!desc) {
      if (global.toastMock) global.toastMock('กรุณากรอก Description');
      return;
    }
    var formula = el('item-formula').value;
    var enabled = el('item-enable').checked;
    var code = el('item-code').value.trim();
    if (!editingCode) {
      if (!code) {
        var prefix = el('item-prefix').value;
        code = prefix + String(Date.now()).slice(-10);
        el('item-code').value = code;
      }
      if (global.findItem && global.findItem(code)) {
        if (global.toastMock) global.toastMock('Item Code ซ้ำ');
        return;
      }
    } else {
      code = editingCode;
    }

    var pricing = { type: formula };
    var unitPrice = null;
    var priceStatus = 'pending';
    if (formula === 'A') {
      var u = parseFloat(el('item-unit-price').value);
      pricing.unitPrice = isNaN(u) ? null : u;
      unitPrice = pricing.unitPrice;
      if (unitPrice != null) priceStatus = 'priced';
    } else if (formula === 'B') {
      var tmp = { pricing: {} };
      collectRangesInto(tmp);
      pricing.ranges = tmp.pricing.ranges || [];
      if (pricing.ranges.length && pricing.ranges.some(function (r) { return r.price !== '' && !isNaN(r.price); })) priceStatus = 'priced';
    } else {
      var every = parseFloat(el('item-every').value);
      var cprice = parseFloat(el('item-cprice').value);
      pricing.everyQty = isNaN(every) ? null : every;
      pricing.price = isNaN(cprice) ? null : cprice;
      if (pricing.everyQty != null && pricing.price != null) priceStatus = 'priced';
    }

    var payload = {
      itemCode: code,
      name: desc,
      description: desc,
      tradeName: el('item-trade').value.trim(),
      commonName: el('item-common').value.trim(),
      receiptCategory: el('item-receipt').value,
      unit: el('item-unit').value,
      alertMin: parseFloat(el('item-amin').value) || 0,
      alertMax: parseFloat(el('item-amax').value) || 0,
      formula: formula,
      formulaLabel: formula === 'A' ? 'A - Unit price' : formula === 'B' ? 'B - Range price' : 'C - Every-N price',
      pricing: pricing,
      unitPrice: unitPrice,
      priceStatus: priceStatus,
      status: enabled ? 'Active' : 'Disabled'
    };

    if (!editingCode) {
      payload.categoryName = 'อื่นๆ';
      payload.availability = 'available';
      payload.outOfStock = null;
      payload.txDefault = false;
      payload.rxDefault = false;
      payload.usedIn = ['TX'];
      global.items.unshift(payload);
    } else {
      var it = global.findItem(code);
      Object.keys(payload).forEach(function (k) { it[k] = payload[k]; });
      if (it.status === 'Disabled') {
        it.availability = 'available';
        it.outOfStock = null;
      }
    }
    closeAll();
    if (global.renderTable) global.renderTable();
    if (global.toastMock) global.toastMock((editingCode ? 'Saved item · ' : 'Added item · ') + code);
  }

  /* —— Rx Default —— */
  function openRxDefault(code) {
    ensureShell();
    var it = global.findItem(code);
    if (!it) return;
    var d = it.rxDefaultData || {};
    el('dlg-rx').innerHTML =
      '<div class="dlg-head">' +
        '<div><div class="dlg-eyebrow">RX DEFAULT</div>' +
        '<div class="dlg-title-row"><div class="dlg-title">Add Rx Default</div>' +
        '<label class="disp">Display <select id="rx-lang"><option>TH</option><option>EN</option></select></label></div>' +
        '<a class="item-link" href="javascript:void(0)">' + esc(it.itemCode) + ' - ' + esc(it.description || it.name) + '</a></div>' +
        '<button type="button" class="dlg-x" onclick="ItemsDialogs.closeAll()">×</button>' +
      '</div>' +
      '<div class="dlg-body">' +
        sectionRx('วิธีใช้/รับประทาน', 'howto',
          '<div class="rx-row"><label class="rad"><input type="radio" name="rx-howto" value="a"' + ((d.howtoMode || 'a') === 'a' ? ' checked' : '') + '></label>' +
            '<select id="rx-howto1">' + opts(RX_HOWTO, d.howto1 || 'รับประทาน') + '</select>' +
            '<span class="rx-txt">ครั้งละ</span><input id="rx-dose" class="rx-num" type="number" step="0.1" value="' + esc(d.doseAmt != null ? d.doseAmt : 1) + '">' +
            '<span class="rx-txt">ซีซี วันละ</span><input id="rx-times" class="rx-num" type="number" step="1" value="' + esc(d.timesPerDay != null ? d.timesPerDay : 2) + '">' +
            '<span class="rx-txt">เวลา</span></div>' +
          '<div class="rx-row"><label class="rad"><input type="radio" name="rx-howto" value="b"' + (d.howtoMode === 'b' ? ' checked' : '') + '></label>' +
            '<select id="rx-howto2" class="grow">' + opts(RX_HOWTO, d.howto2 || 'อื่นๆ') + '</select></div>'
        ) +
        sectionRx('รายละเอียดวิธีใช้', 'detail',
          '<div class="rx-row"><label class="rad"><input type="radio" name="rx-detail" value="a"' + ((d.detailMode || 'a') === 'a' ? ' checked' : '') + '></label>' +
            '<select id="rx-det1">' + opts(RX_DETAIL, d.detail1 || 'หลังอาหาร') + '</select>' +
            '<label class="chk"><input type="checkbox" id="rx-m"' + (d.morning !== false ? ' checked' : '') + '> เช้า</label>' +
            '<label class="chk"><input type="checkbox" id="rx-n"' + (d.noon ? ' checked' : '') + '> กลางวัน</label>' +
            '<label class="chk"><input type="checkbox" id="rx-e"' + (d.evening !== false ? ' checked' : '') + '> เย็น</label>' +
            '<label class="chk"><input type="checkbox" id="rx-b"' + (d.bedtime ? ' checked' : '') + '> ก่อนนอน</label></div>' +
          '<div class="rx-row"><label class="rad"><input type="radio" name="rx-detail" value="b"' + (d.detailMode === 'b' ? ' checked' : '') + '></label>' +
            '<select id="rx-det2">' + opts(RX_DETAIL, d.detail2 || 'ตามแพทย์สั่ง') + '</select>' +
            '<span class="rx-txt">ทุกๆ</span><input id="rx-every" class="rx-num" type="number" value="' + esc(d.everyN != null ? d.everyN : 8) + '">' +
            '<select id="rx-every-unit"><option>ชั่วโมง</option><option>วัน</option></select></div>' +
          '<div class="rx-row"><label class="rad"><input type="radio" name="rx-detail" value="c"' + (d.detailMode === 'c' ? ' checked' : '') + '></label>' +
            '<select id="rx-det3" class="grow">' + opts(RX_DETAIL, d.detail3 || 'เมื่อมีอาการ') + '</select></div>'
        ) +
        sectionRx('หมายเหตุ', 'note',
          [0,1,2].map(function (i) {
            var notes = d.notes || [];
            var on = notes[i] && notes[i].on;
            var val = notes[i] && notes[i].text ? notes[i].text : RX_NOTE[i] || RX_NOTE[0];
            return '<div class="rx-row"><label class="chk"><input type="checkbox" class="rx-note-on" data-i="' + i + '"' + (on ? ' checked' : '') + '></label>' +
              '<select class="rx-note-sel grow" data-i="' + i + '">' + opts(RX_NOTE, val) + '</select></div>';
          }).join('')
        ) +
      '</div>' +
      '<div class="dlg-foot">' +
        '<button type="button" class="btn-close" onclick="ItemsDialogs.closeAll()">Close</button>' +
        '<button type="button" class="btn-save" onclick="ItemsDialogs.saveRx(\'' + esc(code) + '\')">Save</button>' +
      '</div>';
    showDlg('dlg-rx');
  }

  function sectionRx(title, key, body) {
    return '<div class="rx-sec">' +
      '<div class="rx-sec-h"><span>' + esc(title) + '</span>' +
      '<button type="button" class="icon-trash" title="Clear" onclick="ItemsDialogs.toastClear(\'' + key + '\')">🗑</button></div>' +
      '<div class="rx-sec-b">' + body + '</div></div>';
  }

  function toastClear(key) {
    if (global.toastMock) global.toastMock('Clear section · ' + key + ' (mock)');
  }

  function saveRx(code) {
    var it = global.findItem(code);
    if (!it) return;
    var howtoMode = (document.querySelector('input[name="rx-howto"]:checked') || {}).value || 'a';
    var detailMode = (document.querySelector('input[name="rx-detail"]:checked') || {}).value || 'a';
    var notes = [];
    document.querySelectorAll('.rx-note-sel').forEach(function (sel) {
      var i = sel.getAttribute('data-i');
      var on = document.querySelector('.rx-note-on[data-i="' + i + '"]');
      notes.push({ on: !!(on && on.checked), text: sel.value });
    });
    it.rxDefault = true;
    it.rxDefaultData = {
      howtoMode: howtoMode,
      howto1: el('rx-howto1').value,
      howto2: el('rx-howto2').value,
      doseAmt: parseFloat(el('rx-dose').value),
      timesPerDay: parseFloat(el('rx-times').value),
      detailMode: detailMode,
      detail1: el('rx-det1').value,
      detail2: el('rx-det2').value,
      detail3: el('rx-det3').value,
      morning: el('rx-m').checked,
      noon: el('rx-n').checked,
      evening: el('rx-e').checked,
      bedtime: el('rx-b').checked,
      everyN: parseFloat(el('rx-every').value),
      notes: notes
    };
    it.rxDefaultNote = 'มีค่าเริ่มต้น RX';
    closeAll();
    if (global.renderTable) global.renderTable();
    if (global.toastMock) global.toastMock('Saved Rx Default · ' + code);
  }

  /* —— Tx Default —— */
  function openTxDefault(code) {
    ensureShell();
    var it = global.findItem(code);
    if (!it) return;
    var d = it.txDefaultData || {};
    txNotes = (d.notes && d.notes.length) ? d.notes.slice() : [];
    el('dlg-tx').innerHTML =
      '<div class="dlg-head">' +
        '<div><div class="dlg-eyebrow">TX DEFAULT</div>' +
        '<div class="dlg-title-row"><div class="dlg-title">Add Tx Default</div>' +
        '<label class="disp">Display <select><option>TH</option><option>EN</option></select></label></div>' +
        '<a class="item-link" href="javascript:void(0)">' + esc(it.itemCode) + ' - ' + esc(it.description || it.name) + '</a></div>' +
        '<button type="button" class="dlg-x" onclick="ItemsDialogs.closeAll()">×</button>' +
      '</div>' +
      '<div class="dlg-body">' +
        '<div class="tx-box">' +
          '<div class="grid-2">' +
            '<div class="f"><label>วิธีการให้ยา (Route)</label><select id="tx-route">' + opts(ROUTES, d.route || 'IV') + '</select></div>' +
            '<div class="f"><label>ปริมาณที่ให้ (Dose)</label><select id="tx-dose">' + opts(DOSES, d.dose || DOSES[0]) + '</select></div>' +
          '</div>' +
          '<div class="f"><label>ความถี่ในการให้ยา / อัตราการให้ (Frequency / Rate)</label>' +
            '<select id="tx-freq">' + opts(FREQS, d.freq || FREQS[0]) + '</select></div>' +
          '<div class="f">' +
            '<label class="tx-note-lab">รายละเอียดการสั่งยาและคำแนะนำ (Note) <button type="button" class="plus" onclick="ItemsDialogs.addTxNote()">+</button></label>' +
            '<div id="tx-notes" class="tx-notes"></div>' +
            '<div class="tx-ph" id="tx-ph"' + (txNotes.length ? ' style="display:none"' : '') + '>Press + to add a note</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="dlg-foot">' +
        '<button type="button" class="btn-close" onclick="ItemsDialogs.closeAll()">Close</button>' +
        '<button type="button" class="btn-save" onclick="ItemsDialogs.saveTx(\'' + esc(code) + '\')">Save</button>' +
      '</div>';
    showDlg('dlg-tx');
    renderTxNotes();
  }

  function renderTxNotes() {
    var box = el('tx-notes');
    var ph = el('tx-ph');
    if (!box) return;
    if (!txNotes.length) {
      box.innerHTML = '';
      if (ph) ph.style.display = '';
      return;
    }
    if (ph) ph.style.display = 'none';
    box.innerHTML = txNotes.map(function (n, i) {
      return       '<div class="tx-note-row"><input type="text" value="' + esc(n) + '" data-i="' + i + '" oninput="ItemsDialogs.setTxNote(' + i + ', this.value)">' +
        '<button type="button" class="icon-x" onclick="ItemsDialogs.removeTxNote(' + i + ')">×</button></div>';
    }).join('');
  }

  function setTxNote(i, val) { txNotes[i] = val; }

  function addTxNote() {
    txNotes.push('');
    renderTxNotes();
    var inputs = document.querySelectorAll('#tx-notes input');
    if (inputs.length) inputs[inputs.length - 1].focus();
  }

  function removeTxNote(i) {
    txNotes.splice(i, 1);
    renderTxNotes();
  }

  function saveTx(code) {
    var it = global.findItem(code);
    if (!it) return;
    it.txDefault = true;
    it.txDefaultData = {
      route: el('tx-route').value,
      dose: el('tx-dose').value,
      freq: el('tx-freq').value,
      notes: txNotes.filter(function (n) { return String(n).trim(); })
    };
    it.txDefaultNote = 'มีค่าเริ่มต้น TX';
    closeAll();
    if (global.renderTable) global.renderTable();
    if (global.toastMock) global.toastMock('Saved Tx Default · ' + code);
  }

  global.ItemsDialogs = {
    closeAll: closeAll,
    openItemForm: openItemForm,
    onFormulaChange: onFormulaChange,
    addRange: addRange,
    removeRange: removeRange,
    saveItem: saveItem,
    openRxDefault: openRxDefault,
    openTxDefault: openTxDefault,
    saveRx: saveRx,
    saveTx: saveTx,
    addTxNote: addTxNote,
    removeTxNote: removeTxNote,
    setTxNote: setTxNote,
    toastClear: toastClear
  };
})(window);
