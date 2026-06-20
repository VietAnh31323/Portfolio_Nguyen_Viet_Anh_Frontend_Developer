'use client';

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from './Icons';

type Theme = 'dark' | 'light';
const STORAGE_KEY = 'portfolio-theme';

export default function ThemeToggle({ label }: { label?: string }) {
  // Initialised from the class that the no-flash script in <head> already set.
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains('light') ? 'light' : 'dark'
    );
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('light', next === 'light');
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore storage failures (private mode, etc.) */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label ?? 'Toggle theme'}
      aria-pressed={theme === 'light'}
      className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-muted transition-colors hover:text-ink"
    >
      {theme === 'dark' ? (
        <MoonIcon className="h-[18px] w-[18px]" />
      ) : (
        <SunIcon className="h-[18px] w-[18px]" />
      )}
    </button>
  );
}
