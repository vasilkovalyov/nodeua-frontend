import { ReactElement } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";

import { Typography } from "@mui/material";

import HomePageContainer from "@/src/widgets/page-containers/home/home";
import { NodesList } from "@/src/widgets/page-containers/home/ui/block-nodes/block-nodes.type";
import { AppRoutes } from "@/src/shared/routes";
import { LOCALES } from "@/app/constants/languages";
import { serverSideFetch } from "@/app/api/server-side-api";
import RESPONSE_STATUS from "@/src/shared/constant/response-status";
import { PageProps } from "@/app/types/page.type";

export const dynamic = "force-static";

export async function generateStaticParams(): Promise<{ locale: string }[]> {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return {
    title: t("home_page_meta_title"),
    description: t("home_page_meta_description")
  };
}

export default async function HomePage({ params }: PageProps): Promise<ReactElement | null> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const { status, success, data } = await serverSideFetch<NodesList>("/nodes", {
    next: { revalidate: 60 }
  });

  if (status === RESPONSE_STATUS.SERVER_ERROR) {
    redirect(AppRoutes.serverNotWorking);
  }

  if (!success || !data) {
    return <Typography>{t("error_server_response")}</Typography>;
  }

  return <HomePageContainer nodes={data} />;
}
