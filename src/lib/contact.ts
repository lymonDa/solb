import { SITE } from "@/config/site";

export function getPhoneHref(): string {
  return SITE.phoneHref;
}

export function getWhatsAppHref(prefilledText?: string): string {
  if (prefilledText) {
    return `${SITE.whatsappHref}?text=${encodeURIComponent(prefilledText)}`;
  }
  return SITE.whatsappHref;
}

export function getDisplayPhone(): string {
  return SITE.phoneDisplay;
}
