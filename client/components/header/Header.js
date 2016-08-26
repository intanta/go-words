import React from 'react';
import logo from '../../images/logo.png';

import './header.scss'

function Header () {
  return <header className="text-center">
    <img src={logo} alt="Go words!" className="app-logo" />
  </header>
}

export default Header;
