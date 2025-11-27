import type { ReactElement } from "react";

import PageLayout from "@/src/widgets/layouts/page-layout/page-layout";
import { LayoutProps } from "@/app/types/layout.type";

export default async function HomeLayout({ children }: LayoutProps): Promise<ReactElement> {
  return <PageLayout>{children}</PageLayout>;
}
