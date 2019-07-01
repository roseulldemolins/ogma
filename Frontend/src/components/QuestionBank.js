import React, { Component } from 'react';
import AddAQuestion from './AddAQuestion';
import QuestionBankDisplay from './QuestionBankDisplay';
import './QuestionBank.css'

class QuestionBank extends Component{
  constructor(props){
    super(props)
    this.state = {
      questionBankList: this.getQuestionBank()
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.questions !== prevProps.questions)
    this.setState({
      questionBankList: this.getQuestionBank()
    })
  }

  getQuestionBank(){
    return this.props.questions.filter((question) => {
      return question.type === "q_and_a"
    })
  }

  render(){
    return(
      <div id='question-bank-container'>
        <AddAQuestion
        addQuestion={this.props.addQuestion}
        />
        <QuestionBankDisplay questionBankList={this.state.questionBankList}/>
      </div>
    )
  }
}

export default QuestionBank;
