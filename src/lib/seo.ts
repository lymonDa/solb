import type { Metadata } from "next";
import { SITE } from "@/config/site";
import { PAGES, PageDefinition } from "@/config/pages";

export interface SeoProps {
  lang: "ar" | "en";
  pageKey: "home" | "cutting" | "drilling" | "openings" | "demolition" | "contact";
  title: string;
  description: string;
  ogImage?: string;
}

export function buildMetadata({ lang, pageKey, title, description, ogImage }: SeoProps): Metadata {
  const pageDef: PageDefinition = PAGES[pageKey] || PAGES.home;
  const canonicalPath = lang === "ar" ? pageDef.arPath : pageDef.enPath;
  const canonicalUrl = `${SITE.domain}${canonicalPath}`;
  const arUrl = `${SITE.domain}${pageDef.arPath}`;
  const enUrl = `${SITE.domain}${pageDef.enPath}`;

  const imageAsset = ogImage || `${SITE.domain}/images/solb-wall-saw-track-09.jpg`;

  return {
    title,
    description,
    metadataBase: new URL(SITE.domain),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: arUrl,
        "ar-SA": arUrl,
        en: enUrl,
        "x-default": arUrl, // The primary canonical language counterpart for this specific route
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: lang === "ar" ? SITE.brandFullNameAr : SITE.brandFullNameEn,
      locale: lang === "ar" ? "ar_SA" : "en_US",
      type: "website",
      images: [
        {
          url: imageAsset,
          width: 960,
          height: 1280,
          alt: lang === "ar" ? "صلب لقص وتخريم الخرسانة بالرياض" : "SOLB Concrete Cutting & Core Drilling Riyadh",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageAsset],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.svg",
      apple: "/favicon.svg",
    },
  };
}

export function generateOrganizationSchema(lang: "ar" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: lang === "ar" ? SITE.brandNameAr : SITE.brandNameEn,
    alternateName: lang === "ar" ? SITE.brandNameEn : SITE.brandNameAr,
    url: SITE.domain,
    logo: `${SITE.domain}/favicon.svg`,
    telephone: SITE.phoneRaw,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneRaw,
      contactType: "customer service",
      areaServed: "SA",
      availableLanguage: ["Arabic", "English"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: lang === "ar" ? "الرياض" : "Riyadh",
      addressCountry: "SA",
    },
  };
}

export function generateWebSiteSchema(lang: "ar" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: lang === "ar" ? SITE.brandFullNameAr : SITE.brandFullNameEn,
    url: `${SITE.domain}${lang === "ar" ? "/" : "/en/"}`,
    inLanguage: lang === "ar" ? "ar-SA" : "en",
  };
}

export function generateServiceSchema({
  lang,
  name,
  description,
  serviceType,
  path,
  image,
}: {
  lang: "ar" | "en";
  name: string;
  description: string;
  serviceType: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${SITE.domain}${path}`,
    provider: {
      "@type": "Organization",
      name: lang === "ar" ? SITE.brandNameAr : SITE.brandNameEn,
      url: SITE.domain,
      telephone: SITE.phoneRaw,
    },
    areaServed: {
      "@type": "City",
      name: lang === "ar" ? "الرياض" : "Riyadh",
    },
    ...(image ? { image: `${SITE.domain}${image}` } : {}),
  };
}

export function generateLocalBusinessSchema(lang: "ar" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: lang === "ar" ? SITE.brandNameAr : SITE.brandNameEn,
    alternateName: lang === "ar" ? SITE.brandNameEn : SITE.brandNameAr,
    description:
      lang === "ar"
        ? "خدمات متخصصة في قص الخرسانة المسلحة وتخريم الكور وفتح الأبواب والنوافذ بالرياض."
        : "Specialized concrete cutting, diamond core drilling, and wall openings in Riyadh, Saudi Arabia.",
    url: `${SITE.domain}${lang === "ar" ? "/" : "/en/"}`,
    telephone: SITE.phoneRaw,
    image: `${SITE.domain}/images/solb-wall-saw-track-09.jpg`,
    logo: `${SITE.domain}/favicon.svg`,
    areaServed: {
      "@type": "City",
      name: lang === "ar" ? "الرياض" : "Riyadh",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: lang === "ar" ? "الرياض" : "Riyadh",
      addressCountry: "SA",
    },
    priceRange: "$$",
  };
}

export function generateBreadcrumbSchema(
  lang: "ar" | "en",
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.domain}${item.path}`,
    })),
  };
}
