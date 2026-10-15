# SOLB — SEO & Measurement Skills Audit

This audit evaluates and activates the ten most relevant, trustworthy, and compatible skills available in the environment to execute advanced technical SEO, localized Arabic search strategy, structured data, Google Ads landing page readiness, and conversion tracking for **SOLB (صلب)** in Riyadh, Saudi Arabia.

---

## 1. Selected Skills Evaluation Matrix

| # | Specialization Area | Selected Skill Name | Verified Source Path | Installation / Activation Status | Core Capability & Usage in SOLB | Limitations & Guardrails |
|---|---------------------|---------------------|----------------------|----------------------------------|----------------------------------|--------------------------|
| **1** | **Technical SEO Auditing** | `seo-audit` | `.agents/skills/seo-audit/SKILL.md` | Active / Verified | Baseline crawlability audit, robots.txt, canonical checks, status codes, and HTTP headers. | Diagnostic framework; does not automatically edit files unless instructed. |
| **2** | **Next.js SEO & Metadata Engineering** | `nextjs-seo-indexing` | `.agents/skills/nextjs-seo-indexing/SKILL.md` | Active / Verified | Next.js App Router metadata, static rendering constraints, canonical tags, `robots.ts`, and sitemap generation. | Tailored to Next.js; must preserve `output: 'export'` static output on Hostinger. |
| **3** | **On-Page SEO & Search Intent Optimization** | `seo-content` | `.agents/skills/seo-content/SKILL.md` | Active / Verified | Search intent classification (commercial vs transactional), heading hierarchy (single H1), content depth, and E-E-A-T. | Must preserve verified factual constraints (no fake reviews or guarantees). |
| **4** | **Arabic SEO & Localized Keyword Strategy** | `seo-keyword-strategist` | `.agents/skills/seo-keyword-strategist/SKILL.md` | Active / Verified | Mapping commercial search terms in Riyadh (e.g., قص خرسانة, تخريم كور, فتح أبواب), keyword cannibalization prevention, and search intent alignment. | External volume and CPC figures cannot be fabricated; marked PENDING VALIDATION until GSC/Ads data arrives. |
| **5** | **Local SEO & Service-Area Business Optimization** | `seo-geo` / Local Patterns | `.agents/skills/seo-geo/SKILL.md` | Active / Verified | Service-area business (SAB) optimization for Riyadh without a physical customer storefront; neighborhood coverage and NAP consistency. | Avoid doorway pages and spammy neighborhood lists; must strictly adhere to Google Local guidelines. |
| **6** | **Structured Data & Schema.org Implementation** | `schema-markup` | `.agents/skills/schema-markup/SKILL.md` | Active / Verified | Schema.org JSON-LD design: `Organization`, `WebSite`, `WebPage`, `Service`, `BreadcrumbList`, and SAB `LocalBusiness`. | Schema validity does not guarantee rich snippets; avoid fake reviews or unconfirmed business hours. |
| **7** | **Core Web Vitals & Performance SEO** | `web-performance-optimization` | `.agents/skills/web-performance-optimization/SKILL.md` | Active / Verified | LCP, INP, and CLS optimization; zero layout shift; font preloading; responsive WebP/AVIF images; lightweight JS bundles. | Must balance measurement scripts (GA4/GTM) without introducing main-thread blocking or layout shifts. |
| **8** | **Google Search Console & Indexing Diagnostics** | `indexing-issue-auditor` | `.agents/skills/indexing-issue-auditor/SKILL.md` | Active / Verified | Indexing state verification (crawled vs indexed), sitemap reciprocity, canonical congruence, and 404 error handling. | Cannot access live Google Search Console without account credentials; provides readiness and verification protocols. |
| **9** | **Google Ads Landing Page Optimization & CRO** | `page-cro` | `.agents/skills/page-cro/SKILL.md` | Active / Verified | High-intent paid traffic alignment, above-the-fold value proposition, message match with search ad groups, sticky mobile CTAs (Call / WhatsApp), friction removal. | A click on a phone or WhatsApp link is an intent proxy, not a guaranteed completed lead. |
| **10** | **GA4, GTM & Conversion Tracking** | `analytics-tracking` | `.agents/skills/analytics-tracking/SKILL.md` | Active / Verified | Maintainable event architecture (`phone_click`, `whatsapp_click`, `language_switch`), URL parameter preservation (`gclid`, `gbraid`, `wbraid`, UTMs), Consent Mode v2 support. | No hardcoded fabricated IDs; uses documented environment variables and placeholder fallback modes. |

---

## 2. Integration Strategy into SOLB Project

1. **Foundations**: Use `seo-audit` and `nextjs-seo-indexing` to establish zero-defect crawlability and indexing architecture in Next.js 16.
2. **Intent & Content**: Apply `seo-content` and `seo-keyword-strategist` to refine bilingual headings, meta titles, descriptions, and on-page service explanations for Riyadh demand.
3. **Local Trust**: Apply `schema-markup` to inject valid JSON-LD schemas representing SOLB's verified operations in Riyadh.
4. **Paid-Search Performance**: Apply `page-cro` to ensure all four service pages and the homepage serve as high-converting Google Ads landing pages.
5. **Measurement**: Implement `analytics-tracking` via a dedicated utility (`src/lib/tracking.ts`) preserving Google Ads attribution parameters and tracking click proxies without compromising user privacy.

---

## 3. Skill Instructions Review Summary

Each of the ten selected skills was reviewed directly from its canonical `SKILL.md` file in `.agents/skills/`. The operational rules, verification indexes (Schema Eligibility Index, Measurement Quality Index, Page Conversion Readiness Index), and ethical constraints have been incorporated into the execution plan.
