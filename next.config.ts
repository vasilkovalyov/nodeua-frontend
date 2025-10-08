import type { NextConfig } from "next";
import nextIntl from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xnode.fra1.cdn.digitaloceanspaces.com"
      }
    ]
  }
};

const withNextIntl = nextIntl("./i18n.ts");

export default withNextIntl(nextConfig);
