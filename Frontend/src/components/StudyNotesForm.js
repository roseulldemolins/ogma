import React, {Component} from 'react';
import { connect } from 'react-redux';

class StudyNotesForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputtedText: ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const newStudyNote = {
      study_note_text: this.state.inputtedText,
      type: "study_note",
      topic: "coding" // TODO: hard-coded topic needs updated when multi-topics are introduced
    }
    // nxt line WORKS, but updates state only, & not the db...
    // this.props.addNewStudyNote(newStudyNote); // replace this line to restore functionality !!!
    // this alt is meant to update db, then state, using thunk:
    console.log('handling submit, logging newStudyNote', newStudyNote);
    this.props.addNew(newStudyNote);
  }

  handleTextChange(evt) {
    this.setState({inputtedText: evt.target.value});
  }

  render() {
    return (
      <div id='study-notes-form-container'>
        <h1>Ogma Study Notes</h1>
        <form onSubmit={this.handleFormSubmit} autoComplete='off'>
          <textarea onChange={this.handleTextChange} rows="4" cols="50">Type a new study note here.</textarea>
          <input type='submit' value='Submit Note' />
          <h4 id="list-divider"className="ui horizontal divider header">Study Notes</h4>
        </form>
      </div>
    )
  }

}

// trial & error here (also see above):
// delete the invocation of this code to restore functionality
const mapDispatchToProps = (dispatch) => {
  return {
    addNew(newStudyNote) {
      console.log('in return, logging newStudyNote', newStudyNote);
      dispatch(() => {
        fetch('http://localhost:3000/questions', {
          method: 'post',
          body: newStudyNote
        })
        .then(res => res.json())
        .then(newStudyNote => {
          dispatch({
            type: 'ADD_NEW_STUDY_NOTE',
            newStudyNote: newStudyNote
          });
        })
      })
    }
  }
}

// old:
// export default StudyNotesForm;
// new:
export default connect(null, mapDispatchToProps)(StudyNotesForm);
