import { combineReducers } from 'redux';
import questions from './questions';
import currentForm from './currentForm';
import scores from './scores';

const quizAdmin = combineReducers({
  questions,
  currentForm,
  scores,
});

export default quizAdmin;
