import React from 'react';
import { connect } from 'react-redux';
import './QuestionCard.css'

const QuestionCard = (props) => {

  const handleDelete = () => {
    props.deleteQuestion(props.questionItem._id);
  }

  const learnedQuestion = () => {
    if (props.questionItem.learned === true){
      return <div className='learned'>✔</div>;
    }else{
      return <div className='not-learned'>✘</div>;
    }
  }

  return(
        <div className="card">
          <div className="content">
              <div className="header">{props.questionItem.sub_topic}</div>
              <div className='divider'></div>
            <div className="description">
              <div className='q-card-q-text'>Q: {props.questionItem.question_text}</div>
              <div className='q-card-a-text'>A: {props.questionItem.answer_text}</div>
              <div className='q-card-learned'>Learned: {learnedQuestion()}</div>
            </div>
          </div>
          <button onClick={handleDelete} className='btn btn-primary'>Remove Question</button>
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
