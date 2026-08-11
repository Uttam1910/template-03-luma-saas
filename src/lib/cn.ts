/** Tiny class-name joiner. Keeps conditional classes readable without a dependency. */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
