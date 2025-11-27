import { FC } from "react";

import { Stack } from "@mui/material";

import { PageTitle } from "@/src/shared/ui";

import BuyedNodesList from "./ui/buyed-nodes-list/buyed-nodes-list";
import { AdminBuyedNodeType } from "./types/admin-buyed-nodes.type";

type AdminBuyedNodesPageContainerProps = {
  nodes: AdminBuyedNodeType[];
};

const AdminBuyedNodesPageContainer: FC<AdminBuyedNodesPageContainerProps> = ({ nodes }) => {
  return (
    <Stack gap="50px">
      <PageTitle titleTranslationKey="buyed_nodes" />
      <BuyedNodesList nodes={nodes} />
    </Stack>
  );
};

export default AdminBuyedNodesPageContainer;
