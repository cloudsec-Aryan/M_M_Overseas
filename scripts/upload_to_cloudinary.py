import hashlib
import json
import os
import subprocess
import time

CLOUD_NAME = "dukbkeh4p"
API_KEY = "763794494714531"
API_SECRET = "N5n5ZY19_6pjQ9XJOYlMej6De5M"
FOLDER = "mm-overseas"

PUBLIC_DIR = os.path.join(os.path.dirname(__file__), "..", "public")
IMAGES_DIR = os.path.join(PUBLIC_DIR, "images")
OUT_JSON = os.path.join(os.path.dirname(__file__), "..", "src", "data", "cloudinaryImages.json")
OUT_JS = os.path.join(os.path.dirname(__file__), "..", "src", "data", "cloudinaryImages.js")

def upload_file_curl(file_path, public_id):
    timestamp = str(int(time.time()))
    to_sign = f"folder={FOLDER}&public_id={public_id}&timestamp={timestamp}{API_SECRET}"
    signature = hashlib.sha1(to_sign.encode("utf-8")).hexdigest()

    url = f"https://api.cloudinary.com/v1_1/{CLOUD_NAME}/image/upload"

    cmd = [
        "curl", "-s", "--max-time", "120", "--retry", "2",
        "-X", "POST", url,
        "-F", f"file=@{file_path}",
        "-F", f"api_key={API_KEY}",
        "-F", f"timestamp={timestamp}",
        "-F", f"folder={FOLDER}",
        "-F", f"public_id={public_id}",
        "-F", f"signature={signature}"
    ]

    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        raise Exception(f"curl exit code {res.returncode}: {res.stderr}")

    data = json.loads(res.stdout)
    if "secure_url" in data:
        return data["secure_url"]
    else:
        raise Exception(f"Cloudinary error: {data.get('error', {}).get('message', res.stdout)}")

def main():
    mapping = {}

    if os.path.exists(OUT_JSON):
        try:
            with open(OUT_JSON, "r") as f:
                mapping = json.load(f)
        except Exception:
            mapping = {}

    files_to_upload = []

    logo_path = os.path.join(PUBLIC_DIR, "logo.png")
    if os.path.exists(logo_path):
        files_to_upload.append(("/logo.png", logo_path, "logo"))

    favicon_src_path = os.path.join(PUBLIC_DIR, "favicon-source.png")
    if os.path.exists(favicon_src_path):
        files_to_upload.append(("/favicon-source.png", favicon_src_path, "favicon-source"))

    if os.path.exists(IMAGES_DIR):
        for fname in sorted(os.listdir(IMAGES_DIR)):
            if fname.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
                fpath = os.path.join(IMAGES_DIR, fname)
                pub_id = os.path.splitext(fname)[0]
                files_to_upload.append((f"/images/{fname}", fpath, pub_id))

    print(f"Total files: {len(files_to_upload)}, Already uploaded: {len(mapping)}")

    for idx, (local_path, fpath, pub_id) in enumerate(files_to_upload, 1):
        if local_path in mapping and mapping[local_path]:
            print(f"[{idx}/{len(files_to_upload)}] Skipping {local_path} (already uploaded)")
            continue

        success = False
        for attempt in range(1, 4):
            print(f"[{idx}/{len(files_to_upload)}] Uploading {local_path} (attempt {attempt}) ...", end=" ", flush=True)
            try:
                sec_url = upload_file_curl(fpath, pub_id)
                mapping[local_path] = sec_url
                print(f"OK -> {sec_url}")
                success = True
                # Save progress incrementally
                with open(OUT_JSON, "w") as f:
                    json.dump(mapping, f, indent=2)
                break
            except Exception as e:
                print(f"FAILED: {e}")
                time.sleep(2)

        if not success:
            print(f"Could not upload {local_path} after 3 attempts.")

    # Write final files
    with open(OUT_JSON, "w") as f:
        json.dump(mapping, f, indent=2)

    js_content = "export const cloudinaryImages = " + json.dumps(mapping, indent=2) + ";\n"
    js_content += "\nexport default cloudinaryImages;\n"
    with open(OUT_JS, "w") as f:
        f.write(js_content)

    print(f"\nFinal count: {len(mapping)} / {len(files_to_upload)} images uploaded successfully!")

if __name__ == "__main__":
    main()
