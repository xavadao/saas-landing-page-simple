# Vibed SaaS Simple

A polished, multi-page SaaS marketing example for the fictional Nexus intelligence platform.

Live demo: [https://vibed-saas-simple.xavainf.com](https://vibed-saas-simple.xavainf.com)

## Features

- Responsive navigation and marketing sections
- Product, industry, resource, company, career, and contact pages
- Scroll reveals, pricing cards, and animated product illustrations

## Search and accessibility

Every page includes a keyboard-accessible “Made with XavaInf” credit, descriptive page metadata, a canonical URL, and social preview metadata. `robots.txt`, `sitemap.xml`, and `llms.txt` describe the published demo routes and limitations. Structured data identifies the site as a creative demonstration, without product ratings or customer claims. Mobile navigation supports Escape, focus handling, and reduced motion.

## Run locally

Requires Node.js 22.13 or newer and pnpm 11.13.0.

```sh
pnpm install
pnpm dev
```

Use `pnpm dev` for fast UI development at http://localhost:3000. Use `pnpm preview` to build and run the production Cloudflare serving configuration locally at http://localhost:8787.

## Build and preview

```sh
pnpm build
pnpm start
```

`pnpm build` checks TypeScript and generates `out/`. `pnpm start` serves that existing build through Wrangler. `pnpm preview` combines both steps.

## Deploy

```sh
pnpm exec wrangler login
pnpm deploy
```

Deployment builds the site and uploads it to Cloudflare Workers. `wrangler.jsonc` sets the Worker name to `vibed-saas-simple` and the custom domain to `vibed-saas-simple.xavainf.com`. The deploying account needs access to the configured Cloudflare account and the `xavainf.com` zone. To host your own copy, update the account, Worker name, and domain first.

## Runtime

Next.js 16 and React 19 build the site into static HTML, CSS, and JavaScript in `out/`. Cloudflare Workers Static Assets serves those files; no Next.js server runs in production.

Source pages and components live in `src/`; bundled assets live in `public/`. Generated build output and local credentials are ignored by Git.

## Demo limitations

The contact form shows a local confirmation only; it does not send messages. Product statistics, testimonials, pricing, resources, and career listings are example content.
