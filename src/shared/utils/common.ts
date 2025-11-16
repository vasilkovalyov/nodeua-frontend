import { LOCALES } from "@/app/constants/languages";

export function removeLocalePrefix(url: string): string {
  return url.replace(new RegExp(`^/(${LOCALES.join("|")})(?=/|$)`), "") || "/";
}
