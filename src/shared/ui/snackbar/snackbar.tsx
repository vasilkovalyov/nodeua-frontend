import { FC } from "react";
import cn from "classnames";

import { Button, Snackbar as MuiSnackbar, Alert } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { SnackbarPropsType } from "./snackbar.type";

type SnackbarProps = SnackbarPropsType & {
  className?: string;
  open?: boolean;
  onClose?: () => void;
};

const Snackbar: FC<SnackbarProps> = ({
  title,
  className,
  open,
  verticalPosition = "top",
  horizontalPosition = "right",
  color = "error",
  hideDuration = 2000,
  onClose
}) => {
  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: verticalPosition, horizontal: horizontalPosition }}
      open={open}
      className={cn(className)}
      autoHideDuration={hideDuration}
      onClose={onClose}
    >
      <Alert
        severity={color}
        action={
          <Button onClick={onClose}>
            <CloseIcon />
          </Button>
        }
      >
        {title}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
