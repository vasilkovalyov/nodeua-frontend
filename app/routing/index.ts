import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { DEFAULT_LOCALE, LOCALES } from "../constants/languages";

export const routingConfig = {
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localeDetection: true,
  localePrefix: "always"
} as const;

export const routing = defineRouting({
  ...routingConfig
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
