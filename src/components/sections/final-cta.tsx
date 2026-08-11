import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cta } from "@/content/site";

export function FinalCta({
  title = "Make work feel lighter.",
  description = "Bring your projects into one clear workspace and let the weekly scramble go. Free for 14 days, no card, no setup call.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="pb-20 sm:pb-24 lg:pb-28">
      <Container>
        <div className="u-edge relative overflow-hidden rounded-panel border border-border bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="u-glow absolute inset-0" />
            <div className="u-grid absolute inset-0 opacity-60" />
          </div>

          <div className="relative mx-auto max-w-xl">
            <h2 className="text-3xl font-semibold sm:text-5xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={cta.primary.href}
                className={buttonClass("primary", "lg")}
              >
                {cta.primary.label}
                <ArrowRight aria-hidden className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link
                href={cta.talk.href}
                className={buttonClass("secondary", "lg")}
              >
                {cta.talk.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
