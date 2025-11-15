import PageLayout from "@/src/widgets/layouts/page-layout/page-layout";
import type { ReactElement, ReactNode } from "react";

interface UserLayoutProps {
  children: ReactNode;
}

export default function UserLayout(props: UserLayoutProps): ReactElement {
  const { children } = props;

  return <PageLayout>{children}</PageLayout>;
}
