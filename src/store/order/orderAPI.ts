import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IOrder, IOrderCreate } from "./types";

const BASEURL = import.meta.env.VITE_API_URL + "orders/";

export const orderAPI = createApi({
  reducerPath: "orderAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    getOrder: builder.query<IOrder, number>({
      query: (id) => ({ url: `${id}` }),
      transformResponse: (response: IOrder, meta, arg) => response,
      providesTags: (result, error, id) => [{ type: "Orders", id }],
    }),
    getAllOrdersByUser: builder.query<Array<IOrder[]>, number>({
      query: (id) => ({ url: `users/${id}` }),
      transformResponse: (results: IOrder[]) => {
        // split the results into sub arrays of the same date with typescript
        const resultsByDate = results.reduce((acc, result) => {
          const date = new Date(result.createdAt).toDateString();
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(result);
          return acc;
        }, {} as Record<string, IOrder[]>);

        // convert the object into an array of objects with date and orders
        // and sort the array by date
        // and return an array of arrays of type IOrder
        const res = Object.entries(resultsByDate)
          .map(([date, orders]) => ({ date, orders }))
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((obj) => obj.orders);

        return res;
      },
      providesTags: ["Orders"],
    }),
    createOrder: builder.mutation<IOrder, IOrderCreate>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Orders", id: "LIST" }],
    }),
  }),
});

export const {
  useGetOrderQuery,
  useGetAllOrdersByUserQuery,
  useCreateOrderMutation,
} = orderAPI;
