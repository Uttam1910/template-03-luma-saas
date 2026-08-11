import Link from "next/link";
import { buttonClass } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLinks } from "@/components/layout/nav-links";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { mainNav } from "@/content/navigation";
import { cta, site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="rounded-md transition-opacity hover:opacity-80"
          >
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <NavLinks links={mainNav} />
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href={cta.signIn.href}
              className="hidden rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              {cta.signIn.label}
            </Link>
            <Link
              href={cta.primary.href}
              className={buttonClass("primary", "sm", "hidden md:inline-flex")}
            >
              {cta.primary.label}
            </Link>
            <MobileNav links={mainNav} />
          </div>
        </div>
      </Container>
    </header>
  );
}
