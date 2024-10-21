import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
};

export const searchPageSlice = createSlice({
  name: "searchPage",
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.recipes = state.recipes.concat(action.payload);
    },
  },
});

export const { setSearchResults } = searchPageSlice.actions;

export default searchPageSlice.reducer;
