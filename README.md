# Nematode science communication site

Next.js static site (App Router) for GitHub Pages.

## Run locally
    npm install
    npm run dev        # http://localhost:3000

## Deploy to GitHub Pages
1. Push to a public GitHub repo on the `main` branch.
2. Repo Settings > Pages > Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push.
   It sets the base path from the repo name automatically.

## Where to edit
- Text: each `app/<topic>/page.js` (replace everything in [brackets])
- Images: drop files in `public/images/`, then use `<Figure src="/images/name.png" ... />`
- Colors and type: `app/globals.css` and `app/layout.js`
- Nav labels: `components/Nav.js`
- Results figure: fill `data/slugs.csv`, run `python make_figure.py` (needs matplotlib, numpy)
- Starter sources: `READING-LIST.md` (verify each before citing)
