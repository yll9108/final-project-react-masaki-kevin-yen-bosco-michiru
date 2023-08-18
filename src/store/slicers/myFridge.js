import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const myFridgeSlice = createSlice({
  name: 'fridge',
  initialState,
  reducers: {
    initialFridgeItemsSet: (state, action) => {
      state.items = action.payload
    },
    addToFridge: (state, action) => {
      state.items.push(action.payload)
      localStorage.setItem('fridgeItem', JSON.stringify(state.items))
    },
    removeFromFridge: (state, action) => {
      state.items = state.items.filter(
        (item) => item !== action.payload
      )
      localStorage.setItem('fridgeItem', JSON.stringify(state.items))
    },
  },
})

export const { initialFridgeItemsSet, addToFridge, removeFromFridge } =
  myFridgeSlice.actions
export default myFridgeSlice.reducer
