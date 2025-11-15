import TranslationProvider from "@/app/providers/translation-provider";
import PageLayout from "@/src/widgets/layouts/page-layout/page-layout";
import type { ReactElement, ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string; id: string }>;
}

export default async function HomeLayout({ children, params }: HomeLayoutProps): Promise<ReactElement> {
  const { locale } = await params;
  return (
    <TranslationProvider locale={locale}>
      <PageLayout>{children}</PageLayout>
    </TranslationProvider>
  );
}
