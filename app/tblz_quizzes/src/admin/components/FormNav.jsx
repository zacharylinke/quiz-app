import React from 'react';
import PropTypes from 'prop-types';
import FormNavItemContainer from '../containers/FormNavItemContainer';

const FormNav = ({ questions, changeCurrent, scores, addQuestion, addScore }) =>
  <div className="quiz-form-nav">
    <div className="questions-tray tray">
      { questions.map(question =>
        <FormNavItemContainer
          items={ questions }
          itemType="question"
          id={ question.id }
          key={ question.id.toString() }
          text={ question.text }
        />,
      ) }
      <div
        className="add-new"
        tabIndex={ 0 }
        onClick={ () => {
          const newId = questions.length + 1;
          addQuestion(newId);
          changeCurrent({ id: newId, formType: 'question' });
        } }
      ><i className="dashicons dashicons-plus-alt" /></div>
    </div>
    <div className="scores-tray tray">
      { scores.map(score =>
        <FormNavItemContainer
          items={ scores }
          itemType="score"
          id={ score.id }
          key={ score.id.toString() }
          text={ score.title }
        />,
      ) }
      <div
        className="add-new"
        tabIndex={ 0 }
        onClick={ () => {
          const newScoreId = scores.length + 1;
          addScore(newScoreId);
          changeCurrent({ id: newScoreId, formType: 'score' });
        } }
      ><i className="dashicons dashicons-plus-alt" /></div>
    </div>
  </div>;

export default FormNav;

FormNav.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.object).isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  addQuestion: PropTypes.func.isRequired,
  addScore: PropTypes.func.isRequired,
  changeCurrent: PropTypes.func.isRequired,
};

