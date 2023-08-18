import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  myFridgeIngredients: [],
  searchRecipe: [],
  filterCuisine: [],
  filterDiet: [],
  filterIntolerance: [],
  //初回はuseFetchのfetchDataを呼び出さないためのstate
  hasChanged: false,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addmyFridgeIngredients: (state, action) => {
      state.myFridgeIngredients.push(action.payload)
      state.hasChanged = true
    },
    removemyFridgeIngredients: (state, action) => {
      state.myFridgeIngredients = state.myFridgeIngredients.filter(
        (item) => item !== action.payload
      )
      state.hasChanged = true
    },
  },
})

export const { addmyFridgeIngredients, removemyFridgeIngredients } =
  searchSlice.actions
export default searchSlice.reducer
