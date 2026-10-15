import React from "react";
import type { Metadata } from "next";
import { arContent } from "@/content/ar";
import { ContactPage } from "@/components/ContactPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  lang: "ar",
  pageKey: "contact",
  title: arContent.pages.contact.metaTitle,
  description: arContent.pages.contact.metaDescription,
});

export default function ContactRoute() {
  return <ContactPage content={arContent} />;
}
