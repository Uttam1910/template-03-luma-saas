import { Container } from "@/components/ui/container";
import { trustedBy } from "@/content/features";

/** Text wordmarks only — these companies are fictional. */
export function TrustedBy() {
  return (
    <section className="border-y border-border bg-surface/60 py-10">
      <Container>
        <h2 className="text-center text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Trusted by teams at
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
          {trustedBy.map((company) => (
            <li
              key={company}
              className="text-center text-lg font-semibold tracking-tight text-foreground/45 transition-colors hover:text-foreground/70"
            >
              {company}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
