# IMPLEMENTATION_PLAN — SOLB | صلب

**Concrete Cutting & Core Drilling in Riyadh, Saudi Arabia**

---

## 1. Document Metadata, Scope, and Objectives

| Item | Value |
|---|---|
| Document | `IMPLEMENTATION_PLAN.md` |
| Project | SOLB \| صلب — bilingual (Arabic RTL / English LTR) static website |
| Version | 1.0 — Draft for client and developer review |
| Date | 14 October 2026 |
| Primary source | `SOLB_Product_Brief.md` v1.0 (13 October 2026) |
| Secondary source | Implementation requirements supplied after the brief (stack, hosting, domain, sitemap, organic-SEO priority) |
| Status | Planning. No design, code, analytics, or SEO work has been completed. |

### 1.1 Status labels

| Label | Meaning |
|---|---|
| **CONFIRMED** | Established by the brief or explicit client decisions |
| **PROPOSED** | Recommended implementation choice, not finally approved |
| **PENDING VALIDATION** | Needs verification, technical testing, or client approval |

### 1.2 Objectives

1. **Primary:** attract relevant organic search traffic from Riyadh and convert visitors into phone calls (primary) and WhatsApp messages (secondary).
2. Deliver equivalent, genuinely useful Arabic and English experiences on separate crawlable URLs.
3. Present a credible image using **only verified information**.
4. Meet Core Web Vitals "good" thresholds and WCAG 2.2 AA where practical and testable.
5. Ship as a purely static site (no CMS, database, or backend).

Google Ads is **not** the primary objective of this plan. Ads-specific setup (geo-exclusions, call reporting, conversion actions) from the brief is out of scope here and is noted only where it affects page content.

### 1.3 Honest limits

This plan covers **technical SEO implementation**. It does not and cannot promise rankings, traffic, or lead volume. Structured data does not guarantee rich results.

---

## 2. Executive Summary

SOLB is an independently operated concrete cutting, core drilling, opening-formation, and demolition/repair service in Riyadh. The site is a 12-page static website (6 Arabic + 6 English): a home page, four service pages, and a contact page per language. Every page's job is to answer a specific search intent in plain language and put **Call** and **WhatsApp** one tap away.

**Architecture (PROPOSED):** Next.js App Router + TypeScript + Tailwind CSS, built with `output: 'export'` into `out/`, uploaded to Hostinger shared web hosting. No server runtime is assumed. Arabic lives at `/`, English at `/en/`, linked by reciprocal `hreflang`.

**Trust strategy:** the business has no testimonials, ratings, project counts, certifications, address, or hours to show, so none appear. Credibility comes from authentic photographs, specific service descriptions, transparent wording, and frictionless contact.

**Blocking items before content can go live** (see §23.4): photo ownership proof (esp. watermarked photos 4 and 8), German-equipment claim, «المنشار الليزر» terminology, 12-inch core limit, vibration-wording approval, logo, operating hours (only if the client wants them shown), privacy/consent approach.

---

## 3. Project Facts and Status Register

### 3.1 Facts register

| # | Fact / decision | Status | Source / note |
|---|---|---|---|
| F-01 | Brand: صلب \| SOLB | CONFIRMED | Brief §2 |
| F-02 | Services: concrete cutting, core drilling, openings, demolition/removal/repair | CONFIRMED | Brief §5.1 |
| F-03 | Service area: Riyadh only | CONFIRMED | Brief §2 |
| F-04 | Phone and WhatsApp: +966 55 612 3725 | CONFIRMED | Brief §5.3 |
| F-05 | `tel:+966556123725` | PROPOSED (implementation value) | Brief §5.3 |
| F-06 | `https://wa.me/966556123725` | PROPOSED — verify on iOS, Android, desktop | Brief §5.3 |
| F-07 | Phone + WhatsApp only; no form, chatbot, backend | CONFIRMED | Requirements |
| F-08 | Operating hours unknown — never displayed | CONFIRMED (omission) | Brief §2 |
| F-09 | No address, no registered-entity claim | CONFIRMED | Brief §2 |
| F-10 | Arabic (RTL, primary) + English (LTR), simultaneous launch, separate URLs, `hreflang` | CONFIRMED | Requirements |
| F-11 | Visual direction: Industrial Professional; four-color palette | CONFIRMED | Brief §6 |
| F-12 | New logo must be designed; none exists | CONFIRMED | Brief §6.3 |
| F-13 | Tagline «قص دقيق. تخريم احترافي. تنفيذ بثقة.» / "Precision Cutting. Professional Coring. Built on Confidence." | PROPOSED | Brief calls it a working direction; requirements say treat as proposed. Needs explicit approval. |
| F-14 | Stack: Next.js App Router, TypeScript, Tailwind | CONFIRMED (client requirement) | Requirements |
| F-15 | Hosting: Hostinger Web Hosting; no assumption of Node.js runtime | CONFIRMED | Requirements |
| F-16 | Domain `solb.site`, reported connected, HTTPS reported working | PENDING VALIDATION | Verify in browser and with certificate check |
| F-17 | Static export, artifact = `out/` | PROPOSED | Requirements |
| F-18 | Sitemap of 6 pages per language | PROPOSED, subject to keyword-intent review | Requirements |
| F-19 | Max core diameter "up to 12 inches" | PENDING VALIDATION — do not publish | Brief §5.1 |
| F-20 | "German equipment" | PENDING VALIDATION — do not publish | Brief §5.4 |
| F-21 | Term «المنشار الليزر» | PENDING VALIDATION — do not publish or translate as "laser saw" | Brief §5.4 |
| F-22 | Vibration / structural-impact wording | PENDING VALIDATION — approved wording required | Brief §5.5 |
| F-23 | "Modern equipment" | CONFIRMED as client statement; exact public wording PENDING | Brief §5.2 |
| F-24 | Photos reported owned by the business | PENDING VALIDATION | See conflict C-01 |
| F-25 | Keywords | PROPOSED hypotheses only; no volumes or difficulty known | §11 |
| F-26 | Targets: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1; WCAG 2.2 AA | PROPOSED | Brief §3.2, §15 |
| F-27 | Event names `phone_click`, `whatsapp_click`, `language_switch` | PROPOSED | Brief §14 |

### 3.2 Source conflicts and decisions required

| ID | Conflict | Resolution in this plan | Decision needed from |
|---|---|---|---|
| C-01 | **Photos.** Requirements say photos are owned by the business. The brief's review found third-party watermarks on photos 4 and 8 and re-shared/compressed signs on 3, 6, 7. | Neither is silently chosen. **Photos 4 and 8 are blocked.** Photos 3, 6, 7 blocked until originals supplied. Photos 1, 2, 9 are usable once the client confirms ownership in writing. | Client (written ownership statement + original files) |
| C-02 | **Structure.** Brief specifies a single-page anchor-navigated site (`/` and `/en/`). Requirements specify 6 pages per language. | This plan follows the **newer requirements** (multi-page) because they are SEO-driven. The brief's section content is redistributed across pages (§8). | Client / PM — confirm the multi-page structure supersedes the brief |
| C-03 | **Primary channel.** Brief centres Google Ads message-match; requirements make organic SEO primary. | Organic first. Ads notes retained only where they affect content. | Client — confirm |
| C-04 | **Tagline status.** Brief: "Confirmed as working direction." Requirements: treat as proposed. | Treated as PROPOSED. | Client |
| C-05 | **Technical details.** Requirements say technical details were confirmed by the client; the brief lists the 12-inch limit, German claim, laser term, and vibration wording as unverified. | Brief governs: nothing in the unverified list is published as fact. Gated copy is marked `[GATED]`. | Client — supply exact approved facts in writing |
| C-06 | **Domain.** Brief lists the domain as pending; requirements give `solb.site` as reported connected. | Use `solb.site` as the working canonical host, verified at phase 0. | Developer / client |
| C-07 | **Privacy notice.** Brief requires a privacy notice if tags are deployed; the sitemap has no privacy page. | PROPOSED: add `/privacy/` and `/en/privacy/` **only if** analytics or any tag is deployed (not counted in the 12 core pages). | Client + legal review |
| C-08 | **Hero imagery.** Requirements want a prominent "original business photo" in the hero; the brief notes photos 1, 2, 9 show showroom-style equipment, not completed jobs. | Hero may use an equipment photo, **captioned as equipment**. A job photo is used only once provenance is cleared. | Client |

---

## 4. Scope of Work and Exclusions

### 4.1 In scope

- Brand and logo design (new).
- Design system and reusable components.
- 12 static pages (6 AR + 6 EN) with natural, localized copy.
- Image optimization pipeline and alt text in both languages.
- Technical SEO: metadata, canonical, hreflang, sitemap, robots, minimal structured data, internal linking.
- Tel and WhatsApp link implementation; click-event tracking (if approved).
- Static export, Hostinger deployment, and hosting-behavior validation.
- Testing, accessibility, and performance verification.
- Post-launch Search Console setup and monitoring plan.

### 4.2 Explicit exclusions

- CMS, database, backend, API routes, server actions, middleware, ISR, SSR.
- Contact form, chatbot, popups, exit-intent overlays, auto-playing media.
- Pages for locations outside Riyadh; near-duplicate service pages.
- Blog, FAQ-only pages, case studies, testimonials, ratings, client logos, pricing pages.
- Paid keyword tools, backlink campaigns, and competitor audits with paid data.
- Google Business Profile creation (eligibility not assumed — separate decision).
- Google Ads campaign setup, call-tracking numbers, and neighborhood exclusions (configured in Ads, never listed publicly).
- Legal review itself (required, but performed by a qualified professional).

---

## 5. Requirements

### 5.1 Functional requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | 12 core pages, each with one `<h1>`, at the URLs in §6 | Must |
| FR-02 | Every page shows the same Call and WhatsApp CTAs; number identical everywhere | Must |
| FR-03 | Persistent mobile contact bar (Call primary, WhatsApp secondary) | Must |
| FR-04 | Language switch links each page to its exact counterpart (not just the other homepage) | Must |
| FR-05 | Arabic pages: `lang="ar" dir="rtl"`; English: `lang="en" dir="ltr"` | Must |
| FR-06 | Phone number displayed as visible text on desktop, bidi-isolated | Must |
| FR-07 | Each service page: intro, what is included, typical uses, "how to start", FAQ, CTA | Must |
| FR-08 | Header navigation reachable in one tap on mobile (accessible menu) | Must |
| FR-09 | Custom 404 page in both languages (subject to §17.4 validation) | Should |
| FR-10 | `phone_click`, `whatsapp_click`, `language_switch` events (if tracking approved) | Should |
| FR-11 | Gated copy blocks (German, 12 in, vibration) controlled by a single config flag file | Should |

### 5.2 Non-functional requirements

| ID | Requirement | Target |
|---|---|---|
| NFR-01 | LCP (mobile, p75) | ≤ 2.5 s |
| NFR-02 | INP | ≤ 200 ms |
| NFR-03 | CLS | ≤ 0.1 |
| NFR-04 | Accessibility | WCAG 2.2 AA where practical and testable |
| NFR-05 | Content renders without client-side JS (static HTML) | Required |
| NFR-06 | HTTPS only; staging `noindex` | Required |
| NFR-07 | Browser support: current and previous major Chrome, Safari (iOS), Samsung Internet, Edge, Firefox | Required |
| NFR-08 | No horizontal scroll ≥ 320 px | Required |
| NFR-09 | Third-party scripts minimal (none by default) | Required |
| NFR-10 | Zero broken internal links/anchors | Required |

---

## 6. Sitemap and URL Strategy

### 6.1 Page and counterpart matrix (PROPOSED)

All URLs use a **trailing slash** and the apex host `https://solb.site` (PENDING VALIDATION: apex vs `www`).

