import { ReactElement } from "react";
import type { Metadata } from "next";

import { AdminNodeEditPageContainer } from "@/src/widgets/page-containers";
import { Box, Typography } from "@mui/material";
import { ApiAdminEditNodeResponseType } from "@/app/api/admin/node/node.api.type";
import { adaptApiAdminEditNodeResponseType } from "@/app/api/admin/node/node.utils";
import { PageProps } from "@/app/types/page.type";
import { serverSideFetch } from "@/app/api/server-side-api";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function AdminEditNodePage({ params }: PageProps): Promise<ReactElement> {
  const { id } = await params;
  const { success, data } = await serverSideFetch<ApiAdminEditNodeResponseType>(`/admin/node/${id}`);

  if (!success) {
    return (
      <Box>
        <Typography>Error. Something went wrong!</Typography>
      </Box>
    );
  }

  return <AdminNodeEditPageContainer node={adaptApiAdminEditNodeResponseType(data)} id={id} />;
}
