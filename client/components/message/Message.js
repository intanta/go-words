import React, { PropTypes } from 'react';

import './message.scss';

const TYPES = {
  success : {
    style: 'message text-success',
    iconUrl: '../../client/images/success-icon.png'
  },
  error : {
    style: 'message text-error',
    iconUrl: '../../client/images/error-icon.png'
  },
  warning : {
    style: 'message text-warning',
    iconUrl: '../../client/images/warning-icon.png'
  }
}

const Message = props => {
  let { style, iconUrl } = TYPES[props.msgType];
  return <div className="message-container">
    <img src={iconUrl} className='result-icon'/>
    <span className={style}> {props.msgText} </span>
  </div>
}

Message.propTypes = {
  msgText: PropTypes.string.isRequired,
  msgType: PropTypes.oneOf(['success', 'error', 'warning']).isRequired
}

export default Message;
