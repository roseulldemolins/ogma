import React from 'react';
import QuestionCard from './QuestionCard';
import './QuestionBankDisplay.css'

const QuestionBankDisplay = (props) => {

  const listOfQuestions = props.questionBankList.map((questionItem, i) => {
    return <QuestionCard
    questionItem={questionItem}
    key={i}
    index={i}
    />
  })

  return(
      <div className="ui six cards" id="cards">
    {listOfQuestions}
    </div>
  )
}

export default QuestionBankDisplay;
