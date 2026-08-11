# Luma — SaaS Product Landing Page Template

A premium, production-quality marketing site for a fictional team-productivity
SaaS. Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

Luma is a **website template**. There is no backend, no database, no
authentication and no payment processing. The product interface you see on the
pages is static artwork built from plain markup — it is not a running
application, and nothing on the site sends or stores data.

Template 03 in a series. Previous: 01 Nordwell (studio/agency), 02 Forma
(personal portfolio).

---

## Preview

<!-- Replace these with your own screenshots before publishing. -->

| | |
| --- | --- |
| `docs/preview-home.png` | Home — hero, workspace mockup, features |
| `docs/preview-pricing.png` | Pricing — tiers and comparison table |
| `docs/preview-dark.png` | Dark theme |

Run `npm run dev` and open <http://localhost:3000> to see it live.

---

## Features

- Five routes plus a designed 404, all statically prerendered
- Light and dark themes driven entirely by CSS variables, with a no-flash
  inline script and a system-preference default
- Five reusable static product mockups (workspace, board, activity, progress)
  used across the home and features pages
- Accessible mobile drawer: focus trap, Escape to close, focus restored to the
  trigger, background scroll locked
- Native `<details>` FAQ accordion — works with JavaScript disabled
- Contact form with client-side validation that clearly states it sends nothing
- Editable content in `src/content` — no marketing copy inside components
- SEO: metadata, canonicals, Open Graph, Twitter cards, generated
  `sitemap.xml` / `robots.txt` / `manifest.webmanifest`, build-time OG image
- No external fonts, no images from a CDN, no analytics, no trackers
- `prefers-reduced-motion` respected; no content is hidden when motion is off

## Stack

| | |
| --- | --- |
| Framework | Next.js 16, App Router, Server Components by default |
| UI | React 19, TypeScript, Tailwind CSS 4 |
| Icons | `lucide-react` |
| Tests | `node:test` (no test framework dependency) |

Four runtime/dev dependencies in total beyond the framework itself.

Only four components opt into `"use client"`: the theme toggle, the desktop nav
links (for `aria-current`), the mobile drawer, and the contact form.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home — hero, trust bar, features, showcases, workflow, testimonials, pricing, FAQ, CTA |
| `/features` | Feature overview, showcases, workflow, detail lists |
| `/pricing` | Three tiers, full comparison table, billing FAQ |
| `/about` | Story, mission, stats, values, team |
| `/contact` | Contact details and a demo form |
| `*` | 404 |

Generated: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`,
`/opengraph-image`.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

Requires Node 20.11+ (Node 22+ recommended — the tests import `.ts` files
directly using Node's built-in type stripping).

## Scripts

```bash
npm run dev          # dev server
npm run build        # production build
npm run start        # serve the production build
npm run lint         # eslint
npm run typecheck    # tsc --noEmit
npm run test         # content integrity tests
npm run check        # static checks against the built HTML (run after build)
npm run verify       # lint + typecheck + test + build + check
```

`npm run check` reads the prerendered HTML in `.next/server/app` and asserts:
exactly one `<h1>` per page, no skipped heading levels, no empty headings, every
internal link resolves to a real route, every asset link resolves to a real
file, the header/nav/main/footer landmarks and skip link are present, and no
`TODO`/`FIXME`/lorem text survived.

---

## Customization

### 1. Content

Everything a rebrand touches lives in `src/content`:

| File | Contents |
| --- | --- |
| `site.ts` | Brand name, **production URL**, description, email, address, disclaimer, CTA labels |
| `navigation.ts` | Header, footer and legal links |
| `features.ts` | Six feature cards, three showcases, three workflow steps, trust-bar names, feature-page detail lists |
| `pricing.ts` | Tiers, billing note, comparison table |
| `testimonials.ts` | Three quotes |
| `faq.ts` | General FAQ and billing FAQ |
| `about.ts` | Story, mission, values, stats, team |
| `workspace.ts` | The numbers and labels inside the product mockups |
| `types.ts` | Shapes for all of the above |

> **Change `site.url` before deploying.** It ships as
> `https://luma.example.com`, which feeds `metadataBase`, canonicals, Open Graph
> URLs, the sitemap and robots.txt.

