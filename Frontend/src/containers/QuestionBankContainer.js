import QuestionBank from '../components/QuestionBank';
import { connect } from 'react-redux';

const filteringMechanism = require('../helpers/FilteringMechanism.js');

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
};

const mapDispatchToProps = (dispatch) => ({
  addQuestion(newQuestion) {
    dispatch({
      type: 'ADD_QUESTION',
      newQuestion: newQuestion
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionBank)
