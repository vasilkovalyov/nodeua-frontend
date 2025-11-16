import type { ReactElement } from "react";

import { LayoutProps } from "@/app/types/layout.type";
import PageLayout from "@/src/widgets/layouts/page-layout/page-layout";

export default function UserLayout(props: LayoutProps): ReactElement {
  const { children } = props;

  return <PageLayout>{children}</PageLayout>;
}
