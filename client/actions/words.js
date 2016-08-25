import * as actionTypes from '../constants/words';
import * as api from '../api/index';

export function startFetching() {
  return { type: actionTypes.WORDS_FETCH_START };
}

export function fetchSuccess(data) {
  return { type: actionTypes.WORDS_FETCH_SUCCESS, data };
}

export function stopFetching() {
  return { type: actionTypes.WORDS_FETCH_FAILURE };
}

export function addError(error) {
  return { type: actionTypes.WORDS_FETCH_ERROR, error };
}

export function fetchWords() {
  return (dispatch) => {
    dispatch(startFetching());
    api.getWords()
      .then((response) => {
        if (response.status === 200) {
            dispatch(fetchSuccess(response.data));
          } else if (response.status === 204) {
            dispatch(addError('No words found in database! Please, add new words at first!'));
            dispatch(stopFetching());
          } else {
          const errMsg = 'Unknown error during data request';
          dispatch(addError(errMsg));
          dispatch(stopFetching());
        }
      })
      .catch((error) => {
        dispatch(addError(error.message));
        dispatch(stopFetching());
      })
  }
}

export function startAdding() {
  return {  type: actionTypes.WORDS_ADD_START };
}

export function addFailure() {
  return { type: actionTypes.WORDS_ADD_FAILURE };
}

export function addSuccess() {
  return { type: actionTypes.WORDS_ADD_SUCCESS};
}

export function addWord(data) {
  return (dispatch) => {
    dispatch(startAdding());
    api.addWord(data)
      .then(response => {
        if(response.status === 200) {
          dispatch(addSuccess());
        } else {
            const errMsg = 'Unknown error during posting data';
            dispatch(addError(errMsg));
            dispatch(addFailure());
        }
      })
      .catch(error => {
        dispatch(addError(error));
        dispatch(addFailure());
      })
  }
}
