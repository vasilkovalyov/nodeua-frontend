import { ReactElement } from "react";

import { AdminNodesPageContainer } from "@/src/widgets/page-containers";
import { serverSideFetch } from "@/app/api/server-side-api";
import { Box, Typography } from "@mui/material";
import { AdminNodeType } from "@/app/entities/admin/admin-node";

export default async function AdminNodesPage(): Promise<ReactElement> {
  const response = await serverSideFetch("/admin-nodes");

  if (!response.ok) {
    return (
      <Box>
        <Typography>Error. Something went wrong!</Typography>
      </Box>
    );
  }

  const nodes: AdminNodeType[] = await response.json();
  return <AdminNodesPageContainer nodes={nodes || []} />;
}
