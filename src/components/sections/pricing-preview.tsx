import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { PricingTiers } from "@/components/sections/pricing-tiers";

export function PricingPreview() {
  return (
    <Section id="pricing" className="border-t border-border bg-surface/60">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple plans that grow with the team."
          description="Start on any plan with a 14-day trial. Change or cancel whenever you like."
        />
        <Link
          href="/pricing"
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent"
        >
          Compare all plans
          <ArrowRight
            aria-hidden
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </Link>
      </div>

      <div className="mt-12">
        <PricingTiers />
      </div>
    </Section>
  );
}
