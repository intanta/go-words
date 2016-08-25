import React, { PropTypes } from 'react';
import successIcon from '../../images/success-icon.png';
import errorIcon from '../../images/error-icon.png';
import warningIcon from '../../images/warning-icon.png';

import './message.scss';

const TYPES = {
  success : {
    style: 'message text-success',
    iconUrl: successIcon
  },
  error : {
    style: 'message text-error',
    iconUrl: errorIcon
  },
  warning : {
    style: 'message text-warning',
    iconUrl: warningIcon
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
