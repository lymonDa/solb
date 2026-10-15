import React from "react";
import Link from "next/link";
import "./globals.css";
import { SITE } from "@/config/site";

export default function NotFound() {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <head>
        <title>404 - الصفحة غير موجودة | Page Not Found | صلب SOLB</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-graphite text-on-surface min-h-screen flex items-center justify-center p-6 font-sans antialiased">
        <div className="max-w-md w-full p-8 rounded-xl bg-surface-container border border-steel-blue/40 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-steel-blue/30 border border-steel-blue text-engineering-yellow mx-auto flex items-center justify-center font-mono font-black text-2xl">
            404
          </div>

          <div className="space-y-2">
            <h1 className="font-headline font-bold text-2xl text-pure-white">
              الصفحة غير موجودة
            </h1>
            <p className="text-on-surface-variant text-sm">
              عذراً، لم نتمكن من العثور على الصفحة المطلوبة. يرجى التحقق من الرابط أو العودة للصفحة الرئيسية.
            </p>
          </div>

          <div className="pt-2 border-t border-outline-variant/20 space-y-2">
            <p className="font-bold text-sm text-off-white">
              Page Not Found
            </p>
            <p className="text-xs text-on-surface-variant">
              The page you are looking for does not exist or has been moved.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 py-3 px-4 rounded bg-engineering-yellow text-graphite font-bold text-sm hover:bg-[#DBA82E] transition-colors"
            >
              الرئيسية (عربي)
            </Link>
            <Link
              href="/en/"
              className="flex-1 py-3 px-4 rounded bg-steel-blue text-off-white font-bold text-sm hover:bg-steel-blue/90 transition-colors border border-steel-blue/80"
            >
              Home (English)
            </Link>
          </div>

          <div className="pt-2">
            <a
              href={SITE.phoneHref}
              className="text-xs text-engineering-yellow hover:underline block"
            >
              للتواصل المباشر: <bdi dir="ltr">{SITE.phoneDisplay}</bdi>
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
