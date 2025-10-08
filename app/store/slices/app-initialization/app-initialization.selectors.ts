import { createSelector } from "@reduxjs/toolkit";

import { AppInitializationState } from "./app-initialization.type";
import { RootState } from "../../store";

const selectState = (state: RootState): AppInitializationState => state.appInitialization;

export const getIsAppLoadingSelector = createSelector(selectState, (state) => state.loading);
