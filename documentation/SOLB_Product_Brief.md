# Product Brief — صلب | SOLB — قص وتخريم الخرسانة بالرياض

**Document type:** Product Brief (single source of truth)
**Version:** 1.0 — Draft for client review
**Date:** 13 October 2026
**Project:** Bilingual (Arabic RTL / English LTR) single-page landing page
**Status of work:** Planning stage. No design, development, analytics, SEO, or advertising setup has been completed.

**Status labels used throughout this document**

| Label | Meaning |
|---|---|
| **Confirmed** | Explicitly provided or approved by the client |
| **Proposed** | A recommendation that can be accepted or changed |
| **Pending confirmation** | Information not yet verified |
| **Out of scope** | Not included unless separately approved |

---

## 1. Executive Summary

SOLB (صلب) is an independently operated concrete cutting, core drilling, demolition, and building-repair service operating in Riyadh, Saudi Arabia. This brief defines a fast, mobile-first, bilingual single-page landing page whose job is to turn visitors — especially paid-search visitors — into **phone calls** (primary) and **WhatsApp conversations** (secondary).

Key points:

- **Audiences:** individual property owners, and contractors / construction companies.
- **Positioning (Proposed):** a practical, precise, no-nonsense technical service — presented through real equipment and work photographs and clear service descriptions rather than unverifiable claims.
- **Visual direction (Confirmed):** Industrial Professional — Graphite, Engineering Yellow, Off-white, Steel Blue.
- **Trust strategy:** no testimonials, ratings, project counts, or certifications exist, so none will be shown. Trust is built through authentic photographs, specific service descriptions, transparent wording, and frictionless contact.
- **Critical open items:** photo ownership/provenance (two supplied photos carry third-party watermarks), the "German equipment" claim, the "المنشار الليزر" terminology, the 12-inch core limit, operating hours, domain, and logo files (see Section 19).

---

## 2. Business Overview

| Item | Value | Status |
|---|---|---|
| Brand name | صلب \| SOLB | Confirmed |
| Marketing display name | صلب \| SOLB — قص وتخريم الخرسانة بالرياض | Confirmed (marketing name only) |
| Category | Concrete cutting, core drilling, demolition, building repair | Confirmed |
| Service area | Riyadh, Saudi Arabia | Confirmed |
| Business structure | Independently operated business | Confirmed |
| Legal name / registration | Unknown | Pending confirmation |
| Operating hours | Not provided | Pending confirmation |
| Physical address / branch | Not provided | Pending confirmation — do not invent |

> **Rule:** The brand name is a marketing identity. The website must not describe SOLB as a registered company, corporation, or legally established entity unless that is separately verified.

---

## 3. Product Goals and Success Metrics

### 3.1 Goals

1. **Primary:** Generate qualified inquiries through direct phone calls.
2. **Secondary:** Generate WhatsApp conversations.
3. Provide a landing page that matches Google Ads search intent and supports a good landing-page experience.
4. Present a credible, professional image using only verified information.
5. Deliver an equivalent Arabic and English experience.

### 3.2 Measurable success metrics

No business-performance targets (call volume, conversion rate, cost per lead) are invented here. These are **measurement definitions** and **technical quality thresholds**.

| Metric | Definition | Status |
|---|---|---|
| Phone-click rate | `phone_click` events ÷ sessions | Proposed (baseline to be established) |
| WhatsApp-click rate | `whatsapp_click` events ÷ sessions | Proposed (baseline to be established) |
| Contact-intent rate | Sessions with ≥1 phone or WhatsApp click ÷ sessions | Proposed |
| Language-switch rate | `language_switch` events ÷ sessions | Proposed |
| Largest Contentful Paint (mobile) | ≤ 2.5 s at the 75th percentile | Proposed (Google "good" threshold) |
| Cumulative Layout Shift | ≤ 0.1 | Proposed (Google "good" threshold) |
| Interaction to Next Paint | ≤ 200 ms | Proposed (Google "good" threshold) |
| Broken links / anchors | 0 | Proposed |
| Contact-link functionality | 100% of phone and WhatsApp links work on real devices | Proposed |

**Important measurement caveat:** a `tel:` click is **not** proof that a call was placed or completed, and a WhatsApp click is **not** proof a conversation occurred. These are *intent signals*. If true call measurement is needed, use Google Ads call reporting / call tracking separately, after evaluating cost, privacy, and number-display implications (Pending decision).

---

## 4. Target Audiences and User Needs

### 4.1 Individuals and property owners
- **Situation:** renovating a villa/apartment; need a door or window opening, a drainage/plumbing/AC hole, or a wall/slab section removed.
- **Needs:** simple language, reassurance that the work is controlled, a quick way to ask "can you do this and how much?", Arabic-first, WhatsApp convenience (photos of the wall can be sent directly).
- **Concerns:** damage to the rest of the structure, mess, noise/dust, price uncertainty.

### 4.2 Contractors and construction companies
- **Situation:** need subcontracted cutting/coring for MEP installations, openings for stairs/elevators/ventilation, or controlled demolition.
- **Needs:** clear scope categories, evidence of real equipment, quick direct contact, bilingual support (some site staff read English).
- **Concerns:** equipment suitability, ability to handle reinforced concrete, accuracy of openings.

### 4.3 Shared behavior assumptions (Proposed — validate with data)
- Predominantly mobile visitors arriving from Google Search.
- High urgency: they want to call, not read.
- WhatsApp is commonly used to share site photos and receive quotes.

---

## 5. Confirmed Business Information

### 5.1 Services (Confirmed — client-supplied)

**Concrete cutting**
- Cutting reinforced concrete walls.
- Cutting concrete ceilings and slabs.
- Creating openings for doors and windows.
- Creating openings for air conditioning and ventilation.
- Openings associated with elevators and stairs.

