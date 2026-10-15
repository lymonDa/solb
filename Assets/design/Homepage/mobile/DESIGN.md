---
name: Industrial Structural Precision
colors:
  surface: '#111413'
  surface-dim: '#111413'
  surface-bright: '#373a39'
  surface-container-lowest: '#0c0f0e'
  surface-container-low: '#191c1b'
  surface-container: '#1d201f'
  surface-container-high: '#282a2a'
  surface-container-highest: '#333534'
  on-surface: '#e2e3e1'
  on-surface-variant: '#c3c7cc'
  inverse-surface: '#e2e3e1'
  inverse-on-surface: '#2e3130'
  outline: '#8d9196'
  outline-variant: '#43474b'
  surface-tint: '#b3c9dc'
  primary: '#b3c9dc'
  on-primary: '#1d3341'
  primary-container: '#354a59'
  on-primary-container: '#a3b9cb'
  inverse-primary: '#4c6171'
  secondary: '#f3bf3e'
  on-secondary: '#3f2e00'
  secondary-container: '#bd8f00'
  on-secondary-container: '#3d2c00'
  tertiary: '#bfc7d2'
  on-tertiary: '#293139'
  tertiary-container: '#404851'
  on-tertiary-container: '#aeb7c1'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#cfe5f8'
  primary-fixed-dim: '#b3c9dc'
  on-primary-fixed: '#061e2b'
  on-primary-fixed-variant: '#344958'
  secondary-fixed: '#ffdf9c'
  secondary-fixed-dim: '#f3bf3e'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#dbe3ee'
  tertiary-fixed-dim: '#bfc7d2'
  on-tertiary-fixed: '#141c24'
  on-tertiary-fixed-variant: '#3f4850'
  background: '#111413'
  on-background: '#e2e3e1'
  surface-variant: '#333534'
  graphite: '#202830'
  engineering-yellow: '#F2BE3D'
  steel-blue: '#354A59'
  off-white: '#F5F6F4'
  pure-white: '#FFFFFF'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0em
  headline-md-mobile:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0em
  title-md:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

### Vision & Personality
The design system manifests an unapologetic, heavy-duty industrial aesthetic tailored for specialized diamond core drilling, concrete cutting, and structural civil engineering consultancy. Built on the principles of mechanical integrity, architectural authority, and operational reliability, the experience prioritizes instantaneous clarity and utilitarian efficiency. It discards decorative fluff, soft gradients, and arbitrary ornamentation in favor of sharp tectonic planes, disciplined grid structures, and tactical high-visibility focal points.

### Tone & Values
- **Structural Integrity:** Heavyweight panels, decisive borders, and unwavering stability across every interaction.
- **Consultative Precision:** Crisp data presentation, clear technical parameters, and rigorous bidirectional alignment.
- **Tactical Utility:** Instant path-to-action driven by high-contrast operational colors and purpose-built touchpoints.

### Aesthetic Movement
Rooted in **Industrial Modernism** and technical architectural drafting, the UI is constructed through dense surfaces of Steel Blue and Graphite, punctuated with tactical Engineering Yellow actions. It leverages razor-sharp geometric typography with strict 4px-grid alignments to mirror physical engineering blueprints and heavy field equipment.

## Colors

### Color Roles & Hierarchy
- **Primary (`#354A59` - Steel Blue):** Represents foundational structural steel, architectural containment planes, borders, and secondary communication buttons.
- **Secondary (`#F2BE3D` - Engineering Yellow):** Tactical conversion color reserved strictly for high-priority interactive calls to action, phone triggers, and urgent operational indicators.
- **Tertiary (`#202830` - Graphite):** The deep bedrock tone serving as primary dark background planes, heavy headers, footers, and contrast text across bright surfaces.
- **Neutral (`#F5F6F4` - Off-White):** High-clarity reading canvas and primary text color on dark structural panels.
- **Named Color (`#FFFFFF` - Pure White):** Absolute high-contrast container surfaces and stark emphasis markers.

