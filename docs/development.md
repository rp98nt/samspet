# Development

## Prerequisites

- Node.js 20+
- npm

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Environment

No `.env` is required for the current static marketing page. When adding form submission or analytics, document variables here.

## Images

Remote images are allowed from `images.unsplash.com` in `next.config.ts`. To add another host, extend `images.remotePatterns`.

Local assets belong in `public/` (e.g. `public/logo.svg`).

## GitHub

- Repository: https://github.com/rp98nt/samspet
- Default branch: `main`

Push workflow:

```bash
git add -A
git commit -m "Describe your change"
git push origin main
```

## Deployment

Compatible with [Vercel](https://vercel.com) or any Node host that supports Next.js. Connect the GitHub repo for automatic deploys on push.
