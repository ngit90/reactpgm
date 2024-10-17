import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../stores/Context';
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
function Header() {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  const auth = getAuth(firebase);
  const handlesignout = async () => {
    try {
      await signOut(auth); 
      navigate("/"); 
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
        <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={user ? ()=>{} : ()=> navigate('/login') }>{user ? `Hi, ${user.displayName}` : "Login"}</span>
          <hr />
        </div>
       {user && <span onClick={handlesignout} style={{cursor:'pointer'}}>Logout</span> } 
        <div  onClick={user ? ()=>{navigate('/create')} : ()=> navigate('/login') } className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
            
      </div>
    </div>
  );
}

export default Header;
