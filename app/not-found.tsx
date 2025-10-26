import { ReactElement } from "react";
import type { Metadata } from "next";

import { NotFoundPageContainer } from "@/src/widgets/page-containers";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Not found"
  };
}

export default function NotFound(): ReactElement {
  return <NotFoundPageContainer />;
}
