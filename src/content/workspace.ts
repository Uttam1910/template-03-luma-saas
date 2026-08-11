/**
 * Static artwork data for the product mockups in `src/components/product`.
 * This is decorative marketing content — no application state, no fetching.
 * Every value is fixed so the rendered output is deterministic.
 */

export const workspace = {
  user: "Maya",
  greeting: "Good morning, Maya",
  subtitle: "Three projects are moving. One needs a decision today.",
  sidebar: [
    { label: "Overview", icon: "overview" as const, active: true },
    { label: "Projects", icon: "projects" as const, active: false },
    { label: "Tasks", icon: "tasks" as const, active: false },
    { label: "Calendar", icon: "calendar" as const, active: false },
    { label: "Team", icon: "team" as const, active: false },
  ],
  metrics: [
    { label: "Active projects", value: "6", delta: "+2 this month" },
    { label: "Due this week", value: "14", delta: "4 unassigned" },
    { label: "On track", value: "82%", delta: "+6 pts" },
  ],
  projects: [
    {
      name: "Website Launch",
      progress: 82,
      status: "On track" as const,
      due: "12 Mar",
      members: ["ME", "JF", "AN"],
      tone: "accent" as const,
    },
    {
      name: "Mobile App",
      progress: 64,
      status: "At risk" as const,
      due: "28 Mar",
      members: ["PK", "TR"],
      tone: "warning" as const,
    },
    {
      name: "Brand Refresh",
      progress: 91,
      status: "On track" as const,
      due: "05 Mar",
      members: ["AN", "LB", "SO"],
      tone: "success" as const,
    },
  ],
  tasks: [
    { title: "Finalise pricing page copy", meta: "Website Launch · Today", done: true, who: "ME" },
    { title: "Review onboarding flow", meta: "Mobile App · Tomorrow", done: false, who: "PK" },
    { title: "Sign off illustration set", meta: "Brand Refresh · Thu", done: false, who: "AN" },
    { title: "Draft launch announcement", meta: "Website Launch · Fri", done: false, who: "LB" },
  ],
};

export const projectBoard = {
  title: "Website Launch",
  meta: "Q1 · 3 phases · 24 tasks",
  columns: [
    {
      title: "Planned",
      count: 6,
      cards: [
        { title: "Pricing page structure", tag: "Design", who: "AN", due: "Mar 4" },
        { title: "Migrate help articles", tag: "Content", who: "LB", due: "Mar 6" },
      ],
    },
    {
      title: "In progress",
      count: 4,
      cards: [
        { title: "Rebuild navigation", tag: "Build", who: "JF", due: "Mar 3" },
        { title: "Case study layout", tag: "Design", who: "AN", due: "Mar 5" },
        { title: "Analytics events", tag: "Build", who: "PK", due: "Mar 7" },
      ],
    },
    {
      title: "Review",
      count: 2,
      cards: [{ title: "Homepage copy pass", tag: "Content", who: "ME", due: "Mar 2" }],
    },
  ],
};

export const teamActivity = {
  title: "Team activity",
  meta: "Website Launch",
  online: ["ME", "JF", "AN", "PK"],
  items: [
    { who: "AN", name: "Ada", action: "moved", target: "Case study layout", detail: "to Review", time: "9:12" },
    { who: "JF", name: "Jonas", action: "commented on", target: "Rebuild navigation", detail: "“Ready for a look.”", time: "9:04" },
    { who: "ME", name: "Maya", action: "assigned", target: "Homepage copy pass", detail: "to Lea", time: "8:47" },
    { who: "PK", name: "Petra", action: "completed", target: "Analytics events", detail: "3 of 3 subtasks", time: "8:20" },
  ],
};

export const progressPanel = {
  title: "Progress",
  meta: "Last 6 weeks",
  headline: "82%",
  headlineLabel: "of planned work completed",
  /** Percentages drive bar heights in the chart mockup. */
  series: [42, 55, 48, 66, 74, 82],
  seriesLabels: ["W1", "W2", "W3", "W4", "W5", "W6"],
  breakdown: [
    { label: "Website Launch", value: 82, tone: "chart-1" as const },
    { label: "Mobile App", value: 64, tone: "chart-2" as const },
    { label: "Brand Refresh", value: 91, tone: "chart-3" as const },
  ],
  blockers: [
    { label: "Waiting on legal review", project: "Mobile App" },
    { label: "Illustration set unassigned", project: "Brand Refresh" },
  ],
};
