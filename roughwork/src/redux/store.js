import {configureStore} from "@reduxjs/toolkit";
import CounterReducer from './counterslice';

const store = configureStore({
    reducer :{
        counter : CounterReducer,
    },
    
});

export default store;