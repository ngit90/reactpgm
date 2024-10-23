// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {jwtDecode} from 'jwt-decode';

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: JSON.parse(localStorage.getItem("user")) || null,
        token:localStorage.getItem("token"),
    },
    reducers: {
        loggings:(state, action) =>{
            const decodedToken = jwtDecode(action.payload);
            localStorage.setItem("user", JSON.stringify(decodedToken));
            console.log("decoded data",decodedToken);
            return {
                ...state,
                user: decodedToken, 
                token: action,
            };
        },
        logouts:(state) =>{
            localStorage.removeItem("user");
            return {
                ...state,
                user: null, 
                token: null,
            };
        },
    },
});

// Export actions and reducer
export const { loggings, logouts } = authSlice.actions;
export default authSlice.reducer;
