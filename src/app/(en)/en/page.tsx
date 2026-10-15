import React from "react";
import type { Metadata } from "next";
import { enContent } from "@/content/en";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { WhySolb } from "@/components/WhySolb";
import { Workflow } from "@/components/Workflow";
import { EquipmentGallery } from "@/components/EquipmentGallery";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand } from "@/components/CtaBand";
import {
  buildMetadata,
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  pageKey: "home",
  title: enContent.home.metaTitle,
  description: enContent.home.metaDescription,
});

export default function EnglishHomePage() {
  const localBusinessJsonLd = generateLocalBusinessSchema("en");
  const organizationJsonLd = generateOrganizationSchema("en");
  const websiteJsonLd = generateWebSiteSchema("en");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationJsonLd, websiteJsonLd, localBusinessJsonLd]).replace(/</g, "\\u003c"),
        }}
      />

      {/* 1. Hero Section (Graphite Dark) */}
      <Hero content={enContent} />

      {/* 2. Core Services Section (Crisp Off-White with Pure White Cards) */}
      <section className="w-full bg-off-white text-graphite py-16 lg:py-24 border-b border-gray-200/80" id="services">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-gray-200/60 pb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-steel-blue font-bold text-xs uppercase tracking-wider mb-2">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>{enContent.home.servicesSection.tag}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-graphite tracking-tight">
                {enContent.home.servicesSection.h2}
              </h2>
            </div>
            <p className="text-sm sm:text-base text-surface-bright max-w-md">
              {enContent.home.servicesSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enContent.home.servicesSection.cards.map((card, idx) => (
              <ServiceCard
                key={card.key}
                card={card}
                lang="en"
                viewServiceLabel={enContent.common.viewService}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why SOLB / Engineering Standards (Dark Graphite) */}
      <WhySolb
        tag={enContent.home.whyUs.tag}
        h2={enContent.home.whyUs.h2}
        subtitle={enContent.home.whyUs.subtitle}
        points={enContent.home.whyUs.points}
        lang="en"
      />

      {/* 4. Execution Workflow Steps (Subterranean Dark Canvas) */}
      <Workflow
        tag={enContent.home.workflow.tag}
        h2={enContent.home.workflow.h2}
        subtitle={enContent.home.workflow.subtitle}
        steps={enContent.home.workflow.steps}
        lang="en"
      />

      {/* 5. Authentic Equipment Gallery (Dark Graphite) */}
      <EquipmentGallery
        tag={enContent.home.gallery.tag}
        h2={enContent.home.gallery.h2}
        subtitle={enContent.home.gallery.subtitle}
        disclaimer={enContent.home.gallery.disclaimer}
        items={enContent.home.gallery.items}
        lang="en"
      />

      {/* 6. Service Area Coverage (Technical Structural Panel) */}
      <section className="w-full bg-surface-dim py-16 border-b border-outline-variant/30">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-10 rounded-2xl bg-surface-container border border-outline-variant/40 shadow-xl space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-engineering-yellow font-bold text-xs uppercase tracking-wider block">
                {enContent.home.serviceArea.tag}
              </span>
              <h2 className="font-headline font-extrabold text-2xl sm:text-3xl text-pure-white tracking-tight">
                {enContent.home.serviceArea.h2}
              </h2>
              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                {enContent.home.serviceArea.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-off-white/90">
              {enContent.home.serviceArea.bulletPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded bg-graphite/70 border border-steel-blue/30">
                  <span className="w-2 h-2 rounded-full bg-engineering-yellow mt-1.5 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Accordion (Crisp Off-White Contrast) */}
      <FaqAccordion
        tag={enContent.home.faq.tag}
        h2={enContent.home.faq.h2}
        subtitle={enContent.home.faq.subtitle}
        items={enContent.home.faq.items}
        variant="light"
      />

      {/* 8. Quotation CTA Band (Contained Dark Container) */}
      <CtaBand
        h2={enContent.home.ctaBand.h2}
        desc={enContent.home.ctaBand.desc}
        checklist={enContent.home.ctaBand.checklist}
        callNowLabel={enContent.common.callNow}
        whatsappLabel={enContent.common.whatsapp}
        lang="en"
      />
    </>
  );
}
