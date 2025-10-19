import { apiSlice } from "@/app/api/api-slice";

import { setUserProfile, setUserBalance } from "./user.slice";
import { setAuth } from "../auth/auth.slice";
import { UserType } from "@/app/entities/user";
import { cartApiSlice } from "../cart/cart.api";
import LocalStorageCartService from "@/src/shared/services/local-storage-cart";
import { UserTopUpBalanceType } from "./user.types";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserType, string>({
      query: (id) => ({
        url: `/auth/profiles/${id}`,
        method: "GET"
      }),
      onQueryStarted: async (userId, { dispatch, queryFulfilled }) => {
        try {
          const response = await queryFulfilled;
          const { ...rest } = response.data;
          dispatch(
            setUserProfile({
              ...rest,
              userId: userId
            })
          );
          dispatch(setAuth());
          const ids = LocalStorageCartService.getAllNodesIds();
          if (ids.length) {
            await dispatch(cartApiSlice.endpoints.getNodesForCart.initiate(ids.join(",")));
          }
        } catch (e) {
          console.log(e);
        }
      }
    }),
    topUpBalanceProfile: builder.mutation<{ balance: number }, UserTopUpBalanceType>({
      query: (props) => ({
        url: "/user/top-up-balance",
        method: "PUT",
        body: props
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const response = await queryFulfilled;
          const balance = response.data.balance;
          dispatch(setUserBalance(balance));
        } catch (e) {
          console.log(e);
        }
      }
    })
  })
});

export const { useTopUpBalanceProfileMutation } = userApiSlice;
