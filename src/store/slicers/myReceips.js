import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recipes: [],
}
export const myReceipsSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    initialRecipesSet: (state, action) => {
      state.recipes = action.payload
    },
    addToMyRecipes: (state, action) => {
      //check if the recipe already exsits
      console.log(action.payload)
      const recipe = state.recipes.find(
        (recipe) => recipe.id === action.payload.id
      )
      if (recipe) return
      state.recipes.push(action.payload)
      localStorage.setItem('recipes', JSON.stringify(state.recipes))
    },
    removeFromMyRecipes: (state, action) => {
      console.log(action.payload)
      state.recipes = state.recipes.filter((item) => item.id !== action.payload)
      localStorage.setItem('recipes', JSON.stringify(state.recipes))
    },
  },
})

export const {
  initialRecipesSet,
  addToMyRecipes,
  removeFromMyRecipes,
  setDataFromStorage,
} = myReceipsSlice.actions
export default myReceipsSlice.reducer
