const questionsReducer = (state = {questions: [], options: []}, action) => {
  switch (action.type) {
    case 'LOAD_QUESTIONS_DATA':
      return {...state, [...state.questions, ...action.questionsData]}
    case 'ADD_QUESTION':
      return {...state, [action.newQuestion, ...state.questions]}
    case 'ADD_NEW_STUDY_NOTE':
      return [...state, action.newStudyNote]
    case 'DELETE_NOTE':
      const newState = [];
      state.forEach((note) => {
        if(note._id !== action.id){
          newState.push(note)
        }
      })
      return newState;
    default:
      return state
  }
}

export default questionsReducer;
