import { connect } from 'react-redux';
import QuizTitle from '../components/QuizTitle';
import { updateQuizTitle } from '../actions';

const mapStateToProps = state => ({ quizTitle: state.quizTitle });

const mapDispatchToProps = dispatch => ({
  updateQuizTitle: (quizTitleData) => {
    dispatch(updateQuizTitle(quizTitleData));
  },
});

const QuizTitleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuizTitle);

export default QuizTitleContainer;
