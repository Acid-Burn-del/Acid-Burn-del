import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { httpsUrl } from '@/lib/schemas';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string().min(1).max(80),
    summary: z.string().min(1).max(240),
    date: z.coerce.date(),
    tags: z.array(z.string().min(1).max(30)).max(8).default([]),
    repo: httpsUrl.optional(),
    demo: httpsUrl.optional(),
    featured: z.boolean().default(false),
    /** Drafts are visible in `astro dev` but never built for production. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
