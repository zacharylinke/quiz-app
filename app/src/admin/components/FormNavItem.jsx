import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FormNavItem = ({
  items, text, currentForm, id, deleteQuestion, deleteScore, changeCurrent, itemType,
}) => {
  const elClass = id === currentForm.id && itemType === currentForm.formType ? 'form-nav-item active' : 'form-nav-item';
  const label = itemType === 'question' ? `Question ${id}` : items[id - 1].label;
  let deleteBtn = null;
  let showDelete = 1;
  const numItems = items.length;
  if (itemType === 'score') {
    showDelete = 2;
  }
  if (numItems > showDelete) {
    const currentId = id === numItems ? id - 1 : id;
    deleteBtn = (
      <div
        className="delete-item"
        onClick={ (e) => {
          if (itemType === 'question') {
            deleteQuestion(id);
          } else if (itemType === 'score') {
            deleteScore(id);
          }
          changeCurrent({ id: currentId, formType: itemType });
          e.stopPropagation();
        } }
        onKeyDown={ (e) => {
          if (itemType === 'question') {
            deleteQuestion(id);
          } else if (itemType === 'score') {
            deleteScore(id);
          }
          changeCurrent({ id: currentId, formType: itemType });
          e.stopPropagation();
        } }
      >
        <FontAwesomeIcon className="fa-2x" icon={ ['far', 'trash-alt'] } />
      </div>
    );
  }
  return (
    <div
      className={ elClass }
      onClick={ () => changeCurrent({ id, formType: itemType }) }
      onKeyDown={ () => changeCurrent({ id, formType: itemType }) }
    >
      <div>{ label }</div>
      <div>{ text.length > 0 ? text : 'untitled' }</div>
      <div className="selection-border" />
      { deleteBtn }
    </div>
  );
};

export default FormNavItem;

FormNavItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  currentForm: PropTypes.shape({ id: PropTypes.number, formType: PropTypes.string }).isRequired,
  id: PropTypes.number.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
  deleteScore: PropTypes.func.isRequired,
  changeCurrent: PropTypes.func.isRequired,
};
