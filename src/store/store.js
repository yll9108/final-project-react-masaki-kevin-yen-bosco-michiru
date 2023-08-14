import { configureStore } from '@reduxjs/toolkit'
import myFridge from './slicers/myFridge'
import myReceips from './slicers/myReceips'

const store = configureStore({
  reducer: {
    fridge: myFridge,
    recipes: myReceips,
  },
})

export default store
