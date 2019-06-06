
import questionsReducer from '../questions_reducer.js'



let questionData;
let newQuestion;
let newStudyNote;



describe('Reducer testing', () => {
  beforeEach(() => {
    questionData = [
      {
        question_text:"What does SQL stand for?",
        answer_text:"Structured Query Language",
        sub_topic:"Database",
        type:"q_and_a",
        topic:"coding"
      }
    ];
    newQuestion = {question_text:'A new question'};

    newStudyNote = {study_note_text:'A new study note'};

  })
  it('should return the initial state', () => {
    expect(questionsReducer(undefined, {})).toEqual([])
  });

  it('should handle LOAD_QUESTIONS_DATA', () => {
    const action = {
      type: 'LOAD_QUESTIONS_DATA',
      questionsData: questionData
    };

    const initialState = []

      expect(questionsReducer(initialState, action)).toEqual(questionData)

  });

  it('should handle ADD_QUESTION', () => {
    const action = {
      type: 'ADD_QUESTION',
      newQuestion: newQuestion
    };
    const updatedState = [
      {question_text:'A new question'},
      {
        question_text:"What does SQL stand for?",
        answer_text:"Structured Query Language",
        sub_topic:"Database",
        type:"q_and_a",
        topic:"coding"
      }


    ];
    const initialState = questionData

    expect(questionsReducer(initialState, action)).toEqual(updatedState)

  });

  it('should handle ADD_NEW_STUDY_NOTE', () => {
    const action = {
      type: 'ADD_NEW_STUDY_NOTE',
      newStudyNote: newStudyNote
    };

    const updatedState = [

      {
        question_text:"What does SQL stand for?",
        answer_text:"Structured Query Language",
        sub_topic:"Database",
        type:"q_and_a",
        topic:"coding"
      },
      {study_note_text:'A new study note'}



    ];

    const initialState = questionData

    expect(questionsReducer(initialState, action)).toEqual(updatedState)



  });

  xit('should handle DELETE_NOTE', () => {

  });
})
