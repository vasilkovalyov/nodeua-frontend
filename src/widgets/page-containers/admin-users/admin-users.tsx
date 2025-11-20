import { FC, ReactElement } from "react";

import { Stack } from "@mui/material";

import { PageTitle } from "@/src/shared/ui";

import AdminTableNodes from "./ui/admin-table-users/admin-table-users";
import { AdminTableUserProps } from "./types/user.type";

type AdminUsersPageContainerProps = {
  users: AdminTableUserProps[];
};

const AdminUsersPageContainer: FC<AdminUsersPageContainerProps> = ({ users }): ReactElement => {
  return (
    <Stack direction="column" gap="20px">
      <PageTitle titleTranslationKey="users" />
      <AdminTableNodes users={users} />
    </Stack>
  );
};

export default AdminUsersPageContainer;
