import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { SnackbaState } from "./snackbar.type";

const selectState = (state: RootState): SnackbaState => state.snackbar;

export const isSnackbarOpenedSelector = createSelector(selectState, (state) => state.isOpened);
