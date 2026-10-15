export interface PageDefinition {
  key: "home" | "cutting" | "drilling" | "openings" | "demolition" | "contact";
  arPath: string;
  enPath: string;
  category: "main" | "service" | "contact";
}

export const PAGES: Record<string, PageDefinition> = {
  home: {
    key: "home",
    arPath: "/",
    enPath: "/en/",
    category: "main",
  },
  cutting: {
    key: "cutting",
    arPath: "/services/concrete-cutting/",
    enPath: "/en/services/concrete-cutting/",
    category: "service",
  },
  drilling: {
    key: "drilling",
    arPath: "/services/core-drilling/",
    enPath: "/en/services/core-drilling/",
    category: "service",
  },
  openings: {
    key: "openings",
    arPath: "/services/concrete-openings/",
    enPath: "/en/services/concrete-openings/",
    category: "service",
  },
  demolition: {
    key: "demolition",
    arPath: "/services/demolition-repair/",
    enPath: "/en/services/demolition-repair/",
    category: "service",
  },
  contact: {
    key: "contact",
    arPath: "/contact/",
    enPath: "/en/contact/",
    category: "contact",
  },
};

export const SERVICE_KEYS = ["cutting", "drilling", "openings", "demolition"] as const;
export type ServiceKey = typeof SERVICE_KEYS[number];
