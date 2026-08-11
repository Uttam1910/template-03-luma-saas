import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";

/** Shared header for the inner pages. Renders the single h1 for those pages. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="u-glow absolute inset-x-0 top-0 h-[30rem]" />
        <div className="u-grid u-mask-b absolute inset-x-0 top-0 h-[22rem] opacity-70" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="animate-rise mt-5 text-[2.4rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p
            className="animate-rise mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "80ms" }}
          >
            {description}
          </p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
