import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../../actions/words'
import { bindActionCreators } from 'redux'

import Loader from 'react-loader';
import AddNewWordForm from '../../components/addNewWordForm/AddNewWordForm';

class AddNewWordFormContainer extends React.Component {
  handleSave = (wordPair) => {
    this.props.actions.addWord(wordPair);
  }

  render () {
    return (
      <Loader loaded={!this.props.isLoading}>
        <AddNewWordForm
          onSave={this.handleSave}
        />
      </Loader>
    )
  }
}

AddNewWordFormContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  const { isLoading } = state.words;
  return { isLoading };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddNewWordFormContainer);
