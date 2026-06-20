'use client';

import { useEffect, useState } from 'react';
import { navLinks, profile } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const initials = profile.name
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
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="ml-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-soft transition-colors hover:bg-accent/20"
            >
              Get in touch
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border text-white md:hidden"
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
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-lg border border-accent/40 bg-accent/10 px-3 py-2.5 text-center font-medium text-accent-soft"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
