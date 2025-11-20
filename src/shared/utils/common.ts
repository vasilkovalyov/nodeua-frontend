import { LOCALES } from "@/app/constants/languages";

export function removeLocalePrefix(url: string): string {
  return url.replace(new RegExp(`^/(${LOCALES.join("|")})(?=/|$)`), "") || "/";
}

export function getCutLine(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "...";
}
