import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Generated at build time. No external assets, no network requests. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#f7f8fa",
          backgroundImage:
            "radial-gradient(60% 60% at 20% 0%, rgba(75,59,245,0.22), rgba(247,248,250,0))",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              background: "#4b3bf5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            L
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, color: "#0b0e14" }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: "#0b0e14",
              maxWidth: 900,
            }}
          >
            {site.tagline}
          </div>
          <div style={{ fontSize: 30, color: "#5a6274", maxWidth: 820 }}>
            {site.description}
          </div>
        </div>

        <div style={{ fontSize: 24, color: "#5a6274" }}>luma.example.com</div>
      </div>
    ),
    size,
  );
}
