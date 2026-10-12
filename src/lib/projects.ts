import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** Published projects, newest first. Drafts are only included in dev. */
export async function getProjects(): Promise<Project[]> {
  const entries = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getFeaturedProjects(limit = 3): Promise<Project[]> {
  const all = await getProjects();
  const featured = all.filter((p) => p.data.featured);
  return (featured.length > 0 ? featured : all).slice(0, limit);
}
