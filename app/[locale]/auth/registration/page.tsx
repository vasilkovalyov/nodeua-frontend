import { ReactElement } from "react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { RegistrationPageContainer } from "@/src/widgets/page-containers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return {
    title: t("registration_page_meta_title"),
    description: t("registration_page_meta_description")
  };
}

export default async function RegistrationPage(): Promise<ReactElement> {
  return <RegistrationPageContainer />;
}
