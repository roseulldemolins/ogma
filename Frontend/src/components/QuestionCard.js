import React from 'react';
import { connect } from 'react-redux';
import './QuestionCard.css'

const QuestionCard = (props) => {

  const handleDelete = () => {
    props.deleteQuestion(props.questionItem._id);
  }

  return(
        <div className="card">
          <div className="content">
              <div className="header">{props.questionItem.sub_topic}</div>
            <div className="description">
              <p className='q-card-q-text'>Q: {props.questionItem.question_text}</p>
              <p className='q-card-a-text'>A: {props.questionItem.answer_text}</p>
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
        .then(() =>{
          dispatch({
            type: 'DELETE_NOTE',
            id: id
          })

        })
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(QuestionCard);
