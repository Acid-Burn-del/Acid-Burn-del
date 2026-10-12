import { z } from 'astro/zod';
import { skillGroupSchema } from '@/lib/schemas';

export const skills = z.array(skillGroupSchema).parse([
  { title: 'UI/UX Design', items: ['Figma', 'UI/UX design', 'Design thinking', 'Interactive content'] },
  {
    title: 'Graphic & Branding',
    items: ['Photoshop', 'Illustrator', 'InDesign', 'Logo design', 'Brand identity', 'Infographics'],
  },
  {
    title: 'Multimedia & E-learning',
    items: ['Video editing', 'Subtitling', 'Social media creatives', 'LearnWorlds LMS'],
  },
  {
    title: 'AI & Tech',
    items: ['Claude Code', 'Claude Skills & Subagents', 'Generative AI content', 'Hardware & networking'],
  },
]);
