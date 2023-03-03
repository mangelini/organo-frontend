import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMenu } from "./types";

const BASEURL = import.meta.env.VITE_API_URL + "menus/";

export const menuAPI = createApi({
  reducerPath: "menuAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  tagTypes: ["Menus"],
  endpoints: (builder) => ({
    getMenu: builder.query<IMenu, number>({
      query: (id) => ({ url: `${id}` }),
      transformResponse: (response: IMenu, meta, arg) => response,
      providesTags: (result, error, id) => [{ type: "Menus", id }],
    }),
    getAllMenus: builder.query<IMenu[], void>({
      query() {
        return {
          url: "",
          credentials: "include",
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Menus" as const, id })),
              { type: "Menus", id: "LIST" },
            ]
          : [{ type: "Menus", id: "LIST" }],
      transformResponse: (results: IMenu[]) => results,
    }),
  }),
});

export const { useGetMenuQuery, useGetAllMenusQuery } = menuAPI;
