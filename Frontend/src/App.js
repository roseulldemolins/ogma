import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCardContainer from './containers/FlashCardContainer.js';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount(){
    this.props.getQuestions();
  };

  render(){
    return (
      <div>
      <h1>Ogma</h1>
      <FlashCardContainer
      randomIndex = {Math.floor(Math.random()*Math.floor(this.props.questionsData.length))}
      />
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

const mapStateToProps = (state) => {
  return {
  questionsData: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
