import {
  CalendarRange,
  Clock,
  Globe,
  Layers,
  LayoutGrid,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import type { IconName } from "@/content/types";

const icons = {
  workspace: LayoutGrid,
  projects: Layers,
  collaborate: MessagesSquare,
  progress: TrendingUp,
  planning: CalendarRange,
  workflow: Workflow,
  shield: ShieldCheck,
  sparkle: Sparkles,
  clock: Clock,
  globe: Globe,
} satisfies Record<IconName, unknown>;

/** Decorative by default — the adjacent heading carries the meaning. */
export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Component = icons[name];
  return <Component aria-hidden className={className} strokeWidth={1.6} />;
}
