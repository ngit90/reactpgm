import React from 'react';
import {Link} from 'react-router-dom';
import './Profile.css';


export default function Profile() {
   
  return (
    <div className="main_container">
    <nav className="navbar">
        <h1>MY WEB_APP</h1>
        <div className='navlast'>
        <Link to="/home" className='backtohome'> Back to Home </Link>
        </div>
    </nav>
   
</div>
  )
}
