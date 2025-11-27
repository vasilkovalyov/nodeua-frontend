import type { ReactElement } from "react";

import PageLayout from "@/src/widgets/layouts/page-layout/page-layout";
import { LayoutLocaleParamsProps, LayoutProps } from "@/app/types/layout.type";
import { serverSideFetch } from "@/app/api/server-side-api";
import { NodesList } from "@/src/widgets/page-containers/home/ui/block-nodes/block-nodes.type";
import { getStaticParams } from "./generate-static-params";

export async function generateStaticParams(): Promise<LayoutLocaleParamsProps[]> {
  const { success, data } = await serverSideFetch<NodesList>("/nodes", {
    next: { revalidate: 1000 },
    useCookies: false
  });

  if (!success || !data) return [];

  return getStaticParams(data);
}

export default async function NodeLayout({ children }: LayoutProps): Promise<ReactElement> {
  return <PageLayout>{children}</PageLayout>;
}
