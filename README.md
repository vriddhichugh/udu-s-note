# Udu's Note 💌

A mobile-first scrapbook-style mini website built with HTML, CSS and vanilla JavaScript.

## What's included

- 6 interactive screens with smooth transitions
- Back button + progress indicator + clickable progress dots for revisiting visited screens
- Editable content stored in `/home/runner/work/udu-s-note/udu-s-note/script.js` (`content` object)
- Flip cards with placeholders for inside jokes, memories and custom notes
- Clearly labeled photo placeholders you can replace with real images
- Click-to-open animated envelope
- Optional background music that only starts after user interaction
- Cute extras: heart burst effect + bonus hidden message

## File structure

- `/home/runner/work/udu-s-note/udu-s-note/index.html` – page layout and screen containers
- `/home/runner/work/udu-s-note/udu-s-note/styles.css` – visual style, responsive layout, animations
- `/home/runner/work/udu-s-note/udu-s-note/script.js` – content configuration and interactions

## Personalizing content

1. Open `/home/runner/work/udu-s-note/udu-s-note/script.js`.
2. Edit the `content` object text, card placeholders and bonus note.
3. Replace the placeholder music file path (`assets/udu-theme.mp3`) in `/home/runner/work/udu-s-note/udu-s-note/index.html`.
4. Replace photo placeholders in the card strip section by editing the `photos` entries in `content.screens[3]`.

## Optional music setup

1. Create an `assets` folder in the repository root.
2. Add your music file as `udu-theme.mp3` (or change the file name/path in `index.html`).
3. Commit and push.

## Deploy on GitHub Pages (free)

1. Push this project to your GitHub repository.
2. Open the repository on GitHub.
3. Go to **Settings** → **Pages**.
4. Under **Build and deployment**, choose:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch), folder `/ (root)`
5. Click **Save**.
6. Wait for deployment to finish.
7. Open the published URL shown in the Pages settings.

## Local preview

Open `index.html` directly in your browser, or run a simple local server if needed.
