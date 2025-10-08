import { FC, ReactNode } from "react";

import { Stack } from "@mui/material";

import useDrawer from "@/src/shared/hooks/use-drawer";
import { MenuToggler } from "@/src/widgets/components";

type DrawerHeaderProps = {
  children?: ReactNode;
};

const DrawerHeader: FC<DrawerHeaderProps> = ({ children }) => {
  const { onCloseDrawer } = useDrawer();

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      {children}
      <MenuToggler active={true} onClick={onCloseDrawer} />
    </Stack>
  );
};

export default DrawerHeader;
