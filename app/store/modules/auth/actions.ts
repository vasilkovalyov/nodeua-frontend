import Cookies from "js-cookie";

import { cookieKeys } from "@/src/shared/config/cookie-keys";

import { AppDispatch } from "@/app/store/store";
import { clearAuth } from "@/app/store/slices/auth/auth.slice";
import { clearUser } from "@/app/store/slices/user/user.slice";
import { clearNodes } from "@/app/store/slices/cart/cart.slice";
import LocalStorageService from "@/src/shared/services/local-storage";
import LocalStorageCartService from "@/src/shared/services/local-storage-cart";

export const logOut = () => async (dispatch: AppDispatch) => {
  dispatch(clearAuth());
  dispatch(clearUser());
  LocalStorageService.removeUserId();
  Cookies.remove(cookieKeys.accessToken);
  Cookies.remove(cookieKeys.refreshToken);
  Cookies.remove(cookieKeys.userId);
  LocalStorageCartService.clearCart();
  dispatch(clearNodes());
};
