import type { ReactElement } from "react";

import { LOCALES } from "@/app/constants/languages";
import { PageLayout } from "@/src/widgets/layouts";
import { LayoutLocaleParamsProps, LayoutProps } from "@/app/types/layout.type";

export async function generateStaticParams(): Promise<LayoutLocaleParamsProps[]> {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function PostsLayout({ children }: LayoutProps): Promise<ReactElement> {
  return <PageLayout>{children}</PageLayout>;
}
