const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_QUESTIONS_DATA':
      return [...state, ...action.questionsData]
    case 'ADD_QUESTION':
      return [action.question, ...state]
    case 'ADD_NEW_STUDY_NOTE':
      return [...state, action.newStudyNote]
    default:
      return state
  }
}

export default questionsReducer
