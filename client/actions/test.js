import * as actionTypes from '../constants/test';

export function incrementScore() {
  return { type: actionTypes.TEST_SCORE_INCREMENT };
}

export function incrementTotal() {
  return { type: actionTypes.TEST_TOTAL_INCREMENT };
}

export function resetTotal() {
  return { type: actionTypes.TEST_TOTAL_RESET };
}

export function resetScore() {
  return { type: actionTypes.TEST_SCORE_RESET };
}
