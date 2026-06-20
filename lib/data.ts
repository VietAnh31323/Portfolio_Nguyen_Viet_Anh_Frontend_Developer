// Bilingual (English / Vietnamese) content for the portfolio.
// `shared` holds language-neutral atoms (contact links, the resume path).
// `dict` holds everything translatable, keyed by locale, validated by the Dict type.

export type Locale = 'en' | 'vi';

export const locales: Locale[] = ['en', 'vi'];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  vi: 'VI',
};

// Language-neutral values reused across both locales.
export const shared = {
  name: 'Nguyễn Việt Anh',
  email: 'nvietanh170@gmail.com',
  phone: '0982848203',
  facebook: 'https://www.facebook.com/anh.v',
  facebookUser: 'anh.v',
  github: 'https://github.com/VietAnh31323',
  githubUser: 'VietAnh31323',
  resume: '/NGUYEN-VIET-ANH-FRONTEND-en.pdf',
};

// Section anchors; visible labels come from dict[locale].ui.nav[key].
export const navLinks: { href: string; key: NavKey }[] = [
  { href: '#about', key: 'about' },
  { href: '#experience', key: 'experience' },
  { href: '#projects', key: 'projects' },
  { href: '#skills', key: 'skills' },
  { href: '#education', key: 'education' },
  { href: '#contact', key: 'contact' },
];

export type NavKey =
  | 'about'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'education'
  | 'contact';

type Highlight = { value: string; label: string };

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  summary: string;
  points: string[];
  stack: string[];
};

type ProjectItem = {
  name: string;
  org: string;
  description: string;
  tags: string[];
  highlight: boolean;
};

type SkillGroup = { title: string; items: string[] };

type SectionMeta = { eyebrow: string; title: string };

export type Dict = {
  profile: {
    title: string;
    tagline: string;
    location: string;
    summary: string;
    highlights: Highlight[];
  };
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skillGroups: SkillGroup[];
  education: {
    school: string;
    degree: string;
    period: string;
    gpa: string;
    award: string;
  };
  languages: string[];
  ui: {
    nav: Record<NavKey, string>;
    getInTouch: string;
    contactMe: string;
    downloadCV: string;
    sayHello: string;
    helloEyebrow: string;
    scrollAria: string;
    switchLanguage: string;
    flagship: string;
    languagesHeading: string;
    awardsHeading: string;
    scholarshipChip: string;
    builtWith: string;
    contactIntro: string;
    contactLabels: {
      email: string;
      phone: string;
      facebook: string;
      github: string;
      location: string;
    };
    sections: {
      about: SectionMeta;
      experience: SectionMeta;
      projects: SectionMeta;
      skills: SectionMeta;
      education: SectionMeta;
      contact: SectionMeta;
    };
  };
};

const en: Dict = {
  profile: {
    title: 'Frontend Developer',
    tagline:
      'I build high-performance, accessible web apps with React & Next.js.',
    location: 'Ha Dong, Ha Noi',
    summary:
      'Frontend Developer with hands-on experience in TypeScript, React, and Next.js, specializing in Server-Side Rendering (SSR), Static Site Generation (SSG/ISR), and modern caching strategies to build high-performance web applications. Skilled in developing responsive user interfaces, integrating REST APIs, optimizing SEO, and implementing efficient data-fetching solutions such as SWR and React Query. Passionate about expanding into backend development and full-stack architecture, with a strong interest in scalable software design and web performance optimization.',
    highlights: [
      { value: '1.5+', label: 'Years building for the web' },
      { value: 'ERP', label: 'Enterprise modules shipped' },
      { value: '3.4/4', label: 'University GPA' },
    ],
  },
  experiences: [
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
      stack: [
        'Next.js',
        'TypeScript',
        'Material UI',
        'React Hook Form',
        'TanStack Query',
        'i18n',
        'REST API',
      ],
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
  ],
  projects: [
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
  ],
  skillGroups: [
    { title: 'Languages & Core', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'] },
    {
      title: 'Frameworks & Libraries',
      items: [
        'Next.js',
        'React.js',
        'TanStack Query',
        'React Hook Form',
        'Material UI',
        'Tailwind CSS',
        'Axios',
      ],
    },
    {
      title: 'Concepts',
      items: [
        'SSR',
        'SSG / ISR',
        'Caching Strategies',
        'REST API Integration',
        'SEO',
        'i18n',
        'Responsive Design',
      ],
    },
    { title: 'Tools & Workflow', items: ['Git', 'GitLab', 'Figma', 'Jira', 'WordPress'] },
    {
      title: 'AI-Assisted Development',
      items: ['Claude', 'GitHub Copilot', 'ChatGPT'],
    },
  ],
  education: {
    school: 'Hanoi Architectural University',
    degree: 'Information Technology',
    period: '2021 – 2026',
    gpa: 'GPA 3.4 / 4.0',
    award: 'Academic Encouragement Scholarship',
  },
  languages: [
    'Able to read and understand technical documentation in English for software development and problem-solving.',
  ],
  ui: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    getInTouch: 'Get in touch',
    contactMe: 'Contact me',
    downloadCV: 'Download CV',
    sayHello: 'Say hello',
    helloEyebrow: '< Hello, world />',
    scrollAria: 'Scroll to about',
    switchLanguage: 'Switch language',
    flagship: 'Flagship',
    languagesHeading: 'Languages',
    awardsHeading: 'Awards',
    scholarshipChip: 'Scholarship',
    builtWith: 'Built with',
    contactIntro:
      "I'm open to frontend and full-stack opportunities, freelance work, and collaborations. Reach out — I usually reply quickly.",
    contactLabels: {
      email: 'Email',
      phone: 'Phone',
      facebook: 'Facebook',
      github: 'GitHub',
      location: 'Location',
    },
    sections: {
      about: { eyebrow: '01 — About', title: 'Who I am' },
      experience: { eyebrow: '02 — Career', title: 'Work experience' },
      projects: { eyebrow: '03 — Work', title: 'Featured projects' },
      skills: { eyebrow: '04 — Toolbox', title: 'Skills & technologies' },
      education: { eyebrow: '05 — Background', title: 'Education & awards' },
      contact: { eyebrow: '06 — Contact', title: "Let's build something" },
    },
  },
};