**Core drilling**
- Cylindrical openings for plumbing, electrical installations, and drainage.
- Core drilling for air conditioning and ventilation installations.
- **Maximum stated diameter: up to 12 inches** — *subject to final technical verification before publication.*

**Demolition and repair**
- Breaking and removing sections of concrete floors, walls, and ceilings.
- Opening doorways using cutting equipment.
- Building repair and restoration.
- Removal of construction debris.

### 5.2 Equipment and differentiators (client statements)
- German equipment — **Pending confirmation** (see 5.4).
- Terminology "المنشار الليزر" — preserved as client-supplied terminology; **flagged for technical validation** (see 5.4).
- Modern equipment; emphasis on minimizing vibration and damage to surrounding structures — **wording pending confirmation**.

### 5.3 Contact (Confirmed)

| Channel | Value |
|---|---|
| Phone | +966 55 612 3725 |
| WhatsApp | +966 55 612 3725 |
| `tel:` link | `tel:+966556123725` (Proposed implementation value) |
| WhatsApp URL | `https://wa.me/966556123725` (Proposed — verify before deployment) |

The same number must appear consistently everywhere. **Operating hours have not been provided and must not be invented.**

### 5.4 Items the supplied photos raise (observations, not facts)

- Nothing visible in the photographs verifies the equipment's country of manufacture; no legible manufacturer marks were identified. The photos must **not** be used as proof of the "German equipment" claim.
- The equipment pictured includes core-drilling rigs on stands and **track-mounted wall saws with large circular diamond-segment blades**. The client's term "المنشار الليزر" does not visibly correspond to a laser device. Treat it as colloquial client terminology; obtain the exact equipment name before using any English equivalent. Until then, public copy should prefer neutral wording such as "قص بالمنشار / wall saw cutting" **only after the client approves it** (Proposed).
- Several photos show equipment still in packaging with leaflets (new, showroom-style). They illustrate equipment, not completed jobs, and must be captioned accordingly.

### 5.5 Claims policy (mandatory)

Do **not** use: "zero vibration," "no cracks under any circumstances," "100% safe," or any absolute guarantee. Do **not** invent certifications, engineering licenses, insurance, years of experience, project counts, client names, testimonials, ratings, warranties, response times, pricing superiority, or performance statistics.

Safe phrasing pattern (Proposed): *"Precision cutting with modern equipment, aimed at reducing unnecessary vibration and impact on surrounding structure."*

---

## 6. Brand Strategy and Visual Identity

### 6.1 Visual direction — Industrial Professional (Confirmed)
Communicates technical precision, professional execution, industrial capability, reliability, clear communication, and practical construction orientation. Avoid generic corporate templates, decorative excess, unnecessary animation, or visuals suggesting a large corporation without evidence.

### 6.2 Color palette (Confirmed as working direction)

| Token | Hex | Role |
|---|---|---|
| Graphite | `#202830` | Major backgrounds, navigation, strong text |
| Engineering Yellow | `#F2BE3D` | Primary CTAs, selective highlights |
| Off-white | `#F5F6F4` | Readable content sections |
| Steel Blue | `#354A59` | Secondary surfaces, supporting details |

**Contrast guidance (Proposed — verify with a contrast checker during QA):**
- Use **Graphite text on Engineering Yellow** buttons (high contrast). Do **not** use white text on yellow.
- Do **not** use yellow text on Off-white (insufficient contrast); use yellow only as fill/accent against Graphite or Steel Blue.
- Off-white text on Graphite or Steel Blue is expected to pass; verify at all sizes.
- Minimum targets: 4.5:1 for body text, 3:1 for large text and UI component boundaries (WCAG 2.2 AA).

### 6.3 Logo (Proposed concept — not yet created)
- Arabic wordmark **صلب** and Latin wordmark **SOLB**.
- Simple geometric symbol inspired by precise cutting, a concrete section, or engineered geometry (e.g., a core-drill circle intersected by a straight cut line).
- Deliverables required: horizontal and stacked lockups; light-background and dark-background versions; one-color version; square icon/favicon (16/32/180/512 px); SVG master; ad-ready square and horizontal assets.
- **No finished logo file exists.** Do not describe the logo as complete.

### 6.4 Tagline (Confirmed as working direction; not a verified performance claim)
- Arabic: «قص دقيق. تخريم احترافي. تنفيذ بثقة.»
- English: "Precision Cutting. Professional Coring. Built on Confidence."

### 6.5 Typography (Proposed)
- Arabic: a clean, highly legible Arabic sans-serif (candidates: IBM Plex Sans Arabic, Cairo, Tajawal), medium/bold for headings.
- Latin: a neutral grotesque or the Latin companion of the chosen Arabic family (e.g., IBM Plex Sans).
- Self-host or preload fonts; limit to 2 weights per script to protect performance.

### 6.6 Voice (Proposed)
Direct, calm, specific, practical. Short sentences. Name the job ("فتحة باب"، "تخريم لمواسير الصرف") rather than abstract benefits.

---

## 7. Sitemap and Information Architecture

Single URL, anchor-navigated, with language variants.

```
/            (Arabic default, RTL)   → canonical for Arabic
/en/         (English, LTR)          → canonical for English
   #top (Header)
   #hero
   #services
   #why-solb
   #gallery
   #service-area
   #quote
   #contact (Footer)
```

- **Proposed:** separate crawlable URLs per language (`/` and `/en/`) with `hreflang` (`ar-SA`, `en`, `x-default`) rather than JavaScript-only toggling, so each language is indexable and ad-matchable. Final URL scheme depends on the production domain (Pending).
- Navigation (all sections reachable in one tap): الخدمات / Services · لماذا صلب / Why SOLB · المعرض / Gallery · منطقة الخدمة / Service Area · اطلب عرض سعر / Get a Quote · Language switch · Call CTA.

