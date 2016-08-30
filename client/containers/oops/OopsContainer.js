import React from 'react';
import { connect } from 'react-redux';

import Message from '../../components/message/Message';
import Wrapper from '../../components/wrapper/Wrapper';

class OopsContainer extends React.Component {
  render () {
    return (
      <Wrapper>
        <Message
          msgType='warning'
          msgText={this.props.error || ''}
        />
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { error } = state.words;
  return { error };
}

export default connect(mapStateToProps)(OopsContainer);
