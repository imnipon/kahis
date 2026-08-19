import csv, openpyxl

master_codes = set()
with open(r'resource/original/items_export_enabled_AT_20260817.csv', encoding='utf-8-sig', newline='') as f:
    reader = csv.DictReader(f)
    for row in reader:
        code = row['Item Code(รหัส)'].strip().lstrip("'").strip()
        if code:
            master_codes.add(code)

# Try padding XLS codes to 12 digits
wb = openpyxl.load_workbook(r'resource/original/order_tx-2026-07-24.xlsx', read_only=True)
ws = wb['ยาฉีด']
rows = list(ws.iter_rows(values_only=True))
found = 0
for r in rows[1:10]:
    if r[3] is None:
        continue
    raw = str(int(r[3]))
    padded = raw.zfill(12)
    in_master = padded in master_codes
    print(f"  raw={raw}  padded={padded}  in_master={in_master}")
    if in_master:
        found += 1
print(f"Found {found}/9 in master using zfill(12)")
