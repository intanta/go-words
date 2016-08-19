import React, { PropTypes } from 'react';

import Header from '../../components/header/Header';

import './app.css';

function App ({ children }) {
  return (
    <div className="container-fluid">
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
