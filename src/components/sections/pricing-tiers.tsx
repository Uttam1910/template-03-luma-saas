import Link from "next/link";
import { Check } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { billingNote, tiers } from "@/content/pricing";
import { cn } from "@/lib/cn";

/**
 * Pricing cards. Shared by the home preview and the pricing page.
 * Demo pricing only — the CTAs go to the contact page, there is no checkout.
 */
export function PricingTiers() {
  return (
    <div>
      <ul className="grid gap-4 lg:grid-cols-3">
        {tiers.map((tier) => (
          <li
            key={tier.id}
            className={cn(
              "relative flex flex-col rounded-panel border p-6 transition-shadow duration-300 sm:p-7",
              tier.highlighted
                ? "border-accent/40 bg-surface shadow-panel lg:-mt-3 lg:mb-3"
                : "border-border bg-surface hover:shadow-lifted",
            )}
          >
            {tier.highlighted ? (
              <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[0.7rem] font-medium text-accent-foreground">
                Most popular
              </span>
            ) : null}

            <h3 className="text-lg font-semibold">{tier.name}</h3>
            <p className="mt-1.5 min-h-10 text-sm leading-relaxed text-muted-foreground">
              {tier.description}
            </p>

            <p className="mt-6 flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight">
                {tier.price}
              </span>
              <span className="text-sm text-muted-foreground">
                {tier.period}
              </span>
            </p>

            <Link
              href={tier.href}
              className={buttonClass(
                tier.highlighted ? "primary" : "secondary",
                "md",
                "mt-6 w-full",
              )}
            >
              {tier.cta}
              <span className="sr-only"> with the {tier.name} plan</span>
            </Link>

            <ul className="mt-7 flex flex-col gap-3 border-t border-border pt-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm">
                  <Check
                    aria-hidden
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    strokeWidth={2.4}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        {billingNote} This template does not process payments.
      </p>
    </div>
  );
}
