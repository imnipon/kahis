import os
from datetime import datetime

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ASSESSMENT_DIR = os.path.join(BASE_DIR, 'assessment')
LIST_FILE = os.path.join(BASE_DIR, 'list.js')

TITLE_MAP = {
    'assessment_editor': 'Assessment Editor',
    'checkin-form': 'Check-in Form',
    'drug-prescription-detail': 'Drug Prescription Detail',
    'index': 'Assessment Home',
    'lab-editor': 'Lab Editor',
    'list-of-visit': 'List of Visit',
    'order-rx': 'Order Rx',
    'order-slip-lab': 'Order Slip Lab',
    'order-slip-rx': 'Order Slip Rx',
    'search-hn': 'Search HN',
}


def generate_title(name):
    if name in TITLE_MAP:
        return TITLE_MAP[name]
    return name.replace('-', ' ').replace('_', ' ').title()


def main():
    files = []
    if os.path.isdir(ASSESSMENT_DIR):
        for filename in sorted(os.listdir(ASSESSMENT_DIR)):
            if filename.endswith('.html'):
                name = filename[:-5]
                path = os.path.join(ASSESSMENT_DIR, filename)
                mtime = os.path.getmtime(path)
                dt = datetime.fromtimestamp(mtime).isoformat()
                files.append({
                    'title': generate_title(name),
                    'file': f'NP/assessment/{filename}',
                    'lastUpdate': dt,
                })

    with open(LIST_FILE, 'w', encoding='utf-8') as f:
        f.write('const assessmentFiles = [\n')
        for item in files:
            f.write(
                f'  {{ title: "{item["title"]}", file: "{item["file"]}", lastUpdate: "{item["lastUpdate"]}" }},\n'
            )
        f.write('];\n')

    print(f'Generated {LIST_FILE} with {len(files)} files.')


if __name__ == '__main__':
    main()
