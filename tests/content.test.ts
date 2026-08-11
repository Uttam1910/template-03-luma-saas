import assert from "node:assert/strict";
import { test } from "node:test";

import { about, stats, team, values } from "../src/content/about.ts";
import { faq, pricingFaq } from "../src/content/faq.ts";
import { features, showcases, steps, trustedBy } from "../src/content/features.ts";
import { footerNav, legalNav, mainNav } from "../src/content/navigation.ts";
import { comparison, tiers } from "../src/content/pricing.ts";
import { cta, site } from "../src/content/site.ts";
import { testimonials } from "../src/content/testimonials.ts";
import { progressPanel, projectBoard, teamActivity, workspace } from "../src/content/workspace.ts";

const ROUTES = ["/", "/features", "/pricing", "/about", "/contact"];

function assertInternalRoute(href: string, label: string) {
  const [path] = href.split("#");
  assert.ok(
    ROUTES.includes(path),
    `${label} points at "${href}", which is not one of ${ROUTES.join(", ")}`,
  );
}

test("navigation only links to routes that exist", () => {
  const links = [
    ...mainNav,
    ...footerNav.flatMap((group) => group.links),
    ...legalNav,
  ];
  for (const link of links) {
    assertInternalRoute(link.href, `nav link "${link.label}"`);
  }
  assert.equal(mainNav.length, 4);
});

test("calls to action resolve to real routes", () => {
  for (const [key, value] of Object.entries(cta)) {
    if (typeof value === "object" && "href" in value) {
      assertInternalRoute(value.href, `cta.${key}`);
    }
  }
  assert.equal(cta.meta.length, 2);
});

test("site url is a valid absolute url", () => {
  assert.doesNotThrow(() => new URL(site.url));
  assert.ok(site.url.startsWith("https://"));
});

test("features are complete and uniquely numbered", () => {
  assert.equal(features.length, 6);
  const numbers = features.map((feature) => feature.number);
  assert.equal(new Set(numbers).size, 6);
  for (const feature of features) {
    assert.ok(feature.title.length > 3, `feature ${feature.number} needs a title`);
    assert.ok(
      feature.description.length > 30,
      `feature ${feature.number} needs a description`,
    );
  }
  assert.equal(showcases.length, 3);
  assert.equal(new Set(showcases.map((s) => s.mockup)).size, 3);
  assert.equal(steps.length, 3);
  assert.equal(trustedBy.length, 6);
});

test("pricing has three tiers with exactly one highlighted", () => {
  assert.equal(tiers.length, 3);
  assert.equal(new Set(tiers.map((tier) => tier.id)).size, 3);
  assert.equal(tiers.filter((tier) => tier.highlighted).length, 1);
  for (const tier of tiers) {
    assert.ok(tier.features.length >= 4, `${tier.name} needs a feature list`);
    assertInternalRoute(tier.href, `pricing tier "${tier.name}"`);
  }
});

test("every comparison row has one value per tier", () => {
  for (const group of comparison) {
    for (const row of group.rows) {
      assert.equal(
        row.values.length,
        tiers.length,
        `"${row.label}" has ${row.values.length} values for ${tiers.length} tiers`,
      );
    }
  }
});

test("faq entries are answered", () => {
  assert.equal(faq.length, 6);
  for (const item of [...faq, ...pricingFaq]) {
    assert.ok(item.question.endsWith("?"), `"${item.question}" should be a question`);
    assert.ok(item.answer.length > 40, `"${item.question}" needs a fuller answer`);
  }
});

test("testimonials are attributed", () => {
  assert.equal(testimonials.length, 3);
  for (const item of testimonials) {
    assert.equal(item.initials.length, 2);
    assert.ok(item.quote.length > 40);
    assert.ok(item.name && item.role && item.company);
  }
});

test("about content is populated", () => {
  assert.ok(about.mission.length > 40);
  assert.equal(about.story.length, 2);
  assert.equal(values.length, 3);
  assert.equal(stats.length, 4);
  assert.ok(team.length >= 4);
  for (const member of team) assert.equal(member.initials.length, 2);
});

test("mockup values stay inside a drawable range", () => {
  const percentages = [
    ...workspace.projects.map((project) => project.progress),
    ...progressPanel.series,
    ...progressPanel.breakdown.map((row) => row.value),
  ];
  for (const value of percentages) {
    assert.ok(value >= 0 && value <= 100, `${value} is not a percentage`);
  }
  assert.equal(workspace.projects.length, 3);
  assert.equal(projectBoard.columns.length, 3);
  assert.ok(teamActivity.items.length >= 3);
});

test("content carries no leftover placeholders", () => {
  const blob = JSON.stringify({
    about,
    faq,
    features,
    pricingFaq,
    showcases,
    site,
    steps,
    testimonials,
    tiers,
    values,
    workspace,
  });
  for (const needle of ["TODO", "FIXME", "lorem ipsum", "Lorem ipsum", "XXX"]) {
    assert.ok(!blob.includes(needle), `content still contains "${needle}"`);
  }
});
