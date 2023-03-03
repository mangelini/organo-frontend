import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IOrderItem, IOrderItemCreate } from "./types";

const BASEURL = import.meta.env.VITE_API_URL + "orderItems/";

export const orderItemAPI = createApi({
  reducerPath: "orderItemAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  tagTypes: ["OrderItems"],
  endpoints: (builder) => ({
    getOrderItem: builder.query<IOrderItem, number>({
      query: (id) => ({ url: `${id}` }),
      transformResponse: (response: IOrderItem, meta, arg) => response,
      providesTags: (result, error, id) => [{ type: "OrderItems", id }],
    }),
    getAllOrderItemsByOrder: builder.query<IOrderItem[], number>({
      query: (id) => ({ url: `orders/${id}` }),
      transformResponse: (results: IOrderItem[]) => results,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "OrderItems" as const, id })),
              { type: "OrderItems", id: "LIST" },
            ]
          : [{ type: "OrderItems", id: "LIST" }],
    }),
    createOrderItem: builder.mutation<IOrderItem, IOrderItemCreate>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "OrderItems", id: "LIST" }],
    }),
  }),
});

export const {
  useGetOrderItemQuery,
  useGetAllOrderItemsByOrderQuery,
  useCreateOrderItemMutation,
} = orderItemAPI;
