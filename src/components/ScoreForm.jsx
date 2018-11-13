import React from 'react';
import PropTypes from 'prop-types';
// TODO add TinyMCE or equivalent for Description textarea
// import TinyMCEInput from 'react-tinymce-input';

const ScoreForm = ({ currentForm, scores, updateScore }) => (
  <div>
    <div className="form-group">
      <div className="form-row">
        <h4>Score Title</h4>
        <input
          className="form-control"
          type="text"
          onChange={ event => updateScore({ id: currentForm.id, title: event.target.value, field: 'title' }) }
          value={ scores[currentForm.id - 1].title }
        />
      </div>
    </div>
    <div className="form-group">
      <div className="form-row">
        <h4>Description</h4>
        <textarea className="form-control" />
      </div>
    </div>
  </div>
);

export default ScoreForm;

ScoreForm.propTypes = {
  currentForm: PropTypes.shape({ id: PropTypes.number, formType: PropTypes.string }).isRequired,
  scores: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateScore: PropTypes.func.isRequired,
};
