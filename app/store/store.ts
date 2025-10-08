import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";

import rootReducer from "./root-reducer";
import { apiSlice } from "../api/api-slice";
import { middlewares } from "./middlewares";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat([apiSlice.middleware, ...middlewares])
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
