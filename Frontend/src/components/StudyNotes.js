import React from 'react';
import StudyNotesForm from './StudyNotesForm';
import StudyNotesDisplay from './StudyNotesDisplay';

const StudyNotes = (props) => {

  console.log(props.questions);

  const studyNoteList = [];

  for (var i = 0; i < props.questions.length; i++) {
    console.log(props.questions[i].type);
    if (props.questions[i].type == 'q_and_a') {
      studyNoteList.push(props.questions[i])
    }
  }

  console.log(studyNoteList);

  // const studyNoteList = props.questions.filter((question) => {question.type == "study_note"});

  return (
    <div id='study-notes'>
    <StudyNotesForm addNewStudyNote={props.addNewStudyNote()}/>
    <StudyNotesDisplay studyNoteList={studyNoteList}/>
    </div>
  );

}

export default StudyNotes;

// <StudyNotesDisplay studyNoteList={studyNoteList}/>
