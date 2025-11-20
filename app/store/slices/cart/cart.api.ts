import { apiSlice } from "@/app/api/api-slice";
import { NodeType } from "@/app/entities/node";
import { addNodes, startLoadingCart, stopLoadingCart } from "./cart.slice";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNodesForCart: builder.mutation<NodeType[], string>({
      query: (ids) => ({
        url: `/nodes-cart?ids=${ids}`,
        method: "GET"
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          dispatch(startLoadingCart());
          const response = await queryFulfilled;
          const nodes = await response.data;
          dispatch(addNodes(nodes));
        } catch (e) {
          console.log(e);
        } finally {
          dispatch(stopLoadingCart());
        }
      }
    })
  })
});

export const { useGetNodesForCartMutation } = cartApiSlice;
