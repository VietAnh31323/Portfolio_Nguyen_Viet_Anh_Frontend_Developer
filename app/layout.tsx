import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { profile } from '@/lib/data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jbmono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jbmono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.summary.slice(0, 160),
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Nguyen Viet Anh',
    'Portfolio',
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jbmono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
