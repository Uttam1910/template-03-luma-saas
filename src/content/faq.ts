import type { FaqItem } from "@/content/types";

export const faq: FaqItem[] = [
  {
    question: "What is Luma?",
    answer:
      "Luma is a workspace for teams that need projects, tasks and progress in one place. This website is a template, so the product it describes is fictional demo content.",
  },
  {
    question: "Can I try Luma for free?",
    answer:
      "The Starter and Team plans both begin with a 14-day trial. No card is needed to start, and nothing is charged when the trial ends.",
  },
  {
    question: "Does Luma work for small teams?",
    answer:
      "Yes. Most teams start with three to ten people and a couple of projects. Nothing has to be configured before you can use it.",
  },
  {
    question: "Can I invite external collaborators?",
    answer:
      "Team and Scale plans include guest accounts. Guests see only the projects you share with them and are not counted as paid members.",
  },
  {
    question: "Can I change plans?",
    answer:
      "Plans can be changed at any time from workspace settings. Upgrades apply immediately and downgrades apply at the start of the next billing period.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "Workspace data is stored in the EU by default. Scale plans can choose a different region during onboarding.",
  },
];

/** Shown on the pricing page under the comparison table. */
export const pricingFaq: FaqItem[] = [
  {
    question: "How does per-user pricing work?",
    answer:
      "You are billed for members who can create and edit work. Guests and view-only accounts are free.",
  },
  {
    question: "What happens when someone leaves the team?",
    answer:
      "Remove them from the workspace and the seat is released on your next invoice. Their work stays where it is.",
  },
  {
    question: "Do you offer annual billing?",
    answer:
      "Yes. Annual billing is available on every paid plan and works out at two months free compared with monthly.",
  },
  {
    question: "Is there a discount for non-profits?",
    answer:
      "Registered non-profits and student teams get 50% off any plan. Contact us with a little detail about your team.",
  },
  {
    question: "What does the Scale plan cost?",
    answer:
      "Scale is priced per organisation based on team size and the controls you need. Most conversations take one call.",
  },
];
