"use client";

import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type AppointmentMode = "" | "online" | "face-to-face";
type SubjectOptions = ReturnType<typeof getSubjectOptions>;
type SubjectKey = keyof SubjectOptions;

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: SubjectKey | "";
  message: string;
  wantsAppointment: "yes" | "no";
  appointmentMode: AppointmentMode;
  preferredDate: string;
  preferredTime: string;
};

type FieldName = keyof FormState;
type FieldErrors = Partial<Record<FieldName, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

function getSubjectOptions(
  options: ReturnType<typeof useLanguage>["t"]["contactForm"]["options"]["subject"]
) {
  return options;
}

function normalizeTzPhone(value: string) {
  const digits = value.replace(/\D/g, "");

  if (!digits) return "";

  let cleaned = digits;

  if (cleaned.startsWith("255")) cleaned = cleaned.slice(3);
  if (cleaned.startsWith("0")) cleaned = cleaned.slice(1);

  return cleaned.slice(0, 9);
}

function toLocalPhone(nineDigits: string) {
  return nineDigits ? `0${nineDigits}` : "";
}

function toIntlPhone(nineDigits: string) {
  return nineDigits ? `+255${nineDigits}` : "";
}

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  wantsAppointment: "no",
  appointmentMode: "",
  preferredDate: "",
  preferredTime: "",
};

