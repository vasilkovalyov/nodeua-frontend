import { apiSlice } from "@/app/api/api-slice";

import { setUserProfile, setUserBalance } from "./user.slice";
import { setAuth } from "../auth/auth.slice";
import { UserType } from "@/app/entities/user";
import { cartApiSlice } from "../cart/cart.api";
import LocalStorageCartService from "@/src/shared/services/local-storage-cart";
import { GetActiveNodesResponseType, NodePaymentApiRequest } from "./user.types";
import { clearCart } from "../cart/cart.slice";

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
    topUpBalanceProfile: builder.mutation<{ balance: number }, { amount: number }>({
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
    }),
    buyNode: builder.mutation<{ balance: number }, NodePaymentApiRequest>({
      query: (props) => ({
        url: "/user/buy-node",
        method: "PUT",
        body: props
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const response = await queryFulfilled;
          const balance = response.data.balance;
          dispatch(setUserBalance(balance));
          dispatch(clearCart());
        } catch (e) {
          console.log(e);
        }
      }
    }),
    getActiveNodes: builder.query<GetActiveNodesResponseType, void>({
      query: () => ({
        url: "/user/active-nodes",
        method: "GET"
      })
    }),
    getExpiredNodes: builder.query<GetActiveNodesResponseType, void>({
      query: () => ({
        url: "/user/expired-nodes",
        method: "GET"
      })
    })
  })
});

export const { useTopUpBalanceProfileMutation, useBuyNodeMutation, useGetActiveNodesQuery, useGetExpiredNodesQuery } =
  userApiSlice;
