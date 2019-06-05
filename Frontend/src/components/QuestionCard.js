import React from 'react';
import { connect } from 'react-redux';
import './QuestionCard.css'

const QuestionCard = (props) => {

  const handleDelete = () => {
    props.deleteQuestion(props.questionItem._id);
  }

  return(
    <li href="#" className='question-card'>
    <p className='q-card-sub-topic'>Sub Topic: {props.questionItem.sub_topic}</p>
    <p className='q-card-q-text'>Q: {props.questionItem.question_text}</p>
    <p className='q-card-a-text'>A: {props.questionItem.answer_text}</p>
    <button onClick={handleDelete} id='question-card-del'>Remove Question</button>
    </li>
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
