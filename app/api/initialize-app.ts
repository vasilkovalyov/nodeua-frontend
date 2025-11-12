import { AppDispatch } from "../store/store";
import { userApiSlice } from "../store/slices/user/user.api";
import { startLoading, stopLoading } from "../store/slices/app-initialization/app-initialization.slice";
import LocalStorageService from "@/src/shared/services/local-storage";
import LocalStorageCartService from "@/src/shared/services/local-storage-cart";

export const initializeApp = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading());
    const parsedUrl = new URL(window.location.href);
    const userIdFromUrl = parsedUrl.searchParams.get("userId");

    if (userIdFromUrl) {
      LocalStorageService.addUserId(userIdFromUrl);
      parsedUrl.searchParams.delete("userId");
      window.history.replaceState({}, "", parsedUrl.toString());
    }

    const userId = LocalStorageService.getUserId();
    if (!userId) {
      if (!LocalStorageCartService.isEmptyCart()) {
        LocalStorageCartService.clearCart();
      }
      return;
    }

    await dispatch(userApiSlice.endpoints.getUserProfile.initiate(null));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(stopLoading());
  }
};
