import { serverSideFetch } from "@/app/api/server-side-api";
import { PageProps } from "@/app/types/page.type";
import { AdminBuyedNodePageContainer } from "@/src/widgets/page-containers";
import { AdminBuyedNodeApiResponseProps } from "@/src/widgets/page-containers/admin-buyed-node/types/api.type";
import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";

export default async function AdminBuyedNodePage({ params }: PageProps): Promise<ReactElement> {
  const { id } = await params;

  const { success, data } = await serverSideFetch<AdminBuyedNodeApiResponseProps>(`/admin/buyed-nodes/${id}`);

  if (!success) {
    return (
      <Box>
        <Typography>Error. Something went wrong!</Typography>
      </Box>
    );
  }

  return <AdminBuyedNodePageContainer {...data.node} />;
}
