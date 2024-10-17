import React,{useState,useContext} from 'react'
import './Header.css';
import { faMagnifyingGlass, faBell, faCaretDown,faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { IconContext } from '../../AppContext';

function Header() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {FontAwesomeIcon} = useContext(IconContext);
  // Toggle dropdown when hovering over the arrow
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
        <li className="navbar__item1"> 
        <div
          className="dropdown"
          onMouseEnter={toggleDropdown}  // Show dropdown and change to up arrow
          onMouseLeave={toggleDropdown}  // Hide dropdown and revert to down arrow
        >
          <div className="dropdown__title">
            <FontAwesomeIcon
              icon={isDropdownOpen ? faCaretUp : faCaretDown}  // Toggle arrow icons
              className="dropdown__icon"
            />
          </div>

          {/* Dropdown menu - visible on hover */}
          {isDropdownOpen && (
            <ul className="dropdown__list">
              <li className="dropdown__listitm">Manage Profiles</li>
              <li className="dropdown__listitm">Transfer Profile</li>
              <li className="dropdown__listitm">Account</li>
              <li className="dropdown__listitm">Help Center</li>
              <li className="dropdown__listitm">Signout on Netflix</li>
            </ul>
          )}
        </div>
        </li>
      </ul>

    </div>
    </div>
  )
}

export default Header;
