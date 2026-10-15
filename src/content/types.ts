export interface NavItem {
  title: string;
  href: string;
  key?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ServiceCardData {
  key: string;
  title: string;
  shortDesc: string;
  href: string;
  imageKey?: string;
  bullets: string[];
}

export interface ServicePageData {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  scopeTitle: string;
  scopeSubtitle?: string;
  scopeItems: { title: string; desc: string }[];
  applicationsTitle: string;
  applications: { title: string; desc: string }[];
  howToStartTitle: string;
  howToStartSteps: string[];
  whatToSendTitle: string;
  whatToSendItems: string[];
  faqsTitle: string;
  faqs: FaqItem[];
  relatedServicesTitle: string;
  primaryImageKey: string;
  secondaryImageKey?: string;
}

export interface SiteContent {
  lang: "ar" | "en";
  dir: "rtl" | "ltr";
  
  // Navigation
  nav: {
    home: string;
    services: string;
    allServices: {
      cutting: string;
      drilling: string;
      openings: string;
      demolition: string;
    };
    contact: string;
    callNow: string;
    whatsapp: string;
    langSwitchLabel: string;
    langSwitchHref: string;
    menuOpen: string;
    menuClose: string;
  };

  // Common CTAs & Labels
  common: {
    callNow: string;
    whatsapp: string;
    requestQuote: string;
    serviceAreaBadge: string;
    serviceAreaText: string;
    directContact: string;
    modernEquipment: string;
    phoneLabel: string;
    locationLabel: string;
    hoursLabel: string;
    readMore: string;
    viewService: string;
    allRightsReserved: string;
    skipToContent: string;
    breadcrumbHome: string;
    whatToSendHeading: string;
  };

  // Mobile persistent bar
  mobileBar: {
    call: string;
    whatsapp: string;
    callAria: string;
    whatsappAria: string;
  };

  // Homepage
  home: {
    metaTitle: string;
    metaDescription: string;
    hero: {
      badge: string;
      h1: string;
      intro: string;
      tagline: string;
      hudStatusTitle: string;
      hudStatusValue: string;
      hudAreaTitle: string;
      hudAreaValue: string;
      hudContactTitle: string;
      hudContactValue: string;
      imageKey: string;
      imageCaption: string;
    };
    servicesSection: {
      tag: string;
      h2: string;
      subtitle: string;
      cards: ServiceCardData[];
    };
    whyUs: {
      tag: string;
      h2: string;
      subtitle: string;
      points: { title: string; desc: string }[];
    };
    workflow: {
      tag: string;
      h2: string;
      subtitle: string;
      steps: { number: string; title: string; desc: string }[];
    };
    gallery: {
      tag: string;
      h2: string;
      subtitle: string;
      disclaimer: string;
      items: { title: string; caption: string; imageKey: string }[];
    };
    serviceArea: {
      tag: string;
      h2: string;
      desc: string;
      bulletPoints: string[];
    };
    faq: {
      tag: string;
      h2: string;
      subtitle: string;
      items: FaqItem[];
    };
    ctaBand: {
      h2: string;
      desc: string;
      checklist: string[];
    };
  };

  // Services Pages
  pages: {
    cutting: ServicePageData;
    drilling: ServicePageData;
    openings: ServicePageData;
    demolition: ServicePageData;
    contact: {
      metaTitle: string;
      metaDescription: string;
      h1: string;
      intro: string;
      hudStatusTitle: string;
      hudStatusValue: string;
      callCard: {
        title: string;
        desc: string;
        btnText: string;
      };
      whatsappCard: {
        title: string;
        desc: string;
        btnText: string;
      };
      whatToSend: {
        h2: string;
        subtitle: string;
        items: string[];
      };
      serviceArea: {
        h2: string;
        desc: string;
      };
      faqs: {
        h2: string;
        items: FaqItem[];
      };
    };
  };

  footer: {
    brandDesc: string;
    quickLinksTitle: string;
    servicesTitle: string;
    contactTitle: string;
    serviceAreaNotice: string;
    disclaimer: string;
  };
}
