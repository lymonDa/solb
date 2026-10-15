"use client";

import React from "react";
import Link from "next/link";
import { SiteContent } from "@/content/types";
import { SITE } from "@/config/site";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

interface FooterProps {
  content: SiteContent;
}

export function Footer({ content }: FooterProps) {
  const isAr = content.lang === "ar";
  const homeHref = isAr ? "/" : "/en/";
  const contactHref = isAr ? "/contact/" : "/en/contact/";

  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant border-t border-outline-variant/30 pt-16 pb-28 lg:pb-12 text-sm">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-outline-variant/20">
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href={homeHref}
              className="inline-flex items-center gap-3 group"
              aria-label={isAr ? "صلب SOLB الرئيسية" : "SOLB Home"}
            >
              <div className="w-10 h-10 rounded bg-graphite border border-steel-blue flex items-center justify-center shrink-0 shadow-inner">
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="30" cy="30" r="26" stroke="#354A59" strokeWidth="2" />
                  <path
                    d="M30 4 V0 M30 60 V56 M4 30 H0 M60 30 H56 M11.6 11.6 L8.8 8.8 M48.4 48.4 L51.2 51.2 M11.6 48.4 L8.8 51.2 M48.4 11.6 L51.2 8.8"
                    stroke="#F2BE3D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path d="M10 50 L50 10" stroke="#F2BE3D" strokeWidth="4" strokeLinecap="square" />
                  <circle cx="30" cy="30" r="9" fill="#111413" stroke="#F2BE3D" strokeWidth="2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-black text-xl text-pure-white tracking-tight">
                  {isAr ? "صُـلـب | SOLB" : "SOLB | صُـلـب"}
                </span>
                <span className="text-xs text-engineering-yellow font-medium">
                  {isAr ? "قص وتخريم الخرسانة بالرياض" : "Concrete Cutting & Core Drilling"}
                </span>
              </div>
            </Link>

            <p className="text-on-surface-variant/90 leading-relaxed text-sm max-w-sm">
              {content.footer.brandDesc}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-graphite rounded border border-steel-blue/40 text-xs text-off-white">
              <span className="w-2 h-2 rounded-full bg-engineering-yellow shrink-0"></span>
              <span>{content.footer.serviceAreaNotice}</span>
            </div>

            <p className="text-xs text-on-surface-variant/70 italic">
              {isAr ? SITE.taglineAr : SITE.taglineEn}
            </p>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-bold text-sm text-off-white uppercase tracking-wider">
              {content.footer.quickLinksTitle}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={homeHref}
                  className="hover:text-pure-white transition-colors"
                >
                  {content.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={contactHref}
                  className="hover:text-pure-white transition-colors"
                >
                  {content.nav.contact}
                </Link>
              </li>
              <li>
                <Link
                  href={content.nav.langSwitchHref}
                  className="hover:text-pure-white transition-colors font-medium text-engineering-yellow"
                >
                  {content.nav.langSwitchLabel}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-bold text-sm text-off-white uppercase tracking-wider">
              {content.footer.servicesTitle}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={isAr ? "/services/concrete-cutting/" : "/en/services/concrete-cutting/"}
                  className="hover:text-pure-white transition-colors"
                >
                  {content.nav.allServices.cutting}
                </Link>
              </li>
              <li>
                <Link
                  href={isAr ? "/services/core-drilling/" : "/en/services/core-drilling/"}
                  className="hover:text-pure-white transition-colors"
                >
                  {content.nav.allServices.drilling}
                </Link>
              </li>
              <li>
                <Link
                  href={isAr ? "/services/concrete-openings/" : "/en/services/concrete-openings/"}
                  className="hover:text-pure-white transition-colors"
                >
                  {content.nav.allServices.openings}
                </Link>
              </li>
              <li>
                <Link
                  href={isAr ? "/services/demolition-repair/" : "/en/services/demolition-repair/"}
                  className="hover:text-pure-white transition-colors"
                >
                  {content.nav.allServices.demolition}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-bold text-sm text-off-white uppercase tracking-wider">
              {content.footer.contactTitle}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-7 h-7 rounded bg-steel-blue/30 border border-steel-blue/50 flex items-center justify-center shrink-0 text-engineering-yellow">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.92c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.54c0-.54-.45-1-.99-1z" />
                  </svg>
                </span>
                <a
                  href={SITE.phoneHref}
                  onClick={() =>
                    trackPhoneClick({
                      pagePath: typeof window !== "undefined" ? window.location.pathname : "/",
                      pageLanguage: isAr ? "ar" : "en",
                      ctaLocation: "footer",
                    })
                  }
                  className="font-bold text-off-white hover:text-engineering-yellow transition-colors"
                >
                  <bdi dir="ltr" className="font-mono">{SITE.phoneDisplay}</bdi>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-7 h-7 rounded bg-steel-blue/30 border border-steel-blue/50 flex items-center justify-center shrink-0 text-emerald-400">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.82 14.1c-.24.68-1.22 1.3-1.7 1.38-.45.08-1.03.11-1.66-.1-.39-.13-.89-.29-1.53-.57-2.69-1.17-4.44-3.89-4.57-4.07-.13-.18-1.09-1.45-1.09-2.77 0-1.32.69-1.97.94-2.24.25-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4.06.61.56.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.15 1.37 2.46 1.52.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.11 1.78.84 2.09.99.31.15.52.23.6.36.08.13.08.76-.16 1.44z" />
                  </svg>
                </span>
                <a
                  href={SITE.whatsappHref}
                  onClick={() =>
                    trackWhatsAppClick({
                      pagePath: typeof window !== "undefined" ? window.location.pathname : "/",
                      pageLanguage: isAr ? "ar" : "en",
                      ctaLocation: "footer",
                    })
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-off-white hover:text-emerald-400 transition-colors"
                >
                  {isAr ? "محادثة واتساب فورية" : "Instant WhatsApp"}
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="w-7 h-7 rounded bg-steel-blue/30 border border-steel-blue/50 flex items-center justify-center shrink-0 text-engineering-yellow">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>{content.common.serviceAreaText}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Operational Statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant/70">
          <p>© {new Date().getFullYear()} {isAr ? "صلب SOLB" : "SOLB"}. {content.common.allRightsReserved}.</p>
          <p>{content.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
