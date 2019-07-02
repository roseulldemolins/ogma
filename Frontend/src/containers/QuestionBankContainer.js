import QuestionBank from '../components/QuestionBank';
import { connect } from 'react-redux';

const filteringMechanism = require('../helpers/FilteringMechanism.js');

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
};

const mapDispatchToProps = (dispatch) => ({
  addQuestion(data) {
    dispatch(() => {
      fetch('http://localhost:3000/questions', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
      }
      )
      .then(res => res.json())
      .then(questionsData => {
        dispatch({
          type: 'LOAD_QUESTIONS_DATA',
          questionsData
        })
        dispatch({
          type: 'UPDATE_FILTER',
          filterArray: filteringMechanism(questionsData)
          })
      })
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionBank)
