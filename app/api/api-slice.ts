import Cookies from "js-cookie";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryReturnValue,
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

import { cookieKeys } from "@/src/shared/config/cookie-keys";

import { setAuth } from "../store/slices/auth/auth.slice";
import { logOut } from "../store/modules/auth/actions";
import LocalStorageService from "@/src/shared/services/local-storage";
import { LoginApiResponseType } from "../store/slices/auth/auth.types";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  credentials: "same-origin",
  prepareHeaders: (headers) => {
    const token = Cookies.get(cookieKeys.accessToken);

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  }
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> => {
  let result = await baseQuery(args, api, extraOptions);

  const isInvalidJWTToken = result.error?.status === 401;

  if (isInvalidJWTToken) {
    const refreshTokenFromCookies = Cookies.get(cookieKeys.refreshToken);

    Cookies.remove(cookieKeys.accessToken);

    const refreshRes = await baseQuery(
      {
        url: "auth/refresh-token",
        method: "POST",
        body: { refreshToken: refreshTokenFromCookies }
      },
      api,
      extraOptions
    );

    if (refreshRes.data) {
      const { accessToken, refreshToken } = refreshRes.data as LoginApiResponseType;

      Cookies.set(cookieKeys.accessToken, accessToken);
      Cookies.set(cookieKeys.refreshToken, refreshToken);

      api.dispatch(setAuth());

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
      LocalStorageService.removeUserId();
      Cookies.remove(cookieKeys.userId);
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
});
