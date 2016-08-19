import * as actionTypes from '../constants/test';

const initialState = {
  total: 0,
  score: 0
};

const test = function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TEST_TOTAL_INCREMENT: {
      let newTotal = state.total + 1;
      return Object.assign({}, state, { total: newTotal });
    }
    case actionTypes.TEST_SCORE_INCREMENT: {
      let newScore = state.score + 1;
      return Object.assign({}, state, { score: newScore });
    }
    case actionTypes.TEST_TOTAL_RESET: {
      return Object.assign({}, state, { total: 0 });
    }
    case actionTypes.TEST_SCORE_RESET: {
      return Object.assign({}, state, { score: 0 });
    }
    default: {
      return state;
    }
  }
}
export default test;
