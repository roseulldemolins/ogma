const questionsReducer = (state = {questions: [], options: []}, action) => {
  switch (action.type) {
    case 'LOAD_QUESTIONS_DATA':
      const questionLoad = {...state, questions: [...action.questionsData]}
      return questionLoad
    case 'UPDATE_FILTER':
      return {...state, options: [...action.filterArray]}
    default:
      return state
  }
}

export default questionsReducer;
