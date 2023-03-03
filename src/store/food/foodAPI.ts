import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFood, IFoodResponse, IFoodsResponse } from "./types";

const BASEURL = import.meta.env.VITE_API_URL + "foods/";

export const foodAPI = createApi({
  reducerPath: "foodAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  tagTypes: ["Foods"],
  endpoints: (builder) => ({
    getFood: builder.query<IFood, number>({
      query: (id) => ({ url: `${id}` }),
      transformResponse: (response: IFood, meta, arg) => response,
      providesTags: (result, error, id) => [{ type: "Foods", id }],
    }),
    getAllFoods: builder.query<IFood[], void>({
      query() {
        return {
          url: "",
          credentials: "include",
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Foods" as const, id })),
              { type: "Foods", id: "LIST" },
            ]
          : [{ type: "Foods", id: "LIST" }],
      transformResponse: (results: { foods: IFood[] }) => results.foods,
    }),
    getFoodsByMenu: builder.query<IFood[], number>({
      query: (id) => ({ url: `menus/${id}` }),
      transformResponse: (results: IFood[]) => results,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Foods" as const, id })),
              { type: "Foods", id: "LIST" },
            ]
          : [{ type: "Foods", id: "LIST" }],
    }),
  }),
});

export const { useGetFoodQuery, useGetAllFoodsQuery, useGetFoodsByMenuQuery } =
  foodAPI;
