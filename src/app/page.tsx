import { Faq } from "@/components/sections/faq";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Workflow } from "@/components/sections/workflow";
import { faq } from "@/content/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <FeatureGrid />
      <FeatureShowcase />
      <Workflow />
      <Testimonials />
      <PricingPreview />
      <Faq items={faq} />
      <FinalCta />
    </>
  );
}
