import React from "react";
import type { Metadata } from "next";
import { enContent } from "@/content/en";
import { ServicePage } from "@/components/ServicePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  pageKey: "openings",
  title: enContent.pages.openings.metaTitle,
  description: enContent.pages.openings.metaDescription,
});

export default function EnglishConcreteOpeningsPage() {
  return (
    <ServicePage
      content={enContent}
      serviceData={enContent.pages.openings}
      serviceKey="openings"
    />
  );
}
