const DB_NAME = 'KAHIS_terminology_master';
const DB_VERSION = 1;
const FSN_TYPE = '900000000000003001';
const SYNONYM_TYPE = '900000000000013009';
const PREFERRED_ACCEPTABILITY = '900000000000548007';
const ACCEPTABLE_ACCEPTABILITY = '900000000000549004';
const IS_A_TYPE = '116680008';
const state = {
  files: { sapdt: [], vsct: [], sct: [], database: [] },
  discovered: [], concepts: [], descriptions: [], synonym_aliases: [], report: null,
  sourceIds: { VSCT: new Set(), 'SCT International': new Set() },
  progress: { total: 0, done: 0 }
};

const $ = (id) => document.getElementById(id);
const normalize = (value) => String(value ?? '').replace(/^\uFEFF/, '').trim().toLowerCase();
const basename = (path) => path.split('/').pop();
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const csvCell = (value) => { const text = String(value ?? ''); return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text; };

function setFolderInput(inputId, labelId, key) {
  $(inputId).addEventListener('change', (event) => {
    state.files[key] = [...event.target.files];
    const first = state.files[key][0];
    $(labelId).textContent = first ? `${first.webkitRelativePath.split('/')[0]} · ${state.files[key].length} files` : 'ยังไม่ได้เลือก folder';
    setStatus('เลือก source แล้ว กด Scan sources เพื่อ import/update', 'neutral');
  });
}
setFolderInput('sapdtInput', 'sapdtLabel', 'sapdt');
setFolderInput('vsctInput', 'vsctLabel', 'vsct');
setFolderInput('sctInput', 'sctLabel', 'sct');
setFolderInput('databaseInput', 'databaseLabel', 'database');
$('scanButton').addEventListener('click', importSources);
$('clearMasterButton').addEventListener('click', clearLocalMaster);
$('exportDescriptions').addEventListener('click', () => downloadCsv('terminology_descriptions.csv', state.descriptions, ['source', 'concept_id', 'description_id', 'term', 'description_type', 'designation', 'active', 'module_id', 'source_file']));
$('exportConcepts').addEventListener('click', exportTerminologyMaster);
$('exportReport').addEventListener('click', () => downloadFile('import_report.txt', reportToText(state.report), 'text/plain;charset=utf-8'));
$('saveAlias').addEventListener('click', saveSynonymAlias);

function setStatus(message, type) { $('scanStatus').textContent = message; $('scanStatus').className = `status ${type}`; }
function updateProgress(text, fileName, completed = state.progress.done) {
  const total = Math.max(state.progress.total, 1);
  const percent = Math.min(100, Math.round((completed / total) * 100));
  $('scanProgress').hidden = false; $('scanProgressText').textContent = text; $('scanProgressPercent').textContent = `${percent}%`; $('scanProgressBar').style.width = `${percent}%`; $('scanProgressFile').textContent = fileName || 'กำลังเตรียมข้อมูล…';
}
function yieldToBrowser() { return new Promise((resolve) => setTimeout(resolve, 0)); }
async function readFile(file, label) {
  updateProgress(`กำลังอ่าน ${label}`, file.webkitRelativePath || file.name);
  const content = await file.text();
  state.progress.done += 1;
  updateProgress(`อ่าน ${label} แล้ว`, file.webkitRelativePath || file.name);
  await yieldToBrowser();
  return content;
}
function headerValue(row, wanted) { const key = Object.keys(row).find((candidate) => normalize(candidate) === normalize(wanted)); return key ? row[key] : ''; }
async function processRows(rows, label, callback) {
  for (let index = 0; index < rows.length; index += 1) {
    callback(rows[index]);
    if (index > 0 && index % 5000 === 0) { updateProgress(`กำลังสร้าง ${label}`, `${index.toLocaleString()} / ${rows.length.toLocaleString()} rows`); await yieldToBrowser(); }
  }
}
async function parseTsv(text, label) {
  const lines = text.replace(/^\uFEFF/, '').split(/\r?\n/).filter((line) => line.length > 0);
  if (!lines.length) return { headers: [], rows: [] };
  const headers = lines.shift().split('\t');
  const rows = [];
  for (let index = 0; index < lines.length; index += 1) {
    const values = lines[index].split('\t');
    rows.push(Object.fromEntries(headers.map((header, valueIndex) => [header, values[valueIndex] ?? ''])));
    if (index > 0 && index % 5000 === 0) { updateProgress(`กำลัง parse ${label}`, `${index.toLocaleString()} / ${lines.length.toLocaleString()} rows`); await yieldToBrowser(); }
  }
  return { headers, rows };
}
function addFile(source, file, role, discovered) { discovered.push({ source, role, file, path: file.webkitRelativePath || file.name }); }
function identifyFiles() {
  const found = [];
  state.files.sapdt.filter((file) => /SA-PDTReleaseFile_full.*\.txt$/i.test(basename(file.name))).forEach((file) => addFile('SA-PDT', file, 'full release TXT', found));
  state.files.sapdt.filter((file) => /SA-PDTReleaseFile_\d{8}to\d{8}.*\.txt$/i.test(basename(file.name))).forEach((file) => addFile('SA-PDT', file, 'change release TXT', found));
  state.files.sapdt.filter((file) => /\.xml$/i.test(file.name) && /releasefile|sa-pdt/i.test(file.name)).forEach((file) => addFile('SA-PDT', file, 'release XML', found));
  state.files.sapdt.filter((file) => /SA-PDT Document\.docx$/i.test(basename(file.name))).forEach((file) => addFile('SA-PDT', file, 'documentation DOCX', found));
  addRf2Files('VSCT', state.files.vsct, found);
  addRf2Files('SCT International', state.files.sct, found);
  state.files.database.filter((file) => /\.(csv|json|jsonl)$/i.test(file.name)).forEach((file) => addFile('Existing database', file, 'prior database/export', found));
  state.discovered = found;
}
function addRf2Files(source, files, found) {
  files.filter((file) => /sct2_Concept_Snapshot.*\.txt$/i.test(basename(file.name))).forEach((file) => addFile(source, file, 'Concept RF2', found));
  files.filter((file) => /sct2_Description_Snapshot-en.*\.txt$/i.test(basename(file.name))).forEach((file) => addFile(source, file, 'Description RF2', found));
  files.filter((file) => /sct2_Relationship_Snapshot.*\.txt$/i.test(basename(file.name))).forEach((file) => addFile(source, file, 'Relationship RF2', found));
  files.filter((file) => /der2_cRefset_LanguageSnapshot-en.*\.txt$/i.test(basename(file.name))).forEach((file) => addFile(source, file, 'Language refset RF2', found));
  files.filter((file) => /der2_cRefset_AssociationSnapshot.*\.txt$/i.test(basename(file.name))).forEach((file) => addFile(source, file, 'Association refset RF2', found));
}
function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('concepts')) db.createObjectStore('concepts', { keyPath: 'concept_key' });
      if (!db.objectStoreNames.contains('descriptions')) db.createObjectStore('descriptions', { keyPath: 'description_key' });
      if (!db.objectStoreNames.contains('synonym_alias')) db.createObjectStore('synonym_alias', { keyPath: 'alias_id' });
      if (!db.objectStoreNames.contains('imports')) db.createObjectStore('imports', { keyPath: 'import_id' });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
