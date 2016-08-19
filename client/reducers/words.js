import * as actionTypes from '../constants/words';

const initialState = {
  isLoading: false,
  data: null,
  error: ''
};

const words = function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.WORDS_FETCH_START: {
      return Object.assign({}, state, {
        isLoading: true,
        error: ''
      });
    }
    case actionTypes.WORDS_FETCH_SUCCESS: {
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data
      });
    }
    case actionTypes.WORDS_FETCH_FAILURE: {
      return Object.assign({}, state, {
        isLoading: false
      });
    }
    case actionTypes.WORDS_ADD_START: {
      return Object.assign({}, state, {
        isLoading: true,
        error: ''
      });
    }
    case actionTypes.WORDS_ADD_SUCCESS: {
      return Object.assign({}, state, {
        isLoading: false
      });
    }
    case actionTypes.WORDS_ADD_FAILURE: {
      return Object.assign({}, state, {
        isLoading: false
      });
    }
    case actionTypes.WORDS_FETCH_ERROR: {
      return Object.assign({}, state, {
        error: action.error
      });
    }
    default: {
      return state;
    }
  }
}
export default words;
