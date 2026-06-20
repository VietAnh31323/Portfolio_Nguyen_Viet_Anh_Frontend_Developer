import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Theme-aware tokens — values come from CSS variables (see globals.css),
        // so the same classes adapt to the dark/light theme automatically.
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        card: 'rgb(var(--c-card) / <alpha-value>)',
        border: 'rgb(var(--c-border) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        body: 'rgb(var(--c-body) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        subtle: 'rgb(var(--c-subtle) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--c-accent) / <alpha-value>)',
          soft: 'rgb(var(--c-accent-soft) / <alpha-value>)',
        },
        cyan: 'rgb(var(--c-cyan) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jbmono)', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -30px) scale(1.1)' },
          '66%': { transform: 'translate(-30px, 20px) scale(0.95)' },
        },
        'drift-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-50px, -25px) scale(1.15)' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%)' },
          '60%, 100%': { transform: 'translateX(220%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        drift: 'drift 22s ease-in-out infinite',
        'drift-2': 'drift-2 28s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