async function dbGetAll(storeName) { const db = await openDb(); return new Promise((resolve, reject) => { const request = db.transaction(storeName, 'readonly').objectStore(storeName).getAll(); request.onsuccess = () => resolve(request.result); request.onerror = () => reject(request.error); }); }
async function dbReplace(storeName, rows, key) { const db = await openDb(); return new Promise((resolve, reject) => { const tx = db.transaction(storeName, 'readwrite'); const store = tx.objectStore(storeName); store.clear(); rows.forEach((row) => store.put(row)); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); }); }
async function clearLocalMaster() {
  const confirmed = window.confirm('Clear Local Master จะลบ concepts, descriptions, synonym_alias และ import history จาก browser เครื่องนี้เท่านั้น\n\nSource files และไฟล์ที่ดาวน์โหลดไว้จะไม่ถูกลบ\n\nต้องการดำเนินการต่อหรือไม่');
  if (!confirmed) return;
  $('clearMasterButton').disabled = true;
  try {
    const db = await openDb();
    await new Promise((resolve, reject) => { const tx = db.transaction(['concepts', 'descriptions', 'synonym_alias', 'imports'], 'readwrite'); ['concepts', 'descriptions', 'synonym_alias', 'imports'].forEach((storeName) => tx.objectStore(storeName).clear()); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); });
    state.concepts = []; state.descriptions = []; state.synonym_aliases = []; state.report = null; state.discovered = []; state.progress = { total: 0, done: 0 };
    $('fileTable').className = 'table-wrap empty-state'; $('fileTable').textContent = 'ล้าง Local Master แล้ว เลือก source folders แล้วกด Scan sources / Import Master';
    $('previewTable').className = 'table-wrap empty-state'; $('previewTable').textContent = 'ยังไม่มีข้อมูล preview'; $('aliasTable').className = 'table-wrap empty-state'; $('aliasTable').textContent = 'ยังไม่มี synonym_alias'; $('reportOutput').textContent = 'ยังไม่มีผลการตรวจสอบ'; $('modeBadge').textContent = 'LOCAL MASTER CLEARED'; $('sapdtConceptCount').textContent = '0'; $('sapdtDescriptionCount').textContent = '0'; $('vsctFileCount').textContent = '0'; $('sctFileCount').textContent = '0'; $('databaseState').textContent = 'EMPTY'; $('scanProgress').hidden = true; setStatus('ล้าง Local Master สำเร็จแล้ว Source files ยังอยู่ครบ', 'success');
  } catch (error) { setStatus(`ล้าง Local Master ไม่สำเร็จ: ${error.message}`, 'error'); } finally { $('clearMasterButton').disabled = false; }
}
function sourceItem(source, role) { return state.discovered.find((item) => item.source === source && item.role === role); }
function sourceItems(source, role) { return state.discovered.filter((item) => item.source === source && item.role === role); }

