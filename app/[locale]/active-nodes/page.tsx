import { ReactElement } from "react";
import type { Metadata } from "next";

import ActiveNodesPageContainer from "@/src/widgets/page-containers/active-nodes/active-nodes";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function ActiveNodesPage(): Promise<ReactElement> {
  return <ActiveNodesPageContainer />;
}
