import { connect } from 'react-redux';
import FormNavItem from '../components/FormNavItem';
import { changeCurrent, deleteQuestion, deleteScore } from '../actions/';

const mapStateToProps = state => ({
  questions: state.questions,
  currentForm: state.currentForm,
  scores: state.scores,
});
const mapDispatchToProps = dispatch => ({
  changeCurrent: (newCurrent) => {
    dispatch(changeCurrent(newCurrent));
  },
  deleteQuestion: (id) => {
    dispatch(deleteQuestion(id));
  },
  deleteScore: (id) => {
    dispatch(deleteScore(id));
  },
});


const FormNavItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormNavItem);

export default FormNavItemContainer;
