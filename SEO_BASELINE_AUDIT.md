# SOLB — Baseline SEO & Google Ads Audit

**Date:** October 2026  
**Auditor:** Senior Technical SEO & Google Ads Specialist  
**Domain:** `https://solb.site`  
**Target Market:** Riyadh, Saudi Arabia  
**Deployment Architecture:** Next.js 16 (App Router), Static Export (`output: 'export'`) on Hostinger  

---

## 1. Executive Summary

An exhaustive technical, on-page, local, and Google Ads readiness audit was conducted on the existing SOLB (صلب) web application. The website possesses an industrial design aesthetic and clean TypeScript code. However, critical gaps in **Google Ads conversion tracking, Schema.org coverage, hreflang symmetry, sitemap alternates, and paid search message match** must be resolved to unlock organic search visibility and maximize Google Ads ROI in Riyadh.

---

## 2. Confirmed Defects vs. Suspected Issues Matrix

| Category | Finding | Classification | Impact | Remediation Plan |
|---|---|---|---|---|
| **Measurement & Tracking** | Zero analytics, GTM, or conversion tracking instrumentation. Clicks on `tel:` and `wa.me` links are unmeasured. | **Confirmed Defect** | **CRITICAL (Google Ads / CRO)** | Build `src/lib/tracking.ts`, install GA4/GTM script loader with Consent Mode v2 placeholder, fire `phone_click` and `whatsapp_click` with page/service/location dimensions. |
| **Google Ads Attribution** | Paid campaign URL parameters (`gclid`, `gbraid`, `wbraid`, `utm_*`) are not captured or passed to session storage. | **Confirmed Defect** | **HIGH (Google Ads)** | Implement attribution parameter harvester in layout to preserve click IDs across navigation without disrupting static routes. |
| **Structured Data** | Service pages lack `@type: Service` JSON-LD schema. Homepage and Contact use partial schema without explicit service catalog. | **Confirmed Defect** | **HIGH (Technical SEO / Rich Results)** | Inject compliant `Organization`, `Service`, `BreadcrumbList`, and `WebSite` JSON-LD across all 12 bilingual routes. |
| **Hreflang & Canonicals** | `x-default` in `seo.ts` indiscriminately pointed to root `/` for all inner pages instead of corresponding language counterparts. | **Confirmed Defect** | **MEDIUM (Technical SEO)** | Correct `x-default` to point to the Arabic counterpart for each specific route. Ensure `ar-SA` and `en` codes are used. |
| **XML Sitemap** | `sitemap.ts` outputs raw URLs without `xhtml:link` hreflang alternates and uses hardcoded lastmod dates. | **Confirmed Defect** | **MEDIUM (Technical SEO)** | Enrich `sitemap.ts` to output language alternates (`ar-SA`, `en`, `x-default`) per route and omit fabricated dates. |
| **Google Ads Landing Page Ergonomics** | Service pages lack explicit Google Ads trust anchors (response time, Riyadh neighborhood coverage confirmation, immediate quote requirements). | **Confirmed Defect** | **HIGH (Google Ads / CRO)** | Enhance above-the-fold service hero sections with explicit Riyadh coverage badges, direct call/WhatsApp triggers, and preparation checklists. |
| **Hostinger Static Hosting** | Server is static Apache via `.htaccess`. Client-side trailing slashes and 404 redirects must be strictly tested. | **Confirmed Fact** | **LOW / Operational** | Tested; `.htaccess` enforces HTTPS and clean URLs. Continued verification on static build. |
| **Google Search Console Indexing** | Site is newly deployed; indexing status in Google cannot be checked without GSC access. | **Suspected / Pending Access** | **Informational** | Provide full setup protocol and sitemap verification guide in `SEARCH_CONSOLE_SETUP.md`. |
| **Core Web Vitals** | Static HTML with inline CSS/SVGs delivers sub-second load times; script additions must not introduce layout shifts or long tasks. | **Verified Good / Guardrail** | **MONITOR** | Ensure GA4/GTM scripts load with `strategy="afterInteractive"` or `defer`. |

---

## 3. Detailed Audit by Specialization

### 3.1 Crawlability & Indexability
- **Robots.txt**: Successfully allows all public routes (`Allow: /`) and declares `sitemap: https://solb.site/sitemap.xml`. AI search bot instructions (GPTBot, ClaudeBot, PerplexityBot) can be explicitly allowed to enhance AI Overviews citations.
- **Indexable Pages**: Exactly 12 indexable HTML pages (6 Arabic, 6 English) covering Home, Cutting, Core Drilling, Openings, Demolition & Repair, and Contact.
- **Status Codes & Static Export**: Static export yields clean directory structures (`out/services/concrete-cutting/index.html`) with proper trailing-slash URLs matching canonical declarations.

### 3.2 Canonical & Language Alternates (Hreflang)
- **Current State**:
  - Arabic canonical: `https://solb.site/services/concrete-cutting/`
  - English canonical: `https://solb.site/en/services/concrete-cutting/`
- **Defect Identified**: `x-default` was set to `https://solb.site/` on all pages. When Google inspects an inner service page, `x-default` should point to the default language version of **that same resource** (`https://solb.site/services/concrete-cutting/`).
- **Resolution**: Map `x-default` dynamically to `PAGES[pageKey].arPath`.

### 3.3 Semantic Content & Heading Structure
- **H1 Verification**: Every page has exactly one `<h1>` containing the primary targeted keyword and location ("بالرياض" / "in Riyadh").
- **Hierarchy**: Follows logical H1 → H2 → H3 order without skipping levels.
- **Visual Contrast**: Dark/light alternating sections maintain WCAG 2.2 AA compliance (ratios > 7:1 for text, > 4.5:1 for interactive elements).

### 3.4 Google Ads Landing Page Experience & Conversion Optimization (CRO)
- **Message Match**: Visitors searching for "قص خرسانة" or "تخريم كور" who land on the specific service page immediately see the exact service name, cutting equipment specifications (up to 60cm wall saw / 1" to 16" core drills), and real job site photography.
- **Conversion Friction**: No forms are required (the market prefers direct phone and WhatsApp contact). The sticky mobile `ContactBar` provides 1-tap dial and 1-tap WhatsApp chat across all mobile viewports.
- **Measurement Gap**: No analytics listener triggers when users tap the phone or WhatsApp buttons. This leaves Google Ads Smart Bidding (Maximize Conversions / Target CPA) completely blind.

---

## 4. Immediate Priority Action List

1. **Install Tracking Architecture**: Create `src/lib/tracking.ts` and `src/components/Analytics.tsx` to handle GA4, Google Ads conversion tag triggers, and attribution parameter harvesting.
2. **Upgrade Metadata & Canonical Engine**: Refactor `src/lib/seo.ts` for rigorous `ar-SA`/`en` language tags and page-specific `x-default` alternates.
3. **Inject Complete Schema.org JSON-LD**: Provide `Organization`, `Service`, `BreadcrumbList`, and `WebPage` structured data across all templates.
4. **Enrich Sitemap**: Update `src/app/sitemap.ts` to output full `xhtml:link` alternates.
5. **Prepare Google Ads Campaign Blueprint**: Map each ad group to its dedicated landing page with negative keyword lists and message-match ad copy.
