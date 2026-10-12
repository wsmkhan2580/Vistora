# Vistora Creative website

React + TypeScript + Vite + Tailwind CSS v4 + React Router. No forms: every CTA opens WhatsApp with a prefilled message.

## Run
`npm install`, then `npm run dev`. Checks: `npm run typecheck`, `npm run lint`, `npm run build`. Preview: `npm run preview`.

## Edit content
- Contact details, nav, domain: `src/data/site.ts`
- Plans, services, videos, FAQs: `src/data/content.ts`
- WhatsApp number and messages: `src/lib/whatsapp.ts` (all links use `waUrl`)
- Real videos: put files in `public/videos/`, then set `src` (and optional `poster`) on each entry in `VIDEOS`.

## Before launch
1. Replace `YOUR-DOMAIN.com` in `src/data/site.ts`, `public/robots.txt` and `public/sitemap.xml`.
2. Have the Privacy Policy and Terms (`src/pages/Legal.tsx`) reviewed; owner must fill refund, cancellation and IP terms.
3. Deploy `dist/` to any static host. SPA rewrites are included: `public/_redirects` (Netlify/Cloudflare) and `vercel.json`.
4. Submit `/sitemap.xml` in Google Search Console and check each page's title, canonical and structured data.