| Page | Arabic URL (primary) | English URL |
|---|---|---|
| Home | `/` | `/en/` |
| Concrete cutting | `/services/concrete-cutting/` | `/en/services/concrete-cutting/` |
| Core drilling | `/services/core-drilling/` | `/en/services/core-drilling/` |
| Concrete openings | `/services/concrete-openings/` | `/en/services/concrete-openings/` |
| Demolition & repair | `/services/demolition-repair/` | `/en/services/demolition-repair/` |
| Contact | `/contact/` | `/en/contact/` |
| Privacy (conditional, C-07) | `/privacy/` | `/en/privacy/` |

### 6.2 URL rules

- English slugs are used in both languages (stable, predictable, avoids percent-encoded Arabic URLs). PROPOSED.
- Trailing slash everywhere (`trailingSlash: true`) so the exported file layout is `folder/index.html` and URLs match canonicals.
- No automatic language redirect by browser language or IP (harms crawling and user control).
- No `/ar/` prefix; Arabic owns the root.
- `x-default` points to the Arabic home `/` (PROPOSED; client may prefer otherwise).
- Do not use query-string or hash-only variants for indexable content.
- The brief's anchors (`#services`, `#gallery`, etc.) become **sections within pages**, not separate navigation targets, except in-page jump links where useful.

---

## 7. User Journeys and Conversion Strategy

### 7.1 Principle

One dominant goal: **a phone call**. WhatsApp supports users who want to send photos. Nothing else competes for attention.

### 7.2 Journeys

| # | Persona | Entry | Path | Conversion |
|---|---|---|---|---|
| J1 | Homeowner needing a door opening | Search "فتح باب في جدار خرساني" | `/services/concrete-openings/` → CTA | Call or WhatsApp with wall photo |
| J2 | Plumber/owner needing a drain hole | Search "تخريم الكور بالرياض" | `/services/core-drilling/` → CTA | Call |
| J3 | Contractor, English-reading site staff | Search "Concrete Cutting Riyadh" | `/en/services/concrete-cutting/` → CTA | WhatsApp or call |
| J4 | Unsure visitor | Home | Services overview → relevant service → CTA | Call/WhatsApp |
| J5 | Arabic visitor landing on English page | Any `/en/` URL | Language switch → exact Arabic counterpart | Continues |

### 7.3 CTA hierarchy

| Rank | CTA | Style | Placement |
|---|---|---|---|
| 1 | Call (`tel:`) | Solid Engineering Yellow, Graphite text, phone icon | Header, hero, each service card, page-end CTA band, footer, mobile bar |
| 2 | WhatsApp | Outline or Steel Blue fill, icon | Hero, page-end CTA band, footer, mobile bar |
| 3 | Language switch | Text link | Header, footer |

Rules: no form, popup, or chatbot; button copy states the action; both CTAs visible above the fold at 360×640; no response-time, price, or availability promises.

---

## 8. Page-by-Page Specifications

### 8.1 Shared layout (all pages)

- **Header:** logo, nav (Services dropdown or direct links, Contact), language switch, Call button. Collapses to accessible menu on mobile.
- **Mobile contact bar:** fixed bottom; Call + WhatsApp; ≥ 48×48 px targets; `env(safe-area-inset-bottom)`; appears once hero CTAs scroll out of view; must not cover footer, focus targets, or consent controls.
- **Page-end CTA band:** Graphite panel with both CTAs and the "what to send" hint (job type, rough size/diameter, location in Riyadh, photo).
- **Footer:** brand, phone, WhatsApp, "Serving Riyadh, Saudi Arabia", service links, language link, privacy link (if applicable). No hours, no address.
- **Breadcrumbs** on service and contact pages (visible + `BreadcrumbList` JSON-LD).

### 8.2 Page matrix

| Page | Purpose | Primary intent | Key sections | Primary CTA |
|---|---|---|---|---|
| Home | Orient; route to the right service | Umbrella: concrete cutting & core drilling in Riyadh | Hero (photo + H1 + CTAs) · 4 service cards · Why SOLB (approved points only) · Gallery (3–6 photos, captioned) · Service area · CTA band | Call |
| Concrete cutting | Wall/slab cutting | Cut reinforced concrete walls, ceilings, slabs | Intro · what is included · typical uses · how to start · photo · FAQ · related services · CTA | Call |
| Core drilling | Cylindrical holes | Holes for plumbing, electrical, drainage, A/C | Same pattern; 12-inch line `[GATED]` | Call |
| Concrete openings | Door/window/HVAC/elevator/stair openings | Open a doorway or window in a concrete wall | Same pattern | Call |
| Demolition & repair | Removal, repair, debris | Break and remove concrete sections; repair | Same pattern | Call |
| Contact | Final conversion | Contact SOLB | Two large buttons · "what to send" · service area · no hours/address | Call |

### 8.3 Content rules per service page

- One H1, 3–5 H2s, H3s only where needed; roughly 350–600 words of useful prose per service page (PROPOSED guideline, not a keyword-density target).
- Name concrete jobs («فتحة باب»، «تخريم لمواسير الصرف»).
- Distinct page content: do not reuse paragraphs across service pages.
- 3–5 FAQs per page; every answer either confirmed or marked `[DRAFT — needs technical approval]`.
- Link to the other three services and to contact in context.
- Photo(s) with captions saying exactly what they show.

---

## 9. Arabic and English Content Specifications

### 9.1 Arabic (primary)

- Modern Standard Arabic, plain Saudi-friendly vocabulary; no heavy dialect; no superlatives («الأفضل»، «رقم 1»).
- Preserve client terms: «قص الخرسانة»، «تخريم الكور». «المنشار الليزر» is **not used** until validated.
- Brand appears as **صلب | SOLB**.
- Line-height ≈ 1.7; no letter-spacing on Arabic; mirrored directional icons.
- Phone in `<bdi dir="ltr">+966 55 612 3725</bdi>`.
- Arabic is written first; English is a full-equivalence adaptation (same facts, same certainty), not word-for-word.

### 9.2 English

- Natural technical English. Terms: *concrete cutting*, *core drilling*, *openings*, *demolition and repair*, *debris removal*. "Wall saw cutting" only after the client approves the equipment term.
- Never "laser saw". Always "Riyadh, Saudi Arabia".
- Same contact details and CTA hierarchy.

### 9.3 CTA labels

| | Arabic | English |
|---|---|---|
| Call | اتصل الآن | Call now |
| WhatsApp | واتساب | WhatsApp |
| Quote | اطلب عرض سعر | Get a quote |
| Contact | تواصل معنا | Contact us |
| Service card | اسأل عن هذه الخدمة | Ask about this service |

### 9.4 Gated claims

| Claim | Gate | Default behavior |
|---|---|---|
| German equipment | F-20 | Not shown |
| "Up to 12 inches" | F-19 | Not shown; FAQ answer says diameter depends on the job |
| «المنشار الليزر» | F-21 | Not shown |
| Vibration/structural wording | F-22 | Not shown. Draft for approval: «قص دقيق بمعدات حديثة تهدف إلى تقليل الاهتزاز غير الضروري وتأثيره على المنشأ المحيط.» / "Precision cutting with modern equipment, aimed at reducing unnecessary vibration and impact on the surrounding structure." |
| Absolute claims ("zero vibration", "100% safe", "no cracks") | Prohibited | Never |

---

## 10. Draft Copy (Homepage, Four Service Pages, Contact — Arabic and English)

> **All copy below is PROPOSED draft language.** Lines tagged `[GATED]` must stay hidden until the matching fact is approved in writing. Lines tagged `[DRAFT — needs technical approval]` are plausible general statements the client must confirm. No prices, hours, addresses, guarantees, turnaround times, or statistics appear anywhere.
> Copy is stored in per-language content files (§16) so wording can change without touching components.

### 10.1 Homepage

**Arabic — `/`**

- **H1:** قص وتخريم الخرسانة بالرياض
- **Intro:** قص جدران وأسقف خرسانية، وفتحات للأبواب والنوافذ والتكييف، وتخريم كور للسباكة والكهرباء والصرف.
- **CTAs:** اتصل الآن · واتساب
- **Tagline (PROPOSED):** قص دقيق. تخريم احترافي. تنفيذ بثقة.
- **H2 — خدماتنا:** أربع خدمات، اختر ما يناسب عملك:
  - **قص الخرسانة** — جدران وأسقف وبلاطات خرسانية مسلحة. ← `/services/concrete-cutting/`
  - **تخريم الكور** — فتحات دائرية للسباكة والكهرباء والصرف والتكييف. ← `/services/core-drilling/`
  - **فتحات الخرسانة** — أبواب ونوافذ وتكييف وتهوية ومصاعد وسلالم. ← `/services/concrete-openings/`
  - **الهدم والترميم** — كسر وإزالة أجزاء خرسانية، وترميم، وإزالة المخلفات. ← `/services/demolition-repair/`
- **H2 — لماذا صلب؟** `[DRAFT — wording approval needed]`
  - نركّز على القص الدقيق.
  - نعمل بمعدات حديثة.
  - تواصل مباشر للاستفسار وطلب عرض السعر.
  - `[GATED]` معدات ألمانية · `[GATED]` عبارة تقليل الاهتزاز (§9.4)
- **H2 — المعرض:** صور لمعدات صلب. *(Captions state exactly what is shown; equipment photos are never labeled "completed project".)*
- **H2 — منطقة الخدمة:** نخدم مدينة الرياض.
- **CTA band:** أرسل لنا نوع العمل والمقاس التقريبي وموقعك في الرياض وصورة للجدار أو السقف. · اتصل لطلب عرض سعر · واتساب

**English — `/en/`**

- **H1:** Concrete Cutting & Core Drilling in Riyadh
- **Intro:** Wall and slab cutting, openings for doors, windows and HVAC, and core drilling for plumbing, electrical and drainage.
- **CTAs:** Call now · WhatsApp
- **Tagline (PROPOSED):** Precision Cutting. Professional Coring. Built on Confidence.
- **H2 — Our services:** Four services — pick the one that matches your job:
  - **Concrete cutting** — reinforced concrete walls, ceilings and slabs.
  - **Core drilling** — round holes for plumbing, electrical, drainage and HVAC.
  - **Concrete openings** — doors, windows, A/C, ventilation, elevators and stairs.
  - **Demolition & repair** — breaking and removing concrete sections, repair, debris removal.
- **H2 — Why SOLB** `[DRAFT — wording approval needed]`
  - A focus on precise cutting.
  - Modern equipment.
  - Direct contact for enquiries and quotations.
  - `[GATED]` German equipment · `[GATED]` vibration wording
- **H2 — Gallery:** Photos of SOLB equipment.
- **H2 — Service area:** We serve Riyadh, Saudi Arabia.
- **CTA band:** Send us the job type, rough size, your location in Riyadh, and a photo of the wall or slab. · Call for a quote · WhatsApp

### 10.2 Concrete Cutting

**Arabic — `/services/concrete-cutting/`**

- **H1:** قص الجدران والأسقف والبلاطات الخرسانية في الرياض
- **Intro:** نقدّم قص الخرسانة المسلحة في الجدران والأسقف والبلاطات بمعدات قص مخصصة للخرسانة، لتنفيذ فتحات وتعديلات في مواضع محددة من المبنى.
- **H2 — ماذا نقص؟** جدران خرسانية مسلحة · أسقف خرسانية · بلاطات وأجزاء من الأرضيات.
- **H2 — أعمال شائعة:** فتحة لباب أو نافذة · فتحة تكييف أو تهوية · إزالة جزء من بلاطة لتمرير سلم أو مصعد.
- **H2 — كيف تبدأ؟** اتصل أو أرسل لنا عبر واتساب صورة للجدار أو السقف، مع نوع العمل والمقاس التقريبي وموقعك في الرياض.
- **FAQ**
  1. *هل تقصون الخرسانة المسلحة؟* نعم، قص الجدران والأسقف الخرسانية المسلحة من خدماتنا. للتأكد من إمكانية التنفيذ في حالتك، أرسل لنا تفاصيل العمل وصورة للموقع.
  2. *ما الفرق بين القص والتخريم؟* القص يُستخدم لعمل فتحات أكبر مثل الأبواب والنوافذ، أما التخريم فيعمل فتحات دائرية للمواسير والتمديدات. `[DRAFT — needs technical approval]`
  3. *هل تعرضون الأسعار على الموقع؟* لا، لأن التكلفة تعتمد على تفاصيل العمل. اتصل بنا أو راسلنا على واتساب لطلب عرض سعر.

