import { ReactElement } from "react";

import { AdminNodesPageContainer } from "@/src/widgets/page-containers";
import { Box, Typography } from "@mui/material";
import { AdminNodeType } from "@/app/entities/admin/admin-node";
import { serverSideFetch } from "@/app/api/server-side-api";

export default async function AdminNodesPage(): Promise<ReactElement> {
  const { success, data } = await serverSideFetch<AdminNodeType[]>("/admin/nodes");

  if (!success) {
    return (
      <Box>
        <Typography>Error. Something went wrong!</Typography>
      </Box>
    );
  }

  return <AdminNodesPageContainer nodes={data || []} />;
}
