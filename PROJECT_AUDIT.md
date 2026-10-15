# PROJECT AUDIT — SOLB | صلب (Concrete Cutting & Core Drilling)

**Date:** 2026-10-14  
**Project:** SOLB (صلب) — Bilingual Production Website  
**Lead Architect & Engineer:** Senior Full-Stack Software Engineer & Technical SEO Specialist  
**Target Domain:** `https://solb.site`  
**Target Hosting:** Hostinger Web Hosting (Static Architecture)  

---

## 1. Repository Structure and Existing Architecture

### 1.1 Initial Workspace Assessment
A full inspection of `/home/lymon/solb` revealed:
- **Root Directory:** Contains two core folders: `Assets/` and `documentation/`.
- **Version Control:** No prior Git repository was initialized. A fresh Git repository has been initialized on branch `main`.
- **Node & Toolchain:** System runs Node.js `v24.20.0` and npm `11.19.0`.
- **Existing Codebase:** No pre-existing `package.json`, frameworks, or legacy components. The project is a greenfield build directly guided by comprehensive specifications, design tokens, and approved Stitch designs.

### 1.2 Target Architecture
Following `IMPLEMENTATION_PLAN.md` §14, §16, and §17:
- **Framework:** Next.js App Router with TypeScript.
- **Styling:** Tailwind CSS implementing the exact approved `DESIGN.md` design tokens.
- **Export Mode:** `output: 'export'` generating static HTML, CSS, client hydration JS, and assets in `./out`.
- **Routing Structure:** Dual root layouts:
  - `(ar)`: `<html lang="ar" dir="rtl">` serving Arabic pages at `/`, `/services/...`, and `/contact/`.
  - `(en)`: `<html lang="en" dir="ltr">` serving English counterparts at `/en/`, `/en/services/...`, and `/en/contact/`.
- **Zero Server Runtime:** Strictly no Node.js runtime, API routes, middleware, or server actions, ensuring 100% native compatibility with Hostinger static web hosting.

---

## 2. Important Files and Their Purposes

| Path | Purpose | Key Details |
|---|---|---|
| `documentation/IMPLEMENTATION_PLAN.md` | Primary functional, technical, and SEO specification | 1470+ lines specifying URL matrix, content drafts, SEO tags, gated claims, and acceptance criteria |
| `documentation/SOLB_Product_Brief.md` | Business brief, audience personas, and facts register | Background context, audience personas (contractors vs homeowners), trust guidelines |
| `Assets/design/DESIGN.md` | Approved design system tokens and specifications | Color roles (`#202830`, `#F2BE3D`, `#F5F6F4`, `#354A59`), Manrope + Inter + IBM Plex Sans Arabic typography, 4px grid |
| `Assets/design/logo/code.html` | Approved vector brand logo | SVG mark featuring diamond segment circular saw blade, cut angle slash, core drill center, and bilingual typography |
| `Assets/design/Homepage/` | Desktop & mobile Stitch designs for Home | Full design code (`code.html`), layout structure, HUD metrics, why-us cards, equipment gallery |
| `Assets/design/Core Drilling/` | Desktop & mobile Stitch designs for Core Drilling | Specification breakdown, application grids, diameter selector guidance, technical FAQs |
| `Assets/design/Concrete Openings/` | Desktop & mobile Stitch designs for Openings | Structural wall/slab opening types, engineering guidance, quotation checklists |
| `Assets/design/Concrete Removal & Repair/` | Desktop & mobile Stitch designs for Demolition & Repair | Controlled breaking, demolition, building restoration, debris removal scope |
| `Assets/design/Contact/` | Desktop & mobile Stitch designs for Contact | Direct voice call card, direct WhatsApp card, Riyadh service area indicators, inquiry guidelines |
| `Assets/img/` | Original business photographs (9 files) | Source WhatsApp photographs received from the client for inventory, triage, and optimization |

---

## 3. Summary of the Implementation Plan

1. **Pages Matrix (12 Core Pages):**
   - Home: `/` and `/en/`
   - Concrete Cutting: `/services/concrete-cutting/` and `/en/services/concrete-cutting/`
   - Core Drilling: `/services/core-drilling/` and `/en/services/core-drilling/`
   - Concrete Openings: `/services/concrete-openings/` and `/en/services/concrete-openings/`
   - Demolition & Repair: `/services/demolition-repair/` and `/en/services/demolition-repair/`
   - Contact: `/contact/` and `/en/contact/`
