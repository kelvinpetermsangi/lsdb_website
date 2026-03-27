"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/data/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import BrandMark from "@/components/shared/BrandMark";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const linkClass = (path: string) =>
    pathname === path
      ? "bg-[color:var(--ink)] text-white shadow-[0_12px_28px_rgba(17,33,50,0.16)]"
      : "text-[color:var(--muted)] hover:bg-white hover:text-[color:var(--ink)]";

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/60 bg-white/85 px-4 py-3 shadow-[0_18px_60px_rgba(17,33,50,0.10)] backdrop-blur-xl sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="shrink-0" aria-label={t.brand.name}>
            <BrandMark
              key={pathname}
              priority
              className="h-auto w-[8.5rem] sm:w-[10.5rem]"
            />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.key}
                href={item.path}
                title={item.description}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${linkClass(
                  item.path
                )}`}
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <LanguageSwitcher />
            <Link href="/contact" className="btn-primary-shell">
              {t.header.cta}
            </Link>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <LanguageSwitcher compact />
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? t.header.closeLabel : t.header.menuLabel}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-white text-[color:var(--ink)] transition hover:border-[color:var(--brand-blue)] hover:text-[color:var(--brand-blue)]"
            >
              <span className="sr-only">
                {isMenuOpen ? t.header.closeLabel : t.header.menuLabel}
              </span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path d="M6 6 18 18M18 6 6 18" />
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-4 rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-4 xl:hidden">
            <nav className="grid gap-2">
              {mainNavigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.path}
                  title={item.description}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-[1.25rem] px-4 py-3 text-sm font-medium transition ${linkClass(
                    item.path
                  )}`}
                >
                  {t.nav[item.key]}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary-shell mt-4 inline-flex w-full justify-center"
            >
              {t.header.cta}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
