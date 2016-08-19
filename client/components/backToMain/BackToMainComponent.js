import React from 'react';
import { Link } from 'react-router';

import './backToMain.scss';

const BackToMainComponent = () => {
  return <div className="home-logo-container">
    <Link to="/"><img src="../../client/images/home-logo.png" className="home-logo" /></Link>
  </div>
}

export default BackToMainComponent;