async function readSaPdt() {
  const full = sourceItem('SA-PDT', 'full release TXT');
  const change = sourceItem('SA-PDT', 'change release TXT');
  const descriptions = [];
  const descriptionsByConcept = new Map();
  const concepts = new Map();
  if (!full) return { concepts: [], descriptions: [], warnings: ['ไม่พบ SA-PDT full release TXT'] };
  const parsed = await parseTsv(await readFile(full.file, 'SA-PDT full release'), 'SA-PDT full release');
  parsed.rows.forEach((row) => {
    const conceptId = headerValue(row, 'Concept Identifier');
    const descriptionId = headerValue(row, 'Description Identifier');
    if (!conceptId || !descriptionId) return;
    const designation = headerValue(row, 'Term Designation');
    const record = { description_key: `SA-PDT:${descriptionId}`, source: 'SA-PDT', concept_id: conceptId, description_id: descriptionId, term: headerValue(row, 'Description Term'), description_type: designation === 'Preferred' ? 'Preferred term' : 'Synonym', designation, active: headerValue(row, 'Status'), module_id: '', source_file: full.path };
    descriptions.push(record);
    if (!descriptionsByConcept.has(conceptId)) descriptionsByConcept.set(conceptId, []);
    descriptionsByConcept.get(conceptId).push(record);
    if (!concepts.has(conceptId)) concepts.set(conceptId, { concept_key: `SA-PDT:${conceptId}`, concept_id: conceptId, display_name: '', in_sapdt: 'Yes', in_vsct: 'No', in_sct_int: 'No', record_status: 'active', sapdt_status: record.active, sapdt_change_type: '', description_count: 0, source_release: full.path });
    const concept = concepts.get(conceptId);
    concept.description_count += 1;
    if (normalize(designation) === 'preferred') concept.display_name = record.term;
  });
  concepts.forEach((concept) => {
    const rows = descriptionsByConcept.get(concept.concept_id) || [];
    const preferred = rows.find((row) => normalize(row.designation) === 'preferred');
    const acceptable = rows.filter((row) => normalize(row.designation) === 'acceptable');
    concept.sapdt_description_id = preferred?.description_id || '';
    concept.sapdt_preferred = preferred?.term || '';
    concept.display_name = concept.display_name || concept.sapdt_preferred || rows[0]?.term || concept.concept_id;
    concept.sapdt_acceptable = acceptable.map((row) => row.term).filter(Boolean).join(' | ');
    concept.synonym = concept.sapdt_acceptable;
  });
  if (change) {
    const changes = new Map();
    (await parseTsv(await readFile(change.file, 'SA-PDT change release'), 'SA-PDT change release')).rows.forEach((row) => { const id = headerValue(row, 'Concept Identifier'); if (id) changes.set(id, headerValue(row, 'Change Type')); });
    concepts.forEach((concept) => { concept.sapdt_change_type = changes.get(concept.concept_id) || ''; });
  }
  return { concepts: [...concepts.values()], descriptions, warnings: [] };
}

async function readRf2(source) {
  const conceptFile = sourceItem(source, 'Concept RF2');
  const descriptionFile = sourceItem(source, 'Description RF2');
  const languageFile = sourceItem(source, 'Language refset RF2');
  const relationshipFile = sourceItem(source, 'Relationship RF2');
  const associationFile = sourceItem(source, 'Association refset RF2');
  const concepts = new Map();
  const descriptions = [];
  const descriptionsByConcept = new Map();
  const acceptability = new Map();
  const replacementByConcept = new Map();
  if (languageFile) {
    const languageRows = (await parseTsv(await readFile(languageFile.file, `${source} Language Refset`), `${source} Language Refset`)).rows;
    await processRows(languageRows, `${source} Language Refset`, (row) => {
      const id = headerValue(row, 'referencedComponentId');
      if (id) acceptability.set(id, headerValue(row, 'acceptabilityId'));
    });
  }
  if (conceptFile) {
    const conceptRows = (await parseTsv(await readFile(conceptFile.file, `${source} Concept`), `${source} Concept`)).rows;
    await processRows(conceptRows, `${source} Concept`, (row) => {
      const id = headerValue(row, 'id');
      if (!id) return;
      concepts.set(id, { concept_id: id, active: headerValue(row, 'active') === '1' ? 'Yes' : 'No', module_id: headerValue(row, 'moduleId'), definition_status_id: headerValue(row, 'definitionStatusId'), source_file: conceptFile.path });
    });
  }
  if (descriptionFile) {
    const descriptionRows = (await parseTsv(await readFile(descriptionFile.file, `${source} Description`), `${source} Description`)).rows;
    await processRows(descriptionRows, `${source} Description records`, (row) => {
      const conceptId = headerValue(row, 'conceptId');
      const descriptionId = headerValue(row, 'id');
      if (!conceptId || !descriptionId) return;
      if (!concepts.has(conceptId)) concepts.set(conceptId, { concept_id: conceptId, active: headerValue(row, 'active') === '1' ? 'Yes' : 'No', module_id: headerValue(row, 'moduleId'), definition_status_id: '', source_file: descriptionFile.path, source_concept_missing: true });
      const typeId = headerValue(row, 'typeId');
      const acceptabilityId = acceptability.get(descriptionId) || '';
      const type = typeId === FSN_TYPE ? 'FSN' : typeId === SYNONYM_TYPE ? 'Synonym' : 'Description';
      const designation = acceptabilityId === PREFERRED_ACCEPTABILITY ? 'Preferred' : acceptabilityId === ACCEPTABLE_ACCEPTABILITY ? 'Acceptable' : '';
      const description = { description_key: `${source}:${descriptionId}`, source, concept_id: conceptId, description_id: descriptionId, term: headerValue(row, 'term'), description_type: type, designation, active: headerValue(row, 'active') === '1' ? 'Yes' : 'No', module_id: headerValue(row, 'moduleId'), semantic_type: type === 'FSN' ? (headerValue(row, 'term').match(/\(([^()]+)\)\s*$/) || [])[1] || '' : '', source_file: descriptionFile.path };
      descriptions.push(description);
      if (!descriptionsByConcept.has(conceptId)) descriptionsByConcept.set(conceptId, []);
      descriptionsByConcept.get(conceptId).push(description);
    });
  }
  if (relationshipFile) {
    const parentByConcept = new Map();
    const relationshipRows = (await parseTsv(await readFile(relationshipFile.file, `${source} Relationship`), `${source} Relationship`)).rows;
    await processRows(relationshipRows, `${source} Relationship`, (row) => {
      if (headerValue(row, 'active') !== '1' || headerValue(row, 'typeId') !== IS_A_TYPE) return;
      const child = headerValue(row, 'sourceId');
      const parent = headerValue(row, 'destinationId');
      if (!child || !parent) return;
      if (!parentByConcept.has(child)) parentByConcept.set(child, []);
      parentByConcept.get(child).push(parent);
    });
    parentByConcept.forEach((parents, conceptId) => { if (concepts.has(conceptId)) concepts.get(conceptId).parent_concepts = [...new Set(parents)].map((id) => `| ${id}`).join(' ') + ' |'; });
  }
  if (associationFile) {
    const associationRows = (await parseTsv(await readFile(associationFile.file, `${source} Association`), `${source} Association`)).rows;
    await processRows(associationRows, `${source} Association`, (row) => {
      if (headerValue(row, 'active') !== '1') return;
      const oldId = headerValue(row, 'referencedComponentId');
      const replacement = headerValue(row, 'targetComponentId') || headerValue(row, 'valueId');
      if (oldId && replacement) replacementByConcept.set(oldId, replacement);
    });
  }
  concepts.forEach((concept, conceptId) => {
    const rows = descriptionsByConcept.get(conceptId) || [];
    const fsn = rows.find((row) => row.description_type === 'FSN');
    const preferred = rows.find((row) => row.designation === 'Preferred');
    const synonyms = rows.filter((row) => row.description_type === 'Synonym' && row.designation !== 'Preferred').map((row) => row.term).filter(Boolean);
    concept.fsn = fsn?.term || '';
    concept.preferred_term = preferred?.term || '';
    concept.all_synonyms = synonyms.join(' | ');
    concept.semantic_type = fsn?.semantic_type || '';
    concept.parent_concepts = concept.parent_concepts || '';
    concept.replacement_concept_id = replacementByConcept.get(conceptId) || '';
  });
  return { concepts, descriptions };
}

