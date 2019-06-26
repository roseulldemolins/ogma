import React, {Component} from 'react';
import { connect } from 'react-redux';
import './StudyNotesForm.css';

class StudyNotesForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputtedText: null,
      defaultText: Date.now()
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
    this.props.addNew(newStudyNote);
    this.setState({inputtedText: ""});
  }

  handleTextChange(evt) {
    this.setState({inputtedText: evt.target.value});
  }

  render() {
    return (
      <div id='study-notes-form-container'>
        <form onSubmit={this.handleFormSubmit} autoComplete='off'>
          <textarea
            id='study-note-input'
            onChange={this.handleTextChange}
            rows="2" cols="50"
            value={this.state.inputtedText}
            placeholder='Type a new study note here...'
          >
          {this.state.inputtedText}
          </textarea>
          <input id='submit-study-note' type='submit' value='Submit Note' />
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    addNew(newStudyNote) {
      dispatch(() => {
        fetch('http://localhost:3000/questions', {
          method: 'post',
          body: JSON.stringify(newStudyNote),
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(response => {
          newStudyNote._id = response;
          dispatch({
            type: 'ADD_NEW_STUDY_NOTE',
            newStudyNote: newStudyNote
          });
        })
      })
    }

  }
}

export default connect(null, mapDispatchToProps)(StudyNotesForm);
