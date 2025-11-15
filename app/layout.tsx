import { ReactNode, ReactElement } from "react";

import { Roboto } from "next/font/google";
import { Viewport } from "next/types";

import { getLocale, getMessages, getTimeZone } from "next-intl/server";

import Providers from "./providers/providers";

import "@/styles/main.scss";
interface LayoutProps {
  children: ReactNode;
}

const fonts = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default async function Layout({ children }: LayoutProps): Promise<ReactElement> {
  const locale = await getLocale();
  const timeZone = await getTimeZone();
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={fonts.className}>
        <Providers locale={locale} timeZone={timeZone} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