**English — `/en/services/concrete-cutting/`**

- **H1:** Concrete Wall, Ceiling and Slab Cutting in Riyadh
- **Intro:** We cut reinforced concrete walls, ceilings and slabs using equipment made for concrete, to create openings and modifications at specific points in a building.
- **H2 — What we cut:** Reinforced concrete walls · concrete ceilings · slabs and sections of floors.
- **H2 — Common jobs:** An opening for a door or window · an A/C or ventilation opening · removing part of a slab for a staircase or elevator.
- **H2 — How to start:** Call or send a photo of the wall or slab on WhatsApp, with the job type, rough size and your location in Riyadh.
- **FAQ**
  1. *Do you cut reinforced concrete?* Yes — cutting reinforced concrete walls and ceilings is part of our service. To confirm your case, send the job details and a photo of the site.
  2. *What is the difference between cutting and core drilling?* Cutting is used for larger openings such as doors and windows; core drilling makes round holes for pipes and installations. `[DRAFT — needs technical approval]`
  3. *Do you list prices on the website?* No, because the cost depends on the job. Call or message us on WhatsApp for a quote.

### 10.3 Core Drilling

**Arabic — `/services/core-drilling/`**

- **H1:** تخريم الكور في الخرسانة بالرياض
- **Intro:** نعمل فتحات دائرية في الخرسانة لتمرير مواسير السباكة والصرف والتمديدات الكهربائية وتركيبات التكييف والتهوية.
- **H2 — أعمال تخريم الكور:** مواسير الصرف والسباكة · تمديدات كهربائية · تركيبات التكييف والتهوية.
- **H2 — قطر التخريم:** يختلف القطر حسب العمل. أرسل لنا القطر المطلوب وموقع التخريم لنؤكد لك إن كان ممكنًا. `[GATED]` *"حتى 12 بوصة" — يُضاف بعد التحقق الفني.*
- **H2 — كيف تبدأ؟** اتصل أو أرسل عبر واتساب صورة للموقع مع القطر التقريبي وعدد الفتحات وموقعك في الرياض.
- **FAQ**
  1. *ما أقطار التخريم المتاحة؟* تختلف حسب العمل؛ أرسل القطر المطلوب وسنوضح لك ما يمكن تنفيذه. `[GATED: add stated maximum after verification]`
  2. *هل يمكن التخريم في الأرضيات والأسقف والجدران؟* `[DRAFT — needs technical approval]` نعم في الأنواع الخرسانية المعتادة، وتفاصيل كل حالة تُراجَع حسب الموقع.
  3. *متى أختار التخريم بدل القص؟* إذا كنت تحتاج فتحة دائرية لماسورة أو تمديد، فالتخريم هو الأنسب؛ وللفتحات الأكبر مثل الأبواب يُستخدم القص.

**English — `/en/services/core-drilling/`**

- **H1:** Concrete Core Drilling in Riyadh
- **Intro:** We make round holes in concrete for plumbing and drainage pipes, electrical runs, and A/C and ventilation installations.
- **H2 — Core drilling jobs:** Drainage and plumbing pipes · electrical runs · A/C and ventilation installations.
- **H2 — Hole diameter:** The diameter depends on the job. Send the diameter you need and the drilling location, and we will confirm whether it is possible. `[GATED]` *"Up to 12 inches" — add only after technical verification.*
- **H2 — How to start:** Call or send a photo of the site on WhatsApp with the approximate diameter, number of holes and your location in Riyadh.
- **FAQ**
  1. *What drilling diameters are available?* They vary by job; send the diameter you need and we will tell you what can be done. `[GATED: add stated maximum after verification]`
  2. *Can you drill in floors, ceilings and walls?* `[DRAFT — needs technical approval]` Yes, in typical concrete elements; each case is reviewed by location.
  3. *When should I choose core drilling over cutting?* For a round hole for a pipe or installation, core drilling fits; for larger openings such as doorways, cutting is used.

### 10.4 Concrete Openings

**Arabic — `/services/concrete-openings/`**

- **H1:** فتح أبواب ونوافذ وفتحات في الجدران الخرسانية بالرياض
- **Intro:** نفتح فتحات في الجدران والأسقف الخرسانية للأبواب والنوافذ والتكييف والتهوية، وفتحات المصاعد والسلالم، باستخدام معدات القص.
- **H2 — أنواع الفتحات:** أبواب · نوافذ · تكييف وتهوية · مصاعد وسلالم.
- **H2 — قبل أن تتصل:** حدّد مكان الفتحة ومقاسها التقريبي، وصوّر الجدار من الجهتين إن أمكن.
- **FAQ**
  1. *هل يمكن فتح باب في جدار خرساني؟* نعم، فتح الأبواب باستخدام معدات القص من خدماتنا. وإذا كان الجدار جزءًا من هيكل المبنى فينبغي مراجعة مهندس إنشائي قبل التنفيذ. `[DRAFT — needs technical approval]`
  2. *ما الذي أرسله لتقدير العمل؟* صورة للجدار، ومكان الفتحة، والمقاس التقريبي، وموقعك في الرياض.
  3. *هل تشمل الخدمة الترميم بعد الفتح؟* ترميم المباني ضمن خدماتنا؛ اسألنا عن نطاق ما تحتاجه. `[DRAFT — needs technical approval]`

**English — `/en/services/concrete-openings/`**

- **H1:** Door, Window and Other Openings in Concrete Walls, Riyadh
- **Intro:** We form openings in concrete walls and ceilings for doors, windows, A/C and ventilation, and for elevators and stairs, using cutting equipment.
- **H2 — Types of openings:** Doors · windows · A/C and ventilation · elevators and stairs.
- **H2 — Before you call:** Decide where the opening goes and its rough size, and photograph the wall from both sides if you can.
- **FAQ**
  1. *Can you open a doorway in a concrete wall?* Yes — opening doorways with cutting equipment is part of our service. If the wall is part of the building's structure, a structural engineer should be consulted before work begins. `[DRAFT — needs technical approval]`
  2. *What should I send for an estimate?* A photo of the wall, where the opening goes, the rough size, and your location in Riyadh.
  3. *Does the service include repair after the opening?* Building repair is part of our services; ask us about the scope you need. `[DRAFT — needs technical approval]`

### 10.5 Demolition & Repair

**Arabic — `/services/demolition-repair/`**

- **H1:** هدم وإزالة أجزاء خرسانية وترميم المباني بالرياض
- **Intro:** نكسر ونزيل أجزاء من الأرضيات والجدران والأسقف الخرسانية، ونفتح المداخل بمعدات القص، وننفذ أعمال الترميم وإزالة المخلفات.
- **H2 — ما نقدّمه:** كسر وإزالة أجزاء خرسانية · فتح مداخل · ترميم المباني · إزالة مخلفات البناء.
- **H2 — كيف تبدأ؟** صف لنا الجزء المطلوب إزالته أو ترميمه وأرسل صورة له مع موقعك في الرياض.
- **FAQ**
  1. *هل تزيلون المخلفات؟* نعم، إزالة مخلفات البناء من خدماتنا.
  2. *هل تهدمون مبنى كاملًا؟* خدماتنا تتركز على كسر وإزالة أجزاء محددة من الأرضيات والجدران والأسقف. للأعمال الأكبر، اتصل بنا لمناقشتها.
  3. *ما نطاق الترميم؟* `[DRAFT — needs technical approval]` يختلف حسب العمل؛ أرسل صورة وتفاصيل وسنوضح ما يمكن تنفيذه.

**English — `/en/services/demolition-repair/`**

- **H1:** Concrete Demolition, Removal and Building Repair in Riyadh
- **Intro:** We break and remove sections of concrete floors, walls and ceilings, open doorways with cutting equipment, and carry out building repair and debris removal.
- **H2 — What we offer:** Breaking and removing concrete sections · opening doorways · building repair and restoration · construction debris removal.
- **H2 — How to start:** Describe the section to be removed or repaired and send a photo with your location in Riyadh.
- **FAQ**
  1. *Do you remove the debris?* Yes — removal of construction debris is part of our service.
  2. *Do you demolish entire buildings?* Our services focus on breaking and removing specific sections of floors, walls and ceilings. For larger work, call us to discuss it.
  3. *What does the repair scope cover?* `[DRAFT — needs technical approval]` It varies by job; send a photo and details and we will tell you what can be done.

### 10.6 Contact

**Arabic — `/contact/`**

- **H1:** تواصل مع صلب لقص وتخريم الخرسانة بالرياض
- **Intro:** اتصل بنا أو راسلنا على واتساب. صف العمل المطلوب وأرسل صورة، وسنرد عليك.
- **Buttons:** اتصل الآن — `+966 55 612 3725` · واتساب
- **H2 — ماذا ترسل؟** نوع العمل (قص، تخريم، فتحة، إزالة) · المقاس أو القطر التقريبي · موقعك في الرياض · صورة للجدار أو السقف.
- **H2 — منطقة الخدمة:** نخدم مدينة الرياض فقط.
- **FAQ:** *هل تخدمون خارج الرياض؟* نخدم مدينة الرياض. · *هل توجد أسعار على الموقع؟* لا؛ التكلفة تعتمد على العمل، فاتصل لطلب عرض سعر.

> "وسنرد عليك" is a soft statement, not a response-time promise. `[DRAFT — client to confirm they are comfortable with it]`. If not, use «تواصل معنا وصف لنا العمل».

**English — `/en/contact/`**

- **H1:** Contact SOLB for Concrete Cutting and Core Drilling in Riyadh
- **Intro:** Call us or message us on WhatsApp. Describe the job, send a photo, and we will get back to you. `[DRAFT — client to confirm]`
- **Buttons:** Call now — `+966 55 612 3725` · WhatsApp
- **H2 — What to send:** Job type (cutting, drilling, opening, removal) · rough size or diameter · your location in Riyadh · a photo of the wall or slab.
- **H2 — Service area:** We serve Riyadh only.
- **FAQ:** *Do you serve areas outside Riyadh?* We serve the city of Riyadh. · *Are prices listed on the site?* No; the cost depends on the job, so call for a quote.

---

## 11. SEO Keyword Map

> **Every keyword below is a research hypothesis. No search volume, difficulty, competitor ranking, or opportunity has been validated.** Validation status for all rows: **PENDING VALIDATION**.

### 11.1 Validation methods (free only)

1. **Manual SERP review** (Google, Saudi Arabia, Riyadh location, mobile and desktop): who ranks, which page types, whether results are services, directories, or classified ads, and which sub-intents appear in "People also ask" and related searches. Record notes in a spreadsheet; do not infer volume from them.
2. **Google Trends:** compare relative interest between Arabic variants (e.g. «قص» vs «تخريم» wording); relative only.
3. **Google autocomplete / related searches** for phrasing variants.
4. **Google Search Console** after launch: real queries, impressions, clicks (the only first-party data available to this project).
5. Client input: which words customers actually use on calls.

### 11.2 Arabic keyword map

