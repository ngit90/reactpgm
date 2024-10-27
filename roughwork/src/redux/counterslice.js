import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    count : 0,
}

const CounterReducer = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state,action)=> {
            state.count += action.payload;
        },
        decrement : (state,action)=> {
            state.count -= action.payload;
        },
    }
})
    
export const {increment, decrement} = CounterReducer.actions;
export default CounterReducer.reducer;