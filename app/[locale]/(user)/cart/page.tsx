import { ReactElement } from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import CartPageContainer from "@/src/widgets/page-containers/cart/cart";
import { GenerateMetadataProps } from "@/app/types/matadata.type";

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("cart_page_meta_title"),
    description: t("cart_page_meta_description")
  };
}

export default async function CartPage(): Promise<ReactElement> {
  return <CartPageContainer />;
}
