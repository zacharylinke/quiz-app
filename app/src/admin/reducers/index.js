import { combineReducers } from 'redux';
import currentForm from './currentForm';
import questions from './questions';
import quizTitle from './quizTitle';
import scores from './scores';


const quizAdmin = combineReducers({
  currentForm,
  questions,
  quizTitle,
  scores,
});

export default quizAdmin;
