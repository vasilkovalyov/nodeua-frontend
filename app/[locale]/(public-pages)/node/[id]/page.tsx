import { ReactElement } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";

import { AppRoutes } from "@/src/shared/routes";
import NodeSingleContainer from "@/src/widgets/page-containers/node-single/node-single";
import { GenerateMetadataProps } from "@/app/types/matadata.type";
import { NodeSingleContainerProps } from "@/src/widgets/page-containers/node-single/node-single.type";
import { serverSideFetch } from "@/app/api/server-side-api";

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale });
  const res = await params;
  const { success, data } = await serverSideFetch<NodeSingleContainerProps>(`/node/${res.id}`, {
    next: { revalidate: 60 }
  });

  if (!success) return { title: t("not_found_title") };

  return {
    title: data?.name,
    description: ""
  };
}

export default async function NodePage({ params }: { params: Promise<{ id: string }> }): Promise<ReactElement> {
  const { id } = await params;
  const { success, data } = await serverSideFetch<NodeSingleContainerProps>(`/node/${id}`, {
    next: { revalidate: 60 }
  });

  if (!success) {
    redirect(AppRoutes.notFound);
  }

  return <NodeSingleContainer {...data} />;
}
