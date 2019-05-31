import React from 'react';
import StudyNotes from '../components/StudyNotes';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    questions: state
  }
};

const mapDispatchToProps = (dispatch) => ({
  addNewStudyNote(newStudyNote) {
    dispatch({
      type: 'ADD_NEW_STUDY_NOTE',
      newStudyNote
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(StudyNotes)
