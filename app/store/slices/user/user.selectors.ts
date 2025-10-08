import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../store";
import { UserState } from "./user.types";

export const selectUserState = (state: RootState): UserState => state.user;

export const getUserProfileData = createSelector(selectUserState, (state) => state.profile);
