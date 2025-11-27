import { ReactElement } from "react";

import { getTimeZone } from "next-intl/server";

import Providers from "../providers/providers";
import { LayoutProps } from "../types/layout.type";
import { notFound } from "next/navigation";

export default async function Layout({ children, params }: LayoutProps): Promise<ReactElement> {
  const { locale } = await params;
  const timeZone = await getTimeZone({ locale: locale });

  let messages;
  try {
    messages = (await import(`../../translations/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <Providers locale={locale} timeZone={timeZone} messages={messages}>
      {children}
    </Providers>
  );
}
