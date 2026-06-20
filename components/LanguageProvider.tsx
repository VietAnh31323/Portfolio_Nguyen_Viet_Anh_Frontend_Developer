'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  dict,
  defaultLocale,
  locales,
  type Dict,
  type Locale,
} from '@/lib/data';

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'portfolio-locale';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Restore a previously chosen locale on mount.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && locales.includes(saved)) {
      setLocaleState(saved);
    } else if (typeof navigator !== 'undefined' && navigator.language?.startsWith('vi')) {
      setLocaleState('vi');
    }
  }, []);

  // Keep <html lang> in sync for accessibility & SEO.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === 'en' ? 'vi' : 'en';
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, toggleLocale, t: dict[locale] }),
    [locale, setLocale, toggleLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
