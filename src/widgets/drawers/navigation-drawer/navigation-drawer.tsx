import { FC, ReactNode } from "react";

import { Stack, Box, Divider } from "@mui/material";

import { AppLogo } from "@/src/shared/ui";
import { Navigation } from "@/src/widgets/components";
import { NavigationLinkType } from "@/src/shared/types/navigation-link";
import DrawerHeader from "../drawer-header/drawer-header";
import DrawerBody from "../drawer-body/drawer-body";

type NavigationDrawerProps = {
  children?: ReactNode;
  navigationList: NavigationLinkType[];
  open: boolean;
  onClose: () => void;
};

const NavigationDrawer: FC<NavigationDrawerProps> = ({ children, navigationList }) => {
  return (
    <Stack gap="20px">
      <DrawerHeader>
        <AppLogo />
      </DrawerHeader>
      <DrawerBody>
        <Navigation items={navigationList} />
        <Box>
          <Divider />
        </Box>
        {children}
      </DrawerBody>
    </Stack>
  );
};

export default NavigationDrawer;
