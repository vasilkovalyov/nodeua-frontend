import { ReactElement } from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ResetPasswordPageContainer } from "@/src/widgets/page-containers";
import { GenerateMetadataProps } from "@/app/types/matadata.type";

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("reset_password_page_meta_title"),
    description: t("reset_password_page_meta_description")
  };
}

export default async function ResetPasswordPage(): Promise<ReactElement> {
  return <ResetPasswordPageContainer />;
}
