import { cn } from "@/lib/cn";
import { site } from "@/content/site";

/**
 * The Luma mark: an aperture of light. Pure SVG so there is no image request
 * and it inherits the current theme colours.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={cn("h-6 w-6", className)}
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="22"
        height="22"
        rx="7"
        className="fill-accent"
      />
      <circle cx="12" cy="12" r="6" className="fill-accent-foreground/25" />
      <path
        d="M12 6a6 6 0 0 1 0 12Z"
        className="fill-accent-foreground"
      />
      <circle cx="12" cy="12" r="2" className="fill-accent" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-[1.0625rem] font-semibold tracking-tight">
        {site.name}
      </span>
    </span>
  );
}
