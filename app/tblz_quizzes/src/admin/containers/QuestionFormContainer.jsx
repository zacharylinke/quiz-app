import { connect } from 'react-redux';
import QuestionForm from '../components/QuestionForm';
import { updateQuestion, updateAnswer, addAnswer, deleteAnswer, toggleCorrect } from '../actions';

const mapStateToProps = state => ({ questions: state.questions, currentForm: state.currentForm });

const mapDispatchToProps = dispatch => ({
  updateQuestion: (questionData) => {
    dispatch(updateQuestion(questionData));
  },
  updateAnswer: (answerData) => {
    dispatch(updateAnswer(answerData));
  },
  addAnswer: (answerData) => {
    dispatch(addAnswer(answerData));
  },
  deleteAnswer: (answerData) => {
    dispatch(deleteAnswer(answerData));
  },
  toggleCorrect: (answerData) => {
    dispatch(toggleCorrect(answerData));
  },
});

const QuestionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionForm);

export default QuestionFormContainer;
