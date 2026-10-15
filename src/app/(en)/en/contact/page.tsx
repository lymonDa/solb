import React from "react";
import type { Metadata } from "next";
import { enContent } from "@/content/en";
import { ContactPage } from "@/components/ContactPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "en",
  pageKey: "contact",
  title: enContent.pages.contact.metaTitle,
  description: enContent.pages.contact.metaDescription,
});

export default function EnglishContactRoute() {
  return <ContactPage content={enContent} />;
}
