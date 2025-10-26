import { apiSlice } from "@/app/api/api-slice";
import {
  ApiAdminCreateNodeRequestType,
  ApiAdminCreateNodeResponseType,
  ApiAdminEditNodeRequestType
} from "./node.api.type";

export const adminNode = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminCreateNode: builder.mutation<ApiAdminCreateNodeResponseType, ApiAdminCreateNodeRequestType>({
      query: (props) => ({
        url: `/create-node`,
        method: "POST",
        body: props
      })
    }),
    adminEditNode: builder.mutation<ApiAdminCreateNodeResponseType, ApiAdminEditNodeRequestType>({
      query: (props) => ({
        url: `/edit-node`,
        method: "PUT",
        body: props
      })
    })
  })
});

export const { useAdminCreateNodeMutation, useAdminEditNodeMutation } = adminNode;
