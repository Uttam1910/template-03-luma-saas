import type { Metadata } from "next";
import { Check } from "lucide-react";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { Workflow } from "@/components/sections/workflow";
import { Container } from "@/components/ui/container";
import { WorkspacePreview } from "@/components/product/workspace-preview";
import { featureDetails } from "@/content/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "One workspace for projects, tasks, collaboration and progress — see how Luma keeps a growing team in focus.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Features — Luma",
    description:
      "One workspace for projects, tasks, collaboration and progress.",
    url: "/features",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="One workspace, built to keep work readable."
        description="Luma replaces the scattered plan, the parallel chat thread and the hand-assembled status update with a single place your team already understands."
      />

      <Container className="relative -mt-8 pb-4 sm:-mt-10">
        <div className="animate-rise">
          <WorkspacePreview />
        </div>
      </Container>

      <FeatureGrid
        eyebrow="The essentials"
        title="Six ideas that shape the whole product."
        description="Each one removes a step teams usually do by hand — chasing status, rebuilding plans, or reconciling two versions of the truth."
      />

      <FeatureShowcase />

      <Workflow />

      <section className="border-t border-border bg-surface/60 py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {featureDetails.map((detail) => (
              <div
                key={detail.title}
                className="rounded-panel border border-border bg-surface p-7"
              >
                <h2 className="text-xl font-semibold">{detail.title}</h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {detail.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check
                        aria-hidden
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        strokeWidth={2.4}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <div className="pt-20 sm:pt-24">
        <FinalCta
          title="See it with your own projects."
          description="Start a free workspace, import one project, and judge it by the end of the week."
        />
      </div>
    </>
  );
}
