import React, { PropTypes } from 'react';
import addLogo from '../../images/add-logo.png';
import testLogo from '../../images/test-logo.png';

import './homePage.scss';

const HomePage = ({onAdd, onTest}) => {
  return (
    <div className='text-center'>
      <div className="menu-icon-container left" onClick={onAdd}>
        <div className="menu-icon">
          <img src={addLogo} className="menu-logo"/>
          <p className="menu-text">Add new words!</p>
        </div>
      </div>
      <div className="menu-icon-container" onClick={onTest}>
        <div className="menu-icon">
          <img src={testLogo} className="menu-logo"/>
          <p className="menu-text">Test yourself!</p>
        </div>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onTest: PropTypes.func.isRequired
}

export default HomePage;
