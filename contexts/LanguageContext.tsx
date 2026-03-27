'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { siteContent, type SiteContent } from '@/data/siteContent';
import {
  Locale,
  defaultLocale,
  supportedLocales,
  getTranslation,
  languageOptions,
} from '@/lib/i18n';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: SiteContent;
  languages: typeof languageOptions;
  isSwahili: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }

  const savedLocale = localStorage.getItem('lsdb-locale') as Locale | null;
  return savedLocale && supportedLocales.includes(savedLocale) ? savedLocale : defaultLocale;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('lsdb-locale', newLocale);
  };

  const t = getTranslation(siteContent, locale);
  const isSwahili = locale === 'sw';

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t, languages: languageOptions, isSwahili }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
