import type { APIRoute } from 'astro';
import { withBase } from '@/lib/url';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(withBase('/sitemap.xml'), site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
