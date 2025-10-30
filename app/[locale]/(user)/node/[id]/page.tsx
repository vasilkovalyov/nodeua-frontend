import { ReactElement } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { AppRoutes } from "@/src/shared/routes";
import { NodeSingleType } from "@/app/entities/node";
import NodeSingleContainer from "@/src/widgets/page-containers/node-single/node-single";
import { serverSideFetch } from "@/app/api/server-side-api";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function NodePage({ params }: { params: Promise<{ id: string }> }): Promise<ReactElement> {
  const { id } = await params;
  const response = await serverSideFetch(`/node/${id}`, {
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    redirect(AppRoutes.notFound);
  }

  const nodeResponseProps: NodeSingleType = await response.json();

  return <NodeSingleContainer {...nodeResponseProps} />;
}
