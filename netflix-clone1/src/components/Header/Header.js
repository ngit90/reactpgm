import React from 'react'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (

    <div className="navbar" >

    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
    <ul style={{color:'white'}} className="navbar__list">
      <li className="navbar__item">Home</li>
      <li className="navbar__item">TV Shows</li>
      <li className="navbar__item">Movies</li>
      <li className="navbar__item">New & Popular</li>
      <li className="navbar__item">My List</li>
      <li className="navbar__item">Browse by Languages</li>

    </ul>
    <div>
      <ul className="navbar__list1">
        <li className="navbar__item1"><FontAwesomeIcon icon={faMagnifyingGlass} style={{color:'white'}} /></li>
        <li className="navbar__item1" style={{color:'white',fontSize:16}}> Children</li>
        <li className="navbar__item1"><FontAwesomeIcon icon={faBell} style={{color:'white'}} /></li>
        <li className="navbar__item1"> <img className="avatar" src="/images/img1.png" alt="Avatar"/></li>
        <li className="navbar__item1"><FontAwesomeIcon icon={faCaretDown} style={{color:'white'}} /></li>
      </ul>

    </div>
    </div>
  )
}

export default Header;
