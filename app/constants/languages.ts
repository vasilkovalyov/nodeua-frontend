import { LanguageType } from "@/src/shared/types/language";

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

export const LOCALES: string[] = LANGUAGES.map((language) => language.code);