2. **Language & Direction Parity:**
   - Arabic is primary (served at root, no `/ar/` prefix), `dir="rtl"`.
   - English is secondary (served at `/en/`), `dir="ltr"`.
   - Reciprocal `hreflang` tags on all counterpart pages.
   - Dedicated bidirectional isolation `<bdi dir="ltr">` for all phone numbers, metrics, and technical codes.
3. **Conversion & CTAs:**
   - Primary: Direct voice phone calls to `+966 55 612 3725` (`tel:+966556123725`).
   - Secondary: Direct WhatsApp inquiries to `https://wa.me/966556123725`.
   - Persistent mobile bottom contact bar with touch targets ≥ 48×48px.
4. **Strict Factual Accuracy:**
   - No fabricated addresses, operating hours, fake customer reviews, warranties, or fictitious certifications.
   - Gated claims ("German equipment", "12-inch limit", "Laser saw", "vibration reduction") gated behind `claims.ts` (default `false`).
5. **SEO & Static Hosting:**
   - Complete `sitemap.xml` and `robots.txt` generated at build.
   - Canonical URLs with trailing slashes (`trailingSlash: true`).
   - Complete JSON-LD structured data (`LocalBusiness` with verified fields only).
   - Custom static `404.html` and production `.htaccess` for Hostinger Apache environment.

---

## 4. Inventory of Available Page Designs

| Page / Component | Desktop Design (`code.html`) | Mobile Design (`mobile/code.html`) | Visual Reference (`screen.png`) | Notes |
|---|---|---|---|---|
| **Brand Logo** | Yes (`Assets/design/logo/`) | Embedded | Yes | High-precision vector SVG |
| **Homepage** | Yes (775 lines) | Yes (450 lines) | Yes (354 KB) | Hero, 4 services, why-us, workflow, gallery, FAQ, CTA |
| **Core Drilling** | Yes (745 lines) | Yes (380 lines) | Yes (323 KB) | Dedicated MEP & core drilling technical breakdown |
| **Concrete Openings** | Yes (740 lines) | Yes (360 lines) | Yes (1.6 MB) | Door, window, elevator & duct openings in concrete |
| **Concrete Removal & Repair** | Yes (690 lines) | Yes (370 lines) | Yes (placeholder) | Controlled demolition, breaking, repair, debris removal |
| **Contact Page** | Yes (430 lines) | Yes (320 lines) | Yes (250 KB) | Direct call & WhatsApp matrix, site submission guidelines |
| **Concrete Cutting** | Derived | Derived | Derived | Follows Homepage & Core Drilling design system architecture |

---

## 5. Image and Asset Inventory

Visual inspection and technical metadata analysis of the 9 supplied WhatsApp photographs in `Assets/img/`:

| Photo ID | Source Filename | Resolution | Visual Depiction | Status | Placement / Decision |
|---|---|---|---|---|---|
| **Photo 1** | `WhatsApp Image 2026-10-13 at 11.33.17.jpeg` | 959×1280 | Red core drilling rig on stand with water pump, accessories, and diamond core bits in showroom | **CLEARED (as equipment)** | Core Drilling page, Gallery, Service Card |
| **Photo 2** | `WhatsApp Image 2026-10-13 at 11.33.16.jpeg` | 960×1280 | Orange core drilling rig on stand with pump, accessories, and core bits | **CLEARED (as equipment)** | Core Drilling page, Gallery |
| **Photo 3** | `WhatsApp Image 2026-10-13 at 11.31.21 (2).jpeg` | 720×681 | Wall saw guide frame with hand-wheels and large diamond blade in storage room | **CANDIDATE / SECONDARY** | Low resolution; use only if needed in gallery |
| **Photo 4** | `WhatsApp Image 2026-10-13 at 11.31.21 (1).jpeg` | 1080×1079 | Track-mounted wall saw cutting slab suspended by crane chain, sea/city background | **BLOCKED** | Contains prominent Haraj ("حراج") watermark bottom-right; location not Riyadh |
| **Photo 5** | `WhatsApp Image 2026-10-13 at 11.31.21.jpeg` | 1073×1352 | Worker core drilling rectangular wall opening with overlapping cores on scaffold | **CANDIDATE (with crop)** | Real in-situ work; worker face can be cropped/anonymized |
| **Photo 6** | `WhatsApp Image 2026-10-13 at 11.31.20 (2).jpeg` | 1062×1132 | Track-mounted wall saw with large circular blade cutting concrete staircase | **CLEARED (real work)** | Concrete Cutting & Openings pages, Gallery |
| **Photo 7** | `WhatsApp Image 2026-10-13 at 11.31.20 (1).jpeg` | 796×1600 | Core drill rig drilling row of overlapping holes in floor slab | **CANDIDATE** | Authentic work photo; screenshot UI border to be trimmed |
| **Photo 8** | `WhatsApp Image 2026-10-13 at 11.31.20.jpeg` | 1080×1428 | Rectangular wall opening formed by overlapping core holes with handheld core drill | **BLOCKED** | Contains prominent Haraj ("حراج") watermark bottom-right |
| **Photo 9** | `WhatsApp Image 2026-10-13 at 11.31.19.jpeg` | 960×1280 | Red track-mounted wall saw unit with digital controller and large diamond blade | **CLEARED (Hero equipment)** | Homepage Hero, Concrete Cutting Hero/Gallery |

