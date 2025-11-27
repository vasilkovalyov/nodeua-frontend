import { ReactElement } from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { RegistrationPageContainer } from "@/src/widgets/page-containers";
import { GenerateMetadataProps } from "@/app/types/matadata.type";

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("registration_page_meta_title"),
    description: t("registration_page_meta_description")
  };
}

export default async function RegistrationPage(): Promise<ReactElement> {
  return <RegistrationPageContainer />;
}
