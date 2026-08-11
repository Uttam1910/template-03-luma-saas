import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/** Fixed date keeps the build deterministic — bump it when content changes. */
const lastModified = new Date("2026-01-05T00:00:00.000Z");

const routes = [
  { path: "/", priority: 1 },
  { path: "/features", priority: 0.9 },
  { path: "/pricing", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
