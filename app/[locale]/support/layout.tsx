import PageLayout from "@/src/widgets/layouts/page-layout/page-layout";
import type { ReactElement, ReactNode } from "react";

interface SupportLayoutProps {
  children: ReactNode;
}

export default function SupportLayout(props: SupportLayoutProps): ReactElement {
  const { children } = props;

  return <PageLayout>{children}</PageLayout>;
}
