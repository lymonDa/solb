import React from "react";
import type { Metadata } from "next";
import { arContent } from "@/content/ar";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "ar",
  pageKey: "openings",
  title: arContent.pages.openings.metaTitle,
  description: arContent.pages.openings.metaDescription,
});

export default function ConcreteOpeningsPage() {
  return (
    <ServicePage
      content={arContent}
      serviceData={arContent.pages.openings}
      serviceKey="openings"
    />
  );
}
