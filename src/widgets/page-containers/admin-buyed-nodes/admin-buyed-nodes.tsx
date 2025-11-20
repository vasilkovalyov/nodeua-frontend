import { FC } from "react";

import { Box, Stack, Typography } from "@mui/material";

import { PageTitle } from "@/src/shared/ui";
import { serverSideFetch } from "@/app/api/server-side-api";
import BuyedNodesList from "./ui/buyed-nodes-list/buyed-nodes-list";
import { AdminBuyedNodesApiResponseProps } from "./types/api.type";

const AdminBuyedNodesPageContainer: FC = async () => {
  const { success, data } = await serverSideFetch<AdminBuyedNodesApiResponseProps>("/admin-buyed-nodes");

  if (!success) {
    return (
      <Box>
        <Typography>Error. Something went wrong!</Typography>
      </Box>
    );
  }

  return (
    <Stack gap="50px">
      <PageTitle titleTranslationKey="buyed_nodes" />
      <BuyedNodesList nodes={data.nodes} />
    </Stack>
  );
};

export default AdminBuyedNodesPageContainer;
