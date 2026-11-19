# Sundas Maria Hayat · Portfolio

React + Vite portfolio with a filterable project grid and a case-study page per project.

## Run it on your computer

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Where to change things

| What | File |
|---|---|
| Name, tagline, links, experience, education, awards, about | `src/data/profile.js` |
| Projects and case studies | `src/data/projects.js` |
| Colours, fonts, spacing (the `--accent` colour recolours everything) | `src/styles.css` (top of file) |
| Images | `public/images/` |

## Adding a new project

1. Put its screenshots in `public/images/` (e.g. `rag-01.jpg`).
2. In `src/data/projects.js`, copy one project block and change the text.
   - A website → `cover.type: 'browser'`
   - An app → `cover.type: 'phones'` (3 screenshots)
   - A pipeline / AI system → `cover.type: 'flow'`
3. Set `categories` (`'web'`, `'mobile'`, `'ai'`, `'backend'`) so it appears under the right filter.
4. Save, commit and push. Vercel redeploys automatically.

Its case-study page appears at `/work/<slug>` on its own.
