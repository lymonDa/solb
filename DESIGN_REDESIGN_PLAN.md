# SOLB — Design Redesign Plan & Visual Audit

This plan establishes the design diagnosis, art direction, and architectural execution strategy for the comprehensive visual and frontend upgrade of the SOLB (صلب) website.

---

## 1. Audit of the Current Design & Key Deficiencies

| Area | Current Implementation Flaw | Root Cause | Planned Redesign Upgrade |
|---|---|---|---|
| **Art Direction & Brand Identity** | Generic dark template aesthetic with muddy, low-contrast backgrounds across every single section. | Absence of tonal contrast; all sections blur together into dark graphite. | Introduce the approved **Industrial Modernism / Tonal Stacking** system: dramatic alternating section contrast (Dark Graphite Hero → Crisp Off-White Services → Deep Graphite Engineering Standards → Dark Canvas Workflow → Dark Gallery → Crisp Off-White FAQ → Contained Heavy-Duty CTA). |
| **Hero Section** | Standard 2-column flexbox with generic image container; lacks tactical field authority. | Image is a plain rectangle; lacks industrial context and technical metadata. | Implement the approved Stitch Hero: rich background radial grid watermark, live operational badge (`معدات قص وتخريم ماسية متطورة / الرياض وضواحيها`), prominent dual CTAs, three trust metrics with icons (`مناشير مسار هيدروليكية`, `أقطار 1" حتى 16"`, `قص مستوٍ خالي من الاهتزاز`), and a framed machinery showcase with live HUD tags and base technical spec card (`المعدات المعتمدة ميدانياً`). |
| **Service Cards** | Dark low-contrast cards with generic bullet points and generic link arrows. | Follows standard SaaS card pattern instead of industrial catalog style. | Redesign into **Architectural Modular Panels**: crisp pure-white surface on off-white canvas, technical index tags (`01 // قص جداري`, `02 // كور ألماسي`, `03 // فتحات هندسية`, `04 // إزالة ورفع`), bold typography, concise descriptions, and bottom technical spec bar with depth/diameter parameters. |
| **Section Architecture & Contrast Rhythm** | Monotonous dark tones (`bg-graphite` everywhere); text contrast feels tired; eyes have no resting focal plane. | Lack of intentional light/dark section rhythm. | Implement strict alternating sections conforming to `DESIGN.md`: Light sections use Off-White `#F5F6F4` with Graphite `#202830` typography, dark sections use `#202830` with `#F5F6F4` text and Steel Blue `#354A59` panels. |
| **Why SOLB (Engineering Standards)** | 4 plain dark cards with basic numbering. | Lacks visual weight and industrial precision. | Upgrade to 4 heavy-duty engineering pillars with oversized monospace counters (`01`, `02`, `03`, `04`), crisp 1px borders, and tactile yellow mechanical accent rules. |
| **Work Process / Execution** | Only 3 generic steps with no site-safety or structural integrity reassurance. | Incomplete process communication. | Expand to 4 field-tested steps (1. إرسال التفاصيل, 2. المعاينة وتحديد المعدة, 3. تحديد السعر والموعد, 4. التنفيذ الميداني الدقيق highlighted in Engineering Yellow) plus the dedicated structural safety guarantee banner. |
| **Equipment Gallery** | Standard 3-column card grid with repetitive appearance. | Static cards without clear photo metadata. | Upgrade to high-craft gallery cards with authentic business photography, tactical corner tags (`المعدات الميدانية`, `إزالة وتنزيل`, `مسار مائل`, `تخريم أرضيات`), and localized metadata rules. |
| **FAQ Section** | Buried in dark background, low readability. | Lack of visual focus and clear collapsible states. | Place on crisp Off-White `#F5F6F4` canvas with Pure White `#FFFFFF` accordion panels, crisp chevron transitions, and category icon badges. |
| **Service Detail Pages** | Repetitive cookie-cutter layout across all 4 services. | Identical component sequence for every service. | Provide tailored visual identities per service: **Concrete Cutting** (horizontal cutting tracks, wall saw geometry), **Core Drilling** (circular drilling geometry, diameter matrix), **Concrete Openings** (architectural portal framing), and **Removal & Repair** (structural rigging & separation). |
| **Mobile UX & Navigation** | Desktop elements shrunk down; header can feel tight; sticky contact needs strict hit zones. | Responsive shrinkage instead of touch-first adaptation. | Implement touch-first navigation drawer with 48px hit targets, prominent direct phone button, and persistent bottom dual-action bar (`Call Now` in Engineering Yellow + `WhatsApp` in Steel Blue) protected by `safe-area-inset-bottom`. |
| **Bilingual RTL / LTR Polish** | Occasional misalignment with phone numbers, arrows, and punctuation. | Missing directional isolation. | Wrap all phone numbers, metrics, and technical dimensions in `<bdi dir="ltr">`; mirror all chevrons and directional icons for RTL. |

