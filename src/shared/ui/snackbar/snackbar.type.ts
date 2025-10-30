import { AlertColor } from "@mui/material/Alert/Alert";

export type SnackbarPropsType = {
  title: string;
  verticalPosition?: "top" | "bottom";
  horizontalPosition?: "left" | "center" | "right";
  color?: AlertColor;
  hideDuration?: number | null;
};
