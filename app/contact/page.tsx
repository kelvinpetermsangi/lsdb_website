"use client";

import ContactForm from "@/components/contact/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const { contactPage, contactDetails } = t;

  return (
    <div className="pb-12 sm:pb-16">
      <section className="page-wrap section-pad pt-8 sm:pt-10">
        <div className="card-shell px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <span className="eyebrow">{contactPage.hero.eyebrow}</span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] sm:text-5xl">
              {contactPage.hero.title}
            </h1>
            <p className="max-w-2xl text-base leading-8 sm:text-lg">
              {contactPage.hero.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {contactPage.infoCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
                  {card.title}
                </p>
                {"href" in card ? (
                  <a
                    href={card.href}
                    className="mt-3 block text-base font-semibold text-[color:var(--ink)]"
                  >
                    {card.text}
                  </a>
                ) : (
                  <p className="mt-3 text-base font-semibold text-[color:var(--ink)]">
                    {card.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="page-wrap section-pad pt-2">
        <div className="card-shell p-6 sm:p-8">
          <div className="max-w-3xl">
            <span className="eyebrow">{contactPage.belowForm.eyebrow}</span>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              {contactPage.belowForm.title}
            </h2>
            <p className="mt-4 text-base leading-8">{contactPage.belowForm.description}</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4 md:grid-cols-2">
              {contactPage.belowForm.panels.map((panel) => (
                <article key={panel.title} className="rounded-[1.5rem] bg-[color:var(--surface)] p-5">
                  <h3 className="text-xl font-semibold">{panel.title}</h3>
                  <p className="mt-3 text-sm leading-7 sm:text-base">{panel.text}</p>
                </article>
              ))}
            </div>

            <article className="rounded-[1.75rem] border border-[color:var(--line)] bg-white p-6">
              <h3 className="text-2xl font-semibold">{contactDetails.addressLabel}</h3>
              <div className="mt-4 space-y-2 text-base leading-8">
                {contactDetails.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="mt-6 border-t border-[color:var(--line)] pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
                  {contactDetails.hoursLabel}
                </p>
                <div className="mt-4 space-y-2 text-sm leading-7 text-[color:var(--ink)]">
                  {contactDetails.hours.map((hour) => (
                    <p key={hour}>{hour}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-[color:var(--line)] pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
                  {contactDetails.appointmentLabel}
                </p>
                <p className="mt-3 text-sm leading-7">{contactDetails.appointmentDetails}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
