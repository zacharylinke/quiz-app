const defaultAnswers = [
  { id: 1, text: '', correct: false },
  { id: 2, text: '', correct: false },
];

const defaultQuestion = [{
  id: 1,
  text: '',
  answers: defaultAnswers,
}];

const newAnswer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ANSWER':
      return {
        id: action.attrs.answerId,
        text: '',
        correct: false,
      };
    default:
      return state;
  }
};

const newQuestion = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return {
        id: action.id,
        text: '',
        answers: defaultAnswers,
      };
    // case 'UPDATE_QUESTION':
    //   return {
    //     id: action.id,
    //     text: action.text,
    //   };
    default:
      return state;
  }
};

const questions = (state = defaultQuestion, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return [
        ...state,
        newQuestion(undefined, action),
      ];
    case 'DELETE_QUESTION': {
      const deletedQuestion = state.filter(question => question.id !== action.id);
      return deletedQuestion.map((question, index) => {
        let questionObj = question;
        questionObj = Object.assign({}, question, {
          id: index + 1,
        });
        return questionObj;
      });
    }
    case 'UPDATE_QUESTION':
      return state.map((question, index) => {
        if (index + 1 === action.attrs.id) {
          return Object.assign({}, question, {
            id: action.attrs.id,
            text: action.attrs.text,
          });
        }
        return question;
      });
    case 'ADD_ANSWER':
      return state.map((question, index) => {
        if (index + 1 === action.attrs.questionId) {
          const answerAdded = [
            ...question.answers,
            newAnswer(undefined, action),
          ];
          return Object.assign({}, question, {
            id: question.id,
            text: question.text,
            answers: answerAdded,
          });
        }
        return question;
      });
    case 'DELETE_ANSWER':
      return state.map((question, index) => {
        if (index + 1 === action.attrs.questionId) {
          let answerDeleted = question
            .answers
            .filter(answer => answer.id !== action.attrs.answerId);
          answerDeleted = answerDeleted.map((answer, index2) => {
            let answerObj = answer;
            answerObj = Object.assign({}, answer, {
              id: index2 + 1,
              text: answer.text,
            });
            return answerObj;
          });
          return Object.assign({}, question, {
            id: question.id,
            text: question.text,
            answers: answerDeleted,
          });
        }
        return question;
      });
    case 'UPDATE_ANSWER':
      return state.map((question, index) => {
        let questionObj = question;
        let quesAnswers = question.answers;
        if (index + 1 === action.attrs.questionId) {
          quesAnswers = question.answers.map((answer, index2) => {
            let answerObj = answer;
            if (index2 + 1 === action.attrs.answerId) {
              answerObj = Object.assign({}, answer, {
                id: action.attrs.answerId,
                text: action.attrs.answerText,
              });
            }
            return answerObj;
          });
          questionObj = Object.assign({}, question, {
            id: question.id,
            text: question.text,
            answers: quesAnswers,
          });
        }
        return questionObj;
      });
    case 'TOGGLE_CORRECT':
      return state.map((question, index) => {
        let questionObj = question;
        let quesAnswers = question.answers;
        if (index + 1 === action.attrs.questionId) {
          quesAnswers = question.answers.map((answer, index2) => {
            let answerObj = answer;
            if (index2 + 1 === action.attrs.answerId) {
              answerObj = Object.assign({}, answerObj, {
                correct: !answerObj.correct,
              });
            }
            return answerObj;
          });
          questionObj = Object.assign({}, question, {
            id: question.id,
            text: question.text,
            answers: quesAnswers,
          });
        }
        return questionObj;
      });
    default:
      return state;
  }
};

export default questions;
