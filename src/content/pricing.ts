import type { ComparisonGroup, PricingTier } from "@/content/types";

/** Demo pricing only — the template has no checkout or payment processing. */
export const tiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$12",
    period: "per user / month",
    description: "For small teams putting their first projects in one place.",
    features: [
      "Up to 10 members",
      "Unlimited projects",
      "Tasks, notes and comments",
      "Board, list and calendar views",
      "7-day activity history",
    ],
    cta: "Start free",
    href: "/contact",
    highlighted: false,
  },
  {
    id: "team",
    name: "Team",
    price: "$24",
    period: "per user / month",
    description: "For growing teams that need progress to be visible.",
    features: [
      "Everything in Starter",
      "Unlimited members",
      "Progress and workload views",
      "Custom workflows and fields",
      "Guest collaborators",
      "Unlimited activity history",
    ],
    cta: "Start free",
    href: "/contact",
    highlighted: true,
  },
  {
    id: "scale",
    name: "Scale",
    price: "Custom",
    period: "billed annually",
    description: "For organisations with several teams and tighter controls.",
    features: [
      "Everything in Team",
      "Advanced roles and permissions",
      "Single sign-on",
      "Audit log and data residency options",
      "Onboarding support",
    ],
    cta: "Talk to us",
    href: "/contact",
    highlighted: false,
  },
];

export const billingNote =
  "Prices shown in USD, billed monthly. Annual billing saves two months.";

/** Values are ordered to match `tiers` above. */
export const comparison: ComparisonGroup[] = [
  {
    title: "Workspace",
    rows: [
      { label: "Members", values: ["Up to 10", "Unlimited", "Unlimited"] },
      { label: "Projects", values: ["Unlimited", "Unlimited", "Unlimited"] },
      { label: "Guest collaborators", values: [false, true, true] },
      { label: "Activity history", values: ["7 days", "Unlimited", "Unlimited"] },
    ],
  },
  {
    title: "Planning",
    rows: [
      { label: "Board, list and calendar", values: [true, true, true] },
      { label: "Custom workflows", values: [false, true, true] },
      { label: "Custom fields", values: [false, true, true] },
      { label: "Workload view", values: [false, true, true] },
    ],
  },
  {
    title: "Insight",
    rows: [
      { label: "Project progress", values: [true, true, true] },
      { label: "Momentum and blockers", values: [false, true, true] },
      { label: "Exportable summaries", values: [false, true, true] },
    ],
  },
  {
    title: "Administration",
    rows: [
      { label: "Roles and permissions", values: ["Basic", "Standard", "Advanced"] },
      { label: "Single sign-on", values: [false, false, true] },
      { label: "Audit log", values: [false, false, true] },
      { label: "Support", values: ["Email", "Priority email", "Dedicated contact"] },
    ],
  },
];
