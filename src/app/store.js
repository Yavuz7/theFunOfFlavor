import { configureStore } from "@reduxjs/toolkit";
//This should be a api slice
// import searchPageSlice from "../features/SearchPage/searchPageSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { searchApi } from "../features/SearchPage/searchPageServices";

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});
