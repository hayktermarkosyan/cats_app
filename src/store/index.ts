import { configureStore } from "@reduxjs/toolkit";
import { catsApi } from "./cats.api";

export const store = configureStore({
  reducer: {
    [catsApi.reducerPath]: catsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catsApi.middleware),
});
