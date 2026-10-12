/**
 * Prefix a site-relative path with the configured base path so links work
 * both at a domain root and under a GitHub Pages project sub-path.
 */
export function withBase(path: string, base: string = import.meta.env.BASE_URL): string {
  if (/^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith('//')) {
    throw new Error(`withBase() expects a site-relative path, got "${path}"`);
  }
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.replace(/^\/+/, '');
  return `${normalizedBase}${normalizedPath}`;
}

/** True when `href` points to another origin and should open with rel="noopener noreferrer". */
export function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href);
}
