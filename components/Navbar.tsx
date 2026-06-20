'use client';

import { useEffect, useState } from 'react';
import { navLinks, shared, locales, localeNames } from '@/lib/data';
import { useLanguage } from './LanguageProvider';

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const initials = shared.name
    .split(' ')
    .slice(-2)
    .map((w) => w[0])
    .join('');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-bg/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-bold text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-cyan text-bg">
            {initials}
          </span>
          <span className="hidden sm:inline">{shared.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                {t.ui.nav[link.key]}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <LanguageToggle locale={locale} setLocale={setLocale} label={t.ui.switchLanguage} />
          </li>
          <li>
            <a
              href={`mailto:${shared.email}`}
              className="ml-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-soft transition-colors hover:bg-accent/20"
            >
              {t.ui.getInTouch}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle locale={locale} setLocale={setLocale} label={t.ui.switchLanguage} />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border text-white"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                  open ? 'top-2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-2 block h-0.5 w-5 bg-current transition-all ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all ${
                  open ? 'top-2 -rotate-45' : 'top-4'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-border bg-bg/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-slate-300 transition-colors hover:bg-surface hover:text-white"
              >
                {t.ui.nav[link.key]}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${shared.email}`}
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-lg border border-accent/40 bg-accent/10 px-3 py-2.5 text-center font-medium text-accent-soft"
            >
              {t.ui.getInTouch}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function LanguageToggle({
  locale,
  setLocale,
  label,
}: {
  locale: (typeof locales)[number];
  setLocale: (l: (typeof locales)[number]) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-lg border border-border bg-surface p-0.5"
    >
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
            locale === l
              ? 'bg-gradient-to-r from-accent to-cyan text-bg'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          {localeNames[l]}
        </button>
      ))}
    </div>
  );
}
