import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

const QuestionForm =
  ({ questions, currentForm, updateQuestion, updateAnswer,
    addAnswer, deleteAnswer, toggleCorrect }) => {
    const currentQuestion = questions[currentForm.id - 1];
    return (
      <div>
        <h4>Question</h4>
        <input
          className="large-text question"
          type="text"
          onChange={ event => updateQuestion(
            { id: currentForm.id, text: event.target.value })
          }
          value={ questions[currentForm.id - 1].text }
        />
        <h4>Answers</h4>
        { currentQuestion.answers.map(answer =>
          <Answer
            key={ answer.id }
            answer={ answer }
            currentQuestion={ currentQuestion }
            currentForm={ currentForm }
            updateAnswer={ updateAnswer }
            deleteAnswer={ deleteAnswer }
            toggleCorrect={ toggleCorrect }
          />,
        ) }
        <div
          className="btn-add-answer"
          onClick={ () => {
            const newAnswerId = currentQuestion.answers.length + 1;
            addAnswer({
              questionId: currentForm.id,
              answerId: newAnswerId,
            });
          } }
        >Add an answer</div>
      </div>
    );
  };

export default QuestionForm;

QuestionForm.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentForm: PropTypes.shape({ id: PropTypes.number, formType: PropTypes.string }).isRequired,
  updateQuestion: PropTypes.func.isRequired,
  updateAnswer: PropTypes.func.isRequired,
  addAnswer: PropTypes.func.isRequired,
  deleteAnswer: PropTypes.func.isRequired,
  toggleCorrect: PropTypes.func.isRequired,
};
