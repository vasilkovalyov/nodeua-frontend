import type { ReactElement, ReactNode } from "react";

import { AdminPageLayout } from "@/src/widgets/layouts";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout(props: AdminLayoutProps): ReactElement {
  const { children } = props;

  return <AdminPageLayout>{children}</AdminPageLayout>;
}
