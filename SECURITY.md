# Security Policy

## Reporting a vulnerability

Please **do not open a public issue** for security problems.
Report them privately through
[GitHub Security Advisories](https://github.com/Acid-Burn-del/Acid-Burn-del/security/advisories/new).
You can expect an acknowledgement within a few days.

## Security model

This is a fully static site. It has no server-side code, database, user accounts,
cookies, analytics or forms, which removes most common attack surface. The
remaining risks are content injection, supply-chain issues and misconfigured
hosting. They are addressed as follows:

| Area | Control |
| --- | --- |
| XSS / injection | Astro escapes all interpolated values; no `set:html` on user-editable data; hash-based CSP (`security.csp`) blocks any script or style that was not part of the build. |
| Unsafe links | Every external URL is schema-validated as `https://` only, so `javascript:`/`data:` URLs fail the build. External links use `rel="noopener noreferrer"`. |
| Clickjacking & transport | `frame-ancestors 'none'`, `X-Frame-Options`, HSTS, `nosniff`, `Referrer-Policy`, `Permissions-Policy` and COOP headers (`public/_headers`, `vercel.json`). |
| Privacy | No third-party scripts, fonts, CDNs or trackers. Everything is served from the site's own origin. |
| Supply chain | Exact-pinned dependencies, committed lockfile, `npm ci`, `npm audit` in CI, Dependabot for npm and Actions, CodeQL scanning. |
| CI/CD | Workflows default to `contents: read`. Only the deploy job gets `pages: write` / `id-token: write`. Checkout does not persist credentials. |
| Secrets | None are needed. `.env*` files are git-ignored. |
