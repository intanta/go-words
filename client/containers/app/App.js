import React, { PropTypes } from 'react';

import Header from '../../components/header/Header';

import './app.css';

function App ({ children }) {
  return (
    <div>
      <Header />
      <div className="appContent">
        {children}
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
