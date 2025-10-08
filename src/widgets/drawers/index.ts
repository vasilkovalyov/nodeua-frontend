import { lazy } from "react";

const drawers = {
  BASE_NAVIGATION_DRAWER: lazy(() => import("./base-navigation-drawer/base-navigation-drawer"))
} as const;

export default drawers;
