import { ReactElement } from "react";
import type { Metadata } from "next";

import { NotFoundPageContainer } from "@/src/widgets/page-containers";
import { PageLayout } from "@/src/widgets/layouts";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Not found"
  };
}

export default function NotFound(): ReactElement {
  return (
    <PageLayout>
      <NotFoundPageContainer />
    </PageLayout>
  );
}
