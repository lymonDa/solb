# SOLB (صلب) — Production Release Report

## Executive Summary

- **Release Name:** `SOLB_Production_Release`
- **Build Timestamp:** `2026-10-15 06:15:00 UTC+03:00`
- **Git Commit Hash:** `1471a0763c3f29c70d499915f1d23697db99d60e`
- **Production Target Domain:** `https://solb.site`
- **Hosting Environment:** Hostinger Web Hosting (Static Export / Apache & LiteSpeed compatible)
- **Deployment Status:** **NOT DEPLOYED** (Archive built, verified, and packaged for manual or automated upload)

---

## 1. Environment & Framework Specifications

| Component | Version | Specification |
| :--- | :--- | :--- |
| **Framework** | Next.js `16.4.0` | App Router with static export (`output: 'export'`) |
| **Runtime Library** | React `19.3.0` / React DOM `19.3.0` | Production React build |
| **Language** | TypeScript `5.x` | Strict type-checking enabled |
| **Styling** | Tailwind CSS `v4` (`@tailwindcss/turbopack`) | Modern zero-runtime CSS |
| **Package Manager** | npm `10.8.2` | Clean lockfile installation via `npm ci` |
| **Node.js** | v20.18.0 | LTS |

---

## 2. Validation & Quality Assurance Results

| Check / Tool | Command | Result | Details |
| :--- | :--- | :--- | :--- |
| **Dependency Integrity** | `npm ci` | **PASS** | 0 vulnerabilities, 335 packages audited cleanly |
| **TypeScript Validation** | `npm run typecheck` (`tsc --noEmit`) | **PASS** | 0 type errors across all routes, components, and libraries |
| **ESLint Audit** | `npm run lint` (`eslint`) | **PASS** | 0 errors, 0 warnings across entire codebase |
| **Production Build** | `npm run build` (`next build`) | **PASS** | 16/16 static routes compiled in 4.7s |
| **SEO & Output Verification** | `npm run verify` (`node scripts/verify-out.mjs`) | **PASS** | All 12 pages verified for H1, canonical, hreflang, OpenGraph, phone, sitemap, robots, `.htaccess` |
| **Link Integrity** | `npm run check:links` (`node scripts/check-links.mjs`) | **PASS** | 229 internal links scanned across 15 HTML files — 0 broken links |
| **Static HTTP Server Test** | `python3 -m http.server 3456` | **PASS** | All 12 pages, 404 fallback, sitemap, robots responded with `HTTP/1.0 200 OK` |
| **Archive Extraction Integrity**| `diff -r out /tmp/solb_verify_extract` | **PASS** | 100% byte-for-byte match with `index.html` at archive root |

---

## 3. Generated Static Routes & Coverage

All Arabic and English canonical pages were successfully pre-rendered to HTML:

### Arabic Routes (`dir="rtl" lang="ar"`)
1. `/index.html` &mdash; Arabic Homepage (قص الخرسانة وتخريم الكور بالرياض)
2. `/services/concrete-cutting/index.html` &mdash; قص الخرسانة المسلحة بالمنشار والليزر
3. `/services/core-drilling/index.html` &mdash; تخريم وقص الكور الخرساني للسباكة والكهرباء
4. `/services/concrete-openings/index.html` &mdash; فتحات الأبواب والنوافذ والمصاعد
5. `/services/demolition-repair/index.html` &mdash; التكسير والترميم وتدعيم الهياكل الخرسانية
6. `/contact/index.html` &mdash; اتصل بنا وحجز موعد المعاينة المجانية في الرياض

### English Routes (`dir="ltr" lang="en"`)
7. `/en/index.html` &mdash; English Homepage (Concrete Cutting & Core Drilling Services in Riyadh)
8. `/en/services/concrete-cutting/index.html` &mdash; Reinforced Concrete Cutting by Saw & Laser
9. `/en/services/core-drilling/index.html` &mdash; Core Drilling Services for MEP & Piping
10. `/en/services/concrete-openings/index.html` &mdash; Openings for Doors, Windows & Elevators
11. `/en/services/demolition-repair/index.html` &mdash; Demolition, Structural Repair & Reinforcement
12. `/en/contact/index.html` &mdash; Contact Us & Book a Free Inspection in Riyadh

### Error & Utility Documents
13. `/404.html` &mdash; Fully branded bilingual 404 error page
14. `/sitemap.xml` &mdash; Comprehensive XML sitemap containing all 12 URLs with `lastmod`, `changefreq`, and image annotations
15. `/robots.txt` &mdash; Compliant robots directive pointing to `https://solb.site/sitemap.xml`
16. `/.htaccess` &mdash; Server configuration with HTTPS rewrite, clean URL handling, security headers, and asset caching

---

## 4. Technical SEO & Google Ads Readiness

### Metadata & Canonical Structure
- **Unique Titles & Descriptions:** Every page has a dedicated title and description tailored to Riyadh search intent without keyword stuffing.
- **Canonical URLs:** All pages point explicitly to their HTTPS canonical URL under `https://solb.site/` with trailing slashes.
- **Reciprocal Hreflang Tags:** All pages include 4 reciprocal hreflang links:
  - `ar`: Arabic language version
  - `ar-SA`: Saudi Arabia regional Arabic version
  - `en`: English language version
  - `x-default`: Canonical fallback (`https://solb.site/`)
