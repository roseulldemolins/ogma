import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCardContainer from './containers/FlashCardContainer.js';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount(){
    this.props.getQuestions();
    console.log("component did mount")
  };

  render(){
    return (
      <div>
      <h1>Ogma</h1>
      <FlashCardContainer />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestions() {
      dispatch(() => {
        fetch('http://localhost:3000/questions')
        .then(res => res.json())
        .then(questionsData => {
          dispatch({
            type: 'LOAD_QUESTIONS_DATA',
            questionsData: questionsData
          });
        })
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
