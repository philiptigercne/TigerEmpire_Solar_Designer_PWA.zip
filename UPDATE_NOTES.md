# Update — Real Tiger Empire Logo + Customizable Company Logo Feature

## Files changed — replace all of these in your repo
- `index.html`
- `service-worker.js`
- `icon-192.png`
- `icon-512.png`
- `icon-maskable-192.png`
- `icon-maskable-512.png`
- `apple-touch-icon.png`
- `favicon.png`
- `favicon-32.png`

Nothing else needs to change — `manifest.json` stays exactly as it is (same filenames).

## How to apply it
1. In your GitHub repo, upload/drag these files in — same filenames, so they overwrite what's
   already there.
2. Commit.
3. On your phone: fully close the installed app (swipe away from recent apps) and reopen once,
   so the updated service worker + new icons take effect.
4. If your phone's home screen still shows the old icon after that, you may need to remove the
   installed app and reinstall from the site once — Android sometimes caches the home-screen
   icon itself even after the underlying file changes.

## What's new

### 1. Your real logo is now built into the app icons
The home-screen icon, splash/status-bar icon, and browser tab icon are now your actual Tiger
Empire tiger-head mark instead of the placeholder sun-and-panel icon. Since these are baked
into files (not something the app can generate itself), this required regenerating each size
from your uploaded logo:
- Standard icons (192px/512px) — full logo
- "Maskable" icons — logo with extra padding so Android's circular/rounded icon shapes don't
  crop the tiger's ears or the "EMPIRE" text
- Favicon — tightly cropped to just the tiger-head badge, since the full logo with text isn't
  legible at 32px

### 2. Company Logo upload — the actual customizable feature
This is the reusable part: **Settings → Company Profile** now has an "Upload Logo" control.
Any image you pick is automatically resized/compressed in the browser before saving, so it
won't bloat storage regardless of the original file size. Once uploaded, the logo shows up in:
- The sidebar, next to your company name
- The letterhead of every generated PDF proposal

This is what makes the app genuinely white-label-able per business — for a different client,
you (or they) just upload their logo in Settings and it flows through automatically, no code
changes needed. Your Tiger Empire logo is now the default, proving it works end-to-end.

## Note on existing data
This update doesn't touch project data, prices, or any calculations — existing projects are
unaffected.
