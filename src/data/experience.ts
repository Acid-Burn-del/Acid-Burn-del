import { z } from 'astro/zod';
import { experienceSchema } from '@/lib/schemas';

/** Most recent first. */
export const experience = z.array(experienceSchema).parse([
  {
    role: 'Software Developer',
    organization: 'Your Company',
    start: '2024-01',
    end: 'present',
    highlights: [
      'Describe an impactful thing you shipped and the result it had.',
      'Mention the technologies you used and the scale you worked at.',
    ],
  },
  {
    role: 'Student / Self-taught Developer',
    organization: 'Independent',
    start: '2022',
    end: '2023',
    highlights: ['Built and published personal projects while learning the fundamentals.'],
  },
]);
