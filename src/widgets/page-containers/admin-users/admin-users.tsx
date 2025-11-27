import { FC, ReactElement } from "react";

import { Stack } from "@mui/material";

import { PageTitle } from "@/src/shared/ui";

import AdminTableUsers from "./ui/admin-table-users/admin-table-users";
import { AdminTableUserProps } from "./types/user.type";

type AdminUsersPageContainerProps = {
  users: AdminTableUserProps[];
};

const AdminUsersPageContainer: FC<AdminUsersPageContainerProps> = async ({ users }): Promise<ReactElement | null> => {
  return (
    <Stack direction="column" gap="20px">
      <PageTitle titleTranslationKey="users" />
      <AdminTableUsers users={users} />
    </Stack>
  );
};

export default AdminUsersPageContainer;
