import { LanguageCodesType, LanguageType } from "@/src/shared/types/language";

export const LANGUAGES: LanguageType[] = [
  {
    code: "en",
    shortName: "En"
  },
  {
    code: "uk",
    shortName: "Uk"
  },
  {
    code: "ru",
    shortName: "Ru"
  }
];

export const LOCALES: LanguageCodesType[] = LANGUAGES.map((language) => language.code);
export const DEFAULT_LOCALE = LOCALES[1];
