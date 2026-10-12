import { siteConfigSchema } from '@/lib/schemas';

/**
 * Single source of truth for personal details.
 * Edit this file to make the portfolio yours. It is validated at build time:
 * a bad value (e.g. a non-https link) fails the build instead of shipping.
 */
export const site = siteConfigSchema.parse({
  name: 'Acid-Burn-del', // replace with your real name
  handle: 'Acid-Burn-del',
  role: 'Software Developer',
  tagline: 'I build fast, accessible and secure software for the web.',
  description:
    'Portfolio of Acid-Burn-del — software developer focused on secure, well-architected web applications.',
  // location: 'City, Country',
  // email: 'you@example.com', // uncomment to show a mailto: contact link
  availableForWork: true,
  about: [
    "Hi! I'm a developer who enjoys turning ideas into reliable, maintainable software. I care about clean architecture, good security hygiene and interfaces that work for everyone.",
    'This site is intentionally simple: it is statically generated, ships no tracking and almost no JavaScript, and is locked down with a strict Content Security Policy.',
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/Acid-Burn-del', icon: 'github' },
    // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle', icon: 'linkedin' },
  ],
  nav: [
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/#contact' },
  ],
});
