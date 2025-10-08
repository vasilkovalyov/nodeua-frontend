import type { ReactElement, ReactNode } from "react";

import { LoginLayout } from "@/src/widgets/layouts";

interface AuthLayoutProps {
  children: ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps): Promise<ReactElement> {
  return <LoginLayout>{children}</LoginLayout>;
}
