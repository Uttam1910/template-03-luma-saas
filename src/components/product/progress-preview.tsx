import { AlertCircle } from "lucide-react";
import { ProductWindow } from "@/components/product/product-window";
import { ProgressBar } from "@/components/product/bits";
import { progressPanel } from "@/content/workspace";
import { cn } from "@/lib/cn";

/** Static progress artwork: a fixed six-week bar chart and a breakdown. */
export function ProgressPreview({ className }: { className?: string }) {
  return (
    <ProductWindow
      label="Preview of the Luma progress view: a six-week bar chart rising from 42 to 82 percent, a per-project breakdown and two flagged blockers."
      title="Progress · Last 6 weeks"
      className={className}
    >
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[0.68rem] uppercase tracking-wide text-muted-foreground">
              {progressPanel.headlineLabel}
            </p>
            <p className="text-3xl font-semibold tracking-tight">
              {progressPanel.headline}
            </p>
          </div>
          <span className="rounded-full bg-success-soft px-2.5 py-1 text-[0.65rem] font-medium text-success">
            +8 pts vs last month
          </span>
        </div>

        {/* Chart. Bar heights are percentages of the fixed track height, so
            they come straight from the content file with no measurement. */}
        <div className="mt-5">
          <div className="flex h-28 items-end gap-2">
            {progressPanel.series.map((value, index) => (
              <div
                key={progressPanel.seriesLabels[index]}
                className={cn(
                  "flex-1 rounded-t-[4px]",
                  index === progressPanel.series.length - 1
                    ? "bg-accent"
                    : "bg-accent/25",
                )}
                style={{ height: `${value}%` }}
              />
            ))}
          </div>
          <div className="mt-1.5 flex gap-2">
            {progressPanel.seriesLabels.map((label) => (
              <span
                key={label}
                className="flex-1 text-center text-[0.6rem] text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2.5">
            {progressPanel.breakdown.map((row) => (
              <div key={row.label}>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="truncate text-[0.72rem]">{row.label}</span>
                  <span className="text-[0.72rem] font-semibold tabular-nums">
                    {row.value}%
                  </span>
                </div>
                <ProgressBar value={row.value} tone={row.tone} className="mt-1.5" />
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-surface p-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-wide text-muted-foreground">
              Needs attention
            </p>
            <ul className="mt-2 flex flex-col gap-2">
              {progressPanel.blockers.map((blocker) => (
                <li key={blocker.label} className="flex items-start gap-2">
                  <AlertCircle
                    aria-hidden
                    className="mt-px h-3.5 w-3.5 shrink-0 text-warning"
                    strokeWidth={1.8}
                  />
                  <span className="text-[0.72rem] leading-snug">
                    {blocker.label}
                    <span className="block text-[0.65rem] text-muted-foreground">
                      {blocker.project}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ProductWindow>
  );
}
