'use client';

import Modal from '@/components/ui/Modal';
import { useLanguage } from '@/contexts/LanguageContext';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

type PolicySection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  const { t } = useLanguage();

  const sections: PolicySection[] = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            The Learning &amp; Skills Development Bureau (LSDB) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website <strong>lsdb.or.tz</strong>{' '}
            or use our services.
          </p>
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            We respect your privacy and are committed to protecting personally identifiable
            information you may provide through our website and related services.
          </p>
        </div>
      ),
    },
    {
      id: 'information',
      title: '2. Information We Collect',
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            We may collect information about you in different ways, depending on how you use
            our website and services.
          </p>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Personal Data</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Personally identifiable information such as your name, email address,
                telephone number, and other details you voluntarily provide when requesting
                information or interacting with our services.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Derivative Data</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Information collected automatically by our systems, such as your IP address,
                browser type, operating system, access times, and pages viewed before or
                after visiting our website.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Contact Form Data</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Information submitted through our contact form, including your name, email
                address, phone number, message details, and any files you choose to attach,
                for the purpose of responding to your inquiry.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'use',
      title: '3. Use of Your Information',
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            We use the information we collect to support our services and operate our
            website responsibly.
          </p>

          <ul className="grid gap-3">
            {[
              'Provide, operate, and maintain our website and services',
              'Respond to your inquiries and provide customer support',
              'Send administrative information such as updates, security alerts, and service notices',
              'Improve our website and services based on feedback and usage patterns',
              'Comply with legal obligations and protect our legal rights',
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
      id: 'disclosure',
      title: '4. Disclosure of Your Information',
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            We may share information we have collected about you only where necessary and in
            appropriate circumstances.
          </p>

          <div className="space-y-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                By Law or to Protect Rights
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                We may disclose information if required to comply with legal obligations,
                respond to lawful requests, investigate policy violations, or protect the
                rights, safety, and property of LSDB or others.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Service Providers</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                We may engage trusted third-party providers to support website hosting,
                communication systems, technical operations, and related service delivery.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">Business Transfers</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Information may be disclosed in connection with organizational restructuring,
                merger, financing, or transfer of operations, where legally appropriate.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'security',
      title: '5. Data Security',
      content: (
        <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
          We use administrative, technical, and physical safeguards designed to protect your
          personal information. While we take reasonable steps to secure the information you
          provide, no transmission method or storage system can be guaranteed as completely
          secure, and absolute security cannot be assured.
        </p>
      ),
    },
    {
      id: 'rights',
      title: '6. Your Rights',
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            Depending on your location and applicable law, you may have rights regarding your
            personal information.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'Right to access the personal information we hold about you',
              'Right to request correction of inaccurate personal information',
              'Right to request deletion of personal information',
              'Right to object to certain processing activities',
              'Right to data portability where applicable',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm leading-7 text-slate-600">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            To exercise these rights, please contact us at{' '}
            <a
              href="mailto:privacy@lsdb.or.tz"
              className="font-medium text-[#0B5FFF] underline-offset-4 hover:underline"
            >
              privacy@lsdb.or.tz
            </a>
            .
          </p>
        </div>
      ),
    },
    {
      id: 'contact',
      title: '7. Contact Us',
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-7 text-slate-600 sm:text-[15px]">
            If you have any questions or comments about this Privacy Policy, please contact
            us using the details below.
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
                  href="mailto:privacy@lsdb.or.tz"
                  className="break-all font-medium text-[#0B5FFF] underline-offset-4 hover:underline"
                >
                  privacy@lsdb.or.tz
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
          {/* Fixed / sticky header */}
          <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
            <div className="border-b border-slate-100 bg-gradient-to-r from-[#0B5FFF]/8 via-white to-[#2E85FF]/8 px-4 py-4 sm:px-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0B5FFF]">
                    Legal Document
                  </p>
                  <h2 className="mt-2 pr-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {t.legal.privacyPolicy}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    This policy explains how LSDB collects, uses, stores, and protects
                    personal information provided through its website and services.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close privacy policy"
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

          {/* Scrollable content */}
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
                  If you do not agree with this policy, please discontinue use of the
                  website or contact LSDB for clarification before submitting personal
                  information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}