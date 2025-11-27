import { LanguageCodesType } from "@/src/shared/types/language";

export type GenerateMetadataProps = {
  params: Promise<{ id: string; locale: LanguageCodesType }>;
};
