import React from 'react';
import StudyNotesForm from './StudyNotesForm';
import StudyNotesDisplay from './StudyNotesDisplay';

const StudyNotes = (props) => {

  // const studyNoteList = [];
  //
  // for (var i = 0; i < props.questions.length; i++) {
  //   if (props.questions[i].type === 'study_note') {
  //     studyNoteList.push(props.questions[i])
  //   }
  // }
// console.log(props);
  const studyNoteList = props.questions.filter((question) => {
  return question.type == "study_note"
  });

  return (
    <div id='study-notes'>
    <StudyNotesForm addNewStudyNote={props.addNewStudyNote}/>
    <StudyNotesDisplay studyNoteList={studyNoteList}/>
    </div>
  );

}

export default StudyNotes;
