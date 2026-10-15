import React from "react";
import type { Metadata } from "next";
import { enContent } from "@/content/en";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  pageKey: "cutting",
  title: enContent.pages.cutting.metaTitle,
  description: enContent.pages.cutting.metaDescription,
});

export default function EnglishConcreteCuttingPage() {
  return (
    <ServicePage
      content={enContent}
      serviceData={enContent.pages.cutting}
      serviceKey="cutting"
    />
  );
}
