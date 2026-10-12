// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Deployment target is injected via env so the same code works locally,
 * on GitHub Pages (project sub-path) and on a custom domain.
 */
const site = process.env.SITE_URL ?? 'https://acid-burn-del.github.io';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // Keep CSS/JS out of the HTML so the CSP can stay strict.
    inlineStylesheets: 'never',
  },
  security: {
    // Astro hashes every script/style it emits and writes a
    // Content-Security-Policy <meta> tag on each page.
    csp: {
      algorithm: 'SHA-256',
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        'upgrade-insecure-requests',
      ],
    },
  },
  devToolbar: { enabled: false },
});
