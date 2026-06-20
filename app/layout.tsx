import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { dict, shared } from '@/lib/data';
import { LanguageProvider } from '@/components/LanguageProvider';

// Build-time metadata uses the default (English) dictionary.
const en = dict.en;

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
  title: `${shared.name} — ${en.profile.title}`,
  description: en.profile.summary.slice(0, 160),
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Nguyen Viet Anh',
    'Portfolio',
  ],
  authors: [{ name: shared.name }],
  openGraph: {
    title: `${shared.name} — ${en.profile.title}`,
    description: en.profile.tagline,
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
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
