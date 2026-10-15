import type { ReactNode } from "react";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactBar } from "@/components/ContactBar";
import { Analytics } from "@/components/Analytics";
import { enContent } from "@/content/en";
import { plexArabic, inter, manrope } from "@/lib/fonts";

export default function EnglishRootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`dark ${plexArabic.variable} ${inter.variable} ${manrope.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#202830" />
      </head>
      <body className="bg-graphite text-on-surface font-sans selection:bg-engineering-yellow selection:text-graphite antialiased min-h-screen flex flex-col justify-between">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:start-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-engineering-yellow focus:text-graphite focus:font-bold focus:rounded"
        >
          {enContent.common.skipToContent}
        </a>
        <Header content={enContent} />
        <main id="main" className="flex-1 pb-16 lg:pb-0">
          {children}
        </main>
        <Footer content={enContent} />
        <ContactBar content={enContent} />
        <Analytics />
      </body>
    </html>
  );
}
