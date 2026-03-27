export const localeCatalog = {
  en: {
    code: "en",
    label: "English",
    nativeLabel: "English",
    shortLabel: "EN",
  },
  sw: {
    code: "sw",
    label: "Swahili",
    nativeLabel: "Kiswahili",
    shortLabel: "SW",
  },
} as const;

export type Locale = keyof typeof localeCatalog;

export type LocaleInfo = (typeof localeCatalog)[Locale];

export const defaultLocale: Locale = "en";

export const supportedLocales = Object.keys(localeCatalog) as Locale[];

export const languageOptions = supportedLocales.map((locale) => ({
  ...localeCatalog[locale],
}));

export type LocalizedResource<T> = Record<Locale, T>;

export function isLocale(value: string): value is Locale {
  return value in localeCatalog;
}

export function resolveLocale(value: string | null | undefined): Locale {
  return value && isLocale(value) ? value : defaultLocale;
}

export function getTranslation<T>(
  translations: LocalizedResource<T>,
  locale: Locale = defaultLocale
): T {
  return translations[locale] ?? translations[defaultLocale];
}

export function formatTranslation(
  text: string,
  variables: Record<string, string | number> = {}
) {
  return Object.entries(variables).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
    text
  );
}
