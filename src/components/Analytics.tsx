"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import { initAttributionCapture } from "@/lib/tracking";

interface AnalyticsProps {
  gaMeasurementId?: string;
  gtmId?: string;
  googleAdsId?: string;
}

export function Analytics({
  gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  gtmId = process.env.NEXT_PUBLIC_GTM_ID,
  googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
}: AnalyticsProps) {
  useEffect(() => {
    // Capture attribution parameters (gclid, gbraid, wbraid, utm_*) on page arrival
    initAttributionCapture();
  }, []);

  const hasTracking = Boolean(gaMeasurementId || gtmId || googleAdsId);

  return (
    <>
      {/* 1. Consent Mode v2 Default Configuration */}
      <script
        id="google-consent-mode"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            // Default Google Consent Mode v2 settings
            gtag('consent', 'default', {
              'ad_storage': 'granted',
              'ad_user_data': 'granted',
              'ad_personalization': 'granted',
              'analytics_storage': 'granted',
              'wait_for_update': 500
            });
            gtag('set', 'ads_data_redaction', false);
            gtag('set', 'url_passthrough', true);
          `,
        }}
      />

      {/* 2. Google Tag Manager Container (if GTM ID provided) */}
      {gtmId && (
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'dataLayer','${gtmId}');
            `,
          }}
        />
      )}

      {/* 3. Google Analytics 4 / Google Ads (gtag.js) direct loader (if GTM not used) */}
      {!gtmId && (gaMeasurementId || googleAdsId) && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId || googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                ${gaMeasurementId ? `gtag('config', '${gaMeasurementId}', { send_page_view: true });` : ""}
                ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ""}
              `,
            }}
          />
        </>
      )}

      {/* 4. Development diagnostic notice when no IDs configured */}
      {!hasTracking && process.env.NODE_ENV === "development" && (
        <Script
          id="solb-analytics-diagnostic"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // eslint-disable-next-line no-console
              console.info("[SOLB Analytics] Ready. Provide NEXT_PUBLIC_GA_MEASUREMENT_ID or NEXT_PUBLIC_GTM_ID in environment variables to stream live events.");
            `,
          }}
        />
      )}
    </>
  );
}
