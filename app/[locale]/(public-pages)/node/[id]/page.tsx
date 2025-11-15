import { ReactElement } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { AppRoutes } from "@/src/shared/routes";
import NodeSingleContainer from "@/src/widgets/page-containers/node-single/node-single";
import { fetchNode } from "./fetch-node";
import { getLocale, getTranslations } from "next-intl/server";

interface GenerateMetadataProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale });
  const res = await params;
  const node = await fetchNode(res.id);

  if (node === null) return { title: t("not_found_title") };

  return {
    title: node?.name,
    description: ""
  };
}

export default async function NodePage({ params }: { params: Promise<{ id: string }> }): Promise<ReactElement> {
  const { id } = await params;
  const node = await fetchNode(id);

  if (node === null) {
    redirect(AppRoutes.notFound);
  }

  return <NodeSingleContainer {...node} />;
}
