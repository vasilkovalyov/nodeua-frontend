import { ReactElement } from "react";
import type { Metadata } from "next";
import HomePageContainer from "@/src/widgets/page-containers/home/home";
import { getLocale, getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return {
    title: t("home_page_meta_title"),
    description: t("home_page_meta_description")
  };
}

export default async function HomePage(): Promise<ReactElement> {
  return <HomePageContainer />;
}