const vi: Dict = {
  profile: {
    title: 'Lập trình viên Frontend',
    tagline:
      'Tôi xây dựng các ứng dụng web hiệu năng cao với React & Next.js.',
    location: 'Hà Đông, Hà Nội',
    summary:
      'Lập trình viên Frontend với kinh nghiệm thực tế về TypeScript, React và Next.js, chuyên sâu về Server-Side Rendering (SSR), Static Site Generation (SSG/ISR) và các chiến lược caching hiện đại để xây dựng những ứng dụng web hiệu năng cao. Thành thạo phát triển giao diện người dùng responsive, tích hợp REST API, tối ưu SEO và triển khai các giải pháp data-fetching hiệu quả như SWR và React Query. Đam mê mở rộng sang phát triển backend và kiến trúc full-stack, với mối quan tâm lớn đến thiết kế phần mềm có khả năng mở rộng và tối ưu hiệu năng web.',
    highlights: [
      { value: '1.5+', label: 'Năm kinh nghiệm phát triển web' },
      { value: 'ERP', label: 'Module hệ thống ERP đã phát triển' },
      { value: '3.4/4', label: 'Điểm GPA đại học' },
    ],
  },
  experiences: [
    {
      company: 'APUS Digital Solutions JSC',
      role: 'Lập trình viên Frontend',
      period: '2/2025 – Hiện tại',
      current: true,
      summary:
        'Phát triển hệ thống ERP doanh nghiệp toàn diện — gồm Quản lý chất lượng (QMS), Quản lý sản xuất, Quản lý nhân sự và Quản lý sản phẩm — dựa trên các quy trình nghiệp vụ và kiểm soát quy trình có cấu trúc.',
      points: [
        'Phát triển các ứng dụng web có khả năng mở rộng và dễ bảo trì bằng Next.js và TypeScript, tận dụng Server-Side Rendering (SSR) để cải thiện hiệu năng và SEO.',
        'Thiết kế và xây dựng giao diện Admin Dashboard responsive theo các nguyên tắc UI/UX hiện đại.',
        'Xây dựng và duy trì các component UI tái sử dụng với Material UI (MUI) và các biểu mẫu phức tạp, quy mô lớn với React Hook Form.',
        'Tích hợp và quản lý RESTful API cho các thao tác CRUD và đồng bộ dữ liệu giữa các module, phối hợp với lập trình viên backend để tối ưu hiệu năng API và cấu trúc dữ liệu.',
        'Sử dụng TanStack Query (React Query) cho việc fetch dữ liệu, caching, xử lý lỗi và quản lý state nhằm nâng cao trải nghiệm người dùng.',
        'Triển khai đa ngôn ngữ (i18n) trong Next.js để hỗ trợ nội dung đa ngôn ngữ và định tuyến theo ngôn ngữ trên toàn hệ thống ERP.',
      ],
      stack: [
        'Next.js',
        'TypeScript',
        'Material UI',
        'React Hook Form',
        'TanStack Query',
        'i18n',
        'REST API',
      ],
    },
    {
      company: 'Hazo Media',
      role: 'Lập trình viên WordPress',
      period: '8/2024 – 1/2025',
      current: false,
      summary:
        'Xây dựng các website thương mại điện tử và landing page responsive trên WordPress, với các tính năng tùy chỉnh và giao diện bám sát thiết kế.',
      points: [
        'Phát triển các website thương mại điện tử và landing page responsive, đảm bảo tương thích trên nhiều kích thước màn hình và thiết bị.',
        'Tùy chỉnh tính năng, bố cục và hiệu ứng tương tác của website theo yêu cầu khách hàng.',
        'Phối hợp với QA/Tester để phát hiện, gỡ lỗi và xử lý vấn đề trong quá trình phát triển và triển khai.',
        'Sử dụng Figma và Adobe Photoshop để thiết kế giao diện, banner và ấn phẩm marketing theo yêu cầu khách hàng.',
      ],
      stack: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'Figma', 'Photoshop'],
    },
  ],
  projects: [
    {
      name: 'Hệ thống ERP doanh nghiệp',
      org: 'APUS Digital Solutions JSC',
      description:
        'Hệ thống ERP đa module bao gồm Quản lý chất lượng (QMS), Sản xuất, Nhân sự và Sản phẩm. Dashboard render bằng SSR, biểu mẫu quy mô lớn, tầng dữ liệu có caching và hỗ trợ đa ngôn ngữ đầy đủ.',
      tags: ['Next.js', 'TypeScript', 'MUI', 'TanStack Query', 'SSR', 'i18n'],
      highlight: true,
    },
    {
      name: 'Thuận Đức IVM',
      org: 'Hazo Media',
      description:
        'Website doanh nghiệp / thương mại điện tử responsive được xây dựng và tùy chỉnh trên WordPress, với bố cục riêng và hiệu ứng tương tác bám sát thương hiệu khách hàng.',
      tags: ['WordPress', 'Responsive', 'UI/UX', 'Figma'],
      highlight: false,
    },
    {
      name: 'NT-Tech',
      org: 'Hazo Media',
      description:
        'Website marketing và landing page trên WordPress, tương thích đa thiết bị, với các component tương tác tùy chỉnh và ấn phẩm thiết kế được thực hiện bằng Figma & Photoshop.',
      tags: ['WordPress', 'Landing Page', 'SEO', 'Design'],
      highlight: false,
    },
  ],
  skillGroups: [
    { title: 'Ngôn ngữ & nền tảng', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'] },
    {
      title: 'Framework & thư viện',
      items: [
        'Next.js',
        'React.js',
        'TanStack Query',
        'React Hook Form',
        'Material UI',
        'Tailwind CSS',
        'Axios',
      ],
    },
    {
      title: 'Khái niệm',
      items: [
        'SSR',
        'SSG / ISR',
        'Caching Strategies',
        'REST API Integration',
        'SEO',
        'i18n',
        'Responsive Design',
      ],
    },
    { title: 'Công cụ & quy trình', items: ['Git', 'GitLab', 'Figma', 'Jira', 'WordPress'] },
    {
      title: 'Phát triển với hỗ trợ AI',
      items: ['Claude', 'GitHub Copilot', 'ChatGPT'],
    },
  ],
  education: {
    school: 'Trường Đại học Kiến trúc Hà Nội',
    degree: 'Công nghệ thông tin',
    period: '2021 – 2026',
    gpa: 'GPA 3.4 / 4.0',
    award: 'Học bổng khuyến khích học tập',
  },
  languages: [
    'Có khả năng đọc và hiểu tài liệu kỹ thuật bằng tiếng Anh phục vụ phát triển phần mềm và giải quyết vấn đề.',
  ],
  ui: {
    nav: {
      about: 'Giới thiệu',
      experience: 'Kinh nghiệm',
      projects: 'Dự án',
      skills: 'Kỹ năng',
      education: 'Học vấn',
      contact: 'Liên hệ',
    },
    getInTouch: 'Liên hệ',
    contactMe: 'Liên hệ với tôi',
    downloadCV: 'Tải CV',
    sayHello: 'Gửi lời chào',
    helloEyebrow: '< Hello, world />',
    scrollAria: 'Cuộn xuống phần giới thiệu',
    switchLanguage: 'Chuyển ngôn ngữ',
    flagship: 'Chủ lực',
    languagesHeading: 'Ngôn ngữ',
    awardsHeading: 'Giải thưởng',
    scholarshipChip: 'Học bổng',
    builtWith: 'Được xây dựng bằng',
    contactIntro:
      'Tôi luôn sẵn sàng với các cơ hội Frontend và Full-stack, công việc freelance và hợp tác. Hãy liên hệ — tôi thường phản hồi rất nhanh.',
    contactLabels: {
      email: 'Email',
      phone: 'Điện thoại',
      facebook: 'Facebook',
      github: 'GitHub',
      location: 'Địa điểm',
    },
    sections: {
      about: { eyebrow: '01 — Giới thiệu', title: 'Về tôi' },
      experience: { eyebrow: '02 — Sự nghiệp', title: 'Kinh nghiệm làm việc' },
      projects: { eyebrow: '03 — Sản phẩm', title: 'Dự án nổi bật' },
      skills: { eyebrow: '04 — Bộ kỹ năng', title: 'Kỹ năng & công nghệ' },
      education: { eyebrow: '05 — Nền tảng', title: 'Học vấn & giải thưởng' },
      contact: { eyebrow: '06 — Liên hệ', title: 'Cùng nhau tạo nên điều gì đó' },
    },
  },
};

export const dict: Record<Locale, Dict> = { en, vi };
