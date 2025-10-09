import { ReactElement } from "react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { ResetPasswordPageContainer } from "@/src/widgets/page-containers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return {
    title: t("reset_password_page_meta_title"),
    description: t("reset_password_page_meta_description")
  };
}

export default async function ResetPasswordPage(): Promise<ReactElement> {
  return <ResetPasswordPageContainer />;
}
