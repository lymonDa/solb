"use client";

import React from "react";
import Image from "next/image";
import { SiteContent } from "@/content/types";
import { IMAGES } from "@/content/images";
import { SITE } from "@/config/site";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

interface HeroProps {
  content: SiteContent;
}

export function Hero({ content }: HeroProps) {
  const isAr = content.lang === "ar";
  const heroData = content.home.hero;
  const heroImg = IMAGES[heroData.imageKey] || IMAGES.wallSawTrack09;

  return (
    <section className="relative w-full bg-graphite border-b border-outline-variant/30 overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Structural grid watermark background conforming to Stitch design */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none bg-grid-watermark"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Operational HUD Badge */}
            <div className="inline-flex items-center gap-2 bg-steel-blue/40 border border-outline-variant/50 px-3.5 py-1.5 rounded self-start">
              <span className="w-2.5 h-2.5 rounded-full bg-engineering-yellow animate-pulse shrink-0"></span>
              <span className="text-xs font-bold text-engineering-yellow">{heroData.badge}</span>
              <span className="text-outline text-xs">/</span>
              <span className="text-xs text-primary font-medium">
                {isAr ? "الرياض وضواحيها" : "Riyadh & Suburbs"}
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-pure-white tracking-tight leading-[1.2]">
              {heroData.h1}
            </h1>

            {/* Intro Copy */}
            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {heroData.intro}
            </p>

            {/* Proposed Tagline in architectural citation */}
            <div className="p-3.5 bg-surface-container border-s-4 border-engineering-yellow rounded-e text-sm text-off-white/90 font-medium">
              <span>{heroData.tagline}</span>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              {/* Primary Tactical Action: Direct Voice Call */}
              <a
                href={SITE.phoneHref}
                onClick={() =>
                  trackPhoneClick({
                    pagePath: typeof window !== "undefined" ? window.location.pathname : "/",
                    pageLanguage: isAr ? "ar" : "en",
                    ctaLocation: "hero",
                  })
                }
                className="inline-flex items-center justify-center gap-2.5 bg-engineering-yellow hover:bg-[#DBA82E] active:scale-[0.98] text-graphite font-bold text-base px-6 py-3.5 rounded transition-all shadow-md focus-visible:outline-2 focus-visible:outline-engineering-yellow min-h-[48px]"
                aria-label={`${content.common.callNow}: ${SITE.phoneDisplay}`}
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.92c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.54c0-.54-.45-1-.99-1z" />
                </svg>
                <span>{content.common.callNow}:</span>
                <bdi dir="ltr" className="font-mono font-bold tracking-wide">{SITE.phoneDisplay}</bdi>
              </a>

              {/* Secondary Structural Action: WhatsApp */}
              <a
                href={SITE.whatsappHref}
                onClick={() =>
                  trackWhatsAppClick({
                    pagePath: typeof window !== "undefined" ? window.location.pathname : "/",
                    pageLanguage: isAr ? "ar" : "en",
                    ctaLocation: "hero",
                  })
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-steel-blue hover:bg-steel-blue/90 border border-outline-variant/40 text-off-white font-bold text-base px-5 py-3.5 rounded transition-all shadow-sm active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-engineering-yellow min-h-[48px]"
                aria-label={content.common.whatsapp}
              >
                <svg className="w-5 h-5 shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.82 14.1c-.24.68-1.22 1.3-1.7 1.38-.45.08-1.03.11-1.66-.1-.39-.13-.89-.29-1.53-.57-2.69-1.17-4.44-3.89-4.57-4.07-.13-.18-1.09-1.45-1.09-2.77 0-1.32.69-1.97.94-2.24.25-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4.06.61.56.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.15 1.37 2.46 1.52.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.11 1.78.84 2.09.99.31.15.52.23.6.36.08.13.08.76-.16 1.44z" />
                </svg>
                <span>{content.common.whatsapp}</span>
              </a>
            </div>

            {/* Engineering Trust Metrics Bar */}
            <div className="pt-4 border-t border-outline-variant/30 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-on-surface-variant font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-engineering-yellow shrink-0"></span>
                <span>{isAr ? "مناشير مسار هيدروليكية" : "Hydraulic Track Saws"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-engineering-yellow shrink-0"></span>
                <span>{isAr ? "تخريم دقيق بأقطار 1\" حتى 16\"" : "Precision Coring Ø 1\" to 16\""}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-engineering-yellow shrink-0"></span>
                <span>{isAr ? "قص مستوٍ خالي من الاهتزاز" : "Level Vibration-Free Cuts"}</span>
              </div>
            </div>
          </div>

          {/* Hero Image: Actual Wall Saw Unit (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-surface-container rounded-xl overflow-hidden border border-outline-variant/40 shadow-2xl group">
              <div className="relative h-[380px] sm:h-[460px] w-full bg-surface-dim flex items-center justify-center overflow-hidden">
                <Image
                  src={heroImg.src}
                  alt={isAr ? heroImg.altAr : heroImg.altEn}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-black/20" />

                {/* Spec Tag Overlay top right */}
                <div className="absolute top-4 right-4 bg-graphite/90 backdrop-blur-sm border border-outline-variant/50 px-3 py-1.5 rounded text-xs font-semibold text-off-white flex items-center gap-2 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-engineering-yellow"></span>
                  <span>{isAr ? "المعدات المعتمدة ميدانياً" : "Field-Verified Equipment"}</span>
                </div>

                {/* Technical Description Card at Base */}
                <div className="absolute bottom-4 inset-x-4 bg-graphite/95 backdrop-blur-md border border-outline-variant/50 p-4 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-bold text-engineering-yellow uppercase tracking-wider block">
                        {isAr ? "ماكينة قص الجدران والمسارات" : "Track Wall Saw Unit"}
                      </span>
                      <h2 className="text-sm font-bold text-pure-white mt-0.5">
                        {isAr ? "منشار ألماسي هيدروليكي مع وحدة تحكم" : "Hydraulic Diamond Saw with Digital Controller"}
                      </h2>
                      <p className="text-[11px] text-on-surface-variant mt-1">
                        {isAr
                          ? "شفرات صلبة لاختراق الخرسانة عالية الإجهاد مع حديد التسليح"
                          : "Heavy-duty diamond blades for reinforced concrete cutting"}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded bg-steel-blue/40 border border-steel-blue flex items-center justify-center shrink-0 text-engineering-yellow">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
