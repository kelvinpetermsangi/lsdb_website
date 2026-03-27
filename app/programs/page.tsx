"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProgramsPage() {
  const { t } = useLanguage();
  const { programsPage } = t;

  return (
    <div className="pb-12 sm:pb-16">
      <section className="page-wrap section-pad pt-8 sm:pt-10">
        <div className="card-shell px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <span className="eyebrow">{programsPage.hero.eyebrow}</span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] sm:text-5xl">
              {programsPage.hero.title}
            </h1>
            <p className="max-w-2xl text-base leading-8 sm:text-lg">
              {programsPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="page-wrap section-pad pt-4">
        <div className="grid gap-6 xl:grid-cols-2">
          {programsPage.programmes.map((programme) => (
            <article key={programme.title} className="card-shell p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">
                {programme.label}
              </p>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                {programme.title}
              </h2>
              <p className="mt-4 text-base leading-8">{programme.text}</p>

              <div className="mt-6 grid gap-3">
                {programme.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.35rem] bg-[color:var(--surface)] px-4 py-3 text-sm leading-7 text-[color:var(--ink)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap section-pad pt-4">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="card-shell p-6 sm:p-8">
            <h2 className="text-3xl font-semibold">{programsPage.support.title}</h2>
            <div className="mt-6 space-y-3">
              {programsPage.support.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-5 py-4 text-sm leading-7 text-[color:var(--ink)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="card-shell px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              {programsPage.callout.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8">{programsPage.callout.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary-shell">
                {programsPage.callout.primaryCta}
              </Link>
              <Link href="/resources" className="btn-secondary-shell">
                {programsPage.callout.secondaryCta}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
