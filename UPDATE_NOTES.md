# Update — Cable/Busbar/Combiner Sizing + Share Backup

## What's in this update
Only **2 files changed** in your existing repo — no rebuild needed:
- `index.html` — replace your current one with this
- `service-worker.js` — replace your current one with this

Everything else (manifest.json, icons) stays exactly as it was.

## How to apply it
1. Go to your GitHub repo (`TigerEmpire_Solar_Designer_PWA.zip` — or whatever you named it).
2. Open `index.html` in the repo, click the pencil (edit) icon, delete everything, paste in
   the new `index.html` content (or just drag-and-drop upload to overwrite — GitHub lets you
   drop a file with the same name and it replaces it).
3. Do the same for `service-worker.js`.
4. Commit both changes.
5. On your phone: open the installed app, then **fully close it** (swipe it away from recent
   apps) and reopen it once. The new service worker is set to fetch the latest version as soon
   as you're online, so this should be picked up on the very next open — but a full close/reopen
   guarantees it.

## What's new

### 1. Cable, DC Busbar & Combiner Box sizing (Electrical Design page)
Cable sizing is now split into the three real segments of a system instead of one generic
number, each with its own editable run length:
- **PV Array → Combiner/Inverter (DC)** — sized off the string current
- **Battery/Combiner → Inverter (DC)** — sized off actual DC-side current at your battery voltage
- **Inverter → AC Distribution/Load** — same as before

Plus a new **DC Busbars & PV Combiner Boxes** card that tells you:
- How many combiner boxes you need, based on PV string count vs. available MPPT inputs
  (configurable "strings per combiner box")
- Whether a DC busbar is worth using, and what current rating to look for, based on how many
  batteries/inverters are being paralleled

All of this also now shows up in the generated PDF proposal (Section 8).

### 2. Share Backup (lighter alternative to full Google account sync)
No Google sign-in required for this part. When you're back online after using the app offline,
a banner appears: **"You're back online — want to back up your data?"** Tapping **Share Backup**
opens your phone's native share sheet — same one you get sharing a photo — so you (or a beta
tester) can send the backup straight to Gmail, Google Drive, WhatsApp, Files, or anywhere else,
in one tap. There's also a manual **Share Backup** button in Settings for anytime use.

Restoring is the same as before: open the shared/downloaded file and use **Import All Data**
in Settings.

This is intentionally the "light" version — it needs a tap, it's not silent background sync.
The fuller version (auto sync via Google Drive, no tapping required) is still on the table
whenever you're ready to do the one-time Google Cloud Console setup.

## Note on old saved projects
Existing projects on your phone are unaffected — this update only adds new fields (cable
segment lengths, combiner box capacity) with sensible defaults; nothing is deleted or reset.