| # | Candidate keyword | Target page | Intent hypothesis | Validation method | Status | Proposed title (≈ ≤ 60 chars) | Proposed H1 |
|---|---|---|---|---|---|---|---|
| A1 | قص الخرسانة بالرياض | `/services/concrete-cutting/` | Commercial: hire a concrete-cutting service | SERP review; Trends; GSC | PENDING VALIDATION | قص الخرسانة بالرياض \| صلب | قص الجدران والأسقف والبلاطات الخرسانية في الرياض |
| A2 | قص الجدران الخرسانية بالرياض | `/services/concrete-cutting/` | Commercial, wall-specific | SERP review; GSC | PENDING VALIDATION | (same page — secondary term) | (same) |
| A3 | قص الأسقف والبلاطات الخرسانية | `/services/concrete-cutting/` | Commercial, slab-specific | SERP review; GSC | PENDING VALIDATION | (same page — secondary term) | (same) |
| A4 | تخريم الكور بالرياض | `/services/core-drilling/` | Commercial: core drilling | SERP review; Trends; GSC | PENDING VALIDATION | تخريم الكور بالرياض \| صلب | تخريم الكور في الخرسانة بالرياض |
| A5 | تخريم الخرسانة بالرياض | `/services/core-drilling/` | Commercial; may overlap A4 and cutting | SERP review to check whether it merges with A4 | PENDING VALIDATION | (same page — secondary term) | (same) |
| A6 | فتح باب في جدار خرساني | `/services/concrete-openings/` | Informational + commercial ("how/who") | SERP review; "People also ask"; GSC | PENDING VALIDATION | فتح باب في جدار خرساني بالرياض \| صلب | فتح أبواب ونوافذ وفتحات في الجدران الخرسانية بالرياض |
| A7 | إزالة أجزاء خرسانية بالرياض | `/services/demolition-repair/` | Commercial: removal/breaking | SERP review; GSC | PENDING VALIDATION | إزالة أجزاء خرسانية بالرياض \| صلب | هدم وإزالة أجزاء خرسانية وترميم المباني بالرياض |
| A8 | قص وتخريم الخرسانة بالرياض | `/` | Umbrella / brand-adjacent | SERP review; GSC | PENDING VALIDATION | صلب \| قص وتخريم الخرسانة بالرياض | قص وتخريم الخرسانة بالرياض |
| A9 | صلب قص الخرسانة (brand + contact, navigational) | `/contact/` | Navigational | GSC | PENDING VALIDATION | تواصل مع صلب \| قص وتخريم الخرسانة بالرياض | تواصل مع صلب لقص وتخريم الخرسانة بالرياض |

### 11.3 English keyword map

| # | Candidate keyword | Target page | Intent hypothesis | Validation method | Status | Proposed title (≈ ≤ 60 chars) | Proposed H1 |
|---|---|---|---|---|---|---|---|
| E1 | Concrete Cutting Riyadh | `/en/services/concrete-cutting/` | Commercial | SERP review; Trends; GSC | PENDING VALIDATION | Concrete Cutting in Riyadh \| SOLB | Concrete Wall, Ceiling and Slab Cutting in Riyadh |
| E2 | Concrete Wall Cutting Riyadh | `/en/services/concrete-cutting/` | Commercial, wall-specific | SERP review; GSC | PENDING VALIDATION | (secondary term) | (same) |
| E3 | Concrete Slab Cutting Riyadh | `/en/services/concrete-cutting/` | Commercial, slab-specific | SERP review; GSC | PENDING VALIDATION | (secondary term) | (same) |
| E4 | Concrete Core Drilling Riyadh | `/en/services/core-drilling/` | Commercial | SERP review; Trends; GSC | PENDING VALIDATION | Concrete Core Drilling in Riyadh \| SOLB | Concrete Core Drilling in Riyadh |
| E5 | Concrete Openings Riyadh | `/en/services/concrete-openings/` | Commercial; wording may be non-standard | SERP review — check whether "door opening in concrete wall" phrasing is more natural | PENDING VALIDATION | Concrete Openings in Riyadh \| SOLB | Door, Window and Other Openings in Concrete Walls, Riyadh |
| E6 | Concrete demolition / removal Riyadh (not in the supplied list; candidate to test) | `/en/services/demolition-repair/` | Commercial | SERP review | PENDING VALIDATION | Concrete Demolition & Repair in Riyadh \| SOLB | Concrete Demolition, Removal and Building Repair in Riyadh |
| E7 | Concrete cutting & core drilling Riyadh | `/en/` | Umbrella | SERP review; GSC | PENDING VALIDATION | SOLB \| Concrete Cutting & Core Drilling in Riyadh | Concrete Cutting & Core Drilling in Riyadh |
| E8 | Contact SOLB | `/en/contact/` | Navigational | GSC | PENDING VALIDATION | Contact SOLB \| Concrete Cutting in Riyadh | Contact SOLB for Concrete Cutting and Core Drilling in Riyadh |

### 11.4 Mapping rules

- **One primary intent per page.** Secondary terms (A2, A3, A5, E2, E3) are covered in headings and body text naturally; they do not get their own pages.
- If SERP review shows A5 («تخريم الخرسانة») and A1 («قص الخرسانة») share the same intent, keep both mapped as they are and avoid creating a new page.
- Titles and H1s above are starting points and may change after SERP review. They must stay truthful and not stuff keywords.
- Titles and meta descriptions must be unique per page and per language.

### 11.5 Meta description drafts (PROPOSED, ≈ ≤ 155 chars)

| Page | Arabic | English |
|---|---|---|
| Home | قص جدران وأسقف خرسانية وتخريم كور للسباكة والكهرباء والتكييف في الرياض. اتصل أو راسلنا على واتساب. | Concrete wall and slab cutting and core drilling in Riyadh. Call or message us on WhatsApp. |
| Cutting | قص الجدران والأسقف والبلاطات الخرسانية المسلحة في الرياض. اتصل أو أرسل صورة للموقع على واتساب. | Reinforced concrete wall, ceiling and slab cutting in Riyadh. Call or send a site photo on WhatsApp. |
| Core drilling | تخريم كور في الخرسانة للصرف والسباكة والكهرباء والتكييف في الرياض. اتصل أو راسلنا على واتساب. | Concrete core drilling for drainage, plumbing, electrical and A/C in Riyadh. Call or message us on WhatsApp. |
| Openings | فتح أبواب ونوافذ وفتحات تكييف وتهوية في الجدران الخرسانية بالرياض. أرسل صورة الجدار واتصل بنا. | Door, window, A/C and ventilation openings in concrete walls in Riyadh. Send a wall photo or call us. |
| Demolition & repair | كسر وإزالة أجزاء خرسانية وترميم وإزالة مخلفات البناء في الرياض. اتصل أو راسلنا على واتساب. | Breaking and removing concrete sections, building repair and debris removal in Riyadh. Call or message us. |
| Contact | اتصل بصلب أو راسلنا على واتساب لقص وتخريم الخرسانة في الرياض. أرسل نوع العمل وصورة للموقع. | Call SOLB or message us on WhatsApp for concrete cutting and core drilling in Riyadh. Send the job type and a photo. |

---

## 12. SEO Implementation Requirements

### 12.1 Page metadata

| Element | Requirement |
|---|---|
| `<title>` | Unique per page and language; from §11; brand `SOLB` / `صلب` at the end |
| Meta description | Unique per page and language; from §11.5 |
| `<html lang dir>` | `ar`/`rtl` on Arabic pages; `en`/`ltr` on English pages |
| Canonical | Self-referencing absolute URL with trailing slash |
| `hreflang` | Reciprocal alternates on every page: `ar-SA`, `en`, `x-default` (→ Arabic) |
| Open Graph / Twitter | `og:title`, `og:description`, `og:url`, `og:locale` (`ar_SA` / `en_US`), `og:image` (a real, owned image only) |
| Robots | `index, follow` in production; `noindex, nofollow` on staging |
| Viewport | `width=device-width, initial-scale=1` |

**Central page registry (single source for URLs, canonicals, hreflang, sitemap, language switch):**

```ts
// src/config/pages.ts
export const SITE_URL = "https://solb.site"; // PENDING VALIDATION: apex vs www

export const PAGES = {
  home:      { ar: "/",                              en: "/en/" },
  cutting:   { ar: "/services/concrete-cutting/",    en: "/en/services/concrete-cutting/" },
  drilling:  { ar: "/services/core-drilling/",       en: "/en/services/core-drilling/" },
  openings:  { ar: "/services/concrete-openings/",   en: "/en/services/concrete-openings/" },
  demolition:{ ar: "/services/demolition-repair/",   en: "/en/services/demolition-repair/" },
  contact:   { ar: "/contact/",                      en: "/en/contact/" },
} as const;

export type PageKey = keyof typeof PAGES;
export type Lang = "ar" | "en";
```

**Metadata helper (static-export compatible — no runtime data):**

```ts
// src/lib/seo.ts
import type { Metadata } from "next";
import { PAGES, SITE_URL, type Lang, type PageKey } from "@/config/pages";

const IS_STAGING = process.env.NEXT_PUBLIC_ENV === "staging";

export function buildMetadata(opts: {
  lang: Lang; page: PageKey; title: string; description: string; ogImage?: string;
}): Metadata {
  const { lang, page, title, description, ogImage } = opts;
  const p = PAGES[page];
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: p[lang],
      languages: { "ar-SA": p.ar, en: p.en, "x-default": p.ar },
    },
    openGraph: {
      title, description, url: p[lang], siteName: "SOLB | صلب",
      locale: lang === "ar" ? "ar_SA" : "en_US",
      type: "website",
      ...(ogImage ? { images: [{ url: ogImage }] } : {}), // only a real, owned image
    },
    robots: IS_STAGING ? { index: false, follow: false } : { index: true, follow: true },
  };
}
```

### 12.2 `sitemap.xml` and `robots.txt`

Both are generated at build time and must be forced static:

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { PAGES, SITE_URL } from "@/config/pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = (k: keyof typeof PAGES) => ({
    languages: {
      "ar-SA": SITE_URL + PAGES[k].ar,
      en: SITE_URL + PAGES[k].en,
      "x-default": SITE_URL + PAGES[k].ar,
    },
  });
  return (Object.keys(PAGES) as (keyof typeof PAGES)[]).flatMap((k) => [
    { url: SITE_URL + PAGES[k].ar, alternates: alternates(k) },
    { url: SITE_URL + PAGES[k].en, alternates: alternates(k) },
  ]); // no fabricated lastModified / priority values
}
```

```ts
// src/app/robots.ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/pages";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (process.env.NEXT_PUBLIC_ENV === "staging") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${SITE_URL}/sitemap.xml` };
}
```

- Verify that `out/sitemap.xml` and `out/robots.txt` exist after build and contain exactly the expected URLs (including `xhtml:link` alternates).
- Staging must use password protection or an unguessable host **in addition to** `noindex` (robots disallow alone does not remove indexed URLs).
- Submit `https://solb.site/sitemap.xml` in Search Console after launch.

### 12.3 Structured data (minimal, only where facts qualify)

| Page | Types | Notes |
|---|---|---|
| All | `Organization` (name `SOLB`, alternateName `صلب`, url, `telephone` `+966556123725`, `areaServed` Riyadh) | `logo` added **only** once the final logo exists at a real URL |
| Service pages | `Service` (serviceType, provider → Organization, areaServed Riyadh) | Description must match visible copy |
| Service + contact | `BreadcrumbList` | Must match visible breadcrumbs |

- **Do not publish** `LocalBusiness` with an invented address, geo-coordinates, hours, ratings, or reviews. No `AggregateRating`, `Review`, or `openingHours`.
- `FAQPage` markup is **not planned**: FAQ rich results have been restricted by Google in recent years (PENDING VALIDATION against current Google documentation); the visible FAQ remains useful to users regardless.
- Validate with Google's Rich Results Test and the Schema.org validator. Valid markup does not guarantee any rich result.

```tsx
// src/components/JsonLd.tsx
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
```

### 12.4 Internal linking

