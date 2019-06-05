
import questionsReducer from '../questions_reducer.js'






describe('Reducer testing', () => {
  beforeEach(() => {
    const questionData = [
      {
        question_text:"What does SQL stand for?",
        answer_text:"Structured Query Language",
        sub_topic:"Database",
        type:"q_and_a",
        topic:"coding"
      },
      {
        question_text:"What does CSS stand for?",
        answer_text:"Cascading Style Sheets",
        sub_topic:"CSS",
        type:"q_and_a",
        topic:"coding"
      },
      {
        question_text:"What are JavaScript Data Types?",
        answer_text:"Number, string, boolean, object and undefined",
        sub_topic:"Javascript",
        type:"q_and_a",
        topic:"coding"
      },
      ]
  })
  it('should return the initial state', () => {
    expect(questionsReducer(undefined, {})).toEqual([])
  });

  it('should handle LOAD_QUESTIONS_DATA', () => {
    const action = {
      type: 'LOAD_QUESTIONS_DATA',
      questionsData:questionData
    };

    const initialState = []

      expect(questionsReducer(initialState, questionData)).toEqual([], questionData)

  });

  xit('should handle ADD_QUESTION', () => {

  });

  xit('should handle ADD_NEW_STUDY_NOTE', () => {

  });

  xit('should handle DELETE_NOTE', () => {

  });
})
