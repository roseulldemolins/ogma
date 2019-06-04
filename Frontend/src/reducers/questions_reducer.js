const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_QUESTIONS_DATA':
      return [...state, ...action.questionsData]
    case 'ADD_QUESTION':
      return [action.question, ...state]
    case 'ADD_NEW_STUDY_NOTE':
      return [...state, action.newStudyNote]
      case 'DELETE_NOTE':
      console.log('action.index in the reducer: ', action.id);
      return [...state.slice(0, action.id), ...state.slice(action.id + 1)]
    default:
      return state
  }
}

export default questionsReducer
