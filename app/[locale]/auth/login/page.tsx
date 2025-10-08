import { ReactElement } from "react";
import type { Metadata } from "next";

import { LoginPageContainer } from "@/src/widgets/page-containers";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function LoginPage(): Promise<ReactElement> {
  return <LoginPageContainer />;
}
