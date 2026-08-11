import { Icon } from "@/components/ui/icon";
import { Section, SectionHeading } from "@/components/ui/section";
import { features } from "@/content/features";
import { cn } from "@/lib/cn";

/**
 * Editorial 4-column grid: two wide cards set the theme, four compact cards
 * carry the detail. Collapses to one column on phones.
 */
export function FeatureGrid({
  eyebrow = "Why Luma",
  title = "Everything the work needs. Nothing it doesn’t.",
  description = "Six ideas hold the whole product together. Each one exists to remove a step your team is doing by hand today.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const wide = index < 2;
          return (
            <li
              key={feature.number}
              className={cn(
                "group relative flex flex-col rounded-card border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-lifted",
                wide && "lg:col-span-2 lg:p-8",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={cn(
                    "inline-flex items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground",
                    wide ? "h-12 w-12" : "h-10 w-10",
                  )}
                >
                  <Icon
                    name={feature.icon}
                    className={wide ? "h-5.5 w-5.5" : "h-5 w-5"}
                  />
                </span>
                <span className="font-mono text-xs text-muted-foreground/70">
                  {feature.number}
                </span>
              </div>

              <h3
                className={cn(
                  "mt-5 font-semibold",
                  wide ? "text-xl lg:text-2xl" : "text-base",
                )}
              >
                {feature.title}
              </h3>
              <p
                className={cn(
                  "mt-2 leading-relaxed text-muted-foreground",
                  wide ? "max-w-md text-[0.95rem]" : "text-sm",
                )}
              >
                {feature.description}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
