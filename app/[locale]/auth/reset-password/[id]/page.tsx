import { ReactElement } from "react";
import type { Metadata } from "next";

import { ResetPasswordPageContainer } from "@/src/widgets/page-containers";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function ResetPasswordPage(): Promise<ReactElement> {
  return <ResetPasswordPageContainer />;
}
