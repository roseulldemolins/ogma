import React from 'react';
import { connect } from 'react-redux';
import './StudyNote.css'

const StudyNote = (props) => {

const handleDelete = () => {
  props.deleteNote(props.noteItem._id);
}


  return(
    <li href="#" className='study-note-card'>
    <p className='study-card-paragraph'>{props.noteItem.study_note_text}</p>
    <button aria-label="delete" onClick={handleDelete} id='study-note-del'>Delete Note</button>
    </li>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote(id){
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

export default connect(null, mapDispatchToProps)(StudyNote);
