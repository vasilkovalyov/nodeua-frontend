import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const locales = ["en", "uk"];

export const languages = [
  {
    code: "en",
    shortName: "En",
    fullName: "English"
  },
  {
    code: "uk",
    shortName: "Uk",
    fullName: "Ukrainian"
  }
];

export const routingConfig = {
  locales: locales,
  defaultLocale: locales[1],
  localeDetection: true,
  localePrefix: "never"
} as const;

export const routing = defineRouting({
  ...routingConfig
});

export type Locale = typeof routing.locales;

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
