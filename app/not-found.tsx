import { ReactElement } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

import { NotFoundPageContainer } from "@/src/widgets/page-containers";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return {
    title: t("not_found_title"),
    description: t("not_found_title")
  };
}

export default function NotFound(): ReactElement {
  return <NotFoundPageContainer />;
}
