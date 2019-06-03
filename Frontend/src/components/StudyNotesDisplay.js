import React from 'react';
import StudyNote from './StudyNote';

const StudyNotesDisplay = (props) => {

  const listOfNotes = props.studyNoteList.map((noteItem, i) => {
    return <StudyNote
    noteItem={noteItem}
    key={i}
    index={i}
    />
  })

  return(
    <div>
    {listOfNotes}
    </div>
  )
}

export default StudyNotesDisplay;
