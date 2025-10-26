import { lazy } from "react";

const drawers = {
  BASE_NAVIGATION_DRAWER: lazy(() => import("./navigation-drawer/navigation-drawer")),
  ADMIN_NAVIGATION_DRAWER: lazy(() => import("./admin-navigation-drawer/admin-navigation-drawer"))
} as const;

export default drawers;
