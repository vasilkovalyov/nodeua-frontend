import { ReactElement } from "react";
import type { Metadata } from "next";

import CartPageContainer from "@/src/widgets/page-containers/cart/cart";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function CartPage(): Promise<ReactElement> {
  return <CartPageContainer />;
}
