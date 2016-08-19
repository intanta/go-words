import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/test';
import { bindActionCreators } from 'redux';
import ResultPage from '../../components/resultPage/ResultPage';

const EVALUATIONS = {
  low: 'Shame on you! Go and learn words!',
  middle: 'Not bad, but can be better!',
  high: 'Well done!'
};

class ResultPageContainer extends React.Component {

  componentWillMount() {
    const percentage = this.getScoreInPercent(this.props.total, this.props.score);
    this.evalMsg = this.getEvaluation(percentage);
  }

  componentWillUnmount() {
    this.props.actions.resetTotal();
    this.props.actions.resetScore();
  }

  getScoreInPercent(total, correct) {
    return correct / total * 100;
  }

  getEvaluation (percentage) {
    let evalMsg = '';
    if (percentage >= 80) {
      evalMsg = EVALUATIONS.high;
    } else if (percentage > 30 && percentage < 80) {
      evalMsg = EVALUATIONS.middle;
    } else {
      evalMsg = EVALUATIONS.low;
    }
    return evalMsg;
  }

  render () {
    return (
      <ResultPage
        total={this.props.total}
        correct={this.props.score}
        message={this.evalMsg}
        />
    )
  }
}

ResultPageContainer.propTypes = {
  total: PropTypes.number,
  score: PropTypes.number
}

const mapStateToProps = (state) => {
  const { test } = state;
  const { total, score } = test;
  return { total, score };
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPageContainer);
