import { ReactElement } from "react";

import { AdminUsersPageContainer } from "@/src/widgets/page-containers";
import { Box, Typography } from "@mui/material";
import { serverSideFetch } from "@/app/api/server-side-api";
import { AdminTableUserProps } from "@/src/widgets/page-containers/admin-users/types/user.type";

type AdminUsersResponseProps = {
  users: AdminTableUserProps[];
};

export default async function AdminUsersPage(): Promise<ReactElement> {
  const { success, data } = await serverSideFetch<AdminUsersResponseProps>("/admin-users");

  if (!success) {
    return (
      <Box>
        <Typography>Error. Something went wrong!</Typography>
      </Box>
    );
  }

  return <AdminUsersPageContainer users={data.users || []} />;
}
