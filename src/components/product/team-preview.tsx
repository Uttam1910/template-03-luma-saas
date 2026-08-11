import { ProductWindow } from "@/components/product/product-window";
import { Avatar, AvatarStack } from "@/components/product/bits";
import { teamActivity } from "@/content/workspace";
import { cn } from "@/lib/cn";

/** Static activity-stream artwork. */
export function TeamPreview({ className }: { className?: string }) {
  return (
    <ProductWindow
      label="Preview of the Luma activity stream, showing recent updates from four teammates on the Website Launch project."
      title="Website Launch · Activity"
      className={className}
    >
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold">{teamActivity.title}</p>
            <p className="text-[0.68rem] text-muted-foreground">
              {teamActivity.meta}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <AvatarStack members={teamActivity.online} />
            <span className="text-[0.65rem] text-muted-foreground">
              4 online
            </span>
          </div>
        </div>

        <ul className="mt-4 flex flex-col">
          {teamActivity.items.map((item, index) => (
            <li
              key={item.target + item.time}
              className={cn(
                "flex gap-3 py-3",
                index > 0 && "border-t border-border",
              )}
            >
              <Avatar initials={item.who} className="mt-0.5 h-7 w-7 text-[0.65rem]" />
              <div className="min-w-0 flex-1">
                <p className="text-[0.78rem] leading-snug">
                  <span className="font-medium">{item.name}</span>{" "}
                  <span className="text-muted-foreground">{item.action}</span>{" "}
                  <span className="font-medium">{item.target}</span>
                </p>
                <p className="mt-0.5 truncate text-[0.68rem] text-muted-foreground">
                  {item.detail}
                </p>
              </div>
              <span className="shrink-0 text-[0.65rem] tabular-nums text-muted-foreground">
                {item.time}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-1 flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2">
          <Avatar initials="ME" className="h-5 w-5 text-[0.55rem]" />
          <span className="text-[0.7rem] text-muted-foreground">
            Write an update&hellip;
          </span>
        </div>
      </div>
    </ProductWindow>
  );
}
