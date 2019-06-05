import React from 'react';
import AddAQuestion from './AddAQuestion';
import QuestionBankDisplay from './QuestionBankDisplay';
import './QuestionBank.css'

const QuestionBank = (props) => {

  const questionBankList = props.questions.filter((question) => {
    return question.type == "q_and_a"
  });

  return (
    <div id='question-bank-container'>
    <AddAQuestion addQuestion={props.addQuestion}/>
    <QuestionBankDisplay questionBankList={questionBankList}/>
    </div>
  );

}

export default QuestionBank;
