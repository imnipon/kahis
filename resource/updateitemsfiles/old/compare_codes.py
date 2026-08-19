import csv, openpyxl

codes = []
with open(r'resource/original/items_export_enabled_AT_20260817.csv', encoding='utf-8-sig', newline='') as f:
    reader = csv.DictReader(f)
    for row in reader:
        code = row['Item Code(รหัส)'].strip().lstrip("'").strip()
        codes.append(code)
print(f'Total master codes: {len(codes)}')
print('First 10:', codes[:10])
print('Last 5:', codes[-5:])

wb = openpyxl.load_workbook(r'resource/original/order_tx-2026-07-24.xlsx', read_only=True)
ws = wb['ยาฉีด']
rows = list(ws.iter_rows(values_only=True))
xls_codes = [str(r[3]).strip() for r in rows[1:6] if r[3] is not None]
print('XLS codes sample:', xls_codes)
