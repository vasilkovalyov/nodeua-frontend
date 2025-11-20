import { FC, ReactElement } from "react";

import { Box, Stack, Typography } from "@mui/material";

import { PageTitle } from "@/src/shared/ui";
import { serverSideFetch } from "@/app/api/server-side-api";

import AdminTableNodes from "./ui/admin-table-users/admin-table-users";
import { AdminUsersApiResponseProps } from "./types/api.type";

const AdminUsersPageContainer: FC = async (): Promise<ReactElement> => {
  const { success, data } = await serverSideFetch<AdminUsersApiResponseProps>("/admin-users");

  if (!success) {
    return (
      <Box>
        <Typography>Error. Something went wrong!</Typography>
      </Box>
    );
  }

  return (
    <Stack direction="column" gap="20px">
      <PageTitle titleTranslationKey="users" />
      <AdminTableNodes users={data.users} />
    </Stack>
  );
};

export default AdminUsersPageContainer;