| From | To |
|---|---|
| Home | All four services (cards) and Contact |
| Each service page | The other three services (contextual "related" block) and Contact |
| Header and footer (all pages) | Services, Contact, language counterpart |
| Breadcrumbs | Home → current page |
| Language switch | The **exact** counterpart from `PAGES`, with `hreflang` and `lang` attributes on the link |

Rules: descriptive anchor text (no "click here"); no orphan pages; no links to unbuilt pages; no mixed trailing-slash forms.

### 12.5 Image SEO

- Descriptive, ASCII, lowercase file names (§15); descriptive alt text in the **page language**; decorative images `alt=""`.
- Explicit `width`/`height`; modern formats with fallback; captions on gallery images.
- No text baked into images that carries essential meaning.
- Open Graph image: a real owned image or the new logo — never a watermarked or third-party image.

### 12.6 What this plan does not claim

No ranking, traffic, or timeline guarantees. Indexing is up to Google. Success is evaluated from Search Console data after launch (§22).

---

## 13. Brand Identity and Logo Design Brief

**Status:** no logo exists. A new logo is CONFIRMED as required. The concept below is PROPOSED.

| Item | Brief |
|---|---|
| Deliverable | Logo system for **صلب | SOLB** |
| Wordmarks | Arabic **صلب** and Latin **SOLB**, visually balanced; Arabic must not look like a translation afterthought |
| Symbol (optional, PROPOSED) | A simple geometric mark inspired by precise cutting, e.g. a core-drill circle intersected by a straight cut line, or a concrete section. Must read at 16 px. |
| Personality | Technical, precise, solid, practical; not corporate-grand, not decorative |
| Avoid | Gradients, clip-art blades/drills, hard hats, 3D effects, implying a large company or certifications |
| Colors | Palette in §14.1; must work in one color |
| Lockups | Horizontal and stacked; Arabic-first and English-first variants |
| Versions | Light-background, dark-background, one-color (black and white) |
| Sizes | Favicon 16/32, Apple touch 180, PWA/OG square 512; SVG master |
| Clear space / minimum size | Defined in a one-page usage note |
| Files | `logo-solb-horizontal.svg`, `logo-solb-stacked.svg`, `logo-solb-mono.svg`, `favicon.svg`, plus PNG exports |
| Approval | Client approves the logo before header, OG image, and JSON-LD `logo` are finalized |

**Tagline use (PROPOSED):** may appear beneath the logo in the footer or hero eyebrow; it is not a performance claim and is optional until explicitly approved.

**Photography direction:** real equipment and real work; consistent crop ratios; no stock imagery as SOLB work.

---

## 14. Design System

### 14.1 Colors (CONFIRMED palette; roles PROPOSED)

| Token | Hex | Role |
|---|---|---|
| `graphite` | `#202830` | Header, footer, dark sections, strong text on light backgrounds |
| `yellow` | `#F2BE3D` | Primary CTA fill and selective accents |
| `offwhite` | `#F5F6F4` | Content backgrounds |
| `steel` | `#354A59` | Secondary surfaces, secondary button fill, supporting details |

**Contrast rules (verify with a contrast checker in QA; do not assume):**

- Graphite text on yellow buttons ✔ intended. White text on yellow ✘.
- Yellow **text** on Off-white ✘. Yellow only as fill/accent against Graphite or Steel Blue.
- Off-white text on Graphite or Steel Blue — expected to pass; verify at every size used.
- Targets: ≥ 4.5:1 body text, ≥ 3:1 large text and UI component boundaries and focus indicators.
- Do not convey meaning by color alone.

```css
/* src/app/globals.css (Tailwind v4 CSS-first syntax; adapt if the project uses v3 config) */
@import "tailwindcss";

@theme {
  --color-graphite: #202830;
  --color-yellow:   #F2BE3D;
  --color-offwhite: #F5F6F4;
  --color-steel:    #354A59;
  --font-arabic: var(--font-plex-arabic), "Segoe UI", Tahoma, sans-serif;
  --font-latin:  var(--font-plex-sans), system-ui, sans-serif;
}
```

### 14.2 Typography (PROPOSED)

| Script | Font | Weights | Notes |
|---|---|---|---|
| Arabic | IBM Plex Sans Arabic (alternatives: Cairo, Tajawal) | 400, 700 | Line-height ≈ 1.7; no letter-spacing |
| Latin | IBM Plex Sans | 400, 700 | Line-height ≈ 1.5 |

- Self-host via `next/font/local` with downloaded font files committed to the repo (avoids a build-time network dependency and runtime requests to Google). Check the font license permits this. Alternatively `next/font/google` self-hosts at build time (PENDING VALIDATION that the build environment has network access).
- `font-display: swap`; preload only the primary weight; subset Arabic + Latin.
- Fluid scale (PROPOSED): body 16–18 px; H1 ≈ 30–44 px; H2 ≈ 24–32 px; H3 ≈ 20–24 px; verify Arabic headings do not clip.

### 14.3 Spacing, layout, responsive

- 4 px base unit; section padding ≈ 48 px mobile / 80 px desktop; content max-width ≈ 1200 px; reading width ≈ 65–75 characters.
- Breakpoints: mobile 320–599 (design baseline 360), tablet 600–1023, desktop ≥ 1024.
- **Use CSS logical properties / Tailwind logical utilities** (`ms-*`, `me-*`, `ps-*`, `pe-*`, `text-start`, `start-0`) instead of `left`/`right`, so a component works in RTL and LTR without forks.
- Mirror directional icons in RTL (`rtl:-scale-x-100`); do not mirror phone, WhatsApp, or logo.
- Phone number is always `<bdi dir="ltr">`.

### 14.4 Component specifications

| Component | Specification |
|---|---|
| `Header` | Graphite bg; logo; nav; `LangSwitch`; Call button. Mobile: logo + language switch + call icon-button + menu button. Height small enough not to crowd the hero. |
| `Button` | Variants: `primary` (yellow, Graphite text, phone icon), `secondary` (steel fill or outline, WhatsApp icon). Height ≥ 48 px, full-width on mobile. States: hover, `:focus-visible` (≥ 3:1 ring, visible on both Graphite and Off-white), active, disabled. |
| `ContactBar` | Fixed bottom on mobile/tablet; Call + WhatsApp; `env(safe-area-inset-bottom)`; ≥ 48×48 px targets; accessible names «اتصل بصلب» / "Call SOLB" and «راسلنا على واتساب» / "Message SOLB on WhatsApp". Page bottom padding prevents covering the footer. |
| `LangSwitch` | Text label (العربية / English), never flags only; `<a href hreflang lang>`. |
| `Hero` | H1, intro, both CTAs, one explicit-size photo (landscape + mobile crop), caption. No carousel. |
| `ServiceCard` | `<h3>`, 2–3 line text, optional photo, link to service page, compact contact row. |
| `WhyList` | 3–5 approved points; icons optional; no counters, badges, or statistics. |
| `Gallery` | 3–6 images (home), consistent ratio, captions; v1 has **no lightbox** (reduces JS and a11y risk). |
| `Faq` | Native `<details><summary>` (works without JS, keyboard accessible). |
| `CtaBand` | Graphite panel; "what to send" hint; both CTAs. |
| `Breadcrumbs` | `<nav aria-label>` + JSON-LD parity. |
| `Footer` | Brand, phone, WhatsApp, "Serving Riyadh", links, language link, privacy link (conditional). |
| `SkipLink` | First focusable element; targets `#main`. |
| `JsonLd` | §12.3 |

---

## 15. Image Inventory Requirements and Naming

### 15.1 Supplied photos — status for this plan

Photo numbers follow the brief's §17.1. Ownership is **PENDING VALIDATION** for all (conflict C-01).

| # | Subject | Planned use | Gate |
|---|---|---|---|
| 1 | Red core-drilling rig, pump, accessories, core bits | Core drilling page; gallery (caption: equipment) | Ownership statement |
| 2 | Orange core-drilling rig with accessories | Core drilling page; gallery (equipment) | Ownership statement; check visible brand marks |
| 3 | Wall-saw guide frame with large blade (low-res, supplier-style) | **Not used** | Original file + ownership |
| 4 | Track-mounted wall saw cutting a slab section — **watermarked** | **Blocked** | Written proof of ownership and a watermark-free original |
| 5 | Worker core-drilling a rectangular opening; face partly visible | Openings page (candidate) | Confirm it is a SOLB job; blur/crop or written consent |
| 6 | Track-mounted wall saw cutting a staircase section (low-res) | Cutting/openings (candidate) | Original, higher-resolution file |
| 7 | Core drill in a floor slab (screenshot-like) | Core drilling (candidate) | Original file |
| 8 | Rectangular wall opening from overlapping cores — **watermarked**, rough edge | **Blocked** | Ownership proof + original; do not imply a finish quality the client has not confirmed |
| 9 | Red track-mounted wall saw with digital controller (showroom) | Home hero candidate; cutting page | Ownership statement |

**Gaps:** no photograph exists for demolition/debris removal or a finished repair result. Request them from the client. Placeholder (until supplied): a text-only layout for that page — do **not** substitute stock images as SOLB work. If an illustrative image is ever used, label it "illustrative".

**Hero decision (PROPOSED):** photo 9 or 1/2 captioned as equipment (e.g. «منشار جداري على مسار مع شفرة ماسية» / "Track-mounted wall saw with a diamond blade"), pending ownership confirmation. Replace with a real job photo when provenance is cleared.

### 15.2 Technical requirements

| Item | Requirement |
|---|---|
| Source originals | Kept in `assets-src/` (not in `public/`, not deployed) |
| Output formats | AVIF + WebP + JPEG fallback (AVIF optional if build time suffers) |
| Widths | 480 / 768 / 1200 / 1600 px; `srcset` + `sizes` |
| Hero budget | ≈ 150–200 KB after optimization (brief §16, PROPOSED) |
| Dimensions | Explicit `width`/`height` to prevent CLS |
| Metadata | EXIF/GPS stripped before publishing |
| People | Faces blurred/cropped unless written consent exists |
| Watermarks | None permitted from third parties |

Because `images: { unoptimized: true }` is required for static export, optimization is done **before** build with a script (e.g. `sharp`) and the generated files are committed or produced in CI.

### 15.3 Naming convention

`solb-<subject>-<descriptor>-<nn>[-<width>].<ext>` — lowercase ASCII, hyphen-separated, no spaces.

Examples: `solb-core-drilling-rig-red-01-1200.webp`, `solb-wall-saw-track-red-01-1600.avif`.

Alt text, captions, and `status` (cleared / blocked) live in a typed `content/images.ts` registry with `ar` and `en` fields, so a blocked image cannot be rendered by accident (build fails if a page references an image whose status is not `cleared`).

**Alt-text drafts (PROPOSED):**

| Photo | Arabic | English |
|---|---|---|
| 1 | جهاز تخريم كور على حامل مع رؤوس تخريم ماسية | Core drilling rig on a stand with diamond core bits |
| 2 | جهاز تخريم كور برتقالي مع ملحقاته ورؤوس التخريم | Orange core drilling rig with accessories and core bits |
| 9 | منشار جداري على مسار مع شفرة ماسية كبيرة ووحدة تحكم | Track-mounted wall saw with a large diamond blade and control unit |

---

## 16. Next.js App Router Architecture (PROPOSED)

### 16.1 Constraints

Pure static output. **Do not use:** middleware, API routes with dynamic behavior, server actions, SSR/ISR, `cookies()`/`headers()`, default image optimizer, `redirects()`/`rewrites()`/`headers()` in `next.config` (these do not apply to a static export). Every dynamic segment (if any) needs `generateStaticParams`.

### 16.2 Language routing: two root layouts

Arabic must live at `/` (no prefix) and each language needs its own `<html lang dir>`. In the App Router this is done with **two route groups, each with its own root layout** and no top-level `app/layout.tsx`:

