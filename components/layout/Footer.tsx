"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { legalNavigation } from "@/data/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatTranslation } from "@/lib/i18n";
import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import TermsOfService from "@/components/legal/TermsOfService";
import BrandMark from "@/components/shared/BrandMark";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const legalLinks = useMemo(
    () =>
      legalNavigation.filter(
        (item) => item.key === "privacyPolicy" || item.key === "termsOfService"
      ),
    []
  );

  return (
    <>
      <footer className="px-4 pb-6 pt-6 sm:px-6 lg:px-8 lg:pb-8 lg:pt-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/60 bg-[color:var(--paper)] px-6 py-8 shadow-[0_24px_80px_rgba(17,33,50,0.12)] sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <BrandMark className="h-auto w-[10rem] sm:w-[12rem]" />
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[color:var(--ink)] sm:text-3xl">
                {t.footer.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                {t.footer.text}
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 lg:items-end">
              <a
                href="/documents/lsdb-business-profile.pdf"
                download="lsdb-business-profile.pdf"
                className="btn-primary-shell"
              >
                {t.footer.profileCta}
              </a>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[color:var(--muted)]">
                {legalLinks.map((item) => {
                  const label = t.legal[item.key];

                  if (item.key === "privacyPolicy") {
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setIsPrivacyOpen(true)}
                        className="transition hover:text-[color:var(--ink)]"
                      >
                        {label}
                      </button>
                    );
                  }

                  if (item.key === "termsOfService") {
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setIsTermsOpen(true)}
                        className="transition hover:text-[color:var(--ink)]"
                      >
                        {label}
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={item.key}
                      href={item.path}
                      className="transition hover:text-[color:var(--ink)]"
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-[color:var(--line)] pt-6 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              {formatTranslation(t.footer.copyright, {
                year: currentYear,
              })}
            </p>
            <p>
              {t.footer.maintainedBy}{" "}
              <a
                href="https://ottana.site"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[color:var(--brand-blue)] hover:underline"
              >
                {t.footer.maintainedByName}
              </a>
            </p>
          </div>
        </div>
      </footer>

      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsOfService isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </>
  );
}
