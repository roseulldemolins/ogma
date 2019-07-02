const criteria = require('../helpers/Criteria.js');

const questionsReducer = (state = {questions: [], options: []}, action) => {
  switch (action.type) {
    case 'LOAD_QUESTIONS_DATA':
      const questionLoad = {...state, questions: [...action.questionsData]}
      return questionLoad
    case 'UPDATE_FILTER':
      if(state.options.length){
        const newFilter = criteria(state.options, action.filterArray);
        return {...state, options: [...newFilter]}
      } return {...state, options: [...action.filterArray]}
    default:
      return state
  }
}

export default questionsReducer;
