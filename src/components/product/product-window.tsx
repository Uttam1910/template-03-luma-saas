import { cn } from "@/lib/cn";

/**
 * Frame used by every product mockup.
 *
 * The mockups are marketing artwork, not an application. The frame is exposed
 * to assistive technology as a single labelled image so screen reader users get
 * one honest description instead of a tree of non-functional controls.
 */
export function ProductWindow({
  label,
  title,
  className,
  bodyClassName,
  children,
}: {
  label: string;
  title?: string;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "u-edge overflow-hidden rounded-panel border border-border bg-surface-elevated shadow-panel",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
        </span>
        {title ? (
          <span className="truncate rounded-full bg-muted px-3 py-1 text-[0.7rem] font-medium text-muted-foreground">
            {title}
          </span>
        ) : null}
      </div>
      <div className={cn("bg-surface-elevated", bodyClassName)}>{children}</div>
    </div>
  );
}
