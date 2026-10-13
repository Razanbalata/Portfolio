
import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      "next-intl/config": "./src/i18n/request.ts",
    },
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "next-intl/config": path.resolve("src/i18n/request.ts"),
    };
    return config;
  },
};

export default nextConfig;
