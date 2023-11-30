import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        incrementByValue: (state, action) => { 
            return state += action.payload 
        }
    }
})

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;