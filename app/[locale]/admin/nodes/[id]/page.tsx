import { ReactElement } from "react";
import type { Metadata } from "next";

import { serverSideFetch } from "@/app/api/server-side-api";
import { AdminNodeEditPageContainer } from "@/src/widgets/page-containers";
import { Box, Typography } from "@mui/material";
import { ApiAdminEditNodeResponseType } from "@/app/api/admin/node/node.api.type";
import { adaptApiAdminEditNodeResponseType } from "@/app/api/admin/node/node.utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function AdminEditNodePage({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<ReactElement> {
  const { id } = await params;
  const response = await serverSideFetch(`/admin-node/${id}`);

  if (!response.ok) {
    return (
      <Box>
        <Typography>Error. Something went wrong!</Typography>
      </Box>
    );
  }

  const node: ApiAdminEditNodeResponseType = await response.json();

  return <AdminNodeEditPageContainer node={adaptApiAdminEditNodeResponseType(node)} id={id} />;
}