```text
solb-site/
├─ src/
│  ├─ app/
│  │  ├─ (ar)/
│  │  │  ├─ layout.tsx                  # <html lang="ar" dir="rtl">
│  │  │  ├─ page.tsx                    # /
│  │  │  ├─ services/
│  │  │  │  ├─ concrete-cutting/page.tsx
│  │  │  │  ├─ core-drilling/page.tsx
│  │  │  │  ├─ concrete-openings/page.tsx
│  │  │  │  └─ demolition-repair/page.tsx
│  │  │  └─ contact/page.tsx
│  │  ├─ (en)/
│  │  │  ├─ layout.tsx                  # <html lang="en" dir="ltr">
│  │  │  └─ en/
│  │  │     ├─ page.tsx                 # /en/
│  │  │     ├─ services/…(same four)
│  │  │     └─ contact/page.tsx
│  │  ├─ sitemap.ts
│  │  ├─ robots.ts
│  │  └─ globals.css
│  ├─ components/                       # §14.4 components (language-agnostic, content via props)
│  ├─ content/
│  │  ├─ types.ts                       # SiteContent interface
│  │  ├─ ar.ts                          # Arabic copy
│  │  ├─ en.ts                          # English copy (must satisfy same interface)
│  │  ├─ images.ts                      # image registry (alt AR/EN, status)
│  │  └─ claims.ts                      # gate flags (§9.4)
│  ├─ config/
│  │  ├─ site.ts                        # name, phone constants
│  │  └─ pages.ts                       # §12.1 registry
│  └─ lib/
│     ├─ contact.ts                     # tel/WhatsApp builders
│     ├─ seo.ts
│     └─ track.ts
├─ public/                              # optimized images, favicons, 404.html fallback, .htaccess
├─ assets-src/                          # original photos (not deployed)
├─ scripts/                             # optimize-images, check-links, verify-out
├─ next.config.ts
├─ package.json
└─ IMPLEMENTATION_PLAN.md
```

- Pages are Server Components that render fully to static HTML. Client Components are limited to the mobile menu toggle and the tracking listener.
- `content/ar.ts` and `content/en.ts` implement one `SiteContent` TypeScript interface so a missing translation is a **compile error** (Arabic/English parity).
- Switching languages is a full navigation between root layouts (expected, and acceptable for crawlable separate URLs).

**PENDING VALIDATION — spike in Phase 1:** with multiple root layouts and no top-level layout, confirm (a) `next build` succeeds with `output: 'export'`, (b) a usable `out/404.html` is produced (Next's `not-found` handling with multiple root layouts may require `global-not-found` support in the installed Next.js version; check the version's docs), (c) `sitemap.ts`/`robots.ts` are emitted. **Fallback:** a hand-authored bilingual `public/404.html` served via `ErrorDocument`. **If the spike fails more broadly,** record a decision: the alternative of a `/ar/` prefix conflicts with the confirmed Arabic-at-root URL scheme and requires client approval.

### 16.3 Example layout and page

```tsx
// src/app/(ar)/layout.tsx
import type { ReactNode } from "react";
import "../globals.css";
import { plexArabic } from "@/lib/fonts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactBar } from "@/components/ContactBar";
import { ar } from "@/content/ar";

export default function ArabicRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={plexArabic.variable}>
      <body className="bg-offwhite text-graphite font-arabic leading-[1.7]">
        <a href="#main" className="sr-only focus:not-sr-only">{ar.a11y.skip}</a>
        <Header lang="ar" content={ar} />
        <main id="main" className="pb-24 lg:pb-0">{children}</main>
        <Footer lang="ar" content={ar} />
        <ContactBar lang="ar" content={ar} />
      </body>
    </html>
  );
}
```

```tsx
// src/app/(ar)/services/core-drilling/page.tsx
import { buildMetadata } from "@/lib/seo";
import { ServicePage } from "@/components/ServicePage";
import { ar } from "@/content/ar";

export const metadata = buildMetadata({
  lang: "ar", page: "drilling",
  title: ar.pages.drilling.title,
  description: ar.pages.drilling.metaDescription,
});

export default function Page() {
  return <ServicePage lang="ar" page="drilling" content={ar.pages.drilling} />;
}
```

### 16.4 Dependencies (keep minimal)

`next`, `react`, `react-dom`, `typescript`, `tailwindcss` (+ its PostCSS/Vite plugin per version), `eslint` + `eslint-config-next`, `sharp` (dev, image pipeline). Icons as inline SVG components (no icon-library runtime). No UI framework, no animation library, no CMS client. Pin exact versions in the lockfile; commit the lockfile.

---

## 17. Static Export, Build, Deployment, and Hosting Validation

### 17.1 Configuration

```ts
// next.config.ts  (use next.config.mjs if the installed Next.js version lacks TS config support)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // generates ./out
  trailingSlash: true,       // /services/core-drilling/ -> out/services/core-drilling/index.html
  images: { unoptimized: true }, // required: no image optimizer in static export
  reactStrictMode: true,
};

export default nextConfig;
```

```jsonc
// package.json (scripts)
{
  "scripts": {
    "dev": "next dev",
    "img": "node scripts/optimize-images.mjs",
    "typecheck": "tsc --noEmit",
    "lint": "next lint",
    "build": "next build",
    "verify": "node scripts/verify-out.mjs",
    "check:links": "node scripts/check-links.mjs",
    "release": "npm run typecheck && npm run lint && npm run build && npm run verify && npm run check:links"
  }
}
```

`scripts/verify-out.mjs` (to be written in Phase 5) must fail the build if: any of the 12 expected `index.html` files is missing; any page lacks exactly one `<h1>`, a canonical, or reciprocal hreflang; the phone number differs from `+966 55 612 3725` / `+966556123725`; a gated phrase (e.g. "German", "ألماني", "12 inch", "12 بوصة", "laser", "ليزر") appears while its gate flag is off; `noindex` appears in a production build; or `out/` is missing `sitemap.xml`/`robots.txt`.

### 17.2 Build and deploy workflow (PROPOSED)

1. Develop locally; `npm run release` must pass.
2. Build with `NEXT_PUBLIC_ENV=staging` first → deploy to a protected staging location → full QA (§20).
3. Build production (`NEXT_PUBLIC_ENV=production`) from the **same commit**.
4. Inspect `out/` (file tree, sizes, `index.html` for every page).
5. Upload the **contents** of `out/` (not the folder itself) to the hosting document root (commonly `public_html/` — PENDING VALIDATION which directory serves `solb.site`), using the method the plan supports (hPanel File Manager, FTP/SFTP, or Git deployment — PENDING VALIDATION).
6. Upload `.htaccess` (§17.3) if supported.
7. Run the smoke tests in §17.4 against the live domain.
8. Tag the release in Git; keep the previous `out/` build archived for rollback.

No Node.js process is required or assumed on the host. Building happens on the developer's machine or CI.

### 17.3 Proposed `.htaccess` (only if the host honors it — PENDING VALIDATION)

```apache
# Force HTTPS (skip if the host/hPanel already enforces it, to avoid redirect loops)
RewriteEngine On
RewriteCond %{HTTPS} !=on
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Custom 404 (must return a real 404 status)
ErrorDocument 404 /404.html

Options -Indexes
AddDefaultCharset UTF-8

# Long cache for hashed build assets, short for HTML
<IfModule mod_headers.c>
  <FilesMatch "\.(js|css|woff2|avif|webp|jpg|png|svg)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\.html$">
    Header set Cache-Control "public, max-age=0, must-revalidate"
  </FilesMatch>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

Caution: `immutable` long caching suits fingerprinted files under `/_next/static/`; images in `public/` are not fingerprinted unless names include a content hash. Either hash image filenames or give `public/` images a shorter max-age.

### 17.4 Hosting validation checklist (run on the real host)

- [ ] `https://solb.site/` loads; certificate valid; HTTPS reported working is **verified**, not assumed.
- [ ] `http://` → `https://` redirect works (single hop, 301).
- [ ] Apex vs `www`: one canonical host; the other 301-redirects to it.
- [ ] **Every one of the 12 URLs loads when typed directly** (no reliance on client navigation), with trailing slash.
- [ ] The no-trailing-slash form (e.g. `/services/core-drilling`) redirects to the slash form with 301 and not 404 or duplicate content.
- [ ] `/_next/static/...` assets return 200 with correct MIME types.
- [ ] A nonexistent URL returns HTTP **404** (not 200 soft-404) and shows the custom 404 page.
- [ ] `/sitemap.xml` and `/robots.txt` return 200 with the right content and content types.
- [ ] `Content-Type` includes `charset=utf-8`; Arabic renders correctly.
- [ ] Gzip or Brotli compression is active for HTML/CSS/JS.
- [ ] Cache headers behave as intended after upload and after a redeploy (no stale HTML).
- [ ] URL case sensitivity behavior documented (Linux hosts are case-sensitive).
- [ ] `.htaccess` is honored (test with a harmless rule); if not, record the host-panel equivalent for HTTPS/404/caching.
- [ ] No directory listing; no exposed source maps, `.env`, or `assets-src/`.

---

## 18. Contact Links and Analytics

### 18.1 Contact helpers

```ts
// src/config/site.ts
export const PHONE_E164 = "+966556123725";
export const PHONE_DISPLAY = "+966 55 612 3725";
export const WA_NUMBER = "966556123725"; // wa.me requires digits only, no "+"
```

```ts
// src/lib/contact.ts
import { PHONE_E164, WA_NUMBER } from "@/config/site";
import type { Lang } from "@/config/pages";

export const telHref = `tel:${PHONE_E164}`;

const WA_TEXT: Record<Lang, string> = {
  ar: "السلام عليكم، أرغب بالاستفسار عن خدمة قص/تخريم الخرسانة في الرياض.",
  en: "Hello, I'd like to ask about concrete cutting/core drilling in Riyadh.",
};

export const waHref = (lang: Lang) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT[lang])}`;
```

```tsx
// src/components/ContactButtons.tsx (Server Component)
import { telHref, waHref } from "@/lib/contact";
import { PHONE_DISPLAY } from "@/config/site";
import type { Lang } from "@/config/pages";

type Where = "header" | "hero" | "service_card" | "cta_band" | "footer" | "contact_page" | "bar";

export function CallButton({ lang, where, label }: { lang: Lang; where: Where; label: string }) {
  return (
    <a href={telHref} data-track="phone_click" data-where={where} data-lang={lang}
       className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-yellow px-5 font-bold text-graphite focus-visible:outline-2 focus-visible:outline-offset-2">
      <span>{label}</span>
      <bdi dir="ltr" className="hidden lg:inline">{PHONE_DISPLAY}</bdi>
    </a>
  );
}

export function WhatsAppButton({ lang, where, label }: { lang: Lang; where: Where; label: string }) {
  return (
    <a href={waHref(lang)} target="_blank" rel="noopener noreferrer"
       data-track="whatsapp_click" data-where={where} data-lang={lang}
       className="inline-flex min-h-12 items-center justify-center rounded border-2 border-steel px-5 font-bold">
      {label}
    </a>
  );
}
```

Rules: the number lives in one file; `verify-out` checks every `tel:`/`wa.me` href; WhatsApp opens in a new tab with `rel="noopener noreferrer"`; desktop shows the number as text; the WhatsApp URL is verified on iOS, Android and WhatsApp Web before launch (PENDING VALIDATION).

### 18.2 Analytics recommendation (decision PENDING)

| Option | Description | Trade-off |
|---|---|---|
| **A (recommended minimum)** | No analytics tag at launch; Google Search Console only | Lowest privacy burden and best speed; no click measurement |
| **B** | GA4 via a single deferred `gtag` script with the three events below | Measures contact intent; needs privacy notice and a consent approach reviewed by a qualified professional |
| **C** | Google Ads call reporting / call tracking | Out of scope here (Ads is not primary); separate cost/privacy decision |

If B is chosen:

```ts
// src/lib/track.ts
declare global { interface Window { gtag?: (...a: unknown[]) => void } }

