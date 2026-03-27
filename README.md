# LSDB Website

The Learning and Skills Development Bureau website is a bilingual Next.js platform for presenting LSDB's services, programmes, institutional profile, and contact channels in English and Kiswahili.

Current release: `v1.0.0`

## Highlights

- Distinct modern homepage and refreshed internal page layouts
- Centralized English and Kiswahili content system
- Updated LSDB logo, favicon, footer, and downloadable business profile PDF
- Guided contact form with Tanzania number handling and SMTP-ready mail delivery
- Minimal footer, floating WhatsApp support button, and polished brand animation
- SEO basics in place with canonical URLs, sitemap, robots, and Open Graph metadata
- Standalone Next.js output prepared for VPS deployment behind Nginx

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Nodemailer for SMTP delivery

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Copy the environment template and fill in any values you need:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://127.0.0.1:3000/`.

## Environment Variables

The app can run without SMTP in local development, but production contact delivery should use these variables:

```env
NEXT_PUBLIC_SITE_URL=https://lsdb.or.tz
CONTACT_TO=info@lsdb.or.tz
SMTP_HOST=mail.privateemail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@lsdb.or.tz
SMTP_PASS=replace-with-your-password
SMTP_FROM="LSDB Website <contact@lsdb.or.tz>"
```

## Available Scripts

- `npm run dev`: local development server on `127.0.0.1:3000`
- `npm run lint`: ESLint validation
- `npm run typecheck`: TypeScript validation
- `npm run build`: production build
- `npm run start`: standard Next.js production server
- `npm run start:standalone`: standalone server from `.next/standalone/server.js`
- `npm run deploy:check`: lint, typecheck, and build in one pass

## Deployment

This repo is prepared for a Namecheap VPS deployment with:

- standalone Next.js output in [`next.config.ts`](./next.config.ts)
- PM2 process file in [`ecosystem.config.js`](./ecosystem.config.js)
- Nginx example in [`deploy/nginx/lsdb.or.tz.conf`](./deploy/nginx/lsdb.or.tz.conf)
- deployment runbook in [`docs/DEPLOYMENT_NAMECHEAP_VPS.md`](./docs/DEPLOYMENT_NAMECHEAP_VPS.md)
- release notes in [`docs/releases/v1.0.0.md`](./docs/releases/v1.0.0.md)

Recommended production flow:

```bash
npm ci
npm run build
pm2 start ecosystem.config.js --env production
```

## Release Notes

- Main changelog: [`CHANGELOG.md`](./CHANGELOG.md)
- Current release: [`docs/releases/v1.0.0.md`](./docs/releases/v1.0.0.md)

## Project Structure

```text
app/                 App Router pages, metadata, API routes
components/          Shared UI, layout, contact, legal, career components
contexts/            React providers such as language state
data/                Centralized English and Kiswahili content
deploy/              Nginx and deployment helper files
docs/                Release and operational documentation
lib/                 i18n and shared utilities
public/              Brand assets and downloadable business profile PDF
```

## Production Notes

- The contact endpoint sends real mail when SMTP variables are present.
- If SMTP is missing in production, the contact endpoint returns a `503` so the issue is visible instead of silently dropping inquiries.
- The downloadable business profile is served from [`public/documents/lsdb-business-profile.pdf`](./public/documents/lsdb-business-profile.pdf).
