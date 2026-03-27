'use client';

import Modal from '@/components/ui/Modal';
import { useLanguage } from '@/contexts/LanguageContext';

interface TermsOfServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

type TermsSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export default function TermsOfService({
  isOpen,
  onClose,
}: TermsOfServiceProps) {
  const { t } = useLanguage();

  const sections: TermsSection[] = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content: (
        <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
          By accessing and using the LSDB website <strong>lsdb.or.tz</strong> and
          related services, you accept and agree to be bound by these Terms. If
          you do not agree with any part of these Terms, please do not use the
          website or our services.
        </p>
      ),
    },
    {
      id: 'services',
      title: '2. Description of Services',
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            LSDB provides career guidance, skills development services,
            professional development support, and institutional assistance through
            several channels.
          </p>

          <ul className="grid gap-3">
            {[
              'Career counseling and assessment services',
              'Skills development workshops and training programs',
              'Professional development resources and learning materials',
              'Institutional partnership and support services',
              'Online resources and educational content',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B5FFF]/10 text-xs font-bold text-[#0B5FFF]">
                  ✓
                </span>
                <span className="text-sm leading-7 text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'responsibilities',
      title: '3. User Responsibilities',
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            As a user of the website and services, you agree to act responsibly
            and lawfully.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'Provide accurate and complete information when using our services',
              'Maintain the confidentiality of any login credentials',
              'Use our services only for lawful purposes',
              'Not engage in any activity that interferes with or disrupts our services',
              'Not attempt to gain unauthorized access to any portion of our services',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'intellectual-property',
      title: '4. Intellectual Property',
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            All content on this website, including text, graphics, logos, images,
            and software, is the property of LSDB or its content suppliers and is
            protected by applicable copyright and intellectual property laws.
          </p>
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            You may not reproduce, distribute, modify, create derivative works
            from, publicly display, publicly perform, republish, download, store,
            or transmit any material from this website without prior written
            consent from LSDB.
          </p>
        </div>
      ),
    },
    {
      id: 'modifications',
      title: '5. Service Modifications',
      content: (
        <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
          LSDB reserves the right to modify, suspend, or discontinue the website
          or any service, temporarily or permanently, with or without notice. You
          agree that LSDB shall not be liable to you or any third party for any
          modification, suspension, or discontinuance of a service.
        </p>
      ),
    },
    {
      id: 'liability',
      title: '6. Limitation of Liability',
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            To the fullest extent permitted by applicable law, LSDB shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, including loss of profits, revenues, data, use,
            goodwill, or other intangible losses.
          </p>

          <div className="space-y-3">
            {[
              'Your access to, use of, or inability to access or use the services',
              'Any conduct or content of any third party on the services',
              'Any content obtained from the services',
              'Unauthorized access, use, or alteration of your transmissions or content',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'warranties',
      title: '7. Disclaimer of Warranties',
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            The services are provided on an <strong>&quot;as is&quot;</strong> and{' '}
            <strong>&quot;as available&quot;</strong> basis. LSDB disclaims all
            warranties of any kind, whether express or implied, including but not
            limited to implied warranties of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            LSDB does not warrant that the services will meet your requirements,
            remain uninterrupted, be secure, be error-free, or that the quality of
            any service will meet your expectations.
          </p>
        </div>
      ),
    },
    {
      id: 'governing-law',
      title: '8. Governing Law',
      content: (
        <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
          These Terms shall be governed and construed in accordance with the laws
          of Tanzania, without regard to conflict of law principles. Any disputes
          arising under or in connection with these Terms shall be subject to the
          exclusive jurisdiction of the courts of Tanzania.
        </p>
      ),
    },
    {
      id: 'changes',
      title: '9. Changes to Terms',
      content: (
        <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
          LSDB reserves the right, at its sole discretion, to modify or replace
          these Terms at any time. Where a revision is material, LSDB may provide
          notice before the updated Terms take effect. Continued use of the
          website or services after such changes become effective constitutes
          acceptance of the revised Terms.
        </p>
      ),
    },
    {
      id: 'contact',
      title: '10. Contact Information',
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            If you have any questions about these Terms, please contact LSDB using
            the details below.
          </p>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              LSDB — Learning &amp; Skills Development Bureau
            </p>
            <div className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
              <p>Tabata Segerea, Kona Kali Street, House No. 10</p>
              <p>
                Email:{' '}
                <a
                  href="mailto:legal@lsdb.or.tz"
                  className="break-all font-medium text-[#0B5FFF] underline-offset-4 hover:underline"
                >
                  legal@lsdb.or.tz
                </a>
              </p>
              <p>
                Phone:{' '}
                <a
                  href="tel:+255786476284"
                  className="font-medium text-[#0B5FFF] underline-offset-4 hover:underline"
                >
                  +255 786 476 284
                </a>
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="" size="xl">
      <div className="relative -m-6 sm:-m-8">
        <div className="relative max-h-[88vh] overflow-hidden rounded-[1.75rem] bg-white">
          <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
            <div className="border-b border-slate-100 bg-gradient-to-r from-[#0B5FFF]/8 via-white to-[#2E85FF]/8 px-4 py-4 sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0B5FFF]">
                    Legal Document
                  </p>
                  <h2 className="mt-2 pr-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {t.legal.termsOfService}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    These terms explain the conditions governing access to and use
                    of LSDB&apos;s website, services, and digital resources.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close terms of service"
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-600 shadow-sm transition hover:scale-[1.03] hover:border-red-300 hover:bg-red-100 hover:text-red-700 focus:outline-none focus:ring-4 focus:ring-red-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="rounded-2xl border border-[#0B5FFF]/15 bg-white px-4 py-3 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    Last Updated
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    27 March 2026
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-[#0B5FFF]/30 hover:text-[#0B5FFF]"
                    >
                      {section.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-h-[88vh] overflow-y-auto px-4 pb-6 pt-5 sm:px-6 sm:pb-8">
            <div className="space-y-5">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-56 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="hidden h-10 w-1 rounded-full bg-gradient-to-b from-[#0B5FFF] to-[#2E85FF] sm:block" />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                        {section.title}
                      </h3>
                      <div className="mt-4">{section.content}</div>
                    </div>
                  </div>
                </section>
              ))}

              <div className="rounded-3xl border border-amber-200 bg-amber-50 px-5 py-4">
                <p className="text-sm leading-7 text-amber-900">
                  By continuing to use LSDB&apos;s website or services, you confirm
                  that you have read and accepted these Terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}