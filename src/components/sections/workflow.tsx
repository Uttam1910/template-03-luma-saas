import { Section, SectionHeading } from "@/components/ui/section";
import { steps } from "@/content/features";

/**
 * Three-step progression. The connecting line is decorative; the numbered
 * headings carry the order for anyone who cannot see it.
 */
export function Workflow() {
  return (
    <Section id="workflow">
      <SectionHeading
        eyebrow="How it works"
        title="Three steps, and the week runs itself."
        description="No migration project, no consultant, no six-week rollout. Most teams are working in Luma the same afternoon they sign up."
      />

      <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {/* Connector: only drawn on the row layout. */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-6 hidden h-px bg-gradient-to-r from-accent/50 via-accent/25 to-transparent md:block"
        />

        {steps.map((step) => (
          <li key={step.number} className="relative">
            <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface font-mono text-sm font-medium text-accent shadow-soft">
              {step.number}
            </span>
            <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 max-w-xs text-[0.95rem] leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
