import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as testActionCreators from '../../actions/test';
import { fetchWords } from '../../actions/words';

import Loader from 'react-loader';
import TestForm from '../../components/testForm/TestForm';
import Message from '../../components/message/Message';
import BackToMainComponent from '../../components/backToMain/BackToMainComponent';

import Validator from '../../utils/Validator';

import './testFormContainer.scss';

class TestFormContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentWord: 0,
      score: 0,
      showNext: false,
      showMsg: false
    };
    this.message = null;
    this.nextBtn = this.renderNextBtn();
  }

  componentWillMount () {
    this.props.actions.fetchWords();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.error) {
      this.context.router.push('oops');
    } else {
      if (newProps.data && newProps.data.length === 0) {
        this.context.router.push('oops');
      }
    }
  }

  componentWillUnmount () {
    if (!this.props.data) { return; }
    if (this.state.currentWord !== this.props.data.length - 1){
      this.props.actions.resetTotal();
      this.props.actions.resetScore();
    }
  }

  formMessage = (type, message) => {
    return <Message
      msgType={type}
      msgText={message}
    />
  }

  renderNextBtn = () => {
    return <div className="next-container">
      <button className='btn-common next-btn'
        onClick={this.handleNext}
      >Next</button>
    </div>
  }

  checkTranslation = answer => {
    const engWord = this.props.data[this.state.currentWord].eng;
    if (answer === engWord) {
      this.message = this.formMessage('success', 'You are right! Good job!');
      this.props.actions.incrementScore();
    } else {
      this.message = this.formMessage('error', `You are mistaken! Correct answer is ${engWord.toUpperCase()}`);
    }
    this.setState({showMsg: true});
    this.setState({showNext: true});
  }


  handleCheck = answer => {
    const validationResult = Validator.validate(answer,'isEnglish');
    console.log(validationResult.result === false);
    console.log(validationResult.result === true);
    if (validationResult.result === false) {
      this.message = this.formMessage('warning', 'Spelling is incorrect! Please, check once more!');
      this.setState({showMsg: true});
    } else {
      this.checkTranslation(answer);
    }
  }

  handleNext = () => {
    this.props.actions.incrementTotal();
    if (this.state.currentWord < this.props.data.length - 1){
      this.setState({
        currentWord: this.state.currentWord + 1,
        score: this.state.score + 1,
        showNext: false,
        showMsg: false
      });
    } else {
      this.context.router.push('result');
    }
  }

  render () {
    const { isLoading, data } = this.props;
    const wordForCheck = data ? data[this.state.currentWord].rus : '';
    return (
      <Loader loaded={!isLoading}>
        <div className="form-block form-relative">
          <BackToMainComponent />
          <h3>{this.state.currentWord + 1} of {data ? data.length : ''}</h3>
          <TestForm
            onCheck={this.handleCheck}
            onNext={this.handleNext}
            wordForCheck={wordForCheck}
          />
          {this.state.showMsg ? this.message : null}
          {this.state.showNext ? this.nextBtn : null}
        </div>
      </Loader>
    )
  }
}

TestFormContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  const { isLoading, data, error } = state.words;
  return { isLoading, data, error };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(Object.assign({},testActionCreators,{fetchWords}), dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestFormContainer);
