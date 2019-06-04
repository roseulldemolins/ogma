import React from 'react';
import StudyNote from './StudyNote';
import './StudyNote.css'

const StudyNotesDisplay = (props) => {

  const listOfNotes = props.studyNoteList.map((noteItem, i) => {
    return <StudyNote
    noteItem={noteItem}
    key={i}
    index={i}
    />
  })

  return(
    <ul id='study-note-list'>
    {listOfNotes}
    </ul>
  )
}

export default StudyNotesDisplay;