### Contrast & Accessibility Rules
- **Tactical Action Contrast:** Elements filled with Engineering Yellow (`#F2BE3D`) must strictly utilize Graphite (`#202830`) for typography and iconography. Off-white or Pure White text on Engineering Yellow is fundamentally prohibited.
- **Text on Light Surfaces:** Yellow typography is barred on Off-white (`#F5F6F4`) surfaces due to insufficient visual distinction; dark Graphite (`#202830`) must be used for body text.
- **Dark Mode Surfaces:** In this primary dark experience, secondary data panels leverage Steel Blue (`#354A59`) with Off-white text (`#F5F6F4`), guaranteeing a minimum contrast ratio of 4.5:1.

## Typography

### Typographic Rationale
The pairing of **Manrope** and **Inter** grounds the UI in geometric clarity and industrial exactitude. Manrope delivers a structured, heavy-chiseled presence suited for architectural headers, metric specifications, and structural categories. Inter provides neutral, highly optimized geometric legibility for dense technical descriptions, spec sheets, and high-density bilingual layouts.

### Bidirectional & Arabic Rules
- In bilingual RTL contexts where Arabic typefaces run concurrently, retain consistent weight balance (Medium/Bold for titles, Regular for body).
- Arabic typography requires a line-height multiplier of ~1.7 to accommodate expansive vertical metrics and avoid glyph collision.
- Letter-spacing (tracking) must strictly remain `0` on Arabic scripts, while Latin headlines apply modest negative tracking (`-0.01em` to `-0.02em`) for punchy density.
- Phone numbers, dimension metrics (e.g., mm, Ø, cm), and technical units must always be wrapped with bidirectional isolation (`<bdi dir="ltr">`) to protect syntactic formatting inside RTL frames.

## Layout & Spacing

### Layout Architecture
The layout uses a 12-column disciplined grid system bound by an absolute maximum container width of `1200px`. Spacing intervals follow a mathematical 4px rhythm, creating an architectural cadence of structured divisions.

### Responsive Breakpoints & Sizing
- **Mobile (`320px – 599px`):** Single-column layout. Margin is locked to `1.5rem` (`margin`), section vertical padding to `3rem` (`48px`). The viewport must provide complete visibility of the core title and primary CTAs within the initial 640px height fold. Bottom padding requires an offset of `6rem` (`96px`) to ensure the fixed bottom contact utility never obscures body copy.
- **Tablet (`600px – 1023px`):** 6-column grid structure with `1.5rem` gutters. Balanced module placement for dual-column spec grids.
- **Desktop (`≥ 1024px`):** Full 12-column architectural matrix with `1.5rem` (`24px`) gutters and section vertical padding of `5rem` (`80px`). Bottom navigation offsets collapse to `0` as sticky controls relocate to header and fixed utility sidebands.
- **Directional Alignment:** Layouts enforce standard logical properties (`margin-inline-start`, `padding-inline-end`) ensuring seamless bidirectional layout symmetry across LTR and RTL scripts without structural hacks.

## Elevation & Depth

### Depth Model
The design system rejects ambient blur-heavy drop shadows, skeuomorphic surface depth, and translucent glassmorphism. Visual layering is constructed through **Tonal Structural Stacking** and **High-Contrast Solid Boundaries**:

1. **Sub-base Canvas (Ground Zero):** Pure Graphite (`#202830`) establishing the deep, technical subterranean environment.
2. **Structural Enclosures (Level 1):** Solid Steel Blue (`#354A59`) or darkened panels bound by crisp, architectural 1px borders in `rgba(245, 246, 244, 0.14)` or solid `#354A59`.
3. **High-Contrast Content Planes (Level 2):** Stark Off-white (`#F5F6F4`) or Pure White (`#FFFFFF`) surfaces placed directly adjacent to or over dark sections to force immediate focus.
4. **Tactical Action Planes (Level 3):** High-visibility Engineering Yellow (`#F2BE3D`) controls elevated purely through chromatic energy and tactile 1px dark perimeter framing.

