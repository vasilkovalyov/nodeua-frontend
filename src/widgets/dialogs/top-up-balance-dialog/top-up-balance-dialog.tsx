import { FC } from "react";

import { Box } from "@mui/material";

import useDialog from "@/src/shared/hooks/use-dialog";
import { MenuToggler, TopUpBalancePanel } from "@/src/widgets/components";

import "./top-up-balance-dialog.scss";

const UserMenuDialog: FC = () => {
  const { onCloseDialogByName } = useDialog();

  function onCloseDialog(): void {
    onCloseDialogByName("TOP_UP_BALANCE_DIALOG");
  }

  return (
    <Box className="dialog-box" p="20px">
      <Box className="dialog-box__inner">
        <MenuToggler active={true} onClick={onCloseDialog} className="dialog-box__close-btn" />
        <TopUpBalancePanel />
      </Box>
    </Box>
  );
};

export default UserMenuDialog;
