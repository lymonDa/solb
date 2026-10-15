import React from "react";
import type { Metadata } from "next";
import { enContent } from "@/content/en";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  pageKey: "demolition",
  title: enContent.pages.demolition.metaTitle,
  description: enContent.pages.demolition.metaDescription,
});

export default function EnglishDemolitionRepairPage() {
  return (
    <ServicePage
      content={enContent}
      serviceData={enContent.pages.demolition}
      serviceKey="demolition"
    />
  );
}
