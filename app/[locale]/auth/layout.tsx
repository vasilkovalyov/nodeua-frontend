import type { ReactElement } from "react";

import { LoginLayout } from "@/src/widgets/layouts";
import { LayoutProps } from "@/app/types/layout.type";

export default async function AuthLayout({ children }: LayoutProps): Promise<ReactElement> {
  return <LoginLayout>{children}</LoginLayout>;
}
