import React from "react";
import Image from "next/image";
import { IMAGES } from "@/content/images";
import { SITE } from "@/config/site";

interface GalleryItem {
  title: string;
  caption: string;
  imageKey: string;
}

interface EquipmentGalleryProps {
  tag: string;
  h2: string;
  subtitle: string;
  disclaimer: string;
  items: GalleryItem[];
  lang: "ar" | "en";
}

export function EquipmentGallery({
  tag,
  h2,
  subtitle,
  disclaimer,
  items,
  lang,
}: EquipmentGalleryProps) {
  const isAr = lang === "ar";

  const categoryTags = isAr
    ? ["المعدات الميدانية", "إزالة وتنزيل", "مسار مائل", "تخريم أرضيات", "فتح ممر / باب", "وحدة الكور الماسي"]
    : ["Field Equipment", "Removal & Rigging", "Inclined Track", "Floor Coring", "Doorway Opening", "Core Rig Unit"];

  const specBadges = isAr
    ? ["قص جداري احترافي", "تأمين إنشائي", "استقامة 100%", "بدون اهتزاز", "جدران مسلحة", "جاهزية ميدانية"]
    : ["Precision Wall Cut", "Secured Rigging", "100% Level", "Zero Vibration", "Reinforced Walls", "Field Ready"];

  return (
    <section className="w-full bg-graphite py-16 lg:py-24 border-t border-outline-variant/30" id="gallery">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-engineering-yellow font-bold text-xs uppercase tracking-wider block">
              {tag}
            </span>
            <h2 className="font-headline font-extrabold text-2xl sm:text-3xl lg:text-4xl text-off-white tracking-tight">
              {h2}
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-engineering-yellow hover:text-off-white text-sm font-bold transition-colors bg-surface-container px-3.5 py-2 rounded border border-steel-blue/40"
            >
              <span>{isAr ? "استفسر عن معدات مشروعك عبر واتساب" : "Inquire About Equipment via WhatsApp"}</span>
              <svg className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* 6 Authentic Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const asset = IMAGES[item.imageKey] || IMAGES.wallSawTrack09;
            const catTag = categoryTags[index] || (isAr ? "توثيق ميداني" : "Field Photo");
            const specBadge = specBadges[index] || (isAr ? "تنفيذ صلب" : "SOLB Execution");

            return (
              <div
                key={index}
                className="bg-surface-container rounded-xl overflow-hidden border border-outline-variant/40 group shadow-md flex flex-col justify-between hover:border-steel-blue/70 transition-all duration-300"
              >
                <div>
                  <div className="relative h-64 w-full bg-surface-dim overflow-hidden">
                    <Image
                      src={asset.src}
                      alt={isAr ? asset.altAr : asset.altEn}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent opacity-60" />
                    
                    <span className="absolute top-3 right-3 rtl:right-3 rtl:left-auto ltr:left-3 ltr:right-auto bg-graphite/90 border border-outline-variant/40 text-engineering-yellow text-xs font-bold px-2.5 py-1 rounded shadow-sm font-mono">
                      {catTag}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-bold text-off-white group-hover:text-engineering-yellow transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between text-[11px] text-outline font-mono">
                    <span>{isAr ? "صلب | الرياض" : "SOLB | Riyadh"}</span>
                    <span className="text-engineering-yellow font-semibold">{specBadge}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-on-surface-variant/70 italic">
            {disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
