"use client";

import React from "react";
import { SiteContent } from "@/content/types";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqAccordion } from "./FaqAccordion";
import { SITE } from "@/config/site";
import { generateLocalBusinessSchema, generateOrganizationSchema } from "@/lib/seo";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

interface ContactPageProps {
  content: SiteContent;
}

export function ContactPage({ content }: ContactPageProps) {
  const isAr = content.lang === "ar";
  const contactData = content.pages.contact;
  const homePath = isAr ? "/" : "/en/";
  const currentPath = isAr ? "/contact/" : "/en/contact/";

  const breadcrumbs = [
    { name: content.common.breadcrumbHome, path: homePath },
    { name: contactData.h1, path: currentPath },
  ];

  const localBusinessJsonLd = generateLocalBusinessSchema(content.lang);
  const organizationJsonLd = generateOrganizationSchema(content.lang);

  return (
    <article className="w-full bg-graphite text-on-surface pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationJsonLd, localBusinessJsonLd]).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumbs items={breadcrumbs} lang={content.lang} />

      {/* Hero & Tactical Status Header */}
      <section className="relative w-full bg-graphite py-12 lg:py-20 border-b border-outline-variant/30 overflow-hidden">
        {/* Subtle grid watermark */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none bg-grid-watermark"
          aria-hidden="true"
        />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-steel-blue/40 border border-outline-variant/50 rounded text-xs font-semibold text-engineering-yellow">
                <span className="w-2 h-2 rounded-full bg-engineering-yellow animate-pulse"></span>
                <span>{content.common.serviceAreaBadge}</span>
              </div>

              <h1 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-pure-white tracking-tight leading-tight">
                {contactData.h1}
              </h1>

              <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                {contactData.intro}
              </p>
            </div>

            {/* Tactical HUD Status Card */}
            <div className="lg:col-span-4 p-5 rounded-xl bg-surface-container border border-steel-blue/50 space-y-3 shadow-xl">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                <span className="text-xs font-bold text-engineering-yellow uppercase tracking-wider font-mono">
                  {contactData.hudStatusTitle}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-off-white font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  {isAr ? "ميداني 24/7" : "Field Direct 24/7"}
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span>{content.common.locationLabel}:</span>
                  <span className="font-bold text-off-white">{isAr ? "مدينة الرياض وضواحيها" : "Riyadh City & Suburbs"}</span>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span>{isAr ? "طريقة التواصل:" : "Method:"}</span>
                  <span className="font-bold text-engineering-yellow">{isAr ? "مباشر بدون وسطاء" : "Direct & Fast"}</span>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span>{content.common.modernEquipment}:</span>
                  <span className="font-bold text-off-white">{isAr ? "مناشير مسار + ماكينات كور" : "Track Saws + Core Rigs"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Cards: Direct Call & WhatsApp (Crisp Off-White Canvas Contrast) */}
      <section className="w-full bg-off-white py-16 border-b border-gray-200/80 text-graphite">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Phone Voice Call */}
            <div className="p-8 rounded-2xl bg-pure-white border border-gray-200/90 flex flex-col justify-between space-y-6 shadow-md hover:border-engineering-yellow transition-colors group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded bg-engineering-yellow text-graphite flex items-center justify-center font-bold shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.92c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.54c0-.54-.45-1-.99-1z" />
                  </svg>
                </div>
                <h2 className="font-headline font-bold text-2xl text-graphite group-hover:text-steel-blue transition-colors">
                  {contactData.callCard.title}
                </h2>
                <p className="text-surface-bright text-sm sm:text-base leading-relaxed">
                  {contactData.callCard.desc}
                </p>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-surface-bright">{content.common.phoneLabel}:</span>
                  <bdi dir="ltr" className="font-mono font-bold text-xl text-graphite">
                    {SITE.phoneDisplay}
                  </bdi>
                </div>
              </div>

              <a
                href={SITE.phoneHref}
                onClick={() =>
                  trackPhoneClick({
                    pagePath: currentPath,
                    pageLanguage: content.lang,
                    ctaLocation: "contact_page",
                  })
                }
                className="w-full flex items-center justify-center gap-2 bg-engineering-yellow hover:bg-[#DBA82E] active:scale-[0.98] text-graphite py-4 rounded font-bold text-base transition-all shadow-md min-h-[48px]"
                aria-label={`${contactData.callCard.btnText}: ${SITE.phoneDisplay}`}
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.92c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.54c0-.54-.45-1-.99-1z" />
                </svg>
                <span>{contactData.callCard.btnText}:</span>
                <bdi dir="ltr" className="font-mono font-bold">{SITE.phoneDisplay}</bdi>
              </a>
            </div>

            {/* Card 2: WhatsApp Chat */}
            <div className="p-8 rounded-2xl bg-pure-white border border-gray-200/90 flex flex-col justify-between space-y-6 shadow-md hover:border-steel-blue transition-colors group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded bg-steel-blue text-off-white flex items-center justify-center font-bold shadow-md">
                  <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.82 14.1c-.24.68-1.22 1.3-1.7 1.38-.45.08-1.03.11-1.66-.1-.39-.13-.89-.29-1.53-.57-2.69-1.17-4.44-3.89-4.57-4.07-.13-.18-1.09-1.45-1.09-2.77 0-1.32.69-1.97.94-2.24.25-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4.06.61.56.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.15 1.37 2.46 1.52.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.11 1.78.84 2.09.99.31.15.52.23.6.36.08.13.08.76-.16 1.44z" />
                  </svg>
                </div>
                <h2 className="font-headline font-bold text-2xl text-graphite group-hover:text-steel-blue transition-colors">
                  {contactData.whatsappCard.title}
                </h2>
                <p className="text-surface-bright text-sm sm:text-base leading-relaxed">
                  {contactData.whatsappCard.desc}
                </p>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-surface-bright">واتساب / WhatsApp:</span>
                  <bdi dir="ltr" className="font-mono font-bold text-xl text-steel-blue">
                    {SITE.phoneDisplay}
                  </bdi>
                </div>
              </div>

              <a
                href={SITE.whatsappHref}
                onClick={() =>
                  trackWhatsAppClick({
                    pagePath: currentPath,
                    pageLanguage: content.lang,
                    ctaLocation: "contact_page",
                  })
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-steel-blue hover:bg-steel-blue/90 text-off-white active:scale-[0.98] py-4 rounded font-bold text-base transition-all border border-steel-blue/80 shadow-md min-h-[48px]"
              >
                <svg className="w-5 h-5 shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.82 14.1c-.24.68-1.22 1.3-1.7 1.38-.45.08-1.03.11-1.66-.1-.39-.13-.89-.29-1.53-.57-2.69-1.17-4.44-3.89-4.57-4.07-.13-.18-1.09-1.45-1.09-2.77 0-1.32.69-1.97.94-2.24.25-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4.06.61.56.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.15 1.37 2.46 1.52.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.11 1.78.84 2.09.99.31.15.52.23.6.36.08.13.08.76-.16 1.44z" />
                </svg>
                <span>{contactData.whatsappCard.btnText}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to Send & Service Area Checklist (Dark Graphite) */}
      <section className="w-full bg-graphite py-16 border-b border-outline-variant/30">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-10 rounded-2xl bg-surface-container border border-outline-variant/40 shadow-xl space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold text-engineering-yellow uppercase tracking-wider block">
                {isAr ? "تسريع دراسة العمل" : "Speed Up Your Quote"}
              </span>
              <h2 className="font-headline font-extrabold text-2xl sm:text-3xl text-pure-white tracking-tight">
                {contactData.whatToSend.h2}
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                {contactData.whatToSend.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {contactData.whatToSend.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-graphite border border-steel-blue/30">
                  <span className="w-6 h-6 rounded bg-steel-blue text-off-white font-mono font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <span className="text-sm text-off-white/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-outline-variant/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span className="font-bold text-off-white">{contactData.serviceArea.h2}</span>
              </div>
              <p>{contactData.serviceArea.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion (Light Variant) */}
      <FaqAccordion
        h2={contactData.faqs.h2}
        items={contactData.faqs.items}
        variant="light"
      />
    </article>
  );
}
