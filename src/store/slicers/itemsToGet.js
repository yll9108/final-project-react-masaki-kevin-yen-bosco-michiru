import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const itemsToGetSlice = createSlice({
  name: 'itemsToGet',
  initialState,
  reducers: {
    addToItemsToGet: (state, action) => {
      state.items.push(...action.payload)
      //   localStorage.setItem('fridgeItem', JSON.stringify(state.items))
    },
    removeFromItemsToGet: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.itemId
      )
      //   localStorage.setItem('fridgeItem', JSON.stringify(state.items))
    },
  },
})

export const { addToItemsToGet, removeFromItemsToGet } = itemsToGetSlice.actions
export default itemsToGetSlice.reducer
