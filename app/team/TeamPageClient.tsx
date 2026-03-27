"use client";

import { useState } from "react";
import Link from "next/link";
import OpenPositionsModal from "@/components/career/OpenPositionsModal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TeamPageClient() {
  const { t } = useLanguage();
  const { teamPage } = t;
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);
  const [careerType, setCareerType] = useState<"job" | "volunteer">("job");

  const openModal = (type: "job" | "volunteer") => {
    setCareerType(type);
    setIsCareerModalOpen(true);
  };

  return (
    <>
      <div className="pb-12 sm:pb-16">
        <section className="page-wrap section-pad pt-8 sm:pt-10">
          <div className="card-shell px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <span className="eyebrow">{teamPage.hero.eyebrow}</span>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] sm:text-5xl">
                  {teamPage.hero.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-8 sm:text-lg">
                  {teamPage.hero.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:items-end">
                <Link href="/contact" className="btn-primary-shell">
                  {teamPage.hero.primaryCta}
                </Link>
                <button
                  type="button"
                  onClick={() => openModal("job")}
                  className="btn-secondary-shell"
                >
                  {teamPage.hero.secondaryCta}
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {teamPage.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5"
                >
                  <p className="text-2xl font-semibold text-[color:var(--ink)]">{stat.value}</p>
                  <p className="mt-2 text-sm leading-7">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-wrap section-pad pt-4">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {teamPage.units.map((unit) => (
              <article key={unit.title} className="card-shell p-6 sm:p-7">
                <h2 className="text-2xl font-semibold">{unit.title}</h2>
                <p className="mt-4 text-sm leading-7 sm:text-base">{unit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-wrap section-pad pt-4">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="card-shell p-6 sm:p-8">
              <h2 className="text-3xl font-semibold">{teamPage.culture.title}</h2>
              <div className="mt-6 space-y-3">
                {teamPage.culture.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.4rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-5 py-4 text-sm leading-7 text-[color:var(--ink)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </article>

            <article className="card-shell px-6 py-8 sm:px-8 sm:py-10">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                {teamPage.careers.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8">{teamPage.careers.text}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openModal("job")}
                  className="btn-primary-shell"
                >
                  {t.shared.openPositions}
                </button>
                <button
                  type="button"
                  onClick={() => openModal("volunteer")}
                  className="btn-secondary-shell"
                >
                  {t.shared.volunteer}
                </button>
              </div>
            </article>
          </div>
        </section>
      </div>

      <OpenPositionsModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        type={careerType}
      />
    </>
  );
}
