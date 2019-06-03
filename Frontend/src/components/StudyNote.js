import React from 'react';
import { connect } from 'react-redux';

const StudyNote = (props) => {

const handleDelete = () => {
  console.log('logging', props.index);
  props.deleteNote(props.index);
}


  return(
    <div id='study-note-card'>
    {props.noteItem.study_note_text}
    <button onClick={handleDelete} id='study-note-del'>Delete Note</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote(index){
      console.log('delete', index);
      dispatch({
        type: 'DELETE_NOTE',
        index: index
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(StudyNote);
