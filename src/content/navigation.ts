import type { NavGroup, NavLink } from "@/content/types";

export const mainNav: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Workflow", href: "/features#workflow" },
      { label: "FAQ", href: "/pricing#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Team", href: "/about#team" },
      { label: "Values", href: "/about#values" },
    ],
  },
];

/**
 * Placeholder legal links. They point at the contact page so the template
 * never ships a dead link — swap them for real pages when you rebrand.
 */
export const legalNav: NavLink[] = [
  { label: "Privacy", href: "/contact" },
  { label: "Terms", href: "/contact" },
  { label: "Security", href: "/contact" },
];