function mergeConcepts(saConcepts, vsct, sct) {
  const sapdtById = new Map(saConcepts.map((concept) => [concept.concept_id, concept]));
  const descriptionCounts = new Map();
  [...vsct.descriptions, ...sct.descriptions].forEach((description) => descriptionCounts.set(description.concept_id, (descriptionCounts.get(description.concept_id) || 0) + 1));
  const allIds = new Set([...sapdtById.keys(), ...vsct.concepts.keys()]);
  return [...allIds].map((conceptId) => {
    const sapdt = sapdtById.get(conceptId);
    const vs = vsct.concepts.get(conceptId);
    const intl = sct.concepts.get(conceptId);
    const snomed = { concept_id: vs?.concept_id || intl?.concept_id || '', fsn: vs?.fsn || intl?.fsn || '', preferred_term: vs?.preferred_term || intl?.preferred_term || '', all_synonyms: vs?.all_synonyms || intl?.all_synonyms || '', active: vs?.active || intl?.active || '', module_id: vs?.module_id || intl?.module_id || '', semantic_type: vs?.semantic_type || intl?.semantic_type || '', definition_status_id: vs?.definition_status_id || intl?.definition_status_id || '', parent_concepts: vs?.parent_concepts || intl?.parent_concepts || '', replacement_concept_id: vs?.replacement_concept_id || intl?.replacement_concept_id || '' };
    const mergedDisplayName = sapdt?.display_name || snomed.preferred_term || snomed.fsn || conceptId;
    return { ...(sapdt || { concept_key: `SNOMED:${conceptId}`, concept_id: conceptId, display_name: mergedDisplayName, in_sapdt: 'No', record_status: snomed?.active === 'Yes' ? 'active' : 'inactive', sapdt_status: '', sapdt_change_type: '', description_count: 0, source_release: snomed?.source_file || '' }), display_name: mergedDisplayName, in_vsct: vs ? 'Yes' : 'No', in_sct_int: intl ? 'Yes' : 'No', vsct_active: vs?.active || '', vsct_module_id: vs?.module_id || '', vsct_definition_status_id: vs?.definition_status_id || '', sct_int_active: intl?.active || '', sct_int_module_id: intl?.module_id || '', sct_int_definition_status_id: intl?.definition_status_id || '', snomed_concept_id: snomed?.concept_id || '', snomed_fsn: snomed?.fsn || '', snomed_preferred_term: snomed?.preferred_term || '', snomed_all_synonyms: snomed?.all_synonyms || '', snomed_active: snomed?.active || '', snomed_module: snomed?.module_id || '', snomed_semantic_type: snomed?.semantic_type || '', snomed_definition_status: snomed?.definition_status_id || '', snomed_parent_concepts: snomed?.parent_concepts || '', snomed_concept_count: snomed ? 1 : 0, all_snomed_concept_ids: snomed?.concept_id || '', replacement_concept_id: snomed?.replacement_concept_id || '', description_count: (sapdt?.description_count || 0) + (descriptionCounts.get(conceptId) || 0) };
  });
}
function mergeDescriptions(sa, vsct, sct, concepts) {
  const ids = new Set(concepts.map((concept) => concept.concept_id));
  return [...sa, ...vsct.descriptions, ...sct.descriptions].filter((description) => ids.has(description.concept_id));
}
async function loadExistingDatabase() {
  const stored = await dbGetAll('concepts');
  if (stored.length) return stored;
  const csvFile = state.discovered.find((item) => item.source === 'Existing database' && /\.csv$/i.test(item.file.name));
  if (!csvFile) return [];
  const parsed = parseCsv(await readFile(csvFile.file, 'existing database'));
  return parsed.rows.map((row) => ({ ...row, concept_key: row.concept_key || `SA-PDT:${row.concept_id}` }));
}
function parseCsv(text) {
  const rows = []; let row = []; let cell = ''; let quoted = false;
  for (let i = 0; i < text.length; i += 1) { const char = text[i]; const next = text[i + 1]; if (char === '"' && quoted && next === '"') { cell += '"'; i += 1; } else if (char === '"') quoted = !quoted; else if (char === ',' && !quoted) { row.push(cell); cell = ''; } else if ((char === '\n' || char === '\r') && !quoted) { if (char === '\r' && next === '\n') i += 1; row.push(cell); if (row.some((value) => value !== '')) rows.push(row); row = []; cell = ''; } else cell += char; }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const headers = rows.shift() || []; return { rows: rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] || '']))) };
}
async function importSources() {
  setStatus('กำลัง import source และอัปเดต local master…', 'neutral'); $('scanButton').disabled = true; $('scanButton').textContent = 'กำลังทำงาน…';
  try {
    identifyFiles();
    state.progress = { total: state.discovered.filter((item) => ['full release TXT', 'change release TXT', 'Concept RF2', 'Description RF2', 'Language refset RF2', 'prior database/export'].includes(item.role)).length, done: 0 };
    updateProgress('กำลังเตรียมอ่าน source files', `${state.progress.total} files`);
    const sa = await readSaPdt();
    const vsct = await readRf2('VSCT');
    const sct = await readRf2('SCT International');
    state.sourceIds.VSCT = new Set(vsct.concepts.keys()); state.sourceIds['SCT International'] = new Set(sct.concepts.keys());
    const previous = await loadExistingDatabase();
    const previousMap = new Map(previous.map((row) => [row.concept_key || `SA-PDT:${row.concept_id}`, row]));
    state.concepts = mergeConcepts(sa.concepts, vsct, sct).map((concept) => ({ ...previousMap.get(concept.concept_key), ...concept, display_name: previousMap.get(concept.concept_key)?.display_name || concept.display_name, updated_at: new Date().toISOString(), created_at: previousMap.get(concept.concept_key)?.created_at || new Date().toISOString() }));
    state.descriptions = mergeDescriptions(sa.descriptions, vsct, sct, state.concepts);
    state.synonym_aliases = await dbGetAll('synonym_alias');
    await dbReplace('concepts', state.concepts); await dbReplace('descriptions', state.descriptions);
    const importRecord = { import_id: crypto.randomUUID(), mode: previous.length ? 'update_existing_database' : 'initial_build', imported_at: new Date().toISOString(), concept_count: state.concepts.length, description_count: state.descriptions.length, discovered_file_count: state.discovered.length };
    await dbReplace('imports', [importRecord, ...(await dbGetAll('imports')).slice(0, 49)]);
    state.report = createReport(sa.warnings, previous.length, vsct, sct);
    renderAll();
    setStatus(`นำเข้าสำเร็จ: ${state.concepts.length.toLocaleString()} concepts · ${state.descriptions.length.toLocaleString()} descriptions · บันทึกใน IndexedDB แล้ว`, 'success');
    state.progress.done = state.progress.total;
    updateProgress('ทำงานเสร็จแล้ว', 'บันทึกข้อมูลลง IndexedDB เรียบร้อย', state.progress.total);
  } catch (error) { setStatus(`เกิดข้อผิดพลาด: ${error.message}`, 'error'); updateProgress('หยุดทำงานเนื่องจากข้อผิดพลาด', error.message); } finally { $('scanButton').disabled = false; $('scanButton').textContent = 'Scan sources'; }
}
function formatDateTime(value) {
  const date = value ? new Date(value) : new Date();
  const pad = (part) => String(part).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}
