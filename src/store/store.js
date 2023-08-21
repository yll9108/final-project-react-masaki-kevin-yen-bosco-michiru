import { configureStore } from '@reduxjs/toolkit'
import myFridge from './slicers/myFridge'
import myReceips from './slicers/myReceips'
import search from './slicers/search'
const store = configureStore({
  reducer: {
    fridge: myFridge,
    recipes: myReceips,
    search: search,
  },
})

export default store
