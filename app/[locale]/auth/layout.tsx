import type { ReactElement } from "react";

import { LoginLayout } from "@/src/widgets/layouts";
import { LayoutProps } from "@/app/types/layout.type";
import TranslationProvider from "@/app/providers/translation-provider";

export default async function AuthLayout({ children, params }: LayoutProps): Promise<ReactElement> {
  const { locale } = await params;
  return (
    <TranslationProvider locale={locale}>
      <LoginLayout>{children}</LoginLayout>;
    </TranslationProvider>
  );
}