### Focus & System Overlays
- **Focus Rings:** Razor-sharp `2px` solid outline with `2px` offset (`outline-offset: 2px`). Color dynamically targets `#F2BE3D` against dark planes and `#202830` against light surfaces, strictly adhering to ≥ 3:1 non-text contrast rules.
- **Modal Depth:** Lightboxes and technical drawings display over a dense 92% opaque Graphite (`#202830`) scrim without decorative background blur.

## Shapes

### Shape Semantics
Conforming to a strict roundedness index of `1`, all foundational interactive items, data containers, and form elements carry a tight `0.25rem` (`4px`) radius. Bubble aesthetics, organic contours, and pill-shaped caps are strictly forbidden.

- **Standard Elements (Buttons, Inputs, Badges, Tabs):** `0.25rem` (`4px`) radius. Reinforces the impression of machined steel and concrete structural units.
- **Panels & Heavy Cards:** `0.5rem` (`8px`) maximum corner radius (`rounded-lg`), delivering structural solidity while eliminating sharp, hazardous edges.
- **Dividers & Metric Rules:** Strictly `1px` or `2px` square-ended mechanical lines.

## Components

### Buttons
- **Primary Tactical Action (Direct Phone Call):**
  - Background: Engineering Yellow (`#F2BE3D`).
  - Text & Icon: Graphite (`#202830`), `label-md` weight (Bold).
  - Geometry: Minimum height `48px`, horizontal padding `1.25rem` (`20px`), border radius `4px`.
  - Hover: Darkens to `#DBA82E`; active presses drop `1px` vertically with zero elevation bounce.
- **Secondary Structural Action (WhatsApp / Technical Spec):**
  - Background: Steel Blue (`#354A59`) or transparent with a solid `2px` border in `#354A59`.
  - Text & Icon: Off-white (`#F5F6F4`), `label-md`.
  - Hover: Surface fills with Steel Blue at 100% opacity with Pure White text.

### Heavy-Duty Cards
- Architectural modular panels bounded by a crisp `1px` border (`#354A59` on dark, `rgba(32,40,48,0.12)` on light).
- Background: Either dark Graphite (`#202830`) with Steel Blue header tabs or Off-white (`#F5F6F4`) with Graphite technical text.
- Inner padding: Strict `1.5rem` (`24px`).

### Technical Chips & Badges
- Fixed `28px` or `32px` height, `4px` radius.
- Background: Steel Blue (`#354A59`) with Off-white text (`#F5F6F4`), or muted Engineering Yellow with a Graphite border for operational warnings.
- Monospaced / condensed metrics for cut depth, diameter, and core drill parameters.

### Form Inputs & Selectors
- Minimum interactive height: `48px`.
- Fill: Dark Graphite (`#202830`) with a `1px` Steel Blue border (`#354A59`).
- Text: Off-white (`#F5F6F4`) input copy with subdued placeholders.
- Focus State: Continuous, crisp `2px` Engineering Yellow (`#F2BE3D`) border, zero ambient glow.

### Checkboxes & Radio Controls
- Base: `20px × 20px` square form factor with `2px` outer border in Steel Blue.
- Active Selection: Solid Engineering Yellow fill housing an architectural Graphite checkmark indicator.

### Mobile Persistent Bottom Bar
- Sticky anchor locked to `bottom: 0`, full width, protected by `env(safe-area-inset-bottom)`.
- Background: Graphite (`#202830`) with a `1px` top border in Steel Blue (`#354A59`).
- Layout: Dual-action split grid housing the Primary Call CTA and the Secondary WhatsApp CTA, strictly maintaining minimum `48px × 48px` tap targets.