---

## 2. Art Direction & Design Tokens

### Brand Palette (Strictly Enforced)
- **Graphite (`#202830`)**: Bedrock subterranean dark surface for Hero, Why SOLB, Gallery, and Footer.
- **Engineering Yellow (`#F2BE3D`)**: High-visibility tactical action color reserved for primary phone calls, active state highlights, and metric rules. Never use white text on yellow; strictly `#202830` text on yellow.
- **Off-White (`#F5F6F4`)**: High-clarity reading canvas for Services and FAQ sections, providing dramatic light/dark rhythm.
- **Steel Blue (`#354A59`)**: Structural steel tone for secondary buttons (WhatsApp), container borders, and structural cards.
- **Pure White (`#FFFFFF`)**: High-contrast card surfaces within Off-White sections.

### Geometry & Shape Semantics
- Strict **4px (`0.25rem`)** corner radius for interactive buttons, badges, chips, and inputs.
- Maximum **8px (`0.5rem`)** corner radius for heavy panels and cards (`rounded-lg`).
- Prohibit pill shapes, rounded-3xl bubbles, and floaty glassmorphism.
- 1px crisp borders: `#354A59` on dark planes, `rgba(32,40,48,0.12)` on light planes.

### Typography Hierarchy
- **Arabic Display & Body**: `IBM Plex Sans Arabic`, `Cairo`, sans-serif. Line-height 1.6–1.7, tracking 0.
- **English Display**: `Manrope`, sans-serif. Tracking -0.01em to -0.02em.
- **English Body**: `Inter`, sans-serif. Line-height 1.5–1.6.
- **Monospace Metrics**: Monospace numerals for `01`, `02`, `03` indices, phone numbers, and diameter specs.

---

## 3. Implementation Phasing & Execution Order

1. **Step 1: Global CSS & Design Tokens (`src/app/globals.css`)**
   - Configure Tailwind v4 `@theme` with exact palette tokens, font families, custom scrollbar styling, and accordion animations.
2. **Step 2: Navigation & Header (`src/components/Header.tsx`)**
   - High-contrast industrial header with clear brand mark, tactical location badge (`مدينة الرياض | ميداني 24/7`), clean language switch, and prominent phone button.
   - Touch-first responsive mobile menu with backdrop scrim and full-width actions.
3. **Step 3: Homepage Redesign (`src/components/Hero.tsx`, `ServiceCard.tsx`, `WhySolb.tsx`, `Workflow.tsx`, `EquipmentGallery.tsx`, `FaqAccordion.tsx`, `CtaBand.tsx`, `Footer.tsx`)**
   - Execute the Stitch-aligned industrial layout with alternating section contrast.
   - Refactor `src/app/(ar)/page.tsx` and `src/app/(en)/page.tsx` to mount the redesigned sections.
4. **Step 4: Service Detail Pages Redesign (`src/components/ServicePage.tsx`)**
   - Inject service-specific visual treatments, custom parameter callouts, technical parameter tables (e.g. drilling diameters, cutting depths), and distinct imagery.
5. **Step 5: Contact Page Redesign (`src/components/ContactPage.tsx`)**
   - High-contrast direct-access layout, field readiness indicators, zero unnecessary fluff.
6. **Step 6: Mobile Persistent Bar (`src/components/ContactBar.tsx`)**
   - Ensure rock-solid 48px hit targets, safe-area padding, and crystal-clear icons.
7. **Step 7: Verification, Lint, Build & Static Export (`npm run release`)**
   - Verify TypeScript compilation, zero lint errors, successful static export into `out/`, internal links integrity, and `hreflang` / SEO consistency.
