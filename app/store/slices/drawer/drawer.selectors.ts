import { createSelector } from "@reduxjs/toolkit";

import { DrawerState } from "./drawer.slice";
import { RootState } from "../../store";

const selectState = (state: RootState): DrawerState => state.drawer;

export const getDrawerNameSelector = createSelector(selectState, (state) => state.drawerName);
export const isDrawerOpenedSelector = createSelector(selectState, (state) => state.isDrawerOpened);
export const getDrawerProps = createSelector(selectState, (state) => state.dialogProps);
