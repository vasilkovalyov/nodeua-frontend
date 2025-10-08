import { apiSlice } from "@/app/api/api-slice";

import { setUserProfile } from "./user.slice";
import { setAuth } from "../auth/auth.slice";
import { UserType } from "@/app/entities/user";
import { cartApiSlice } from "../cart/cart.api";
import LocalStorageCartService from "@/src/shared/services/local-storage-cart";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserType, number>({
      query: (id) => ({
        url: `/auth/profiles/${id}`,
        method: "GET"
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const response = await queryFulfilled;
          const { ...rest } = response.data;
          dispatch(
            setUserProfile({
              ...rest,
              userId: +args
            })
          );
          dispatch(setAuth());
          const ids = LocalStorageCartService.getAllNodesIds();
          await dispatch(cartApiSlice.endpoints.getNodesForCart.initiate(ids.join(",")));
        } catch (e) {
          console.log(e);
        }
      }
    })
  })
});
