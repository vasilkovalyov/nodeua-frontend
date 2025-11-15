import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import type { ReactElement, ReactNode } from "react";

interface TranslationProviderProps {
  children: ReactNode;
  locale: string;
}

export default async function TranslationProvider({
  children,
  locale
}: TranslationProviderProps): Promise<ReactElement> {
  let messages;
  try {
    messages = (await import(`../../translations/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
