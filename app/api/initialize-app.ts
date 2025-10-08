import { AppDispatch } from "../store/store";
import { userApiSlice } from "../store/slices/user/user.api";
import { startLoading, stopLoading } from "../store/slices/app-initialization/app-initialization.slice";
import LocalStorageService from "@/src/shared/services/local-storage";

export const initializeApp = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading());
    const userId = LocalStorageService.getUserId();
    if (!userId) return;
    await dispatch(userApiSlice.endpoints.getUserProfile.initiate(userId));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(stopLoading());
  }
};
