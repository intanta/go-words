import React, { PropTypes } from 'react';

import BackToMainComponent from '../../components/backToMain/BackToMainComponent';

const Wrapper = ({children}) => {
  return <div className='form-block'>
    <BackToMainComponent />
    {children}
  </div>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper;
