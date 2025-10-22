import { AppDispatch } from "@/app/store/store";
import { clearAuth } from "@/app/store/slices/auth/auth.slice";
import { clearUser } from "@/app/store/slices/user/user.slice";
import { clearCart } from "@/app/store/slices/cart/cart.slice";

export const logOut = () => async (dispatch: AppDispatch) => {
  dispatch(clearAuth());
  dispatch(clearUser());
  dispatch(clearCart());
};