export default function ContactForm() {
  const { t } = useLanguage();
  const copy = t.contactForm;
  const contactDetails = t.contactDetails;

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const subjectOptions = useMemo(
    () => getSubjectOptions(copy.options.subject),
    [copy.options.subject]
  );

  const totalSteps = copy.steps.length;
  const isLastStep = step === totalSteps - 1;

  const currentSubjectLabel = formData.subject
    ? subjectOptions[formData.subject]
    : "";

  const appointmentLabel = formData.appointmentMode
    ? copy.options.appointmentMode[formData.appointmentMode]
    : "";

  const fieldClass = (field?: string) =>
    `w-full rounded-[1.25rem] border bg-white px-4 py-3.5 text-sm text-[color:var(--ink)] outline-none transition ${
      field
        ? "border-red-300 focus:border-red-400"
        : "border-[color:var(--line)] focus:border-[color:var(--brand-blue)]"
    }`;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    if (name === "phone") {
      setFormData((prev) => ({ ...prev, phone: normalizeTzPhone(value) }));
    } else if (name === "wantsAppointment") {
      setFormData((prev) => ({
        ...prev,
        wantsAppointment: value as FormState["wantsAppointment"],
        appointmentMode: value === "yes" ? prev.appointmentMode : "",
        preferredDate: value === "yes" ? prev.preferredDate : "",
        preferredTime: value === "yes" ? prev.preferredTime : "",
      }));
    } else if (name === "appointmentMode") {
      setFormData((prev) => ({
        ...prev,
        appointmentMode: value as AppointmentMode,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setNotice("");
  };

  const validateStep = (stepIndex: number) => {
    const nextErrors: FieldErrors = {};

    if (stepIndex === 0) {
      if (!formData.name.trim()) nextErrors.name = copy.validation.required;

      if (!formData.email.trim()) {
        nextErrors.email = copy.validation.required;
      } else if (!emailRegex.test(formData.email.trim())) {
        nextErrors.email = copy.validation.invalidEmail;
      }

      if (!formData.phone.trim()) {
        nextErrors.phone = copy.validation.required;
      } else if (!/^\d{9}$/.test(formData.phone.trim())) {
        nextErrors.phone = copy.validation.invalidPhone;
      }
    }

    if (stepIndex === 1) {
      if (!formData.subject) nextErrors.subject = copy.validation.selectOption;

      if (!formData.message.trim()) {
        nextErrors.message = copy.validation.required;
      } else if (formData.message.trim().length < 20) {
        nextErrors.message = copy.validation.messageShort;
      }

      if (formData.wantsAppointment === "yes") {
        if (!formData.appointmentMode) {
          nextErrors.appointmentMode = copy.validation.selectOption;
        }
        if (!formData.preferredDate) {
          nextErrors.preferredDate = copy.validation.required;
        }
        if (!formData.preferredTime) {
          nextErrors.preferredTime = copy.validation.required;
        }
      }
    }

    setErrors(nextErrors);
    const hasErrors = Object.keys(nextErrors).length > 0;

    if (hasErrors) {
      setNotice(
        stepIndex === 0 ? copy.validation.stepZeroNotice : copy.validation.stepOneNotice
      );
    } else {
      setNotice("");
    }

    return !hasErrors;
  };

  const buildSubmissionMessage = () => {
    const lines = [
      `Request type: ${currentSubjectLabel || formData.subject}`,
      "",
      formData.message.trim(),
    ];

    if (formData.wantsAppointment === "yes") {
      lines.push(
        "",
        `Appointment requested: ${appointmentLabel}`,
        `Preferred date: ${formData.preferredDate}`,
        `Preferred time: ${formData.preferredTime}`
      );
    }

    return lines.join("\n");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (!validateStep(0) || !validateStep(1)) {
      setStep(0);
      setNotice(copy.validation.reviewNotice);
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
          phone: toIntlPhone(formData.phone),
          subject: currentSubjectLabel || formData.subject,
          message: buildSubmissionMessage(),
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          payload && typeof payload.error === "string"
            ? payload.error
            : "Unable to send request."
        );
      }

      setFormData(initialFormState);
      setErrors({});
      setStep(0);
      setNotice("");
      setSuccessOpen(true);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to send request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-wrap section-pad pt-4">
        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <div className="card-shell self-start p-6 sm:p-8 lg:p-10">
            <span className="eyebrow">{copy.heroBadge}</span>
            <h2 className="mt-6 text-3xl font-semibold sm:text-4xl">{copy.heroTitle}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8">{copy.heroText}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {copy.steps.map((stepLabel, index) => {
                const active = index === step;
                const complete = index < step;

                return (
                  <div
                    key={stepLabel}
                    className={`rounded-[1.4rem] border px-4 py-4 ${
                      active
                        ? "border-[color:var(--brand-blue)] bg-[color:var(--soft-blue)]"
                        : complete
                          ? "border-[color:var(--brand-green)] bg-[color:var(--soft-green)]"
                          : "border-[color:var(--line)] bg-[color:var(--surface)]"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-[color:var(--ink)]">
                      {stepLabel}
                    </h3>
                    <p className="mt-2 text-sm leading-6">{copy.stepText[index]}</p>
                  </div>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {step === 0 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-[color:var(--ink)]">
                      {copy.labels.name}
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={copy.placeholders.name}
                      className={fieldClass(errors.name)}
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[color:var(--ink)]">
                      {copy.labels.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={copy.placeholders.email}
                      className={fieldClass(errors.email)}
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[color:var(--ink)]">
                      {copy.labels.phone}
                    </label>
                    <input
                      name="phone"
                      value={toLocalPhone(formData.phone)}
                      onChange={handleChange}
                      placeholder={copy.placeholders.phone}
                      className={fieldClass(errors.phone)}
                    />
                    <p className="mt-2 text-xs leading-6">{copy.helper.phone}</p>
                    {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[color:var(--ink)]">
                      {copy.labels.subject}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={fieldClass(errors.subject)}
                    >
                      <option value="">{copy.placeholders.subject}</option>
                      {Object.entries(subjectOptions).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="mt-2 text-sm text-red-600">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[color:var(--ink)]">
                      {copy.labels.message}
                    </label>
                    <textarea
                      rows={7}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={copy.placeholders.message}
                      className={fieldClass(errors.message)}
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5">
                    <label className="mb-2 block text-sm font-semibold text-[color:var(--ink)]">
                      {copy.labels.wantsAppointment}
                    </label>
                    <select
                      name="wantsAppointment"
                      value={formData.wantsAppointment}
                      onChange={handleChange}
                      className={fieldClass()}
                    >
                      <option value="no">{copy.options.yesNo.no}</option>
                      <option value="yes">{copy.options.yesNo.yes}</option>
                    </select>

                    {formData.wantsAppointment === "yes" && (
                      <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-[color:var(--ink)]">
                            {copy.labels.appointmentMode}
                          </label>
                          <select
                            name="appointmentMode"
                            value={formData.appointmentMode}
                            onChange={handleChange}
                            className={fieldClass(errors.appointmentMode)}
                          >
                            <option value="">{copy.validation.selectOption}</option>
                            <option value="online">
                              {copy.options.appointmentMode.online}
                            </option>
                            <option value="face-to-face">
                              {copy.options.appointmentMode["face-to-face"]}
                            </option>
                          </select>
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold text-[color:var(--ink)]">
                            {copy.labels.preferredDate}
                          </label>
                          <input
                            type="date"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleChange}
                            className={fieldClass(errors.preferredDate)}
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-semibold text-[color:var(--ink)]">
                            {copy.labels.preferredTime}
                          </label>
                          <input
                            type="time"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleChange}
                            className={fieldClass(errors.preferredTime)}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-4 md:grid-cols-2">
                  <ReviewCard label={copy.labels.name} value={formData.name} />
                  <ReviewCard label={copy.labels.email} value={formData.email} />
                  <ReviewCard
                    label={copy.review.localNumber}
                    value={toLocalPhone(formData.phone)}
                  />
                  <ReviewCard
                    label={copy.review.internationalNumber}
                    value={toIntlPhone(formData.phone)}
                  />
                  <ReviewCard
                    label={copy.labels.subject}
                    value={currentSubjectLabel}
                    className="md:col-span-2"
                  />
                  <ReviewCard
                    label={copy.labels.message}
                    value={formData.message}
                    className="md:col-span-2"
                  />
                  <ReviewCard
                    label={copy.review.appointment}
                    value={
                      formData.wantsAppointment === "yes"
                        ? `${appointmentLabel} | ${formData.preferredDate} | ${formData.preferredTime}`
                        : copy.review.none
                    }
                    className="md:col-span-2"
                  />
                </div>
              )}

              {(notice || errorMessage) && (
                <div className="rounded-[1.4rem] border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
                  {notice || errorMessage}
                </div>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                <button
                  type="button"
                  onClick={() => setStep((prev) => Math.max(0, prev - 1))}
                  disabled={step === 0 || isSubmitting}
                  className="btn-secondary-shell disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {copy.buttons.back}
                </button>

                {!isLastStep ? (
                  <button
                    type="button"
                    onClick={() => {
                      if (validateStep(step)) {
                        setStep((prev) => prev + 1);
                      }
                    }}
                    className="btn-primary-shell"
                  >
                    {copy.buttons.next}
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary-shell disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? copy.buttons.sending : copy.buttons.submit}
                  </button>
                )}
              </div>
            </form>
          </div>

          <aside className="card-shell self-start p-6 sm:p-8">
            <h3 className="text-2xl font-semibold">{copy.side.supportTitle}</h3>

            <div className="mt-6 space-y-4">
              <div className="rounded-[1.4rem] bg-[color:var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
                  {copy.side.responseTitle}
                </p>
                <p className="mt-3 text-sm leading-7">{copy.side.responseText}</p>
              </div>

              <div className="rounded-[1.4rem] bg-[color:var(--surface)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
                  {copy.side.hoursLabel}
                </p>
                <div className="mt-4 space-y-2 text-sm leading-7 text-[color:var(--ink)]">
                  <div className="flex justify-between gap-3">
                    <span>{copy.side.hoursWeekdays}</span>
                    <span>{copy.side.timeWeekdays}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span>{copy.side.hoursSaturday}</span>
                    <span>{copy.side.timeSaturday}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span>{copy.side.hoursSunday}</span>
                    <span>{copy.side.timeSunday}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-[color:var(--line)] bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
                  {copy.side.follow}
                </p>
                <p className="mt-3 text-sm leading-7">{copy.side.followText}</p>

                <div className="mt-4 space-y-2 text-sm text-[color:var(--ink)]">
                  <a
                    href={`tel:${contactDetails.phoneDial}`}
                    className="block font-medium text-[color:var(--brand-blue)]"
                  >
                    {contactDetails.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="block font-medium text-[color:var(--brand-blue)]"
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>

              <div className="rounded-[1.4rem] bg-[color:var(--soft-green)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-green-deep)]">
                  {copy.side.whatsappTitle}
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--ink)]">
                  {copy.side.whatsappText}
                </p>
                <a
                  href={`https://wa.me/${contactDetails.phoneDial.replace("+", "")}?text=${encodeURIComponent(
                    "Hello LSDB, I need immediate help."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1da851]"
                >
                  {copy.side.whatsappCta}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {successOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 px-4">
          <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-[0_30px_90px_rgba(17,33,50,0.2)]">
            <h3 className="text-2xl font-semibold">{copy.success.title}</h3>
            <p className="mt-4 text-base leading-8">{copy.success.text}</p>
            <button
              type="button"
              onClick={() => setSuccessOpen(false)}
              className="btn-primary-shell mt-6 w-full"
            >
              {copy.buttons.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ReviewCard({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`rounded-[1.4rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5 ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-blue)]">
        {label}
      </p>
      <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-7 text-[color:var(--ink)]">
        {value || "-"}
      </p>
    </div>
  );
}
