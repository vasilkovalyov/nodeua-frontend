import { ReactElement } from "react";

import { Viewport } from "next/types";

import { robotoFont } from "./fonts";
import { LayoutProps } from "./types/layout.type";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true
};

export const dynamic = "force-dynamic";

export default async function Layout({ children, params }: LayoutProps): Promise<ReactElement> {
  const { locale } = await params;

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={robotoFont.className}>{children}</body>
    </html>
  );
}
