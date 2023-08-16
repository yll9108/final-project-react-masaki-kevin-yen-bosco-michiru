import { createSlice } from '@reduxjs/toolkit'

const getInitailState = () => {
  if (typeof window === 'undefined') return []
  return localStorage.getItem('recipes') ?? []
}

const initialState = {
  items: getInitailState(),
}
export const myReceipsSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addToMyRecipes: (state, action) => {
      //check if the recipe already exsits
      const recipe = state.recipes.find(
        (recipe) => recipe.id === action.payload.id
      )
      if (recipe) return
      state.recipes.push(action.payload)

      localStorage.setItem('recipes', JSON.stringify(state.recipes))
    },
    removeFromMyRecipes: (state, action) => {
      state = state.filter(
        (item) => item.id !== action.payload.itemId //filter by ID or name not sure yet
      )
      localStorage.setItem('recipes', JSON.stringify(state.recipes))
    },
  },
})

export const { addToMyRecipes, removeFromMyRecipes } = myReceipsSlice.actions
export default myReceipsSlice.reducer