export function track(event: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined" || !window.gtag) return; // no tag/consent → no-op
  window.gtag("event", event, params);
}
```

```tsx
// src/components/TrackingListener.tsx
"use client";
import { useEffect } from "react";
import { track } from "@/lib/track";

export function TrackingListener() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (!el) return;
      track(el.dataset.track!, { cta_location: el.dataset.where ?? "", language: el.dataset.lang ?? "" });
    };
    document.addEventListener("click", onClick); // one delegated listener = no double counting
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
```

| Event | Trigger | Parameters |
|---|---|---|
| `phone_click` | Click on any `tel:` link | `cta_location`, `language` |
| `whatsapp_click` | Click on any WhatsApp link | same |
| `language_switch` | Click on `LangSwitch` | `from_language`, `to_language`, `cta_location` |

- These are **intent signals**. A `tel:` click does not prove a call was placed; a WhatsApp click does not prove a conversation.
- Never send user phone numbers, message text, or other personal data.
- Mark events as key events only after verifying them in the debugger on iOS Safari, Android Chrome, and desktop.
- Tracking is described as "active" only after the test in §20 passes.
- A privacy notice page (`/privacy/`, `/en/privacy/`, C-07) is required if any tag is deployed. Text and consent mechanics need legal review.

---

## 19. Accessibility, Performance, Security, Quality

### 19.1 Accessibility (target WCAG 2.2 AA where practical and testable)

- Landmarks (`header`, `nav`, `main`, `footer`), logical heading order, one `<h1>` per page, skip link.
- Full keyboard operation; visible focus (≥ 3:1) on Graphite and Off-white; no keyboard traps; menu closes with Esc and returns focus.
- Touch targets ≥ 44×44 px (≥ 48 px for primary CTAs).
- Accessible names for icon-only buttons, written in the page language.
- Correct `lang`/`dir`; bidi-isolated phone number; mirrored directional icons; Latin text inside Arabic isolated where needed.
- `prefers-reduced-motion` respected; minimal animation overall.
- Alt text in the page language; decorative images `alt=""`.
- Contrast verified with a checker (§14.1); no meaning by color alone.
- Test with a screen reader pass (VoiceOver iOS and TalkBack or NVDA) on home, one service page, and contact in both languages.

### 19.2 Performance

- LCP ≤ 2.5 s (mobile, p75), INP ≤ 200 ms, CLS ≤ 0.1 — measured with Lighthouse/PageSpeed Insights lab data pre-launch (a **proxy**) and Search Console/CrUX field data after launch, when enough traffic exists.
- Hero image preloaded, explicitly sized, ≤ ≈ 150–200 KB; other images lazy-loaded.
- Fonts: ≤ 2 weights per script, subset, `swap`, primary preloaded.
- No third-party scripts by default; JS limited to menu toggle and tracking listener.
- No layout shift from the contact bar, fonts, or images.

### 19.3 Security

- HTTPS only; HSTS **only after** every URL and subdomain is verified on HTTPS (PENDING).
- Response headers via `.htaccess` if supported (nosniff, referrer policy; frame protection; Permissions-Policy). A Content-Security-Policy only once the final set of scripts is known; start report-only if used.
- No secrets in the repo; no `.env` files deployed; `NEXT_PUBLIC_*` variables contain nothing sensitive.
- `npm audit` reviewed before release; lockfile committed; minimal dependencies.
- Staging protected by authentication, not only `noindex`.
- `target="_blank"` links use `rel="noopener noreferrer"`.
- Hostinger account: strong unique password + two-factor authentication; limit FTP accounts; document who has access.

### 19.4 Quality gates

- TypeScript strict mode, ESLint clean, `verify-out` and link check pass in `npm run release`.
- Content parity check: both languages implement the same `SiteContent` interface.
- Claims audit against §9.4 and the brief's claims policy (no prices, hours, addresses, reviews, ratings, certifications, guarantees, years, project counts, absolute claims, or "registered company" wording).

---

## 20. Testing Plan and Acceptance Criteria

### 20.1 Test matrix

| Area | Method | Devices / tools |
|---|---|---|
| Content accuracy | Manual claims audit against §3, §9.4, and the brief's claims policy | Reviewer + client sign-off |
| Contact links | Tap/click every `tel:` and WhatsApp link | iPhone Safari, Android Chrome, desktop + WhatsApp Web |
| Static output | `verify-out`, link check, file-tree review | CLI |
| SEO | View source, Rich Results Test, Schema validator, hreflang reciprocity check, sitemap check | Browser, Google tools |
| Responsive | 320, 360, 768, 1024, 1440 px; both languages | Browser dev tools + real phones |
| RTL/LTR | Visual check of mirrored layout, icons, bidi phone number | Both languages |
| Accessibility | Keyboard-only run, screen reader pass, automated scan (axe/Lighthouse) + contrast checker | Desktop + mobile |
| Performance | Lighthouse mobile + PageSpeed Insights on staging and production | Record LCP, INP (or TBT proxy), CLS |
| Browsers | Current and previous major Chrome, Safari (iOS), Samsung Internet, Edge, Firefox | Real devices / cloud |
| Hosting | §17.4 checklist on live host | Browser + `curl -I` |
| Tracking (if enabled) | Debugger/real-time view; verify one event per click | iOS, Android, desktop |

### 20.2 Acceptance criteria

**Content**
- [ ] Every claim is CONFIRMED or explicitly approved; all `[GATED]` and `[DRAFT]` tags resolved or removed from rendered output.
- [ ] No prices, hours, addresses, reviews, ratings, certifications, guarantees, years of experience, project counts, or absolute claims.
- [ ] The business is not described as a registered company.
- [ ] 12 pages exist; every Arabic page has an English counterpart with equivalent meaning and identical contact details.
- [ ] No stock image is presented as SOLB work; no blocked photo (4, 8, or any uncleared image) is rendered.

**Contact**
- [ ] The number is `+966 55 612 3725` / `+966556123725` everywhere.
- [ ] `tel:` opens the dialer on iOS and Android; WhatsApp opens the right chat on iOS, Android, and WhatsApp Web.
- [ ] Both CTAs are visible above the fold at 360×640 on home and every service page.
- [ ] The mobile contact bar does not cover content, the footer, or focusable elements.

**SEO**
- [ ] Unique title/meta per page; one H1 per page; logical H2/H3.
- [ ] Canonical and `hreflang` are reciprocal and correct on all 12 pages; `x-default` → Arabic home.
- [ ] `sitemap.xml` lists exactly the live URLs; `robots.txt` correct; staging is `noindex` and protected.
- [ ] Structured data validates and matches visible content; no invented address/hours/ratings.
- [ ] All images have alt text in the page language; no broken links or anchors.

**Performance, accessibility, technical**
- [ ] Mobile LCP ≤ 2.5 s, CLS ≤ 0.1, INP ≤ 200 ms (lab proxy recorded; field data reviewed after launch).
- [ ] No horizontal scroll at 320 px.
- [ ] Contrast meets 4.5:1 (body) / 3:1 (large text, UI boundaries, focus indicators).
- [ ] Full keyboard operation; visible focus; correct `lang`/`dir`; bidi-safe phone number; `prefers-reduced-motion` respected.
- [ ] Content is present in the raw HTML (view-source) with JavaScript disabled.

**Tracking (if enabled)**
- [ ] `phone_click`, `whatsapp_click`, `language_switch` fire once per interaction with correct parameters.
- [ ] No event fires on page load; no personal data is sent; results documented before tracking is called "active".

---

## 21. Deployment Checklist

**Before deploying**
- [ ] Phase 0 approvals recorded (§24).
- [ ] `npm run release` passes on the release commit.
- [ ] Staging QA complete and signed off.
- [ ] Production build uses `NEXT_PUBLIC_ENV=production`; no `noindex` in output.
- [ ] Previous deploy archived (rollback ready).

**Deploying**
- [ ] Upload the contents of `out/` to the correct document root.
- [ ] Upload `.htaccess` (if supported) and `404.html`.
- [ ] Purge any host/CDN cache.

**Immediately after**
- [ ] §17.4 hosting checks pass on the live domain.
- [ ] Real-device test of all contact links on the live site.
- [ ] Rich Results Test and hreflang check on live URLs.
- [ ] PageSpeed Insights on home and one service page (both languages).
- [ ] Verify the site in Google Search Console (DNS record, or HTML file/meta tag) and submit `sitemap.xml`.
- [ ] Request indexing via URL Inspection for the 12 pages (does not guarantee indexing).
- [ ] If analytics is enabled: verify events live; document results.
- [ ] Tag the release; record who holds hosting and Search Console access.

---

## 22. Post-Launch SEO Monitoring Plan

Data source: **Google Search Console** (first-party; the only query data available without paid tools). No ranking or traffic targets are set here because none exist in the sources.

| Cadence (PROPOSED) | Activity |
|---|---|
| Days 1–7 | Confirm pages are discovered/indexed (Pages report, URL Inspection); confirm sitemap processed; check for crawl errors, hreflang or canonical warnings, soft-404s |
| Weekly for the first month | Review Performance report: queries, pages, country, device; compare which pages receive impressions; note unexpected queries |
| Monthly | Compare queries against the §11 hypotheses; update validation status (CONFIRMED by data / not supported); review Core Web Vitals report once enough field data exists; recheck contact links and hosting |
| After ≥ several weeks of data | Revise titles/H1s/copy for pages with impressions but low CTR; add FAQ answers for real recurring questions; adjust page mapping if two pages compete for the same query |
| Quarterly | Re-run manual SERP review for core Arabic and English terms; review client feedback on the calls received |

**Rules**
- Report impressions, clicks, CTR, and average position as Search Console shows them — no extrapolation, no promised outcomes.
- Change one page's title/H1 at a time and log the date, so effects can be judged.
- Do not add new pages unless data and a distinct intent justify them (avoid near-duplicates, no pages outside Riyadh).
- Ask the client monthly (qualitatively) how callers say they found the business; this is the only source for offline conversion insight if call tracking is not used.
- Google Business Profile remains a separate decision, not assumed eligible.

---

## 23. Risks, Assumptions, Dependencies, Unresolved Questions

### 23.1 Risks

| ID | Risk | Impact | Mitigation |
|---|---|---|---|
| R-01 | Third-party/watermarked photos (4, 8) or unclear provenance (3, 6, 7) | Copyright, credibility | Written ownership proof; originals; registry blocks uncleared images |
| R-02 | Unverified claims (German, laser term, 12 in, vibration) | Misleading content, trust loss | Gate flags; `verify-out` scan; client written approval |
| R-03 | Shared hosting limits (`.htaccess`, headers, 404, deploy method) | Broken URLs, soft-404s | Phase 5 validation on the real host; documented fallbacks |
| R-04 | Multiple-root-layout 404 handling and static export edge cases | Missing 404 page | Phase 1 spike; hand-authored `404.html` fallback |
| R-05 | Thin/near-duplicate pages (esp. Contact; four similar service pages) | Weak SEO value | Distinct, specific copy per page; no extra pages |
| R-06 | Keyword hypotheses prove wrong or phrased differently by real users | Mis-targeted pages | SERP review before copy freeze; GSC revision loop |
| R-07 | Missed calls/messages after launch | Lost leads | Client call-handling plan; do not display hours until confirmed |
| R-08 | Contact links failing on some devices | Lost leads | Real-device testing before and after launch |
| R-09 | Privacy/consent non-compliance if tags are used | Legal exposure | Option A by default; legal review before any tag |
| R-10 | Identifiable people in photos without consent | Privacy | Blur/crop or written consent |
| R-11 | Low-resolution photos | Poor perceived quality | Request originals; use text-led layouts where needed |
| R-12 | Static export cannot do server features later (forms, CMS) | Future rework | Explicitly out of scope; revisit by decision |
| R-13 | Client expectation of rankings | Disappointment | State clearly: implementation ≠ outcome (§1.3) |

### 23.2 Assumptions (PROPOSED)

- Most traffic is mobile and Arabic-speaking.
- The client can answer calls/WhatsApp promptly during normal working times.
- Developer has a machine or CI able to run the Node.js build; the host does not need Node.js.
- The Hostinger plan allows uploading static files to the document root for `solb.site`.
- The mobile contact bar is **always visible on mobile/tablet** (works without JS). This deviates slightly from the brief's "visible once hero CTAs scroll out of view" wording (D-01); revisit if it feels redundant at the top of the page.

### 23.3 Dependencies

Client approvals and assets (§23.4) → copy freeze → design/build → staging QA → hosting validation → production deploy → Search Console verification. The logo gates the header, favicon, OG image, and JSON-LD `logo`.

### 23.4 Unresolved questions

| # | Question | Owner | Blocks |
|---|---|---|---|
| Q1 | Written ownership confirmation and originals for the photos, especially 3–8; consent for the identifiable worker (photo 5) | Client | Hero, galleries, service pages |
| Q2 | Is the multi-page structure approved to replace the brief's single-page structure? (C-02) | Client | Everything |
| Q3 | Is the German-equipment claim true and does it apply to all equipment? Manufacturer details? | Client | Why SOLB |
| Q4 | What is «المنشار الليزر» exactly? Approved Arabic and English equipment wording | Client | Cutting page copy |
| Q5 | Technical verification of the 12-inch maximum core diameter | Client / technical reviewer | Core drilling page |
| Q6 | Approved wording on vibration/structural impact | Client | Why SOLB, service pages |
| Q7 | Approve or revise the tagline | Client | Header/footer/hero |
| Q8 | Logo: approval of concept and final files | Client + designer | Branding |
| Q9 | Operating hours — display or omit? | Client | Footer (default: omit) |
| Q10 | Legal/registered name — any wording to show? | Client | Footer, privacy |
| Q11 | Confirm `solb.site` canonical host (apex vs `www`) and DNS/HTTPS state | Developer / client | Canonical, sitemap |
| Q12 | Hostinger plan capabilities: document root, `.htaccess`, deploy method, 404 handling | Developer | Phase 5 |
| Q13 | Analytics decision (Option A/B/C) and privacy notice; legal review | Client | Phase 6 |
| Q14 | Photos for demolition/debris removal and finished repair | Client | Demolition page |
| Q15 | Is "وسنرد عليك" / "we will get back to you" acceptable on the contact page? | Client | Contact copy |
| Q16 | Google Business Profile eligibility — pursue separately? | Client | Out of scope |
| Q17 | Client's own call-handling availability | Client | Launch readiness |

---

## 24. Implementation Phases

Priorities: **P1** = must, **P2** = should. Do not start a phase until its "approve before proceeding" items are signed off.

### Phase 0 — Validation of assets, claims, and hosting facts
- **Objective:** remove blocking unknowns.
- **Inputs:** this plan, brief, photos, client access.
- **Tasks:** (1) collect written photo ownership + originals; (2) resolve Q3–Q7; (3) confirm domain/DNS/HTTPS state and Hostinger capabilities (Q11, Q12); (4) run manual SERP review and fill the keyword sheet (§11.1); (5) decide analytics option (Q13).
- **Output:** signed-off facts register; cleared photo list; keyword sheet; hosting notes.
- **Acceptance:** every `PENDING VALIDATION` item needed for launch is CONFIRMED or explicitly kept hidden/gated.
- **Risks:** client delay on photos or claims.
- **Approve before proceeding:** Q1, Q2, gating decisions (P1).

### Phase 1 — Technical foundation and static-export spike
- **Objective:** prove the architecture before building pages.
- **Inputs:** Phase 0 hosting notes.
- **Tasks:** create the Next.js project (TS, Tailwind, ESLint); set `output: 'export'`, `trailingSlash`, `images.unoptimized`; implement two root layouts; add one test page per language; verify `out/` tree, `404.html`, `sitemap.ts`, `robots.ts`; upload to a staging location on Hostinger and test direct loads (§17.4).
- **Output:** working skeleton deployed to protected staging.
- **Acceptance:** both language roots build and load directly; 404 behaves; no server-only features used.
- **Risks:** R-03, R-04.
- **Approve before proceeding:** the 404 and layout approach (or the fallback decision).
- **Priority:** P1.

### Phase 2 — Brand and design system
- **Objective:** logo and reusable components.
- **Inputs:** §13, §14; Phase 0 tagline decision.
- **Tasks:** design logo system; set Tailwind tokens; fonts; build `Button`, `Header`, `LangSwitch`, `ContactBar`, `Footer`, `Faq`, `CtaBand`, `ServiceCard`, `Hero`, `Breadcrumbs`, `JsonLd`; contrast check; RTL/LTR visual check.
- **Output:** logo files; component library rendering in both directions.
- **Acceptance:** contrast and focus targets verified; components work with logical properties in RTL and LTR.
- **Risks:** logo approval delay (use a text wordmark placeholder, clearly temporary).
- **Approve before proceeding:** logo concept; palette use rules.
- **Priority:** P1.

### Phase 3 — Content and image pipeline
- **Objective:** final, approved bilingual copy and optimized cleared images.
- **Inputs:** §10, §11; Phase 0 results.
- **Tasks:** revise copy from SERP review; write `content/ar.ts` then `en.ts` against the shared interface; set gate flags; optimize cleared images; fill alt/captions; request missing photos.
- **Output:** content files; image registry; optimized images.
- **Acceptance:** parity compile check passes; claims audit clean; no blocked image reachable.
- **Risks:** R-01, R-02, R-11.
- **Approve before proceeding:** Arabic and English copy sign-off by the client.
- **Priority:** P1.

### Phase 4 — Page implementation (Arabic first, then English)
- **Objective:** build all 12 pages.
- **Inputs:** components, content, images.
- **Tasks:** home; four service pages; contact; breadcrumbs; internal links; language switch mapping via `PAGES`; contact buttons and mobile bar; custom 404 (both languages if supported).
- **Output:** complete staging site.
- **Acceptance:** all pages render statically; counterpart links correct; CTAs above the fold at 360×640.
- **Risks:** R-05 (thin content), copy overflow in Arabic headings.
- **Approve before proceeding:** staging review by client.
- **Priority:** P1.

### Phase 5 — Bilingual SEO and static-export hardening
- **Objective:** metadata, structured data, and build verification.
- **Inputs:** §12, §17.
- **Tasks:** `buildMetadata` on every page; canonical/hreflang; JSON-LD; sitemap/robots; OG image; write `verify-out` and `check:links`; configure `.htaccess` per host findings; staging protected + `noindex`.
- **Output:** `npm run release` green; SEO checklist ticked on staging.
- **Acceptance:** §20.2 SEO section passes.
- **Risks:** R-03; hreflang mistakes.
- **Approve before proceeding:** metadata wording.
- **Priority:** P1.

### Phase 6 — Analytics (conditional)
- **Objective:** implement the chosen option from Q13.
- **Tasks:** if A: nothing but Search Console prep; if B: add `gtag`, `TrackingListener`, privacy pages, consent approach per legal review; test events.
- **Output:** tracking verified or consciously omitted.
- **Acceptance:** §20.2 tracking section (if B).
- **Risks:** R-09.
- **Approve before proceeding:** privacy notice text.
- **Priority:** P2 (P1 if B is chosen and Ads will be used).

### Phase 7 — QA
- **Objective:** execute §20 fully.
- **Tasks:** device matrix; accessibility pass; performance runs; fix and retest; client acceptance walkthrough.
- **Output:** QA report with results recorded.
- **Acceptance:** all §20.2 boxes ticked, or each exception documented and accepted.
- **Risks:** late discoveries on Safari/Samsung Internet.
- **Approve before proceeding:** client go-live approval.
- **Priority:** P1.

### Phase 8 — Production deployment
- **Objective:** go live.
- **Tasks:** §21 checklist; Search Console verification; sitemap submission.
- **Output:** live site on `solb.site`.
- **Acceptance:** §17.4 and §21 complete.
- **Risks:** R-03, R-07.
- **Approve before proceeding:** client confirms call availability (Q17).
- **Priority:** P1.

### Phase 9 — Post-launch verification and monitoring
- **Objective:** run §22.
- **Tasks:** index checks; weekly then monthly reviews; log changes; propose evidence-based copy revisions.
- **Output:** monthly SEO notes; updated keyword status table.
- **Acceptance:** monitoring cadence followed; issues triaged.
- **Risks:** R-06, R-13.
- **Approve before proceeding:** any new page or major copy change.
- **Priority:** P2.

### Implementation tracking

| Phase | Depends on | Priority | Status |
|---|---|---|---|
| P0 Validation | — | P1 | Not started |
| P1 Foundation spike | P0 (hosting facts) | P1 | Not started |
| P2 Brand and design system | P0 (tagline), P1 | P1 | Not started |
| P3 Content and images | P0 | P1 | Not started |
| P4 Pages | P2, P3 | P1 | Not started |
| P5 SEO and export hardening | P4 | P1 | Not started |
| P6 Analytics | P5, Q13 | P2 | Not started |
| P7 QA | P5 (P6 if used) | P1 | Not started |
| P8 Deployment | P7 | P1 | Not started |
| P9 Monitoring | P8 | P2 | Not started |

---

## 25. Final Definition of Done

The project is **done** when all of the following are true:

- [ ] All 12 pages (6 Arabic, 6 English) are live at the URLs in §6 on `solb.site`, served over HTTPS, loading correctly when opened directly.
- [ ] Every published statement is CONFIRMED or explicitly approved by the client; nothing gated is visible.
- [ ] The final logo is approved and in place; no uncleared or third-party photo is used.
- [ ] Phone and WhatsApp links work on real iOS, Android, and desktop devices; the number is identical everywhere.
- [ ] Canonical, hreflang, sitemap, robots, and structured data are correct and validated; staging is not indexable.
- [ ] Core Web Vitals lab results meet the targets and the accessibility acceptance criteria pass.
- [ ] The hosting validation checklist and the deployment checklist are complete and recorded.
- [ ] Search Console is verified, the sitemap is submitted, and the monitoring plan has an owner.
- [ ] Analytics is either verified (and the privacy notice is published) or deliberately not deployed.
- [ ] Open questions in §23.4 are closed or recorded as accepted exclusions.
- [ ] The client has signed off in writing.

*Achieving rankings, traffic, or lead volume is not part of the Definition of Done; those outcomes depend on factors outside the implementation.*

---

## Appendix A — Plan Audit Notes

Checks applied to this document before delivery:

| Check | Result |
|---|---|
| URL consistency | The same 6+6 URLs, trailing-slash form, and apex host are used in §6, §10, §11, §12, §17, §20 |
| Arabic/English counterparts | Every page in §10 and §11 has both versions; `PAGES` registry drives the language switch |
| Source conflicts | Eight recorded in §3.2 (C-01 to C-08), plus deviation D-01 (§23.2) |
| Static-hosting compatibility | No middleware, API routes, SSR/ISR, server actions, or `next.config` redirects/headers are relied on; host-dependent items are marked PENDING VALIDATION |
| Unsupported claims | None published as fact; German, 12 in, laser term, and vibration wording are gated |
| SEO overclaims | No volumes, difficulty, rankings, or timelines; FAQPage/rich-result guarantees avoided; keywords marked PENDING VALIDATION |
| Items beyond the supplied sources | Keyword E6 (demolition, English), `/privacy/` pages (conditional), the `verify-out` script, and the monitoring cadence are PROPOSED additions and labeled as such |
| Items that must be re-checked against the installed versions | Next.js `global-not-found`/404 behavior, TypeScript config file support, Tailwind v3 vs v4 syntax, and Google's current FAQ rich-result policy |
