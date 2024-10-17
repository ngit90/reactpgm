import React, { useContext, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../stores/Context';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import{Link, useNavigate} from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [Username,setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext);
  const auth = getAuth(firebase);
  const db = getFirestore(firebase);

  const handlesubmit = async (e)=>{
  e.preventDefault();
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, Email, Password);
    const user = userCredential.user;

    // Update the profile with the display name
    await updateProfile(user, {
      displayName: Username,
    });

    // Add custom data to Firestore
    await setDoc(doc(db, "users", user.uid), {
      Username: Username,
      Phone: Phone,
    }).then(()=> { navigate('/login')});
  } catch (error) {
    if (error.code === 'auth/weak-password') {
      alert('Password must be at least 6 characters long');
    } else {
      alert(error.message);
    }
}
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='imgsignup'></img>
        <form onSubmit={handlesubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={Username}
            onChange={(e)=> setUsername(e.target.value)}
            name="name"
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            value={Email}
            onChange={(e)=> setEmail(e.target.value)}
            name="email"
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            value={Phone}
            onChange={(e)=> setPhone(e.target.value)}
            name="phone"
          />
          <br />
          <label htmlFor="pass">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="pass"
            value={Password}
            onChange={(e)=> setPassword(e.target.value)}
            name="password"
          />
          <br />
          <br />
          <button type='sumbit'>Signup</button>
        </form>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
}
