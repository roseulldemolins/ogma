
import questionsReducer from '../questions_reducer.js'






describe('Reducer testing', () => {
  beforeEach(() => {

  })
  it('should return the initial state', () => {
    expect(questionsReducer(undefined, {})).toEqual([])
  });

  xit('should handle LOAD_QUESTIONS_DATA', () => {
    const startFetch = {
      type: action.LOAD_QUESTIONS_DATA
    };

      expect(questionsReducer({}, startFetch)).toEqual({})

  });

  xit('should handle ADD_QUESTION', () => {

  });

  xit('should handle ADD_NEW_STUDY_NOTE', () => {

  });

  xit('should handle DELETE_NOTE', () => {

  });
})
