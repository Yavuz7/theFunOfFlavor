import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchApi = createApi({
  name: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => `/api/recipes`,
    }),
  }),
});

export const { useGetRecipesQuery } = searchApi;
