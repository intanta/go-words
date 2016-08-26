import React, { PropTypes } from 'react';

import DOMHelper from '../../utils/DOMHelper';

export default class TestForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      answer: ''
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.wordForCheck !== this.props.wordForCheck){
      DOMHelper.makeBlank('answer');
      this.setState({answer: ''});
    }
  }

  handleFieldChanged = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onCheck(this.state.answer);
  }

  render () {
    let error = this.state.error;
    return (
      <div className="text-center">
        <h2>Please, translate the following word... </h2>
        <h1>{this.props.wordForCheck}</h1>
        <form className="form-content" onSubmit={this.handleSubmit} onChange={this.handleFieldChanged}>
          <div className="form-control-group">
            <input type='text' id='answer' className='text-control' />
          </div>
          <button type='submit' className='btn-common btn-success'>Check</button>
        </form>
      </div>
    )
  }
}

TestForm.propTypes = {
  onCheck: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  wordForCheck: PropTypes.string.isRequired
}
