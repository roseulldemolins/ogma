import React from 'react';
import FlashCardContainer from './containers/FlashCardContainer.js';
import HomeContainer from './components/HomeContainer.js';
import PairsContainer from './containers/PairsContainer.js';
import MultiChoiceContainer from './containers/MultiChoiceContainer.js';
import StudyNotesContainer from './containers/StudyNotesContainer.js';
import QuestionBankContainer from './containers/QuestionBankContainer.js';
import NavBar from './components/NavBar.js';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// import './components/NavBar.css';
import './App.css';




class App extends React.Component {

  componentDidMount(){
    this.props.getQuestions();
  };

  render(){
    return (
      <Router>
        <React.Fragment>
          <NavBar />
        <Switch>
          <Route path="/home" component={HomeContainer} />
          <Route
          path="/flash-cards"
          render={(props) => <FlashCardContainer {...props} randomIndex = {Math.floor(Math.random()*Math.floor(this.props.questionsData.length))}/>}
          />
          <Route path="/pairs" component={PairsContainer} />
          <Route path="/multi-choice" component={MultiChoiceContainer} />
          <Route path="/study-notes" component={StudyNotesContainer} />
          <Route path="/question-bank" component={QuestionBankContainer} />
        </Switch>
        </React.Fragment>
      </Router>
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
