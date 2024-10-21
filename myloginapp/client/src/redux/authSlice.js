// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {jwtDecode} from 'jwt-decode';

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user:null,
    },
    reducers: {
        loggings:(state, action) =>{
            const decodedToken = jwtDecode(action.payload);
            console.log("Decoded data:", decodedToken.email);
            state.user = decodedToken; // Update state directly
        },
        logouts:(state) =>{
            state.user = null; // Clear user on logout
        },
    },
});

// Export actions and reducer
export const { loggings, logouts } = authSlice.actions;
export default authSlice.reducer;
