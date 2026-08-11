"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";
import { cn } from "@/lib/cn";

type Theme = "light" | "dark";

const listeners = new Set<() => void>();

/** The store is the DOM itself: `data-theme`, falling back to the OS setting. */
function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  listeners.add(onChange);
  media.addEventListener("change", onChange);
  return () => {
    listeners.delete(onChange);
    media.removeEventListener("change", onChange);
  };
}

function getSnapshot(): Theme {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === "light" || explicit === "dark") return explicit;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/** On the server the active theme is unknowable, so the button stays neutral. */
function getServerSnapshot(): Theme | null {
  return null;
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("luma-theme", next);
    } catch {
      // Storage can be unavailable (private mode); the theme still applies.
    }
    listeners.forEach((listener) => listener());
  }

  const label = theme
    ? `Switch to ${theme === "dark" ? "light" : "dark"} theme`
    : "Toggle theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:bg-muted hover:text-foreground",
        className,
      )}
    >
      {theme === "dark" ? (
        <Moon aria-hidden className="h-4 w-4" strokeWidth={1.8} />
      ) : theme === "light" ? (
        <Sun aria-hidden className="h-4 w-4" strokeWidth={1.8} />
      ) : (
        <SunMoon aria-hidden className="h-4 w-4" strokeWidth={1.8} />
      )}
    </button>
  );
}
