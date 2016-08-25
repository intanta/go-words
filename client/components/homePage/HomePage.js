import React, { PropTypes } from 'react';
import addLogo from '../../images/add-logo.png';
import testLogo from '../../images/test-logo.png';

import './homePage.scss';

const HomePage = ({onAdd, onTest}) => {
  return (
    <div className='text-center'>
      <div className="menu-icon left" onClick={onAdd}>
        <img src={addLogo} className="menu-logo"/>
        <p className="menu-text">Add new words!</p>
      </div>
      <div className="menu-icon" onClick={onTest}>
        <img src={testLogo} className="menu-logo"/>
        <p className="menu-text">Test yourself!</p>
      </div>
    </div>
  );
}

HomePage.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onTest: PropTypes.func.isRequired
}

export default HomePage;
