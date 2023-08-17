import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const myFridgeSlice = createSlice({
    name: "fridge",
    initialState,
    reducers: {
        addToFridge: (state, action) => {
            state.push(action.payload);
            localStorage.setItem("fridgeItem", JSON.stringify(state));
        },
        removeFromFridge: (state, action) => {
            const index = state.indexOf(action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem("fridgeItem", JSON.stringify(state));
        },
    },
});

export const { addToFridge, removeFromFridge } = myFridgeSlice.actions;
export default myFridgeSlice.reducer;
