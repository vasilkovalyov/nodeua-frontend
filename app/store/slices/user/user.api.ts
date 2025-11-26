import { apiSlice } from "@/app/api/api-slice";

import { setUserProfile, setUserBalance } from "./user.slice";
import { setAuth } from "../auth/auth.slice";
import { UserType } from "@/app/entities/user";
import { cartApiSlice } from "../cart/cart.api";
import LocalStorageCartService from "@/src/shared/services/local-storage-cart";
import {
  CreateInvoiceProps,
  CreateInvoiceResponseProps,
  GetActiveNodesResponseType,
  NodePaymentApiRequest
} from "./user.types";
import { clearCart, stopLoadingCart } from "../cart/cart.slice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserType, null>({
      query: () => ({
        url: "/user/profile",
        method: "GET"
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const response = await queryFulfilled;
          const result = response.data;

          dispatch(
            setUserProfile({
              ...result,
              userId: result.userId
            })
          );
          dispatch(setAuth());
          const ids = LocalStorageCartService.getAllNodesIds();
          if (ids.length) {
            await dispatch(cartApiSlice.endpoints.getNodesForCart.initiate(ids.join(",")));
          } else {
            dispatch(stopLoadingCart());
          }
        } catch (e) {
          console.log(e);
        }
      }
    }),
    createPaymentInvoiceProfile: builder.mutation<CreateInvoiceResponseProps, CreateInvoiceProps>({
      query: (props) => ({
        url: "/create-invoice",
        method: "POST",
        body: props
      })
      // onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
      //   try {
      //     const response = await queryFulfilled;
      //     const balance = response.data.balance;
      //     dispatch(setUserBalance(balance));
      //   } catch (e) {
      //     console.log(e);
      //   }
      // }
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

export const {
  useCreatePaymentInvoiceProfileMutation,
  useBuyNodeMutation,
  useGetActiveNodesQuery,
  useGetExpiredNodesQuery
} = userApiSlice;
