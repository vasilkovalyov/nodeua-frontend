import Cookies from "js-cookie";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserType } from "@/app/entities/user";

import { RootState } from "../../store";
import { UserState } from "./user.types";
import LocalStorageService from "@/src/shared/services/local-storage";
import { cookieKeys } from "@/src/shared/config/cookie-keys";

const defaultProps: UserState = {
  profile: {
    userId: "",
    email: "",
    balance: 0
  }
};

const initialState: UserState = defaultProps;

export const getUser = (state: RootState): UserState => state.user;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile: (state, action: PayloadAction<Partial<UserType>>) => {
      state.profile = {
        ...state.profile,
        ...action.payload
      };
    },
    setUserBalance: (state, action: PayloadAction<number>) => {
      state.profile.balance = action.payload;
    },
    clearUser: (state) => {
      state.profile = defaultProps.profile;
      LocalStorageService.removeUserId();
      Cookies.remove(cookieKeys.userId);
    }
  }
});

export const { setUserProfile, clearUser, setUserBalance } = userSlice.actions;

export default userSlice.reducer;
