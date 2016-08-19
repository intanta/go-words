import React, { PropTypes } from 'react';

import BackToMainComponent from '../../components/backToMain/BackToMainComponent';

const ResultPage = ({total, correct, message}) => {
  const msg = message ? <h2>{message}</h2> : null;
  return <div className='form-block'>
    <BackToMainComponent />
    <h1>The test is over! Your score is {correct} out of {total}</h1>
    {msg}
  </div>
}

ResultPage.propTypes = {
  total: PropTypes.number.isRequired,
  correct: PropTypes.number.isRequired,
  message: PropTypes.string
}

export default ResultPage;
