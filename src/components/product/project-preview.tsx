import { ProductWindow } from "@/components/product/product-window";
import { Avatar, Tag } from "@/components/product/bits";
import { projectBoard } from "@/content/workspace";
import { cn } from "@/lib/cn";

/** Static board artwork. The third column is hidden on narrow screens. */
export function ProjectPreview({ className }: { className?: string }) {
  return (
    <ProductWindow
      label="Preview of a Luma project board for Website Launch, with cards grouped into Planned, In progress and Review columns."
      title="Website Launch · Board"
      className={className}
    >
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-sm font-semibold">{projectBoard.title}</p>
          <p className="text-[0.68rem] text-muted-foreground">
            {projectBoard.meta}
          </p>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projectBoard.columns.map((column, columnIndex) => (
            <div
              key={column.title}
              className={cn(
                "rounded-lg bg-muted/60 p-2.5",
                columnIndex === 2 && "hidden lg:block",
              )}
            >
              <div className="flex items-center justify-between px-1 pb-2">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
                  {column.title}
                </p>
                <span className="rounded-full bg-surface px-1.5 text-[0.62rem] font-medium text-muted-foreground">
                  {column.count}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {column.cards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-md border border-border bg-surface p-2.5 shadow-soft"
                  >
                    <p className="text-[0.78rem] font-medium leading-snug">
                      {card.title}
                    </p>
                    <div className="mt-2.5 flex items-center justify-between gap-2">
                      <Tag label={card.tag} />
                      <span className="flex items-center gap-1.5 whitespace-nowrap text-[0.62rem] text-muted-foreground">
                        {card.due}
                        <Avatar initials={card.who} className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProductWindow>
  );
}
