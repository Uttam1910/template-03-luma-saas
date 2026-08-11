import { Section, SectionHeading } from "@/components/ui/section";
import { Avatar } from "@/components/product/bits";
import { testimonials } from "@/content/testimonials";
import { cn } from "@/lib/cn";

/** Fictional quotes from fictional people — demo content for the layout. */
export function Testimonials() {
  return (
    <Section className="border-t border-border">
      <SectionHeading
        eyebrow="Social proof"
        title="What teams say once the noise drops."
        description="Quotes below are written demo content for this template, not real customer statements."
      />

      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <li
            key={testimonial.name}
            className={cn(
              "flex flex-col rounded-card border border-border bg-surface p-6 transition-shadow duration-300 hover:shadow-lifted",
              index === 1 && "md:bg-accent-soft md:border-accent/25",
            )}
          >
            <blockquote className="flex-1 text-[0.98rem] leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <Avatar
                initials={testimonial.initials}
                className="h-9 w-9 text-xs"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">
                  {testimonial.name}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
