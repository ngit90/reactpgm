import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0 , value : 1,
};

const counterslice = createSlice ({
    name :'counter',
    initialState,
    reducers : {
        increment : (state)=> {
            state.count += 1;
        },
        decrement : (state)=> {
            state.value -= 1;
        },

    }
});
export const  {increment, decrement} = counterslice.actions;
export default counterslice.reducer;