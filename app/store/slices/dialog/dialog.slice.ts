import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DialogNames, DialogState, PayloadDialogProps } from "./dialog.type";

const initialState: DialogState = {
  dialogSize: "default",
  stack: []
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (state: DialogState, action: PayloadAction<PayloadDialogProps>) => {
      const { dialogName, dialogProps, options, dialogSize = "default" } = action.payload;
      state.dialogSize = dialogSize;
      state.stack.push({
        dialogName: dialogName,
        dialogProps: dialogProps,
        options: options
      });
    },
    closeDialogByName: (state: DialogState, action: PayloadAction<{ dialogName: DialogNames }>) => {
      const updateStack = state.stack.filter((dialog) => dialog.dialogName !== action.payload.dialogName);
      state.stack = updateStack;
      state.dialogSize = "default";
    },
    closeAllDialogs: (state: DialogState) => {
      state.stack = [];
      state.dialogSize = "default";
    },
    closeLatestDialog: (state: DialogState) => {
      state.stack = state.stack.slice(0, 0);
    }
  }
});

export const { openDialog, closeDialogByName, closeAllDialogs, closeLatestDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
