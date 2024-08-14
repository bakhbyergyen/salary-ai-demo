import type { Metadata } from "next";
import SiteInfo from "@/config/siteInfo";

const metadataJSON: Metadata = {
  title: SiteInfo.title,
  description: SiteInfo.description,
  applicationName: SiteInfo.username,
  category: "LLM",
  keywords: SiteInfo.keywords,
  creator: SiteInfo.username,
  robots: "index, follow",
  authors: [
    {
      name: SiteInfo.username,
      url: SiteInfo.domain,
    },
  ],
  openGraph: {
    type: "website",
    url: SiteInfo.domain,
    siteName: SiteInfo.username,
    title: SiteInfo.username,
    description: SiteInfo.description,
    images: [
      {
        url: `/banner.webp`,
        width: 1200,
        height: 630,
        alt: SiteInfo.username,
      },
    ],
  },
};

export default metadataJSON;
