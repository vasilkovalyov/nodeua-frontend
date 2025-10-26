"use client";

import { FC, ReactElement } from "react";
import { useTranslations } from "next-intl";

import { Button, Stack } from "@mui/material";
import { PageTitle } from "@/src/shared/ui";
import { AdminNodeType } from "@/app/entities/admin/admin-node";

import { AppRoutes } from "@/src/shared/routes";
import { Link } from "@/app/routing";
import AdminTableNodes from "./ui/admin-table-nodes/admin-table-nodes";

type AdminNodesPageContainerProps = {
  nodes: AdminNodeType[];
};

const AdminNodesPageContainer: FC<AdminNodesPageContainerProps> = ({ nodes }): ReactElement => {
  const t = useTranslations();

  return (
    <Stack direction="column" gap="20px">
      <PageTitle titleTranslationKey="all_nodes" />
      <Stack direction="row">
        <Button component={Link} variant="contained" href={AppRoutes.adminCreateNode}>
          {t("page_name_create_node")}
        </Button>
      </Stack>
      <AdminTableNodes nodes={nodes} />
    </Stack>
  );
};

export default AdminNodesPageContainer;
