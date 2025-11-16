import type { ReactElement } from "react";

import { LOCALES } from "@/app/constants/languages";
import TranslationProvider from "@/app/providers/translation-provider";
import { PageLayout } from "@/src/widgets/layouts";
import { LayoutLocaleParamsProps, LayoutProps } from "@/app/types/layout.type";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<LayoutLocaleParamsProps[]> {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function PostsLayout({ children, params }: LayoutProps): Promise<ReactElement> {
  const { locale } = await params;

  return (
    <TranslationProvider locale={locale}>
      <PageLayout>{children}</PageLayout>
    </TranslationProvider>
  );
}
