# Minrui Zhang — Academic Homepage

A minimal, bilingual (English / 中文), responsive academic homepage inspired by the editorial aesthetic of [imlrz.github.io](https://imlrz.github.io/). All code is independently written.

## Preview locally

Open `index.html` in a browser. No framework or build process required. (Google Fonts requires internet access; local fallback fonts are provided.)

## Publish on GitHub Pages

1. Sign into your GitHub account **Minrui1Zhang**.
2. Create a **public** repository named **`Minrui1Zhang.github.io`** (exact spelling).
3. Upload the *contents* of this directory (`index.html`, `styles.css`, `script.js`, `assets/`, `.nojekyll`) into the repository root. Alternatively, use `git init`, `git add .`, `git commit`, and push.
4. Under **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, `main`, `/ (root)` and save.
5. Visit **https://minrui1zhang.github.io/** once GitHub Pages deployment completes.

### Git commands (if repository already created and empty)

```bash
git init
git add .
git commit -m "Create personal academic homepage"
git branch -M main
git remote add origin https://github.com/Minrui1Zhang/Minrui1Zhang.github.io.git
git push -u origin main
```

## Personalization checklist

- **Chinese name:** Not supplied. Currently displays the verified romanized name "Minrui Zhang" to avoid inventing Chinese characters. Add your Chinese name to the header/hero if desired.
- **Portrait:** User-provided photograph in `assets/profile.jpg`.
- **Email:** Add an academic email address to hero/contact once you wish to publish it. No email has been guessed.
- **Undergraduate program:** USTC · School of Artificial Intelligence and Data Science.
- **Dates:** Education dates listed as Sep 2022–Jun 2026 and Sep 2026–present, based on prior shared academic context. Verify before publication.
- **Research areas:** The focus areas are worded as *interests*, not claims of published contributions.
- **Publications / internships:** Omitted; add sections later when applicable.
- **Links:** Group link points to `https://agentresearchlab.com/`. Verify group affiliation details and link preferences before publication.

## Files

- `index.html`: webpage and content
- `styles.css`: responsive visual theme
- `script.js`: bilingual text and reading progress indicator
- `assets/profile.jpg`: personal photograph
- `assets/favicon.svg`: favicon

No paid hosting, server or JavaScript framework required.
