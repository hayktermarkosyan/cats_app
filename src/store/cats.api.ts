import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const catsApi = createApi({
  reducerPath: "cats/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.thecatapi.com/v1/",
  }),
  endpoints: (build) => ({
    getCats: build.query<ICat[], { limit?: number; sortById?: number }>({
      query: (args) => {
        const { limit, sortById = 1 } = args;
        return {
          url: `images/search?limit=${limit}&page=1&category_ids=${sortById}`,
        };
      },
    }),
    getCategories: build.query<ICategory[], any>({
      query: () => ({
        url: `categories`,
      }),
    }),
  }),
});

export const { useGetCatsQuery, useGetCategoriesQuery } = catsApi;
