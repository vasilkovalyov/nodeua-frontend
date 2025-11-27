import { ReactElement } from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { LoginPageContainer } from "@/src/widgets/page-containers";
import { GenerateMetadataProps } from "@/app/types/matadata.type";

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("login_page_meta_title"),
    description: t("login_page_meta_description")
  };
}

export default async function LoginPage(): Promise<ReactElement> {
  return <LoginPageContainer />;
}
