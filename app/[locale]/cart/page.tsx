import { ReactElement } from "react";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";

import CartPageContainer from "@/src/widgets/page-containers/cart/cart";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return {
    title: t("cart_page_meta_title"),
    description: t("cart_page_meta_description")
  };
}

export default async function CartPage(): Promise<ReactElement> {
  return <CartPageContainer />;
}
