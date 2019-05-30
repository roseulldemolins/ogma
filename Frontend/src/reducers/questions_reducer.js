const questionsReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_QUESTIONS_DATA':
      return [...state, ...action.questionsData]
    
    default:
      return state
  }
}

export default questionsReducer
