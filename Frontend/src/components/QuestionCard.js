import React from 'react';
import { connect } from 'react-redux';
import './QuestionCard.css'

const QuestionCard = (props) => {

  const handleDelete = () => {
    props.deleteQuestion(props.questionItem._id);
  }

  const learnedQuestion = () => {
    if (props.questionItem.learned === true){
      return '✔';
    }else{
      return '✘';
    }
  }

  return(
        <div className="card">
          <div className="content">
              <div className="header">{props.questionItem.sub_topic}</div>
            <div className="description">
              <p className='q-card-q-text'>Q: {props.questionItem.question_text}</p>
              <p className='q-card-a-text'>A: {props.questionItem.answer_text}</p>
              <p className='q-card-learned'>Learned: {learnedQuestion()}</p>
            </div>
          </div>
          <button onClick={handleDelete} id='question-card-del'>Remove Question</button>
        </div>
  )

}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteQuestion(id){
      dispatch(() => {
        fetch(`http://localhost:3000/questions/${id}`, {
          method: 'delete'
        })
        .then(res => res.json())
        .then((questionsData) =>{
          dispatch({
            type: 'LOAD_QUESTIONS_DATA',
            questionsData
          })

        })
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(QuestionCard);
