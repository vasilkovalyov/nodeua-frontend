import { ReactElement } from "react";
import type { Metadata } from "next";

import { ForgotPasswordPageContainer } from "@/src/widgets/page-containers";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function ForgotPasswordPage(): Promise<ReactElement> {
  return <ForgotPasswordPageContainer />;
}
