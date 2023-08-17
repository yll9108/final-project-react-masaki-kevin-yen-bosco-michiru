import { configureStore } from '@reduxjs/toolkit';
import myFridge from './slicers/myFridge';
import myReceips from './slicers/myReceips';
import itemsToGet from './slicers/itemsToGet';

const store = configureStore({
  reducer: {
    fridge: myFridge,
    recipes: myReceips,
    itemsToGet: itemsToGet,
  },
});

export default store;
