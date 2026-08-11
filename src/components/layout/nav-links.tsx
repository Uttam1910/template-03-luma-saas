"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/content/types";
import { cn } from "@/lib/cn";

/** Desktop navigation. Client-side only so the current page can be marked. */
export function NavLinks({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative rounded-full px-3 py-2 text-sm transition-colors hover:text-foreground",
                active ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {link.label}
              {active ? (
                <span
                  aria-hidden
                  className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                />
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
