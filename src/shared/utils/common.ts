import { LANGUAGES, LOCALES } from "@/app/constants/languages";
import { LanguageType } from "../types/language";

export function removeLocalePrefix(url: string): string {
  return url.replace(new RegExp(`^/(${LOCALES.join("|")})(?=/|$)`), "") || "/";
}

export function isLocaleExist(langCode: string): LanguageType | null {
  const findLanguageResult = LANGUAGES.find((item) => item.code === langCode);
  if (findLanguageResult) {
    return findLanguageResult;
  }
  return null;
}
