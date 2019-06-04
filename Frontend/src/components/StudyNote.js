import React from 'react';
import { connect } from 'react-redux';
import './StudyNote.css'

const StudyNote = (props) => {

const handleDelete = () => {
  console.log('delete button clicked on index: ', props.noteItem._id);
  props.deleteNote(props.noteItem._id);
}


  return(
    <li href="#" className='study-note-card'>
    <p className='study-card-paragraph'>{props.noteItem.study_note_text}</p>
    <button onClick={handleDelete} id='study-note-del'>Delete Note</button>
    </li>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote(id){
      console.log('delete action dispatched with index: ', id);
      dispatch(() => {
        fetch(`http://localhost:3000/questions/${id}`, {
          method: 'delete'
        })
        .then(res => res.json())
        .then(response =>{
          dispatch({
            type: 'DELETE_NOTE',
            id: id
          })

        })
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(StudyNote);
