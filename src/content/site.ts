/**
 * Global brand + SEO settings.
 * Change `url` to your real domain before deploying.
 */
export const site = {
  name: "Luma",
  shortName: "Luma",
  url: "https://luma.example.com",
  tagline: "Your team's work, finally in focus.",
  description:
    "Luma brings your team's work, ideas, and momentum into one clear workspace.",
  locale: "en_US",
  twitter: "@lumaworkspace",
  email: "hello@luma.example.com",
  supportEmail: "support@luma.example.com",
  supportHours: "Monday to Friday, 09:00–18:00 CET",
  responseTime: "We usually reply within one working day.",
  location: {
    city: "Rotterdam",
    country: "The Netherlands",
    address: "Keilestraat 9, 3029 BP Rotterdam",
  },
  /** Shown in the footer so nobody mistakes the demo for a real service. */
  disclaimer:
    "Luma is a fictional product used to demonstrate this website template. All content, companies, people and metrics shown are made up.",
} as const;

export const cta = {
  primary: { label: "Start free", href: "/contact" },
  secondary: { label: "Explore features", href: "/features" },
  talk: { label: "Talk to us", href: "/contact" },
  signIn: { label: "Sign in", href: "/contact" },
  meta: ["No credit card required", "Set up in minutes"],
} as const;
