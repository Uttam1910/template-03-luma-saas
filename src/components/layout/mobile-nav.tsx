"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { cta } from "@/content/site";
import type { NavLink } from "@/content/types";
import { cn } from "@/lib/cn";

const FOCUSABLE = 'a[href], button:not([disabled])';

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const trigger = triggerRef.current;
    const previous = document.activeElement as HTMLElement | null;
    const items = panel?.querySelectorAll<HTMLElement>(FOCUSABLE);
    items?.[0]?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !panel) return;

      // Keep focus inside the drawer while it is open.
      const focusable = [...panel.querySelectorAll<HTMLElement>(FOCUSABLE)];
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !panel.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      // Focus goes back to the control that opened the drawer.
      (trigger ?? previous)?.focus();
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Open menu"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted md:hidden"
      >
        <Menu aria-hidden className="h-4.5 w-4.5" strokeWidth={1.8} />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            tabIndex={-1}
            aria-hidden
            onClick={close}
            className="absolute inset-0 h-full w-full cursor-default bg-foreground/25 backdrop-blur-sm"
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="absolute inset-x-3 top-3 rounded-panel border border-border bg-surface-elevated p-5 shadow-panel"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
              >
                <X aria-hidden className="h-4.5 w-4.5" strokeWidth={1.8} />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-5">
              <ul className="flex flex-col">
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between border-b border-border py-3.5 text-base transition-colors",
                          active
                            ? "font-medium text-accent"
                            : "text-foreground hover:text-accent",
                        )}
                      >
                        {link.label}
                        {active ? (
                          <span className="text-xs font-normal text-muted-foreground">
                            Current
                          </span>
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-5 flex flex-col gap-2.5">
              <Link
                href={cta.signIn.href}
                onClick={close}
                className={buttonClass("secondary", "md")}
              >
                {cta.signIn.label}
              </Link>
              <Link
                href={cta.primary.href}
                onClick={close}
                className={buttonClass("primary", "md")}
              >
                {cta.primary.label}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
