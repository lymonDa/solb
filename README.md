# 🏗️ SOLB (صلب) — Official Corporate Website & Lead Engine

> **Confidential & Proprietary**  
> Internal repository for SOLB (`solb.site`) — Specialized Concrete Cutting, Core Drilling & Demolition Solutions in Riyadh, Saudi Arabia.

---

## 📌 Overview

**SOLB (صلب)** is a high-performance bilingual (Arabic primary RTL & English secondary LTR) digital web platform and conversion-focused lead generation engine designed for industrial concrete cutting and core drilling operations in Riyadh and across the Kingdom of Saudi Arabia.

- **Production Domain**: [https://solb.site](https://solb.site)
- **Primary Market**: Riyadh, Kingdom of Saudi Arabia
- **Primary Language**: Arabic (`ar-SA`, RTL)
- **Secondary Language**: English (`en-US`, LTR)
- **Direct Contact**: Phone / WhatsApp `+966 55 612 3725`

---

## 🚀 Key Highlights & Architecture

- **Next.js 16 (App Router)** with React 19 and full static site export (`output: 'export'`) for lightning-fast delivery, zero server attack surface, and low-latency hosting.
- **Tailwind CSS v4** design system engineered specifically for high-contrast industrial branding, gold/slate accents, and accessible typography.
- **Dual Locale Routing**:
  - `/(ar)`: Root Arabic pages (`/`, `/contact`, `/services/*`)
  - `/(en)`: English localized pages (`/en`, `/en/contact`, `/en/services/*`)
- **Conversion & Ads Architecture**:
  - Built-in Google Tag Manager (GTM) and Google Ads Conversion Tracking (`src/lib/tracking.ts`).
  - Automated tracking for WhatsApp clicks, phone call clicks, and quote request inquiries.
- **Advanced Local SEO & Schema.org**:
  - Automated JSON-LD generation for `LocalBusiness`, `BreadcrumbList`, `Service`, and `FAQPage`.
  - Canonical URLs, bidirectional `hreflang` alternates, dynamic XML sitemap (`/sitemap.xml`), and `robots.txt`.
- **Quality Assurance Toolchain**:
  - Link integrity checks (`scripts/check-links.mjs`).
  - Export build verification (`scripts/verify-out.mjs`).
  - Strict TypeScript 5 type checking and ESLint 9 validation.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS v4 |
| **Language** | TypeScript 5 (Strict Mode) |
| **Typography** | Tajawal & Cairo (Arabic), Inter (English) |
| **Deployment Mode** | Static HTML Export (`out/`) |
| **Analytics** | Google Ads & Google Tag Manager |

---

## 📁 Project Structure

```text
solb/
├── Assets/                 # Raw design references, screenshots & media
├── documentation/          # Product briefs, specifications & technical plans
├── public/                 # Static public assets (images, logos, favicon, .htaccess)
├── scripts/                # QA verification & link validation scripts
│   ├── check-links.mjs     # Static export broken link validator
│   └── verify-out.mjs      # Production static build integrity verifier
├── src/
│   ├── app/                # Next.js App Router root
│   │   ├── (ar)/           # Arabic route group (Default RTL)
│   │   ├── (en)/           # English route group (/en LTR)
│   │   ├── globals.css     # Global styles & Tailwind CSS tokens
│   │   ├── robots.ts       # Dynamic robots.txt generator
│   │   └── sitemap.ts      # Dynamic sitemap.xml generator
│   ├── components/         # Reusable UI components & section blocks
│   │   ├── Analytics.tsx   # Google Tag Manager & Conversion script injector
│   │   ├── JsonLd.tsx      # Schema.org structured data component
│   │   ├── Header.tsx      # Bilingual sticky navigation & language switcher
│   │   ├── Footer.tsx      # Corporate footer with quick contact & links
│   │   └── ...             # Service cards, FAQ accordions, hero sections
│   ├── config/             # Site metadata & centralized configuration
│   ├── content/            # Bilingual content dictionaries (ar.ts, en.ts)
│   └── lib/                # SEO utilities, fonts, and event tracking
├── package.json
└── tsconfig.json
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js**: v20.x or v22.x LTS
- **Package Manager**: `npm` (v10+)

### Installation

```bash
git clone https://github.com/lymonDa/solb.git
cd solb
npm install
```

### Development Server

Run the development server locally on port 3000:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) for Arabic or [http://localhost:3000/en](http://localhost:3000/en) for English.

---

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts local Next.js development server with hot reload |
| `npm run build` | Compiles application and exports static HTML/CSS/JS to `/out` |
| `npm run typecheck` | Runs strict TypeScript compiler check (`tsc --noEmit`) |
| `npm run lint` | Runs ESLint validation across the repository |
| `npm run verify` | Verifies `/out` static export integrity, routes, and assets |
| `npm run check:links` | Verifies internal links and detects broken anchors |
| `npm run release` | Full pipeline: typecheck + lint + build + verify + check:links |

---

## 🚢 Deployment & Static Hosting

Because this project is configured for static export (`output: 'export'`), running:

```bash
npm run build
```

generates the production-ready distribution inside the `/out` directory. This folder can be deployed to:
- **Nginx / Apache** (a production `public/.htaccess` is provided)
- **Vercel** or **Cloudflare Pages**
- **AWS S3 + CloudFront**

---

## 🔒 Confidentiality & License

This repository is **Private & Confidential**. All rights reserved.  
Unauthorized copying, modification, distribution, or deployment of this software, via any medium, is strictly prohibited without explicit written permission from the copyright owner.

© 2026 SOLB (صلب). All rights reserved.
