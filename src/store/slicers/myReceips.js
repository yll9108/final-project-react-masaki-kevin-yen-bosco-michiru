import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const myReceipsSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addToMyRecipes: (state, action) => {
      state.items = action.payload
      localStorage.setItem('recipes', JSON.stringify(state.items))
    },
    removeFromMyRecipes: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.itemId //filter by ID or name not sure yet
      )
      localStorage.setItem('recipes', JSON.stringify(state.items))
    },
  },
})

export const { addToMyRecipes, removeFromMyRecipes } = myReceipsSlice.actions
export default myReceipsSlice.reducer
