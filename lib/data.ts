// Single source of truth for portfolio content, sourced from the CV.

export const profile = {
  name: 'Nguyễn Việt Anh',
  title: 'Frontend Developer',
  tagline: 'I build high-performance, accessible web apps with React & Next.js.',
  location: 'Ha Dong, Ha Noi',
  email: 'nvietanh170@gmail.com',
  phone: '0982848203',
  facebook: 'https://www.facebook.com/anh.v',
  github: 'https://github.com/VietAnh31323',
  summary:
    'Frontend Developer with hands-on experience in TypeScript, React, and Next.js, specializing in Server-Side Rendering (SSR), Static Site Generation (SSG/ISR), and modern caching strategies to build high-performance web applications. Skilled in developing responsive user interfaces, integrating REST APIs, optimizing SEO, and implementing efficient data-fetching solutions such as SWR and React Query. Passionate about expanding into backend development and full-stack architecture, with a strong interest in scalable software design and web performance optimization.',
  highlights: [
    { value: '1.5+', label: 'Years building for the web' },
    { value: 'ERP', label: 'Enterprise modules shipped' },
    { value: '3.4/4', label: 'University GPA' },
  ],
};

export const experiences = [
  {
    company: 'APUS Digital Solutions JSC',
    role: 'Frontend Developer',
    period: '2/2025 – Present',
    current: true,
    summary:
      'Building a comprehensive enterprise ERP platform — Quality Management (QMS), Manufacturing Management, Human Resource Management, and Product Management — on top of structured business workflows and process controls.',
    points: [
      'Developed scalable, maintainable web applications with Next.js and TypeScript, leveraging Server-Side Rendering (SSR) to improve performance and SEO.',
      'Designed and implemented responsive Admin Dashboard interfaces following modern UI/UX principles.',
      'Built and maintained reusable UI components with Material UI (MUI) and complex, large-scale forms with React Hook Form.',
      'Integrated and managed RESTful APIs for CRUD operations and data synchronization across modules, collaborating with backend developers to optimize API performance and data structures.',
      'Used TanStack Query (React Query) for data fetching, caching, error handling, and state management to enhance user experience.',
      'Implemented internationalization (i18n) in Next.js for multilingual content and locale-based routing across the ERP platform.',
    ],
    stack: ['Next.js', 'TypeScript', 'Material UI', 'React Hook Form', 'TanStack Query', 'i18n', 'REST API'],
  },
  {
    company: 'Hazo Media',
    role: 'WordPress Developer',
    period: '8/2024 – 1/2025',
    current: false,
    summary:
      'Delivered responsive e-commerce websites and landing pages on WordPress, with custom features and pixel-accurate UI from design files.',
    points: [
      'Developed responsive e-commerce websites and landing pages, ensuring compatibility across screen sizes and devices.',
      'Customized website features, layouts, and interactive effects based on client requirements.',
      'Collaborated with QA/Testers to identify, troubleshoot, and resolve issues during development and deployment.',
      'Used Figma and Adobe Photoshop to design UI layouts, banners, and marketing assets to client specifications.',
    ],
    stack: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'Figma', 'Photoshop'],
  },
];

export const projects = [
  {
    name: 'Enterprise ERP Platform',
    org: 'APUS Digital Solutions JSC',
    description:
      'Multi-module ERP covering Quality Management (QMS), Manufacturing, HR, and Product Management. SSR-rendered dashboards, large-scale forms, cached data layers, and full i18n.',
    tags: ['Next.js', 'TypeScript', 'MUI', 'TanStack Query', 'SSR', 'i18n'],
    highlight: true,
  },
  {
    name: 'Thuận Đức IVM',
    org: 'Hazo Media',
    description:
      'Responsive corporate / e-commerce website built and customized on WordPress, with bespoke layouts and interactive effects matching client branding.',
    tags: ['WordPress', 'Responsive', 'UI/UX', 'Figma'],
    highlight: false,
  },
  {
    name: 'NT-Tech',
    org: 'Hazo Media',
    description:
      'Marketing and landing-page site on WordPress, cross-device compatible, with custom interactive components and design assets crafted in Figma & Photoshop.',
    tags: ['WordPress', 'Landing Page', 'SEO', 'Design'],
    highlight: false,
  },
];

export const skillGroups = [
  {
    title: 'Languages & Core',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['Next.js', 'React.js', 'TanStack Query', 'React Hook Form', 'Material UI', 'Tailwind CSS', 'Axios'],
  },
  {
    title: 'Concepts',
    items: ['SSR', 'SSG / ISR', 'Caching Strategies', 'REST API Integration', 'SEO', 'i18n', 'Responsive Design'],
  },
  {
    title: 'Tools & Workflow',
    items: ['Git', 'GitLab', 'Figma', 'Jira', 'WordPress'],
  },
  {
    title: 'AI-Assisted Development',
    items: ['Claude', 'GitHub Copilot', 'ChatGPT'],
  },
];

export const education = {
  school: 'Hanoi Architectural University',
  degree: 'Information Technology',
  period: '2021 – 2026',
  gpa: 'GPA 3.4 / 4.0',
  award: 'Academic Encouragement Scholarship',
};

export const languages = [
  'Able to read and understand technical documentation in English for software development and problem-solving.',
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];
