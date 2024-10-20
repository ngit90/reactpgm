import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    isAuthenticated: false,
    user: null,
    error: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { loginSuccess, logout, setError } = authSlice.actions;
export default authSlice.reducer;


export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/users/login', {
      username,
      password,
    });

    dispatch(loginSuccess(response.data)); // Dispatch success action
    return response.data;  // Return response for .then() to handle
  } catch (error) {
    dispatch(setError('Invalid username or password'));
    throw error;  // Throw error so it can be caught in .catch() in the component
  }
};