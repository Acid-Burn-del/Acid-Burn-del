import { z } from 'astro/zod';
import { experienceSchema } from '@/lib/schemas';

/** Most recent first. */
export const experience = z.array(experienceSchema).parse([
  {
    role: 'Marketing and Branding Trainee',
    organization: 'Omendon',
    location: 'Helsinki, Finland',
    start: '2026-01',
    end: '2026-05',
    highlights: [
      'Created branding materials for over 100 pages, including infographics and presentations.',
      'Designed social media and advertisement posts, contributing to a cohesive brand toolkit.',
      'Developed high-quality content that engages audiences and strengthens brand visibility.',
    ],
  },
  {
    role: 'Course Production Assistant',
    organization: 'Sense Valmennus Oy',
    location: 'Finland',
    start: '2025-10',
    end: '2025-11',
    highlights: [
      'Edited and produced course videos with subtitles, graphics and branding elements.',
      'Formatted and integrated learning materials into the LearnWorlds LMS and optimised course flow.',
      'Built interactive features such as quizzes, polls and gamified content, plus icons, infographics and cover images.',
    ],
  },
  {
    role: 'Freelance Graphic Designer',
    organization: 'Behance',
    url: 'https://www.behance.net/sandeshtriston',
    location: 'Nepal',
    start: '2023-01',
    end: '2025-08',
    highlights: [
      'Branding, logo design, UI/UX and marketing creatives that help businesses and startups build strong visual identities.',
    ],
  },
  {
    role: 'Academic Counselor',
    organization: 'Oli & Associates',
    location: 'Itahari, Nepal',
    start: '2025-01',
    end: '2025-08',
    highlights: [
      'Guided students in choosing study destinations, universities and courses to meet their goals.',
      'Supported applications, SOPs, LORs, visa and financial documentation, and mock interviews.',
    ],
  },
  {
    role: 'Admission Officer cum Graphic Designer',
    organization: 'Oli & Associates',
    location: 'Itahari, Nepal',
    start: '2023-03',
    end: '2025-02',
    highlights: [
      'Managed student admission applications in line with university policies.',
      'Streamlined recruitment documentation and created forms and checklists that improved the application process.',
    ],
  },
  {
    role: 'Computer Trainer & Graphic Designer',
    organization: 'Interface Computer and Language Institute',
    location: 'Itahari, Nepal',
    start: '2022-06',
    end: '2023-03',
    highlights: [
      'Taught graphic design, hardware & networking and office applications.',
      'Ran cyber security awareness workshops in schools and colleges.',
      "Designed social media posts, business cards and brochures for the institute's brand.",
    ],
  },
]);
