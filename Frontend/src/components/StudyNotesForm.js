import React, {Component} from 'react';

class StudyNotesForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputtedText: ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const newStudyNote = {
      study_note_text: this.state.inputtedText,
      type: "study_note",
      topic: "coding" // TODO: hard coded topic needs updated when multi-topics are introduced
    }
    this.props.addNewStudyNote(newStudyNote);
  }

  handleTextChange() {

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

export default StudyNotesForm;
