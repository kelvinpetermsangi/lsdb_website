"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const { aboutPage } = t;

  return (
    <div className="pb-12 sm:pb-16">
      <section className="page-wrap section-pad pt-8 sm:pt-10">
        <div className="card-shell overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <span className="eyebrow">{aboutPage.hero.eyebrow}</span>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.04] sm:text-5xl">
                {aboutPage.hero.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 sm:text-lg">
                {aboutPage.hero.description}
              </p>
            </div>

            <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-blue)]">
                {aboutPage.callout.title}
              </p>
              <p className="mt-4 text-base leading-8">{aboutPage.callout.text}</p>
              <Link href="/contact" className="btn-primary-shell mt-6">
                {aboutPage.callout.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-wrap section-pad pt-4">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr]">
          <article className="card-shell p-6 sm:p-8">
            <h2 className="text-3xl font-semibold">{aboutPage.story.title}</h2>
            <div className="mt-5 space-y-4 text-base leading-8">
              {aboutPage.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <div className="grid gap-6">
            <article className="card-shell p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">{aboutPage.mission.title}</h2>
              <p className="mt-3 text-base leading-8">{aboutPage.mission.text}</p>
            </article>
            <article className="card-shell p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">{aboutPage.vision.title}</h2>
              <p className="mt-3 text-base leading-8">{aboutPage.vision.text}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-wrap section-pad pt-4">
        <div className="mb-8">
          <span className="eyebrow">{aboutPage.values.title}</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {aboutPage.values.items.map((value) => (
            <article key={value.title} className="card-shell p-6">
              <h3 className="text-2xl font-semibold">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 sm:text-base">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap section-pad pt-4">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="card-shell p-6 sm:p-8">
            <h2 className="text-3xl font-semibold">{aboutPage.pillars.title}</h2>
            <div className="mt-6 space-y-4">
              {aboutPage.pillars.items.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5"
                >
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7">{pillar.text}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="card-shell p-6 sm:p-8">
            <h2 className="text-3xl font-semibold">{aboutPage.workingStyle.title}</h2>
            <div className="mt-6 space-y-3">
              {aboutPage.workingStyle.points.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.5rem] bg-[color:var(--surface)] px-5 py-4 text-sm leading-7 text-[color:var(--ink)] sm:text-base"
                >
                  {point}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
