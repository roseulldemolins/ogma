import React from 'react';
import StudyNotesForm from './StudyNotesForm';
import StudyNotesDisplay from './StudyNotesDisplay';
import './StudyNote.css'

const StudyNotes = (props) => {

  const studyNoteList = props.questions.filter((question) => {
  return question.type === "study_note"
  });

  return (
    <div id='study-notes-container'>
    <StudyNotesForm addNewStudyNote={props.addNewStudyNote}/>
    <StudyNotesDisplay studyNoteList={studyNoteList}/>
    </div>
  );

}

export default StudyNotes;
