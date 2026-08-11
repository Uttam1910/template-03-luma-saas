import type { Feature, Showcase, Step } from "@/content/types";

export const features: Feature[] = [
  {
    number: "01",
    title: "One workspace",
    description:
      "Projects, tasks, notes and decisions live in the same place, so nobody has to remember which tool held the answer.",
    icon: "workspace",
  },
  {
    number: "02",
    title: "Projects that stay clear",
    description:
      "Every project opens on a single readable page: what it is, who owns it, and what happens next.",
    icon: "projects",
  },
  {
    number: "03",
    title: "Focused collaboration",
    description:
      "Comments sit next to the work they describe. No parallel thread to reconcile later.",
    icon: "collaborate",
  },
  {
    number: "04",
    title: "Progress you can see",
    description:
      "Completion, momentum and blockers roll up automatically from the tasks your team already updates.",
    icon: "progress",
  },
  {
    number: "05",
    title: "Simple team planning",
    description:
      "See who is committed to what this week before you add one more thing to the pile.",
    icon: "planning",
  },
  {
    number: "06",
    title: "Workflows that adapt",
    description:
      "Start with a template, then reshape stages, fields and rules as the way your team works changes.",
    icon: "workflow",
  },
];

export const showcases: Showcase[] = [
  {
    eyebrow: "Plan",
    title: "Plan without the clutter",
    description:
      "Break a goal into phases, give each one an owner and a date, and let the plan stay readable as it grows.",
    points: [
      "Phases, milestones and tasks in one view",
      "Owners and dates on every item",
      "Reorder by dragging — no rebuilding the plan",
    ],
    mockup: "project",
  },
  {
    eyebrow: "Move",
    title: "Keep everyone aligned",
    description:
      "A quiet activity stream shows what changed since you last looked, grouped by project instead of by notification.",
    points: [
      "Updates grouped by project, not by ping",
      "Mentions that link straight to the work",
      "Guest access for partners and freelancers",
    ],
    mockup: "team",
  },
  {
    eyebrow: "Understand",
    title: "Know what moves next",
    description:
      "Progress rolls up on its own, so the weekly update is already written by the time you need it.",
    points: [
      "Completion and momentum per project",
      "Blockers surfaced before they slip",
      "Exportable summaries for stakeholders",
    ],
    mockup: "progress",
  },
];

export const steps: Step[] = [
  {
    number: "01",
    title: "Plan",
    description: "Turn ideas into clear projects with owners, dates and scope.",
  },
  {
    number: "02",
    title: "Move",
    description:
      "Keep work moving with focused workflows and updates in context.",
  },
  {
    number: "03",
    title: "Understand",
    description:
      "See progress without digging through reports or chasing status.",
  },
];

/** Fictional companies. No real brands, no real logos. */
export const trustedBy = [
  "Northstar",
  "Orbit",
  "Fieldwork",
  "Morrow",
  "Common",
  "Arc",
];

/** Extra detail rows used on the /features page only. */
export const featureDetails = [
  {
    title: "Built for the way teams already work",
    items: [
      "Keyboard-first navigation across every view",
      "Import from spreadsheets and common task tools",
      "Saved views per person, shared views per team",
      "Light and dark themes across the whole workspace",
    ],
  },
  {
    title: "Careful with the boring parts",
    items: [
      "Roles and permissions down to the project level",
      "Guest accounts that see only what you share",
      "Full change history on every task",
      "Data export whenever you want it, in one click",
    ],
  },
];
