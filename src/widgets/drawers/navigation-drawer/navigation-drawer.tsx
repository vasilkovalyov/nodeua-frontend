import { FC, ReactNode } from "react";

import { Box, Divider } from "@mui/material";

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
    <>
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
    </>
  );
};

export default NavigationDrawer;
