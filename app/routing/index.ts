import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { LOCALES } from "../constants/languages";

export const routingConfig = {
  locales: LOCALES,
  defaultLocale: LOCALES[1],
  localeDetection: true,
  localePrefix: "never"
} as const;

export const routing = defineRouting({
  ...routingConfig
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
