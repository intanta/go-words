import React, { PropTypes } from 'react';

import './homePage.scss';

const HomePage = ({onAdd, onTest}) => {
  return (
    <div className='text-center'>
      <div className="menu-icon left" onClick={onAdd}>
        <img src="../../client/images/add-logo.png" className="menu-logo"/>
        <p className="menu-text">Add new words!</p>
      </div>
      <div className="menu-icon" onClick={onTest}>
        <img src="../../client/images/test-logo.png" className="menu-logo"/>
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
