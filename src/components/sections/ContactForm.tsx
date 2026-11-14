"use client";

import { CircleCheck, Send } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Field = "name" | "email" | "subject" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

const initialValues: Values = { name: "", email: "", subject: "", message: "" };

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.subject.trim().length < 3) errors.subject = "Please add a short subject.";
  if (values.message.trim().length < 10) errors.message = "Your message should be at least 10 characters.";
  return errors;
}

/**
 * Contact form with client-side validation.
 *
 * It works with zero backend setup: on submit it opens the visitor's email
 * client with the message pre-filled. To send messages directly instead,
 * POST `values` to a route handler (e.g. using Resend) or a form service.
 */
export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (field: Field) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      document.getElementById(`${uid}-${firstInvalid}`)?.focus();
      return;
    }

    const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`;
    const href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  const fieldClass = (field: Field) =>
    cn(
      "w-full rounded-xl border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-subtle transition-colors duration-200 outline-none focus:border-accent focus:bg-surface focus:ring-4 focus:ring-accent/10",
      errors[field] ? "border-red-500/70" : "border-border-strong",
    );

  const renderError = (field: Field) =>
    errors[field] ? (
      <p id={`${uid}-${field}-error`} className="mt-1.5 text-xs text-red-600 dark:text-red-400">
        {errors[field]}
      </p>
    ) : null;

  const a11y = (field: Field) => ({
    id: `${uid}-${field}`,
    name: field,
    value: values[field],
    onChange: update(field),
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${uid}-${field}-error` : undefined,
    className: fieldClass(field),
  });

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-[var(--radius-card)] border border-border bg-surface p-10 text-center shadow-soft">
        <span className="grid size-14 place-items-center rounded-full bg-accent-soft text-accent">
          <CircleCheck className="size-6" aria-hidden />
        </span>
        <h3 className="mt-5 text-xl font-semibold tracking-tight">Almost there!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted" role="status">
          Your email app should have opened with the message ready to send. If it didn&apos;t, write to{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-accent underline-offset-4 hover:underline">
            {siteConfig.email}
          </a>
          .
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="mt-6"
          onClick={() => {
            setValues(initialValues);
            setSent(false);
          }}
        >
          Write another message
        </Button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-label="Contact form"
      className="rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input type="text" autoComplete="name" placeholder="Jane Doe" {...a11y("name")} />
          {renderError("name")}
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input type="email" autoComplete="email" placeholder="jane@company.com" {...a11y("email")} />
          {renderError("email")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-subject`} className="mb-2 block text-sm font-medium">
            Subject
          </label>
          <input type="text" placeholder="Frontend role / freelance project" {...a11y("subject")} />
          {renderError("subject")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-message`} className="mb-2 block text-sm font-medium">
            Message
          </label>
          <textarea rows={6} placeholder="Tell me a little about the project or role…" {...a11y("message")} />
          {renderError("message")}
        </div>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-subtle">Opens your email app with the message pre-filled.</p>
        <Button type="submit" size="lg">
          Send Message
          <Send className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Button>
      </div>
    </form>
  );
}
