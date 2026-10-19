import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      // Legacy URLs from the previous site builder
      { source: "/about", destination: "/recruiting-agency", permanent: true },
      { source: "/page", destination: "/insights", permanent: true },
      { source: "/store", destination: "/insights", permanent: true },
      { source: "/employers", destination: "/services", permanent: true },
      { source: "/jobs", destination: "/careers", permanent: true },
    ];
  },
};

export default nextConfig;
