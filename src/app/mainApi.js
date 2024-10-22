import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  name: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => `/api/recipes`,
    }),
  }),
});

export const { useGetRecipesQuery } = mainApi;
