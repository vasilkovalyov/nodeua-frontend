import { LanguageCodesType } from "@/src/shared/types/language";
import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string; id: string }>;
};

export type LayoutLocaleParamsProps = {
  locale: LanguageCodesType;
};
