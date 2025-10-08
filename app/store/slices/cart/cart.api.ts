import { apiSlice } from "@/app/api/api-slice";
import { NodeType } from "@/app/entities/node";
import { addNodes } from "./cart.slice";

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNodesForCart: builder.mutation<NodeType[], string>({
      query: (ids) => ({
        url: `/nodes-cart?ids=${ids}`,
        method: "GET"
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const response = await queryFulfilled;
          const nodes = await response.data;
          dispatch(addNodes(nodes));
        } catch (e) {
          console.log(e);
        }
      }
    })
  })
});

export const { useGetNodesForCartMutation } = cartApiSlice;
