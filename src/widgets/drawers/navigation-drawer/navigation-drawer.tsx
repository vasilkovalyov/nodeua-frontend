import { FC, ReactNode } from "react";

import { Stack, Box, Divider } from "@mui/material";

import { AppLogo } from "@/src/shared/ui";
import { UserNavigation } from "@/src/widgets/components";
import DrawerHeader from "../drawer-header/drawer-header";
import DrawerBody from "../drawer-body/drawer-body";

type NavigationDrawerProps = {
  children?: ReactNode;
};

const NavigationDrawer: FC<NavigationDrawerProps> = ({ children }) => {
  return (
    <Stack gap="20px">
      <DrawerHeader>
        <AppLogo />
      </DrawerHeader>
      <DrawerBody>
        <UserNavigation />
        <Box>
          <Divider />
        </Box>
        {children}
      </DrawerBody>
    </Stack>
  );
};

export default NavigationDrawer;
