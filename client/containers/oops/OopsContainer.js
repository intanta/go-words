import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Message from '../../components/message/Message';

class OopsContainer extends React.Component {
  render () {
    return (
      <div className="form-block text-center">
        <Message
          msgType='warning'
          msgText={this.props.error || ''}
        />
        <Link to='/'>Back to Main</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { error } = state.words;
  return { error };
}

export default connect(mapStateToProps)(OopsContainer);
