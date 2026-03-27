"use client";

import { useState, type FormEvent } from "react";
import Modal from "@/components/ui/Modal";
import { useLanguage } from "@/contexts/LanguageContext";

type CareerType = "job" | "volunteer";

interface OpenPositionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: CareerType;
}

type InterestFormState = {
  name: string;
  email: string;
  phone: string;
  expertise: string;
  message: string;
};

const initialState: InterestFormState = {
  name: "",
  email: "",
  phone: "",
  expertise: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function OpenPositionsModal({
  isOpen,
  onClose,
  type,
}: OpenPositionsModalProps) {
  const { t } = useLanguage();
  const copy = type === "job" ? t.careerForm.job : t.careerForm.volunteer;
  const labels = t.careerForm.labels;
  const common = t.careerForm.common;

  const [formData, setFormData] = useState<InterestFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    setFormData(initialState);
    setIsSubmitting(false);
    setSubmitError("");
    setIsSubmitted(false);
    onClose();
  };

  const validate = () => {
    if (!formData.name.trim()) return common.errors.fullName;
    if (!formData.email.trim()) return common.errors.email;
    if (!EMAIL_REGEX.test(formData.email.trim())) return common.errors.validEmail;
    if (!formData.message.trim()) return common.errors.message;
    if (formData.message.trim().length < 20) return common.errors.messageLength;
    return null;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    const validationError = validate();
    if (validationError) {
      setSubmitError(validationError);
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          subject: copy.subject,
          message: [
            `Type: ${type === "job" ? copy.title : copy.title}`,
            `Area of interest: ${formData.expertise.trim() || "-"}`,
            "",
            formData.message.trim(),
          ].join("\n"),
        }),
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(
          payload && typeof payload.error === "string"
            ? payload.error
            : common.errors.generic
        );
      }

      setFormData(initialState);
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : common.errors.generic);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={copy.title} size="lg">
      {isSubmitted ? (
        <div className="space-y-5">
          <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5">
            <h3 className="text-lg font-semibold text-emerald-900">
              {common.successTitle}
            </h3>
            <p className="mt-3 text-sm leading-7 text-emerald-800">{common.successText}</p>
          </div>

          <button type="button" onClick={handleClose} className="btn-primary-shell w-full">
            {common.close}
          </button>
        </div>
      ) : (
        <form className="space-y-5" onSubmit={handleSubmit}>
          <p className="text-sm leading-7 text-[color:var(--muted)]">{copy.subtitle}</p>

          {submitError && (
            <div className="rounded-[1.25rem] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {submitError}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label={labels.fullName}
              value={formData.name}
              onChange={(value) => setFormData((prev) => ({ ...prev, name: value }))}
            />
            <Field
              label={labels.email}
              type="email"
              value={formData.email}
              onChange={(value) => setFormData((prev) => ({ ...prev, email: value }))}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label={labels.phone}
              value={formData.phone}
              onChange={(value) => setFormData((prev) => ({ ...prev, phone: value }))}
            />
            <Field
              label={labels.expertise}
              value={formData.expertise}
              placeholder={copy.expertisePlaceholder}
              onChange={(value) => setFormData((prev) => ({ ...prev, expertise: value }))}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[color:var(--ink)]">
              {labels.message}
            </label>
            <textarea
              rows={6}
              value={formData.message}
              onChange={(event) =>
                setFormData((prev) => ({ ...prev, message: event.target.value }))
              }
              placeholder={copy.placeholder}
              className="w-full rounded-[1.25rem] border border-[color:var(--line)] px-4 py-3.5 text-sm text-[color:var(--ink)] outline-none transition focus:border-[color:var(--brand-blue)]"
            />
          </div>

          <button type="submit" disabled={isSubmitting} className="btn-primary-shell w-full">
            {isSubmitting ? common.submitting : copy.submitLabel}
          </button>
        </form>
      )}
    </Modal>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[color:var(--ink)]">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-[1.25rem] border border-[color:var(--line)] px-4 py-3.5 text-sm text-[color:var(--ink)] outline-none transition focus:border-[color:var(--brand-blue)]"
      />
    </label>
  );
}
