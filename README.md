# udu-s-note

A responsive, scrapbook-style mini-website made with HTML, CSS, and vanilla JavaScript.

## What it includes

- 6 interactive screens with smooth transitions
- Progress indicator + back navigation
- Easy-to-edit message content in `/home/runner/work/udu-s-note/udu-s-note/script.js` (`messages` object)
- Flip cards with editable placeholders for memories and inside jokes
- Clearly labeled photo placeholders for replacement
- Click-to-open animated envelope
- Optional background music (user-initiated)
- Bonus interactions (heart burst + hidden message)

## Project structure

- `/home/runner/work/udu-s-note/udu-s-note/index.html` – page structure
- `/home/runner/work/udu-s-note/udu-s-note/styles.css` – scrapbook styling and animations
- `/home/runner/work/udu-s-note/udu-s-note/script.js` – content config + all interactions

## Local preview

From the repository root, run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

## Deploy to GitHub Pages (free)

1. Push this repository to GitHub.
2. Go to **Repository Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/ (root)`
4. Click **Save**.
5. Wait for deployment; GitHub shows the live URL on the same Pages settings screen.

## Customization notes

- To edit the written message screens, update the `messages` object in `/home/runner/work/udu-s-note/udu-s-note/script.js`.
- To add real photos, replace each `photo-placeholder` block in `/home/runner/work/udu-s-note/udu-s-note/index.html` with `<img>` tags.
- To change music, update the `<audio><source ...></audio>` URL in `/home/runner/work/udu-s-note/udu-s-note/index.html`.
