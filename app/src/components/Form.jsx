import React from 'react';
import PropTypes from 'prop-types';
import QuestionFormContainer from '../containers/QuestionFormContainer';
import ScoreFormContainer from '../containers/ScoreFormContainer';

const Form = ({ currentForm }) => {
  let displayForm;
  switch (currentForm.formType) {
    case 'question':
      displayForm = <QuestionFormContainer />;
      break;
    case 'score':
      displayForm = <ScoreFormContainer />;
      break;
    default:
      displayForm = <QuestionFormContainer />;
  }
  return (
    <div className="quiz-form">{ displayForm }</div>
  );
};

export default Form;

Form.propTypes = {
  currentForm: PropTypes.shape({ id: PropTypes.number, formType: PropTypes.string }).isRequired,
};
