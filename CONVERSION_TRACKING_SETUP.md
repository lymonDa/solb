# SOLB — GA4, Google Ads & Conversion Tracking Setup Guide

**Architecture:** Next.js 16 (App Router), Static Export, Client-side Event Dispatcher  
**Status:** Implemented in codebase; awaiting client container IDs in environment variables.  

---

## 1. Tracking Architecture Overview

SOLB utilizes a lightweight, unified client tracking architecture implemented in [`src/lib/tracking.ts`](file:///home/lymon/solb/src/lib/tracking.ts) and mounted through [`src/components/Analytics.tsx`](file:///home/lymon/solb/src/components/Analytics.tsx).

The design satisfies five key engineering requirements:
1. **Zero Static-Hosting Friction**: Requires no server-side middleware or dynamic Node.js runtime; compatible with Hostinger Apache static hosting.
2. **Attribution Integrity**: Automatically harvests Google Click IDs (`gclid`, `gbraid`, `wbraid`) and UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, etc.) from the URL on landing and persists them in browser `sessionStorage`. Attribution parameters are never stripped during intra-site navigation.
3. **No Duplicate Tag Injections**: Supports deployment via either Google Tag Manager (GTM) or direct Google tag (`gtag.js`). Loading one automatically prevents redundant injection of the other.
4. **Consent Mode v2 Out-of-the-Box**: Initializes Google Consent Mode v2 defaults synchronously before any third-party marketing tags load.
5. **Clear Separation of Intent**: Classifies button clicks as **intent proxies** (`proxy_click`), preventing misrepresentation of raw link clicks as completed contracts or qualified phone consultations.

---

## 2. Environment Variables Configuration

To activate live tracking in production, add the following environment variables to your deployment environment (e.g., Hostinger Environment Variables or local `.env.production`):

| Variable Name | Required? | Example Value | Description |
|---|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional* | `G-XXXXXXXXXX` | Google Analytics 4 Measurement Stream ID |
| `NEXT_PUBLIC_GTM_ID` | Optional* | `GTM-XXXXXXX` | Google Tag Manager Container ID (recommended if GTM is preferred) |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Optional | `AW-1234567890` | Google Ads Conversion ID |
| `NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL` | Optional | `AbC_xYz123456` | Conversion Label generated in Google Ads for Phone Link Clicks |
| `NEXT_PUBLIC_GOOGLE_ADS_WA_CONVERSION_LABEL` | Optional | `DeF_wUv789012` | Conversion Label generated in Google Ads for WhatsApp Clicks |

*\*Note: Provide either `NEXT_PUBLIC_GTM_ID` (if managing tags via Google Tag Manager) or `NEXT_PUBLIC_GA_MEASUREMENT_ID` (for direct gtag.js tracking). Do not supply both.*

---

## 3. Implemented Events Specification

### 3.1 Event: `phone_click` (Commercial Proxy Conversion)
Triggered whenever a user activates a verified `tel:+966556123725` link across any viewport.

| Parameter | Type | Example Value | Description |
|---|---|---|---|
| `event` | string | `phone_click` | Canonical event name |
| `page_path` | string | `/services/concrete-cutting/` | Active URL route at time of click |
| `page_language` | string | `ar` or `en` | User's language version |
| `service_type` | string | `cutting`, `drilling`, `openings`, `demolition`, or `general` | Contextual service classification |
| `cta_location` | string | `header`, `hero`, `sticky_bar`, `cta_band`, `contact_page`, `footer` | Section where action occurred |
| `conversion_type` | string | `phone_click_proxy` | Categorized as click proxy (not verified call completion) |
| `destination_protocol` | string | `tel:` | Link action protocol |
| `gclid` | string | `Cj0KCQ...` | Preserved Google Ads Click ID (if present) |
| `utm_campaign` | string | `search_riyadh_cutting` | Preserved campaign attribution |

### 3.2 Event: `whatsapp_click` (Commercial Proxy Conversion)
Triggered whenever a user activates a verified `https://wa.me/966556123725` link.

| Parameter | Type | Example Value | Description |
|---|---|---|---|
| `event` | string | `whatsapp_click` | Canonical event name |
| `page_path` | string | `/services/core-drilling/` | Active URL route at time of click |
| `page_language` | string | `ar` or `en` | User's language version |
| `service_type` | string | `drilling` | Contextual service classification |
| `cta_location` | string | `sticky_bar` | Section where action occurred |
| `conversion_type` | string | `whatsapp_click_proxy` | Categorized as WhatsApp intent proxy |
| `destination_platform`| string | `whatsapp` | Target messaging platform |
| `gclid` / UTMs | string | (Preserved) | Preserved campaign attribution |

### 3.3 Event: `language_switch` (Engagement Event)
Triggered when a user clicks the Arabic/English toggle in the navigation.

| Parameter | Type | Example Value | Description |
|---|---|---|---|
| `event` | string | `language_switch` | Engagement action (marked as non-conversion) |
| `from_language` | string | `ar` | Originating language |
| `to_language` | string | `en` | Destination language |
| `page_path` | string | `/contact/` | Route where toggle was triggered |

---

## 4. Google Ads Conversion Action Setup Instructions

In the Google Ads account (`AW-XXXXXXXXXX`):
1. Navigate to **Goals &rarr; Conversions &rarr; Summary**.
2. Click **+ New conversion action &rarr; Website**.
3. Select **Manual conversion action**:
   - **Category**: `Contact` or `Lead (Phone call lead / Outbound click)`
   - **Conversion Name**: `SOLB_Phone_Click_Proxy`
   - **Value**: Use a standard placeholder (e.g., 1.00 SAR) or Don't use a value.
   - **Count**: `One` (per click session, to prevent multi-click inflation).
   - **Click-through conversion window**: `30 days`.
   - **Attribution model**: `Data-driven` (or Last Click if data-driven unavailable).
4. Save and obtain the **Conversion ID** (`AW-...`) and **Conversion Label** (`...`).
5. Repeat for `SOLB_WhatsApp_Click_Proxy`.
6. Add the labels to your environment variables (`NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL`, `NEXT_PUBLIC_GOOGLE_ADS_WA_CONVERSION_LABEL`).

---

## 5. Testing & Verification Procedure

1. **Tag Assistant**:
   - Visit [tagassistant.google.com](https://tagassistant.google.com/).
   - Connect to `https://solb.site/?utm_source=google&utm_medium=cpc&utm_campaign=test_campaign&gclid=TEST_CLICK_ID`.
   - Click the Call button in the Hero and Sticky Bar.
   - Verify `phone_click` appears in Tag Assistant with all contextual parameters.
2. **GA4 DebugView**:
   - Open Google Analytics 4 &rarr; **Admin &rarr; DebugView**.
   - Trigger phone and WhatsApp clicks on your connected device.
   - Confirm events `phone_click`, `whatsapp_click`, and `language_switch` are logged with custom parameters (`service_type`, `cta_location`).
3. **Session Storage Attribution Check**:
   - Open Developer Tools Console (`F12`).
   - Run `sessionStorage.getItem("solb_attribution_params")`.
   - Verify that `gclid` and UTM parameters are captured accurately on arrival.
