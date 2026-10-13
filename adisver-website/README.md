# Adisver Website — Hosting Package

This is a static HTML/CSS/JavaScript website organized for deployment.

## Pages
- `index.html` — main website
- `workshop.html` — standalone workshop page
- `dashboard-demo.html` — dashboard demo

## Project structure
- `assets/images/` — logos, product images, and workshop photos
- `assets/videos/` — video assets
- `css/` — page stylesheets
- `js/` — page scripts
- `docs/` — project/deployment notes

## Deploy on Vercel
1. Extract this ZIP and upload the folder contents to a GitHub repository (or import the repository into Vercel).
2. In Vercel, create a project from that repository.
3. Framework Preset: **Other**.
4. Build Command: leave blank.
5. Output Directory: leave blank / use the project root (the folder containing `index.html`).
6. Deploy, then test `/`, `/workshop.html`, and `/dashboard-demo.html`.
7. In Vercel → Project Settings → Domains, add your GoDaddy domain. Apply only the DNS records Vercel instructs you to add in GoDaddy. Do not delete MX records used by company email.

## Deploy on GoDaddy cPanel hosting
1. Back up the existing site before replacing anything.
2. Open cPanel → File Manager → `public_html`.
3. Upload this ZIP and extract it so `index.html` is directly inside `public_html` (not buried inside another folder).
4. Confirm `assets/`, `css/`, `js/`, and the other HTML pages are alongside `index.html`.
5. Test the homepage, workshop page, dashboard demo, links, videos, mobile layout, and HTTPS.

No build step is required; this is a static website.
