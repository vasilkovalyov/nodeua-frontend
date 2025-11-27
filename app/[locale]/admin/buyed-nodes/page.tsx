import { ReactElement } from "react";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

import { Typography } from "@mui/material";

import { AdminBuyedNodesPageContainer } from "@/src/widgets/page-containers";
import RESPONSE_STATUS from "@/src/shared/constant/response-status";
import { PageProps } from "@/app/types/page.type";
import { serverSideFetch } from "@/app/api/server-side-api";
import { AdminBuyedNodesApiResponseProps } from "@/src/widgets/page-containers/admin-buyed-nodes/types/api.type";
import { AppRoutes } from "@/src/shared/routes";

export default async function AdminBuyedNodesPage({ params }: PageProps): Promise<ReactElement | null> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const { success, status, data } = await serverSideFetch<AdminBuyedNodesApiResponseProps>("/admin/buyed-nodes");

  if (status === RESPONSE_STATUS.SERVER_ERROR) {
    redirect(AppRoutes.serverNotWorking);
  }

  if (!success || !data) {
    return <Typography>{t("error_server_response")}</Typography>;
  }

  return <AdminBuyedNodesPageContainer nodes={data.nodes} />;
}
