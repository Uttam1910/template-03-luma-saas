import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { mainNav } from "@/content/navigation";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="u-glow absolute inset-x-0 top-0 h-[30rem]" />
        <div className="u-grid u-mask-b absolute inset-x-0 top-0 h-[24rem] opacity-70" />
      </div>

      <Container className="relative flex min-h-[70vh] flex-col justify-center py-20 text-center">
        <p className="font-mono text-sm tracking-[0.2em] text-accent">404</p>
        <h1 className="mx-auto mt-5 max-w-xl text-4xl font-semibold sm:text-5xl">
          This page slipped off the board.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          The link may be old, or the page may have moved. Everything else is
          exactly where you left it.
        </p>

        <div className="mt-9 flex justify-center">
          <Link href="/" className={buttonClass("primary", "lg")}>
            Back to home
            <ArrowRight aria-hidden className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>

        <nav aria-label="Suggested pages" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground underline decoration-border-strong underline-offset-4 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
