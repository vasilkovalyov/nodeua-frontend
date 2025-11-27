import { ReactElement } from "react";
import { getTranslations } from "next-intl/server";
import { redirect } from "next/navigation";

import { Typography } from "@mui/material";

import { serverSideFetch } from "@/app/api/server-side-api";
import RESPONSE_STATUS from "@/src/shared/constant/response-status";
import { PageProps } from "@/app/types/page.type";
import { AppRoutes } from "@/src/shared/routes";
import { AdminBuyedNodePageContainer } from "@/src/widgets/page-containers";
import { AdminBuyedNodeApiResponseProps } from "@/src/widgets/page-containers/admin-buyed-node/types/api.type";

export default async function AdminBuyedNodePage({ params }: PageProps): Promise<ReactElement | null> {
  const { id, locale } = await params;
  const t = await getTranslations({ locale });

  const { success, status, data } = await serverSideFetch<AdminBuyedNodeApiResponseProps>(`/admin/buyed-nodes/${id}`);

  if (status === RESPONSE_STATUS.SERVER_ERROR) {
    redirect(AppRoutes.serverNotWorking);
  }

  if (!success || !data) {
    return <Typography>{t("error_server_response")}</Typography>;
  }

  return <AdminBuyedNodePageContainer {...data.node} />;
}
