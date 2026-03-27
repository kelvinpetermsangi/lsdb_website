"use client";

import { useLanguage } from "@/contexts/LanguageContext";

type LanguageSwitcherProps = {
  compact?: boolean;
};

export default function LanguageSwitcher({
  compact = false,
}: LanguageSwitcherProps) {
  const { locale, setLocale, languages, t } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-[color:var(--line)] bg-white/90 p-1 shadow-[0_12px_35px_rgba(17,33,50,0.08)] backdrop-blur ${
        compact ? "gap-1" : "gap-1.5"
      }`}
      aria-label={t.header.languageLabel}
    >
      {languages.map((language) => {
        const active = language.code === locale;

        return (
          <button
            key={language.code}
            type="button"
            onClick={() => setLocale(language.code)}
            aria-pressed={active}
            className={`rounded-full px-3 py-2 text-xs font-semibold tracking-[0.18em] transition sm:px-4 ${
              active
                ? "bg-[color:var(--brand-blue)] text-white shadow-[0_10px_24px_rgba(36,87,197,0.24)]"
                : "text-[color:var(--muted)] hover:bg-[color:var(--soft-blue)] hover:text-[color:var(--ink)]"
            }`}
            title={`${language.label} / ${language.nativeLabel}`}
          >
            {compact ? language.shortLabel : language.nativeLabel}
          </button>
        );
      })}
    </div>
  );
}
