import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myFridgeIngredients: [],
  searchRecipe: [],
  filterCuisine: [],
  filterDiet: [],
  filterIntolerance: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addmyFridgeIngredients: (state, action) => {
      state.myFridgeIngredients.push(action.payload);
    },
    removemyFridgeIngredients: (state, action) => {
      state.myFridgeIngredients = state.myFridgeIngredients.filter((item) => item !== action.payload);
    },
  },
});

export const { addmyFridgeIngredients, removemyFridgeIngredients } = searchSlice.actions;
export default searchSlice.reducer;
