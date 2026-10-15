import React from "react";

interface WhyPoint {
  title: string;
  desc: string;
}

interface WhySolbProps {
  tag: string;
  h2: string;
  subtitle: string;
  points: WhyPoint[];
  lang?: "ar" | "en";
}

export function WhySolb({ tag, h2, subtitle, points }: WhySolbProps) {
  return (
    <section className="w-full bg-graphite py-16 lg:py-24 text-off-white border-y border-outline-variant/30" id="why-solb">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-engineering-yellow font-bold text-xs uppercase tracking-wider">
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
            </svg>
            <span>{tag}</span>
          </div>

          <h2 className="font-headline font-extrabold text-2xl sm:text-3xl lg:text-4xl text-off-white tracking-tight">
            {h2}
          </h2>

          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-surface-container border border-outline-variant/40 p-6 rounded-xl flex flex-col justify-between hover:border-steel-blue transition-colors shadow-md"
            >
              <div>
                <span className="text-3xl font-extrabold text-engineering-yellow block mb-3 font-mono">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-bold text-off-white mb-2">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {point.desc}
                </p>
              </div>

              {/* Tactile yellow mechanical accent line */}
              <div className="w-8 h-1 bg-engineering-yellow rounded-full mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
