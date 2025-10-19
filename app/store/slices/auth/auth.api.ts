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
import { startLoadingAuth, stopLoadingAuth } from "./auth.slice";

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
          const { accessToken, refreshToken, _id } = response.data;
          Cookies.set(cookieKeys.accessToken, accessToken);
          Cookies.set(cookieKeys.refreshToken, refreshToken);
          LocalStorageService.addUserId(_id);
          Cookies.set(cookieKeys.userId, _id.toString());
          await dispatch(userApiSlice.endpoints.getUserProfile.initiate(_id, { forceRefetch: true }));
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
        } catch (e) {
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
          const response = await queryFulfilled;
          LocalStorageService.removeConfirmationInfo();
          LocalStorageService.addUserId(args.userId);
          Cookies.set(cookieKeys.accessToken, response.data.accessToken);
          Cookies.set(cookieKeys.refreshToken, response.data.refreshToken);
          await dispatch(userApiSlice.endpoints.getUserProfile.initiate(args.userId));
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
    })
  })
});

export const { useLoginMutation, useSignUpMutation, useVerifyEmailMutation, useAuthUserPasswordUpdateMutation } =
  authApiSlice;
