import React,{useContext, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import './App.css';

import { FirebaseContext, AuthContext } from './stores/Context';
import Home from './Pages/Home';

function App() {
  const {setUser} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  const auth = getAuth(firebase);
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        setUser(user); // Set user state with authenticated user info
    });
  })
  return (
    <div>
      <Router>
        <Routes>
        <Route  exact path='/' Component={Home}/>
        <Route path='/signup' Component={Signup}/>
        <Route path='/login' Component={Login}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
