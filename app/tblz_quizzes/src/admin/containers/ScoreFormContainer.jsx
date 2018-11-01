import { connect } from 'react-redux';
import ScoreForm from '../components/ScoreForm';
import { updateScore } from '../actions/';

const mapStateToProps = state => ({ currentForm: state.currentForm, scores: state.scores });

const mapDispatchToProps = dispatch => ({
  updateScore: (scoreData) => {
    dispatch(updateScore(scoreData));
  },
});

const ScoreFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScoreForm);

export default ScoreFormContainer;
