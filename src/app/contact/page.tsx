import type { Metadata } from "next";
import { LifeBuoy, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Luma team about your workspace, pricing or migration. Demo contact page for a website template.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Luma",
    description: "Talk to the Luma team about your workspace or pricing.",
    url: "/contact",
  },
};

const details = [
  {
    icon: Mail,
    title: "Email us",
    body: site.email,
    href: `mailto:${site.email}`,
    note: site.responseTime,
  },
  {
    icon: LifeBuoy,
    title: "Support",
    body: site.supportEmail,
    href: `mailto:${site.supportEmail}`,
    note: site.supportHours,
  },
  {
    icon: MapPin,
    title: "Studio",
    body: site.location.address,
    href: undefined,
    note: `${site.location.city}, ${site.location.country}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what your team is trying to fix."
        description="Questions about plans, migrating from another tool, or whether Luma suits the way you work — we answer all of them ourselves."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <h2 className="text-2xl font-semibold">Ways to reach us</h2>
              <ul className="mt-7 flex flex-col gap-6">
                {details.map((detail) => (
                  <li key={detail.title} className="flex gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <detail.icon
                        aria-hidden
                        className="h-4.5 w-4.5"
                        strokeWidth={1.7}
                      />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold">{detail.title}</h3>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="mt-1 block break-words text-[0.95rem] underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent"
                        >
                          {detail.body}
                        </a>
                      ) : (
                        <p className="mt-1 text-[0.95rem]">{detail.body}</p>
                      )}
                      <p className="mt-1 text-sm text-muted-foreground">
                        {detail.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-card border border-border bg-muted/60 p-5">
                <h3 className="text-sm font-semibold">About this page</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {site.name} is a fictional product. The addresses above are
                  placeholders and the form beside them is a demo that sends
                  nothing.
                </p>
              </div>
            </div>

            <div>
              <h2 className="sr-only">Contact form</h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
