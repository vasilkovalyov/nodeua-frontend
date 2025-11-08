import { FC, ReactNode } from "react";

import { Stack, Box, Divider } from "@mui/material";

import { AdminNavigation } from "@/src/widgets/components";
import DrawerHeader from "../drawer-header/drawer-header";
import DrawerBody from "../drawer-body/drawer-body";
import AdminLogo from "@/src/shared/ui/admin-logo/admin-logo";

type AdminNavigationDrawerProps = {
  children?: ReactNode;
};

const AdminNavigationDrawer: FC<AdminNavigationDrawerProps> = ({ children }) => {
  return (
    <Stack gap="20px">
      <DrawerHeader>
        <Stack direction="row" justifyContent="center">
          <AdminLogo />
        </Stack>
      </DrawerHeader>
      <DrawerBody>
        <AdminNavigation />
        <Box>
          <Divider />
        </Box>
        {children}
      </DrawerBody>
    </Stack>
  );
};

export default AdminNavigationDrawer;
