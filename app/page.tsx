"use client";

import Link from "next/link";
import BrandMark from "@/components/shared/BrandMark";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const { home, contactDetails } = t;

  return (
    <div className="pb-12 sm:pb-16">
      <section className="page-wrap section-pad pt-8 sm:pt-10 lg:pt-12">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-shell relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(114,191,103,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(36,87,197,0.16),transparent_32%)]" />
            <div className="relative">
              <span className="eyebrow">{home.hero.eyebrow}</span>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl">
                {home.hero.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 sm:text-lg">
                {home.hero.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/services" className="btn-primary-shell">
                  {home.hero.primaryCta}
                </Link>
                <Link href="/contact" className="btn-secondary-shell">
                  {home.hero.secondaryCta}
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {home.hero.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[color:var(--line)] bg-white/85 px-4 py-2 text-sm font-medium text-[color:var(--ink)]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="card-shell overflow-hidden p-6 sm:p-8">
              <div className="grid-fade rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
                <BrandMark className="mx-auto h-auto w-[13rem] sm:w-[16rem]" />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-blue)]">
                {home.hero.featureLabel}
              </p>
              <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                {home.hero.featureTitle}
              </h2>
              <p className="mt-3 text-sm leading-7 sm:text-base">{home.hero.featureText}</p>

              <ul className="mt-6 space-y-3">
                {home.hero.featurePoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-[1.25rem] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--ink)]"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[color:var(--brand-green)]" />
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {home.hero.highlights.map((highlight) => (
                <div key={highlight.title} className="card-shell p-5">
                  <h3 className="text-lg font-semibold">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-7">{highlight.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap section-pad pt-4">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="card-shell p-6 sm:p-8">
            <span className="eyebrow">{home.overview.eyebrow}</span>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              {home.overview.title}
            </h2>
            <p className="mt-4 text-base leading-8">{home.overview.description}</p>
            <div className="mt-8 rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">
                {contactDetails.phoneLabel}
              </p>
              <a
                href={`tel:${contactDetails.phoneDial}`}
                className="mt-2 block text-2xl font-semibold text-[color:var(--ink)]"
              >
                {contactDetails.phoneDisplay}
              </a>
              <p className="mt-2 text-sm leading-7">{contactDetails.appointmentDetails}</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {home.overview.cards.map((card) => (
              <article key={card.title} className="card-shell p-6">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm leading-7">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap section-pad pt-4">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow">{home.services.eyebrow}</span>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              {home.services.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8">{home.services.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {home.services.items.map((service) => (
            <article key={service.title} className="card-shell p-6 sm:p-7">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 sm:text-base">{service.text}</p>

              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-[1.2rem] bg-[color:var(--surface)] px-4 py-3 text-sm leading-7 text-[color:var(--ink)]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap section-pad pt-4">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="card-shell p-6 sm:p-8">
            <span className="eyebrow">{home.audiences.eyebrow}</span>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              {home.audiences.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8">
              {home.audiences.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {home.audiences.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-shell p-6 sm:p-8">
            <span className="eyebrow">{home.process.eyebrow}</span>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              {home.process.title}
            </h2>
            <p className="mt-4 text-base leading-8">{home.process.description}</p>

            <div className="mt-8 space-y-4">
              {home.process.steps.map((step, index) => (
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
          </div>
        </div>
      </section>

      <section className="page-wrap section-pad pt-4">
        <div className="card-shell overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">{home.callout.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-8">{home.callout.text}</p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Link href="/contact" className="btn-primary-shell">
                {home.callout.primaryCta}
              </Link>
              <Link href="/programs" className="btn-secondary-shell">
                {home.callout.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
