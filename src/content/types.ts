/**
 * Shared shapes for the editable content files in `src/content`.
 * Everything here is static demo content — there is no CMS or API behind it.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  title: string;
  links: NavLink[];
};

/** Keys map to icons in `src/components/ui/icon.tsx`. */
export type IconName =
  | "workspace"
  | "projects"
  | "collaborate"
  | "progress"
  | "planning"
  | "workflow"
  | "shield"
  | "sparkle"
  | "clock"
  | "globe";

export type Feature = {
  number: string;
  title: string;
  description: string;
  icon: IconName;
};

/** Which static mockup a showcase section renders next to its copy. */
export type MockupName = "project" | "team" | "progress";

export type Showcase = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  mockup: MockupName;
};

export type Step = {
  number: string;
  title: string;
  description: string;
};

export type PricingTier = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted: boolean;
};

export type ComparisonGroup = {
  title: string;
  rows: {
    label: string;
    /** One value per tier, in the same order as `pricing.tiers`. */
    values: (string | boolean)[];
  }[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Value = {
  title: string;
  description: string;
  icon: IconName;
};

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
};

export type Stat = {
  value: string;
  label: string;
};
