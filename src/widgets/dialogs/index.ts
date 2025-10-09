import { DialogNames } from "@/app/store/slices/dialog/dialog.type";
import { LazyExoticComponent, ComponentType, lazy } from "react";

const dialogs: Record<DialogNames, LazyExoticComponent<ComponentType>> = {
  TOP_UP_BALANCE_DIALOG: lazy(() => import("./top-up-balance-dialog/top-up-balance-dialog"))
};

export default dialogs;
