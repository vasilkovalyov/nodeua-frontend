import { FC } from "react";

import useDrawer from "@/src/shared/hooks/use-drawer";
import { navigationList } from "@/src/shared/hooks/use-header-navigation";
import NavigationDrawer from "../navigation-drawer/navigation-drawer";

const HeaderProfile: FC = () => {
  const { isOpenDrawer, onCloseDrawer } = useDrawer();
  const isOpen = isOpenDrawer("BASE_NAVIGATION_DRAWER");

  return <NavigationDrawer navigationList={navigationList} open={isOpen} onClose={onCloseDrawer} />;
};

export default HeaderProfile;
