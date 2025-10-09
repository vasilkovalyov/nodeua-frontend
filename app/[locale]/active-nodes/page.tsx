import { ReactElement } from "react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import ActiveNodesPageContainer from "@/src/widgets/page-containers/active-nodes/active-nodes";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return {
    title: t("active_nodes_page_meta_title"),
    description: t("active_nodes_page_meta_description")
  };
}

export default async function ActiveNodesPage(): Promise<ReactElement> {
  return <ActiveNodesPageContainer />;
}
