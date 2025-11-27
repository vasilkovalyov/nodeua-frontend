import { ReactElement } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { AdminNodeEditPageContainer } from "@/src/widgets/page-containers";
import { Typography } from "@mui/material";
import { ApiAdminEditNodeResponseType } from "@/app/api/admin/node/node.api.type";
import { adaptApiAdminEditNodeResponseType } from "@/app/api/admin/node/node.utils";
import { PageProps } from "@/app/types/page.type";
import { serverSideFetch } from "@/app/api/server-side-api";
import RESPONSE_STATUS from "@/src/shared/constant/response-status";
import { AppRoutes } from "@/src/shared/routes";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "",
    description: ""
  };
}

export default async function AdminEditNodePage({ params }: PageProps): Promise<ReactElement> {
  const { id, locale } = await params;
  const t = await getTranslations({ locale });

  const { success, status, data } = await serverSideFetch<ApiAdminEditNodeResponseType>(`/admin/node/${id}`);

  if (status === RESPONSE_STATUS.SERVER_ERROR) {
    redirect(AppRoutes.serverNotWorking);
  }

  if (!success || !data) {
    return <Typography>{t("error_server_response")}</Typography>;
  }

  return <AdminNodeEditPageContainer node={adaptApiAdminEditNodeResponseType(data)} id={id} />;
}
