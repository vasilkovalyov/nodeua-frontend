import type { ReactElement } from "react";

import TranslationProvider from "@/app/providers/translation-provider";
import PageLayout from "@/src/widgets/layouts/page-layout/page-layout";
import { LayoutLocaleParamsProps, LayoutProps } from "@/app/types/layout.type";
import { serverSideFetch } from "@/app/api/server-side-api";
import { NodesList } from "@/src/widgets/page-containers/home/ui/block-nodes/block-nodes.type";
import { getStaticParams } from "./generate-static-params";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<LayoutLocaleParamsProps[]> {
  const { success, data } = await serverSideFetch<NodesList>("/nodes", {
    next: { revalidate: 1000 },
    useCookies: false
  });

  if (!success) return [];

  return getStaticParams(data);
}

export default async function NodeLayout({ children, params }: LayoutProps): Promise<ReactElement> {
  const { locale } = await params;

  return (
    <TranslationProvider locale={locale}>
      <PageLayout>{children}</PageLayout>
    </TranslationProvider>
  );
}
