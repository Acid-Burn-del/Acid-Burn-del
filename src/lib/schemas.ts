import { z } from 'astro/zod';

/**
 * Only absolute https:// URLs are accepted for anything rendered as a link.
 * This blocks `javascript:`, `data:` and plain-http URLs from ever reaching
 * an `href`, even if content is edited carelessly.
 */
export const httpsUrl = z.url({ protocol: /^https$/, hostname: z.regexes.domain });

export const socialLinkSchema = z.object({
  label: z.string().min(1).max(40),
  href: httpsUrl,
  /** Key into the inline icon set in `components/Icon.astro`. */
  icon: z.enum(['github', 'linkedin', 'x', 'link']),
});

export const siteConfigSchema = z.object({
  name: z.string().min(1).max(80),
  handle: z.string().min(1).max(40),
  role: z.string().min(1).max(80),
  tagline: z.string().min(1).max(200),
  description: z.string().min(1).max(300),
  location: z.string().max(80).optional(),
  /** Shown as a mailto: link. Leave undefined to hide email entirely. */
  email: z.email().optional(),
  availableForWork: z.boolean().default(false),
  about: z.array(z.string().min(1)).min(1),
  socials: z.array(socialLinkSchema).max(8),
  nav: z
    .array(
      z.object({
        label: z.string().min(1).max(30),
        href: z.string().regex(/^\/[a-z0-9\-/#]*$/i, 'Nav links must be site-relative paths'),
      }),
    )
    .min(1),
});

export const skillGroupSchema = z.object({
  title: z.string().min(1).max(40),
  items: z.array(z.string().min(1).max(40)).min(1),
});

export const experienceSchema = z.object({
  role: z.string().min(1),
  organization: z.string().min(1),
  url: httpsUrl.optional(),
  start: z.string().regex(/^\d{4}(-\d{2})?$/, 'Use YYYY or YYYY-MM'),
  end: z
    .string()
    .regex(/^(\d{4}(-\d{2})?|present)$/, 'Use YYYY, YYYY-MM or "present"'),
  highlights: z.array(z.string().min(1)).min(1),
});

export type SiteConfig = z.infer<typeof siteConfigSchema>;
export type SocialLink = z.infer<typeof socialLinkSchema>;
export type SkillGroup = z.infer<typeof skillGroupSchema>;
export type Experience = z.infer<typeof experienceSchema>;
