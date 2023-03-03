import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, IUserLogIn, IUserSignUp } from "./types";

const BASEURL = import.meta.env.VITE_API_URL + "users/";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASEURL }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    login: builder.mutation<IUser, IUserLogIn>({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
      transformResponse: (response: IUser) => response,
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    signup: builder.mutation<IUser, IUserSignUp>({
      query: (body) => ({
        url: "signup",
        method: "POST",
        body,
      }),
      transformResponse: (response: IUser) => response,
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),

      transformResponse: (response) => response,
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useLogoutMutation } =
  authAPI;
