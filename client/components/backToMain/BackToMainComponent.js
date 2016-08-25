import React from 'react';
import { Link } from 'react-router';
import homeLogo from '../../images/home-logo.png';

import './backToMain.scss';

const BackToMainComponent = () => {
  return <div className="home-logo-container">
    <Link to="/"><img src={homeLogo} className="home-logo" /></Link>
  </div>
}

export default BackToMainComponent;
