import { cn } from "@/lib/cn";

/** Small building blocks shared by the product mockups. All decorative. */

const avatarTones = [
  "bg-chart-1/15 text-chart-1",
  "bg-chart-2/15 text-chart-2",
  "bg-chart-3/20 text-chart-3",
  "bg-chart-4/15 text-chart-4",
];

/** Deterministic colour: derived from the initials, never from randomness. */
function toneFor(initials: string) {
  const sum = [...initials].reduce((total, char) => total + char.charCodeAt(0), 0);
  return avatarTones[sum % avatarTones.length];
}

export function Avatar({
  initials,
  className,
}: {
  initials: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-surface-elevated text-[0.6rem] font-semibold",
        toneFor(initials),
        className,
      )}
    >
      {initials}
    </span>
  );
}

export function AvatarStack({ members }: { members: string[] }) {
  return (
    <span className="flex -space-x-1.5">
      {members.map((member) => (
        <Avatar key={member} initials={member} />
      ))}
    </span>
  );
}

export function ProgressBar({
  value,
  tone = "accent",
  className,
}: {
  value: number;
  tone?: "accent" | "success" | "warning" | "chart-1" | "chart-2" | "chart-3";
  className?: string;
}) {
  const tones = {
    accent: "bg-accent",
    success: "bg-success",
    warning: "bg-warning",
    "chart-1": "bg-chart-1",
    "chart-2": "bg-chart-2",
    "chart-3": "bg-chart-3",
  } as const;

  return (
    <span className={cn("block h-1.5 w-full rounded-full bg-muted", className)}>
      <span
        className={cn("block h-full rounded-full", tones[tone])}
        style={{ width: `${value}%` }}
      />
    </span>
  );
}

export function StatusPill({
  status,
}: {
  status: "On track" | "At risk" | "Done";
}) {
  const styles = {
    "On track": "bg-success-soft text-success",
    "At risk": "bg-warning-soft text-warning",
    Done: "bg-accent-soft text-accent",
  } as const;

  const dots = {
    "On track": "bg-success",
    "At risk": "bg-warning",
    Done: "bg-accent",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.65rem] font-medium",
        styles[status],
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dots[status])} />
      {status}
    </span>
  );
}

export function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-md bg-muted px-1.5 py-0.5 text-[0.62rem] font-medium text-muted-foreground">
      {label}
    </span>
  );
}
