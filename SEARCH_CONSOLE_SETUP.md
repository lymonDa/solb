# SOLB — Google Search Console & Indexing Readiness Guide

**Production Domain:** `https://solb.site`  
**Sitemap URL:** `https://solb.site/sitemap.xml`  
**Robots.txt URL:** `https://solb.site/robots.txt`  
**Status:** Architecture ready for submission; awaiting domain DNS or account access.  

---

## 1. Property Setup Strategy

For comprehensive search visibility and accurate index diagnostics, configure **both** property types in Google Search Console:

1. **Domain Property (`solb.site`)**:
   - Covers all subdomains (`www`, apex), protocols (`http`, `https`), and paths.
   - Requires DNS verification.
2. **URL-Prefix Property (`https://solb.site/`)**:
   - Matches the exact canonical protocol and host.
   - Enables HTML tag/file verification and direct integration with Google Analytics 4.

---

## 2. Ownership Verification Methods

### Method 1: DNS TXT Record (Recommended for Domain Property)
1. In Google Search Console, select **Domain** and enter `solb.site`.
2. Copy the generated `google-site-verification=...` string.
3. Access your DNS management console (Hostinger DNS Zone Editor or Cloudflare/Registrar).
4. Add a `TXT` record:
   - **Name / Host**: `@` (or leave blank depending on provider)
   - **Type**: `TXT`
   - **Value**: `google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
   - **TTL**: `3600` (1 hour) or Auto
5. Click **Verify** in Search Console.

### Method 2: HTML File Upload (For URL-Prefix Property on Hostinger)
1. Download the verification HTML file from Google Search Console (e.g., `google1234567890abcdef.html`).
2. Upload the file directly to Hostinger's `public_html/` root directory.
3. Verify access by browsing to `https://solb.site/google1234567890abcdef.html`.
4. Click **Verify** in Search Console.

---

## 3. Sitemap Submission Procedure

1. In Search Console, navigate to **Indexing &rarr; Sitemaps** in the left sidebar.
2. Under **Add a new sitemap**, input:
   ```
   sitemap.xml
   ```
3. Click **Submit**.
4. Confirm the status changes to **Success**.
5. **Expected Discovery**: Exactly 12 URLs (6 Arabic and 6 English) covering:
   - `https://solb.site/`
   - `https://solb.site/services/concrete-cutting/`
   - `https://solb.site/services/core-drilling/`
   - `https://solb.site/services/concrete-openings/`
   - `https://solb.site/services/demolition-repair/`
   - `https://solb.site/contact/`
   - `https://solb.site/en/`
   - `https://solb.site/en/services/concrete-cutting/`
   - `https://solb.site/en/services/core-drilling/`
   - `https://solb.site/en/services/concrete-openings/`
   - `https://solb.site/en/services/demolition-repair/`
   - `https://solb.site/en/contact/`

---

## 4. URL Inspection & Indexing Diagnostic Workflow

Upon verification, test the primary Arabic homepage and service pages using the **URL Inspection** tool:

1. Paste `https://solb.site/` into the top inspection bar.
2. Click **Test Live URL**.
3. Verify:
   - **HTTP Response**: `200 OK`
   - **Page fetch**: Successful
   - **Indexing allowed**: Yes
   - **User-declared canonical**: `https://solb.site/`
   - **Google-selected canonical**: Inspect whether Google aligns with the user-declared canonical.
   - **Hreflang detection**: Confirm Google extracts `ar`, `ar-SA`, `en`, and `x-default` reciprocal alternates.
4. If the page is not yet indexed, click **Request Indexing**.

---

## 5. Common Indexing Status Diagnostics & Troubleshooting

| Search Console Status | Meaning in SOLB Context | Troubleshooting & Remediation |
|---|---|---|
| **Crawled — currently not indexed** | Google evaluated the page but chose not to index it yet. Typical for new domains. | Ensure content depth is rich, unique, and clearly distinct across service pages. Verify internal links from homepage. Avoid requesting indexing repeatedly. |
| **Discovered — currently not indexed** | Google found the URL via sitemap or links, but hasn't crawled it yet due to queue priorities. | Standard for brand new websites. Monitor over 7-14 days. Ensure sitemap is valid and internal links are crawlable. |
| **Duplicate without user-selected canonical** | Google detected multiple URLs serving the same content without an explicit tag. | SOLB's `buildMetadata` sets explicit self-referencing canonical tags on all 12 routes. Re-inspect URL to ensure cache is cleared. |
| **Alternative page with proper canonical tag** | Expected behavior for language counterparts or parameterized URLs (`?gclid=...`). | Confirms Google recognized the canonical relationship correctly. No action required. |
| **Page with redirect** | URL encountered a 301/302 redirect. | Check that internal links and sitemap point strictly to final trailing-slash URLs (e.g., `/contact/`, not `/contact`). |

---

## 6. Ongoing Monitoring Protocol

1. **Weekly (First 60 Days)**:
   - Check **Performance &rarr; Search results** for real query terms used in Riyadh.
   - Compare impressions and clicks between Arabic phrases (`قص خرسانة`, `تخريم كور`) and English phrases (`concrete cutting riyadh`).
   - Monitor the **Pages** indexation status to confirm all 12 routes move into *Indexed* state.
2. **Monthly**:
   - Review **Core Web Vitals** report (Mobile & Desktop) to ensure LCP, INP, and CLS remain in the *Good* (green) threshold.
   - Review **Security & Manual Actions** to maintain a clean bill of health.

---

> [!IMPORTANT]
> **Honest SEO Guardrail**: Submission to Google Search Console and sitemap registration facilitate discovery and indexing. They do **not** guarantee immediate indexing or top-page rankings. Organic visibility grows through algorithmic evaluation, user engagement signals, and market relevance over weeks and months.
