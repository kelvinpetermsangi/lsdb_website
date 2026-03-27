"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ResourcesPage() {
  const { t } = useLanguage();
  const { resourcesPage } = t;

  return (
    <div className="pb-12 sm:pb-16">
      <section className="page-wrap section-pad pt-8 sm:pt-10">
        <div className="card-shell px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <span className="eyebrow">{resourcesPage.hero.eyebrow}</span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] sm:text-5xl">
              {resourcesPage.hero.title}
            </h1>
            <p className="max-w-2xl text-base leading-8 sm:text-lg">
              {resourcesPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="page-wrap section-pad pt-4">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6">
            {resourcesPage.featured.map((resource) => (
              <article key={resource.title} className="card-shell p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-blue)]">
                      {resource.type}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">{resource.title}</h2>
                  </div>
                  <span className="rounded-full bg-[color:var(--surface)] px-4 py-2 text-sm font-medium text-[color:var(--ink)]">
                    {resource.meta}
                  </span>
                </div>

                <p className="mt-4 text-base leading-8">{resource.description}</p>

                <div className="mt-6">
                  <Link href={resource.href} className="btn-primary-shell">
                    {t.shared.learnMore}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <aside className="card-shell p-6 sm:p-8">
            <h2 className="text-3xl font-semibold">{t.shared.browseResources}</h2>
            <div className="mt-6 space-y-4">
              {resourcesPage.categories.map((category) => (
                <div
                  key={category.title}
                  className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5"
                >
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="mt-3 text-sm leading-7">{category.text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="page-wrap section-pad pt-4">
        <div className="card-shell px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                {resourcesPage.callout.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8">{resourcesPage.callout.text}</p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Link href="/contact" className="btn-primary-shell">
                {resourcesPage.callout.primaryCta}
              </Link>
              <Link href="/contact" className="btn-secondary-shell">
                {resourcesPage.callout.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
