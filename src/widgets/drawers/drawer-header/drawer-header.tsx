import { FC, ReactNode } from "react";

import { Box } from "@mui/material";

import useDrawer from "@/src/shared/hooks/use-drawer";
import { MenuToggler } from "@/src/widgets/components";

import "./drawer-header.scss";

type DrawerHeaderProps = {
  children?: ReactNode;
};

const DrawerHeader: FC<DrawerHeaderProps> = ({ children }) => {
  const { onCloseDrawer } = useDrawer();

  return (
    <Box className="drawer-header">
      {children}
      <MenuToggler active={true} onClick={onCloseDrawer} className="drawer-header__close" />
    </Box>
  );
};

export default DrawerHeader;
