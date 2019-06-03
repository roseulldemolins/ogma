import React from 'react';
import AddAQuestion from '../components/AddAQuestion.js'
import AddATopic from '../components/AddATopic.js'
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (question) => {
      dispatch({
        type: 'ADD_QUESTION',
        question
      })
    },
    addTopic: (topic) => {
      dispatch({
        type: 'ADD_TOPIC',
        topic
      })
    }
  }
}

export default connect(mapStateToProps)(QuestionBank)
