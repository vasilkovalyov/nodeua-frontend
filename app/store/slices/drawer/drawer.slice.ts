import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DrawerNames, DrawerProps, PayloadDialogProps } from "./drawer.type";

export type DrawerState = {
  drawerName: DrawerNames | null;
  isDrawerOpened: boolean;
  dialogProps: DrawerProps;
};

const initialState: DrawerState = {
  drawerName: null,
  isDrawerOpened: false,
  dialogProps: {
    direction: "left"
  }
};

const dialogSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state: DrawerState, action: PayloadAction<PayloadDialogProps>) => {
      const { dialogName, props } = action.payload;
      state.drawerName = dialogName;
      state.dialogProps = {
        ...state.dialogProps,
        ...props
      };
      state.isDrawerOpened = true;
    },
    closeDrawer: (state: DrawerState) => {
      state.isDrawerOpened = false;
      state.drawerName = null;
    }
  }
});

export const { openDrawer, closeDrawer } = dialogSlice.actions;

export default dialogSlice.reducer;
