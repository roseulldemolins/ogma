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

const QuestionBankContainer = () => {
  return(
    <>
    <AddATopic/>
    <AddAQuestion/>
    </>
  )
}

export default connect(mapDispatchToProps)(QuestionBankContainer)