---

## 8. Detailed Section-by-Section Landing Page Specification

> Example copy below is **Proposed example copy**, not verified fact. Items marked ⚠ require client confirmation before publishing.

### Section 1 — Header and Navigation
- **Objective:** Orient, brand, and keep contact one tap away.
- **Required content:** SOLB logo (Arabic + Latin); anchor nav; AR/EN switcher; phone CTA button.
- **Primary action:** Call.
- **Visual requirements:** Graphite background; yellow CTA with Graphite text; logo legible on dark.
- **Mobile behavior:** Compact header with logo, language switch, and a call icon-button; nav collapses into an accessible menu; header height small enough not to crowd the hero.
- **SEO / accessibility:** `<header>` + `<nav aria-label>`; language switch uses `lang`/`hreflang` links; visible focus states; switch label text, not flag icons only.
- **Dependencies:** Logo files (Pending).

### Section 2 — Hero
- **Objective:** In ≤5 seconds, state what is offered, where, and how to contact.
- **Required content:** Brand name; H1; supporting description; phone CTA (primary); WhatsApp CTA (secondary); "Riyadh" indication; real equipment/work photo.
- **Example copy (AR):**
  - H1: «قص وتخريم الخرسانة بالرياض»
  - Sub: «قص جدران وأسقف خرسانية، فتحات أبواب ونوافذ وتكييف، وتخريم كور للسباكة والكهرباء والصرف.»
  - CTAs: «اتصل الآن» · «واتساب»
- **Example copy (EN):**
  - H1: "Concrete Cutting & Core Drilling in Riyadh"
  - Sub: "Wall and slab cutting, openings for doors, windows and HVAC, and core drilling for plumbing, electrical and drainage."
  - CTAs: "Call now" · "WhatsApp"
- **Primary action:** Phone. **Secondary:** WhatsApp (visually subordinate: outline or Steel Blue fill).
- **Visual requirements:** One strong real photograph (see Section 17 recommendation — e.g., Photo 9 or 2 for equipment; a work photo only after provenance is confirmed). No stock imagery presented as own work.
- **Mobile behavior:** Headline + both CTAs visible above the fold at 360×640; image below or as a subdued background; no carousel.
- **SEO / accessibility:** Single `<h1>`; descriptive alt text; hero image preloaded and sized explicitly (avoid CLS).
- **Dependencies:** Photo selection/ownership.

### Section 3 — Services
- **Objective:** Let visitors self-identify their job quickly and match ad intent.
- **Required content (four categories, Confirmed scope):**
  1. **قص الجدران والأسقف الخرسانية / Concrete wall and slab cutting**
  2. **فتحات الأبواب والنوافذ والتكييف والتهوية والمصاعد والسلالم / Openings for doors, windows, ventilation, A/C, elevators and stairs**
  3. **تخريم الكور للسباكة والكهرباء والصرف والتكييف / Core drilling for plumbing, electrical, drainage and HVAC** — mention "up to 12 inches" **only after technical verification** ⚠
  4. **الهدم والترميم وإزالة المخلفات / Demolition, building repair, restoration and debris removal**
- **Primary action:** Call / WhatsApp from each card ("اسأل عن هذه الخدمة" / "Ask about this service").
- **Visual requirements:** Four cards, simple line icons, one real photo per card where available; Off-white background.
- **Mobile behavior:** Single-column stack; each card ends with a compact contact row.
- **SEO / accessibility:** `<h2>` for section, `<h3>` per service; plain-language text containing target keywords naturally.
- **Dependencies:** 12-inch verification; photo assignment.

### Section 4 — Why SOLB
- **Objective:** Communicate only client-supported differentiators.
- **Required content:**
  - Modern equipment (client statement).
  - German equipment ⚠ *(publish only after confirmation, including whether it applies to all equipment)*.
  - Focus on precise cutting.
  - Aim to reduce unnecessary vibration and damage to surrounding structures ⚠ *(approved wording required)*.
  - Direct communication for inquiries and quotations.
- **Primary action:** Call.
- **Visual requirements:** 4–5 concise points on Graphite/Steel Blue; small icons; no statistics, badges, or counters.
- **Mobile behavior:** Vertical list; no hover-dependent content.
- **Dependencies:** Claims confirmation. **Prohibited:** response-time promises, speed claims, price claims, satisfaction claims.

### Section 5 — Equipment and Work Gallery
- **Objective:** Provide visual proof of capability using authentic photographs.
- **Required content:** Curated set of the client's own photographs, each with caption stating what it shows (e.g., "Core-drilling rig and diamond core bits" — not "completed project" unless it is).
- **Primary action:** Call/WhatsApp strip beneath the gallery.
- **Visual requirements:** Consistent crop ratio; 6–8 images maximum; lightbox optional (accessible, keyboard-operable, closeable with Esc).
- **Mobile behavior:** Swipeable or 2-column grid; lazy-load below the fold; WebP/AVIF with JPEG fallback.
- **SEO / accessibility:** Descriptive alt text in both languages (examples in Section 17).
- **Dependencies:** Provenance clearance (two photos watermarked), removal of identifiable people unless consent exists, resolution upgrades for low-res photos.

### Section 6 — Service Area
- **Objective:** Make the geographic scope unambiguous and consistent with ad targeting.
- **Required content:** "نخدم مدينة الرياض / Serving Riyadh, Saudi Arabia." Nothing more.
- **Primary action:** Call.
- **Visual requirements:** Simple text block, optionally a neutral Riyadh graphic. **No map pin, address, branch, or extra coverage areas.**
- **Mobile behavior:** Short block with CTA row.
- **Notes:** The four ad-exclusion neighborhoods are **ad-configuration only** and are **not** to be listed publicly (Section 13).

