import React from 'react';
import PropTypes from 'prop-types';

const QuizTitle = ({ quizTitle, updateQuizTitle }) => (
  <div className="quiz-title-container mb-4">
    <div className="form-group">
      <div className="form-row">
        <h4>Quiz Title</h4>
        <input
          className="form-control"
          type="text"
          onChange={ event => updateQuizTitle(
            { text: event.target.value })
          }
          value={ quizTitle.text }
        />
      </div>
    </div>
  </div>
);

export default QuizTitle;

QuizTitle.propTypes = {
  quizTitle: PropTypes.shape({ text: PropTypes.string }).isRequired,
  updateQuizTitle: PropTypes.func.isRequired,
};
