import { AlertColor } from "@mui/material/Alert/Alert";

export type SnackbarPropsType = {
  title: string;
  verticalPosition?: "top" | "bottom";
  horizontalPosition?: "left" | "right";
  color?: AlertColor;
  hideDuration?: number;
};
