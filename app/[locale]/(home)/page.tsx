import { ReactElement } from "react";
import type { Metadata } from "next";
import HomePageContainer from "@/src/widgets/page-containers/home/home";
import { getLocale, getTranslations } from "next-intl/server";
import { NodesList } from "@/src/widgets/page-containers/home/ui/block-nodes/block-nodes.type";
import { redirect } from "next/navigation";
import { AppRoutes } from "@/src/shared/routes";
import { LOCALES } from "@/app/constants/languages";
import { serverSideFetch } from "@/app/api/server-side-api";

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

export default async function HomePage(): Promise<ReactElement> {
  const { success, data } = await serverSideFetch<NodesList>("/nodes", {
    next: { revalidate: 60 }
  });

  if (!success) {
    redirect(AppRoutes.notFound);
  }

  return <HomePageContainer nodes={data} />;
}
