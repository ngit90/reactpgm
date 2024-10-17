import React, { useState,useContext } from 'react';
import{Link, useNavigate} from 'react-router-dom';
import { FirebaseContext } from '../../stores/Context';
import Logo from '../../olx-logo.png';
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext);
  const auth = getAuth(firebase);
  const handlesubmit = async (e)=> {
    e.preventDefault();
    try {
      // Sign in with Firebase Authentication
      await signInWithEmailAndPassword(auth, Email, Password).then(()=> {navigate("/")});
      //const user = userCredential.user;
 
    } catch (error) {
      alert(error.message);
    }

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt='loginimg'></img>
        <form onSubmit={handlesubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={Email}
            onChange={(e)=> setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={Password}
            onChange={(e)=> setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type='submit'>Login</button>
        </form>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
