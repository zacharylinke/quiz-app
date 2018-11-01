export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';
export const DELETE_QUESTION = 'DELETE_QUESTION';
export const UPDATE_ANSWER = 'UPDATE_ANSWER';
export const ADD_ANSWER = 'ADD_ANSWER';
export const DELETE_ANSWER = 'DELETE_ANSWER';
export const CHANGE_FORM = 'CHANGE_FORM';
export const TOGGLE_CORRECT = 'TOGGLE_CORRECT';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const ADD_SCORE = 'ADD_SCORE';
export const DELETE_SCORE = 'DELETE_SCORE';

export function updateQuestion(attrs) {
  return { type: UPDATE_QUESTION, attrs };
}

export function addQuestion(id) {
  return { type: ADD_QUESTION, id };
}

export function deleteQuestion(id) {
  return { type: DELETE_QUESTION, id };
}

export function addAnswer(attrs) {
  return { type: ADD_ANSWER, attrs };
}

export function deleteAnswer(attrs) {
  return { type: DELETE_ANSWER, attrs };
}

export function updateAnswer(attrs) {
  return { type: UPDATE_ANSWER, attrs };
}

export function changeCurrent(newCurrent) {
  return { type: CHANGE_FORM, newCurrent };
}

export function toggleCorrect(attrs) {
  return { type: TOGGLE_CORRECT, attrs };
}

export function updateScore(attrs) {
  return { type: UPDATE_SCORE, attrs };
}

export function addScore(id) {
  return { type: ADD_SCORE, id };
}

export function deleteScore(id) {
  return { type: DELETE_SCORE, id };
}
