import React from "react";
import type { Metadata } from "next";
import { arContent } from "@/content/ar";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "ar",
  pageKey: "drilling",
  title: arContent.pages.drilling.metaTitle,
  description: arContent.pages.drilling.metaDescription,
});

export default function CoreDrillingPage() {
  return (
    <ServicePage
      content={arContent}
      serviceData={arContent.pages.drilling}
      serviceKey="drilling"
    />
  );
}
