import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { ReactElement, ReactNode } from "react";

interface NodeLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string; id: string }>;
}

export const dynamic = "force-static";

export default async function NodeLayout({ children, params }: NodeLayoutProps): Promise<ReactElement> {
  const { locale } = await params;

  let messages;
  try {
    messages = (await import(`../../../../../translations/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
