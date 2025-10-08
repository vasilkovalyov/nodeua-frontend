import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SnackbarPropsType } from "@/src/shared/ui/snackbar/snackbar.type";
import { SnackbaState } from "./snackbar.type";

export const defaultSnackbarProps: SnackbarPropsType = {
  color: "info",
  hideDuration: 2000,
  horizontalPosition: "right",
  verticalPosition: "top",
  title: ""
};

const initialState: SnackbaState = {
  isOpened: false,
  snackbarProps: defaultSnackbarProps
};

const snackbarSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openSnackbar: (state: SnackbaState, action: PayloadAction<SnackbarPropsType | undefined>) => {
      state.isOpened = true;
      if (action) {
        state.snackbarProps = action.payload;
      } else {
        state.snackbarProps = defaultSnackbarProps;
      }
    },
    closeSnackbar: (state: SnackbaState) => {
      state.isOpened = false;
      state.snackbarProps = defaultSnackbarProps;
    }
  }
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
