import type { Stat, TeamMember, Value } from "@/content/types";

export const about = {
  eyebrow: "About Luma",
  title: "We build the calm layer between a team and its work.",
  intro:
    "Luma started with a small consulting team that kept losing the plan between four tools. Everything we build answers one question: can someone new understand this project in under a minute?",
  story: [
    "We spent years watching good teams lose momentum for boring reasons — a decision buried in a thread, a plan that only made sense to the person who wrote it, a status update assembled by hand every Friday.",
    "So we built the opposite. One workspace, readable pages, and progress that comes from the work itself instead of a separate reporting ritual.",
  ],
  mission:
    "Give growing teams one clear place to plan work, move it forward, and see where it stands — without adding a process nobody asked for.",
};

export const values: Value[] = [
  {
    title: "Clarity over volume",
    description:
      "A view that shows less, but shows the right thing, beats one that shows everything.",
    icon: "sparkle",
  },
  {
    title: "Respect the calendar",
    description:
      "Software should return time to a team. If a feature creates meetings, it is not finished.",
    icon: "clock",
  },
  {
    title: "Boring where it counts",
    description:
      "Permissions, exports and history are unglamorous. We treat them as product, not paperwork.",
    icon: "shield",
  },
];

export const stats: Stat[] = [
  { value: "2024", label: "Founded" },
  { value: "18", label: "People" },
  { value: "12", label: "Countries" },
  { value: "1", label: "Product" },
];

/** Fictional team, used to show the layout. */
export const team: TeamMember[] = [
  { name: "Maya Ellison", role: "Co-founder, Product", initials: "ME" },
  { name: "Jonas Ferreira", role: "Co-founder, Engineering", initials: "JF" },
  { name: "Ada Nwosu", role: "Design", initials: "AN" },
  { name: "Petra Kovac", role: "Engineering", initials: "PK" },
  { name: "Sam Oyelaran", role: "Support", initials: "SO" },
  { name: "Lea Brandt", role: "Operations", initials: "LB" },
];
