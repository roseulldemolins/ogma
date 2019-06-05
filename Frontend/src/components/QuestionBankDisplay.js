import React from 'react';
import QuestionCard from './QuestionCard';
import './QuestionCard.css'

const QuestionBankDisplay = (props) => {

  const listOfQuestions = props.questionBankList.map((questionItem, i) => {
    return <QuestionCard
    questionItem={questionItem}
    key={i}
    index={i}
    />
  })

  return(
      <div className="ui six cards">
    {listOfQuestions}
    </div>
  )
}

export default QuestionBankDisplay;
