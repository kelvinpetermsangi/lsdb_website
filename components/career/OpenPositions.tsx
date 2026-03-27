'use client';

import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import { useLanguage } from '@/contexts/LanguageContext';
import OpenPositionsModal from './OpenPositionsModal';

interface OpenPositionsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OpenPositions({ isOpen, onClose }: OpenPositionsProps) {
  const { t } = useLanguage();
  const [careerType, setCareerType] = useState<'job' | 'volunteer' | null>(null);

  const closeAll = () => {
    setCareerType(null);
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen && !careerType} onClose={closeAll} title="" size="xl">
        <div className="bg-white">
          <div className="border-b border-slate-200 bg-gradient-to-r from-[#0B5FFF]/8 via-white to-[#2E85FF]/8 px-6 py-6">
            <div className="text-center">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#0B5FFF]/10 shadow-inner">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {t.openPositions.title}
              </h3>
              <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                We appreciate your interest in joining the LSDB team. Below you will find
                information about current opportunities to work or volunteer with us.
              </p>
            </div>
          </div>

          <div className="space-y-8 px-6 py-6">
            <section className="space-y-4">
              <h4 className="border-b border-slate-200 pb-2 text-lg font-semibold text-slate-900">
                Current Open Positions
              </h4>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0B5FFF]/10">
                    <span className="text-2xl">💼</span>
                  </div>
                  <p className="mb-2 font-semibold text-slate-900">
                    {t.openPositions.noPositions}
                  </p>
                  <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600">
                    We are not currently hiring for any paid positions. You may still submit your
                    profile for future consideration.
                  </p>

                  <button
                    type="button"
                    onClick={() => setCareerType('job')}
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-[#0B5FFF] px-6 py-3 font-semibold text-slate-900 shadow-[0_12px_30px_rgba(11,95,255,0.22)] transition hover:-translate-y-0.5 hover:bg-[#084EDB]"
                  >
                    Submit Career Interest
                  </button>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h4 className="border-b border-slate-200 pb-2 text-lg font-semibold text-slate-900">
                Volunteer Opportunities
              </h4>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <p className="mb-2 font-semibold text-slate-900">
                    {t.openPositions.noVolunteer}
                  </p>
                  <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600">
                    We are not currently accepting volunteer applications. You may still submit
                    your profile for future consideration.
                  </p>

                  <button
                    type="button"
                    onClick={() => setCareerType('volunteer')}
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-[#0B5FFF] px-6 py-3 font-semibold text-slate-900 shadow-[0_12px_30px_rgba(11,95,255,0.22)] transition hover:-translate-y-0.5 hover:bg-[#084EDB]"
                  >
                    Submit Volunteer Interest
                  </button>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h4 className="border-b border-slate-200 pb-2 text-lg font-semibold text-slate-900">
                How to Stay Updated
              </h4>

              <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B5FFF]/10">
                    <span className="text-[#0B5FFF]">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Check Our Website Regularly</p>
                    <p className="text-sm leading-6 text-slate-600">
                      All new positions will be posted here first. {t.openPositions.checkBack}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B5FFF]/10">
                    <span className="text-[#0B5FFF]">📧</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Subscribe to Our Newsletter</p>
                    <p className="text-sm leading-6 text-slate-600">
                      Get notified about new opportunities by subscribing to our email updates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B5FFF]/10">
                    <span className="text-[#0B5FFF]">💼</span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Follow Us on Social Media</p>
                    <p className="text-sm leading-6 text-slate-600">
                      We often share updates about our work and opportunities on LinkedIn and other
                      platforms.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h4 className="border-b border-slate-200 pb-2 text-lg font-semibold text-slate-900">
                General Inquiries
              </h4>

              <div className="rounded-2xl border border-[#0B5FFF]/20 bg-[#0B5FFF]/5 p-5">
                <p className="mb-3 text-sm leading-6 text-slate-600">
                  For general questions about working with LSDB or future opportunities, please
                  contact:
                </p>

                <div className="space-y-2 text-sm text-slate-800">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:careers@lsdb.or.tz"
                      className="text-[#0B5FFF] hover:underline"
                    >
                      careers@lsdb.or.tz
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+255786476284" className="text-[#0B5FFF] hover:underline">
                      +255 786 476 284
                    </a>
                  </p>
                  <p>
                    <strong>Office Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-200 pt-4">
              <p className="text-center text-sm leading-6 text-slate-500">
                LSDB is an equal opportunity organization. We value diversity and are committed to
                creating an inclusive environment for all employees and volunteers.
              </p>
            </div>
          </div>
        </div>
      </Modal>

      <OpenPositionsModal
        isOpen={Boolean(careerType)}
        onClose={() => setCareerType(null)}
        type={careerType ?? 'job'}
      />
    </>
  );
}