import { LanguageCodesType } from "@/src/shared/types/language";

export type PageProps = {
  params: Promise<{ locale: LanguageCodesType; id: string }>;
};
