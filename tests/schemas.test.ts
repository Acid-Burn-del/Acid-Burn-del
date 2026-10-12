import { describe, expect, it } from 'vitest';
import { experienceSchema, httpsUrl, siteConfigSchema } from '@/lib/schemas';
import { site } from '@/config/site';

describe('httpsUrl', () => {
  it.each(['https://github.com/Acid-Burn-del', 'https://example.com/a?b=c'])('accepts %s', (url) => {
    expect(httpsUrl.safeParse(url).success).toBe(true);
  });

  it.each([
    'http://example.com',
    'javascript:alert(1)',
    'data:text/html,<script>alert(1)</script>',
    'vbscript:msgbox(1)',
    '/relative',
    'not a url',
  ])('rejects %s', (url) => {
    expect(httpsUrl.safeParse(url).success).toBe(false);
  });
});

describe('siteConfigSchema', () => {
  it('validates the shipped site config', () => {
    expect(siteConfigSchema.safeParse(site).success).toBe(true);
  });

  it('rejects nav links that leave the site', () => {
    const bad = { ...site, nav: [{ label: 'Evil', href: 'https://evil.example' }] };
    expect(siteConfigSchema.safeParse(bad).success).toBe(false);
  });

  it('rejects social links with unsafe schemes', () => {
    const bad = { ...site, socials: [{ label: 'X', href: 'javascript:alert(1)', icon: 'x' }] };
    expect(siteConfigSchema.safeParse(bad).success).toBe(false);
  });
});

describe('experienceSchema', () => {
  it('requires well-formed dates', () => {
    const base = { role: 'Dev', organization: 'Org', highlights: ['Did things'] };
    expect(experienceSchema.safeParse({ ...base, start: '2024-01', end: 'present' }).success).toBe(true);
    expect(experienceSchema.safeParse({ ...base, start: 'Jan 2024', end: 'present' }).success).toBe(false);
  });
});

describe('educationSchema', () => {
  it('accepts an ongoing degree and rejects malformed dates', async () => {
    const { educationSchema } = await import('@/lib/schemas');
    const base = { institution: 'HAMK', credential: 'BSc' };
    expect(educationSchema.safeParse({ ...base, start: '2025-08', end: 'present' }).success).toBe(true);
    expect(educationSchema.safeParse({ ...base, start: 'Aug 2025', end: '2028' }).success).toBe(false);
  });
});
