import { configureStore } from "@reduxjs/toolkit";
import searchPageSlice from "../features/SearchPage/searchPageSlice";

export const store = configureStore({
  reducer: {
    searchPage: searchPageSlice,
  },
});
