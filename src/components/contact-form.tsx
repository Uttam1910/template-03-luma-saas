"use client";

import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type Field = "name" | "email" | "company" | "message";
type Errors = Partial<Record<Field, string>>;

const fields: {
  name: Field;
  label: string;
  type: "text" | "email" | "textarea";
  autoComplete?: string;
  optional?: boolean;
  placeholder: string;
}[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    autoComplete: "name",
    placeholder: "Maya Ellison",
  },
  {
    name: "email",
    label: "Work email",
    type: "email",
    autoComplete: "email",
    placeholder: "maya@company.com",
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    autoComplete: "organization",
    optional: true,
    placeholder: "Northstar",
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Tell us a little about your team and what you’re trying to fix.",
  },
];

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please add at least 10 characters so we can help.";
  }
  return errors;
}

/**
 * Demo form. Validation runs in the browser and nothing is transmitted —
 * there is no endpoint, no storage and no email. The confirmation says so.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      const first = fields.find((field) => found[field.name]);
      if (first) document.getElementById(first.name)?.focus();
      return;
    }

    setSubmitted(true);
    // Move focus to the confirmation so it is announced and reachable.
    window.requestAnimationFrame(() => statusRef.current?.focus());
  }

  if (submitted) {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-panel border border-accent/30 bg-accent-soft p-8"
      >
        <CheckCircle2
          aria-hidden
          className="h-8 w-8 text-accent"
          strokeWidth={1.6}
        />
        <h3 className="mt-4 text-xl font-semibold">Form validated</h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
          This is a demo form. No message was actually sent — this template has
          no backend, no email service and no stored data. Wire the submit
          handler in{" "}
          <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.85em]">
            src/components/contact-form.tsx
          </code>{" "}
          to your own endpoint.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={buttonClass("secondary", "sm", "mt-6")}
        >
          Fill it in again
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="rounded-panel border border-border bg-surface p-6 sm:p-8"
    >
      <div className="flex flex-col gap-5">
        {fields.map((field) => {
          const error = errors[field.name];
          const describedBy = error ? `${field.name}-error` : undefined;
          const shared = cn(
            "w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm transition-colors placeholder:text-muted-foreground/60",
            error
              ? "border-warning"
              : "border-border hover:border-border-strong",
          );

          return (
            <div key={field.name} className="flex flex-col gap-1.5">
              <label
                htmlFor={field.name}
                className="flex items-baseline justify-between text-sm font-medium"
              >
                {field.label}
                {field.optional ? (
                  <span className="text-xs font-normal text-muted-foreground">
                    Optional
                  </span>
                ) : null}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={5}
                  placeholder={field.placeholder}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={describedBy}
                  className={cn(shared, "resize-y")}
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={describedBy}
                  className={shared}
                />
              )}

              {error ? (
                <p
                  id={`${field.name}-error`}
                  className="text-xs font-medium text-warning"
                >
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <button type="submit" className={buttonClass("primary", "md", "mt-7 w-full")}>
        Send message
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Demo form — submitting validates the fields but sends nothing.
      </p>
    </form>
  );
}
