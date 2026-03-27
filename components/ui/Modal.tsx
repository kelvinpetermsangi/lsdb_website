"use client";

import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "lg",
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`relative flex max-h-[90vh] w-full ${sizeClasses[size]} flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_30px_90px_rgba(17,33,50,0.18)]`}
      >
        <div className="flex items-center justify-between border-b border-[color:var(--line)] px-6 py-5">
          <h2 className="text-xl font-semibold text-[color:var(--ink)]">{title}</h2>
          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-xl text-[color:var(--ink)] transition hover:border-[color:var(--brand-blue)] hover:text-[color:var(--brand-blue)]"
            aria-label="Close modal"
          >
            x
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>

        <div className="border-t border-[color:var(--line)] px-6 py-5">
          <button onClick={onClose} className="btn-primary-shell w-full">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
