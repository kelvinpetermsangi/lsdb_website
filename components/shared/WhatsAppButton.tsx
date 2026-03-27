"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const { contactDetails, shared } = t;
  const phone = contactDetails.phoneDial.replace("+", "");
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Hello LSDB, I need immediate help."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${shared.whatsappCta} ${contactDetails.phoneDisplay}`}
      className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_20px_45px_rgba(37,211,102,0.3)] transition hover:-translate-y-1 hover:bg-[#1da851] sm:bottom-6 sm:right-6"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="h-5 w-5 shrink-0"
      >
        <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.93 9.93 0 0 0-8.53 15.03L2 22l5.13-1.35A9.93 9.93 0 0 0 12 22a10 10 0 0 0 7.05-17.06Zm-7.05 15.38a8.3 8.3 0 0 1-4.22-1.15l-.3-.18-3.05.8.81-2.98-.2-.31a8.31 8.31 0 1 1 6.96 3.82Zm4.56-6.23c-.25-.13-1.46-.72-1.69-.8-.23-.08-.4-.13-.57.12-.17.25-.65.8-.8.97-.15.17-.29.19-.54.06-.25-.13-1.04-.38-1.99-1.22-.74-.66-1.24-1.46-1.38-1.71-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.57-1.38-.78-1.89-.2-.49-.41-.42-.57-.43h-.48c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.09 0 1.23.9 2.41 1.02 2.58.13.17 1.76 2.69 4.27 3.77.6.26 1.07.42 1.43.54.6.19 1.15.16 1.58.1.48-.07 1.46-.6 1.67-1.19.21-.59.21-1.09.15-1.19-.06-.1-.23-.17-.48-.29Z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/80">
          {shared.whatsappLabel}
        </span>
        <span className="text-sm font-semibold">{shared.whatsappCta}</span>
      </span>
    </a>
  );
}
