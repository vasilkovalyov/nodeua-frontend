import PageLayout from "@/src/widgets/layouts/page-layout/page-layout";
import type { ReactElement, ReactNode } from "react";

interface PublicPageLayoutProps {
  children: ReactNode;
}

export default function PublicPageLayout(props: PublicPageLayoutProps): ReactElement {
  const { children } = props;

  return <PageLayout>{children}</PageLayout>;
}
