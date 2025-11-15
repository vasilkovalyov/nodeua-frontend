import { LOCALES } from "@/app/constants/languages";
import { LanguageCodesType } from "@/src/shared/types/language";

type LayputLocaleType = {
  locale: LanguageCodesType;
};

export async function generateStaticParams(): Promise<LayputLocaleType[]> {
  return LOCALES.map((locale) => ({ locale }));
}
