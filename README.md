# Emma Rey Sánchez — AI portfolio

Minimal static portfolio in English and Spanish. Plain HTML, CSS and JavaScript; no build step, framework, backend, analytics, or API keys. All project links point to public repositories. The technical diagrams, favicon and loading screen use local SVG/CSS. Google Fonts supplies DM Sans and Instrument Serif, with system fallbacks.

## Preview

Open `index.html`, or serve this folder:

```sh
python3 -m http.server 4173
```

## GitHub Pages

1. Create a public repository called `emmareysanchez.github.io` (initialize it with a README).
2. Upload the contents of this folder to its root, including both SVG files and `.nojekyll`.
3. Open **Settings → Pages**. Select **Deploy from a branch**, then **main** and **/ (root)**, and save.
4. The intended address is `https://emmareysanchez.github.io/`. This is not a claim that deployment has completed.

Relative asset paths also work under a project repository URL. GitHub's setup guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## CV downloads

The English and Spanish one-page CVs are included as `Emma_Rey_Sanchez_CV.pdf` and `Emma_Rey_Sanchez_CV_ES.pdf`. The language toggle updates the download link using `cvUrls` in `config.js`. The static HTML defaults to the English PDF when JavaScript is unavailable. Replace the corresponding PDF to update a CV.

## Edit content

Both translations live together on elements using `data-en` and `data-es` in `index.html`. The visitor's language preference is saved locally when browser storage is available. English is the default. Project names and established technical terms stay in their original language.

The decorative loader dismisses after 2.2 seconds, has a CSS-only fallback, never blocks input, and is hidden for reduced-motion preferences. Content remains available without JavaScript.

See `CONTENT-SOURCES.md` for project selection and profile provenance. Descriptions summarize repository documentation; they do not claim independently reproduced model results or sole authorship of team projects.
