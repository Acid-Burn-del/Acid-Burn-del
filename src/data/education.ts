import { z } from 'astro/zod';
import { educationSchema } from '@/lib/schemas';

/** Most recent first. */
export const education = z.array(educationSchema).parse([
  {
    institution: 'Häme University of Applied Sciences (HAMK)',
    credential: "Bachelor's degree, Computer Applications",
    start: '2025-08',
    end: '2028-08',
  },
  {
    institution: 'RUN – European University',
    credential: 'SAP: Innovation and Creative Problem Solving with Design Thinking',
    start: '2025-12',
    end: '2025-12',
  },
  {
    institution: 'Shree Ma.Vi Aamsal, TECS (CTEVT)',
    credential: 'Diploma, Computer Engineering',
    start: '2019-04',
    end: '2023-07',
  },
]);

export const certifications = z.array(z.string().min(1)).parse([
  'Generative AI Content Creation',
  'DeepSeek for Beginners',
  'Innovation and Creative Problem Solving with Design Thinking',
  'Health, Safety, and Environmental (HSE) Engineering Specialization: Risk Management and Industrial Safety',
  'Emergency First Aid Course (8 hrs)',
]);

export const awards = z.array(z.string().min(1)).parse(['Emerging Youth Excellence Award — Branch 2024']);