### Section 7 — Request a Quote
- **Objective:** Convert undecided visitors with a clear next step.
- **Required content:** "اتصل لطلب عرض سعر" / "Call for a quotation"; WhatsApp alternative; a short, non-binding hint of what to send (Proposed): job type, rough size/diameter, location in Riyadh, and a photo of the wall/slab.
- **Primary action:** Phone. **Secondary:** WhatsApp with optional pre-filled message (see 11.4).
- **Visual requirements:** High-contrast Graphite panel with yellow CTA.
- **Mobile behavior:** Full-width buttons, ≥48 px high.
- **Notes:** No prices or price ranges. No invented booking/dispatch process. **No form** (Proposed — a form adds friction and data-privacy obligations; revisit only if justified).

### Section 8 — Contact and Footer
- **Objective:** Final conversion point and consistency anchor.
- **Required content:** Phone; WhatsApp; brand name; "Riyadh" service-area statement; language links; privacy notice link **if** analytics/ad tags/data collection are deployed.
- **Primary action:** Call.
- **Visual requirements:** Graphite background; same CTA styling as elsewhere.
- **Mobile behavior:** Footer clear of the sticky contact bar (add bottom padding).
- **Dependencies:** Privacy notice text (legal review); operating hours (only if provided).

### Persistent mobile contact bar (cross-section)
- Fixed bottom bar with **Call** (primary, yellow) and **WhatsApp** (secondary) controls, visible from the moment the hero CTAs scroll out of view (Proposed).
- Must not cover content, cookie/consent controls, focus targets, or the footer; respect `env(safe-area-inset-bottom)`; ≥48×48 px touch targets; accessible names ("اتصل بصلب" / "Call SOLB"; "راسلنا على واتساب" / "Message SOLB on WhatsApp").
- Sections that must not exist: fabricated reviews, fake ratings, customer logos, case studies, or unverified FAQs. If an FAQ is later added, mark each answer as requiring client confirmation.

---

## 9. Arabic Content Requirements

1. Arabic is the **primary, default** experience: full RTL (`<html lang="ar" dir="rtl">`).
2. Use Modern Standard Arabic with plain, spoken-friendly vocabulary suited to Saudi users; avoid heavy dialect and avoid overly technical terms where simpler wording is accurate.
3. Preserve **exact** client terminology: «المنشار الليزر» ⚠ (validate before using on page), «تخريم الكور», «قص الخرسانة».
4. Brand name appears as **صلب | SOLB**; keep Latin and Arabic wordmarks consistent.
5. Numerals: phone number displayed in a consistent format with LTR isolation (`<bdi dir="ltr">` or `unicode-bidi: isolate`), e.g., `+966 55 612 3725`, so it does not visually reorder in RTL text.
6. Punctuation and mirrored layout: icons with direction (arrows, chevrons) mirrored; Latin text inside Arabic isolated.
7. Line-height ~1.7 for Arabic body text; avoid letter-spacing on Arabic.
8. Tone: direct, confident, modest — no superlatives («الأفضل»، «رقم 1») without proof.

**Proposed CTA labels (AR):** اتصل الآن · واتساب · اطلب عرض سعر · تواصل معنا

---

## 10. English Content Requirements

1. Full-equivalence translation, not a summary: every service, contact point, and claim in Arabic exists in English with the same meaning and the same level of certainty.
2. `<html lang="en" dir="ltr">`; LTR layout with mirrored spacing/alignment as needed.
3. Terminology (Proposed; confirm with client): *concrete cutting*, *core drilling*, *wall saw cutting* (⚠ pending equipment confirmation), *openings*, *demolition and repair*, *debris removal*.
4. Do not translate «المنشار الليزر» as "laser saw" until the equipment is identified; "laser" may mislead.
5. Keep Riyadh as the sole service area; use "Riyadh, Saudi Arabia" consistently.
6. Maintain the same contact details and CTA hierarchy.

**Proposed CTA labels (EN):** Call now · WhatsApp · Get a quote · Contact us

---

## 11. Conversion Strategy and CTA Specification

### 11.1 Principle
One dominant goal: **a phone call.** Everything else supports it.

### 11.2 CTA hierarchy

| Rank | CTA | Style (Proposed) | Placement |
|---|---|---|---|
| 1 | Call (`tel:`) | Solid Engineering Yellow, Graphite text, phone icon | Header, hero, each service card, quote, footer, sticky mobile bar |
| 2 | WhatsApp | Outline or Steel Blue fill, WhatsApp icon | Hero, quote, footer, sticky mobile bar |
| 3 | Language switch | Text link | Header, footer |

### 11.3 Rules
- Mobile-first: both CTAs above the fold at 360×640 and in the sticky bar.
- Contact reachable from every major section without scrolling more than one viewport.
- No form, popup, chatbot, or exit-intent overlay (Proposed). No auto-playing media.
- Desktop: show the number as visible text (desktop users cannot always tap-to-call), with the `tel:` link still present.
- Button copy states the action ("اتصل الآن"), not generic text ("اضغط هنا").
- Hover/focus/active/disabled states defined for every CTA; focus ring visible against Graphite and Off-white.

### 11.4 WhatsApp pre-filled message (Proposed example)
- AR: `https://wa.me/966556123725?text=` + URL-encoded «السلام عليكم، أرغب بالاستفسار عن خدمة قص/تخريم الخرسانة في الرياض.»
- EN: `https://wa.me/966556123725?text=` + URL-encoded "Hello, I'd like to ask about concrete cutting/core drilling in Riyadh."
- Verify the URL on iOS, Android, and desktop (WhatsApp Web) before launch. Pending confirmation.

