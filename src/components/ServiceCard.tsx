import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ServiceCardData } from "@/content/types";
import { IMAGES } from "@/content/images";

interface ServiceCardProps {
  card: ServiceCardData;
  lang: "ar" | "en";
  viewServiceLabel: string;
  index: number;
}

export function ServiceCard({ card, lang, viewServiceLabel, index }: ServiceCardProps) {
  const isAr = lang === "ar";
  const img = card.imageKey && IMAGES[card.imageKey] ? IMAGES[card.imageKey] : IMAGES.wallSawTrack09;

  // Visual index badge conforming to approved Stitch designs
  const tags = isAr
    ? ["01 // قص جداري", "02 // كور ألماسي", "03 // فتحات هندسية", "04 // إزالة ورفع"]
    : ["01 // Wall Sawing", "02 // Core Drilling", "03 // Openings", "04 // Removal & Rigging"];

  const specs = isAr
    ? ["أعماق تصل إلى 60 سم", 'أقطار من 1" إلى 16"', "حواف مستقيمة ودقيقة", "تأمين ورفع احترافي"]
    : ["Depths up to 60 cm", 'Diameters 1" to 16"', "Clean Edges & Framing", "Rigging & Secured Handling"];

  const badgeTag = tags[index] || `0${index + 1} // Service`;
  const specLabel = specs[index] || (isAr ? "تنفيذ ميداني" : "Field Execution");

  return (
    <div className="bg-pure-white rounded-xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
      <div>
        {/* Card Image with Stitch Tag */}
        <div className="relative h-52 w-full overflow-hidden bg-gray-100">
          <Image
            src={img.src}
            alt={isAr ? img.altAr : img.altEn}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 rtl:right-3 rtl:left-auto ltr:left-3 ltr:right-auto bg-graphite/90 text-engineering-yellow text-xs font-bold px-2.5 py-1 rounded shadow-sm font-mono">
            {badgeTag}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-graphite group-hover:text-steel-blue transition-colors">
            {card.title}
          </h3>
          <p className="text-xs sm:text-sm text-surface-bright mt-2.5 leading-relaxed">
            {card.shortDesc}
          </p>

          <ul className="mt-3.5 space-y-1.5 text-xs text-graphite/80 pt-3 border-t border-gray-100">
            {card.bullets.slice(0, 3).map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-engineering-yellow mt-1.5 shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action & Spec Footer */}
      <div className="px-5 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
        <Link
          href={card.href}
          className="inline-flex items-center gap-1 font-bold text-steel-blue hover:text-graphite transition-colors focus-visible:outline-2 focus-visible:outline-engineering-yellow rounded"
        >
          <span>{viewServiceLabel}</span>
          <svg
            className={`w-3.5 h-3.5 transition-transform ${isAr ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <span className="text-outline font-medium text-[11px] font-mono">{specLabel}</span>
      </div>
    </div>
  );
}
