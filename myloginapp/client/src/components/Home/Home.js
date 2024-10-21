import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logouts } from "../../redux/authSlice";

export default function Home() {
  
  //const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.auth.user);
  console.log("data from there",userdata);

      
    const handleLogout = () => {
    dispatch(logouts());
		localStorage.removeItem("token");
    window.location = "/";
	};

  return (
    <div className="main_container">
    <nav className="navbar">
        <h1>MY WEB_APP</h1>
        <div className='navlast'>

        <Link to="/profile" className='proflink'> Profile </Link>
        <button className="white_btn" onClick={handleLogout}>
            Logout
        </button>
        </div>
    </nav>
    <div>
            <h3>{userdata}</h3>
    </div>
</div>
  )
}
