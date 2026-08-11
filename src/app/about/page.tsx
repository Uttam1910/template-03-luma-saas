import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Avatar } from "@/components/product/bits";
import { about, stats, team, values } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Luma is a small team building a calm workspace for growing teams. Fictional company details, used to demonstrate this template.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Luma",
    description: "A small team building a calm workspace for growing teams.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={about.eyebrow}
        title={about.title}
        description={about.intro}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-semibold sm:text-3xl">Our story</h2>
              {about.story.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-[1.02rem] leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="u-edge rounded-panel border border-border bg-surface p-7">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Mission
              </h2>
              <p className="mt-4 text-lg leading-relaxed">{about.mission}</p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-7">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold tracking-tight">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section id="values" className="border-t border-border bg-surface/60 py-20 sm:py-24">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl">What we value</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <li
                key={value.title}
                className="rounded-card border border-border bg-surface p-6"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={value.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="team" className="py-20 sm:py-24">
        <Container>
          <h2 className="text-3xl font-semibold sm:text-4xl">The team</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Eighteen people across twelve countries. The six below are demo
            profiles for this template.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <li
                key={member.name}
                className="flex items-center gap-4 rounded-card border border-border bg-surface p-5 transition-colors hover:border-border-strong"
              >
                <Avatar
                  initials={member.initials}
                  className="h-11 w-11 text-sm"
                />
                <div className="min-w-0">
                  <p className="truncate font-medium">{member.name}</p>
                  <p className="truncate text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCta
        title="Come build the calm layer with us."
        description="We are a small team and we like it that way. If the idea resonates, say hello."
      />
    </>
  );
}
