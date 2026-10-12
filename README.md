# Personal Portfolio

A fast, accessible and **secure-by-default** personal portfolio built with
[Astro](https://astro.build) and TypeScript. It compiles to static HTML with no
client-side JavaScript, no trackers and a strict Content Security Policy.

## Quick start

```bash
nvm use            # Node 22 (see .nvmrc)
npm ci             # install exact, locked dependencies
npm run dev        # http://localhost:4321
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload (drafts visible) |
| `npm run check` | Type-check TypeScript and `.astro` templates |
| `npm test` | Unit tests (Vitest) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run validate` | check + test + build, the same gate CI uses |

## Make it yours

All personal content lives in a few typed, validated files. Nothing else needs editing.

| File | Content |
| --- | --- |
| `src/config/site.ts` | Name, role, tagline, about text, email, social links, navigation |
| `src/data/skills.ts` | Skill groups |
| `src/data/experience.ts` | Work history |
| `src/content/projects/*.md` | One Markdown file per project (front-matter + write-up) |
| `public/favicon.svg` | Site icon |

Content is validated with Zod schemas at build time. A missing field, a malformed
date or a non-`https://` link fails the build with a clear error instead of
shipping. Set `draft: true` on a project to hide it from production.

## Architecture

```
src/
├── config/site.ts          # single source of truth for personal info
├── content.config.ts       # typed "projects" content collection
├── content/projects/       # project write-ups (Markdown)
├── data/                   # skills & experience (validated TS data)
├── lib/                    # pure, unit-tested logic
│   ├── schemas.ts          #   Zod schemas (https-only URLs, etc.)
│   ├── projects.ts         #   data access: sorting, drafts, featured
│   ├── url.ts              #   base-path aware links, external detection
│   └── format.ts           #   date formatting
├── components/             # presentational building blocks
│   ├── sections/           #   home page sections (Hero, About, ...)
│   ├── Link.astro          #   the only place <a> is rendered (safe rel, base path)
│   ├── SEO.astro           #   meta, canonical, Open Graph
│   └── ...
├── layouts/BaseLayout.astro
├── pages/                  # file-based routes (/, /projects, /projects/[id], 404, sitemap, robots)
└── styles/global.css       # design tokens (light/dark), base styles
tests/                      # Vitest unit tests for lib/
```

The layers depend in one direction: **content/config → lib → components → layouts → pages**.

- **Data** is separate from presentation. Components never hard-code personal details.
- **Logic** lives in plain TypeScript in `lib/`, so it is unit-testable without rendering.
- **Components** are small and single-purpose. Styles are scoped per component, and
  shared design tokens are CSS custom properties.
- **Zero client JS by default.** Nothing ships to the browser unless a component explicitly needs it.

## Security

See [SECURITY.md](SECURITY.md) for the full model. In short:

- Static output: no server, database, forms or secrets to attack.
- A hash-based **CSP** `<meta>` tag is generated for every page. Hosting-level headers
  (HSTS, `frame-ancestors`, `nosniff`, `Permissions-Policy`, ...) are in `public/_headers`
  (Netlify / Cloudflare Pages) and `vercel.json`.
- Only `https://` links are accepted, and external links get `rel="noopener noreferrer"`.
- No third-party fonts, scripts or analytics.
- Pinned dependencies, `npm audit`, Dependabot, CodeQL and least-privilege GitHub Actions.
- `/.well-known/security.txt` (RFC 9116) tells researchers how to report issues.

## Deployment

**GitHub Pages (preconfigured).** In *Settings → Pages*, set **Source = GitHub Actions**.
Every push to `main` runs `.github/workflows/deploy.yml`, which detects the correct
site URL and base path automatically.

> GitHub Pages cannot send custom HTTP headers. The CSP meta tag still applies, but for
> HSTS / `frame-ancestors` etc. prefer Cloudflare Pages, Netlify or Vercel.

**Netlify / Cloudflare Pages / Vercel.** Build command `npm run build`, output directory
`dist`, and set `SITE_URL` to your domain. Security headers are picked up automatically.

Configuration via environment variables (see `.env.example`):

| Variable | Default | Purpose |
| --- | --- | --- |
| `SITE_URL` | `https://acid-burn-del.github.io` | Canonical origin for SEO / sitemap |
| `BASE_PATH` | `/` | Sub-path when served from a project page |

## License

[MIT](LICENSE)
