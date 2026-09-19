const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const layout = readFileSync(path.join(root, "app", "layout.tsx"), "utf8");
const analytics = readFileSync(path.join(root, "public", "ga4.js"), "utf8");
const docs = readFileSync(path.join(root, "..", "..", "docs", "analytics.md"), "utf8");

test("uses the approved identity-first title", () => {
  assert.match(layout, /title: "EVH Consult AI — Practical AI\/R&D"/);
  assert.match(layout, /siteName: "EVH Consult AI"/);
});

test("sets the approved content groups only inside the consent-gated loader", () => {
  assert.match(analytics, /'ai\.evhconsult\.eu': 'AI\/R&D'/);
  assert.match(analytics, /pathname === '\/contact\.html'[\s\S]*return 'Shared'/);
  assert.match(analytics, /content_group: getContentGroup\(\)/);
  assert.ok(analytics.indexOf("if (loaded || !isApprovedHost() || !hasAnalyticsConsent()) return") < analytics.indexOf("content_group: getContentGroup()"));
});

test("documents page identity separately from presentation", () => {
  assert.match(docs, /`hostname` \+ `page_path` is the stable page identity/);
  assert.match(docs, /EVH Consult ecosystem/);
  assert.doesNotMatch(docs, /EVH ecosystem/);
});
