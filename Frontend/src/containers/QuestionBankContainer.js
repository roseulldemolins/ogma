import React from 'react';
import AddAQuestion from '../components/AddAQuestion.js'
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (question) => {
      dispatch({
        type: 'ADD_QUESTION',
        question
      })
    }
  }
}

const QuestionBankContainer = () => {
  return(
    <>
    <AddAQuestion/>
    </>
  )
}

export default connect(mapDispatchToProps)(QuestionBankContainer)
