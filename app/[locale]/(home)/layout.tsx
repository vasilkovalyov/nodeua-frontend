import type { ReactElement } from "react";

import TranslationProvider from "@/app/providers/translation-provider";
import PageLayout from "@/src/widgets/layouts/page-layout/page-layout";
import { LayoutProps } from "@/app/types/layout.type";

export default async function HomeLayout({ children, params }: LayoutProps): Promise<ReactElement> {
  const { locale } = await params;
  return (
    <TranslationProvider locale={locale}>
      <PageLayout>{children}</PageLayout>
    </TranslationProvider>
  );
}
