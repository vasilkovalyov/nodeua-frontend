import { createSlice } from "@reduxjs/toolkit";
import { AppInitializationState } from "./app-initialization.type";

const appInitializationSlice = createSlice({
  name: "appInitialization",
  initialState: {
    loading: true
  },
  reducers: {
    startLoading: (state: AppInitializationState) => {
      state.loading = true;
    },
    stopLoading: (state: AppInitializationState) => {
      state.loading = false;
    }
  }
});

export const { startLoading, stopLoading } = appInitializationSlice.actions;

export default appInitializationSlice.reducer;
