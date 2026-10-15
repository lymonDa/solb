/**
 * SOLB Centralized Analytics & Conversion Tracking Utility
 * 
 * Complies with:
 * - GA4 recommended events & custom conversion actions
 * - Google Ads Search click-to-call & WhatsApp proxy tracking
 * - URL parameter attribution preservation (gclid, gbraid, wbraid, UTMs)
 * - Static export compatibility without server runtime requirements
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export interface TrackingContext {
  pagePath: string;
  pageLanguage: "ar" | "en";
  serviceType?: string;
  ctaLocation: "header" | "hero" | "sticky_bar" | "cta_band" | "contact_page" | "footer" | "service_detail";
}

export interface LanguageSwitchContext {
  fromLang: "ar" | "en";
  toLang: "ar" | "en";
  pagePath: string;
}

export interface AttributionParams {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  first_touch_timestamp?: string;
}

const STORAGE_KEY = "solb_attribution_params";

/**
 * Harvests attribution parameters from URL on first landing and stores them in sessionStorage.
 * Does not mutate the URL or strip parameters.
 */
export function initAttributionCapture(): void {
  if (typeof window === "undefined") return;

  try {
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get("gclid");
    const gbraid = params.get("gbraid");
    const wbraid = params.get("wbraid");
    const utm_source = params.get("utm_source");
    const utm_medium = params.get("utm_medium");
    const utm_campaign = params.get("utm_campaign");
    const utm_term = params.get("utm_term");
    const utm_content = params.get("utm_content");

    // Only update if at least one attribution parameter is present in current URL
    if (gclid || gbraid || wbraid || utm_source || utm_campaign) {
      const attribution: AttributionParams = {
        ...(gclid && { gclid }),
        ...(gbraid && { gbraid }),
        ...(wbraid && { wbraid }),
        ...(utm_source && { utm_source }),
        ...(utm_medium && { utm_medium }),
        ...(utm_campaign && { utm_campaign }),
        ...(utm_term && { utm_term }),
        ...(utm_content && { utm_content }),
        first_touch_timestamp: new Date().toISOString(),
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    }
  } catch {
    // Fail silently in private browsing or restricted environments
  }
}

/**
 * Retrieves stored campaign attribution parameters for downstream event payload enrichment.
 */
export function getStoredAttribution(): AttributionParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Generic event dispatcher to dataLayer and gtag.
 */
export function trackEvent(eventName: string, eventParams: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  const payload = {
    event: eventName,
    ...eventParams,
    timestamp: new Date().toISOString(),
  };

  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }

  // Development diagnostic logger
  if (process.env.NODE_ENV === "development") {
    console.debug(`[SOLB Analytics] Event: ${eventName}`, payload);
  }
}

/**
 * Tracks phone click proxy conversions.
 * A phone click signals high intent but does NOT constitute a guaranteed completed call.
 */
export function trackPhoneClick(context: TrackingContext): void {
  const attribution = getStoredAttribution();

  const eventPayload = {
    page_path: context.pagePath,
    page_language: context.pageLanguage,
    service_type: context.serviceType || "general",
    cta_location: context.ctaLocation,
    conversion_type: "phone_click_proxy",
    destination_protocol: "tel:",
    ...attribution,
  };

  trackEvent("phone_click", eventPayload);

  // Trigger Google Ads phone conversion if conversion ID and label are configured
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const phoneLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL;
  if (adsId && phoneLabel && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: `${adsId}/${phoneLabel}`,
      value: 1.0,
      currency: "SAR",
    });
  }
}

/**
 * Tracks WhatsApp click proxy conversions.
 * A WhatsApp click signals intent to chat but does NOT guarantee a message was sent.
 */
export function trackWhatsAppClick(context: TrackingContext): void {
  const attribution = getStoredAttribution();

  const eventPayload = {
    page_path: context.pagePath,
    page_language: context.pageLanguage,
    service_type: context.serviceType || "general",
    cta_location: context.ctaLocation,
    conversion_type: "whatsapp_click_proxy",
    destination_platform: "whatsapp",
    ...attribution,
  };

  trackEvent("whatsapp_click", eventPayload);

  // Trigger Google Ads WhatsApp conversion if conversion ID and label are configured
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const waLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_WA_CONVERSION_LABEL;
  if (adsId && waLabel && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: `${adsId}/${waLabel}`,
      value: 1.0,
      currency: "SAR",
    });
  }
}

/**
 * Tracks language switch interactions (engagement event, NOT a commercial conversion).
 */
export function trackLanguageSwitch(context: LanguageSwitchContext): void {
  trackEvent("language_switch", {
    from_language: context.fromLang,
    to_language: context.toLang,
    page_path: context.pagePath,
    event_category: "engagement",
  });
}
