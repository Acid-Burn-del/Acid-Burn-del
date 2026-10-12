import type { APIRoute } from 'astro';
import { getProjects } from '@/lib/projects';
import { withBase } from '@/lib/url';

/** Minimal dependency-free sitemap covering every public page. */
export const GET: APIRoute = async ({ site }) => {
  const projects = await getProjects();
  const paths = ['/', '/projects', ...projects.map((p) => `/projects/${p.id}`)];
  const urls = paths
    .map((path) => `  <url><loc>${new URL(withBase(path), site).href}</loc></url>`)
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
