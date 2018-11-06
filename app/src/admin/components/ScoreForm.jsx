import React from 'react';
import PropTypes from 'prop-types';
import TinyMCEInput from 'react-tinymce-input';

const ScoreForm = ({ currentForm, scores, updateScore }) =>
  <div>
    <h4>Title</h4>
    <input
      className="large-text"
      type="text"
      onChange={ event => updateScore({ id: currentForm.id, title: event.target.value, field: 'title' }) }
      value={ scores[currentForm.id - 1].title }
    />
    <h4>Description</h4>
    <div className="score-description">
      <TinyMCEInput
        value={ scores[currentForm.id - 1].description }
        tinymceConfig={ {
          plugins: 'wplink image',
          toolbar: 'bold italic underline | numlist bullist | link',
          statusbar: false,
          menubar: false,
          border: '1 1 1 1',
        } }
        onChange={ event => updateScore({ id: currentForm.id, description: event, field: 'description' }) }
      />
    </div>
  </div>;

export default ScoreForm;

ScoreForm.propTypes = {
  currentForm: PropTypes.shape({ id: PropTypes.number, formType: PropTypes.string }).isRequired,
  scores: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateScore: PropTypes.func.isRequired,
};
