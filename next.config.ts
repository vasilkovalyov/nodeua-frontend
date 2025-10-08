import type { NextConfig } from "next";
import nextIntl from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  }
};

const withNextIntl = nextIntl("./i18n.ts");

export default withNextIntl(nextConfig);
