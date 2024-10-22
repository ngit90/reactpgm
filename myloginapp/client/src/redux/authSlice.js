// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {jwtDecode} from 'jwt-decode';

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: JSON.parse(localStorage.getItem("user")) || null,
    },
    reducers: {
        loggings:(state, action) =>{
            const decodedToken = jwtDecode(action.payload);
            localStorage.setItem("user", JSON.stringify(decodedToken));
            //console.log("Decoded data:", decodedToken.email);
            return {
                ...state,
                user: decodedToken, // Set the entire decoded token as user data
            };
        },
        logouts:(state) =>{
            localStorage.removeItem("user");
            return {
                ...state,
                user: null, // Clear user data on logout
            };
        },
    },
});

// Export actions and reducer
export const { loggings, logouts } = authSlice.actions;
export default authSlice.reducer;
