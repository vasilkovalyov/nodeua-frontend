import { FC } from "react";
import cn from "classnames";

import { Dialog } from "@mui/material";

import { useAppSelector } from "@/app/store/store";
import {
  getAllDialogsSelector,
  getDialogSizeSelector,
  getIsDialogOpenedSelector
} from "@/app/store/slices/dialog/dialog.selectors";
import { SuspenseWrapper } from "@/src/shared/ui";
import useDialog from "@/src/shared/hooks/use-dialog";

import dialogs from "../index";

import "./root-dialog.scss";

const RootDialog: FC = () => {
  const { closeDialogs } = useDialog();

  const visibleDialog = useAppSelector(getIsDialogOpenedSelector);
  const sizeDialog = useAppSelector(getDialogSizeSelector);
  const dialogsSelector = useAppSelector(getAllDialogsSelector);

  const dialogClassnames = cn("dialog-modal", {
    "dialog-modal--large": sizeDialog === "large",
    "dialog-modal--extra-large": sizeDialog === "extra-large",
    "dialog-modal--fullscreen": sizeDialog === "fullscreen"
  });

  const getDialogComponent = dialogsSelector.map((item) => {
    return {
      component: dialogs[item.dialogName as keyof typeof dialogs]
    };
  });

  return (
    <Dialog open={visibleDialog} className={dialogClassnames} onClose={closeDialogs}>
      {getDialogComponent.map((dialog, index) => {
        const Component = dialog.component;

        return (
          <SuspenseWrapper key={index}>
            <Component />
          </SuspenseWrapper>
        );
      })}
    </Dialog>
  );
};

export default RootDialog;
