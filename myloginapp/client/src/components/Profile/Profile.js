import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Profile.css';
import { useSelector } from 'react-redux';


export default function Profile() {
  const userdata = useSelector((state) => state.auth.user);
  const [image,setImage] = useState(null);
  const handleimage = (event)=>{
    const file = event.target.files[0];
    if(file){
      const imgurl = URL.createObjectURL(file); 
      setImage(imgurl);
    }
  }
  return (
    <div className="main_container">
    <nav className="navbar">
        <h1>MY WEB_APP</h1>
        <div className='navlast'>
        <Link to="/" className='backtohome'> Back to Home </Link>
        </div>
    </nav>
    <div className='containerprof'>
      <h3 style={{fontSize:'3rem'}}>Protfolio</h3>
      {image && ( <img src={image} alt='Uploaded' style={{maxWidth:'300px',maxHeight:'300px',padding:'1rem'}}/> )}
      <p>FirstName : {userdata.firstName}</p>
      <p>LatName : {userdata.lastName}</p>
      <p>Email ID : {userdata.email}</p>
      <input type='file' accept='image/*' onChange={handleimage} />
    </div>  
</div>
  )
}
