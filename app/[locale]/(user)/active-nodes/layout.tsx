import PageLayout from "@/src/widgets/layouts/page-layout/page-layout";
import type { ReactElement, ReactNode } from "react";

interface ActiveNodesLayoutProps {
  children: ReactNode;
}

export default function ActiveNodesLayout(props: ActiveNodesLayoutProps): ReactElement {
  const { children } = props;

  return <PageLayout>{children}</PageLayout>;
}
