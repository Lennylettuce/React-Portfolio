import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Button } from './button';


const Navbar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobile = () => setClick(false);

  // mobile responsive button
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  // hide button on refresh
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          {/* to close mobile menu on click */}
          <Link to='/' className='navbar-logo' onClick={closeMobile}>
            Home <i className='fas fa-code' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/aboutme' className='nav-links' onClick={closeMobile}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/resume'
                className='nav-links'
                onClick={closeMobile}
              >
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contactme'
                className='nav-links'
                onClick={closeMobile}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to='/projects'
                className='nav-links-mobile'
                onClick={closeMobile}
              >
                Projects
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Projects</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;