import { siteConfigSchema } from '@/lib/schemas';

/**
 * Single source of truth for personal details.
 * Edit this file to make the portfolio yours. It is validated at build time:
 * a bad value (e.g. a non-https link) fails the build instead of shipping.
 */
export const site = siteConfigSchema.parse({
  name: 'Sandesh Bishokarma',
  handle: 'Acid-Burn-del',
  role: 'UI/UX & Graphic Designer',
  tagline: 'Creative content developer skilled in branding and multimedia editing.',
  description:
    'Portfolio of Sandesh Bishokarma — UI/UX and graphic designer and creative content developer based in Hämeenlinna, Finland.',
  location: 'Hämeenlinna, Finland',
  // email: 'you@example.com', // uncomment to show a mailto: contact link
  availableForWork: true,
  about: [
    'My background as an educational counselor taught me how to listen, understand problems, and guide people toward the right decisions. Over time, this way of thinking naturally led me into design.',
    'Even while working in another profession, I kept my creative side alive by learning Photoshop, Illustrator and InDesign, and later focused deeply on Figma, which helped me transition from graphic design to UI/UX design.',
    'To me, design is not limited to digital interfaces — it is a way of thinking. It is about empathy, clarity, and solving real-world problems in a way that feels simple and meaningful for users.',
  ],
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sandesh-bishokarma-849b64215',
      icon: 'linkedin',
    },
    { label: 'Behance', href: 'https://www.behance.net/sandeshtriston', icon: 'link' },
    { label: 'GitHub · Acidburn07', href: 'https://github.com/Acidburn07', icon: 'github' },
    { label: 'GitHub · Acid-Burn-del', href: 'https://github.com/Acid-Burn-del', icon: 'github' },
  ],
  nav: [
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Education', href: '/#education' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/#contact' },
  ],
});
