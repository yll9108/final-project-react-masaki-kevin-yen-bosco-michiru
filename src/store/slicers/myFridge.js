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
      localStorage.setItem('fridgeItem', JSON.stringify(state))
    },
    removeFromFridge: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.itemId //filter by ID or name not sure yet
      )
      localStorage.setItem('fridgeItem', JSON.stringify(state))
    },
  },
})

export const { initialFridgeItemsSet, addToFridge, removeFromFridge } =
  myFridgeSlice.actions
export default myFridgeSlice.reducer
