import { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import { PAGES } from "@/config/pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  Object.values(PAGES).forEach((page) => {
    const isHome = page.key === "home";
    const isContact = page.key === "contact";
    const priority = isHome ? 1.0 : isContact ? 0.7 : 0.8;

    const arUrl = `${SITE.domain}${page.arPath}`;
    const enUrl = `${SITE.domain}${page.enPath}`;

    // Arabic canonical URL with reciprocal alternates
    sitemapEntries.push({
      url: arUrl,
      changeFrequency: "weekly",
      priority,
      alternates: {
        languages: {
          ar: arUrl,
          "ar-SA": arUrl,
          en: enUrl,
          "x-default": arUrl,
        },
      },
    });

    // English canonical URL with reciprocal alternates
    sitemapEntries.push({
      url: enUrl,
      changeFrequency: "weekly",
      priority,
      alternates: {
        languages: {
          ar: arUrl,
          "ar-SA": arUrl,
          en: enUrl,
          "x-default": arUrl,
        },
      },
    });
  });

  return sitemapEntries;
}
