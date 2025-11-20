import { FC, ReactElement } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/app/routing";

import { Box, Button, Stack } from "@mui/material";
import { PageTitle } from "@/src/shared/ui";
import { AdminNodeType } from "@/app/entities/admin/admin-node";

import { AppRoutes } from "@/src/shared/routes";
import AdminTableNodes from "./ui/admin-table-nodes/admin-table-nodes";

type AdminNodesPageContainerProps = {
  nodes: AdminNodeType[];
};

const AdminNodesPageContainer: FC<AdminNodesPageContainerProps> = async ({ nodes }): Promise<ReactElement> => {
  const locale = await getLocale();
  const t = await getTranslations({ locale });

  return (
    <Stack direction="column" gap="20px">
      <PageTitle titleTranslationKey="all_nodes" />
      <Stack direction="row">
        <Button component={Box} variant="contained">
          <Link href={AppRoutes.adminCreateNode}>{t("page_name_create_node")}</Link>
        </Button>
      </Stack>
      <AdminTableNodes nodes={nodes} />
    </Stack>
  );
};

export default AdminNodesPageContainer;
