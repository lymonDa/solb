import fs from "fs";
import path from "path";

const OUT_DIR = path.resolve("out");

const EXPECTED_PAGES = [
  "",
  "contact",
  "services/concrete-cutting",
  "services/core-drilling",
  "services/concrete-openings",
  "services/demolition-repair",
  "en",
  "en/contact",
  "en/services/concrete-cutting",
  "en/services/core-drilling",
  "en/services/concrete-openings",
  "en/services/demolition-repair",
];

const GATED_TERMS = [
  "German",
  "ألماني",
  "الماني",
  "12 inch",
  "12 بوصة",
  "laser",
  "ليزر",
];

console.log("=== SOLB Production Verification Script ===");

let errors = 0;

// 1. Verify Expected Pages exist
console.log("\n1. Checking Expected Page Generation...");
for (const rel of EXPECTED_PAGES) {
  const filePath = rel === "" ? path.join(OUT_DIR, "index.html") : path.join(OUT_DIR, rel, "index.html");
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing page: ${filePath}`);
    errors++;
  } else {
    console.log(`✓ Found: ${rel ? "/" + rel + "/" : "/"}`);
  }
}

// 2. Inspect Content of Each Page
console.log("\n2. Inspecting HTML Structure, Headings, Meta, and Claims...");
for (const rel of EXPECTED_PAGES) {
  const filePath = rel === "" ? path.join(OUT_DIR, "index.html") : path.join(OUT_DIR, rel, "index.html");
  if (!fs.existsSync(filePath)) continue;

  const html = fs.readFileSync(filePath, "utf-8");

  // A. Check H1 count
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  if (h1Matches.length !== 1) {
    console.error(`❌ Page ${rel || "/"} has ${h1Matches.length} <h1> tags! (Expected exactly 1)`);
    errors++;
  } else {
    // strip inner tags
    const h1Text = h1Matches[0].replace(/<[^>]+>/g, "").trim();
    console.log(`✓ ${rel || "/"} -> H1: "${h1Text}"`);
  }

  // B. Check Canonical
  if (!html.includes('rel="canonical"')) {
    console.error(`❌ Page ${rel || "/"} missing canonical link!`);
    errors++;
  }

  // C. Check Hreflang (handles both hreflang and hrefLang, and regional ar-SA)
  const hasHreflangAr = /hreflang="ar(-sa)?"/i.test(html);
  const hasHreflangEn = /hreflang="en"/i.test(html);
  const hasHreflangDefault = /hreflang="x-default"/i.test(html);

  if (!hasHreflangAr || !hasHreflangEn || !hasHreflangDefault) {
    console.error(`❌ Page ${rel || "/"} missing full reciprocal hreflang tags!`);
    errors++;
  }

  // D. Check Gated Claims Leakage
  for (const term of GATED_TERMS) {
    // case insensitive word boundary or match
    const regex = new RegExp(`\\b${term}\\b`, "i");
    if (regex.test(html)) {
      console.error(`❌ Page ${rel || "/"} contains gated term: "${term}"`);
      errors++;
    }
  }

  // E. Check Noindex (should not be in core pages)
  if (html.includes('content="noindex')) {
    console.error(`❌ Page ${rel || "/"} has noindex directive!`);
    errors++;
  }

  // F. Check Phone number presence
  if (!html.includes("966556123725") && !html.includes("966 55 612 3725")) {
    console.error(`❌ Page ${rel || "/"} missing verified phone number!`);
    errors++;
  }
}

// 3. Verify Sitemap & Robots
console.log("\n3. Checking Sitemap and Robots.txt...");
const sitemapPath = path.join(OUT_DIR, "sitemap.xml");
const robotsPath = path.join(OUT_DIR, "robots.txt");

if (!fs.existsSync(sitemapPath) || fs.statSync(sitemapPath).size === 0) {
  console.error("❌ sitemap.xml is missing or empty!");
  errors++;
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, "utf-8");
  const urlCount = (sitemapContent.match(/<loc>/g) || []).length;
  console.log(`✓ sitemap.xml exists with ${urlCount} URLs (Expected 12)`);
  if (urlCount !== 12) {
    console.error(`❌ sitemap.xml has ${urlCount} URLs instead of 12!`);
    errors++;
  }
}

if (!fs.existsSync(robotsPath) || fs.statSync(robotsPath).size === 0) {
  console.error("❌ robots.txt is missing or empty!");
  errors++;
} else {
  const robotsContent = fs.readFileSync(robotsPath, "utf-8");
  if (robotsContent.includes("sitemap.xml") && robotsContent.includes("Allow: /")) {
    console.log("✓ robots.txt verified with sitemap and allow directives.");
  } else {
    console.error("❌ robots.txt missing required directives!");
    errors++;
  }
}

// 4. Verify 404 and .htaccess
console.log("\n4. Checking 404 Fallback and .htaccess...");
const fallback404 = path.join(OUT_DIR, "404.html");
const htaccess = path.join(OUT_DIR, ".htaccess");

if (!fs.existsSync(fallback404)) {
  console.error("❌ 404.html is missing!");
  errors++;
} else {
  console.log("✓ 404.html verified.");
}

if (!fs.existsSync(htaccess)) {
  console.error("❌ .htaccess is missing!");
  errors++;
} else {
  console.log("✓ .htaccess verified.");
}

console.log("\n===========================================");
if (errors === 0) {
  console.log("🎉 ALL PRODUCTION VERIFICATION CHECKS PASSED!");
  process.exit(0);
} else {
  console.error(`❌ VERIFICATION FAILED with ${errors} error(s)!`);
  process.exit(1);
}
