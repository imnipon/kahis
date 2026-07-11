import os
import json
from datetime import datetime

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(BASE_DIR)
ASSESSMENT_DIR = os.path.join(BASE_DIR, 'assessment')
LIST_FILE = os.path.join(BASE_DIR, 'list.js')
FILES_FILE = os.path.join(BASE_DIR, 'files.js')

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


def get_last_update(path):
    if not os.path.isfile(path):
        return None
    return datetime.fromtimestamp(os.path.getmtime(path)).isoformat()


def build_tree(path, include_filter=None):
    if not os.path.isdir(path):
        return None
    children = []
    for name in sorted(os.listdir(path)):
        if name.startswith('.'):
            continue
        full_path = os.path.join(path, name)
        rel_path = os.path.relpath(full_path, ROOT_DIR).replace('\\', '/')
        if os.path.isdir(full_path):
            subtree = build_tree(full_path, include_filter)
            if subtree:
                children.append({
                    'name': name,
                    'type': 'folder',
                    'path': rel_path,
                    'children': subtree,
                })
        else:
            if include_filter and not include_filter(name):
                continue
            node = {
                'name': name,
                'type': 'file',
                'path': rel_path,
            }
            if name.endswith('.html'):
                node['lastUpdate'] = get_last_update(full_path)
            children.append(node)
    return children


def main():
    files_tree = []
    resource_dir = os.path.join(ROOT_DIR, 'resource')
    np_dir = os.path.join(ROOT_DIR, 'NP')

    if os.path.isdir(resource_dir):
        resource_children = build_tree(resource_dir)
        if resource_children:
            files_tree.append({
                'name': 'resource',
                'type': 'folder',
                'path': 'resource',
                'children': resource_children,
            })

    if os.path.isdir(np_dir):
        np_children = build_tree(np_dir, lambda name: name.endswith('.html'))
        if np_children:
            files_tree.append({
                'name': 'NP',
                'type': 'folder',
                'path': 'NP',
                'children': np_children,
            })

    with open(FILES_FILE, 'w', encoding='utf-8') as f:
        f.write('const filesTree = ' + json.dumps(files_tree, indent=2, ensure_ascii=False) + ';\n')

    files = []
    if os.path.isdir(ASSESSMENT_DIR):
        for filename in sorted(os.listdir(ASSESSMENT_DIR)):
            if filename.endswith('.html'):
                name = filename[:-5]
                path = os.path.join(ASSESSMENT_DIR, filename)
                dt = get_last_update(path)
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

    print(f'Generated {FILES_FILE} and {LIST_FILE} with {len(files)} assessment files.')


if __name__ == '__main__':
    main()
