import os
import json

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(ROOT_DIR, 'src')
MAPPING_FILE = os.path.join(SRC_DIR, 'data', 'cloudinaryImages.json')

def load_mapping():
    if not os.path.exists(MAPPING_FILE):
        raise FileNotFoundError(f"Mapping file not found: {MAPPING_FILE}")
    with open(MAPPING_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def replace_in_file(filepath, mapping):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    changes = 0

    # Sort keys by length descending to avoid partial prefix collisions
    sorted_keys = sorted(mapping.keys(), key=lambda k: len(k), reverse=True)

    for local_path in sorted_keys:
        cdn_url = mapping[local_path]
        if not cdn_url:
            continue
        
        # Replace occurrences of local_path (e.g. "/images/product-mustard-oil.jpg" or "/logo.png")
        if local_path in content:
            count = content.count(local_path)
            content = content.replace(local_path, cdn_url)
            changes += count
            print(f"  [{os.path.relpath(filepath, ROOT_DIR)}] Replaced {local_path} ({count}x) -> {cdn_url}")

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return changes
    return 0

def main():
    mapping = load_mapping()
    print(f"Loaded {len(mapping)} images from {MAPPING_FILE}")

    # Directories/files to scan
    target_extensions = ('.js', '.jsx', '.html', '.css', '.json')
    total_replaced = 0
    modified_files = 0

    # Process src/
    for root, dirs, files in os.walk(SRC_DIR):
        for file in files:
            # Don't modify cloudinaryImages.* itself
            if file.startswith('cloudinaryImages.'):
                continue
            if file.endswith(target_extensions):
                filepath = os.path.join(root, file)
                count = replace_in_file(filepath, mapping)
                if count > 0:
                    total_replaced += count
                    modified_files += 1

    # Process index.html
    index_html = os.path.join(ROOT_DIR, 'index.html')
    if os.path.exists(index_html):
        count = replace_in_file(index_html, mapping)
        if count > 0:
            total_replaced += count
            modified_files += 1

    print(f"\nDone! Made {total_replaced} replacements across {modified_files} files.")

if __name__ == '__main__':
    main()