### 11.5 Quote messaging
Explain only the next step: *call or message, describe the job, send a photo.* Do not promise a response time, site visit, or fixed pricing.

---

## 12. SEO and Local Search Strategy

> All keywords are **hypotheses**, not verified search-volume data. No ranking position or indexing timeline is promised.

### 12.1 Keyword research plan (Proposed)
1. Seed with the themes below; expand using Google Keyword Planner, Google Search Console (post-launch), and Search suggestions.
2. Check real SERPs in Riyadh for intent and competitor framing.
3. Record volume, intent, and ad/organic suitability in a keyword sheet.

**Arabic seed themes:** قص الخرسانة بالرياض · قص الجدران الخرسانية بالرياض · تخريم الكور بالرياض · تخريم الخرسانة · قص الأسقف الخرسانية · فتح باب في جدار خرساني · قص بلاطات خرسانية
**English seed themes:** Concrete cutting Riyadh · Concrete core drilling Riyadh · Concrete wall cutting Riyadh · Slab cutting Riyadh

**Intent grouping:** service + city (highest commercial intent); job-specific (door opening, drainage hole); equipment-oriented (lower priority).

### 12.2 On-page recommendations (Proposed)

| Element | Arabic (example) | English (example) |
|---|---|---|
| Title (≤ ~60 chars) | صلب | قص وتخريم الخرسانة بالرياض | SOLB | Concrete Cutting & Core Drilling in Riyadh |
| Meta description (≤ ~155 chars) | قص جدران وأسقف خرسانية وتخريم كور للسباكة والكهرباء والتكييف في الرياض. اتصل أو راسلنا واتساب. | Concrete wall and slab cutting and core drilling in Riyadh. Call or message us on WhatsApp. |
| H1 | قص وتخريم الخرسانة بالرياض | Concrete Cutting & Core Drilling in Riyadh |
| H2s | الخدمات · لماذا صلب · المعرض · منطقة الخدمة · اطلب عرض سعر | Services · Why SOLB · Gallery · Service Area · Get a Quote |

- One H1 per language page; H3 per service. Keywords appear naturally; no stuffing.
- Descriptive alt text; descriptive filenames (e.g., `core-drilling-rig-solb.webp`).
- Anchor navigation with matching `id`s; no broken anchors.

### 12.3 Technical SEO
- **Canonical:** self-referencing canonical per language URL; final absolute URLs depend on production domain (Pending).
- **hreflang:** `ar-SA`/`ar`, `en`, and `x-default`, reciprocal on both pages.
- **robots.txt:** allow crawling of the live site; block staging/preview environments (and `noindex` them).
- **Sitemap:** `sitemap.xml` listing both language URLs with `xhtml:link` alternates; submit via Search Console.
- **Indexability:** server-rendered or pre-rendered HTML for both languages (content must not depend on client-side JS to appear).
- **Performance:** see Section 16; performance supports both organic and Ads landing-page experience.
- **HTTPS** only; mobile-friendly viewport; Open Graph/Twitter tags with a real, owned image and AR/EN titles.

### 12.4 Structured data (only where facts qualify)
- **Proposed minimum:** `Organization` or `Service`-style markup using brand name, URL, logo (once it exists), and `telephone`, plus `areaServed: Riyadh` — only if it exactly matches visible page content.
- **Do not** publish `LocalBusiness` with an invented address, geo-coordinates, opening hours, ratings, or reviews. Defer fuller local markup until a verified address/eligibility exists.
- Validate with Google's Rich Results Test / Schema validator before deployment.

### 12.5 Google Business Profile
Eligibility is **not assumed**. Service-area businesses may qualify under Google's rules but require verification. Evaluate separately; **Out of scope** unless approved. Do not create or imply a listing.

---

## 13. Google Ads Landing-Page Requirements

### 13.1 Requirements
- **Message match:** headline and service wording on the page reflect the ad group's intent (e.g., core-drilling ads → section 3, card 3 prominent; consider separate parameterized anchors or variants later — Proposed).
- **Mobile usability:** thumb-reachable CTAs, no intrusive overlays, readable text without zoom.
- **Speed:** meet the thresholds in Section 3.2.
- **Accurate service-area messaging:** Riyadh only, matching ad geo-targeting.
- **Functional contact links:** call and WhatsApp tested on real devices before ads go live.
- **Conversion readiness:** Google tag/Ads conversion actions configured and *tested* before spend (Section 14).
- **Policy readiness:** no misleading claims, no unverified superlatives, working privacy information, transparent business identity (do not claim registration; present brand and contact clearly).
- **Do not assume** budget, campaign structure, bid strategy, expected clicks, or conversion rate.

### 13.2 Geographic configuration (Confirmed requirement — advertising setup, not public copy)
- **Target:** Riyadh.
- **Exclusions requested by client:**
  - أم الحمام الشرقي
  - أم الحمام الغربي
  - المنفوحة الجديدة
  - المنفوحة القديمة
- **Action:** verify which of these exist as selectable Google Ads locations or must be handled via radius/other methods; record the outcome. Do not publish these on the website.

---

## 14. Analytics and Conversion Tracking Plan

> **Status: Proposed. No tracking is active.** Tracking must not be described as live until implemented and tested.

### 14.1 Event schema

| Event | Trigger | Suggested parameters |
|---|---|---|
| `phone_click` | Click/tap on any `tel:` link | `cta_location` (header/hero/service_card/quote/footer/sticky_bar), `language` (ar/en), `service_context` (optional) |
| `whatsapp_click` | Click/tap on any WhatsApp link | same as above |
| `language_switch` | User switches language | `from_language`, `to_language`, `location` |
| `nav_click` | Anchor navigation click | `target_section` |
| `service_card_cta_click` | Contact CTA in a service card | `service` |
| `gallery_open` | Lightbox opened (if used) | `image_id` |
| `scroll_depth` (optional) | 50% / 90% thresholds | `percent` |

