import React from "react";
import type { Metadata } from "next";
import { arContent } from "@/content/ar";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "ar",
  pageKey: "demolition",
  title: arContent.pages.demolition.metaTitle,
  description: arContent.pages.demolition.metaDescription,
});

export default function DemolitionRepairPage() {
  return (
    <ServicePage
      content={arContent}
      serviceData={arContent.pages.demolition}
      serviceKey="demolition"
    />
  );
}
