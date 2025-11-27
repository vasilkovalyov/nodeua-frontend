import { ReactElement } from "react";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

import { AdminNodesPageContainer } from "@/src/widgets/page-containers";
import { Typography } from "@mui/material";
import { AdminNodeType } from "@/app/entities/admin/admin-node";
import { serverSideFetch } from "@/app/api/server-side-api";
import { PageProps } from "@/app/types/page.type";
import RESPONSE_STATUS from "@/src/shared/constant/response-status";
import { AppRoutes } from "@/src/shared/routes";

export default async function AdminNodesPage({ params }: PageProps): Promise<ReactElement> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const { success, status, data } = await serverSideFetch<AdminNodeType[]>("/admin/nodes");

  if (status === RESPONSE_STATUS.SERVER_ERROR) {
    redirect(AppRoutes.serverNotWorking);
  }

  if (!success || !data) {
    return <Typography>{t("error_server_response")}</Typography>;
  }

  return <AdminNodesPageContainer nodes={data || []} />;
}
