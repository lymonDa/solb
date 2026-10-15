import React from "react";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/seo";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  lang: "ar" | "en";
}

export function Breadcrumbs({ items, lang }: BreadcrumbsProps) {
  const isAr = lang === "ar";
  const jsonLd = generateBreadcrumbSchema(lang, items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="w-full bg-surface-container py-3 border-b border-outline-variant/20 text-xs">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <ol className="flex items-center gap-1.5 text-on-surface-variant flex-wrap">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <li key={item.path} className="flex items-center gap-1.5">
                  {index > 0 && (
                    <svg
                      className={`w-3.5 h-3.5 text-outline shrink-0 ${isAr ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                  {isLast ? (
                    <span className="text-pure-white font-bold" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.path}
                      className="hover:text-engineering-yellow transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
