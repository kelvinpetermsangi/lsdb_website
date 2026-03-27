"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();
  const { servicesPage } = t;

  return (
    <div className="pb-12 sm:pb-16">
      <section className="page-wrap section-pad pt-8 sm:pt-10">
        <div className="card-shell overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <span className="eyebrow">{servicesPage.hero.eyebrow}</span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] sm:text-5xl">
              {servicesPage.hero.title}
            </h1>
            <p className="max-w-2xl text-base leading-8 sm:text-lg">
              {servicesPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="page-wrap section-pad pt-4">
        <div className="grid gap-6 xl:grid-cols-2">
          {servicesPage.services.map((service) => (
            <article key={service.title} className="card-shell p-6 sm:p-8">
              <h2 className="text-2xl font-semibold sm:text-3xl">{service.title}</h2>
              <p className="mt-4 text-base leading-8">{service.summary}</p>

              <div className="mt-6 grid gap-3">
                {service.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="rounded-[1.35rem] bg-[color:var(--surface)] px-4 py-3 text-sm leading-7 text-[color:var(--ink)]"
                  >
                    {outcome}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap section-pad pt-4">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="card-shell p-6 sm:p-8">
            <h2 className="text-3xl font-semibold">{servicesPage.formats.title}</h2>
            <div className="mt-6 space-y-3">
              {servicesPage.formats.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-5 py-4 text-sm leading-7 text-[color:var(--ink)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="card-shell p-6 sm:p-8">
            <h2 className="text-3xl font-semibold">{servicesPage.process.title}</h2>
            <div className="mt-6 space-y-4">
              {servicesPage.process.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.5rem] border border-[color:var(--line)] bg-white p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--soft-blue)] font-semibold text-[color:var(--brand-blue)]">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7">{step.text}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="page-wrap section-pad pt-4">
        <div className="card-shell px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                {servicesPage.callout.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8">{servicesPage.callout.text}</p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Link href="/contact" className="btn-primary-shell">
                {servicesPage.callout.primaryCta}
              </Link>
              <Link href="/contact" className="btn-secondary-shell">
                {servicesPage.callout.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
