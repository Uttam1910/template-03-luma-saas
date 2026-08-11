/**
 * Post-build static checks on the prerendered HTML.
 *
 * Run `npm run build` first — this reads `.next/server/app/**.html` and asserts
 * the things that are easy to break while editing content: one h1 per page,
 * no skipped heading levels, internal links that resolve to a real route, and
 * no placeholder text left behind.
 */
import { readFileSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { join, relative } from "node:path";

const APP_DIR = ".next/server/app";

const ROUTES = new Set(["/", "/features", "/pricing", "/about", "/contact"]);

/** Files served straight from public/, plus routes Next generates for us. */
const ASSETS = new Set(
  (await readdir("public").catch(() => [])).map((name) => `/${name}`),
);
const GENERATED = new Set([
  "/sitemap.xml",
  "/robots.txt",
  "/manifest.webmanifest",
]);

const failures = [];
const notes = [];

function fail(message) {
  failures.push(message);
}

async function htmlFiles(dir) {
  const found = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return found;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) found.push(...(await htmlFiles(full)));
    else if (entry.name.endsWith(".html")) found.push(full);
  }
  return found;
}

function routeFor(file) {
  const rel = relative(APP_DIR, file).replace(/\.html$/, "");
  return rel === "index" ? "/" : `/${rel}`;
}

function stripTags(value) {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function checkHeadings(route, html) {
  const headings = [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map(
    (match) => ({ level: Number(match[1]), text: stripTags(match[2]) }),
  );

  const h1s = headings.filter((heading) => heading.level === 1);
  if (h1s.length !== 1) {
    fail(`${route}: expected exactly one h1, found ${h1s.length}`);
  }

  let previous = 0;
  for (const heading of headings) {
    if (previous && heading.level > previous + 1) {
      fail(
        `${route}: heading level jumps from h${previous} to h${heading.level} ("${heading.text.slice(0, 50)}")`,
      );
    }
    previous = heading.level;
  }

  const empty = headings.filter((heading) => heading.text.length === 0);
  if (empty.length) fail(`${route}: ${empty.length} empty heading(s)`);

  return headings.length;
}

function checkLinks(route, html) {
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const [path] = href.split("#");
    if (path === "") continue; // same-page anchor
    if (path.startsWith("/_next")) continue;

    // Asset references must resolve to a file in public/ or a generated route.
    if (/\.[a-z0-9]+$/i.test(path)) {
      if (!ASSETS.has(path) && !GENERATED.has(path)) {
        fail(`${route}: link to missing asset "${path}"`);
      }
      continue;
    }

    if (!ROUTES.has(path)) {
      fail(`${route}: internal link to unknown route "${href}"`);
    }
  }
}

function checkLandmarks(route, html) {
  for (const tag of ["<header", "<nav", "<main", "<footer"]) {
    if (!html.includes(tag)) fail(`${route}: missing ${tag}> landmark`);
  }
  if (!html.includes('href="#main"')) fail(`${route}: missing skip link`);
}

function checkPlaceholders(route, html) {
  const text = stripTags(html);
  for (const needle of ["TODO", "FIXME", "Lorem ipsum", "lorem ipsum"]) {
    if (text.includes(needle)) fail(`${route}: contains placeholder "${needle}"`);
  }
}

const files = await htmlFiles(APP_DIR);

if (files.length === 0) {
  console.error(
    `No prerendered HTML found in ${APP_DIR}. Run "npm run build" first.`,
  );
  process.exit(1);
}

const seen = new Set();

for (const file of files) {
  const route = routeFor(file);
  const html = readFileSync(file, "utf8");

  if (route === "/_not-found") {
    checkHeadings(route, html);
    checkPlaceholders(route, html);
    notes.push(`${route}: 404 page checked`);
    continue;
  }

  if (!ROUTES.has(route)) {
    notes.push(`${route}: skipped (not a public route)`);
    continue;
  }

  seen.add(route);
  const headings = checkHeadings(route, html);
  checkLinks(route, html);
  checkLandmarks(route, html);
  checkPlaceholders(route, html);
  notes.push(`${route}: ${headings} headings, ${(html.length / 1024).toFixed(0)} kB HTML`);
}

for (const route of ROUTES) {
  if (!seen.has(route)) fail(`${route}: no prerendered HTML was produced`);
}

for (const note of notes) console.log(`  ok  ${note}`);

if (failures.length) {
  console.error(`\n${failures.length} problem(s) found:`);
  for (const failure of failures) console.error(`  ✗  ${failure}`);
  process.exit(1);
}

console.log(`\nAll ${seen.size} routes passed the static checks.`);