### 14.2 Measurement notes
- `phone_click` and `whatsapp_click` are **intent signals**, not completed calls/conversations.
- Mark `phone_click` and `whatsapp_click` as key events/conversions in analytics, and import or create matching Google Ads conversion actions; consider Google Ads call reporting (call assets / calls from ads) as a separate, more direct call measurement — decision Pending.
- Avoid double counting (one event per interaction; debounce).
- Never send personal data (phone numbers of users, message text) in event parameters.

### 14.3 Privacy and consent
- Deploy only the tools actually needed. Provide a privacy notice matching the tools used.
- Consent mechanics (banner, consent mode) and obligations under Saudi data-protection requirements must be reviewed by a qualified professional — **Pending legal review**.

### 14.4 Test plan (before go-live)
- Verify each event in the tag debugger / analytics real-time view on iOS Safari, Android Chrome, and desktop.
- Verify Ads conversion firing and that conversions are not triggered by page load.
- Document results; only then mark tracking "active."

---

## 15. Responsive Design and Accessibility

### 15.1 Breakpoints (Proposed)
- Mobile: 320–599 px (design baseline 360 px)
- Tablet: 600–1023 px
- Desktop: ≥ 1024 px; content max-width ~1200 px

### 15.2 Responsive rules
- Mobile-first CSS; fluid type and spacing; no horizontal scrolling at any width ≥ 320 px.
- Sticky contact bar mobile/tablet; desktop shows header CTA and visible number.
- Images: responsive `srcset`/`sizes`; explicit width/height.

