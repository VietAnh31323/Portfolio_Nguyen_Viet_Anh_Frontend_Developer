import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
};

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l2 5v4a1 1 0 0 1-1 1A17 17 0 0 1 4 6a1 1 0 0 1 1-2z" />
  </svg>
);

export const MapPinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const GithubIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.9 1.1 5.8 1.4 5.8 1.4a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 4.3 8.4c0 5 3 6.3 6 6.6a3.4 3.4 0 0 0-1 2.6V22" />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M16 3h-2.5A4.5 4.5 0 0 0 9 7.5V10H6v3h3v8h3v-8h3l1-3h-4V7.5A1.5 1.5 0 0 1 13.5 6H16z" />
  </svg>
);

export const ArrowDownIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12l7 7 7-7" />
  </svg>
);

export const ArrowUpRightIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const DownloadIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
);

export const BriefcaseIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
  </svg>
);

export const GraduationIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M22 9 12 4 2 9l10 5 10-5z" />
    <path d="M6 11v5c0 1 2.7 3 6 3s6-2 6-3v-5" />
  </svg>
);

export const SparkleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3v6m0 6v6m-9-9h6m6 0h6M6 6l3 3m6 6 3 3m0-12-3 3M9 15l-3 3" />
  </svg>
);

export const CodeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m8 9-3 3 3 3m8-6 3 3-3 3M13 6l-2 12" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m12 3 2.6 5.6L21 9.3l-4.5 4.3 1.1 6.4L12 17l-5.6 3 1.1-6.4L3 9.3l6.4-.7z" />
  </svg>
);

export const SunIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const MoonIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

// Full-colour Figma logo (uses brand fills, not currentColor).
export const FigmaLogo = (p: IconProps) => (
  <svg viewBox="0 0 38 57" {...p}>
    <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
    <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
    <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
    <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
    <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
  </svg>
);
