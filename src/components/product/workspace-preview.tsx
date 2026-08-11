import {
  CalendarDays,
  Check,
  LayoutGrid,
  Layers,
  ListChecks,
  Search,
  Users,
} from "lucide-react";
import { ProductWindow } from "@/components/product/product-window";
import {
  AvatarStack,
  ProgressBar,
  StatusPill,
} from "@/components/product/bits";
import { workspace } from "@/content/workspace";
import { cn } from "@/lib/cn";

const sidebarIcons = {
  overview: LayoutGrid,
  projects: Layers,
  tasks: ListChecks,
  calendar: CalendarDays,
  team: Users,
};

/**
 * The hero workspace mockup. Static artwork — nothing here is interactive.
 * On small screens the sidebar and the task list drop away rather than scroll.
 */
export function WorkspacePreview({ className }: { className?: string }) {
  return (
    <ProductWindow
      label="Preview of the Luma workspace: an overview screen with project cards showing Website Launch at 82 percent, Mobile App at 64 percent and Brand Refresh at 91 percent, plus a list of upcoming tasks."
      title="app.luma.example.com/overview"
      className={className}
    >
      <div className="flex text-foreground">
        {/* Sidebar */}
        <div className="hidden w-44 shrink-0 flex-col gap-1 border-r border-border bg-surface p-3 md:flex lg:w-48">
          <div className="mb-2 flex items-center gap-2 rounded-lg bg-muted px-2.5 py-2 text-[0.7rem] text-muted-foreground">
            <Search aria-hidden className="h-3.5 w-3.5" strokeWidth={1.8} />
            Search
          </div>
          {workspace.sidebar.map((item) => {
            const ItemIcon = sidebarIcons[item.icon];
            return (
              <span
                key={item.label}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[0.78rem] font-medium",
                  item.active
                    ? "bg-accent-soft text-accent"
                    : "text-muted-foreground",
                )}
              >
                <ItemIcon aria-hidden className="h-4 w-4" strokeWidth={1.8} />
                {item.label}
              </span>
            );
          })}
          <div className="mt-auto rounded-lg border border-border p-2.5">
            <p className="text-[0.68rem] font-medium">Trial · 9 days left</p>
            <ProgressBar value={35} className="mt-2" />
          </div>
        </div>

        {/* Main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-base font-semibold sm:text-lg">
                {workspace.greeting}
              </p>
              <p className="mt-0.5 truncate text-[0.72rem] text-muted-foreground">
                {workspace.subtitle}
              </p>
            </div>
            <span className="rounded-full bg-accent px-3 py-1.5 text-[0.7rem] font-medium text-accent-foreground">
              New project
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
            {workspace.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-border bg-surface p-2.5 sm:p-3"
              >
                <p className="text-[0.62rem] uppercase leading-tight tracking-wide text-muted-foreground">
                  {metric.label}
                </p>
                <p className="mt-1 text-lg font-semibold sm:text-xl">
                  {metric.value}
                </p>
                <p className="truncate text-[0.62rem] text-muted-foreground">
                  {metric.delta}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-wide text-muted-foreground">
            Your team&rsquo;s progress
          </p>

          <div className="mt-2.5 grid gap-2.5 sm:grid-cols-3">
            {workspace.projects.map((project) => (
              <div
                key={project.name}
                className="rounded-lg border border-border bg-surface p-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="truncate text-[0.8rem] font-medium">
                    {project.name}
                  </p>
                  <span className="text-[0.8rem] font-semibold tabular-nums">
                    {project.progress}%
                  </span>
                </div>
                <ProgressBar
                  value={project.progress}
                  tone={project.tone}
                  className="mt-2.5"
                />
                <div className="mt-3 flex items-center justify-between gap-2">
                  <AvatarStack members={project.members} />
                  <span className="text-[0.62rem] text-muted-foreground">
                    {project.due}
                  </span>
                </div>
                <div className="mt-2.5">
                  <StatusPill status={project.status} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 hidden rounded-lg border border-border bg-surface sm:block">
            {workspace.tasks.map((task, index) => (
              <div
                key={task.title}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5",
                  index > 0 && "border-t border-border",
                )}
              >
                <span
                  className={cn(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] border",
                    task.done
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border-strong",
                  )}
                >
                  {task.done ? (
                    <Check aria-hidden className="h-3 w-3" strokeWidth={3} />
                  ) : null}
                </span>
                <span
                  className={cn(
                    "min-w-0 flex-1 truncate text-[0.78rem]",
                    task.done && "text-muted-foreground line-through",
                  )}
                >
                  {task.title}
                </span>
                <span className="hidden shrink-0 text-[0.68rem] text-muted-foreground md:block">
                  {task.meta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProductWindow>
  );
}
