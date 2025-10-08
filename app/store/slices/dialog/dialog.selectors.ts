import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { DialogItem, DialogNames, DialogState } from "./dialog.type";

const selectState = (state: RootState): DialogState => state.dialog;

export const getIsDialogOpenedSelector = createSelector(selectState, (state) => state.stack.length !== 0);

export const getDialogSizeSelector = createSelector(selectState, (state) => state.dialogSize);

export const getAllDialogsSelector = createSelector(selectState, (state) => state.stack);

export const getDialogByName = (dialogs: DialogItem[], dialogName: DialogNames): DialogItem => {
  let obj = null;

  for (const item of dialogs) {
    if (item.dialogName === dialogName) {
      obj = item;
      break;
    }
  }

  return obj as DialogItem;
};
