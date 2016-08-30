import React, { PropTypes } from 'react';
import Validator from '../../utils/Validator';
import DOMHelper from '../../utils/DOMHelper';
import Message from '../../components/message/Message';
import Wrapper from '../../components/wrapper/Wrapper';

import './addNewWordForm.scss';

export default class AddNewWordForm extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      engWord: '',
      rusWord: '',
      showMsg: false
    };
    this.engWordField = this.renderField('New english word', 'text', 'engWord');
    this.rusWordField = this.renderField('Russian equivalent', 'text' ,'rusWord');
    this.message = null;
  }

  formMessage = (type, message) => {
    return <Message
      msgType={type}
      msgText={message}
    />
  }

  resetFields = () => {
    DOMHelper.makeBlank('engWord');
    DOMHelper.makeBlank('rusWord');
  }

  handleFieldChanged = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleFocus = (event) => {
    this.setState({ showMsg: false });
    DOMHelper.removeClass(event.target, 'has-error');
  }

  setError = (tagId) => {
    let elem = DOMHelper.getElem(tagId);
    DOMHelper.addClass(elem, 'has-error');
    this.setState({ showMsg: true });
    this.message = this.formMessage('warning', 'Spelling is incorrect! Please, check once more!');
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { engWord, rusWord } = this.state;
    const checkEng = Validator.validate(engWord,'isEnglish');
    if (!checkEng.result) {
      this.setError('engWord');
      return;
    }
    const checkRus = Validator.validate(rusWord,'isRussian');
    if (!checkRus.result) {
      this.setError('rusWord');
      return;
    }
    let wordPair = {
      eng: engWord.toLowerCase(),
      rus: rusWord.toLowerCase()
    };
    this.resetFields();
    this.props.onSave(wordPair);
  }

  renderField = (labelText, inputType, tagId) => {
    return (
      <div className='form-control-group'>
        <input type={inputType} id={tagId}
                placeholder={labelText}
                className='text-control'
                onFocus={this.handleFocus}
                onChange={this.handleFieldChanged}
        />
      </div>
    )
  }

  render () {
    return (
      <Wrapper>
        <h1>What new word have you learned?</h1>
        <form className="form-content" onSubmit={this.handleSubmit}>
          {this.engWordField}
          {this.rusWordField}
          <button type='submit' className='btn-common btn-success'>Save to vocabulary</button>
          {this.state.showMsg ? this.message : null}
        </form>
      </Wrapper>
    )
  }
}

AddNewWordForm.propTypes = {
  onSave: PropTypes.func.isRequired
}
