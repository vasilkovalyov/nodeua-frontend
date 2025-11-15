import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./auth.types";

const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  logoutLoading: false,
  errorMessage: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoadingAuth: (state) => {
      state.isLoading = true;
    },
    stopLoadingAuth: (state) => {
      state.isLoading = false;
    },
    startLoadingLogout: (state) => {
      state.logoutLoading = true;
    },
    stopLoadingLogout: (state) => {
      state.logoutLoading = false;
    },
    setErrorMessage: (state, action: PayloadAction<{ mesage: string }>) => {
      state.errorMessage = action.payload.mesage;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
    setAuth: (state) => {
      state.isAuth = true;
    },
    clearAuth: (state) => {
      state.isAuth = false;
    }
  }
});

export const {
  startLoadingAuth,
  stopLoadingAuth,
  setErrorMessage,
  clearErrorMessage,
  setAuth,
  clearAuth,
  startLoadingLogout,
  stopLoadingLogout
} = authSlice.actions;

export default authSlice.reducer;
