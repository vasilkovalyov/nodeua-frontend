import { ReactElement } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { serverSideFetch } from "@/app/api/server-side-api";
import { AppRoutes } from "@/src/shared/routes";
import { PageProps } from "@/app/types/page.type";
import RESPONSE_STATUS from "@/src/shared/constant/response-status";
import NodeSingleContainer from "@/src/widgets/page-containers/node-single/node-single";
import { GenerateMetadataProps } from "@/app/types/matadata.type";
import { NodeSingleContainerProps } from "@/src/widgets/page-containers/node-single/node-single.type";

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const { id, locale } = await params;
  const t = await getTranslations({ locale });
  const { success, data } = await serverSideFetch<NodeSingleContainerProps>(`/node/${id}`, {
    next: { revalidate: 60 }
  });

  if (!success) return { title: t("not_found_title") };

  return {
    title: data?.name,
    description: ""
  };
}

export default async function NodePage({ params }: PageProps): Promise<ReactElement | null> {
  const { id, locale } = await params;
  const { success, status, data } = await serverSideFetch<NodeSingleContainerProps>(`/node/${id}`, {
    next: { revalidate: 60 }
  });

  if (status === RESPONSE_STATUS.SERVER_ERROR) {
    redirect(AppRoutes.serverNotWorking);
  }

  if (!success || !data) {
    redirect(AppRoutes.notFound);
  }

  return <NodeSingleContainer {...data} locale={locale} />;
}
