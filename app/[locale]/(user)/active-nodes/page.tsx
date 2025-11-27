import { ReactElement } from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import ActiveNodesPageContainer from "@/src/widgets/page-containers/active-nodes/active-nodes";
import { GenerateMetadataProps } from "@/app/types/matadata.type";

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("active_nodes_page_meta_title"),
    description: t("active_nodes_page_meta_description")
  };
}

export default async function ActiveNodesPage(): Promise<ReactElement> {
  return <ActiveNodesPageContainer />;
}
