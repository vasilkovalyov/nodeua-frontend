import { DialogNames } from "@/app/store/slices/dialog/dialog.type";
import { LazyExoticComponent, ComponentType, lazy } from "react";

const dialogs: Record<DialogNames, LazyExoticComponent<ComponentType>> = {
  USER_MENU_DIALOG: lazy(() => import("./user-menu-dialog/user-menu-dialog"))
};

export default dialogs;
