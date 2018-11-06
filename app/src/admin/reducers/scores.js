const initScores = [
  { id: 1, label: 'score 0% - 50%', title: '', description: '', low: 0, high: 50 },
  { id: 2, label: 'score 50% - 100%', title: '', description: '', low: 50, high: 100 },
];

const updatedScores = (scores) => {
  const base = Math.trunc(100 / scores.length);
  return scores.map((score, index) => {
    let newVals = {};
    if (index === 0) {
      newVals = { label: `score 0% - ${base}%`, low: 0, high: base };
    } else if (index === scores.length - 1) {
      newVals = { label: `score ${base * index}% - 100%`, low: 100 - base, high: 100 };
    } else {
      newVals = {
        label: `score ${base * index}% - ${base * (index + 1)}%`,
        low: base * (index + 1),
        high: base * (index + 2),
      };
    }
    const newScore = Object.assign({}, score, newVals);

    return newScore;
  });
};

const newScore = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SCORE':
      return {
        id: action.id,
        label: '',
        title: '',
        description: '',
        low: null,
        high: null,
      };
    default:
      return state;
  }
};

const scores = (state = initScores, action) => {
  switch (action.type) {
    case 'UPDATE_SCORE':
      return state.map((score, index) => {
        if (index + 1 === action.attrs.id) {
          if (action.attrs.field === 'title') {
            return Object.assign({}, score, {
              title: action.attrs.title,
            });
          } else if (action.attrs.field === 'description') {
            return Object.assign({}, score, {
              description: action.attrs.description,
            });
          }
        }
        return score;
      });
    case 'ADD_SCORE': {
      const addedScore = [
        ...state,
        newScore(undefined, action),
      ];
      return updatedScores(addedScore);
    }
    case 'DELETE_SCORE': {
      const deletedScore = state.filter(score => score.id !== action.id);
      const newScores = deletedScore.map((score, index) => {
        let scoreObj = score;
        scoreObj = Object.assign({}, score, {
          id: index + 1,
        });
        return scoreObj;
      });
      return updatedScores(newScores);
    }
    default:
      return state;
  }
};

export default scores;
