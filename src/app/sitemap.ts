import type { MetadataRoute } from "next";
import { jobs } from "@/lib/jobs";
import { articles } from "@/lib/insights";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/candidates", "/careers", "/insights", "/recruiting-agency", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, priority: p === "" ? 1 : 0.8 })),
    ...jobs.map((j) => ({ url: `${site.url}/careers/${j.slug}`, lastModified: j.posted, priority: 0.7 })),
    ...articles.map((a) => ({ url: `${site.url}/insights/${a.slug}`, lastModified: a.date, priority: 0.6 })),
  ];
}
