import React from "react";
import type { Metadata } from "next";
import { enContent } from "@/content/en";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  pageKey: "drilling",
  title: enContent.pages.drilling.metaTitle,
  description: enContent.pages.drilling.metaDescription,
});

export default function EnglishCoreDrillingPage() {
  return (
    <ServicePage
      content={enContent}
      serviceData={enContent.pages.drilling}
      serviceKey="drilling"
    />
  );
}
