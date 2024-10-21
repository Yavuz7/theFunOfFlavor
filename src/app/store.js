import { configureStore } from "@reduxjs/toolkit";
//This should be a api slice
import searchPageSlice from "../features/SearchPage/searchPageSlice";

export const store = configureStore({
  reducer: {
    searchPage: searchPageSlice,
  },
});
