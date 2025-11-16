import type { ReactElement } from "react";

import { AdminPageLayout } from "@/src/widgets/layouts";
import { LayoutProps } from "@/app/types/layout.type";

export default function AdminLayout({ children }: LayoutProps): ReactElement {
  return <AdminPageLayout>{children}</AdminPageLayout>;
}
