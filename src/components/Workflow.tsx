import React from "react";

interface WorkflowStep {
  number: string;
  title: string;
  desc: string;
}

interface WorkflowProps {
  tag: string;
  h2: string;
  subtitle: string;
  steps: WorkflowStep[];
  lang?: "ar" | "en";
}

export function Workflow({ tag, h2, subtitle, steps, lang = "ar" }: WorkflowProps) {
  const isAr = lang === "ar";

  return (
    <section className="w-full bg-surface-dim py-16 lg:py-24 text-on-surface border-b border-outline-variant/30" id="steps">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-engineering-yellow uppercase tracking-wider block">
            {tag}
          </span>
          <h2 className="font-headline font-extrabold text-2xl sm:text-3xl lg:text-4xl text-off-white tracking-tight">
            {h2}
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-${steps.length} gap-6 relative`}>
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;

            return (
              <div
                key={idx}
                className="bg-surface-container-high border border-outline-variant/40 p-6 rounded-xl relative shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded flex items-center justify-center font-bold text-lg font-mono ${
                        isLast
                          ? "bg-engineering-yellow text-graphite shadow-sm"
                          : "bg-steel-blue text-off-white"
                      }`}
                    >
                      {step.number.replace(/^0+/, "") || idx + 1}
                    </div>
                    <span className="text-xs font-mono text-outline">
                      {isAr ? `المرحلة 0${idx + 1}` : `Stage 0${idx + 1}`}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-off-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div
                  className={`w-full h-0.5 mt-5 rounded ${
                    isLast ? "bg-engineering-yellow" : "bg-steel-blue/40"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Engineering Safety Reassurance Banner */}
        <div className="mt-8 bg-surface-container border border-outline-variant/30 p-4 rounded-xl flex items-center gap-3 text-on-surface-variant max-w-2xl mx-auto shadow-sm">
          <div className="w-8 h-8 rounded bg-steel-blue/30 border border-steel-blue/50 flex items-center justify-center shrink-0 text-engineering-yellow">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed">
            <strong className="text-off-white">
              {isAr ? "معايير السلامة الإنشائية: " : "Structural Safety Standards: "}
            </strong>
            {isAr
              ? "يقوم فريقنا الميداني بالتأكد من عدم الإضرار بالأعمدة والجسور الخرسانية الحاملة للمبنى قبل البدء بأي عمل."
              : "Our field team ensures that load-bearing columns and beams remain fully protected before any cutting or coring begins."}
          </p>
        </div>
      </div>
    </section>
  );
}
