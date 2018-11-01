import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Answer =
  ({ currentQuestion, currentForm, updateAnswer, answer, deleteAnswer, toggleCorrect }) => {
    let deleteBtn = null;
    if (currentQuestion.answers.length > 2) {
      deleteBtn =
        (<span
          className="delete-answer"
          onClick={ () => deleteAnswer({ questionId: currentQuestion.id, answerId: answer.id }) }
        >Delete</span>);
    }
    const correctClass = !answer.correct ? 'fa-circle' : 'fa-check-circle';
    const Food = (
      <div>
        Favorite Food: <FontAwesomeIcon icon={ ['far', 'circle'] } />
      </div>
    );
    return (
      <div className="answer">
        { Food }
        <i
          className={ `correct far ${correctClass}` }
          aria-hidden="true"
          onClick={ () => toggleCorrect({
            questionId: currentForm.id,
            answerId: answer.id,
          }) }
        />
        <input
          className="large-text"
          placeholder={ `Answer ${answer.id}` }
          onChange={ event => updateAnswer({
            questionId: currentForm.id,
            answerId: answer.id,
            answerText: event.target.value,
          }) }
          type="text"
          value={ currentQuestion.answers[answer.id - 1].text }
        />
        { deleteBtn }
      </div>
    );
  };

export default Answer;

Answer.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }).isRequired,
  currentQuestion: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  currentForm: PropTypes.shape({
    id: PropTypes.number,
    formType: PropTypes.string,
  }).isRequired,
  updateAnswer: PropTypes.func.isRequired,
  deleteAnswer: PropTypes.func.isRequired,
  toggleCorrect: PropTypes.func.isRequired,
};
