import { ReactNode, ReactElement } from "react";

import { Viewport } from "next/types";
import { getLocale, getMessages, getTimeZone } from "next-intl/server";

import Providers from "./providers/providers";

import "@/styles/main.scss";

interface LayoutProps {
  children: ReactNode;
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default async function Layout({ children }: LayoutProps): Promise<ReactElement> {
  const locale = await getLocale();
  const messages = await getMessages();
  const timeZone = await getTimeZone();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body>
        <Providers locale={locale} timeZone={timeZone} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
