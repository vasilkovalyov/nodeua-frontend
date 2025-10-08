import { combineReducers } from "redux";

import { apiSlice } from "../api/api-slice";
import userReducer from "./slices/user/user.slice";
import appInitializationReducer from "./slices/app-initialization/app-initialization.slice";
import dialogReducer from "./slices/dialog/dialog.slice";
import drawerReducer from "./slices/drawer/drawer.slice";
import authReducer from "./slices/auth/auth.slice";
import snackbarReducer from "./slices/snackbar/snackbar.slice";
import cartReducer from "./slices/cart/cart.slice";

const rootReducer = combineReducers({
  appInitialization: appInitializationReducer,
  auth: authReducer,
  user: userReducer,
  dialog: dialogReducer,
  drawer: drawerReducer,
  snackbar: snackbarReducer,
  cart: cartReducer,
  [apiSlice.reducerPath]: apiSlice.reducer
});

export default rootReducer;
