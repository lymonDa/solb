import React from "react";
import type { Metadata } from "next";
import { arContent } from "@/content/ar";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "ar",
  pageKey: "cutting",
  title: arContent.pages.cutting.metaTitle,
  description: arContent.pages.cutting.metaDescription,
});

export default function ConcreteCuttingPage() {
  return (
    <ServicePage
      content={arContent}
      serviceData={arContent.pages.cutting}
      serviceKey="cutting"
    />
  );
}
