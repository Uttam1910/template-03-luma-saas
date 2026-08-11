import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { ProjectPreview } from "@/components/product/project-preview";
import { ProgressPreview } from "@/components/product/progress-preview";
import { TeamPreview } from "@/components/product/team-preview";
import { showcases } from "@/content/features";
import type { MockupName } from "@/content/types";
import { cn } from "@/lib/cn";

const mockups: Record<MockupName, React.ComponentType<{ className?: string }>> =
  {
    project: ProjectPreview,
    team: TeamPreview,
    progress: ProgressPreview,
  };

/** Three alternating copy/mockup rows. All mockups are static artwork. */
export function FeatureShowcase() {
  return (
    <section className="border-t border-border bg-surface/60 py-20 sm:py-24 lg:py-28">
      <Container className="flex flex-col gap-20 lg:gap-28">
        {showcases.map((showcase, index) => {
          const Mockup = mockups[showcase.mockup];
          const flipped = index % 2 === 1;

          return (
            <div
              key={showcase.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={cn(flipped && "lg:order-2")}>
                <Eyebrow>{showcase.eyebrow}</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  {showcase.title}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {showcase.description}
                </p>
                <ul className="mt-7 flex flex-col gap-3">
                  {showcase.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                        <Check aria-hidden className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={cn("relative", flipped && "lg:order-1")}>
                {/* Inset horizontally so the bloom never widens the page. */}
                <div
                  aria-hidden
                  className="u-glow pointer-events-none absolute inset-x-0 -inset-y-8 -z-10 opacity-70"
                />
                <Mockup />
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
