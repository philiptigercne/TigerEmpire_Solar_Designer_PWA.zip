# Tiger Empire Solar Designer — PWA package

## What's in this folder
- `index.html` — the app itself (must keep this exact filename for GitHub Pages)
- `manifest.json` — tells Android/Chrome this is an installable app
- `service-worker.js` — caches the app so it keeps working offline after first load
- `icon-*.png`, `apple-touch-icon.png`, `favicon*.png` — app icons

## Deploy to GitHub Pages (free, ~5 minutes)
1. On GitHub, create a new repository (e.g. `solar-designer`). Public repos get free Pages hosting.
2. Upload every file in this folder to the root of that repository (drag-and-drop works on github.com, or `git add . && git commit -m "app" && git push`).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, **Branch: main**, folder **/ (root)**. Save.
5. Wait about a minute, then GitHub shows your live URL, something like:
   `https://<your-username>.github.io/solar-designer/`
6. Open that link in Chrome on your Android phone.

## Installing on Android
1. Open the GitHub Pages link in Chrome.
2. Tap the **⋮** menu → **Install app** (or Chrome may show an "Install" banner automatically).
3. Confirm — the app icon (sun + solar panel, navy/gold) appears on your home screen.
4. Opening it from the home screen launches full-screen, no browser bar.
5. After the first visit, it keeps working with no internet connection, since the service worker caches everything.

## Moving your existing project data over
Data is saved per web address (origin). Projects you created by opening the old local HTML file
directly won't automatically appear on the hosted version. To bring them across:
1. In the **old** version: go to **Settings → Export All Data**, save the JSON file.
2. In the **new** installed app: go to **Settings → Import All Data**, choose that file.

## Updating the app later
If you (or I) change the app, re-upload the changed files to the same GitHub repo. The service worker
auto-detects the update and refreshes the cache the next time the app is opened (may take one extra
reopen to fully switch over).
