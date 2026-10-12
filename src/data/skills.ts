import { z } from 'astro/zod';
import { skillGroupSchema } from '@/lib/schemas';

export const skills = z.array(skillGroupSchema).parse([
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Bash'] },
  { title: 'Frontend', items: ['HTML & CSS', 'Astro', 'React', 'Accessibility'] },
  { title: 'Backend', items: ['Node.js', 'REST APIs', 'PostgreSQL'] },
  { title: 'Tooling & Security', items: ['Git', 'GitHub Actions', 'Docker', 'Linux', 'OWASP Top 10'] },
]);
