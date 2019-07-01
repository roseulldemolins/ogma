const questionsReducer = (state = {questions: [], options: []}, action) => {
  switch (action.type) {
    case 'LOAD_QUESTIONS_DATA':
      const questionLoad = {...state, questions: [ ...action.questionsData]}
      return questionLoad
    case 'ADD_QUESTION':
      return {...state, questions: [action.newQuestion, ...state.questions]}
    case 'ADD_NEW_STUDY_NOTE':
      return {...state, questions: [...state.questions, action.newStudyNote]}
    case 'UPDATE_FILTER':
      return {...state, options: [...action.filterArray]}
    case 'DELETE_NOTE':
      const newState = {...state, questions: []};
      state.questions.forEach((note) => {
        if(note._id !== action.id){
          newState.questions.push(note)
        }
      })
      return newState;
    default:
      return state
  }
}

export default questionsReducer;
