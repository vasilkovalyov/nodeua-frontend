import { LOCALES } from "@/app/constants/languages";
import TranslationProvider from "@/app/providers/translation-provider";
import { LanguageCodesType } from "@/src/shared/types/language";
import PageLayout from "@/src/widgets/layouts/page-layout/page-layout";
import type { ReactElement, ReactNode } from "react";

interface PostsLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string; id: string }>;
}

type LocaleParamsType = {
  locale: LanguageCodesType;
};

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<LocaleParamsType[]> {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function PostsLayout({ children, params }: PostsLayoutProps): Promise<ReactElement> {
  const { locale } = await params;

  return (
    <TranslationProvider locale={locale}>
      <PageLayout>{children}</PageLayout>
    </TranslationProvider>
  );
}
