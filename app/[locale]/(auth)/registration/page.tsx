import { ReactElement } from "react";
import type { Metadata } from "next";

import { RegistrationPageContainer } from "@/src/widgets/page-containers";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function RegistrationPage(): Promise<ReactElement> {
  return <RegistrationPageContainer />;
}