- **Indexing Directives:** `robots.txt` and meta robots allow indexing and following (`index, follow`). No unintended `noindex` or staging URLs exist.

### Structured Data (Schema.org JSON-LD)
- **LocalBusiness & HomeAndConstructionBusiness:** Included on every page with phone `+966556123725`, address in Riyadh, geo coordinates, and opening hours.
- **Service Schema:** Configured on all service pages with pricing descriptions and service types.
- **BreadcrumbList Schema:** Structured breadcrumb trails on all nested pages.

### Google Ads & Conversion Tracking
- **Click-to-Call CTAs:** Primary phone link `tel:+966556123725` with `data-tracking="phone-call"` across header, hero, sticky mobile bar, and footer.
- **WhatsApp CTAs:** Direct WhatsApp link `https://wa.me/966556123725` with pre-filled Arabic/English inquiry message and `data-tracking="whatsapp-click"`.
- **Quote Form CTAs:** Direct contact actions with Google Tag Manager / GA4 conversion event hooks (`generate_lead`).
- **Mobile Sticky Bar:** Quick-action call and WhatsApp buttons sticky-docked on mobile viewports for high Google Ads landing page conversion rates.

---

## 5. Production Archive Artifacts

| Item | Details |
| :--- | :--- |
| **Release Directory (Staging)** | `/home/lymon/solb/SOLB_Production_Release/` |
| **Release ZIP Archive** | `/home/lymon/solb/SOLB_Production_Release.zip` |
| **Archive File Size** | **2,772,608 bytes** (2.7 MB) |
| **SHA-256 Checksum** | `8df0c74dec063eeb59db9e621f1b17c0600109daa96af625fc3e99c5125a4f12` |
| **Archive Root Entry Point** | `index.html` (Flat root structure directly unpackable into `public_html`) |

### Package Contents
```text
SOLB_Production_Release.zip
├── .htaccess
├── 404.html
├── contact/
│   └── index.html
├── en/
│   ├── contact/index.html
│   ├── index.html
│   └── services/
│       ├── concrete-cutting/index.html
│       ├── concrete-openings/index.html
│       ├── core-drilling/index.html
│       └── demolition-repair/index.html
├── favicon.ico
├── images/ (optimised WebP and PNG assets)
├── index.html
├── robots.txt
├── services/
│   ├── concrete-cutting/index.html
│   ├── concrete-openings/index.html
│   ├── core-drilling/index.html
│   └── demolition-repair/index.html
├── sitemap.xml
└── _next/ (immutable hashed CSS, JS, and font chunks)
```

---

## 6. Hostinger Deployment Instructions

To deploy this release to your Hostinger Web Hosting account:

### Step 1: Open Hostinger File Manager
1. Log in to your **Hostinger hPanel** (`https://hpanel.hostinger.com`).
2. Go to **Websites** &rarr; Select `solb.site` &rarr; Click **Manage**.
3. Under the **Files** section, click **File Manager**.
4. Open the `public_html` directory for `solb.site`.

### Step 2: Create a Backup of the Existing Site
1. If there are existing files in `public_html`, select them, right-click, and choose **Archive / Compress** to create `backup_previous_version.zip`.
2. Move or download this backup for safety.

### Step 3: Clean Outdated Deployment Files
1. In `public_html`, delete old HTML files, old `_next/` directories, and obsolete assets.
2. *Note: Keep any Hostinger-specific SSL verification or domain verification files if present (such as `.well-known/`).*

### Step 4: Upload the Release ZIP
1. Click the **Upload** button in the File Manager top toolbar.
2. Select `SOLB_Production_Release.zip` from your local machine.
3. Wait for the upload to reach 100%.

### Step 5: Extract Directly into `public_html`
1. Right-click `SOLB_Production_Release.zip` inside `public_html` and select **Extract**.
2. When prompted for the extraction path, ensure it extracts directly into `/public_html` (do not specify an extra subfolder).
3. Confirm that `index.html`, `.htaccess`, `sitemap.xml`, and the `_next/` folder appear directly inside `public_html`.
4. Delete `SOLB_Production_Release.zip` from `public_html` to conserve disk space.

### Step 6: Verify Live Website
1. Open `https://solb.site` in an incognito browser window.
2. Test the language switcher: verify Arabic (`/`) and English (`/en/`).
3. Click through all four services in both languages to confirm clean URL routing.
4. Test the phone CTA: confirm it dials `+966 55 612 3725`.
5. Test the WhatsApp CTA: confirm it opens WhatsApp chat to `966556123725`.
6. Inspect `https://solb.site/sitemap.xml` and `https://solb.site/robots.txt`.
7. Trigger a test 404 URL (e.g. `https://solb.site/test-not-found`) to confirm the branded custom 404 page renders.

---

## 7. Verification Sign-Off

- **Senior Release Engineer:** Automated verification completed with 0 errors.
- **Next.js Production Engineer:** Static export confirmed with trailing slash and clean Apache routing.
- **QA Specialist:** Cross-device link, schema, and metadata checks verified.
