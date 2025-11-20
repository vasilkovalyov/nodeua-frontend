import { ReactNode, ReactElement } from "react";

import { Viewport } from "next/types";

import { getLocale, getMessages, getTimeZone } from "next-intl/server";

import Providers from "./providers/providers";
import { robotoFont } from "./fonts";

interface LayoutProps {
  children: ReactNode;
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true
};

export default async function Layout({ children }: LayoutProps): Promise<ReactElement> {
  const locale = await getLocale();
  const timeZone = await getTimeZone();
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={robotoFont.className}>
        <Providers locale={locale} timeZone={timeZone} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
