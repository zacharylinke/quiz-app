import { connect } from 'react-redux';
import FormNav from '../components/FormNav';
import { addQuestion, changeCurrent, addScore } from '../actions';

const mapStateToProps = state => ({
  questions: state.questions,
  scores: state.scores,
});
const mapDispatchToProps = dispatch => ({
  addQuestion: (id) => {
    dispatch(addQuestion(id));
  },
  changeCurrent: (newCurrent) => {
    dispatch(changeCurrent(newCurrent));
  },
  addScore: (id) => {
    dispatch(addScore(id));
  },
});


const FormNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormNav);

export default FormNavContainer;