const MAIN_MASTER_COLUMNS = ['display_name', 'in_sapdt', 'in_vsct', 'in_sct_inter', 'sapdt_concept_id', 'sapdt_status', 'sapdt_change_type', 'sapdt_description_id', 'sapdt_fsn', 'sapdt_preferred', 'sapdt_acceptable', 'synonym', 'sapdt_semantic_type', 'snomed_concept_id', 'snomed_fsn', 'snomed_preferred_term', 'snomed_all_synonyms', 'snomed_active', 'snomed_module', 'snomed_semantic_type', 'snomed_definition_status', 'snomed_parent_concepts', 'match_type', 'concept_count', 'all_snomed_concept_ids', 'replacement_concept_id', 'match_confidence', 'updated_at', 'updated_by', 'created_at'];
function exportTerminologyMaster() {
  const aliasesByConcept = new Map();
  state.synonym_aliases.filter((alias) => alias.status === 'approved' && alias.is_searchable !== false).forEach((alias) => {
    if (!aliasesByConcept.has(alias.concept_id)) aliasesByConcept.set(alias.concept_id, []);
    aliasesByConcept.get(alias.concept_id).push(alias.alias_text);
  });
  const conceptById = new Map(state.concepts.map((concept) => [concept.concept_id, concept]));
  const sapdtConceptIds = new Set(state.descriptions.filter((description) => description.source === 'SA-PDT').map((description) => description.concept_id));
  const sourceRows = state.descriptions.filter((description) => description.source === 'SA-PDT' || (description.source === 'VSCT' && !sapdtConceptIds.has(description.concept_id)));
  const rows = sourceRows.map((description) => {
    const concept = conceptById.get(description.concept_id) || {};
    const aliases = aliasesByConcept.get(description.concept_id) || [];
    const isSapdt = description.source === 'SA-PDT';
    const rowTerm = description.term || '';
    const synonym = [...new Set([isSapdt ? description.designation === 'Acceptable' ? rowTerm : '' : rowTerm, concept.synonym, ...aliases].filter(Boolean))].join(' | ');
    return {
      display_name: concept.display_name || rowTerm,
      in_sapdt: isSapdt ? 'Yes' : 'No',
      in_vsct: concept.in_vsct || 'No',
      in_sct_inter: concept.in_sct_int || 'No',
      sapdt_concept_id: isSapdt ? description.concept_id : '',
      sapdt_status: isSapdt ? concept.sapdt_status || description.active : '',
      sapdt_change_type: isSapdt ? concept.sapdt_change_type || '' : '',
      sapdt_description_id: isSapdt ? description.description_id : '',
      sapdt_fsn: isSapdt ? concept.sapdt_fsn || '' : '',
      sapdt_preferred: isSapdt ? description.designation === 'Preferred' ? rowTerm : concept.sapdt_preferred || '' : '',
      sapdt_acceptable: isSapdt ? description.designation === 'Acceptable' ? rowTerm : concept.sapdt_acceptable || '' : '',
      synonym,
      sapdt_semantic_type: isSapdt ? concept.sapdt_semantic_type || '' : '',
      snomed_concept_id: concept.snomed_concept_id || '',
      snomed_fsn: concept.snomed_fsn || '',
      snomed_preferred_term: description.source === 'VSCT' && description.designation === 'Preferred' ? rowTerm : concept.snomed_preferred_term || '',
      snomed_all_synonyms: description.source === 'VSCT' && description.description_type === 'Synonym' ? rowTerm : concept.snomed_all_synonyms || '',
      snomed_active: concept.snomed_active || '',
      snomed_module: concept.snomed_module || '',
      snomed_semantic_type: concept.snomed_semantic_type || '',
      snomed_definition_status: concept.snomed_definition_status || '',
      snomed_parent_concepts: concept.snomed_parent_concepts || '',
      match_type: concept.snomed_concept_id ? 'Concept ID match' : 'No match',
      concept_count: concept.snomed_concept_count || (concept.snomed_concept_id ? 1 : 0),
      all_snomed_concept_ids: concept.all_snomed_concept_ids || '',
      replacement_concept_id: concept.replacement_concept_id || '',
      match_confidence: concept.snomed_concept_id ? 'Exact' : 'None',
      updated_at: formatDateTime(concept.updated_at),
      updated_by: concept.updated_by || 'system',
      created_at: formatDateTime(concept.created_at)
    };
  });
  downloadCsv('terminology_master_30cols.csv', rows, MAIN_MASTER_COLUMNS);
}
function reportToText(report) {
  const lines = [];
  const add = (label, value) => lines.push(`${String(label).padEnd(42)}: ${value ?? ''}`);
  lines.push('KAHIS TERMINOLOGY MASTER - DETAILED IMPORT REPORT');
  lines.push('=================================================');
  add('Generated at', report.generated_at);
  add('Application', report.application);
  add('Mode', report.mode);
  lines.push('');
  lines.push('1. EXECUTIVE SUMMARY');
  lines.push('---------------------');
  add('Master output file', 'terminology_master_30cols.csv');
  add('Master row count', report.master_row_count);
  add('Master column count', 30);
  add('SA-PDT description rows', report.sapdt_description_count);
  add('VSCT-only description rows', report.vsct_only_description_count);
  add('SCT-only rows appended', report.sct_only_concept_count);
  add('Total imported descriptions in local database', report.description_count);
  lines.push('');
  lines.push('2. SOURCE PRIORITY AND MASTER LOGIC');
  lines.push('-----------------------------------');
  lines.push('1) SA-PDT is the base dataset and all SA-PDT Description rows are retained.');
  lines.push('2) VSCT is used before SCT International for SNOMED enrichment.');
  lines.push('3) VSCT Description rows are appended only when their Concept is absent from SA-PDT.');
  lines.push('4) SCT International is used as a field-level fallback for an existing SA-PDT or VSCT Concept.');
  lines.push('5) SCT-only Concepts are not appended as new Master rows.');
  lines.push('6) The Master grain is one row per Description, not one row per Concept.');
  add('Source priority', report.source_priority.join(' > '));
  add('Inclusion rule', report.master_inclusion_rule);
  lines.push('');
  lines.push('3. SOURCE FILES USED');
  lines.push('--------------------');
  add('Discovered file count', report.discovered_file_count);
  Object.entries(report.discovered_roles).forEach(([role, count]) => add(`Role - ${role}`, count));
  report.discovered_files.forEach((file, index) => lines.push(`${index + 1}. [${file.source}] ${file.role} | ${file.size} bytes | ${file.path}`));
  lines.push('');
  lines.push('4. RF2 FULL VS SNAPSHOT');
  lines.push('-----------------------');
  lines.push('Full release contains the historical rows for components across releases.');
  lines.push('A component can appear multiple times in Full with different effectiveTime values and active states.');
  lines.push('Snapshot contains the latest effective state for each component at the release date.');
  lines.push('Snapshot is the correct input for the operational Master and current terminology lookup.');
  lines.push('Full is retained for history, audit, release comparison, and reconstructing changes; it must not be merged directly with Snapshot.');
  lines.push('The current importer selects Snapshot Concept, Description, Relationship, Language refset, and Association refset files.');
  lines.push('');
  lines.push('5. SOURCE COUNTS');
  lines.push('----------------');
  add('SA-PDT Concepts', report.sapdt_concept_count);
  add('SA-PDT Descriptions', report.sapdt_description_count);
  add('VSCT Concepts', report.vsct_concept_count);
  add('VSCT-only Concepts', report.vsct_only_concept_count);
  add('VSCT-only Descriptions', report.vsct_only_description_count);
  add('SCT International Concepts', report.sct_int_concept_count);
  add('SCT-only Concepts appended', report.sct_only_concept_count);
  add('Approved synonym aliases', report.alias_count);
  lines.push('');
  lines.push('6. FIELD MAPPING LOGIC');
  lines.push('-----------------------');
  lines.push('display_name: SA-PDT preferred term, then first SA-PDT term, then VSCT preferred/FSN, then SCT International, then Concept ID.');
  lines.push('sapdt_* fields: populated from the current SA-PDT Description or Concept data; blank for VSCT-only rows where no SA-PDT exists.');
  lines.push('snomed_* fields: populated from VSCT first, then filled field-by-field from SCT International when VSCT has no value.');
  lines.push('match_type: Concept ID match when a SNOMED Concept ID is available; otherwise No match.');
  lines.push('match_confidence: Exact for Concept ID match; None when no SNOMED ID is available.');
  lines.push('synonym: current row term plus source synonyms and approved searchable synonym_alias values.');
  lines.push('');
  lines.push('7. FUTURE RELEASE UPDATE PROCEDURE');
  lines.push('-----------------------------------');
  lines.push('1) Store the new release in a separate dated directory; never overwrite the previous release.');
  lines.push('2) Select the new Snapshot directory for operational import.');
  lines.push('3) Keep the matching Full directory for history and audit, but do not load both into one import.');
  lines.push('4) Verify release date, module ID, language, and file role before scanning.');
  lines.push('5) Export the previous Master and this report before updating.');
  lines.push('6) Clear/rebuild the Local Master when changing release families; use update mode only for the same logical database.');
  lines.push('7) Compare row counts, Description IDs, Concept IDs, active states, retired/replacement mappings, and warnings.');
  lines.push('8) Keep the new Master, detail export, report, Snapshot, and Full release together as one release package.');
  lines.push('');
  lines.push('8. VALIDATION AND WARNINGS');
  lines.push('--------------------------');
  add('Warnings count', report.warnings.length);
  report.warnings.forEach((warning, index) => lines.push(`${index + 1}. ${warning}`));
  lines.push('');
  lines.push('END OF REPORT');
  return lines.join('\n');
}
function createReport(warnings, hadPrevious, vsct, sct) {
  const roles = state.discovered.reduce((result, item) => { result[item.role] = (result[item.role] || 0) + 1; return result; }, {});
  const sapdtConceptCount = state.concepts.filter((row) => row.in_sapdt === 'Yes').length;
  const vsctOnlyConceptCount = state.concepts.filter((row) => row.in_sapdt !== 'Yes' && row.in_vsct === 'Yes').length;
  const sapdtDescriptionCount = state.descriptions.filter((description) => description.source === 'SA-PDT').length;
  const sapdtDescriptionConceptIds = new Set(state.descriptions.filter((description) => description.source === 'SA-PDT').map((description) => description.concept_id));
  const vsctOnlyDescriptionCount = state.descriptions.filter((description) => description.source === 'VSCT' && !sapdtDescriptionConceptIds.has(description.concept_id)).length;
  const discoveredFiles = state.discovered.map((item) => ({ source: item.source, role: item.role, path: item.path, size: item.file.size }));
  return { application: 'KAHIS_terminology_master', schema_version: 1, mode: hadPrevious ? 'update_existing_database' : 'initial_build', generated_at: new Date().toISOString(), discovered_file_count: state.discovered.length, discovered_roles: roles, discovered_files: discoveredFiles, master_row_count: sapdtDescriptionCount + vsctOnlyDescriptionCount, sapdt_concept_count: sapdtConceptCount, vsct_only_concept_count: vsctOnlyConceptCount, sct_only_concept_count: 0, sapdt_description_count: sapdtDescriptionCount, vsct_only_description_count: vsctOnlyDescriptionCount, description_count: state.descriptions.length, vsct_concept_count: vsct.concepts.size, sct_int_concept_count: sct.concepts.size, alias_count: state.synonym_aliases.length, source_priority: ['SA-PDT', 'VSCT', 'SCT International'], master_inclusion_rule: 'SA-PDT descriptions plus VSCT-only descriptions; SCT-only descriptions excluded', warnings: [...warnings, ...(!sourceItem('VSCT', 'Description RF2') ? ['ไม่พบ VSCT Description RF2'] : []), ...(!sourceItem('SCT International', 'Description RF2') ? ['ไม่พบ SCT International Description RF2'] : [])] };
}
function renderAll() { renderDiscovery(); renderPreview(); renderAliases(); renderReport(); $('exportDescriptions').disabled = !state.descriptions.length; $('exportConcepts').disabled = !state.concepts.length; $('exportReport').disabled = !state.report; }
async function saveSynonymAlias() {
  const conceptId = $('aliasConceptId').value.trim();
  const aliasText = $('aliasText').value.trim();
  if (!conceptId || !aliasText) { setStatus('กรุณาระบุ Concept ID และคำพ้องก่อนบันทึก', 'warning'); return; }
  const alias = { alias_id: crypto.randomUUID(), concept_id: conceptId, alias_text: aliasText, alias_type: $('aliasType').value, status: 'approved', is_searchable: true, managed_by: 'admin', created_at: new Date().toISOString() };
  state.synonym_aliases.push(alias);
  const db = await openDb();
  await new Promise((resolve, reject) => { const tx = db.transaction('synonym_alias', 'readwrite'); tx.objectStore('synonym_alias').put(alias); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); });
  $('aliasConceptId').value = ''; $('aliasText').value = ''; renderAliases(); setStatus(`บันทึก synonym_alias แล้ว: ${aliasText}`, 'success');
}
function renderAliases() {
  const rows = state.synonym_aliases.map((alias) => `<tr><td>${esc(alias.concept_id)}</td><td>${esc(alias.alias_text)}</td><td>${esc(alias.alias_type)}</td><td>${esc(alias.status)}</td><td>${esc(alias.managed_by)}</td></tr>`).join('');
  $('aliasTable').className = 'table-wrap'; $('aliasTable').innerHTML = rows ? `<table><thead><tr><th>Concept ID</th><th>Alias</th><th>Type</th><th>Status</th><th>Managed by</th></tr></thead><tbody>${rows}</tbody></table>` : '<div class="empty-state">ยังไม่มี synonym_alias</div>';
}
function renderDiscovery() {
  const rows = state.discovered.map((item) => `<tr><td>${esc(item.source)}</td><td>${esc(item.role)}</td><td>${esc(item.path)}</td><td>${item.file.size.toLocaleString()} bytes</td></tr>`).join('');
  $('fileTable').className = 'table-wrap'; $('fileTable').innerHTML = rows ? `<table><thead><tr><th>Source</th><th>Role</th><th>Path</th><th>Size</th></tr></thead><tbody>${rows}</tbody></table>` : '<div class="empty-state">ไม่พบไฟล์ตาม pattern</div>';
  $('modeBadge').textContent = state.files.database.length ? 'UPDATE EXISTING' : 'LOCAL MASTER'; $('sapdtConceptCount').textContent = state.concepts.filter((row) => row.in_sapdt === 'Yes').length.toLocaleString(); $('sapdtDescriptionCount').textContent = state.descriptions.filter((row) => row.source === 'SA-PDT').length.toLocaleString(); $('vsctFileCount').textContent = state.discovered.filter((item) => item.source === 'VSCT').length.toLocaleString(); $('sctFileCount').textContent = state.discovered.filter((item) => item.source === 'SCT International').length.toLocaleString(); $('databaseState').textContent = state.files.database.length || state.concepts.length ? 'READY' : 'NEW';
}
function renderPreview() {
  const rows = state.descriptions.slice(0, 40).map((row) => `<tr><td>${esc(row.source)}</td><td>${esc(row.concept_id)}</td><td>${esc(row.description_id)}</td><td>${esc(row.term)}</td><td>${esc(row.description_type)}</td><td>${esc(row.designation)}</td><td>${esc(row.active)}</td></tr>`).join('');
  $('previewTable').className = 'table-wrap'; $('previewTable').innerHTML = rows ? `<table><thead><tr><th>Source</th><th>Concept ID</th><th>Description ID</th><th>Term</th><th>Type</th><th>Designation</th><th>Active</th></tr></thead><tbody>${rows}</tbody></table>` : '<div class="empty-state">ยังไม่มีข้อมูล preview</div>';
}
function renderReport() { $('reportOutput').textContent = state.report ? reportToText(state.report) : 'ยังไม่มีผลการตรวจสอบ'; }
function downloadCsv(filename, rows, columns) { const content = [columns.join(','), ...rows.map((row) => columns.map((column) => csvCell(row[column])).join(','))].join('\n'); downloadFile(filename, `\uFEFF${content}`, 'text/csv;charset=utf-8'); }
function downloadFile(filename, content, type) { const blob = new Blob([content], { type }); const url = URL.createObjectURL(blob); const anchor = document.createElement('a'); anchor.href = url; anchor.download = filename; anchor.click(); setTimeout(() => URL.revokeObjectURL(url), 500); }
