const currentForm = (state = { id: 1, formType: 'question' }, action) => {
  switch (action.type) {
    case 'CHANGE_FORM':
      return Object.assign({},
        {
          id: action.newCurrent.id,
          formType: action.newCurrent.formType,
        });
    default:
      return state;
  }
};

export default currentForm;
