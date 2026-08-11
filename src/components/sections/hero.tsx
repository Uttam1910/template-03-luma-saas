import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WorkspacePreview } from "@/components/product/workspace-preview";
import { cta, site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="u-glow absolute inset-x-0 top-0 h-[42rem]" />
        <div className="u-grid u-mask-b absolute inset-x-0 top-0 h-[32rem] opacity-70" />
      </div>

      <Container className="relative pt-16 pb-20 sm:pt-20 lg:pt-24">
        <div className="max-w-3xl">
          <p
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
            style={{ animationDelay: "40ms" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            Now with workload planning
          </p>

          <h1
            className="animate-rise mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]"
            style={{ animationDelay: "90ms" }}
          >
            Your team&rsquo;s work,
            <br />
            <span className="text-accent">finally in focus.</span>
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "150ms" }}
          >
            {site.name} gives growing teams one clear place to plan projects,
            move ideas forward, and see what matters next.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "210ms" }}
          >
            <Link href={cta.primary.href} className={buttonClass("primary", "lg")}>
              {cta.primary.label}
              <ArrowRight aria-hidden className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              href={cta.secondary.href}
              className={buttonClass("secondary", "lg")}
            >
              {cta.secondary.label}
            </Link>
          </div>

          <ul
            className="animate-rise mt-6 flex flex-wrap gap-x-6 gap-y-2"
            style={{ animationDelay: "260ms" }}
          >
            {cta.meta.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Check aria-hidden className="h-4 w-4 text-accent" strokeWidth={2.2} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="animate-rise relative mt-14 sm:mt-16"
          style={{ animationDelay: "320ms" }}
        >
          <WorkspacePreview />
        </div>
      </Container>
    </section>
  );
}
