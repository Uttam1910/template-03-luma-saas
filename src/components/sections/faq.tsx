import { Plus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import type { FaqItem } from "@/content/types";

/**
 * Native `details`/`summary` accordion: keyboard accessible, announced
 * correctly, and fully functional with JavaScript disabled. No client state.
 */
export function Faq({
  items,
  eyebrow = "FAQ",
  title = "Questions teams ask before they switch.",
  description,
  id = "faq",
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
}) {
  return (
    <Section id={id} className="border-t border-border">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="divide-y divide-border border-y border-border">
          {items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                <h3 className="text-[1.02rem] font-medium">{item.question}</h3>
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                >
                  <Plus className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
              </summary>
              <p className="max-w-xl pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
