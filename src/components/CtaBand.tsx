"use client";

import React from "react";
import { SITE } from "@/config/site";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

interface CtaBandProps {
  h2: string;
  desc: string;
  checklist: string[];
  callNowLabel: string;
  whatsappLabel: string;
  lang: "ar" | "en";
}

export function CtaBand({
  h2,
  desc,
  checklist,
  callNowLabel,
  whatsappLabel,
  lang,
}: CtaBandProps) {
  const isAr = lang === "ar";

  const handlePhone = () => {
    trackPhoneClick({
      pagePath: typeof window !== "undefined" ? window.location.pathname : "/",
      pageLanguage: lang,
      ctaLocation: "cta_band",
    });
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick({
      pagePath: typeof window !== "undefined" ? window.location.pathname : "/",
      pageLanguage: lang,
      ctaLocation: "cta_band",
    });
  };

  return (
    <section className="w-full bg-graphite py-16 lg:py-20 text-off-white border-t border-outline-variant/30">
      <div className="max-w-310 mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-surface-container border border-outline-variant/40 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Copy & Checklist (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-engineering-yellow font-bold text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-engineering-yellow shrink-0"></span>
                <span>{isAr ? "خدمة سريعة في كافة أحياء الرياض" : "Fast Response Across Riyadh"}</span>
              </div>

              <h2 className="font-headline font-extrabold text-2xl sm:text-3xl lg:text-4xl text-pure-white tracking-tight">
                {h2}
              </h2>

              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                {desc}
              </p>

              <div className="pt-2">
                <span className="block text-xs font-bold text-off-white mb-2 uppercase tracking-wide">
                  {isAr ? "تجهيز المعلومات لتسريع الرد:" : "Information to Prepare for Quick Response:"}
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-on-surface-variant">
                  {checklist.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 bg-graphite/70 p-2.5 rounded border border-steel-blue/20"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-engineering-yellow mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Action Buttons (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-stretch gap-4 p-6 rounded-xl bg-surface-container-high border border-steel-blue/50 shadow-inner">
              <span className="text-xs text-center text-on-surface-variant font-medium">
                {isAr ? "تواصل مباشر وميداني — دون وسطاء" : "Direct On-site Communication — No Intermediaries"}
              </span>

              {/* Direct Call Button */}
              <a
                href={SITE.phoneHref}
                onClick={handlePhone}
                className="flex items-center justify-center gap-2.5 bg-engineering-yellow hover:bg-[#DBA82E] active:scale-[0.98] text-graphite py-4 px-6 rounded font-bold text-base transition-all shadow-lg min-h-12"
                aria-label={`${callNowLabel}: ${SITE.phoneDisplay}`}
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.92c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.54c0-.54-.45-1-.99-1z" />
                </svg>
                <span>{callNowLabel}:</span>
                <bdi dir="ltr" className="font-mono font-bold tracking-wide">{SITE.phoneDisplay}</bdi>
              </a>

              {/* WhatsApp Button */}
              <a
                href={SITE.whatsappHref}
                onClick={handleWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-steel-blue hover:bg-steel-blue/90 text-off-white active:scale-[0.98] py-3.5 px-6 rounded font-bold text-base transition-all border border-steel-blue/80 shadow-md min-h-12"
                aria-label={whatsappLabel}
              >
                <svg className="w-5 h-5 shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.82 14.1c-.24.68-1.22 1.3-1.7 1.38-.45.08-1.03.11-1.66-.1-.39-.13-.89-.29-1.53-.57-2.69-1.17-4.44-3.89-4.57-4.07-.13-.18-1.09-1.45-1.09-2.77 0-1.32.69-1.97.94-2.24.25-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4.06.61.56.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.15 1.37 2.46 1.52.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.11 1.78.84 2.09.99.31.15.52.23.6.36.08.13.08.76-.16 1.44z" />
                </svg>
                <span>{whatsappLabel}</span>
              </a>

              <span className="text-[11px] text-center text-on-surface-variant/70">
                {isAr
                  ? "استقبال مباشر للاستفسارات لجميع أحياء ومشاريع الرياض"
                  : "Direct inquiries accepted across all Riyadh districts"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
