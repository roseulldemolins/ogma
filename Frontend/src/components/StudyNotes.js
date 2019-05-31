import React from 'react';
import StudyNotesForm from './StudyNotesForm';
import StudyNotesDisplay from './StudyNotesDisplay';

const StudyNotes = (props) => {

  const studyNotes = props.filter((question) => {question.type == "study_note"});

  return (
    <div id='study-notes'>
    <StudyNotesForm addNewStudyNote={props.addNewStudyNote()}/>
    <StudyNotesDisplay studyNotes={studyNotes}/>
    </div>
  );

}

export default StudyNotes;
