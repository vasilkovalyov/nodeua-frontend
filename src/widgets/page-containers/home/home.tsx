import { FC } from "react";
import { redirect } from "next/navigation";

import BlockNodes from "./ui/block-nodes/block-nodes";
import { serverSideFetch } from "@/app/api/server-side-api";
import { NodesList } from "./ui/block-nodes/block-nodes.type";
import { AppRoutes } from "@/src/shared/routes";

const HomePageContainer: FC = async () => {
  const { success, data } = await serverSideFetch<NodesList>("/nodes", {
    next: { revalidate: 60 }
  });

  if (!success) {
    redirect(AppRoutes.notFound);
  }

  return <BlockNodes nodesList={data} />;
};

export default HomePageContainer;