`npm run test` checks the content files stay internally consistent — every nav
and CTA link points at a real route, every comparison row has one value per
tier, exactly one pricing tier is highlighted, and nothing is left blank.

### 2. Theme

All colours are CSS variables in `src/app/globals.css`. Three blocks define the
palette — `:root` (light), a `prefers-color-scheme: dark` block for the system
default, and `:root[data-theme="dark"]` for the explicit toggle. Change a value
in all three and the whole site follows.

```css
:root {
  --background: #f7f8fa;
  --foreground: #0b0e14;
  --accent: #4b3bf5;        /* the one distinctive colour */
  --accent-foreground: #ffffff;
  --surface: #ffffff;
  --border: #e4e7ec;
  /* …plus muted, success, warning, chart-1…4, glow, scrim */
}
```

Tokens are mapped to Tailwind utilities in the `@theme inline` block, so
`bg-surface`, `text-muted-foreground`, `border-border` and friends work
everywhere. No component hardcodes a colour.

The toggle stores `luma-theme` in `localStorage`; with no stored value the OS
preference wins. If you keep the accent, check contrast after changing
`--background` — the current pairing clears WCAG AA for body text.

To ship a single-theme site, delete the two dark blocks and remove
`<ThemeToggle />` from `src/components/layout/site-header.tsx`.

### 3. Fonts

The template deliberately uses the system font stack (`--font-sans` in
`globals.css`) so there is no network request and no layout shift. To use a
custom face, add `next/font` in `src/app/layout.tsx` and point `--font-sans` at
its CSS variable.

### 4. Product mockups

`src/components/product/` holds the fake app UI. These are presentational
components with no state, no props beyond `className`, and no data fetching:

| File | What it draws |
| --- | --- |
| `product-window.tsx` | The window chrome every mockup sits in |
| `workspace-preview.tsx` | Hero overview: sidebar, metrics, project cards, tasks |
| `project-preview.tsx` | Kanban board |
| `team-preview.tsx` | Activity stream |
| `progress-preview.tsx` | Bar chart, per-project breakdown, blockers |
| `bits.tsx` | Avatar, progress bar, status pill, tag |

Each window is exposed to assistive technology as a single `role="img"` with a
description of what it shows, so screen reader users get one honest summary
instead of a tree of non-functional controls. **If you change what a mockup
draws, update its `label`.**

To swap in real screenshots, replace the `<ProductWindow>` children with a
`next/image` and keep the frame. Numbers shown in the mockups come from
`src/content/workspace.ts`; nothing is computed at render time (no
`Math.random()`, no `Date.now()`) so output is deterministic.

### 5. Contact form

`src/components/contact-form.tsx` validates in the browser and then shows a
confirmation stating plainly that nothing was sent. Wire the `onSubmit` handler
to your own endpoint or form service, and update that confirmation copy once it
actually delivers.

---

## Production build

```bash
npm run verify   # lint, types, tests, build, static checks
npm run build
npm run start
```

Every route prerenders to static HTML, so the site deploys to any static-capable
host: Vercel, Netlify, Cloudflare Pages, or a plain Node server via
`npm run start`.

Before you deploy:

1. Set `site.url` in `src/content/site.ts` to your domain.
2. Replace the fictional content — the footer disclaimer exists so the demo is
   never mistaken for a real service. Remove it once the copy is yours.
3. Replace `public/icon.svg`, `public/favicon.ico`, `public/icon-192.png` and
   `public/apple-touch-icon.png`.
4. Update the OG image in `src/app/opengraph-image.tsx`.

## License

MIT — see [LICENSE](LICENSE). The content is fictional demo copy; replace it
with your own.
