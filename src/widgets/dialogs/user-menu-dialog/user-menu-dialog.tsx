import { FC } from "react";

import { Box } from "@mui/material";

import useDialog from "@/src/shared/hooks/use-dialog";
import { MenuToggler } from "@/src/widgets/components";

import "./user-menu-dialog.scss";

const UserMenuDialog: FC = () => {
  const { onCloseDialogByName } = useDialog();

  function onCloseDialog(): void {
    onCloseDialogByName("USER_MENU_DIALOG");
  }

  return (
    <Box className="dialog-box">
      <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
    </Box>
  );
};

export default UserMenuDialog;
