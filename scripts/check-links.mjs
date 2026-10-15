import fs from "fs";
import path from "path";

const OUT_DIR = path.resolve("out");

console.log("=== SOLB Internal Link Checker ===");

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith(".html")) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(OUT_DIR);
console.log(`Found ${htmlFiles.length} HTML files to inspect.`);

let linkErrors = 0;
const checkedLinks = new Set();

for (const file of htmlFiles) {
  const relPath = path.relative(OUT_DIR, file);
  const content = fs.readFileSync(file, "utf-8");

  // Extract all href attributes
  const hrefMatches = content.matchAll(/href="([^"]+)"/g);

  for (const match of hrefMatches) {
    const href = match[1];

    // Skip external links, tel, mailto, whatsapp, hash links
    if (
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.startsWith("https://wa.me") ||
      href.startsWith("https://") ||
      href.startsWith("http://") ||
      href.startsWith("#") ||
      href.startsWith("//")
    ) {
      continue;
    }

    const checkKey = `${relPath} -> ${href}`;
    if (checkedLinks.has(checkKey)) continue;
    checkedLinks.add(checkKey);

    // Resolve internal link
    let target = href.split("?")[0].split("#")[0];
    if (target.startsWith("/")) {
      target = target.slice(1);
    }

    // Possible file targets
    let targetFile = path.join(OUT_DIR, target);
    if (fs.existsSync(targetFile) && fs.statSync(targetFile).isDirectory()) {
      targetFile = path.join(targetFile, "index.html");
    }

    if (!fs.existsSync(targetFile)) {
      console.error(`❌ Broken link in ${relPath}: href="${href}" -> Target not found: ${targetFile}`);
      linkErrors++;
    }
  }
}

console.log("\n===========================================");
if (linkErrors === 0) {
  console.log(`✓ All internal links verified! Checked ${checkedLinks.size} unique link instances with 0 errors.`);
  process.exit(0);
} else {
  console.error(`❌ Found ${linkErrors} broken link(s)!`);
  process.exit(1);
}
