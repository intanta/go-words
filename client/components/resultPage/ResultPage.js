import React, { PropTypes } from 'react';

// import BackToMainComponent from '../../components/backToMain/BackToMainComponent';
import Wrapper from '../../components/wrapper/Wrapper';

const ResultPage = ({total, correct, message}) => {
  const msg = message ? <h2>{message}</h2> : null;
  return <Wrapper>
    <h1>The test is over! Your score is {correct} out of {total}</h1>
    {msg}
  </Wrapper>
}

ResultPage.propTypes = {
  total: PropTypes.number.isRequired,
  correct: PropTypes.number.isRequired,
  message: PropTypes.string
}

export default ResultPage;
