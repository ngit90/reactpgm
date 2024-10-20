import React, { useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { loginSuccess } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const dispatch = useDispatch();
  //const error = useSelector((state) => state.auth.error);
  const error = "no data";
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      const response = await axios.post('http://localhost:5000/api/users/login', { 
          username, 
          password, 
  }); 
  localStorage.setItem('token', response.data.token); 
  navigate('/profile'); 
} catch (error) { 
      console.error(error); 
} 
}


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
