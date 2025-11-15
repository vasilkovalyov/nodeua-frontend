import { ReactElement } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { AppRoutes } from "@/src/shared/routes";
import NodeSingleContainer from "@/src/widgets/page-containers/node-single/node-single";
import { serverSideFetch } from "@/app/api/server-side-api";
import { NodeSingleContainerProps } from "@/src/widgets/page-containers/node-single/node-single.type";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function NodePage({ params }: { params: Promise<{ id: string }> }): Promise<ReactElement> {
  const { id } = await params;
  const { success, data } = await serverSideFetch<NodeSingleContainerProps>(`/node/${id}`, {
    next: { revalidate: 60 }
  });

  if (!success) {
    redirect(AppRoutes.notFound);
  }

  return <NodeSingleContainer {...data} />;
}
