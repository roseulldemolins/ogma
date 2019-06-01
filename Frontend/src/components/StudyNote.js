import React from 'react';

const StudyNote = (props) => {
  console.log('in single note, logging props', props);
  return(
    <div id='study-note-card'>
    {props.noteItem.study_note_text}
    </div>
  )
}

export default StudyNote;
