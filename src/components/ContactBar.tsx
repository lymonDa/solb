"use client";

import React from "react";
import { SiteContent } from "@/content/types";
import { SITE } from "@/config/site";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

interface ContactBarProps {
  content: SiteContent;
}

export function ContactBar({ content }: ContactBarProps) {
  const isAr = content.lang === "ar";

  const handlePhone = () => {
    trackPhoneClick({
      pagePath: typeof window !== "undefined" ? window.location.pathname : "/",
      pageLanguage: content.lang,
      ctaLocation: "sticky_bar",
    });
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick({
      pagePath: typeof window !== "undefined" ? window.location.pathname : "/",
      pageLanguage: content.lang,
      ctaLocation: "sticky_bar",
    });
  };

  return (
    <aside
      className="fixed bottom-0 inset-x-0 z-40 bg-graphite/98 backdrop-blur-md border-t border-steel-blue/60 p-2.5 safe-bottom lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.6)]"
      aria-label={isAr ? "شريط الاتصال السريع الميداني" : "Quick Contact Bar"}
    >
      <div className="max-w-[600px] mx-auto grid grid-cols-2 gap-2.5">
        {/* Primary Tactical Action: Direct Call */}
        <a
          href={SITE.phoneHref}
          onClick={handlePhone}
          className="flex items-center justify-center gap-2 bg-engineering-yellow hover:bg-[#DBA82E] text-graphite font-bold rounded min-h-[48px] px-3 text-sm active:scale-[0.98] transition-transform shadow-md focus-visible:outline-2 focus-visible:outline-engineering-yellow"
          aria-label={content.mobileBar.callAria}
        >
          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.92c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.54c0-.54-.45-1-.99-1z" />
          </svg>
          <span className="truncate">{content.mobileBar.call}</span>
        </a>

        {/* Secondary Structural Action: WhatsApp */}
        <a
          href={SITE.whatsappHref}
          onClick={handleWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-steel-blue hover:bg-steel-blue/90 text-off-white font-bold rounded min-h-[48px] px-3 text-sm border border-steel-blue/80 active:scale-[0.98] transition-transform shadow-md focus-visible:outline-2 focus-visible:outline-engineering-yellow"
          aria-label={content.mobileBar.whatsappAria}
        >
          <svg className="w-5 h-5 shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.82 14.1c-.24.68-1.22 1.3-1.7 1.38-.45.08-1.03.11-1.66-.1-.39-.13-.89-.29-1.53-.57-2.69-1.17-4.44-3.89-4.57-4.07-.13-.18-1.09-1.45-1.09-2.77 0-1.32.69-1.97.94-2.24.25-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4.06.61.56.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.15 1.37 2.46 1.52.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.11 1.78.84 2.09.99.31.15.52.23.6.36.08.13.08.76-.16 1.44z" />
          </svg>
          <span className="truncate">{content.mobileBar.whatsapp}</span>
        </a>
      </div>
    </aside>
  );
}
