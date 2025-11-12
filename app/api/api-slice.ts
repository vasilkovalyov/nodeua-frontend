import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryReturnValue,
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

import { setAuth } from "../store/slices/auth/auth.slice";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api`,
  credentials: "include"
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> => {
  let result = await baseQuery(args, api, extraOptions);
  const isInvalidJWTToken = result.error?.status === 401;

  if (isInvalidJWTToken) {
    const refreshRes = await baseQuery(
      {
        url: "auth/refresh-token",
        method: "POST"
      },
      api,
      extraOptions
    );

    if (refreshRes.data) {
      api.dispatch(setAuth());

      result = await baseQuery(args, api, extraOptions);
    } else {
      if ((api.dispatch as any).logout) {
        await api.dispatch((api.dispatch as any).logout.initiate());
      }
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
});