### 15.3 Accessibility (target WCAG 2.2 AA — Proposed)
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`); logical heading order.
- Keyboard operable everywhere; visible focus indicator (≥ 3:1 against adjacent colors); skip-to-content link.
- Contrast per Section 6.2; do not convey meaning by color alone.
- Touch targets ≥ 44×44 px recommended (48 px for primary CTAs).
- Accessible names for icon-only buttons; `aria-label` in the active language.
- Alt text in the page language; decorative images `alt=""`.
- Respect `prefers-reduced-motion`; minimal animation overall.
- Correct `lang`/`dir` per language; bidi-safe phone number.
- Lightbox (if used): focus trap, Esc to close, return focus.

---

## 16. Technical Requirements

Implementation-agnostic. Any stack suggestion is a **Proposed recommendation, not a decision**.

**Functional**
- Single-page structure with working anchors and AR/EN versions.
- `tel:` and WhatsApp links working on real devices.
- Event tracking per Section 14 (when approved).

**Performance (Proposed)**
- Page weight target: aim for a lean first load (e.g., hero image ≤ ~150–200 KB after optimization; total initial transfer as small as practicable).
- Modern image formats; lazy-load non-critical images; preload hero image and critical font.
- Minimal third-party scripts; defer analytics where compatible with measurement needs.
- Core Web Vitals thresholds per Section 3.2.

**Quality & delivery**
- Semantic HTML; clean metadata; crawlable, server-rendered/static output.
- HTTPS; security headers appropriate to the host.
- Staging environment set to `noindex`.
- Browser support: current and previous major versions of Chrome, Safari (iOS), Samsung Internet, Edge, Firefox.

**Stack recommendation (Proposed, optional):** a static-first framework or static HTML/CSS with minimal JavaScript is well suited: fast, easily indexable, simple to host. Final choice is Pending.

---

## 17. Content and Asset Inventory

### 17.1 Asset inventory and review (9 photographs supplied)

The photographs were visually reviewed at a high level. This is a **first-pass catalogue**, not a rights clearance. Each file name below is the order received.

| # | Subject (observed) | Quality / issues | Suggested use | Status |
|---|---|---|---|---|
| 1 | Red core-drilling rig on stand with water pump, accessories and many diamond core bits in the background (indoor, tiled floor) | Good quality; equipment in packaging/showroom, shallow depth of field | Equipment gallery; Service card 3 (core drilling) | Proposed use — client to confirm ownership |
| 2 | Orange core-drilling rig on stand with pump, accessories, core bits | Good quality; packaging visible; some branding on motor | Equipment gallery; Service card 3 | Proposed use — confirm ownership; check any visible brand marks |
| 3 | Wall-saw guide frame with hand-wheels, rails and a large circular diamond blade, stored in a room | Low resolution; appears to be a supplier-style photo; inconsistent with others | Not recommended until source confirmed | **Pending — provenance unclear** |
| 4 | Track-mounted wall saw cutting a concrete slab section suspended by a crane chain, city and sea in the background | Strong image, **third-party watermark** (bottom-right); location is not identifiable as Riyadh | Hero/Service card 1 *only if client proves it is their own work* | **Do not use until ownership verified** |
| 5 | Worker on scaffold plank core-drilling a rectangular opening in a wall using overlapping cores; wet floor, core pieces on ground | Low-light, moderate resolution; **worker's face partly visible** | Service card 2 (openings) | Pending — confirm it's the client's job; consent/blur for identifiable person |
| 6 | Track-mounted wall saw with large blade cutting a concrete staircase section | Low-resolution/compressed | Service card 1 / 2 (stairs) | Pending — confirm source; seek higher resolution |
| 7 | Core-drill rig drilling a row of overlapping holes in a floor slab | Low-res, appears to be a screenshot (UI edge visible) | Service card 3 | Pending — replace with original file |
| 8 | Rectangular wall opening formed by overlapping core holes; handheld core drill at left | **Third-party watermark**; rough edge visible on the left of the wall | Service card 2 | **Do not use until ownership verified** |
| 9 | Red track-mounted wall saw unit with digital controller and a large diamond blade (indoor showroom) | High quality, clean | Hero (equipment) or Gallery; Service card 1 | Proposed use — confirm ownership |

**Observations to resolve**
- Photos **4 and 8** carry a classified-ads-style watermark, and **3, 6, 7** look re-shared/compressed. This suggests some images may not originate from the client. Using images the client does not own can create copyright, trust, and ad-policy risk. **Obtain original files and written confirmation of ownership.**
- Photos **1, 2, 9** show equipment in showroom conditions. Caption them as *equipment*, never as *completed projects*.
- No photo currently verifies the German-equipment claim, the 12-inch limit, or any vibration-reduction claim.
- Image 8 shows hole-saw coring along the perimeter of an opening with visibly irregular edges; do not use work photos in a way that implies a finish quality the client has not confirmed.

### 17.2 Image types needed per section

| Section | Recommended imagery |
|---|---|
| Hero | One strong equipment or in-progress cutting photo (landscape crop + mobile crop) |
| Services 1–4 | One authentic photo each: wall/slab saw; finished or in-progress opening; core drilling; demolition/debris (not yet available) |
| Why SOLB | Icons only, or a close-up of equipment |
| Gallery | 6–8 captioned photos (equipment + real jobs) |
| Service area | None required |
| Quote / Contact | Equipment or neutral graphic; no people imagery unless owned |

**Gap:** no photograph currently shows demolition/debris removal or a finished, repaired result. Request these from the client; do not substitute stock imagery as the client's work. Any stock imagery must be labeled "illustrative."

### 17.3 Alt text examples (Proposed — adjust to confirmed facts)

| Photo | Arabic | English |
|---|---|---|
| 1 | «جهاز تخريم كور على حامل مع رؤوس تخريم ماسية» | "Core drilling rig on a stand with diamond core bits" |
| 2 | «جهاز تخريم كور برتقالي مع ملحقاته ورؤوس التخريم» | "Orange core drilling rig with accessories and core bits" |
| 9 | «منشار جداري على مسار مع شفرة ماسية كبيرة ووحدة تحكم» | "Track-mounted wall saw with a large diamond blade and control unit" |

### 17.4 Content inventory (to be produced)

| Item | Owner | Status |
|---|---|---|
| Final Arabic copy (all sections) | Content writer | To do — based on this brief |
| Final English copy | Content writer | To do |
| Logo files (SVG/PNG/favicon) | Designer | To do |
| Optimized images (AR/EN alt text) | Designer/Dev | To do |
| Privacy notice | Legal/Client | To do |
| Meta tags / OG image | SEO / Designer | To do |
| Ads copy (aligned to page) | Ads specialist | To do |

---

## 18. Assumptions, Constraints, and Risks

### 18.1 Assumptions (Proposed)
- Most traffic will be mobile and Arabic-speaking.
- The client can answer calls and WhatsApp messages promptly during advertised periods.
- A production domain will be provided.

### 18.2 Constraints
- No verified social proof, hours, address, or legal registration.
- No finished logo.
- Photo provenance uncertain.
- No assumed budget, timeline, or performance targets.

### 18.3 Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Use of watermarked/third-party photos | Copyright, credibility, possible ad disapproval | Verify ownership; replace with original photos |
| Unverified claims (German, laser, 12 in, vibration) | Misleading advertising; trust loss | Hold until confirmed; use approved wording only |
| Missed calls after ads go live | Wasted spend | Client call-handling plan; schedule ads when reachable |
| Broken contact links on some devices | Lost leads | Real-device testing |
| Low-resolution photos | Poor perceived quality | Request originals |
| Ads geo-targeting can't exclude named neighborhoods exactly | Irrelevant clicks | Verify options; use alternative targeting/negative approaches |
| Privacy/consent non-compliance | Legal exposure | Legal review; deploy only needed tags |
| Identifiable people in photos without consent | Privacy | Blur/crop or obtain consent |
| Equipment terminology mismatch | Technical credibility | Validate with client/technical review |

---

## 19. Missing Information Register

| # | Item | Status | Needed for |
|---|---|---|---|
| 1 | Business operating hours | Pending confirmation | Footer, ads scheduling, structured data |
| 2 | Legal business name and registration status | Pending confirmation | Footer, privacy notice, ads transparency |
| 3 | Final logo files | Pending (not created) | Header, favicon, ads |
| 4 | Selection/inspection of photographs; original files; ownership confirmation (esp. photos 3–8) | Pending confirmation | Hero, gallery, services |
| 5 | Exact English equipment terminology; meaning of «المنشار الليزر» | Pending confirmation | Copy, SEO |
| 6 | German equipment claim and manufacturer details | Pending confirmation | Why SOLB |
| 7 | Technical review of the 12-inch maximum core diameter | Pending confirmation | Service 3, ads |
| 8 | Exact approved wording for vibration/structural-damage claims | Pending confirmation | Why SOLB, ads |
| 9 | Domain name and production URL | Pending | Canonical, sitemap, hreflang, Ads |
| 10 | Address/eligibility details for local listings (if applicable) | Pending | Structured data, GBP |
| 11 | Consent for identifiable people in photos | Pending | Gallery |
| 12 | Call-handling capacity/availability for ad traffic | Pending | Ads scheduling |
| 13 | Decision on call-tracking method (call reporting vs click events only) | Pending | Analytics |
| 14 | Privacy notice and consent approach | Pending (legal review) | Footer, tags |

---

## 20. Acceptance Criteria and QA Checklist

### 20.1 Content and accuracy
- [ ] Every claim appears in the Confirmed list or is explicitly approved by the client.
- [ ] No prices, hours, addresses, reviews, ratings, certifications, guarantees, years of experience, project counts, or testimonials appear.
- [ ] No absolute claims ("zero vibration," "100% safe," etc.).
- [ ] The business is not described as a registered company/corporation.
- [ ] Arabic and English versions contain equivalent content and identical contact details.
- [ ] The "12-inch" limit, if shown, has been technically verified.
- [ ] The German-equipment claim, if shown, is confirmed.
- [ ] Illustrative images (if any) are labeled; no stock image is presented as the client's work.

### 20.2 Contact and conversion
- [ ] Phone number identical everywhere: +966 55 612 3725.
- [ ] `tel:+966556123725` opens the dialer on iOS and Android.
- [ ] WhatsApp link opens the correct chat on iOS, Android, and desktop.
- [ ] Phone and WhatsApp CTAs visible in the hero without scrolling at 360×640.
- [ ] Sticky mobile bar present, does not cover content/consent controls/footer.
- [ ] Contact reachable within one viewport of any section.

### 20.3 Tracking (when implemented)
- [ ] `phone_click`, `whatsapp_click`, `language_switch` fire once per interaction with correct parameters.
- [ ] Ads conversions do not fire on page load.
- [ ] Results documented; tracking labelled "active" only after verification.

### 20.4 SEO
- [ ] Unique title/meta per language; one H1 per page; logical H2/H3.
- [ ] Canonical and hreflang reciprocal and correct.
- [ ] `robots.txt` and `sitemap.xml` valid; staging `noindex`.
- [ ] Structured data validates and matches visible content; no invented address/hours/ratings.
- [ ] All images have descriptive alt text in the page language.
- [ ] No broken links or anchors.

### 20.5 Performance and technical
- [ ] Mobile LCP ≤ 2.5 s, CLS ≤ 0.1, INP ≤ 200 ms (field or lab proxy measured and recorded).
- [ ] Images optimized; non-critical images lazy-loaded; hero explicitly sized.
- [ ] No horizontal scroll at 320 px; layouts verified at 360, 768, 1024, 1440 px.
- [ ] Works on current/previous major Chrome, Safari (iOS), Samsung Internet, Edge, Firefox.

### 20.6 Accessibility and localization
- [ ] Arabic RTL and English LTR layouts correct; icons mirrored where needed.
- [ ] Phone number does not reorder in RTL text.
- [ ] Contrast ≥ 4.5:1 (body) / 3:1 (large text, UI boundaries).
- [ ] Full keyboard operation; visible focus on all interactive elements.
- [ ] Accessible names on icon buttons; `lang` and `dir` set correctly.
- [ ] `prefers-reduced-motion` respected.

### 20.7 Privacy
- [ ] Privacy notice present if tags/data collection are used.
- [ ] Only necessary tags deployed; consent behavior reviewed.

---

## 21. Recommended Implementation Sequence

1. **Client confirmations (week 0):** photo ownership and originals; equipment terminology; German claim; 12-inch limit; vibration wording; domain; hours (if any).
2. **Asset phase:** finalize photo set; request missing photos (demolition, finished openings); blur/crop identifiable people; create logo system.
3. **Content phase:** write final Arabic copy, then English; keyword validation; meta tags; alt text.
4. **Design phase:** wireframes (mobile first), then high-fidelity AR (RTL) and EN (LTR); contrast check.
5. **Build phase:** implement semantic, performant pages; contact links; sticky bar; metadata; hreflang/canonical.
6. **Tracking phase:** implement events; test; configure Ads conversion actions.
7. **QA phase:** run Section 20 checklist on real devices.
8. **Ads readiness:** align ad copy/landing content; configure Riyadh targeting and the four client-specified exclusions; confirm client call availability.
9. **Launch and review:** staged launch; submit sitemap; review early data (clicks, events, search terms) without presuming outcomes; iterate.

---

## Decisions Already Approved (Confirmed)

- Brand and display name: **صلب | SOLB — قص وتخريم الخرسانة بالرياض** (marketing name only).
- Visual direction: **Industrial Professional**, with the four-color working palette.
- Working tagline (Arabic and English).
- Single-page landing page; Arabic (RTL, primary) and English (LTR) with equivalent content.
- Service area: **Riyadh**; client-requested ad exclusions: أم الحمام الشرقي، أم الحمام الغربي، المنفوحة الجديدة، المنفوحة القديمة.
- Primary conversion: phone calls; secondary: WhatsApp.
- Phone and WhatsApp: **+966 55 612 3725**.
- Confirmed service scope (cutting, core drilling up to a *stated* 12 in, demolition/repair).
- A new logo is required.

## Items Still Pending

- Photo ownership/originals and final selection (especially photos 3–8); consent for identifiable people.
- German-equipment claim; «المنشار الليزر» terminology; 12-inch verification; vibration-reduction wording.
- Operating hours; legal name/registration status; address/local-listing eligibility.
- Logo files; domain/production URL.
- Call-tracking approach; privacy notice and consent approach.
- Client call-handling availability for ad traffic.

## Prioritized Next Steps

1. **Resolve photo provenance** and obtain original files (blocks hero and gallery).
2. **Confirm the four claim/terminology items** (German, laser-saw terminology, 12 in, vibration wording).
3. **Confirm domain** and decide the URL/language structure.
4. **Commission the logo** and finalize the visual identity kit.
5. **Write and approve AR/EN copy** using only confirmed facts.
6. **Design, build, and QA** the page against Section 20.
7. **Implement and test tracking**, then **prepare Google Ads** (targeting, exclusions, ad copy aligned to the page).
8. **Launch and review** early performance, without guaranteeing results.
