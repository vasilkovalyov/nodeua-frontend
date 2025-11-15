import Cookies from "js-cookie";

import { apiSlice } from "@/app/api/api-slice";

import { cookieKeys } from "@/src/shared/config/cookie-keys";
import LocalStorageService from "@/src/shared/services/local-storage";
import {
  LoginApiRequestType,
  SignUpApiRequestType,
  SignUpApiResponseType,
  SignUpEmailApiRequestType,
  LoginApiResponseType,
  UpdatePasswordApiRequestType
} from "./auth.types";

import { userApiSlice } from "../user/user.api";
import { clearAuth, startLoadingAuth, startLoadingLogout, stopLoadingAuth, stopLoadingLogout } from "./auth.slice";
import { clearUser } from "../user/user.slice";
import { clearCart } from "../cart/cart.slice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginApiResponseType, LoginApiRequestType>({
      query: (props) => ({
        url: "/auth/login",
        method: "POST",
        body: props
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          dispatch(startLoadingAuth());
          const response = await queryFulfilled;
          const { _id } = response.data;
          LocalStorageService.addUserId(_id);
          Cookies.set(cookieKeys.userId, _id.toString());
          await dispatch(userApiSlice.endpoints.getUserProfile.initiate(null, { forceRefetch: true }));
        } catch (e) {
          console.log(e);
        } finally {
          dispatch(stopLoadingAuth());
        }
      }
    }),
    signUp: builder.mutation<SignUpApiResponseType, SignUpApiRequestType>({
      query: (props) => ({
        url: "/auth/registration",
        method: "POST",
        body: props
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          dispatch(startLoadingAuth());
          const response = await queryFulfilled;
          const { userId } = response.data;
          LocalStorageService.emailConfirmation(args.email, userId);
        } catch (e: any) {
          console.log(e);
        } finally {
          dispatch(stopLoadingAuth());
        }
      }
    }),
    verifyEmail: builder.mutation<LoginApiResponseType, SignUpEmailApiRequestType>({
      query: (props) => ({
        url: "/auth/signup/email",
        method: "POST",
        body: props
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          dispatch(startLoadingAuth());
          await queryFulfilled;
          LocalStorageService.removeConfirmationInfo();
          LocalStorageService.addUserId(args.userId);
          await dispatch(userApiSlice.endpoints.getUserProfile.initiate(null));
        } catch (e) {
          console.log(e);
        } finally {
          dispatch(stopLoadingAuth());
        }
      }
    }),
    authUserPasswordUpdate: builder.mutation<unknown, UpdatePasswordApiRequestType>({
      query: ({ userId, oldPassword, newPassword }) => ({
        url: `/auth/${userId}/password`,
        method: "PUT",
        body: {
          oldPassword,
          newPassword
        }
      })
    }),
    logout: builder.mutation<boolean, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST"
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          dispatch(startLoadingLogout());
          const response = await queryFulfilled;
          if (response.data) {
            dispatch(clearAuth());
            dispatch(clearUser());
            dispatch(clearCart());
          }
        } catch (e) {
          console.log(e);
        } finally {
          dispatch(stopLoadingLogout());
        }
      }
    })
  })
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useSignUpMutation,
  useVerifyEmailMutation,
  useAuthUserPasswordUpdateMutation
} = authApiSlice;
