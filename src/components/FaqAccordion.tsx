import React from "react";
import { FaqItem } from "@/content/types";

interface FaqAccordionProps {
  tag?: string;
  h2: string;
  subtitle?: string;
  items: FaqItem[];
  variant?: "light" | "dark";
}

export function FaqAccordion({
  tag,
  h2,
  subtitle,
  items,
  variant = "light",
}: FaqAccordionProps) {
  const isLight = variant === "light";

  return (
    <section
      className={`w-full py-16 lg:py-24 border-b ${
        isLight
          ? "bg-off-white text-graphite border-gray-200/80"
          : "bg-surface-container-low text-on-surface border-outline-variant/30"
      }`}
      id="faq"
    >
      <div className="max-w-[960px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12 space-y-2">
          {tag && (
            <span
              className={`text-xs font-bold uppercase tracking-wider block ${
                isLight ? "text-steel-blue" : "text-engineering-yellow"
              }`}
            >
              {tag}
            </span>
          )}
          <h2
            className={`font-headline font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight ${
              isLight ? "text-graphite" : "text-pure-white"
            }`}
          >
            {h2}
          </h2>
          {subtitle && (
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isLight ? "text-surface-bright" : "text-on-surface-variant"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {items.map((item, idx) => (
            <details
              key={idx}
              className={`group rounded-xl border transition-all duration-200 shadow-sm overflow-hidden ${
                isLight
                  ? "bg-pure-white border-gray-200/90 hover:border-steel-blue/50"
                  : "bg-surface-container border-outline-variant/30 hover:border-steel-blue"
              }`}
              open={idx === 0}
            >
              <summary
                className={`p-5 cursor-pointer flex items-center justify-between text-base font-bold transition-colors select-none focus-visible:outline-2 focus-visible:outline-engineering-yellow ${
                  isLight
                    ? "text-graphite hover:text-steel-blue"
                    : "text-off-white hover:text-pure-white"
                }`}
              >
                <span className="flex items-center gap-3 pe-4">
                  <span
                    className={`w-6 h-6 rounded flex items-center justify-center shrink-0 text-xs font-mono font-bold ${
                      isLight
                        ? "bg-steel-blue/10 text-steel-blue"
                        : "bg-steel-blue/30 text-engineering-yellow"
                    }`}
                  >
                    Q
                  </span>
                  <span>{item.q}</span>
                </span>
                <span
                  className={`faq-icon w-6 h-6 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isLight ? "text-steel-blue" : "text-engineering-yellow"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div
                className={`px-5 pb-5 pt-0 text-xs sm:text-sm leading-relaxed ${
                  isLight ? "text-surface-bright" : "text-on-surface-variant"
                }`}
              >
                <div
                  className={`pt-3 border-t ${
                    isLight ? "border-gray-100" : "border-outline-variant/20"
                  }`}
                >
                  {item.a}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
