import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

// Styles
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import  {NavBarStyle}  from './Styles';

// Components
import Dropdown from './Dropdown';


const styles = {
  bookmarkStyle: {
    color: '#FCD430',
    fontSize: 35,
  },
  profileStyle: {
    color: '#FCD430',
    fontSize: '35px',
    marginLeft: "15px",
    verticalAlign: "middle"
  },
};

const Nav = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <NavBarStyle>

      <Navbar className="navbar ">

        
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="https://icon-library.com/images/white-video-camera-icon/white-video-camera-icon-7.jpg" alt="logo" />
          <i className="fal fa-utensils-alt" />
        </Link>

        
        <div className="menu-icon" onKeyDown={handleClick} onClick={handleClick} role="presentation">
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>


        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links left" onKeyDown={closeMobileMenu} onClick={closeMobileMenu}>
              Home
              <i className="far fa-utensils-alt" />
            </Link>
          </li>


          <li className="nav-item">
            <Link to="/about" className="nav-links left" onKeyDown={closeMobileMenu} onClick={closeMobileMenu}>
              About 
            </Link>
          </li>
         
          <li
            className='nav-item'
            onClick={() => setDropdown(!dropdown)}
            onKeyDown={() => setDropdown(!dropdown)}
            role="presentation"
          >
            <div
             role="presentation"
              className='nav-links'
            >
              Genres <i className='fas fa-caret-down' />
            </div>
            {dropdown && <Dropdown />}
          </li>


          <li className="nav-item">
            <Link
              to="/actors"
              className="nav-links left"
              onKeyDown={closeMobileMenu} onClick={closeMobileMenu}
            >
              Actors
            </Link>
          </li>
        
          <li className="nav-item">
            <div className="nav-links" onKeyDown={closeMobileMenu} onClick={closeMobileMenu} role="presentation">
              <BookmarkIcon style={styles.bookmarkStyle} />
            </div>
          </li>


          <li className="nav-item">
            <Link
              to="/"
              className="nav-links login "
              onClick={closeMobileMenu}
              >
              Login
              <AccountCircleIcon style={styles.profileStyle} /> 
              {/* {authStore.user ? 'Profile' : 'Log In'} */}
            </Link>
          </li>
        </ul>


      </Navbar>
    </NavBarStyle>
  );
};

export default Nav;
