"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteContent } from "@/content/types";
import { SITE } from "@/config/site";
import { trackPhoneClick, trackLanguageSwitch } from "@/lib/tracking";

interface HeaderProps {
  content: SiteContent;
  currentPath?: string;
}

export function Header({ content, currentPath: propPath }: HeaderProps) {
  const pathname = usePathname();
  const currentPath = propPath || pathname || "";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const isAr = content.lang === "ar";
  const homeHref = isAr ? "/" : "/en/";
  const contactHref = isAr ? "/contact/" : "/en/contact/";

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const serviceLinks = [
    {
      title: content.nav.allServices.cutting,
      href: isAr ? "/services/concrete-cutting/" : "/en/services/concrete-cutting/",
      tag: isAr ? "01 // قص جداري" : "01 // Wall Sawing",
    },
    {
      title: content.nav.allServices.drilling,
      href: isAr ? "/services/core-drilling/" : "/en/services/core-drilling/",
      tag: isAr ? "02 // كور ألماسي" : "02 // Core Drilling",
    },
    {
      title: content.nav.allServices.openings,
      href: isAr ? "/services/concrete-openings/" : "/en/services/concrete-openings/",
      tag: isAr ? "03 // فتحات هندسية" : "03 // Openings",
    },
    {
      title: content.nav.allServices.demolition,
      href: isAr ? "/services/demolition-repair/" : "/en/services/demolition-repair/",
      tag: isAr ? "04 // إزالة ورفع" : "04 // Removal & Repair",
    },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-graphite/95 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href={homeHref}
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-engineering-yellow rounded"
            aria-label={isAr ? "صلب SOLB الرئيسية" : "SOLB Home"}
          >
            {/* Engineered Circular Diamond Blade Symbol */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded bg-surface border border-steel-blue/80 flex items-center justify-center relative shrink-0 transition-transform group-hover:scale-105 shadow-inner">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8"
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
              <div className="flex items-center gap-1.5 leading-none">
                <span className="font-headline font-black text-xl sm:text-2xl text-pure-white tracking-tight">
                  {isAr ? "صُـلـب" : "SOLB"}
                </span>
                <span className="w-1 h-3.5 bg-engineering-yellow rounded-xs"></span>
                <span className="font-headline font-bold text-sm sm:text-base text-off-white tracking-wider">
                  {isAr ? "SOLB" : "صُـلـب"}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-on-surface-variant leading-tight mt-0.5">
                {isAr ? "قص وتخريم الخرسانة بالرياض" : "Concrete Cutting & Coring Riyadh"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-medium" aria-label="Main Navigation">
            <Link
              href={homeHref}
              className={`px-3 py-2 rounded transition-colors ${
                currentPath === homeHref
                  ? "text-engineering-yellow font-bold bg-surface-container"
                  : "text-on-surface-variant hover:text-pure-white hover:bg-surface-container"
              }`}
            >
              {content.nav.home}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                aria-expanded={servicesDropdownOpen}
                className={`px-3 py-2 rounded flex items-center gap-1.5 transition-colors ${
                  currentPath.includes("/services/")
                    ? "text-engineering-yellow font-bold bg-surface-container"
                    : "text-on-surface-variant hover:text-pure-white hover:bg-surface-container"
                }`}
              >
                <span>{content.nav.services}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  className={`absolute top-full mt-1 w-72 bg-graphite border border-steel-blue/60 rounded-lg shadow-2xl py-2 z-50 ${
                    isAr ? "right-0" : "left-0"
                  }`}
                >
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className={`block px-4 py-2.5 transition-colors ${
                        currentPath === item.href
                          ? "bg-steel-blue text-pure-white font-bold"
                          : "text-on-surface hover:text-pure-white hover:bg-surface-container"
                      }`}
                    >
                      <span className="block text-[11px] font-mono text-engineering-yellow">{item.tag}</span>
                      <span className="text-sm font-semibold">{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={contactHref}
              className={`px-3 py-2 rounded transition-colors ${
                currentPath === contactHref
                  ? "text-engineering-yellow font-bold bg-surface-container"
                  : "text-on-surface-variant hover:text-pure-white hover:bg-surface-container"
              }`}
            >
              {content.nav.contact}
            </Link>
          </nav>

          {/* Action Button & Contacts */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Tactical Location Badge (Desktop) */}
            <div className="hidden xl:flex items-center bg-steel-blue/40 border border-outline-variant/40 px-3 py-1.5 rounded text-xs font-semibold">
              <span className="text-engineering-yellow font-bold">
                {isAr ? "مدينة الرياض" : "Riyadh City"}
              </span>
              <span className="mx-2 text-outline">|</span>
              <span className="text-on-surface-variant">
                {isAr ? "ميداني 24/7" : "Field 24/7"}
              </span>
            </div>

            {/* Direct Phone Call Button */}
            <a
              href={SITE.phoneHref}
              onClick={() =>
                trackPhoneClick({
                  pagePath: currentPath,
                  pageLanguage: isAr ? "ar" : "en",
                  ctaLocation: "header",
                })
              }
              className="inline-flex items-center gap-2 bg-engineering-yellow hover:bg-[#DBA82E] text-graphite font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-engineering-yellow min-h-[44px]"
              aria-label={`${content.common.callNow}: ${SITE.phoneDisplay}`}
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.92c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.54c0-.54-.45-1-.99-1z" />
              </svg>
              <span className="hidden md:inline">{isAr ? "اتصال فوري:" : "Direct Call:"}</span>
              <bdi dir="ltr" className="tracking-wide font-mono font-bold">
                {SITE.phoneDisplay}
              </bdi>
            </a>

            {/* Language Switch */}
            <Link
              href={content.nav.langSwitchHref}
              hrefLang={isAr ? "en" : "ar"}
              lang={isAr ? "en" : "ar"}
              onClick={() =>
                trackLanguageSwitch({
                  fromLang: isAr ? "ar" : "en",
                  toLang: isAr ? "en" : "ar",
                  pagePath: currentPath,
                })
              }
              className="px-2.5 py-1.5 rounded text-xs font-bold text-on-surface-variant hover:text-pure-white hover:bg-steel-blue border border-outline-variant/40 transition-colors flex items-center gap-1.5 min-h-[40px]"
              aria-label={isAr ? "Switch to English" : "التبديل إلى اللغة العربية"}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span>{content.nav.langSwitchLabel}</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded text-off-white hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-engineering-yellow min-h-[44px] min-w-[44px] flex items-center justify-center border border-outline-variant/30"
              aria-label={mobileMenuOpen ? content.nav.menuClose : content.nav.menuOpen}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-graphite border-b border-steel-blue/50 px-4 pt-3 pb-6 space-y-4 shadow-2xl">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              <Link
                href={homeHref}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded font-medium text-base ${
                  currentPath === homeHref
                    ? "text-engineering-yellow bg-surface-container font-bold"
                    : "text-on-surface hover:text-pure-white hover:bg-surface-container"
                }`}
              >
                {content.nav.home}
              </Link>

              <div className="py-2 border-y border-outline-variant/20 my-1">
                <span className="block px-3 pb-1 text-xs font-bold text-engineering-yellow uppercase tracking-wider">
                  {content.nav.services}
                </span>
                <div className="flex flex-col space-y-1 mt-1">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2 rounded text-sm transition-colors flex items-center justify-between ${
                        currentPath === item.href
                          ? "text-pure-white bg-steel-blue font-bold"
                          : "text-on-surface-variant hover:text-pure-white hover:bg-surface-container"
                      }`}
                    >
                      <span>{item.title}</span>
                      <span className="text-[10px] font-mono text-engineering-yellow">{item.tag}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={contactHref}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded font-medium text-base ${
                  currentPath === contactHref
                    ? "text-engineering-yellow bg-surface-container font-bold"
                    : "text-on-surface hover:text-pure-white hover:bg-surface-container"
                }`}
              >
                {content.nav.contact}
              </Link>
            </nav>

            {/* Mobile Direct Call Action */}
            <div className="pt-2">
              <a
                href={SITE.phoneHref}
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackPhoneClick({
                    pagePath: currentPath,
                    pageLanguage: isAr ? "ar" : "en",
                    ctaLocation: "header",
                  });
                }}
                className="flex items-center justify-center gap-2 bg-engineering-yellow text-graphite font-bold w-full py-3.5 rounded text-base shadow-md active:bg-[#DBA82E] min-h-[48px]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.92c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.54c0-.54-.45-1-.99-1z" />
                </svg>
                <span>{content.common.callNow}</span>
                <span className="opacity-40">|</span>
                <bdi dir="ltr" className="font-mono font-bold">{SITE.phoneDisplay}</bdi>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Scrim Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
