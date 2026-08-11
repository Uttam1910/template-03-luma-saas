import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { PricingTiers } from "@/components/sections/pricing-tiers";
import { Container } from "@/components/ui/container";
import { comparison, tiers } from "@/content/pricing";
import { pricingFaq } from "@/content/faq";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Starter, Team and Scale plans for Luma. Demo pricing for a website template — no checkout, no payment processing.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — Luma",
    description: "Starter, Team and Scale plans for growing teams.",
    url: "/pricing",
  },
};

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "string") {
    return <span className="text-sm">{value}</span>;
  }
  return value ? (
    <>
      <Check
        aria-hidden
        className="mx-auto h-4 w-4 text-accent"
        strokeWidth={2.4}
      />
      <span className="sr-only">Included</span>
    </>
  ) : (
    <>
      <Minus
        aria-hidden
        className="mx-auto h-4 w-4 text-muted-foreground/50"
        strokeWidth={2}
      />
      <span className="sr-only">Not included</span>
    </>
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Pay for the team you have, not the one you might have."
        description="Every plan starts with a 14-day trial. Guests are always free, and you can move between plans whenever the team changes."
      />

      <section className="py-16 sm:py-20">
        <Container>
          {/* The cards speak for themselves visually; the heading keeps the
              document outline intact for assistive technology. */}
          <h2 className="sr-only">Plans</h2>
          <PricingTiers />
        </Container>
      </section>

      <section className="border-t border-border bg-surface/60 py-20 sm:py-24">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Compare the plans
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            The full breakdown, so you do not have to guess which line matters.
          </p>

          <p className="mt-6 text-xs text-muted-foreground sm:hidden">
            Scroll the table sideways to compare all three plans.
          </p>

          {/* Wide table scrolls inside its own container — the page never does. */}
          <div className="mt-4 -mx-5 overflow-x-auto px-5 sm:mt-10 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[38rem] border-collapse text-left">
              <caption className="sr-only">
                Feature comparison across the Starter, Team and Scale plans
              </caption>
              <thead>
                <tr className="border-b border-border-strong">
                  <th scope="col" className="py-4 pr-4 text-sm font-semibold">
                    Feature
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.id}
                      scope="col"
                      className={cn(
                        "w-32 px-3 py-4 text-center text-sm font-semibold",
                        tier.highlighted && "text-accent",
                      )}
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              {comparison.map((group) => (
                <tbody key={group.title}>
                  <tr>
                    <th
                      scope="colgroup"
                      colSpan={tiers.length + 1}
                      className="pt-8 pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {group.title}
                    </th>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label} className="border-t border-border">
                      <th
                        scope="row"
                        className="py-3.5 pr-4 text-sm font-normal"
                      >
                        {row.label}
                      </th>
                      {row.values.map((value, index) => (
                        <td
                          key={tiers[index].id}
                          className={cn(
                            "px-3 py-3.5 text-center",
                            tiers[index].highlighted && "bg-accent-soft/40",
                          )}
                        >
                          <Cell value={value} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </Container>
      </section>

      <Faq
        items={pricingFaq}
        eyebrow="Billing FAQ"
        title="The billing questions, answered plainly."
        description="If something is still unclear, the contact page reaches a person."
      />

      <FinalCta
        title="Try it before you decide."
        description="Fourteen days, every feature on the Team plan, no card and no sales call."
      />
    </>
  );
}
