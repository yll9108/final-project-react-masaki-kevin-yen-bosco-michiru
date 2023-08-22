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
    addSearchedRecipe: (state, action) => {
      state.searchRecipe.push(action.payload)
      state.hasChanged = true
    },
    // removeSearchedRecipe: (state, action) => {
    //   state.searchRecipe = state.searchRecipe.filter(
    //     (item) => item !== action.payload
    //   )
    //   state.hasChanged = true
    // },
    addFilterCuisine: (state, action) => {
      //check if the item already exsits
      const keyword = state.filterCuisine.find(
        (item) => item === action.payload
      )
      if (keyword) {
        state.filterCuisine = state.filterCuisine.filter(
          (item) => item !== action.payload
        )
      } else {
        state.filterCuisine.push(action.payload)
      }
      state.hasChanged = true
    },
    addFilterDiet: (state, action) => {
      const keyword = state.filterDiet.find((item) => item === action.payload)
      if (keyword) {
        state.filterDiet = state.filterDiet.filter(
          (item) => item !== action.payload
        )
      } else {
        state.filterDiet.push(action.payload)
      }
      state.hasChanged = true
    },
    addFilterIntolerance: (state, action) => {
      const keyword = state.filterIntolerance.find(
        (item) => item === action.payload
      )
      if (keyword) {
        state.filterIntolerance = state.filterIntolerance.filter(
          (item) => item !== action.payload
        )
      } else {
        state.filterIntolerance.push(action.payload)
      }
      state.hasChanged = true
    },
  },
})

export const {
  addmyFridgeIngredients,
  removemyFridgeIngredients,
  addSearchedRecipe,
  removeSearchedRecipe,
  addFilterCuisine,
  removeFilterCuisine,
  addFilterDiet,
  removeFilterDiet,
  addFilterIntolerance,
  removeFilterIntolerance,
} = searchSlice.actions
export default searchSlice.reducer
