import { SnackbarPropsType } from "@/src/shared/ui/snackbar/snackbar.type";

export type SnackbaState = {
  isOpened: boolean;
  snackbarProps?: SnackbarPropsType;
};
