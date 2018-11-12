const quizTitle = (state = { text: '' }, action) => {
  switch (action.type) {
    case 'UPDATE_QUIZ_TITLE':
      return Object.assign({}, {
        text: action.attrs.text,
      });
    default:
      return state;
  }
};

export default quizTitle;
