export type NavKey =
  | "home"
  | "about"
  | "services"
  | "programs"
  | "resources"
  | "team"
  | "contact";

export type LegalKey =
  | "privacyPolicy"
  | "termsOfService"
  | "accessibility"
  | "sitemap";

export interface NavItem {
  path: string;
  key: NavKey;
  description?: string;
}

export interface LegalItem {
  path: string;
  key: LegalKey;
}

export const mainNavigation: NavItem[] = [
  {
    path: "/",
    key: "home",
    description: "LSDB overview and latest highlights",
  },
  {
    path: "/about",
    key: "about",
    description: "Mission, vision, values, and bureau approach",
  },
  {
    path: "/services",
    key: "services",
    description: "Guidance, readiness, and institutional support services",
  },
  {
    path: "/programs",
    key: "programs",
    description: "Programme areas and participant-facing support formats",
  },
  {
    path: "/resources",
    key: "resources",
    description: "Reference materials, briefs, and downloadable resources",
  },
  {
    path: "/team",
    key: "team",
    description: "Team structure, capabilities, and future opportunities",
  },
  {
    path: "/contact",
    key: "contact",
    description: "Official contact channels and request form",
  },
];

export const legalNavigation: LegalItem[] = [
  { path: "/privacy", key: "privacyPolicy" },
  { path: "/terms", key: "termsOfService" },
  { path: "/accessibility", key: "accessibility" },
  { path: "/sitemap", key: "sitemap" },
];