### Asset Management Strategy:
- Source images are preserved untouched in `Assets/img/`.
- Cleared images are copied and optimized into `public/images/` using WebP/AVIF and standardized filenames (`solb-wall-saw-09.webp`, `solb-core-drill-red-01.webp`, etc.).
- Blocked images (Photos 4 & 8) are strictly excluded from all public builds.
- Clean vector SVG logo (`Assets/design/logo/code.html`) is exported to `public/images/logo.svg` and `public/images/logo-dark.svg`, along with a dedicated SVG favicon.

---

## 6. Existing Functionality to Preserve

- All approved design tokens, color hex codes, and font hierarchy from `DESIGN.md`.
- Natural, unpretentious Arabic and English copy defined in `IMPLEMENTATION_PLAN.md` §10.
- All verified contact coordinates: Phone and WhatsApp `+966 55 612 3725`.
- Service area boundary: Riyadh, Saudi Arabia exclusively.

---

## 7. Missing Assets, Unresolved Questions & Specification Conflicts

### 7.1 Resolved Conflicts
1. **Multi-page vs Single-page:** The newer requirement for 12 indexable static pages with independent URL slugs, unique metadata, and dedicated SEO keyword targeting supersedes the initial single-page draft.
2. **Photo Ownership & Watermarks:** Photos 4 and 8 are permanently blocked from deployment. Cleared photos 1, 2, and 9 are captioned honestly as equipment.
3. **Tagline Status:** Tagline is marked proposed and displayed tastefully in hero/footer without assertive performance claims.
4. **Gated Claims:** All unverified claims (German machinery, 12-inch limits, laser cutting, vibration guarantees) are encapsulated in `claims.ts` and set to `false`.

### 7.2 Pending Client Confirmations (Logged for records, non-blocking)
- Official commercial registration name / number (omitted until supplied).
- Physical shop / depot address (omitted; Riyadh service area used instead).
- Operating hours (omitted from display to avoid misrepresenting 24/7 availability).
- Client-provided original job photographs for demolition/debris removal.

---

## 8. Identified Technical Risks and Proposed Resolutions

| Risk | Impact | Resolution |
|---|---|---|
| Static Export Incompatibility | Build failure or runtime 404s on Hostinger | Enforce `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`, eliminate all server-only APIs |
| Trailing Slash & Deep URL Mismatch | Direct navigation to `/services/concrete-cutting/` failing on Apache | Ensure `trailingSlash: true` outputs `folder/index.html`; provide standard `.htaccess` for fallback |
| Arabic RTL / English LTR Layout Flaws | Broken navigation, reversed arrows, unreadable numbers | Use CSS logical properties (`ms-*`, `pe-*`, `text-start`), flip directional icons via `rtl:-scale-x-100`, wrap phone numbers in `<bdi dir="ltr">` |
| Font Flash / Build Timeout | External Google Font dependencies failing in CI or on slow connections | Use robust webfont declarations and fallback stacks in `globals.css` with `font-display: swap` |
| Missing Watermark Removal | Copyright / Ad policy violations | Block Photos 4 & 8 at the code level via image registry |

---

## 9. Implementation Checklist Mapped to Plan

- [x] **Phase 1: Inspection & Audit**
  - [x] Workspace & environment inspection.
  - [x] Documentation & design analysis.
  - [x] Photographic inventory & watermark audit.
  - [x] Generation of `PROJECT_AUDIT.md`.
