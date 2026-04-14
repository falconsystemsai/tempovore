# Tempovore Website

Simple starter site for the band Tempovore.

## Setup

1. Clone the repo
2. Open index.html in your browser

## Future Ideas

- Add music embeds
- Add tour dates
- Connect a CMS
- Deploy via GitHub Pages

## Cloudflare Workers Deploy

This repository is configured for Workers static assets deploys:

- `wrangler.jsonc` points `main` at `worker.js`
- `worker.js` serves static files from the `assets.directory` binding

Deploy with:

```bash
npx wrangler deploy
```
