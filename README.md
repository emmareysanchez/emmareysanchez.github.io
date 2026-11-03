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

## Add the CV

Edit `config.js` and set `cvUrl` to a PDF URL, or create an assets folder and place a PDF there and use:

```js
window.PORTFOLIO_CONFIG = { cvUrl: "assets/Emma-Rey-Sanchez-CV.pdf" };
```

The button stays disabled with a translated “coming soon” note while no URL is set. A same-origin PDF downloads; an external provider may open its own viewer instead.

## Edit content

Both translations live together on elements using `data-en` and `data-es` in `index.html`. The visitor's language preference is saved locally when browser storage is available. English is the default. Project names and established technical terms stay in their original language.

The decorative loader dismisses after 2.2 seconds, has a CSS-only fallback, never blocks input, and is hidden for reduced-motion preferences. Content remains available without JavaScript.

See `CONTENT-SOURCES.md` for project selection and profile provenance. Descriptions summarize repository documentation; they do not claim independently reproduced model results or sole authorship of team projects.