- [x] **Phase 1: Inspection & Audit**
  - [x] Workspace & environment inspection.
  - [x] Documentation & design analysis.
  - [x] Photographic inventory & watermark audit.
  - [x] Generation of `PROJECT_AUDIT.md`.
- [x] **Phase 2: Project Scaffolding & Setup**
  - [x] Initialize Next.js project with App Router, TypeScript, and Tailwind CSS.
  - [x] Configure `next.config.ts` (`output: 'export'`, `trailingSlash: true`).
  - [x] Configure Tailwind theme with exact `DESIGN.md` tokens.
  - [x] Create directory structure (`components`, `content`, `config`, `lib`, `public/images`).
- [x] **Phase 3: Asset Pipeline & Brand Assets**
  - [x] Extract and format vector SVG logos (`logo.svg`, `favicon.svg`).
  - [x] Process and optimize cleared photography into `public/images/`.
  - [x] Build typed `content/images.ts` registry.
- [x] **Phase 4: Content & Translation Engine**
  - [x] Define `SiteContent` interface in `content/types.ts`.
  - [x] Implement `content/ar.ts` (Arabic primary copy).
  - [x] Implement `content/en.ts` (English counterpart copy).
  - [x] Implement `content/claims.ts` (Gated claims toggle).
  - [x] Configure site constants (`config/site.ts`, `config/pages.ts`).
- [x] **Phase 5: Reusable UI Component Library**
  - [x] `Header` & Mobile Drawer Navigation.
  - [x] `Footer` with bilingual links and service area notice.
  - [x] `ContactBar` (persistent mobile bottom utility bar).
  - [x] `LangSwitch` with reciprocal URL matching.
  - [x] `Button` (Primary Call, Secondary WhatsApp).
  - [x] `Hero` component (Desktop & Mobile optimized).
  - [x] `ServiceCard` grid.
  - [x] `WhySolb` feature list.
  - [x] `EquipmentGallery` with honest equipment captions.
  - [x] `FaqAccordion` (Accessible `<details><summary>` / zero JS).
  - [x] `CtaBand` (Inquiry requirements guide).
  - [x] `Breadcrumbs` with schema parity.
- [x] **Phase 6: Page Route Implementation (12 Pages)**
  - [x] Arabic: `/` (Home).
  - [x] Arabic: `/services/concrete-cutting/`.
  - [x] Arabic: `/services/core-drilling/`.
  - [x] Arabic: `/services/concrete-openings/`.
  - [x] Arabic: `/services/demolition-repair/`.
  - [x] Arabic: `/contact/`.
  - [x] English: `/en/` (Home).
  - [x] English: `/en/services/concrete-cutting/`.
  - [x] English: `/en/services/core-drilling/`.
  - [x] English: `/en/services/concrete-openings/`.
  - [x] English: `/en/services/demolition-repair/`.
  - [x] English: `/en/contact/`.
- [x] **Phase 7: Technical SEO, Metadata & Structured Data**
  - [x] Unique title & meta description per page.
  - [x] Reciprocal `hreflang` (ar, en, x-default).
  - [x] Open Graph & Twitter cards.
  - [x] `sitemap.xml` generation.
  - [x] `robots.txt` generation.
  - [x] JSON-LD `LocalBusiness` schema with verified facts.
- [x] **Phase 8: Production Build, Static Export & Hostinger Prep**
  - [x] Compile production build (`npm run build`).
  - [x] Validate `./out` static directory structure.
  - [x] Create production `.htaccess` with HTTPS enforcement, 404 handling, and caching.
  - [x] Create static `out/404.html` bilingual fallback.
  - [x] Verification script for internal links, missing files, and phone number consistency.
- [x] **Phase 9: Quality Assurance & Final Verification**
  - [x] TypeScript checks (`tsc --noEmit`).
  - [x] ESLint checks.
  - [x] Responsive layout inspection (Desktop, Tablet, Mobile).
  - [x] Verification script execution (`npm run verify` & `npm run check:links`).
  - [x] Compilation of `IMPLEMENTATION_REPORT.md`.

---

## 10. Audit Conclusion & Current Status
**Status:** **FULLY IMPLEMENTED & PRODUCTION READY**  
All 12 required static pages, dual root layouts (RTL/LTR), technical SEO meta/hreflang/sitemap, verified equipment imagery, and Hostinger Apache static assets have been compiled and verified with zero errors. All release gates passed.
