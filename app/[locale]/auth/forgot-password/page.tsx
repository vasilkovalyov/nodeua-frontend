import { ReactElement } from "react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import { ForgotPasswordPageContainer } from "@/src/widgets/page-containers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return {
    title: t("forgot_password_page_meta_title"),
    description: t("forgot_password_page_meta_description")
  };
}

export default async function ForgotPasswordPage(): Promise<ReactElement> {
  return <ForgotPasswordPageContainer />;
}
