"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServicePageData, SiteContent } from "@/content/types";
import { Breadcrumbs } from "./Breadcrumbs";
import { FaqAccordion } from "./FaqAccordion";
import { CtaBand } from "./CtaBand";
import { IMAGES } from "@/content/images";
import { SITE } from "@/config/site";
import { PAGES } from "@/config/pages";
import { generateServiceSchema, generateOrganizationSchema } from "@/lib/seo";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

interface ServicePageProps {
  content: SiteContent;
  serviceData: ServicePageData;
  serviceKey: "cutting" | "drilling" | "openings" | "demolition";
}

export function ServicePage({ content, serviceData, serviceKey }: ServicePageProps) {
  const isAr = content.lang === "ar";
  const primaryImg = IMAGES[serviceData.primaryImageKey] || IMAGES.wallSawTrack09;
  const secondaryImg = serviceData.secondaryImageKey ? IMAGES[serviceData.secondaryImageKey] : null;

  const currentPath = isAr ? PAGES[serviceKey].arPath : PAGES[serviceKey].enPath;
  const homePath = isAr ? "/" : "/en/";

  const breadcrumbs = [
    { name: content.common.breadcrumbHome, path: homePath },
    { name: content.nav.services, path: homePath },
    { name: serviceData.h1, path: currentPath },
  ];

  // Service-specific visual metadata & badges
  const serviceIdentities = {
    cutting: {
      tag: isAr ? "01 // قص جداري وسكك توجيه" : "01 // Track Wall Sawing",
      spec: isAr ? "أعماق قص تصل إلى 60 سم" : "Cutting Depths up to 60 cm",
      metric1: isAr ? "مسارات مستقيمة 100%" : "100% Level Track",
      metric2: isAr ? "تبريد مائي مستمر" : "Continuous Water Cooling",
      metric3: isAr ? "بدون اهتزاز أو تصدع" : "Zero Vibration / No Cracks",
    },
    drilling: {
      tag: isAr ? "02 // تخريم كور ألماسي أسطواني" : "02 // Diamond Core Drilling",
      spec: isAr ? 'أقطار أسطوانية من 1" إلى 16"' : 'Core Diameters 1" to 16"',
      metric1: isAr ? "فتحات منتظمة للسباكة" : "Clean MEP Coring",
      metric2: isAr ? "اختراق حديد التسليح" : "Rebar Penetration",
      metric3: isAr ? "حواف أسطوانية تامة" : "Perfect Circular Cylinders",
    },
    openings: {
      tag: isAr ? "03 // فتحات هندسية للأبواب والمصاعد" : "03 // Structural Openings",
      spec: isAr ? "تأطير معماري محكوم" : "Architectural Frame Precision",
      metric1: isAr ? "فتحات أبواب وشبابيك" : "Doors & Windows",
      metric2: isAr ? "فتحات دكت التكييف" : "HVAC Duct Openings",
      metric3: isAr ? "حماية الجسور والأعمدة" : "Protected Structural Beams",
    },
    demolition: {
      tag: isAr ? "04 // قص وإزالة وتنزيل الكتل" : "04 // Concrete Removal & Rigging",
      spec: isAr ? "تأمين ورفع إنشائي" : "Secured Hoist & Rigging",
      metric1: isAr ? "تقطيع كتل محكومة" : "Controlled Block Cutting",
      metric2: isAr ? "تنزيل آمن بالروافع" : "Safe Crane Lowering",
      metric3: isAr ? "سلامة المنشأة القائمة" : "Protected Existing Frame",
    },
  };

  const identity = serviceIdentities[serviceKey];

  // Other related services
  const otherServices = (
    ["cutting", "drilling", "openings", "demolition"] as const
  )
    .filter((k) => k !== serviceKey)
    .map((k) => ({
      key: k,
      title: content.nav.allServices[k],
      href: isAr ? PAGES[k].arPath : PAGES[k].enPath,
      tag: serviceIdentities[k].tag,
    }));

  const serviceSchema = generateServiceSchema({
    lang: content.lang,
    name: serviceData.h1,
    description: serviceData.intro,
    serviceType: serviceData.h1,
    path: currentPath,
    image: primaryImg.src,
  });

  const orgSchema = generateOrganizationSchema(content.lang);

  return (
    <article className="w-full bg-graphite text-on-surface pt-20">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, orgSchema]).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs items={breadcrumbs} lang={content.lang} />

      {/* Hero Section */}
      <section className="relative w-full bg-graphite py-12 lg:py-20 border-b border-outline-variant/30 overflow-hidden">
        {/* Subtle grid watermark */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none bg-grid-watermark"
          aria-hidden="true"
        />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Text & CTAs (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 bg-steel-blue/40 border border-outline-variant/50 px-3.5 py-1.5 rounded self-start">
                <span className="w-2.5 h-2.5 rounded-full bg-engineering-yellow animate-pulse"></span>
                <span className="text-xs font-bold text-engineering-yellow font-mono">{identity.tag}</span>
                <span className="text-outline text-xs">/</span>
                <span className="text-xs text-primary font-medium">
                  {content.common.serviceAreaBadge}
                </span>
              </div>

              <h1 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-5xl text-pure-white tracking-tight leading-[1.2]">
                {serviceData.h1}
              </h1>

              <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                {serviceData.intro}
              </p>

              {/* Service-Specific Parameter Badge */}
              <div className="p-3 bg-surface-container border-s-4 border-engineering-yellow rounded-e text-sm font-semibold text-off-white flex items-center justify-between">
                <span>{identity.spec}</span>
                <span className="text-xs font-mono text-engineering-yellow">
                  {isAr ? "معتمد ميدانياً" : "Field Verified"}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={SITE.phoneHref}
                  onClick={() =>
                    trackPhoneClick({
                      pagePath: currentPath,
                      pageLanguage: content.lang,
                      serviceType: serviceKey,
                      ctaLocation: "service_detail",
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

                <a
                  href={SITE.whatsappHref}
                  onClick={() =>
                    trackWhatsAppClick({
                      pagePath: currentPath,
                      pageLanguage: content.lang,
                      serviceType: serviceKey,
                      ctaLocation: "service_detail",
                    })
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-steel-blue hover:bg-steel-blue/90 border border-outline-variant/40 text-off-white font-bold text-base px-5 py-3.5 rounded transition-all shadow-sm active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-engineering-yellow min-h-[48px]"
                >
                  <svg className="w-5 h-5 shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.82 14.1c-.24.68-1.22 1.3-1.7 1.38-.45.08-1.03.11-1.66-.1-.39-.13-.89-.29-1.53-.57-2.69-1.17-4.44-3.89-4.57-4.07-.13-.18-1.09-1.45-1.09-2.77 0-1.32.69-1.97.94-2.24.25-.26.54-.33.72-.33.18 0 .36 0 .52.01.17.01.4.06.61.56.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.31.32-.13.63.18.31.79 1.3 1.7 2.11 1.17 1.04 2.15 1.37 2.46 1.52.31.15.49.13.67-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.11 1.78.84 2.09.99.31.15.52.23.6.36.08.13.08.76-.16 1.44z" />
                  </svg>
                  <span>{content.common.whatsapp}</span>
                </a>
              </div>

              {/* Technical Trust Strip */}
              <div className="pt-3 border-t border-outline-variant/30 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-on-surface-variant font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-engineering-yellow shrink-0"></span>
                  <span>{identity.metric1}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-engineering-yellow shrink-0"></span>
                  <span>{identity.metric2}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-engineering-yellow shrink-0"></span>
                  <span>{identity.metric3}</span>
                </div>
              </div>
            </div>

            {/* Right: Primary Photograph (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden bg-surface-container border border-outline-variant/40 shadow-2xl group">
                <div className="relative h-[360px] sm:h-[420px] w-full bg-surface-dim overflow-hidden">
                  <Image
                    src={primaryImg.src}
                    alt={isAr ? primaryImg.altAr : primaryImg.altEn}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent opacity-60" />

                  <span className="absolute top-3 right-3 rtl:right-3 rtl:left-auto ltr:left-3 ltr:right-auto bg-graphite/90 border border-outline-variant/50 text-engineering-yellow text-xs font-bold px-2.5 py-1 rounded shadow-sm font-mono">
                    {identity.tag}
                  </span>
                </div>
                <div className="p-3.5 bg-surface-container-high border-t border-outline-variant/20 text-xs text-on-surface-variant flex items-center justify-between">
                  <span>{isAr ? primaryImg.captionAr : primaryImg.captionEn}</span>
                  <span className="text-engineering-yellow font-mono text-[11px]">صلب | الرياض</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Section: What We Cut / Drill / Open (Crisp Off-White Contrast) */}
      <section className="w-full bg-off-white text-graphite py-16 lg:py-20 border-b border-gray-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-steel-blue font-bold text-xs uppercase tracking-wider mb-1">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>{isAr ? "نطاق العمل والتطبيق" : "Scope & Applications"}</span>
            </div>
            <h2 className="font-headline font-extrabold text-2xl sm:text-3xl text-graphite tracking-tight">
              {serviceData.scopeTitle}
            </h2>
            {serviceData.scopeSubtitle && (
              <p className="text-surface-bright text-sm sm:text-base">
                {serviceData.scopeSubtitle}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.scopeItems.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-pure-white border border-gray-200/90 space-y-3 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded bg-steel-blue text-off-white flex items-center justify-center font-mono font-bold text-sm mb-3">
                    0{index + 1}
                  </div>
                  <h3 className="font-headline font-bold text-lg text-graphite">
                    {item.title}
                  </h3>
                  <p className="text-surface-bright text-xs sm:text-sm leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
                <div className="w-6 h-1 bg-engineering-yellow rounded-full mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section: Common Jobs (Dark Graphite) */}
      <section className="w-full bg-graphite py-16 lg:py-20 border-b border-outline-variant/30">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-engineering-yellow uppercase tracking-wider block">
                  {isAr ? "التطبيقات الميدانية الشائعة" : "Common Field Applications"}
                </span>
                <h2 className="font-headline font-extrabold text-2xl sm:text-3xl text-pure-white tracking-tight">
                  {serviceData.applicationsTitle}
                </h2>
              </div>

              <div className="space-y-4">
                {serviceData.applications.map((app, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-surface-container border border-outline-variant/30 space-y-2 hover:border-steel-blue transition-colors"
                  >
                    <h3 className="font-headline font-bold text-base text-off-white flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-engineering-yellow shrink-0"></span>
                      <span>{app.title}</span>
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed ps-4.5">
                      {app.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Image Column */}
            {secondaryImg && (
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden bg-surface-container border border-outline-variant/40 shadow-xl group">
                  <div className="relative h-[340px] sm:h-[400px] w-full bg-surface-dim overflow-hidden">
                    <Image
                      src={secondaryImg.src}
                      alt={isAr ? secondaryImg.altAr : secondaryImg.altEn}
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-3.5 bg-surface-container-high border-t border-outline-variant/20 text-xs text-on-surface-variant flex items-center justify-between">
                    <span>{isAr ? secondaryImg.captionAr : secondaryImg.captionEn}</span>
                    <span className="text-engineering-yellow font-mono text-[11px]">معدات صلب</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Preparation Checklist: How to Start & What to Send */}
      <section className="w-full bg-surface-dim py-16 lg:py-20 border-b border-outline-variant/30">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* How to Start */}
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/30 space-y-5 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-steel-blue"></span>
                <h2 className="font-headline font-bold text-xl text-pure-white">
                  {serviceData.howToStartTitle}
                </h2>
              </div>
              <ol className="space-y-3.5 text-sm text-on-surface-variant">
                {serviceData.howToStartSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded bg-steel-blue text-off-white font-mono font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* What to Send */}
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/30 space-y-5 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-engineering-yellow"></span>
                <h2 className="font-headline font-bold text-xl text-engineering-yellow">
                  {serviceData.whatToSendTitle}
                </h2>
              </div>
              <ul className="space-y-3.5 text-sm text-on-surface-variant">
                {serviceData.whatToSendItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-graphite/60 p-3 rounded border border-steel-blue/20">
                    <span className="w-2 h-2 rounded-full bg-engineering-yellow mt-1.5 shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Specific FAQ Accordion */}
      <FaqAccordion
        h2={serviceData.faqsTitle}
        items={serviceData.faqs}
        variant="light"
      />

      {/* Related Services Navigation */}
      <section className="w-full bg-graphite py-14 border-b border-outline-variant/30 text-sm">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-xl mb-6">
            <span className="text-xs font-bold text-engineering-yellow uppercase tracking-wider block mb-1">
              {isAr ? "خدمات إضافية" : "Additional Services"}
            </span>
            <h2 className="font-headline font-bold text-lg sm:text-xl text-off-white">
              {serviceData.relatedServicesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherServices.map((service) => (
              <Link
                key={service.key}
                href={service.href}
                className="p-5 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 hover:border-steel-blue transition-all duration-200 flex items-center justify-between group shadow-sm"
              >
                <div>
                  <span className="text-[11px] font-mono text-engineering-yellow block mb-0.5">{service.tag}</span>
                  <span className="font-bold text-off-white group-hover:text-pure-white transition-colors">
                    {service.title}
                  </span>
                </div>
                <div className="w-8 h-8 rounded bg-steel-blue/30 group-hover:bg-steel-blue flex items-center justify-center shrink-0 transition-colors text-off-white">
                  <svg
                    className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        h2={content.home.ctaBand.h2}
        desc={content.home.ctaBand.desc}
        checklist={content.home.ctaBand.checklist}
        callNowLabel={content.common.callNow}
        whatsappLabel={content.common.whatsapp}
        lang={content.lang}
      />
    </article>
  );
}
