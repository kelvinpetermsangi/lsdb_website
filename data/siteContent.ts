import type { LocalizedResource } from "@/lib/i18n";
import siteContentEn from "@/data/siteContent.en";
import siteContentSw from "@/data/siteContent.sw";

export const siteContent = {
  en: siteContentEn,
  sw: siteContentSw,
} satisfies LocalizedResource<typeof siteContentEn>;

export type SiteContent = typeof siteContentEn;
