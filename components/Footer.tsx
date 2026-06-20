'use client';

import { shared } from '@/lib/data';
import { useLanguage } from './LanguageProvider';
import { GithubIcon, FacebookIcon, MailIcon } from './Icons';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {shared.name} — {t.ui.builtWith}{' '}
          <span className="text-accent-soft">Next.js</span>,{' '}
          <span className="text-accent-soft">TypeScript</span> &{' '}
          <span className="text-accent-soft">Tailwind CSS</span>.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={shared.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 transition-colors hover:text-white"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={shared.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-slate-500 transition-colors hover:text-white"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${shared.email}`}
            aria-label="Email"
            className="text-slate-500 transition-colors hover:text-white"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
